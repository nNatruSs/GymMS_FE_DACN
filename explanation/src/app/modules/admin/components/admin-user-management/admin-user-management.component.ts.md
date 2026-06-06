# Explanation: `src/app/modules/admin/components/admin-user-management/admin-user-management.component.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-user-management/admin-user-management.component.ts`
- **Total lines:** `490`
- **Non-empty lines:** `446`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `1`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component, inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import {` | Imports a dependency so this file can use external symbols. |
| 5 | `  AdminRoleItem,` | Core implementation line contributing to the file behavior. |
| 6 | `  AdminUserListItem,` | Core implementation line contributing to the file behavior. |
| 7 | `  AdminTrainerPayload,` | Core implementation line contributing to the file behavior. |
| 8 | `  AdminUserPayload,` | Core implementation line contributing to the file behavior. |
| 9 | `  AdminUserService,` | Core implementation line contributing to the file behavior. |
| 10 | `} from '../../services/admin-user.service';` | Core implementation line contributing to the file behavior. |
| 11 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `@Component({` | Angular decorator declaring metadata for this component. |
| 14 | `  selector: 'app-admin-user-management',` | Core implementation line contributing to the file behavior. |
| 15 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 16 | `  imports: [CommonModule, ReactiveFormsModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 17 | `  templateUrl: './admin-user-management.component.html',` | Core implementation line contributing to the file behavior. |
| 18 | `  styleUrls: ['./admin-user-management.component.css']` | Core implementation line contributing to the file behavior. |
| 19 | `})` | Core implementation line contributing to the file behavior. |
| 20 | `export class AdminUserManagementComponent {` | Exports symbols so other files can import this logic. |
| 21 | `  private fb = inject(FormBuilder);` | Core implementation line contributing to the file behavior. |
| 22 | `  private adminUserService = inject(AdminUserService);` | Core implementation line contributing to the file behavior. |
| 23 | `  private confirmDialog = inject(ConfirmDialogService);` | Core implementation line contributing to the file behavior. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 26 | `  creating = false;` | Core implementation line contributing to the file behavior. |
| 27 | `  updating = false;` | Core implementation line contributing to the file behavior. |
| 28 | `  deleting = false;` | Core implementation line contributing to the file behavior. |
| 29 | `  detailLoading = false;` | Core implementation line contributing to the file behavior. |
| 30 | `  assigningRole = false;` | Core implementation line contributing to the file behavior. |
| 31 | `  removingRoleId: string \| null = null;` | CSS declaration assigning a style property value. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 34 | `  successMessage = '';` | Core implementation line contributing to the file behavior. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `  users: AdminUserListItem[] = [];` | CSS declaration assigning a style property value. |
| 37 | `  filteredUsersByRole: AdminUserListItem[] \| null = null;` | CSS declaration assigning a style property value. |
| 38 | `  availableRoles: AdminRoleItem[] = [];` | CSS declaration assigning a style property value. |
| 39 | `  selectedRoleFilterId = '';` | Core implementation line contributing to the file behavior. |
| 40 | `  page = 1;` | Core implementation line contributing to the file behavior. |
| 41 | `  limit = 10;` | Core implementation line contributing to the file behavior. |
| 42 | `  totalPages = 1;` | Core implementation line contributing to the file behavior. |
| 43 | `  totalDocs = 0;` | Core implementation line contributing to the file behavior. |
| 44 | `  hasNext = false;` | Core implementation line contributing to the file behavior. |
| 45 | `  hasPrev = false;` | Core implementation line contributing to the file behavior. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `  showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 48 | `  showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 49 | `  selectedUser: AdminUserListItem \| null = null;` | CSS declaration assigning a style property value. |
| 50 | `  selectedAssignRoleIds: string[] = [];` | CSS declaration assigning a style property value. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `  createForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 53 | `    firstName: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 54 | `    lastName: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 55 | `    email: ['', [Validators.required, Validators.email]],` | Core implementation line contributing to the file behavior. |
| 56 | `    role: ['MEMBER', Validators.required],` | Core implementation line contributing to the file behavior. |
| 57 | `    phone: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 58 | `    gender: ['male', Validators.required],` | Core implementation line contributing to the file behavior. |
| 59 | `    dob: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 60 | `    address: [''],` | Core implementation line contributing to the file behavior. |
| 61 | `    password: ['SecurePass@123'],` | Core implementation line contributing to the file behavior. |
| 62 | `    ptSessionPrice60: [250000],` | Core implementation line contributing to the file behavior. |
| 63 | `    specialization: [''],` | Core implementation line contributing to the file behavior. |
| 64 | `    experienceYears: [0],` | Core implementation line contributing to the file behavior. |
| 65 | `    biography: [''],` | Core implementation line contributing to the file behavior. |
| 66 | `    certifications: [''],` | Core implementation line contributing to the file behavior. |
| 67 | `    areasOfExpertise: [''],` | Core implementation line contributing to the file behavior. |
| 68 | `  });` | Core implementation line contributing to the file behavior. |
| 69 | `` | Blank line used to separate logical blocks for readability. |
| 70 | `  editForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 71 | `    firstName: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 72 | `    lastName: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 73 | `    email: ['', [Validators.required, Validators.email]],` | Core implementation line contributing to the file behavior. |
| 74 | `    phone: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 75 | `    gender: ['male', Validators.required],` | Core implementation line contributing to the file behavior. |
| 76 | `    dob: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 77 | `    address: [''],` | Core implementation line contributing to the file behavior. |
| 78 | `    status: ['active', Validators.required],` | Core implementation line contributing to the file behavior. |
| 79 | `    role: ['MEMBER', Validators.required],` | Core implementation line contributing to the file behavior. |
| 80 | `    password: [''],` | Core implementation line contributing to the file behavior. |
| 81 | `    ptSessionPrice60: [250000],` | Core implementation line contributing to the file behavior. |
| 82 | `    specialization: [''],` | Core implementation line contributing to the file behavior. |
| 83 | `    experienceYears: [0],` | Core implementation line contributing to the file behavior. |
| 84 | `    biography: [''],` | Core implementation line contributing to the file behavior. |
| 85 | `    certifications: [''],` | Core implementation line contributing to the file behavior. |
| 86 | `    areasOfExpertise: [''],` | Core implementation line contributing to the file behavior. |
| 87 | `  });` | Core implementation line contributing to the file behavior. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 90 | `    this.loadRoleOptions();` | Core implementation line contributing to the file behavior. |
| 91 | `    this.loadUsers(1);` | Core implementation line contributing to the file behavior. |
| 92 | `  }` | Closes the current code/style block scope. |
| 93 | `` | Blank line used to separate logical blocks for readability. |
| 94 | `  get displayedUsers(): AdminUserListItem[] {` | Begins a new code/style block scope. |
| 95 | `    return this.filteredUsersByRole ?? this.users;` | Returns a value from the current function/method. |
| 96 | `  }` | Closes the current code/style block scope. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `  get roleNamesForSelect(): string[] {` | Begins a new code/style block scope. |
| 99 | `    const defaults = ['MEMBER', 'USER', 'TRAINER', 'ADMIN', 'STAFF'];` | Core implementation line contributing to the file behavior. |
| 100 | `    const dynamic = this.availableRoles.map((role) => role.name).filter(Boolean);` | Core implementation line contributing to the file behavior. |
| 101 | `    return Array.from(new Set([...defaults, ...dynamic]));` | Returns a value from the current function/method. |
| 102 | `  }` | Closes the current code/style block scope. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `  loadUsers(page = this.page): void {` | Begins a new code/style block scope. |
| 105 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 106 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 107 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 108 | `    this.filteredUsersByRole = null;` | Core implementation line contributing to the file behavior. |
| 109 | `` | Blank line used to separate logical blocks for readability. |
| 110 | `    this.adminUserService.listUsers(page, this.limit).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 111 | `      next: (result) => {` | Arrow function definition, often used for callbacks. |
| 112 | `        this.users = result.docs;` | Core implementation line contributing to the file behavior. |
| 113 | `        this.page = result.currentPage;` | Core implementation line contributing to the file behavior. |
| 114 | `        this.totalPages = result.totalPages;` | Core implementation line contributing to the file behavior. |
| 115 | `        this.totalDocs = result.totalDocs;` | Core implementation line contributing to the file behavior. |
| 116 | `        this.hasNext = result.hasNext;` | Core implementation line contributing to the file behavior. |
| 117 | `        this.hasPrev = result.hasPrev;` | Core implementation line contributing to the file behavior. |
| 118 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 119 | `      },` | Core implementation line contributing to the file behavior. |
| 120 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 121 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 122 | `        this.errorMessage = err?.error?.error?.message \|\| 'Could not load users.';` | Core implementation line contributing to the file behavior. |
| 123 | `      },` | Core implementation line contributing to the file behavior. |
| 124 | `    });` | Core implementation line contributing to the file behavior. |
| 125 | `  }` | Closes the current code/style block scope. |
| 126 | `` | Blank line used to separate logical blocks for readability. |
| 127 | `  openCreateModal(): void {` | Begins a new code/style block scope. |
| 128 | `    this.showCreateModal = true;` | Core implementation line contributing to the file behavior. |
| 129 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 130 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 131 | `    this.createForm.reset({` | Begins a new code/style block scope. |
| 132 | `      firstName: '',` | Core implementation line contributing to the file behavior. |
| 133 | `      lastName: '',` | Core implementation line contributing to the file behavior. |
| 134 | `      email: '',` | Core implementation line contributing to the file behavior. |
| 135 | `      role: 'MEMBER',` | Core implementation line contributing to the file behavior. |
| 136 | `      phone: '',` | Core implementation line contributing to the file behavior. |
| 137 | `      gender: 'male',` | Core implementation line contributing to the file behavior. |
| 138 | `      dob: '',` | Core implementation line contributing to the file behavior. |
| 139 | `      address: '',` | Core implementation line contributing to the file behavior. |
| 140 | `      password: 'SecurePass@123',` | Core implementation line contributing to the file behavior. |
| 141 | `      ptSessionPrice60: 250000,` | Core implementation line contributing to the file behavior. |
| 142 | `      specialization: '',` | Core implementation line contributing to the file behavior. |
| 143 | `      experienceYears: 0,` | Core implementation line contributing to the file behavior. |
| 144 | `      biography: '',` | Core implementation line contributing to the file behavior. |
| 145 | `      certifications: '',` | Core implementation line contributing to the file behavior. |
| 146 | `      areasOfExpertise: '',` | Core implementation line contributing to the file behavior. |
| 147 | `    });` | Core implementation line contributing to the file behavior. |
| 148 | `  }` | Closes the current code/style block scope. |
| 149 | `` | Blank line used to separate logical blocks for readability. |
| 150 | `  closeCreateModal(): void {` | Begins a new code/style block scope. |
| 151 | `    if (this.creating) return;` | Conditional branch: executes block only when condition is true. |
| 152 | `    this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 153 | `  }` | Closes the current code/style block scope. |
| 154 | `` | Blank line used to separate logical blocks for readability. |
| 155 | `  async createUser(): Promise<void> {` | Begins a new code/style block scope. |
| 156 | `    this.createForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 157 | `    if (this.createForm.invalid \|\| this.creating) return;` | Conditional branch: executes block only when condition is true. |
| 158 | `    const confirmed = await this.confirmDialog.confirm('Create this user account?', {` | Begins a new code/style block scope. |
| 159 | `      title: 'Confirm Create User',` | Core implementation line contributing to the file behavior. |
| 160 | `      confirmText: 'Create',` | Core implementation line contributing to the file behavior. |
| 161 | `    });` | Core implementation line contributing to the file behavior. |
| 162 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 163 | `` | Blank line used to separate logical blocks for readability. |
| 164 | `    const basePayload: AdminUserPayload = {` | Begins a new code/style block scope. |
| 165 | `      firstName: this.createForm.controls.firstName.value.trim(),` | Core implementation line contributing to the file behavior. |
| 166 | `      lastName: this.createForm.controls.lastName.value.trim(),` | Core implementation line contributing to the file behavior. |
| 167 | `      email: this.createForm.controls.email.value.trim(),` | Core implementation line contributing to the file behavior. |
| 168 | `      role: this.createForm.controls.role.value,` | Core implementation line contributing to the file behavior. |
| 169 | `      phone: this.createForm.controls.phone.value.trim(),` | Core implementation line contributing to the file behavior. |
| 170 | `      gender: this.createForm.controls.gender.value.toLowerCase(),` | Core implementation line contributing to the file behavior. |
| 171 | `      dob: this.createForm.controls.dob.value,` | Core implementation line contributing to the file behavior. |
| 172 | `      address: this.createForm.controls.address.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 173 | `    };` | Core implementation line contributing to the file behavior. |
| 174 | `    const isTrainer = this.isTrainerRoleName(basePayload.role);` | Core implementation line contributing to the file behavior. |
| 175 | `    const payload: AdminTrainerPayload \| AdminUserPayload = isTrainer` | Core implementation line contributing to the file behavior. |
| 176 | `      ? {` | Begins a new code/style block scope. |
| 177 | `          ...this.omitRole(basePayload),` | Core implementation line contributing to the file behavior. |
| 178 | `          status: 'active',` | Core implementation line contributing to the file behavior. |
| 179 | `          password: this.createForm.controls.password.value.trim() \|\| 'SecurePass@123',` | Core implementation line contributing to the file behavior. |
| 180 | `          ptSessionPrice60: Number(this.createForm.controls.ptSessionPrice60.value \|\| 0),` | Core implementation line contributing to the file behavior. |
| 181 | `          specialization: this.createForm.controls.specialization.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 182 | `          experienceYears: Number(this.createForm.controls.experienceYears.value \|\| 0),` | Core implementation line contributing to the file behavior. |
| 183 | `          biography: this.createForm.controls.biography.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 184 | `          certifications: this.splitCommaList(this.createForm.controls.certifications.value),` | Core implementation line contributing to the file behavior. |
| 185 | `          areasOfExpertise: this.splitCommaList(this.createForm.controls.areasOfExpertise.value),` | Core implementation line contributing to the file behavior. |
| 186 | `        }` | Closes the current code/style block scope. |
| 187 | `      : basePayload;` | CSS declaration assigning a style property value. |
| 188 | `` | Blank line used to separate logical blocks for readability. |
| 189 | `    this.creating = true;` | Core implementation line contributing to the file behavior. |
| 190 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 191 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 192 | `    const request$ = isTrainer` | Core implementation line contributing to the file behavior. |
| 193 | `      ? this.adminUserService.createTrainer(payload as AdminTrainerPayload)` | Core implementation line contributing to the file behavior. |
| 194 | `      : this.adminUserService.createUser(payload as AdminUserPayload);` | CSS declaration assigning a style property value. |
| 195 | `    request$.subscribe({` | Subscribes to an Observable to react to async emissions. |
| 196 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 197 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 198 | `        this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 199 | `        this.successMessage = 'User created successfully.';` | Core implementation line contributing to the file behavior. |
| 200 | `        this.loadUsers(1);` | Core implementation line contributing to the file behavior. |
| 201 | `      },` | Core implementation line contributing to the file behavior. |
| 202 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 203 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 204 | `        this.errorMessage = err?.error?.error?.message \|\| 'Create user failed.';` | Core implementation line contributing to the file behavior. |
| 205 | `      },` | Core implementation line contributing to the file behavior. |
| 206 | `    });` | Core implementation line contributing to the file behavior. |
| 207 | `  }` | Closes the current code/style block scope. |
| 208 | `` | Blank line used to separate logical blocks for readability. |
| 209 | `  openUserDetail(userId: string): void {` | Begins a new code/style block scope. |
| 210 | `    if (!userId) return;` | Conditional branch: executes block only when condition is true. |
| 211 | `    this.showDetailModal = true;` | Core implementation line contributing to the file behavior. |
| 212 | `    this.detailLoading = true;` | Core implementation line contributing to the file behavior. |
| 213 | `    this.selectedUser = null;` | Core implementation line contributing to the file behavior. |
| 214 | `    this.selectedAssignRoleIds = [];` | Core implementation line contributing to the file behavior. |
| 215 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 216 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 217 | `` | Blank line used to separate logical blocks for readability. |
| 218 | `    this.adminUserService.getUserById(userId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 219 | `      next: (user) => {` | Arrow function definition, often used for callbacks. |
| 220 | `        this.selectedUser = user;` | Core implementation line contributing to the file behavior. |
| 221 | `        this.detailLoading = false;` | Core implementation line contributing to the file behavior. |
| 222 | `        this.editForm.reset({` | Begins a new code/style block scope. |
| 223 | `          firstName: user.firstName ?? '',` | Core implementation line contributing to the file behavior. |
| 224 | `          lastName: user.lastName ?? '',` | Core implementation line contributing to the file behavior. |
| 225 | `          email: user.email ?? '',` | Core implementation line contributing to the file behavior. |
| 226 | `          phone: user.phone ?? '',` | Core implementation line contributing to the file behavior. |
| 227 | `          gender: (user.gender ?? 'male').toLowerCase(),` | Core implementation line contributing to the file behavior. |
| 228 | `          dob: this.toDateInputValue(user.dob),` | Core implementation line contributing to the file behavior. |
| 229 | `          address: user.address ?? '',` | Core implementation line contributing to the file behavior. |
| 230 | `          status: user.status ?? 'active',` | Core implementation line contributing to the file behavior. |
| 231 | `          role: user.roles?.[0]?.name ?? 'MEMBER',` | Core implementation line contributing to the file behavior. |
| 232 | `          password: '',` | Core implementation line contributing to the file behavior. |
| 233 | `          ptSessionPrice60: Number(user.ptSessionPrice60 ?? 250000),` | Core implementation line contributing to the file behavior. |
| 234 | `          specialization: user.trainerSpecialization ?? '',` | Core implementation line contributing to the file behavior. |
| 235 | `          experienceYears: Number(user.trainerExperienceYears ?? 0),` | Core implementation line contributing to the file behavior. |
| 236 | `          biography: user.trainerBiography ?? '',` | Core implementation line contributing to the file behavior. |
| 237 | `          certifications: (user.trainerCertifications ?? []).join(', '),` | Core implementation line contributing to the file behavior. |
| 238 | `          areasOfExpertise: (user.trainerAreasOfExpertise ?? []).join(', '),` | Core implementation line contributing to the file behavior. |
| 239 | `        });` | Core implementation line contributing to the file behavior. |
| 240 | `      },` | Core implementation line contributing to the file behavior. |
| 241 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 242 | `        this.detailLoading = false;` | Core implementation line contributing to the file behavior. |
| 243 | `        this.errorMessage = err?.error?.error?.message \|\| 'Could not load user details.';` | Core implementation line contributing to the file behavior. |
| 244 | `      },` | Core implementation line contributing to the file behavior. |
| 245 | `    });` | Core implementation line contributing to the file behavior. |
| 246 | `  }` | Closes the current code/style block scope. |
| 247 | `` | Blank line used to separate logical blocks for readability. |
| 248 | `  closeDetailModal(): void {` | Begins a new code/style block scope. |
| 249 | `    if (this.updating \|\| this.deleting \|\| this.assigningRole \|\| !!this.removingRoleId) return;` | Conditional branch: executes block only when condition is true. |
| 250 | `    this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 251 | `    this.selectedUser = null;` | Core implementation line contributing to the file behavior. |
| 252 | `    this.selectedAssignRoleIds = [];` | Core implementation line contributing to the file behavior. |
| 253 | `  }` | Closes the current code/style block scope. |
| 254 | `` | Blank line used to separate logical blocks for readability. |
| 255 | `  async updateUser(): Promise<void> {` | Begins a new code/style block scope. |
| 256 | `    this.editForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 257 | `    if (this.editForm.invalid \|\| !this.selectedUser?.id \|\| this.updating) return;` | Conditional branch: executes block only when condition is true. |
| 258 | `    const confirmed = await this.confirmDialog.confirm('Update this user information?', {` | Begins a new code/style block scope. |
| 259 | `      title: 'Confirm Update User',` | Core implementation line contributing to the file behavior. |
| 260 | `      confirmText: 'Update',` | Core implementation line contributing to the file behavior. |
| 261 | `    });` | Core implementation line contributing to the file behavior. |
| 262 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 263 | `` | Blank line used to separate logical blocks for readability. |
| 264 | `    const rawPassword = this.editForm.controls.password.value.trim();` | Core implementation line contributing to the file behavior. |
| 265 | `    const basePayload: AdminUserPayload = {` | Begins a new code/style block scope. |
| 266 | `      firstName: this.editForm.controls.firstName.value.trim(),` | Core implementation line contributing to the file behavior. |
| 267 | `      lastName: this.editForm.controls.lastName.value.trim(),` | Core implementation line contributing to the file behavior. |
| 268 | `      email: this.editForm.controls.email.value.trim(),` | Core implementation line contributing to the file behavior. |
| 269 | `      phone: this.editForm.controls.phone.value.trim(),` | Core implementation line contributing to the file behavior. |
| 270 | `      gender: this.editForm.controls.gender.value.toLowerCase(),` | Core implementation line contributing to the file behavior. |
| 271 | `      dob: this.editForm.controls.dob.value,` | Core implementation line contributing to the file behavior. |
| 272 | `      address: this.editForm.controls.address.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 273 | `      status: this.editForm.controls.status.value,` | Core implementation line contributing to the file behavior. |
| 274 | `      role: this.editForm.controls.role.value,` | Core implementation line contributing to the file behavior. |
| 275 | `      password: rawPassword \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 276 | `    };` | Core implementation line contributing to the file behavior. |
| 277 | `    const isTrainer = this.isTrainerUser(this.selectedUser);` | Core implementation line contributing to the file behavior. |
| 278 | `    const payload: AdminTrainerPayload \| AdminUserPayload = isTrainer` | Core implementation line contributing to the file behavior. |
| 279 | `      ? {` | Begins a new code/style block scope. |
| 280 | `          ...basePayload,` | Core implementation line contributing to the file behavior. |
| 281 | `          ptSessionPrice60: Number(this.editForm.controls.ptSessionPrice60.value \|\| 0),` | Core implementation line contributing to the file behavior. |
| 282 | `          specialization: this.editForm.controls.specialization.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 283 | `          experienceYears: Number(this.editForm.controls.experienceYears.value \|\| 0),` | Core implementation line contributing to the file behavior. |
| 284 | `          biography: this.editForm.controls.biography.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 285 | `          certifications: this.splitCommaList(this.editForm.controls.certifications.value),` | Core implementation line contributing to the file behavior. |
| 286 | `          areasOfExpertise: this.splitCommaList(this.editForm.controls.areasOfExpertise.value),` | Core implementation line contributing to the file behavior. |
| 287 | `        }` | Closes the current code/style block scope. |
| 288 | `      : basePayload;` | CSS declaration assigning a style property value. |
| 289 | `` | Blank line used to separate logical blocks for readability. |
| 290 | `    this.updating = true;` | Core implementation line contributing to the file behavior. |
| 291 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 292 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 293 | `    const request$ = isTrainer` | Core implementation line contributing to the file behavior. |
| 294 | `      ? this.adminUserService.updateTrainer(this.selectedUser.id, payload as AdminTrainerPayload)` | Core implementation line contributing to the file behavior. |
| 295 | `      : this.adminUserService.updateUser(this.selectedUser.id, payload as AdminUserPayload);` | CSS declaration assigning a style property value. |
| 296 | `    request$.subscribe({` | Subscribes to an Observable to react to async emissions. |
| 297 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 298 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 299 | `        this.successMessage = 'User updated successfully.';` | Core implementation line contributing to the file behavior. |
| 300 | `        this.reloadSelectedAndList();` | Core implementation line contributing to the file behavior. |
| 301 | `      },` | Core implementation line contributing to the file behavior. |
| 302 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 303 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 304 | `        this.errorMessage = err?.error?.error?.message \|\| 'Update user failed.';` | Core implementation line contributing to the file behavior. |
| 305 | `      },` | Core implementation line contributing to the file behavior. |
| 306 | `    });` | Core implementation line contributing to the file behavior. |
| 307 | `  }` | Closes the current code/style block scope. |
| 308 | `` | Blank line used to separate logical blocks for readability. |
| 309 | `  async deleteUser(): Promise<void> {` | Begins a new code/style block scope. |
| 310 | `    if (!this.selectedUser?.id \|\| this.deleting) return;` | Conditional branch: executes block only when condition is true. |
| 311 | `    const confirmed = await this.confirmDialog.confirm('Delete this user? This action cannot be undone.', {` | Begins a new code/style block scope. |
| 312 | `      title: 'Confirm Delete User',` | Core implementation line contributing to the file behavior. |
| 313 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 314 | `    });` | Core implementation line contributing to the file behavior. |
| 315 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 316 | `` | Blank line used to separate logical blocks for readability. |
| 317 | `    this.deleting = true;` | Core implementation line contributing to the file behavior. |
| 318 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 319 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 320 | `    this.adminUserService.deleteUser(this.selectedUser.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 321 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 322 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 323 | `        this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 324 | `        this.selectedUser = null;` | Core implementation line contributing to the file behavior. |
| 325 | `        this.successMessage = 'User deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 326 | `        this.loadUsers(this.page);` | Core implementation line contributing to the file behavior. |
| 327 | `      },` | Core implementation line contributing to the file behavior. |
| 328 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 329 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 330 | `        this.errorMessage = err?.error?.error?.message \|\| 'Delete user failed.';` | Core implementation line contributing to the file behavior. |
| 331 | `      },` | Core implementation line contributing to the file behavior. |
| 332 | `    });` | Core implementation line contributing to the file behavior. |
| 333 | `  }` | Closes the current code/style block scope. |
| 334 | `` | Blank line used to separate logical blocks for readability. |
| 335 | `  async assignRoles(): Promise<void> {` | Begins a new code/style block scope. |
| 336 | `    if (!this.selectedUser?.id \|\| this.assigningRole) return;` | Conditional branch: executes block only when condition is true. |
| 337 | `    const roleIds = this.selectedAssignRoleIds.filter((x) => !!x);` | Core implementation line contributing to the file behavior. |
| 338 | `    if (!roleIds.length) return;` | Conditional branch: executes block only when condition is true. |
| 339 | `    const confirmed = await this.confirmDialog.confirm('Assign selected roles to this user?', {` | Begins a new code/style block scope. |
| 340 | `      title: 'Confirm Assign Roles',` | Core implementation line contributing to the file behavior. |
| 341 | `      confirmText: 'Assign',` | Core implementation line contributing to the file behavior. |
| 342 | `    });` | Core implementation line contributing to the file behavior. |
| 343 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 344 | `` | Blank line used to separate logical blocks for readability. |
| 345 | `    this.assigningRole = true;` | Core implementation line contributing to the file behavior. |
| 346 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 347 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 348 | `    this.adminUserService.assignRoles(this.selectedUser.id, roleIds).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 349 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 350 | `        this.assigningRole = false;` | Core implementation line contributing to the file behavior. |
| 351 | `        this.selectedAssignRoleIds = [];` | Core implementation line contributing to the file behavior. |
| 352 | `        this.successMessage = 'Roles assigned successfully.';` | Core implementation line contributing to the file behavior. |
| 353 | `        this.reloadSelectedAndList();` | Core implementation line contributing to the file behavior. |
| 354 | `      },` | Core implementation line contributing to the file behavior. |
| 355 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 356 | `        this.assigningRole = false;` | Core implementation line contributing to the file behavior. |
| 357 | `        this.errorMessage = err?.error?.error?.message \|\| 'Assign roles failed.';` | Core implementation line contributing to the file behavior. |
| 358 | `      },` | Core implementation line contributing to the file behavior. |
| 359 | `    });` | Core implementation line contributing to the file behavior. |
| 360 | `  }` | Closes the current code/style block scope. |
| 361 | `` | Blank line used to separate logical blocks for readability. |
| 362 | `  async removeRole(roleId: string): Promise<void> {` | Begins a new code/style block scope. |
| 363 | `    if (!this.selectedUser?.id \|\| !roleId \|\| this.removingRoleId) return;` | Conditional branch: executes block only when condition is true. |
| 364 | `    const confirmed = await this.confirmDialog.confirm('Remove this role from the user?', {` | Begins a new code/style block scope. |
| 365 | `      title: 'Confirm Remove Role',` | Core implementation line contributing to the file behavior. |
| 366 | `      confirmText: 'Remove',` | Core implementation line contributing to the file behavior. |
| 367 | `    });` | Core implementation line contributing to the file behavior. |
| 368 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 369 | `` | Blank line used to separate logical blocks for readability. |
| 370 | `    this.removingRoleId = roleId;` | Core implementation line contributing to the file behavior. |
| 371 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 372 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 373 | `    this.adminUserService.removeRole(this.selectedUser.id, roleId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 374 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 375 | `        this.removingRoleId = null;` | Core implementation line contributing to the file behavior. |
| 376 | `        this.successMessage = 'Role removed successfully.';` | Core implementation line contributing to the file behavior. |
| 377 | `        this.reloadSelectedAndList();` | Core implementation line contributing to the file behavior. |
| 378 | `      },` | Core implementation line contributing to the file behavior. |
| 379 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 380 | `        this.removingRoleId = null;` | Core implementation line contributing to the file behavior. |
| 381 | `        this.errorMessage = err?.error?.error?.message \|\| 'Remove role failed.';` | Core implementation line contributing to the file behavior. |
| 382 | `      },` | Core implementation line contributing to the file behavior. |
| 383 | `    });` | Core implementation line contributing to the file behavior. |
| 384 | `  }` | Closes the current code/style block scope. |
| 385 | `` | Blank line used to separate logical blocks for readability. |
| 386 | `  filterByRoleId(): void {` | Begins a new code/style block scope. |
| 387 | `    const roleId = this.selectedRoleFilterId.trim();` | Core implementation line contributing to the file behavior. |
| 388 | `    if (!roleId) {` | Conditional branch: executes block only when condition is true. |
| 389 | `      this.filteredUsersByRole = null;` | Core implementation line contributing to the file behavior. |
| 390 | `      this.loadUsers(1);` | Core implementation line contributing to the file behavior. |
| 391 | `      return;` | Core implementation line contributing to the file behavior. |
| 392 | `    }` | Closes the current code/style block scope. |
| 393 | `` | Blank line used to separate logical blocks for readability. |
| 394 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 395 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 396 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 397 | `    this.adminUserService.getUsersByRole(roleId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 398 | `      next: (users) => {` | Arrow function definition, often used for callbacks. |
| 399 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 400 | `        this.filteredUsersByRole = users;` | Core implementation line contributing to the file behavior. |
| 401 | `      },` | Core implementation line contributing to the file behavior. |
| 402 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 403 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 404 | `        this.errorMessage = err?.error?.error?.message \|\| 'Could not filter users by role.';` | Core implementation line contributing to the file behavior. |
| 405 | `      },` | Core implementation line contributing to the file behavior. |
| 406 | `    });` | Core implementation line contributing to the file behavior. |
| 407 | `  }` | Closes the current code/style block scope. |
| 408 | `` | Blank line used to separate logical blocks for readability. |
| 409 | `  clearRoleFilter(): void {` | Begins a new code/style block scope. |
| 410 | `    this.selectedRoleFilterId = '';` | Core implementation line contributing to the file behavior. |
| 411 | `    this.filteredUsersByRole = null;` | Core implementation line contributing to the file behavior. |
| 412 | `    this.loadUsers(1);` | Core implementation line contributing to the file behavior. |
| 413 | `  }` | Closes the current code/style block scope. |
| 414 | `` | Blank line used to separate logical blocks for readability. |
| 415 | `  toggleAssignRole(roleId: string, checked: boolean): void {` | Begins a new code/style block scope. |
| 416 | `    if (!roleId) return;` | Conditional branch: executes block only when condition is true. |
| 417 | `    if (checked) {` | Conditional branch: executes block only when condition is true. |
| 418 | `      if (!this.selectedAssignRoleIds.includes(roleId)) {` | Conditional branch: executes block only when condition is true. |
| 419 | `        this.selectedAssignRoleIds = [...this.selectedAssignRoleIds, roleId];` | Core implementation line contributing to the file behavior. |
| 420 | `      }` | Closes the current code/style block scope. |
| 421 | `      return;` | Core implementation line contributing to the file behavior. |
| 422 | `    }` | Closes the current code/style block scope. |
| 423 | `    this.selectedAssignRoleIds = this.selectedAssignRoleIds.filter((id) => id !== roleId);` | Core implementation line contributing to the file behavior. |
| 424 | `  }` | Closes the current code/style block scope. |
| 425 | `` | Blank line used to separate logical blocks for readability. |
| 426 | `  isRoleAssigned(roleId: string): boolean {` | Begins a new code/style block scope. |
| 427 | `    return !!this.selectedUser?.roles?.some((role) => role.id === roleId);` | Returns a value from the current function/method. |
| 428 | `  }` | Closes the current code/style block scope. |
| 429 | `` | Blank line used to separate logical blocks for readability. |
| 430 | `  previousPage(): void {` | Begins a new code/style block scope. |
| 431 | `    if (!this.hasPrev \|\| this.filteredUsersByRole) return;` | Conditional branch: executes block only when condition is true. |
| 432 | `    this.loadUsers(this.page - 1);` | Core implementation line contributing to the file behavior. |
| 433 | `  }` | Closes the current code/style block scope. |
| 434 | `` | Blank line used to separate logical blocks for readability. |
| 435 | `  nextPage(): void {` | Begins a new code/style block scope. |
| 436 | `    if (!this.hasNext \|\| this.filteredUsersByRole) return;` | Conditional branch: executes block only when condition is true. |
| 437 | `    this.loadUsers(this.page + 1);` | Core implementation line contributing to the file behavior. |
| 438 | `  }` | Closes the current code/style block scope. |
| 439 | `` | Blank line used to separate logical blocks for readability. |
| 440 | `  onBackdropClick(event: MouseEvent, modalType: 'create' \| 'detail'): void {` | Begins a new code/style block scope. |
| 441 | `    if (event.target !== event.currentTarget) return;` | Conditional branch: executes block only when condition is true. |
| 442 | `    if (modalType === 'create') this.closeCreateModal();` | Conditional branch: executes block only when condition is true. |
| 443 | `    else this.closeDetailModal();` | Alternative branch when previous condition is not met. |
| 444 | `  }` | Closes the current code/style block scope. |
| 445 | `` | Blank line used to separate logical blocks for readability. |
| 446 | `  private reloadSelectedAndList(): void {` | Begins a new code/style block scope. |
| 447 | `    const selectedId = this.selectedUser?.id;` | Core implementation line contributing to the file behavior. |
| 448 | `    this.loadUsers(this.page);` | Core implementation line contributing to the file behavior. |
| 449 | `    if (selectedId) this.openUserDetail(selectedId);` | Conditional branch: executes block only when condition is true. |
| 450 | `  }` | Closes the current code/style block scope. |
| 451 | `` | Blank line used to separate logical blocks for readability. |
| 452 | `  private toDateInputValue(value: string \| undefined): string {` | Begins a new code/style block scope. |
| 453 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 454 | `    const date = new Date(value);` | Core implementation line contributing to the file behavior. |
| 455 | `    if (Number.isNaN(date.getTime())) return '';` | Conditional branch: executes block only when condition is true. |
| 456 | `    return date.toISOString().slice(0, 10);` | Returns a value from the current function/method. |
| 457 | `  }` | Closes the current code/style block scope. |
| 458 | `` | Blank line used to separate logical blocks for readability. |
| 459 | `  private loadRoleOptions(): void {` | Begins a new code/style block scope. |
| 460 | `    this.adminUserService.getRoles(1, 50, '').subscribe({` | Subscribes to an Observable to react to async emissions. |
| 461 | `      next: (roles) => {` | Arrow function definition, often used for callbacks. |
| 462 | `        this.availableRoles = roles;` | Core implementation line contributing to the file behavior. |
| 463 | `      },` | Core implementation line contributing to the file behavior. |
| 464 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 465 | `        this.availableRoles = [];` | Core implementation line contributing to the file behavior. |
| 466 | `      },` | Core implementation line contributing to the file behavior. |
| 467 | `    });` | Core implementation line contributing to the file behavior. |
| 468 | `  }` | Closes the current code/style block scope. |
| 469 | `` | Blank line used to separate logical blocks for readability. |
| 470 | `  isTrainerRoleName(roleName?: string \| null): boolean {` | Begins a new code/style block scope. |
| 471 | `    return String(roleName ?? '').toUpperCase() === 'TRAINER';` | Returns a value from the current function/method. |
| 472 | `  }` | Closes the current code/style block scope. |
| 473 | `` | Blank line used to separate logical blocks for readability. |
| 474 | `  isTrainerUser(user: AdminUserListItem \| null): boolean {` | Begins a new code/style block scope. |
| 475 | `    if (!user) return false;` | Conditional branch: executes block only when condition is true. |
| 476 | `    return Boolean(user.roles?.some((r) => this.isTrainerRoleName(r?.name)));` | Returns a value from the current function/method. |
| 477 | `  }` | Closes the current code/style block scope. |
| 478 | `` | Blank line used to separate logical blocks for readability. |
| 479 | `  private splitCommaList(value: string): string[] {` | Begins a new code/style block scope. |
| 480 | `    return String(value ?? '')` | Returns a value from the current function/method. |
| 481 | `      .split(',')` | Core implementation line contributing to the file behavior. |
| 482 | `      .map((x) => x.trim())` | Core implementation line contributing to the file behavior. |
| 483 | `      .filter(Boolean);` | Core implementation line contributing to the file behavior. |
| 484 | `  }` | Closes the current code/style block scope. |
| 485 | `` | Blank line used to separate logical blocks for readability. |
| 486 | `  private omitRole(payload: AdminUserPayload): AdminTrainerPayload {` | Begins a new code/style block scope. |
| 487 | `    const { role, ...rest } = payload;` | Core implementation line contributing to the file behavior. |
| 488 | `    return rest as AdminTrainerPayload;` | Returns a value from the current function/method. |
| 489 | `  }` | Closes the current code/style block scope. |
| 490 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.