# Explanation: `src/app/modules/trainer/components/trainer-sidebar/trainer-sidebar.component.html`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-sidebar/trainer-sidebar.component.html`
- **Total lines:** `50`
- **Non-empty lines:** `44`
- **Import statements:** `0`
- **Class-like declarations found:** `24`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<nav class="sidebar d-flex flex-column p-3 text-white" [class.collapsed]="collapsed">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="d-flex align-items-center justify-content-between mb-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <span class="fs-5 fw-bold" *ngIf="!collapsed">Trainer</span>` | Declares a core TypeScript structure used by this module. |
| 4 | `    <button data-testid="trainer-sidebar-toggle" class="btn btn-sm btn-outline-light ms-1" (click)="toggleSidebar()">` | Declares a core TypeScript structure used by this module. |
| 5 | `      <i class="bi bi-list"></i>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 7 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `  <ul class="nav nav-pills flex-column gap-1 flex-grow-1">` | Declares a core TypeScript structure used by this module. |
| 10 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 11 | `      <a data-testid="trainer-nav-schedule" routerLink="/trainer/dashboard/schedule" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 12 | `        <i class="bi bi-calendar-week me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 13 | `        <span *ngIf="!collapsed">Schedule</span>` | HTML tag opening/closing markup for component template structure. |
| 14 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 15 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 18 | `      <a data-testid="trainer-nav-clients" routerLink="/trainer/dashboard/my-clients" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 19 | `        <i class="bi bi-people me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 20 | `        <span *ngIf="!collapsed">My Clients</span>` | HTML tag opening/closing markup for component template structure. |
| 21 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 22 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 25 | `      <a data-testid="trainer-nav-workout" routerLink="/trainer/dashboard/workout" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 26 | `        <i class="bi bi-activity me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 27 | `        <span *ngIf="!collapsed">Workout</span>` | HTML tag opening/closing markup for component template structure. |
| 28 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 29 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 32 | `      <a data-testid="trainer-nav-diet-plans" routerLink="/trainer/dashboard/diet-plans" routerLinkActive="active" class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 33 | `        <i class="bi bi-egg-fried me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 34 | `        <span *ngIf="!collapsed">Diet Plans</span>` | HTML tag opening/closing markup for component template structure. |
| 35 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 36 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `    <li class="sidebar-divider my-3"></li>` | Declares a core TypeScript structure used by this module. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 41 | `      <a data-testid="trainer-nav-messages" routerLink="/trainer/dashboard/messages" routerLinkActive="active" class="nav-link text-white d-flex align-items-center">` | Declares a core TypeScript structure used by this module. |
| 42 | `        <i class="bi bi-chat-left-text me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 43 | `        <span *ngIf="!collapsed" class="flex-grow-1">Messages</span>` | Declares a core TypeScript structure used by this module. |
| 44 | `        <span data-testid="trainer-nav-unread-badge" *ngIf="!collapsed && unreadMessages > 0" class="badge bg-danger rounded-pill ms-auto">` | Declares a core TypeScript structure used by this module. |
| 45 | `          {{ unreadMessages }}` | Core implementation line contributing to the file behavior. |
| 46 | `        </span>` | HTML tag opening/closing markup for component template structure. |
| 47 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 48 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 49 | `  </ul>` | HTML tag opening/closing markup for component template structure. |
| 50 | `</nav>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.