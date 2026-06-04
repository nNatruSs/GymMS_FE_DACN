import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AdminRoleItem,
  AdminUserListItem,
  AdminTrainerPayload,
  AdminUserPayload,
  AdminUserService,
} from '../../services/admin-user.service';
import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';

@Component({
  selector: 'app-admin-user-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent {
  private fb = inject(FormBuilder);
  private adminUserService = inject(AdminUserService);
  private confirmDialog = inject(ConfirmDialogService);

  loading = true;
  creating = false;
  updating = false;
  deleting = false;
  detailLoading = false;
  assigningRole = false;
  removingRoleId: string | null = null;

  errorMessage = '';
  successMessage = '';

  users: AdminUserListItem[] = [];
  filteredUsersByRole: AdminUserListItem[] | null = null;
  availableRoles: AdminRoleItem[] = [];
  selectedRoleFilterId = '';
  page = 1;
  limit = 10;
  totalPages = 1;
  totalDocs = 0;
  hasNext = false;
  hasPrev = false;

  showCreateModal = false;
  showDetailModal = false;
  selectedUser: AdminUserListItem | null = null;
  selectedAssignRoleIds: string[] = [];

  createForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['MEMBER', Validators.required],
    phone: ['', Validators.required],
    gender: ['male', Validators.required],
    dob: ['', Validators.required],
    address: [''],
    password: ['SecurePass@123'],
    ptSessionPrice60: [250000],
    specialization: [''],
    experienceYears: [0],
    biography: [''],
    certifications: [''],
    areasOfExpertise: [''],
  });

  editForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    gender: ['male', Validators.required],
    dob: ['', Validators.required],
    address: [''],
    status: ['active', Validators.required],
    role: ['MEMBER', Validators.required],
    password: [''],
    ptSessionPrice60: [250000],
    specialization: [''],
    experienceYears: [0],
    biography: [''],
    certifications: [''],
    areasOfExpertise: [''],
  });

  ngOnInit(): void {
    this.loadRoleOptions();
    this.loadUsers(1);
  }

  get displayedUsers(): AdminUserListItem[] {
    return this.filteredUsersByRole ?? this.users;
  }

  get roleNamesForSelect(): string[] {
    const defaults = ['MEMBER', 'USER', 'TRAINER', 'ADMIN', 'STAFF'];
    const dynamic = this.availableRoles.map((role) => role.name).filter(Boolean);
    return Array.from(new Set([...defaults, ...dynamic]));
  }

  loadUsers(page = this.page): void {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.filteredUsersByRole = null;

    this.adminUserService.listUsers(page, this.limit).subscribe({
      next: (result) => {
        this.users = result.docs;
        this.page = result.currentPage;
        this.totalPages = result.totalPages;
        this.totalDocs = result.totalDocs;
        this.hasNext = result.hasNext;
        this.hasPrev = result.hasPrev;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.error?.message || 'Could not load users.';
      },
    });
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.createForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      role: 'MEMBER',
      phone: '',
      gender: 'male',
      dob: '',
      address: '',
      password: 'SecurePass@123',
      ptSessionPrice60: 250000,
      specialization: '',
      experienceYears: 0,
      biography: '',
      certifications: '',
      areasOfExpertise: '',
    });
  }

  closeCreateModal(): void {
    if (this.creating) return;
    this.showCreateModal = false;
  }

  async createUser(): Promise<void> {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.creating) return;
    const confirmed = await this.confirmDialog.confirm('Create this user account?', {
      title: 'Confirm Create User',
      confirmText: 'Create',
    });
    if (!confirmed) return;

    const basePayload: AdminUserPayload = {
      firstName: this.createForm.controls.firstName.value.trim(),
      lastName: this.createForm.controls.lastName.value.trim(),
      email: this.createForm.controls.email.value.trim(),
      role: this.createForm.controls.role.value,
      phone: this.createForm.controls.phone.value.trim(),
      gender: this.createForm.controls.gender.value.toLowerCase(),
      dob: this.createForm.controls.dob.value,
      address: this.createForm.controls.address.value.trim() || undefined,
    };
    const isTrainer = this.isTrainerRoleName(basePayload.role);
    const payload: AdminTrainerPayload | AdminUserPayload = isTrainer
      ? {
          ...this.omitRole(basePayload),
          status: 'active',
          password: this.createForm.controls.password.value.trim() || 'SecurePass@123',
          ptSessionPrice60: Number(this.createForm.controls.ptSessionPrice60.value || 0),
          specialization: this.createForm.controls.specialization.value.trim() || undefined,
          experienceYears: Number(this.createForm.controls.experienceYears.value || 0),
          biography: this.createForm.controls.biography.value.trim() || undefined,
          certifications: this.splitCommaList(this.createForm.controls.certifications.value),
          areasOfExpertise: this.splitCommaList(this.createForm.controls.areasOfExpertise.value),
        }
      : basePayload;

    this.creating = true;
    this.errorMessage = '';
    this.successMessage = '';
    const request$ = isTrainer
      ? this.adminUserService.createTrainer(payload as AdminTrainerPayload)
      : this.adminUserService.createUser(payload as AdminUserPayload);
    request$.subscribe({
      next: () => {
        this.creating = false;
        this.showCreateModal = false;
        this.successMessage = 'User created successfully.';
        this.loadUsers(1);
      },
      error: (err) => {
        this.creating = false;
        this.errorMessage = err?.error?.error?.message || 'Create user failed.';
      },
    });
  }

  openUserDetail(userId: string): void {
    if (!userId) return;
    this.showDetailModal = true;
    this.detailLoading = true;
    this.selectedUser = null;
    this.selectedAssignRoleIds = [];
    this.errorMessage = '';
    this.successMessage = '';

    this.adminUserService.getUserById(userId).subscribe({
      next: (user) => {
        this.selectedUser = user;
        this.detailLoading = false;
        this.editForm.reset({
          firstName: user.firstName ?? '',
          lastName: user.lastName ?? '',
          email: user.email ?? '',
          phone: user.phone ?? '',
          gender: (user.gender ?? 'male').toLowerCase(),
          dob: this.toDateInputValue(user.dob),
          address: user.address ?? '',
          status: user.status ?? 'active',
          role: user.roles?.[0]?.name ?? 'MEMBER',
          password: '',
          ptSessionPrice60: Number(user.ptSessionPrice60 ?? 250000),
          specialization: user.trainerSpecialization ?? '',
          experienceYears: Number(user.trainerExperienceYears ?? 0),
          biography: user.trainerBiography ?? '',
          certifications: (user.trainerCertifications ?? []).join(', '),
          areasOfExpertise: (user.trainerAreasOfExpertise ?? []).join(', '),
        });
      },
      error: (err) => {
        this.detailLoading = false;
        this.errorMessage = err?.error?.error?.message || 'Could not load user details.';
      },
    });
  }

  closeDetailModal(): void {
    if (this.updating || this.deleting || this.assigningRole || !!this.removingRoleId) return;
    this.showDetailModal = false;
    this.selectedUser = null;
    this.selectedAssignRoleIds = [];
  }

  async updateUser(): Promise<void> {
    this.editForm.markAllAsTouched();
    if (this.editForm.invalid || !this.selectedUser?.id || this.updating) return;
    const confirmed = await this.confirmDialog.confirm('Update this user information?', {
      title: 'Confirm Update User',
      confirmText: 'Update',
    });
    if (!confirmed) return;

    const rawPassword = this.editForm.controls.password.value.trim();
    const basePayload: AdminUserPayload = {
      firstName: this.editForm.controls.firstName.value.trim(),
      lastName: this.editForm.controls.lastName.value.trim(),
      email: this.editForm.controls.email.value.trim(),
      phone: this.editForm.controls.phone.value.trim(),
      gender: this.editForm.controls.gender.value.toLowerCase(),
      dob: this.editForm.controls.dob.value,
      address: this.editForm.controls.address.value.trim() || undefined,
      status: this.editForm.controls.status.value,
      role: this.editForm.controls.role.value,
      password: rawPassword || undefined,
    };
    const isTrainer = this.isTrainerUser(this.selectedUser);
    const payload: AdminTrainerPayload | AdminUserPayload = isTrainer
      ? {
          ...basePayload,
          ptSessionPrice60: Number(this.editForm.controls.ptSessionPrice60.value || 0),
          specialization: this.editForm.controls.specialization.value.trim() || undefined,
          experienceYears: Number(this.editForm.controls.experienceYears.value || 0),
          biography: this.editForm.controls.biography.value.trim() || undefined,
          certifications: this.splitCommaList(this.editForm.controls.certifications.value),
          areasOfExpertise: this.splitCommaList(this.editForm.controls.areasOfExpertise.value),
        }
      : basePayload;

    this.updating = true;
    this.errorMessage = '';
    this.successMessage = '';
    const request$ = isTrainer
      ? this.adminUserService.updateTrainer(this.selectedUser.id, payload as AdminTrainerPayload)
      : this.adminUserService.updateUser(this.selectedUser.id, payload as AdminUserPayload);
    request$.subscribe({
      next: () => {
        this.updating = false;
        this.successMessage = 'User updated successfully.';
        this.reloadSelectedAndList();
      },
      error: (err) => {
        this.updating = false;
        this.errorMessage = err?.error?.error?.message || 'Update user failed.';
      },
    });
  }

  async deleteUser(): Promise<void> {
    if (!this.selectedUser?.id || this.deleting) return;
    const confirmed = await this.confirmDialog.confirm('Delete this user? This action cannot be undone.', {
      title: 'Confirm Delete User',
      confirmText: 'Delete',
    });
    if (!confirmed) return;

    this.deleting = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.adminUserService.deleteUser(this.selectedUser.id).subscribe({
      next: () => {
        this.deleting = false;
        this.showDetailModal = false;
        this.selectedUser = null;
        this.successMessage = 'User deleted successfully.';
        this.loadUsers(this.page);
      },
      error: (err) => {
        this.deleting = false;
        this.errorMessage = err?.error?.error?.message || 'Delete user failed.';
      },
    });
  }

  async assignRoles(): Promise<void> {
    if (!this.selectedUser?.id || this.assigningRole) return;
    const roleIds = this.selectedAssignRoleIds.filter((x) => !!x);
    if (!roleIds.length) return;
    const confirmed = await this.confirmDialog.confirm('Assign selected roles to this user?', {
      title: 'Confirm Assign Roles',
      confirmText: 'Assign',
    });
    if (!confirmed) return;

    this.assigningRole = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.adminUserService.assignRoles(this.selectedUser.id, roleIds).subscribe({
      next: () => {
        this.assigningRole = false;
        this.selectedAssignRoleIds = [];
        this.successMessage = 'Roles assigned successfully.';
        this.reloadSelectedAndList();
      },
      error: (err) => {
        this.assigningRole = false;
        this.errorMessage = err?.error?.error?.message || 'Assign roles failed.';
      },
    });
  }

  async removeRole(roleId: string): Promise<void> {
    if (!this.selectedUser?.id || !roleId || this.removingRoleId) return;
    const confirmed = await this.confirmDialog.confirm('Remove this role from the user?', {
      title: 'Confirm Remove Role',
      confirmText: 'Remove',
    });
    if (!confirmed) return;

    this.removingRoleId = roleId;
    this.errorMessage = '';
    this.successMessage = '';
    this.adminUserService.removeRole(this.selectedUser.id, roleId).subscribe({
      next: () => {
        this.removingRoleId = null;
        this.successMessage = 'Role removed successfully.';
        this.reloadSelectedAndList();
      },
      error: (err) => {
        this.removingRoleId = null;
        this.errorMessage = err?.error?.error?.message || 'Remove role failed.';
      },
    });
  }

  filterByRoleId(): void {
    const roleId = this.selectedRoleFilterId.trim();
    if (!roleId) {
      this.filteredUsersByRole = null;
      this.loadUsers(1);
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.adminUserService.getUsersByRole(roleId).subscribe({
      next: (users) => {
        this.loading = false;
        this.filteredUsersByRole = users;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.error?.message || 'Could not filter users by role.';
      },
    });
  }

  clearRoleFilter(): void {
    this.selectedRoleFilterId = '';
    this.filteredUsersByRole = null;
    this.loadUsers(1);
  }

  toggleAssignRole(roleId: string, checked: boolean): void {
    if (!roleId) return;
    if (checked) {
      if (!this.selectedAssignRoleIds.includes(roleId)) {
        this.selectedAssignRoleIds = [...this.selectedAssignRoleIds, roleId];
      }
      return;
    }
    this.selectedAssignRoleIds = this.selectedAssignRoleIds.filter((id) => id !== roleId);
  }

  isRoleAssigned(roleId: string): boolean {
    return !!this.selectedUser?.roles?.some((role) => role.id === roleId);
  }

  previousPage(): void {
    if (!this.hasPrev || this.filteredUsersByRole) return;
    this.loadUsers(this.page - 1);
  }

  nextPage(): void {
    if (!this.hasNext || this.filteredUsersByRole) return;
    this.loadUsers(this.page + 1);
  }

  onBackdropClick(event: MouseEvent, modalType: 'create' | 'detail'): void {
    if (event.target !== event.currentTarget) return;
    if (modalType === 'create') this.closeCreateModal();
    else this.closeDetailModal();
  }

  private reloadSelectedAndList(): void {
    const selectedId = this.selectedUser?.id;
    this.loadUsers(this.page);
    if (selectedId) this.openUserDetail(selectedId);
  }

  private toDateInputValue(value: string | undefined): string {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return date.toISOString().slice(0, 10);
  }

  private loadRoleOptions(): void {
    this.adminUserService.getRoles(1, 50, '').subscribe({
      next: (roles) => {
        this.availableRoles = roles;
      },
      error: () => {
        this.availableRoles = [];
      },
    });
  }

  isTrainerRoleName(roleName?: string | null): boolean {
    return String(roleName ?? '').toUpperCase() === 'TRAINER';
  }

  isTrainerUser(user: AdminUserListItem | null): boolean {
    if (!user) return false;
    return Boolean(user.roles?.some((r) => this.isTrainerRoleName(r?.name)));
  }

  private splitCommaList(value: string): string[] {
    return String(value ?? '')
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
  }

  private omitRole(payload: AdminUserPayload): AdminTrainerPayload {
    const { role, ...rest } = payload;
    return rest as AdminTrainerPayload;
  }
}
