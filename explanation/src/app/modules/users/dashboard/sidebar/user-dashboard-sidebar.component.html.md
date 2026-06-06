# Explanation: `src/app/modules/users/dashboard/sidebar/user-dashboard-sidebar.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/sidebar/user-dashboard-sidebar.component.html`
- **Total lines:** `93`
- **Non-empty lines:** `73`
- **Import statements:** `0`
- **Class-like declarations found:** `28`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `<nav` | Core implementation line contributing to the file behavior. |
| 5 | `  class="sidebar d-flex flex-column p-3 text-white"` | Declares a core TypeScript structure used by this module. |
| 6 | `  [class.collapsed]="collapsed"` | Declares a core TypeScript structure used by this module. |
| 7 | `>` | Core implementation line contributing to the file behavior. |
| 8 | `  ` | Blank line used to separate logical blocks for readability. |
| 9 | `  <div class="d-flex align-items-center justify-content-between mb-4">` | Declares a core TypeScript structure used by this module. |
| 10 | `    <span class="fs-5 fw-bold" *ngIf="!collapsed">Dashboard</span>` | Declares a core TypeScript structure used by this module. |
| 11 | `    <button` | Core implementation line contributing to the file behavior. |
| 12 | `      data-testid="user-sidebar-toggle"` | Core implementation line contributing to the file behavior. |
| 13 | `      class="btn btn-sm btn-outline-light ms-1"` | Declares a core TypeScript structure used by this module. |
| 14 | `      (click)="toggleSidebar()"` | Core implementation line contributing to the file behavior. |
| 15 | `    >` | Core implementation line contributing to the file behavior. |
| 16 | `      <i class="bi bi-list"></i>` | Declares a core TypeScript structure used by this module. |
| 17 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 18 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `  ` | Blank line used to separate logical blocks for readability. |
| 21 | `  <ul class="nav nav-pills flex-column gap-1 flex-grow-1">` | Declares a core TypeScript structure used by this module. |
| 22 | `` | Blank line used to separate logical blocks for readability. |
| 23 | `    ` | Blank line used to separate logical blocks for readability. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 26 | `      <a data-testid="nav-memberships" routerLink="/user/dashboard/membership-management"` | Core implementation line contributing to the file behavior. |
| 27 | `         routerLinkActive="active"` | Core implementation line contributing to the file behavior. |
| 28 | `         class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 29 | `        <i class="bi bi-credit-card me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 30 | `        <span *ngIf="!collapsed">Memberships</span>` | HTML tag opening/closing markup for component template structure. |
| 31 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 32 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 35 | `      <a data-testid="nav-bookings" routerLink="/user/dashboard/bookings"` | Core implementation line contributing to the file behavior. |
| 36 | `         routerLinkActive="active"` | Core implementation line contributing to the file behavior. |
| 37 | `         class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 38 | `        <i class="bi bi-calendar-check me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 39 | `        <span *ngIf="!collapsed">My Bookings</span>` | HTML tag opening/closing markup for component template structure. |
| 40 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 41 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 44 | `      <a data-testid="nav-workout-sessions" routerLink="/user/dashboard/workout-sessions"` | Core implementation line contributing to the file behavior. |
| 45 | `         routerLinkActive="active"` | Core implementation line contributing to the file behavior. |
| 46 | `         class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 47 | `        <i class="bi bi-heart-pulse me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 48 | `        <span *ngIf="!collapsed">Workout Sessions</span>` | HTML tag opening/closing markup for component template structure. |
| 49 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 50 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 54 | `      <a data-testid="nav-feedback" routerLink="/user/dashboard/feedback"` | Core implementation line contributing to the file behavior. |
| 55 | `         routerLinkActive="active"` | Core implementation line contributing to the file behavior. |
| 56 | `         class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 57 | `        <i class="bi bi-chat-dots me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 58 | `        <span *ngIf="!collapsed">Feedback</span>` | HTML tag opening/closing markup for component template structure. |
| 59 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 60 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `    ` | Blank line used to separate logical blocks for readability. |
| 63 | `    <li class="sidebar-divider my-3"></li>` | Declares a core TypeScript structure used by this module. |
| 64 | `` | Blank line used to separate logical blocks for readability. |
| 65 | `    ` | Blank line used to separate logical blocks for readability. |
| 66 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 67 | `      <a data-testid="nav-messages" routerLink="/user/dashboard/messages"` | Core implementation line contributing to the file behavior. |
| 68 | `         routerLinkActive="active"` | Core implementation line contributing to the file behavior. |
| 69 | `         class="nav-link text-white d-flex align-items-center">` | Declares a core TypeScript structure used by this module. |
| 70 | `        <i class="bi bi-chat-left-text me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 71 | `        <span *ngIf="!collapsed" class="flex-grow-1">Messages</span>` | Declares a core TypeScript structure used by this module. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `        ` | Blank line used to separate logical blocks for readability. |
| 74 | `        <span` | Core implementation line contributing to the file behavior. |
| 75 | `          data-testid="nav-messages-unread-badge"` | Core implementation line contributing to the file behavior. |
| 76 | `          *ngIf="!collapsed && unreadMessages > 0"` | Block comment content (documentation for nearby code). |
| 77 | `          class="badge bg-danger rounded-pill ms-auto"` | Declares a core TypeScript structure used by this module. |
| 78 | `        >` | Core implementation line contributing to the file behavior. |
| 79 | `          {{ unreadMessages }}` | Core implementation line contributing to the file behavior. |
| 80 | `        </span>` | HTML tag opening/closing markup for component template structure. |
| 81 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 82 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 83 | `    <li class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 84 | `      <a data-testid="nav-chatbot" routerLink="/user/dashboard/chatbot"` | Core implementation line contributing to the file behavior. |
| 85 | `         routerLinkActive="active"` | Core implementation line contributing to the file behavior. |
| 86 | `         class="nav-link text-white">` | Declares a core TypeScript structure used by this module. |
| 87 | `        <i class="bi bi-robot me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 88 | `        <span *ngIf="!collapsed">Chatbot</span>` | HTML tag opening/closing markup for component template structure. |
| 89 | `      </a>` | HTML tag opening/closing markup for component template structure. |
| 90 | `    </li>` | HTML tag opening/closing markup for component template structure. |
| 91 | `` | Blank line used to separate logical blocks for readability. |
| 92 | `  </ul>` | HTML tag opening/closing markup for component template structure. |
| 93 | `</nav>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.