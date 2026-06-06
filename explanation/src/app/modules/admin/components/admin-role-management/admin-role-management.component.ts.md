# Explanation: `src/app/modules/admin/components/admin-role-management/admin-role-management.component.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-role-management/admin-role-management.component.ts`
- **Total lines:** `220`
- **Non-empty lines:** `192`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component, inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { AdminRoleItem, AdminRolePayload, AdminRoleService } from '../../services/admin-role.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `@Component({` | Angular decorator declaring metadata for this component. |
| 8 | `  selector: 'app-admin-role-management',` | Core implementation line contributing to the file behavior. |
| 9 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 10 | `  imports: [CommonModule, FormsModule, ReactiveFormsModule],` | Core implementation line contributing to the file behavior. |
| 11 | `  templateUrl: './admin-role-management.component.html',` | Core implementation line contributing to the file behavior. |
| 12 | `  styleUrls: ['./admin-role-management.component.css']` | Core implementation line contributing to the file behavior. |
| 13 | `})` | Core implementation line contributing to the file behavior. |
| 14 | `export class AdminRoleManagementComponent {` | Exports symbols so other files can import this logic. |
| 15 | `  private fb = inject(FormBuilder);` | Core implementation line contributing to the file behavior. |
| 16 | `  private adminRoleService = inject(AdminRoleService);` | Core implementation line contributing to the file behavior. |
| 17 | `  private confirmDialog = inject(ConfirmDialogService);` | Core implementation line contributing to the file behavior. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 20 | `  creating = false;` | Core implementation line contributing to the file behavior. |
| 21 | `  updating = false;` | Core implementation line contributing to the file behavior. |
| 22 | `  deleting = false;` | Core implementation line contributing to the file behavior. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 25 | `  successMessage = '';` | Core implementation line contributing to the file behavior. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `  roles: AdminRoleItem[] = [];` | CSS declaration assigning a style property value. |
| 28 | `  searchTerm = '';` | Core implementation line contributing to the file behavior. |
| 29 | `  page = 1;` | Core implementation line contributing to the file behavior. |
| 30 | `  limit = 10;` | Core implementation line contributing to the file behavior. |
| 31 | `  total = 0;` | Core implementation line contributing to the file behavior. |
| 32 | `  totalPages = 1;` | Core implementation line contributing to the file behavior. |
| 33 | `  hasNext = false;` | Core implementation line contributing to the file behavior. |
| 34 | `  hasPrev = false;` | Core implementation line contributing to the file behavior. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `  showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 37 | `  showEditModal = false;` | Core implementation line contributing to the file behavior. |
| 38 | `  selectedRole: AdminRoleItem \| null = null;` | CSS declaration assigning a style property value. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `  createForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 41 | `    name: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 42 | `    description: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 43 | `  });` | Core implementation line contributing to the file behavior. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `  editForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 46 | `    name: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 47 | `    description: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 48 | `  });` | Core implementation line contributing to the file behavior. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 51 | `    this.loadRoles(1);` | Core implementation line contributing to the file behavior. |
| 52 | `  }` | Closes the current code/style block scope. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `  loadRoles(page = this.page): void {` | Begins a new code/style block scope. |
| 55 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 56 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 57 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `    const request$ = this.searchTerm.trim()` | Core implementation line contributing to the file behavior. |
| 60 | `      ? this.adminRoleService.searchRoles(this.searchTerm.trim(), page, this.limit)` | Core implementation line contributing to the file behavior. |
| 61 | `      : this.adminRoleService.listRoles(page, this.limit);` | CSS declaration assigning a style property value. |
| 62 | `` | Blank line used to separate logical blocks for readability. |
| 63 | `    request$.subscribe({` | Subscribes to an Observable to react to async emissions. |
| 64 | `      next: (result) => {` | Arrow function definition, often used for callbacks. |
| 65 | `        this.roles = result.items;` | Core implementation line contributing to the file behavior. |
| 66 | `        this.page = result.page;` | Core implementation line contributing to the file behavior. |
| 67 | `        this.limit = result.limit;` | Core implementation line contributing to the file behavior. |
| 68 | `        this.total = result.total;` | Core implementation line contributing to the file behavior. |
| 69 | `        this.totalPages = result.totalPages;` | Core implementation line contributing to the file behavior. |
| 70 | `        this.hasNext = result.hasNext;` | Core implementation line contributing to the file behavior. |
| 71 | `        this.hasPrev = result.hasPrev;` | Core implementation line contributing to the file behavior. |
| 72 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 73 | `      },` | Core implementation line contributing to the file behavior. |
| 74 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 75 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 76 | `        this.errorMessage = err?.error?.error?.message \|\| 'Could not load roles.';` | Core implementation line contributing to the file behavior. |
| 77 | `      },` | Core implementation line contributing to the file behavior. |
| 78 | `    });` | Core implementation line contributing to the file behavior. |
| 79 | `  }` | Closes the current code/style block scope. |
| 80 | `` | Blank line used to separate logical blocks for readability. |
| 81 | `  applySearch(): void {` | Begins a new code/style block scope. |
| 82 | `    this.loadRoles(1);` | Core implementation line contributing to the file behavior. |
| 83 | `  }` | Closes the current code/style block scope. |
| 84 | `` | Blank line used to separate logical blocks for readability. |
| 85 | `  clearSearch(): void {` | Begins a new code/style block scope. |
| 86 | `    this.searchTerm = '';` | Core implementation line contributing to the file behavior. |
| 87 | `    this.loadRoles(1);` | Core implementation line contributing to the file behavior. |
| 88 | `  }` | Closes the current code/style block scope. |
| 89 | `` | Blank line used to separate logical blocks for readability. |
| 90 | `  openCreateModal(): void {` | Begins a new code/style block scope. |
| 91 | `    this.showCreateModal = true;` | Core implementation line contributing to the file behavior. |
| 92 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 93 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 94 | `    this.createForm.reset({` | Begins a new code/style block scope. |
| 95 | `      name: '',` | Core implementation line contributing to the file behavior. |
| 96 | `      description: '',` | Core implementation line contributing to the file behavior. |
| 97 | `    });` | Core implementation line contributing to the file behavior. |
| 98 | `  }` | Closes the current code/style block scope. |
| 99 | `` | Blank line used to separate logical blocks for readability. |
| 100 | `  closeCreateModal(): void {` | Begins a new code/style block scope. |
| 101 | `    if (this.creating) return;` | Conditional branch: executes block only when condition is true. |
| 102 | `    this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 103 | `  }` | Closes the current code/style block scope. |
| 104 | `` | Blank line used to separate logical blocks for readability. |
| 105 | `  async createRole(): Promise<void> {` | Begins a new code/style block scope. |
| 106 | `    this.createForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 107 | `    if (this.createForm.invalid \|\| this.creating) return;` | Conditional branch: executes block only when condition is true. |
| 108 | `    const confirmed = await this.confirmDialog.confirm('Create this role?', {` | Begins a new code/style block scope. |
| 109 | `      title: 'Confirm Create Role',` | Core implementation line contributing to the file behavior. |
| 110 | `      confirmText: 'Create',` | Core implementation line contributing to the file behavior. |
| 111 | `    });` | Core implementation line contributing to the file behavior. |
| 112 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 113 | `` | Blank line used to separate logical blocks for readability. |
| 114 | `    const payload: AdminRolePayload = {` | Begins a new code/style block scope. |
| 115 | `      name: this.createForm.controls.name.value.trim(),` | Core implementation line contributing to the file behavior. |
| 116 | `      description: this.createForm.controls.description.value.trim(),` | Core implementation line contributing to the file behavior. |
| 117 | `    };` | Core implementation line contributing to the file behavior. |
| 118 | `` | Blank line used to separate logical blocks for readability. |
| 119 | `    this.creating = true;` | Core implementation line contributing to the file behavior. |
| 120 | `    this.adminRoleService.createRole(payload).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 121 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 122 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 123 | `        this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 124 | `        this.successMessage = 'Role created successfully.';` | Core implementation line contributing to the file behavior. |
| 125 | `        this.loadRoles(1);` | Core implementation line contributing to the file behavior. |
| 126 | `      },` | Core implementation line contributing to the file behavior. |
| 127 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 128 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 129 | `        this.errorMessage = err?.error?.error?.message \|\| 'Create role failed.';` | Core implementation line contributing to the file behavior. |
| 130 | `      },` | Core implementation line contributing to the file behavior. |
| 131 | `    });` | Core implementation line contributing to the file behavior. |
| 132 | `  }` | Closes the current code/style block scope. |
| 133 | `` | Blank line used to separate logical blocks for readability. |
| 134 | `  openEditModal(role: AdminRoleItem): void {` | Begins a new code/style block scope. |
| 135 | `    this.selectedRole = role;` | Core implementation line contributing to the file behavior. |
| 136 | `    this.showEditModal = true;` | Core implementation line contributing to the file behavior. |
| 137 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 138 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 139 | `    this.editForm.reset({` | Begins a new code/style block scope. |
| 140 | `      name: role.name ?? '',` | Core implementation line contributing to the file behavior. |
| 141 | `      description: role.description ?? '',` | Core implementation line contributing to the file behavior. |
| 142 | `    });` | Core implementation line contributing to the file behavior. |
| 143 | `  }` | Closes the current code/style block scope. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `  closeEditModal(): void {` | Begins a new code/style block scope. |
| 146 | `    if (this.updating \|\| this.deleting) return;` | Conditional branch: executes block only when condition is true. |
| 147 | `    this.showEditModal = false;` | Core implementation line contributing to the file behavior. |
| 148 | `    this.selectedRole = null;` | Core implementation line contributing to the file behavior. |
| 149 | `  }` | Closes the current code/style block scope. |
| 150 | `` | Blank line used to separate logical blocks for readability. |
| 151 | `  async updateRole(): Promise<void> {` | Begins a new code/style block scope. |
| 152 | `    this.editForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 153 | `    if (!this.selectedRole?.id \|\| this.editForm.invalid \|\| this.updating) return;` | Conditional branch: executes block only when condition is true. |
| 154 | `    const confirmed = await this.confirmDialog.confirm('Update this role?', {` | Begins a new code/style block scope. |
| 155 | `      title: 'Confirm Update Role',` | Core implementation line contributing to the file behavior. |
| 156 | `      confirmText: 'Update',` | Core implementation line contributing to the file behavior. |
| 157 | `    });` | Core implementation line contributing to the file behavior. |
| 158 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 159 | `` | Blank line used to separate logical blocks for readability. |
| 160 | `    const payload: AdminRolePayload = {` | Begins a new code/style block scope. |
| 161 | `      name: this.editForm.controls.name.value.trim(),` | Core implementation line contributing to the file behavior. |
| 162 | `      description: this.editForm.controls.description.value.trim(),` | Core implementation line contributing to the file behavior. |
| 163 | `    };` | Core implementation line contributing to the file behavior. |
| 164 | `` | Blank line used to separate logical blocks for readability. |
| 165 | `    this.updating = true;` | Core implementation line contributing to the file behavior. |
| 166 | `    this.adminRoleService.updateRole(this.selectedRole.id, payload).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 167 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 168 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 169 | `        this.showEditModal = false;` | Core implementation line contributing to the file behavior. |
| 170 | `        this.selectedRole = null;` | Core implementation line contributing to the file behavior. |
| 171 | `        this.successMessage = 'Role updated successfully.';` | Core implementation line contributing to the file behavior. |
| 172 | `        this.loadRoles(this.page);` | Core implementation line contributing to the file behavior. |
| 173 | `      },` | Core implementation line contributing to the file behavior. |
| 174 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 175 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 176 | `        this.errorMessage = err?.error?.error?.message \|\| 'Update role failed.';` | Core implementation line contributing to the file behavior. |
| 177 | `      },` | Core implementation line contributing to the file behavior. |
| 178 | `    });` | Core implementation line contributing to the file behavior. |
| 179 | `  }` | Closes the current code/style block scope. |
| 180 | `` | Blank line used to separate logical blocks for readability. |
| 181 | `  async deleteRole(): Promise<void> {` | Begins a new code/style block scope. |
| 182 | `    if (!this.selectedRole?.id \|\| this.deleting) return;` | Conditional branch: executes block only when condition is true. |
| 183 | `    const confirmed = await this.confirmDialog.confirm('Delete this role? This action cannot be undone.', {` | Begins a new code/style block scope. |
| 184 | `      title: 'Confirm Delete Role',` | Core implementation line contributing to the file behavior. |
| 185 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 186 | `    });` | Core implementation line contributing to the file behavior. |
| 187 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 188 | `` | Blank line used to separate logical blocks for readability. |
| 189 | `    this.deleting = true;` | Core implementation line contributing to the file behavior. |
| 190 | `    this.adminRoleService.deleteRole(this.selectedRole.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 191 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 192 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 193 | `        this.showEditModal = false;` | Core implementation line contributing to the file behavior. |
| 194 | `        this.selectedRole = null;` | Core implementation line contributing to the file behavior. |
| 195 | `        this.successMessage = 'Role deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 196 | `        this.loadRoles(1);` | Core implementation line contributing to the file behavior. |
| 197 | `      },` | Core implementation line contributing to the file behavior. |
| 198 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 199 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 200 | `        this.errorMessage = err?.error?.error?.message \|\| 'Delete role failed.';` | Core implementation line contributing to the file behavior. |
| 201 | `      },` | Core implementation line contributing to the file behavior. |
| 202 | `    });` | Core implementation line contributing to the file behavior. |
| 203 | `  }` | Closes the current code/style block scope. |
| 204 | `` | Blank line used to separate logical blocks for readability. |
| 205 | `  previousPage(): void {` | Begins a new code/style block scope. |
| 206 | `    if (!this.hasPrev \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 207 | `    this.loadRoles(this.page - 1);` | Core implementation line contributing to the file behavior. |
| 208 | `  }` | Closes the current code/style block scope. |
| 209 | `` | Blank line used to separate logical blocks for readability. |
| 210 | `  nextPage(): void {` | Begins a new code/style block scope. |
| 211 | `    if (!this.hasNext \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 212 | `    this.loadRoles(this.page + 1);` | Core implementation line contributing to the file behavior. |
| 213 | `  }` | Closes the current code/style block scope. |
| 214 | `` | Blank line used to separate logical blocks for readability. |
| 215 | `  onBackdropClick(event: MouseEvent, modalType: 'create' \| 'edit'): void {` | Begins a new code/style block scope. |
| 216 | `    if (event.target !== event.currentTarget) return;` | Conditional branch: executes block only when condition is true. |
| 217 | `    if (modalType === 'create') this.closeCreateModal();` | Conditional branch: executes block only when condition is true. |
| 218 | `    else this.closeEditModal();` | Alternative branch when previous condition is not met. |
| 219 | `  }` | Closes the current code/style block scope. |
| 220 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.