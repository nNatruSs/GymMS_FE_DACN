# Explanation: `src/app/modules/admin/components/admin-role-management/admin-role-management.component.html`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-role-management/admin-role-management.component.html`
- **Total lines:** `127`
- **Non-empty lines:** `116`
- **Import statements:** `0`
- **Class-like declarations found:** `61`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="role-page">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="hero-card mb-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div>` | HTML tag opening/closing markup for component template structure. |
| 4 | `      <h4 class="mb-1">Roles Management</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <p class="mb-0 text-muted">Create and manage system roles, descriptions, and access structure.</p>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `    <button class="btn btn-primary px-4" (click)="openCreateModal()">Create Role</button>` | Declares a core TypeScript structure used by this module. |
| 8 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `  <div class="control-card mb-3">` | Declares a core TypeScript structure used by this module. |
| 11 | `    <div class="row g-2 align-items-end">` | Declares a core TypeScript structure used by this module. |
| 12 | `      <div class="col-lg-8">` | Declares a core TypeScript structure used by this module. |
| 13 | `        <label class="form-label mb-1">Search Roles</label>` | Declares a core TypeScript structure used by this module. |
| 14 | `        <input` | Core implementation line contributing to the file behavior. |
| 15 | `          class="form-control"` | Declares a core TypeScript structure used by this module. |
| 16 | `          placeholder="Type role name to search"` | Core implementation line contributing to the file behavior. |
| 17 | `          [(ngModel)]="searchTerm"` | Core implementation line contributing to the file behavior. |
| 18 | `          (keyup.enter)="applySearch()"` | Core implementation line contributing to the file behavior. |
| 19 | `        />` | Core implementation line contributing to the file behavior. |
| 20 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 21 | `      <div class="col-lg-4 d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 22 | `        <button class="btn btn-outline-primary flex-grow-1" (click)="applySearch()">Search</button>` | Declares a core TypeScript structure used by this module. |
| 23 | `        <button class="btn btn-outline-secondary" (click)="clearSearch()">Clear</button>` | Declares a core TypeScript structure used by this module. |
| 24 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 25 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 26 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `  <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 29 | `  <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `  <div class="list-card">` | Declares a core TypeScript structure used by this module. |
| 32 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 33 | `      <h5 class="mb-0">Available Roles</h5>` | Declares a core TypeScript structure used by this module. |
| 34 | `      <span class="text-muted small">Total {{ total }} roles</span>` | Declares a core TypeScript structure used by this module. |
| 35 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 36 | `` | Blank line used to separate logical blocks for readability. |
| 37 | `    <div *ngIf="loading" class="text-muted">Loading roles...</div>` | Declares a core TypeScript structure used by this module. |
| 38 | `    <div *ngIf="!loading && roles.length === 0" class="text-muted">No roles found.</div>` | Declares a core TypeScript structure used by this module. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `    <div class="table-responsive" *ngIf="!loading && roles.length > 0">` | Declares a core TypeScript structure used by this module. |
| 41 | `      <table class="table align-middle role-table mb-0">` | Declares a core TypeScript structure used by this module. |
| 42 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 43 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 44 | `            <th>Role Name</th>` | HTML tag opening/closing markup for component template structure. |
| 45 | `            <th>Description</th>` | HTML tag opening/closing markup for component template structure. |
| 46 | `            <th>Users</th>` | HTML tag opening/closing markup for component template structure. |
| 47 | `            <th>Updated At</th>` | HTML tag opening/closing markup for component template structure. |
| 48 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 49 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 50 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 51 | `          <tr class="row-clickable" *ngFor="let role of roles" (click)="openEditModal(role)">` | Declares a core TypeScript structure used by this module. |
| 52 | `            <td class="fw-semibold">{{ role.name }}</td>` | Declares a core TypeScript structure used by this module. |
| 53 | `            <td class="text-muted">{{ role.description \|\| 'No description' }}</td>` | Declares a core TypeScript structure used by this module. |
| 54 | `            <td>{{ role.userCount ?? 0 }}</td>` | HTML tag opening/closing markup for component template structure. |
| 55 | `            <td>{{ role.updatedAt ? (role.updatedAt \| date:'yyyy-MM-dd HH:mm') : '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 56 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 57 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 58 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 59 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `    <div class="d-flex justify-content-between align-items-center mt-3">` | Declares a core TypeScript structure used by this module. |
| 62 | `      <div class="text-muted small">Page {{ page }} / {{ totalPages }}</div>` | Declares a core TypeScript structure used by this module. |
| 63 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 64 | `        <button class="btn btn-sm btn-outline-secondary" [disabled]="!hasPrev \|\| loading" (click)="previousPage()">Previous</button>` | Declares a core TypeScript structure used by this module. |
| 65 | `        <button class="btn btn-sm btn-outline-secondary" [disabled]="!hasNext \|\| loading" (click)="nextPage()">Next</button>` | Declares a core TypeScript structure used by this module. |
| 66 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 68 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 69 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 70 | `` | Blank line used to separate logical blocks for readability. |
| 71 | `<div *ngIf="showCreateModal" class="modal-overlay" (click)="onBackdropClick($event, 'create')">` | Declares a core TypeScript structure used by this module. |
| 72 | `  <div class="modal-card">` | Declares a core TypeScript structure used by this module. |
| 73 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 74 | `      <h5 class="mb-0">Create New Role</h5>` | Declares a core TypeScript structure used by this module. |
| 75 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeCreateModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 76 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `    <form [formGroup]="createForm" (ngSubmit)="createRole()">` | HTML tag opening/closing markup for component template structure. |
| 79 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 80 | `        <label class="form-label">Role Name *</label>` | Declares a core TypeScript structure used by this module. |
| 81 | `        <input class="form-control" formControlName="name" placeholder="CUSTOM_MANAGER" />` | Declares a core TypeScript structure used by this module. |
| 82 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 83 | `      <div class="mb-4">` | Declares a core TypeScript structure used by this module. |
| 84 | `        <label class="form-label">Description *</label>` | Declares a core TypeScript structure used by this module. |
| 85 | `        <textarea class="form-control" rows="3" formControlName="description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 86 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 87 | `      <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 88 | `        <button type="button" class="btn btn-outline-secondary" (click)="closeCreateModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 89 | `        <button type="submit" class="btn btn-primary" [disabled]="creating">` | Declares a core TypeScript structure used by this module. |
| 90 | `          {{ creating ? 'Creating...' : 'Create Role' }}` | Core implementation line contributing to the file behavior. |
| 91 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 92 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 94 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 95 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `<div *ngIf="showEditModal" class="modal-overlay" (click)="onBackdropClick($event, 'edit')">` | Declares a core TypeScript structure used by this module. |
| 98 | `  <div class="modal-card">` | Declares a core TypeScript structure used by this module. |
| 99 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 100 | `      <h5 class="mb-0">Update Role</h5>` | Declares a core TypeScript structure used by this module. |
| 101 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeEditModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 102 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `    <form [formGroup]="editForm" (ngSubmit)="updateRole()">` | HTML tag opening/closing markup for component template structure. |
| 105 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 106 | `        <label class="form-label">Role Name *</label>` | Declares a core TypeScript structure used by this module. |
| 107 | `        <input class="form-control" formControlName="name" />` | Declares a core TypeScript structure used by this module. |
| 108 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 109 | `      <div class="mb-4">` | Declares a core TypeScript structure used by this module. |
| 110 | `        <label class="form-label">Description *</label>` | Declares a core TypeScript structure used by this module. |
| 111 | `        <textarea class="form-control" rows="3" formControlName="description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 112 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 113 | `` | Blank line used to separate logical blocks for readability. |
| 114 | `      <div class="d-flex justify-content-between align-items-center">` | Declares a core TypeScript structure used by this module. |
| 115 | `        <button type="button" class="btn btn-outline-danger" [disabled]="deleting" (click)="deleteRole()">` | Declares a core TypeScript structure used by this module. |
| 116 | `          {{ deleting ? 'Deleting...' : 'Delete Role' }}` | Core implementation line contributing to the file behavior. |
| 117 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 118 | `        <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 119 | `          <button type="button" class="btn btn-outline-secondary" (click)="closeEditModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 120 | `          <button type="submit" class="btn btn-primary" [disabled]="updating">` | Declares a core TypeScript structure used by this module. |
| 121 | `            {{ updating ? 'Updating...' : 'Update Role' }}` | Core implementation line contributing to the file behavior. |
| 122 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 123 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 124 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 125 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 126 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 127 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.