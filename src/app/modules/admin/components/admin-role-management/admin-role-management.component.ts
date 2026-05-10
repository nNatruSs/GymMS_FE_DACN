import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminRoleItem, AdminRolePayload, AdminRoleService } from '../../services/admin-role.service';

@Component({
  selector: 'app-admin-role-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-role-management.component.html',
  styleUrls: ['./admin-role-management.component.css']
})
export class AdminRoleManagementComponent {
  private fb = inject(FormBuilder);
  private adminRoleService = inject(AdminRoleService);

  loading = true;
  creating = false;
  updating = false;
  deleting = false;

  errorMessage = '';
  successMessage = '';

  roles: AdminRoleItem[] = [];
  searchTerm = '';
  page = 1;
  limit = 10;
  total = 0;
  totalPages = 1;
  hasNext = false;
  hasPrev = false;

  showCreateModal = false;
  showEditModal = false;
  selectedRole: AdminRoleItem | null = null;

  createForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  editForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {
    this.loadRoles(1);
  }

  loadRoles(page = this.page): void {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const request$ = this.searchTerm.trim()
      ? this.adminRoleService.searchRoles(this.searchTerm.trim(), page, this.limit)
      : this.adminRoleService.listRoles(page, this.limit);

    request$.subscribe({
      next: (result) => {
        this.roles = result.items;
        this.page = result.page;
        this.limit = result.limit;
        this.total = result.total;
        this.totalPages = result.totalPages;
        this.hasNext = result.hasNext;
        this.hasPrev = result.hasPrev;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.error?.message || 'Could not load roles.';
      },
    });
  }

  applySearch(): void {
    this.loadRoles(1);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.loadRoles(1);
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.createForm.reset({
      name: '',
      description: '',
    });
  }

  closeCreateModal(): void {
    if (this.creating) return;
    this.showCreateModal = false;
  }

  createRole(): void {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.creating) return;
    if (!confirm('Create this role?')) return;

    const payload: AdminRolePayload = {
      name: this.createForm.controls.name.value.trim(),
      description: this.createForm.controls.description.value.trim(),
    };

    this.creating = true;
    this.adminRoleService.createRole(payload).subscribe({
      next: () => {
        this.creating = false;
        this.showCreateModal = false;
        this.successMessage = 'Role created successfully.';
        this.loadRoles(1);
      },
      error: (err) => {
        this.creating = false;
        this.errorMessage = err?.error?.error?.message || 'Create role failed.';
      },
    });
  }

  openEditModal(role: AdminRoleItem): void {
    this.selectedRole = role;
    this.showEditModal = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.editForm.reset({
      name: role.name ?? '',
      description: role.description ?? '',
    });
  }

  closeEditModal(): void {
    if (this.updating || this.deleting) return;
    this.showEditModal = false;
    this.selectedRole = null;
  }

  updateRole(): void {
    this.editForm.markAllAsTouched();
    if (!this.selectedRole?.id || this.editForm.invalid || this.updating) return;
    if (!confirm('Update this role?')) return;

    const payload: AdminRolePayload = {
      name: this.editForm.controls.name.value.trim(),
      description: this.editForm.controls.description.value.trim(),
    };

    this.updating = true;
    this.adminRoleService.updateRole(this.selectedRole.id, payload).subscribe({
      next: () => {
        this.updating = false;
        this.showEditModal = false;
        this.selectedRole = null;
        this.successMessage = 'Role updated successfully.';
        this.loadRoles(this.page);
      },
      error: (err) => {
        this.updating = false;
        this.errorMessage = err?.error?.error?.message || 'Update role failed.';
      },
    });
  }

  deleteRole(): void {
    if (!this.selectedRole?.id || this.deleting) return;
    if (!confirm('Delete this role? This action cannot be undone.')) return;

    this.deleting = true;
    this.adminRoleService.deleteRole(this.selectedRole.id).subscribe({
      next: () => {
        this.deleting = false;
        this.showEditModal = false;
        this.selectedRole = null;
        this.successMessage = 'Role deleted successfully.';
        this.loadRoles(1);
      },
      error: (err) => {
        this.deleting = false;
        this.errorMessage = err?.error?.error?.message || 'Delete role failed.';
      },
    });
  }

  previousPage(): void {
    if (!this.hasPrev || this.loading) return;
    this.loadRoles(this.page - 1);
  }

  nextPage(): void {
    if (!this.hasNext || this.loading) return;
    this.loadRoles(this.page + 1);
  }

  onBackdropClick(event: MouseEvent, modalType: 'create' | 'edit'): void {
    if (event.target !== event.currentTarget) return;
    if (modalType === 'create') this.closeCreateModal();
    else this.closeEditModal();
  }
}
