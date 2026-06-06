# Explanation: `src/app/modules/admin/components/admin-sidebar/admin-sidebar.component.html`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-sidebar/admin-sidebar.component.html`
- **Total lines:** `47`
- **Non-empty lines:** `40`
- **Import statements:** `0`
- **Class-like declarations found:** `21`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<nav class="sidebar d-flex flex-column p-3 text-white" [class.collapsed]="collapsed">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="d-flex align-items-center justify-content-between mb-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <span class="fs-5 fw-bold" *ngIf="!collapsed">Dashboard</span>` | Declares a core TypeScript structure used by this module. |
| 4 | `    <button data-testid="admin-sidebar-toggle" class="btn btn-sm btn-outline-light ms-1" (click)="toggleSidebar()">` | Declares a core TypeScript structure used by this module. |
| 5 | `      <i class="bi bi-list"></i>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 7 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `  <ul class="nav nav-pills flex-column gap-1 flex-grow-1">` | Declares a core TypeScript structure used by this module. |
| 10 | `    ` | Blank line used to separate logical blocks for readability. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 13 | `      <a data-testid="admin-nav-memberships" routerLink="/admin/dashboard/memberships" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 14 | `        <i class="bi bi-credit-card me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 15 | `        <span *ngIf="!collapsed">Memberships</span>` | HTML tag opening/closing markup for component template structure. |
| 16 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 17 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 20 | `      <a data-testid="admin-nav-users" routerLink="/admin/dashboard/users" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 21 | `        <i class="bi bi-people me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 22 | `        <span *ngIf="!collapsed">Users</span>` | HTML tag opening/closing markup for component template structure. |
| 23 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 24 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 25 | `` | Blank line used to separate logical blocks for readability. |
| 26 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 27 | `      <a data-testid="admin-nav-roles" routerLink="/admin/dashboard/roles" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 28 | `        <i class="bi bi-shield-lock me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 29 | `        <span *ngIf="!collapsed">Roles</span>` | HTML tag opening/closing markup for component template structure. |
| 30 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 31 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 34 | `      <a data-testid="admin-nav-class-schedules" routerLink="/admin/dashboard/class-schedules" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 35 | `        <i class="bi bi-calendar-week me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 36 | `        <span *ngIf="!collapsed">Class Scheduling</span>` | HTML tag opening/closing markup for component template structure. |
| 37 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 38 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 41 | `      <a data-testid="admin-nav-reporting" routerLink="/admin/dashboard/reporting" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 42 | `        <i class="bi bi-graph-up-arrow me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 43 | `        <span *ngIf="!collapsed">Reporting</span>` | HTML tag opening/closing markup for component template structure. |
| 44 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 45 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 46 | `  </ul>` | HTML tag opening/closing markup for component template structure. |
| 47 | `</nav>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.