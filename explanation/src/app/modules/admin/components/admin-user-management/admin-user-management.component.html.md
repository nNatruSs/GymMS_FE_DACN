# Explanation: `src/app/modules/admin/components/admin-user-management/admin-user-management.component.html`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-user-management/admin-user-management.component.html`
- **Total lines:** `331`
- **Non-empty lines:** `314`
- **Import statements:** `0`
- **Class-like declarations found:** `166`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="user-page">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="hero-card mb-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div>` | HTML tag opening/closing markup for component template structure. |
| 4 | `      <h4 class="mb-1">User Management</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <p class="mb-0 text-muted">Create users, inspect profiles, update data, assign roles, and manage accounts.</p>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `    <button class="btn btn-primary px-4" (click)="openCreateModal()">Create User</button>` | Declares a core TypeScript structure used by this module. |
| 8 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `  <div class="control-card mb-3">` | Declares a core TypeScript structure used by this module. |
| 11 | `    <div class="row g-2 align-items-end">` | Declares a core TypeScript structure used by this module. |
| 12 | `      <div class="col-lg-8">` | Declares a core TypeScript structure used by this module. |
| 13 | `        <label class="form-label mb-1">Filter Users by Role</label>` | Declares a core TypeScript structure used by this module. |
| 14 | `        <select class="form-select" [(ngModel)]="selectedRoleFilterId">` | Declares a core TypeScript structure used by this module. |
| 15 | `          <option value="">Select role</option>` | HTML tag opening/closing markup for component template structure. |
| 16 | `          <option *ngFor="let role of availableRoles" [value]="role.id">` | HTML tag opening/closing markup for component template structure. |
| 17 | `            {{ role.name }}` | Core implementation line contributing to the file behavior. |
| 18 | `          </option>` | HTML tag opening/closing markup for component template structure. |
| 19 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 20 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 21 | `      <div class="col-lg-4 d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 22 | `        <button class="btn btn-outline-primary flex-grow-1" [disabled]="!selectedRoleFilterId" (click)="filterByRoleId()">` | Declares a core TypeScript structure used by this module. |
| 23 | `          Apply Filter` | Core implementation line contributing to the file behavior. |
| 24 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 25 | `        <button class="btn btn-outline-secondary" (click)="clearRoleFilter()">Clear</button>` | Declares a core TypeScript structure used by this module. |
| 26 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `  <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 31 | `  <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `  <div class="list-card">` | Declares a core TypeScript structure used by this module. |
| 34 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 35 | `      <h5 class="mb-0">Users</h5>` | Declares a core TypeScript structure used by this module. |
| 36 | `      <span class="text-muted small">` | Declares a core TypeScript structure used by this module. |
| 37 | `        Showing {{ displayedUsers.length }} {{ filteredUsersByRole ? '(filtered)' : '' }}` | Core implementation line contributing to the file behavior. |
| 38 | `      </span>` | HTML tag opening/closing markup for component template structure. |
| 39 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 40 | `` | Blank line used to separate logical blocks for readability. |
| 41 | `    <div *ngIf="loading" class="text-muted">Loading users...</div>` | Declares a core TypeScript structure used by this module. |
| 42 | `    <div *ngIf="!loading && displayedUsers.length === 0" class="text-muted">No users found.</div>` | Declares a core TypeScript structure used by this module. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `    <div class="table-responsive" *ngIf="!loading && displayedUsers.length > 0">` | Declares a core TypeScript structure used by this module. |
| 45 | `      <table class="table align-middle user-table mb-0">` | Declares a core TypeScript structure used by this module. |
| 46 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 47 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 48 | `            <th>User</th>` | HTML tag opening/closing markup for component template structure. |
| 49 | `            <th>Contact</th>` | HTML tag opening/closing markup for component template structure. |
| 50 | `            <th>Status</th>` | HTML tag opening/closing markup for component template structure. |
| 51 | `            <th>Roles</th>` | HTML tag opening/closing markup for component template structure. |
| 52 | `            <th>Memberships</th>` | HTML tag opening/closing markup for component template structure. |
| 53 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 54 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 55 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 56 | `          <tr class="row-clickable" *ngFor="let user of displayedUsers" (click)="openUserDetail(user.id)">` | Declares a core TypeScript structure used by this module. |
| 57 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 58 | `              <div class="fw-semibold">{{ user.firstName }} {{ user.lastName }}</div>` | Declares a core TypeScript structure used by this module. |
| 59 | `              <div class="text-muted small">{{ user.gender \|\| 'n/a' }} • {{ user.dob ? (user.dob \| date:'yyyy-MM-dd') : 'n/a' }}</div>` | Declares a core TypeScript structure used by this module. |
| 60 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 61 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 62 | `              <div>{{ user.email }}</div>` | HTML tag opening/closing markup for component template structure. |
| 63 | `              <div class="text-muted small">{{ user.phone \|\| 'No phone' }}</div>` | Declares a core TypeScript structure used by this module. |
| 64 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 65 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 66 | `              <span class="badge" [ngClass]="user.status === 'active' ? 'badge-active' : 'badge-inactive'">` | Declares a core TypeScript structure used by this module. |
| 67 | `                {{ user.status \|\| 'unknown' }}` | Core implementation line contributing to the file behavior. |
| 68 | `              </span>` | HTML tag opening/closing markup for component template structure. |
| 69 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 70 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 71 | `              <div class="d-flex flex-wrap gap-1">` | Declares a core TypeScript structure used by this module. |
| 72 | `                <span class="badge text-bg-light" *ngFor="let role of user.roles">{{ role.name }}</span>` | Declares a core TypeScript structure used by this module. |
| 73 | `                <span *ngIf="!user.roles?.length" class="text-muted small">None</span>` | Declares a core TypeScript structure used by this module. |
| 74 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 75 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 76 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 77 | `              <div class="d-flex flex-wrap gap-1">` | Declares a core TypeScript structure used by this module. |
| 78 | `                <span class="badge text-bg-secondary" *ngFor="let membership of user.memberships">{{ membership.name }}</span>` | Declares a core TypeScript structure used by this module. |
| 79 | `                <span *ngIf="!user.memberships?.length" class="text-muted small">None</span>` | Declares a core TypeScript structure used by this module. |
| 80 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 81 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 82 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 83 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 84 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 85 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `    <div class="d-flex justify-content-between align-items-center mt-3" *ngIf="!filteredUsersByRole">` | Declares a core TypeScript structure used by this module. |
| 88 | `      <div class="text-muted small">Total {{ totalDocs }} users • Page {{ page }} / {{ totalPages }}</div>` | Declares a core TypeScript structure used by this module. |
| 89 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 90 | `        <button class="btn btn-sm btn-outline-secondary" [disabled]="!hasPrev \|\| loading" (click)="previousPage()">Previous</button>` | Declares a core TypeScript structure used by this module. |
| 91 | `        <button class="btn btn-sm btn-outline-secondary" [disabled]="!hasNext \|\| loading" (click)="nextPage()">Next</button>` | Declares a core TypeScript structure used by this module. |
| 92 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 94 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 95 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `<div *ngIf="showCreateModal" class="modal-overlay" (click)="onBackdropClick($event, 'create')">` | Declares a core TypeScript structure used by this module. |
| 98 | `  <div class="modal-card">` | Declares a core TypeScript structure used by this module. |
| 99 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 100 | `      <h5 class="mb-0">Create User</h5>` | Declares a core TypeScript structure used by this module. |
| 101 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeCreateModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 102 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `    <form [formGroup]="createForm" (ngSubmit)="createUser()">` | HTML tag opening/closing markup for component template structure. |
| 105 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 106 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 107 | `          <label class="form-label">First Name *</label>` | Declares a core TypeScript structure used by this module. |
| 108 | `          <input class="form-control" formControlName="firstName" />` | Declares a core TypeScript structure used by this module. |
| 109 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 110 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 111 | `          <label class="form-label">Last Name *</label>` | Declares a core TypeScript structure used by this module. |
| 112 | `          <input class="form-control" formControlName="lastName" />` | Declares a core TypeScript structure used by this module. |
| 113 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 114 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 115 | `          <label class="form-label">Email *</label>` | Declares a core TypeScript structure used by this module. |
| 116 | `          <input class="form-control" type="email" formControlName="email" />` | Declares a core TypeScript structure used by this module. |
| 117 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 118 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 119 | `          <label class="form-label">Phone *</label>` | Declares a core TypeScript structure used by this module. |
| 120 | `          <input class="form-control" formControlName="phone" />` | Declares a core TypeScript structure used by this module. |
| 121 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 122 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 123 | `          <label class="form-label">Gender *</label>` | Declares a core TypeScript structure used by this module. |
| 124 | `          <select class="form-select" formControlName="gender">` | Declares a core TypeScript structure used by this module. |
| 125 | `            <option value="male">male</option>` | HTML tag opening/closing markup for component template structure. |
| 126 | `            <option value="female">female</option>` | HTML tag opening/closing markup for component template structure. |
| 127 | `            <option value="other">other</option>` | HTML tag opening/closing markup for component template structure. |
| 128 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 129 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 130 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 131 | `          <label class="form-label">Date of Birth *</label>` | Declares a core TypeScript structure used by this module. |
| 132 | `          <input class="form-control" type="date" formControlName="dob" />` | Declares a core TypeScript structure used by this module. |
| 133 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 134 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 135 | `          <label class="form-label">Role *</label>` | Declares a core TypeScript structure used by this module. |
| 136 | `          <select class="form-select" formControlName="role">` | Declares a core TypeScript structure used by this module. |
| 137 | `            <option *ngFor="let roleName of roleNamesForSelect" [value]="roleName">{{ roleName }}</option>` | HTML tag opening/closing markup for component template structure. |
| 138 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 139 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 140 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 141 | `          <label class="form-label">Address</label>` | Declares a core TypeScript structure used by this module. |
| 142 | `          <input class="form-control" formControlName="address" />` | Declares a core TypeScript structure used by this module. |
| 143 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `        <ng-container *ngIf="isTrainerRoleName(createForm.controls.role.value)">` | HTML tag opening/closing markup for component template structure. |
| 146 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 147 | `            <label class="form-label">Password *</label>` | Declares a core TypeScript structure used by this module. |
| 148 | `            <input class="form-control" type="password" formControlName="password" />` | Declares a core TypeScript structure used by this module. |
| 149 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 150 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 151 | `            <label class="form-label">Private Session Pricing (60 mins) *</label>` | Declares a core TypeScript structure used by this module. |
| 152 | `            <input class="form-control" type="number" min="0" formControlName="ptSessionPrice60" />` | Declares a core TypeScript structure used by this module. |
| 153 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 154 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 155 | `            <label class="form-label">Specialization</label>` | Declares a core TypeScript structure used by this module. |
| 156 | `            <input class="form-control" formControlName="specialization" />` | Declares a core TypeScript structure used by this module. |
| 157 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 158 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 159 | `            <label class="form-label">Experience Years</label>` | Declares a core TypeScript structure used by this module. |
| 160 | `            <input class="form-control" type="number" min="0" formControlName="experienceYears" />` | Declares a core TypeScript structure used by this module. |
| 161 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 162 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 163 | `            <label class="form-label">Certifications (comma separated)</label>` | Declares a core TypeScript structure used by this module. |
| 164 | `            <input class="form-control" formControlName="certifications" placeholder="NASM CPT, Precision Nutrition Level 1" />` | Declares a core TypeScript structure used by this module. |
| 165 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 166 | `          <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 167 | `            <label class="form-label">Areas of Expertise (comma separated)</label>` | Declares a core TypeScript structure used by this module. |
| 168 | `            <input class="form-control" formControlName="areasOfExpertise" placeholder="Hypertrophy, Fat Loss, Mobility" />` | Declares a core TypeScript structure used by this module. |
| 169 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 170 | `          <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 171 | `            <label class="form-label">Biography</label>` | Declares a core TypeScript structure used by this module. |
| 172 | `            <textarea class="form-control" rows="2" formControlName="biography"></textarea>` | Declares a core TypeScript structure used by this module. |
| 173 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 174 | `        </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 175 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 176 | `` | Blank line used to separate logical blocks for readability. |
| 177 | `      <div class="d-flex justify-content-end gap-2 mt-4">` | Declares a core TypeScript structure used by this module. |
| 178 | `        <button type="button" class="btn btn-outline-secondary" (click)="closeCreateModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 179 | `        <button type="submit" class="btn btn-primary" [disabled]="creating">` | Declares a core TypeScript structure used by this module. |
| 180 | `          {{ creating ? 'Creating...' : 'Create User' }}` | Core implementation line contributing to the file behavior. |
| 181 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 182 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 183 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 184 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 185 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 186 | `` | Blank line used to separate logical blocks for readability. |
| 187 | `<div *ngIf="showDetailModal" class="modal-overlay" (click)="onBackdropClick($event, 'detail')">` | Declares a core TypeScript structure used by this module. |
| 188 | `  <div class="modal-card modal-lg-card">` | Declares a core TypeScript structure used by this module. |
| 189 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 190 | `      <h5 class="mb-0">User Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 191 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeDetailModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 192 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 193 | `` | Blank line used to separate logical blocks for readability. |
| 194 | `    <div *ngIf="detailLoading" class="text-muted">Loading user details...</div>` | Declares a core TypeScript structure used by this module. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `    <form *ngIf="!detailLoading && selectedUser" [formGroup]="editForm" (ngSubmit)="updateUser()">` | HTML tag opening/closing markup for component template structure. |
| 197 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 198 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 199 | `          <label class="form-label">First Name *</label>` | Declares a core TypeScript structure used by this module. |
| 200 | `          <input class="form-control" formControlName="firstName" />` | Declares a core TypeScript structure used by this module. |
| 201 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 202 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 203 | `          <label class="form-label">Last Name *</label>` | Declares a core TypeScript structure used by this module. |
| 204 | `          <input class="form-control" formControlName="lastName" />` | Declares a core TypeScript structure used by this module. |
| 205 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 206 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 207 | `          <label class="form-label">Email *</label>` | Declares a core TypeScript structure used by this module. |
| 208 | `          <input class="form-control" type="email" formControlName="email" />` | Declares a core TypeScript structure used by this module. |
| 209 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 210 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 211 | `          <label class="form-label">Phone *</label>` | Declares a core TypeScript structure used by this module. |
| 212 | `          <input class="form-control" formControlName="phone" />` | Declares a core TypeScript structure used by this module. |
| 213 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 214 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 215 | `          <label class="form-label">Gender *</label>` | Declares a core TypeScript structure used by this module. |
| 216 | `          <select class="form-select" formControlName="gender">` | Declares a core TypeScript structure used by this module. |
| 217 | `            <option value="male">male</option>` | HTML tag opening/closing markup for component template structure. |
| 218 | `            <option value="female">female</option>` | HTML tag opening/closing markup for component template structure. |
| 219 | `            <option value="other">other</option>` | HTML tag opening/closing markup for component template structure. |
| 220 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 221 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 222 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 223 | `          <label class="form-label">Date of Birth *</label>` | Declares a core TypeScript structure used by this module. |
| 224 | `          <input class="form-control" type="date" formControlName="dob" />` | Declares a core TypeScript structure used by this module. |
| 225 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 226 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 227 | `          <label class="form-label">Status *</label>` | Declares a core TypeScript structure used by this module. |
| 228 | `          <select class="form-select" formControlName="status">` | Declares a core TypeScript structure used by this module. |
| 229 | `            <option value="active">active</option>` | HTML tag opening/closing markup for component template structure. |
| 230 | `            <option value="inactive">inactive</option>` | HTML tag opening/closing markup for component template structure. |
| 231 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 232 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 233 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 234 | `          <label class="form-label">Primary Role *</label>` | Declares a core TypeScript structure used by this module. |
| 235 | `          <select class="form-select" formControlName="role">` | Declares a core TypeScript structure used by this module. |
| 236 | `            <option *ngFor="let roleName of roleNamesForSelect" [value]="roleName">{{ roleName }}</option>` | HTML tag opening/closing markup for component template structure. |
| 237 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 238 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 239 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 240 | `          <label class="form-label">Address</label>` | Declares a core TypeScript structure used by this module. |
| 241 | `          <input class="form-control" formControlName="address" />` | Declares a core TypeScript structure used by this module. |
| 242 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 243 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 244 | `          <label class="form-label">New Password (optional)</label>` | Declares a core TypeScript structure used by this module. |
| 245 | `          <input class="form-control" type="password" formControlName="password" />` | Declares a core TypeScript structure used by this module. |
| 246 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 247 | `` | Blank line used to separate logical blocks for readability. |
| 248 | `        <ng-container *ngIf="isTrainerUser(selectedUser)">` | HTML tag opening/closing markup for component template structure. |
| 249 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 250 | `            <label class="form-label">Private Session Pricing (60 mins) *</label>` | Declares a core TypeScript structure used by this module. |
| 251 | `            <input class="form-control" type="number" min="0" formControlName="ptSessionPrice60" />` | Declares a core TypeScript structure used by this module. |
| 252 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 253 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 254 | `            <label class="form-label">Specialization</label>` | Declares a core TypeScript structure used by this module. |
| 255 | `            <input class="form-control" formControlName="specialization" />` | Declares a core TypeScript structure used by this module. |
| 256 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 257 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 258 | `            <label class="form-label">Experience Years</label>` | Declares a core TypeScript structure used by this module. |
| 259 | `            <input class="form-control" type="number" min="0" formControlName="experienceYears" />` | Declares a core TypeScript structure used by this module. |
| 260 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 261 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 262 | `            <label class="form-label">Certifications (comma separated)</label>` | Declares a core TypeScript structure used by this module. |
| 263 | `            <input class="form-control" formControlName="certifications" />` | Declares a core TypeScript structure used by this module. |
| 264 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 265 | `          <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 266 | `            <label class="form-label">Areas of Expertise (comma separated)</label>` | Declares a core TypeScript structure used by this module. |
| 267 | `            <input class="form-control" formControlName="areasOfExpertise" />` | Declares a core TypeScript structure used by this module. |
| 268 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 269 | `          <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 270 | `            <label class="form-label">Biography</label>` | Declares a core TypeScript structure used by this module. |
| 271 | `            <textarea class="form-control" rows="2" formControlName="biography"></textarea>` | Declares a core TypeScript structure used by this module. |
| 272 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 273 | `        </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 274 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 275 | `` | Blank line used to separate logical blocks for readability. |
| 276 | `      <div class="role-section mt-4">` | Declares a core TypeScript structure used by this module. |
| 277 | `        <h6 class="mb-2">Roles</h6>` | Declares a core TypeScript structure used by this module. |
| 278 | `        <div class="d-flex flex-wrap gap-2 mb-3">` | Declares a core TypeScript structure used by this module. |
| 279 | `          <span class="badge role-pill" *ngFor="let role of selectedUser.roles">` | Declares a core TypeScript structure used by this module. |
| 280 | `            {{ role.name }}` | Core implementation line contributing to the file behavior. |
| 281 | `            <button` | Core implementation line contributing to the file behavior. |
| 282 | `              type="button"` | Declares a core TypeScript structure used by this module. |
| 283 | `              class="btn btn-sm btn-link text-danger p-0 ms-2 role-remove-btn"` | Declares a core TypeScript structure used by this module. |
| 284 | `              [disabled]="removingRoleId === role.id"` | Core implementation line contributing to the file behavior. |
| 285 | `              (click)="removeRole(role.id)"` | Core implementation line contributing to the file behavior. |
| 286 | `            >` | Core implementation line contributing to the file behavior. |
| 287 | `              {{ removingRoleId === role.id ? '...' : 'x' }}` | Core implementation line contributing to the file behavior. |
| 288 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 289 | `          </span>` | HTML tag opening/closing markup for component template structure. |
| 290 | `          <span *ngIf="!selectedUser.roles?.length" class="text-muted small">No roles assigned</span>` | Declares a core TypeScript structure used by this module. |
| 291 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 292 | `` | Blank line used to separate logical blocks for readability. |
| 293 | `        <label class="form-label">Assign Roles</label>` | Declares a core TypeScript structure used by this module. |
| 294 | `        <div class="assign-roles-grid mb-2">` | Declares a core TypeScript structure used by this module. |
| 295 | `          <label class="assign-role-item" [class.role-disabled]="isRoleAssigned(role.id)" *ngFor="let role of availableRoles">` | Declares a core TypeScript structure used by this module. |
| 296 | `            <input` | Core implementation line contributing to the file behavior. |
| 297 | `              type="checkbox"` | Declares a core TypeScript structure used by this module. |
| 298 | `              class="form-check-input me-2"` | Declares a core TypeScript structure used by this module. |
| 299 | `              [checked]="selectedAssignRoleIds.includes(role.id)"` | Core implementation line contributing to the file behavior. |
| 300 | `              [disabled]="isRoleAssigned(role.id)"` | Core implementation line contributing to the file behavior. |
| 301 | `              (change)="toggleAssignRole(role.id, $any($event.target).checked)"` | Core implementation line contributing to the file behavior. |
| 302 | `            />` | Core implementation line contributing to the file behavior. |
| 303 | `            <span class="fw-medium">{{ role.name }}</span>` | Declares a core TypeScript structure used by this module. |
| 304 | `          </label>` | HTML tag opening/closing markup for component template structure. |
| 305 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 306 | `        <div class="d-flex justify-content-end">` | Declares a core TypeScript structure used by this module. |
| 307 | `          <button` | Core implementation line contributing to the file behavior. |
| 308 | `            type="button"` | Declares a core TypeScript structure used by this module. |
| 309 | `            class="btn btn-outline-primary"` | Declares a core TypeScript structure used by this module. |
| 310 | `            [disabled]="assigningRole \|\| !selectedAssignRoleIds.length"` | Core implementation line contributing to the file behavior. |
| 311 | `            (click)="assignRoles()"` | Core implementation line contributing to the file behavior. |
| 312 | `          >` | Core implementation line contributing to the file behavior. |
| 313 | `            {{ assigningRole ? 'Assigning...' : 'Assign Selected Roles' }}` | Core implementation line contributing to the file behavior. |
| 314 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 315 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 316 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 317 | `` | Blank line used to separate logical blocks for readability. |
| 318 | `      <div class="d-flex justify-content-between mt-4 flex-wrap gap-2">` | Declares a core TypeScript structure used by this module. |
| 319 | `        <button type="button" class="btn btn-outline-danger" [disabled]="deleting" (click)="deleteUser()">` | Declares a core TypeScript structure used by this module. |
| 320 | `          {{ deleting ? 'Deleting...' : 'Delete User' }}` | Core implementation line contributing to the file behavior. |
| 321 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 322 | `        <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 323 | `          <button type="button" class="btn btn-outline-secondary" (click)="closeDetailModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 324 | `          <button type="submit" class="btn btn-primary" [disabled]="updating">` | Declares a core TypeScript structure used by this module. |
| 325 | `            {{ updating ? 'Updating...' : 'Update User' }}` | Core implementation line contributing to the file behavior. |
| 326 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 327 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 328 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 329 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 330 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 331 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.