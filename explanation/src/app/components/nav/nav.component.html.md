# Explanation: `src/app/components/nav/nav.component.html`

## File Overview
- **Relative path:** `src/app/components/nav/nav.component.html`
- **Total lines:** `158`
- **Non-empty lines:** `130`
- **Import statements:** `0`
- **Class-like declarations found:** `61`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">` | Declares a core TypeScript structure used by this module. |
| 3 | `  <div class="container px-5">` | Declares a core TypeScript structure used by this module. |
| 4 | `    ` | Blank line used to separate logical blocks for readability. |
| 5 | `    ` | Blank line used to separate logical blocks for readability. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `<a class="navbar-brand" routerLink="/home">` | Declares a core TypeScript structure used by this module. |
| 8 | `  <img src="assets/gym_ms_logo.png" alt="Logo" class="img-fluid" style="height: 50px;">` | Declares a core TypeScript structure used by this module. |
| 9 | `  GymMS` | Core implementation line contributing to the file behavior. |
| 10 | `</a>` | HTML tag opening/closing markup for component template structure. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `    ` | Blank line used to separate logical blocks for readability. |
| 13 | `    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">` | Declares a core TypeScript structure used by this module. |
| 14 | `      <span class="navbar-toggler-icon"></span>` | Declares a core TypeScript structure used by this module. |
| 15 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `    ` | Blank line used to separate logical blocks for readability. |
| 18 | `    <div class="collapse navbar-collapse" id="navbarSupportedContent">` | Declares a core TypeScript structure used by this module. |
| 19 | `      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">` | Declares a core TypeScript structure used by this module. |
| 20 | `        <li class="nav-item"><a class="nav-link" routerLink="/home">Home</a></li>` | Declares a core TypeScript structure used by this module. |
| 21 | `        <li class="nav-item"><a class="nav-link" routerLink="/solutions">Solutions</a></li>` | Declares a core TypeScript structure used by this module. |
| 22 | `        <li class="nav-item"><a class="nav-link" routerLink="/our-services">Our Services</a></li>` | Declares a core TypeScript structure used by this module. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `        ` | Blank line used to separate logical blocks for readability. |
| 26 | `        <li *ngIf="isUserLoggedIn" class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 27 | `          <a class="nav-link" routerLink="/user/dashboard">` | Declares a core TypeScript structure used by this module. |
| 28 | `            <i class="fas fa-grip-horizontal"></i> Dashboard` | Declares a core TypeScript structure used by this module. |
| 29 | `          </a>` | HTML tag opening/closing markup for component template structure. |
| 30 | `        </li>` | HTML tag opening/closing markup for component template structure. |
| 31 | `        <li *ngIf="isAdminLoggedIn" class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 32 | `          <a class="nav-link" routerLink="/admin/dashboard">` | Declares a core TypeScript structure used by this module. |
| 33 | `            <i class="fas fa-grip-horizontal"></i> Dashboard` | Declares a core TypeScript structure used by this module. |
| 34 | `          </a>` | HTML tag opening/closing markup for component template structure. |
| 35 | `        </li>` | HTML tag opening/closing markup for component template structure. |
| 36 | `        <li *ngIf="isTrainerLoggedIn" class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 37 | `          <a class="nav-link" routerLink="/trainer/dashboard">` | Declares a core TypeScript structure used by this module. |
| 38 | `            <i class="fas fa-grip-horizontal"></i> Dashboard` | Declares a core TypeScript structure used by this module. |
| 39 | `          </a>` | HTML tag opening/closing markup for component template structure. |
| 40 | `        </li>` | HTML tag opening/closing markup for component template structure. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `        <li *ngIf="isAnyRoleLoggedIn()" class="nav-item position-relative">` | Declares a core TypeScript structure used by this module. |
| 43 | `          <button type="button" class="btn btn-link nav-link align-items-center" (click)="toggleNotifications()">` | Declares a core TypeScript structure used by this module. |
| 44 | `            <i class="fas fa-bell me-1"></i>` | Declares a core TypeScript structure used by this module. |
| 45 | `            <span *ngIf="unreadCount > 0" class="badge bg-danger rounded-pill ms-2">{{ unreadCount }}</span>` | Declares a core TypeScript structure used by this module. |
| 46 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `          <div class="notification-dropdown shadow-sm" *ngIf="showNotifications">` | Declares a core TypeScript structure used by this module. |
| 49 | `            <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 50 | `              <strong>Notifications</strong>` | HTML tag opening/closing markup for component template structure. |
| 51 | `              <button type="button" class="btn btn-sm btn-outline-primary" (click)="markAllNotificationsRead()">` | Declares a core TypeScript structure used by this module. |
| 52 | `                Mark all read` | Core implementation line contributing to the file behavior. |
| 53 | `              </button>` | HTML tag opening/closing markup for component template structure. |
| 54 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `            <div *ngIf="loadingNotifications" class="small text-muted">Loading...</div>` | Declares a core TypeScript structure used by this module. |
| 57 | `            <div *ngIf="!loadingNotifications && notifications.length === 0" class="small text-muted">` | Declares a core TypeScript structure used by this module. |
| 58 | `              No notifications.` | Core implementation line contributing to the file behavior. |
| 59 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `            <button` | Core implementation line contributing to the file behavior. |
| 62 | `              type="button"` | Declares a core TypeScript structure used by this module. |
| 63 | `              *ngFor="let n of notifications"` | Block comment content (documentation for nearby code). |
| 64 | `              class="notification-item py-2 border-bottom text-start w-100 btn btn-link text-decoration-none"` | Declares a core TypeScript structure used by this module. |
| 65 | `              (click)="onNotificationClick(n)"` | Core implementation line contributing to the file behavior. |
| 66 | `            >` | Core implementation line contributing to the file behavior. |
| 67 | `              <div class="small">{{ notificationText(n) }}</div>` | Declares a core TypeScript structure used by this module. |
| 68 | `              <div class="text-muted tiny" *ngIf="n.createdAt">{{ n.createdAt \| date:'short' }}</div>` | Declares a core TypeScript structure used by this module. |
| 69 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 70 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 71 | `        </li>` | HTML tag opening/closing markup for component template structure. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `        ` | Blank line used to separate logical blocks for readability. |
| 74 | `        <li *ngIf="!isUserLoggedIn && !isAdminLoggedIn && !isTrainerLoggedIn" class="nav-item">` | Declares a core TypeScript structure used by this module. |
| 75 | `          <a class="nav-link" routerLink="/login">` | Declares a core TypeScript structure used by this module. |
| 76 | `            <i class="fas fa-sign-in-alt"></i> Sign In` | Declares a core TypeScript structure used by this module. |
| 77 | `          </a>` | HTML tag opening/closing markup for component template structure. |
| 78 | `        </li>` | HTML tag opening/closing markup for component template structure. |
| 79 | `         ` | Blank line used to separate logical blocks for readability. |
| 80 | `         <li *ngIf="isUserLoggedIn \|\| isAdminLoggedIn \|\| isTrainerLoggedIn" class="nav-item dropdown">` | Declares a core TypeScript structure used by this module. |
| 81 | `          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">` | Declares a core TypeScript structure used by this module. |
| 82 | `            <i class="fas fa-user"></i> {{ userName }}` | Declares a core TypeScript structure used by this module. |
| 83 | `          </a>` | HTML tag opening/closing markup for component template structure. |
| 84 | `          <ul class="dropdown-menu" aria-labelledby="userDropdown">` | Declares a core TypeScript structure used by this module. |
| 85 | `            <li><a class="dropdown-item" routerLink="/profile">Profile</a></li>` | Declares a core TypeScript structure used by this module. |
| 86 | `            <li><a class="dropdown-item" (click)="onSignOutClick()">Sign Out</a></li>` | Declares a core TypeScript structure used by this module. |
| 87 | `          </ul>` | HTML tag opening/closing markup for component template structure. |
| 88 | `        </li>` | HTML tag opening/closing markup for component template structure. |
| 89 | `` | Blank line used to separate logical blocks for readability. |
| 90 | `        ` | Blank line used to separate logical blocks for readability. |
| 91 | `      </ul>` | HTML tag opening/closing markup for component template structure. |
| 92 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 94 | `</nav>` | HTML tag opening/closing markup for component template structure. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `<div` | Core implementation line contributing to the file behavior. |
| 97 | `  *ngIf="showBookingRequestModal"` | Block comment content (documentation for nearby code). |
| 98 | `  class="booking-request-modal-overlay"` | Declares a core TypeScript structure used by this module. |
| 99 | `  (click)="closeBookingRequestModal()"` | Core implementation line contributing to the file behavior. |
| 100 | `>` | Core implementation line contributing to the file behavior. |
| 101 | `  <div class="booking-request-modal-card" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 102 | `    <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 103 | `      <h5 class="mb-0">Trainer Booking Request</h5>` | Declares a core TypeScript structure used by this module. |
| 104 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeBookingRequestModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 105 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 106 | `` | Blank line used to separate logical blocks for readability. |
| 107 | `    <div class="small mb-3">` | Declares a core TypeScript structure used by this module. |
| 108 | `      <div><strong>Title:</strong> {{ selectedBookingNotification?.title \|\| 'New trainer booking request' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 109 | `      <div><strong>Message:</strong> {{ selectedBookingNotification?.message \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 110 | `      <div><strong>Start:</strong> {{ bookingStartAt() \| date:'yyyy-MM-dd HH:mm' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 111 | `      <div><strong>End:</strong> {{ bookingEndAt() \| date:'yyyy-MM-dd HH:mm' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 112 | `      <div><strong>Booking ID:</strong> {{ selectedBookingNotification?.['metadata']?.bookingId \|\| selectedBookingNotification?.['referenceId'] }}</div>` | HTML tag opening/closing markup for component template structure. |
| 113 | `      <div *ngIf="selectedBookingDetail?.member"><strong>Member:</strong> {{ selectedBookingDetail.member.firstName }} {{ selectedBookingDetail.member.lastName }} ({{ selectedBookingDetail.member.email }})</div>` | HTML tag opening/closing markup for component template structure. |
| 114 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 115 | `` | Blank line used to separate logical blocks for readability. |
| 116 | `    <div *ngIf="bookingActionError" class="alert alert-warning py-2 mb-2">{{ bookingActionError }}</div>` | Declares a core TypeScript structure used by this module. |
| 117 | `` | Blank line used to separate logical blocks for readability. |
| 118 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 119 | `      <button class="btn btn-outline-danger" [disabled]="bookingActionLoading" (click)="rejectBookingFromNotification()">` | Declares a core TypeScript structure used by this module. |
| 120 | `        Reject` | Core implementation line contributing to the file behavior. |
| 121 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 122 | `      <button class="btn btn-primary" [disabled]="bookingActionLoading" (click)="acceptBookingFromNotification()">` | Declares a core TypeScript structure used by this module. |
| 123 | `        {{ bookingActionLoading ? 'Processing...' : 'Accept' }}` | Core implementation line contributing to the file behavior. |
| 124 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 125 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 126 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 127 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 128 | `` | Blank line used to separate logical blocks for readability. |
| 129 | `<div` | Core implementation line contributing to the file behavior. |
| 130 | `  *ngIf="showBookingPaymentModal"` | Block comment content (documentation for nearby code). |
| 131 | `  class="booking-request-modal-overlay"` | Declares a core TypeScript structure used by this module. |
| 132 | `  (click)="closeBookingPaymentModal()"` | Core implementation line contributing to the file behavior. |
| 133 | `>` | Core implementation line contributing to the file behavior. |
| 134 | `  <div class="booking-request-modal-card" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 135 | `    <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 136 | `      <h5 class="mb-0">Trainer Booking Accepted</h5>` | Declares a core TypeScript structure used by this module. |
| 137 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeBookingPaymentModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 138 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 139 | `` | Blank line used to separate logical blocks for readability. |
| 140 | `    <div class="small mb-3">` | Declares a core TypeScript structure used by this module. |
| 141 | `      <div><strong>Title:</strong> {{ selectedPaymentNotification?.title \|\| 'Trainer booking accepted' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 142 | `      <div><strong>Message:</strong> {{ selectedPaymentNotification?.message \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 143 | `      <div><strong>Start:</strong> {{ paymentBookingStartAt() \| date:'yyyy-MM-dd HH:mm' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 144 | `      <div><strong>End:</strong> {{ paymentBookingEndAt() \| date:'yyyy-MM-dd HH:mm' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 145 | `      <div><strong>Booking ID:</strong> {{ paymentTargetBookingId() }}</div>` | HTML tag opening/closing markup for component template structure. |
| 146 | `      <div><strong>Amount:</strong> 50,000 VND</div>` | HTML tag opening/closing markup for component template structure. |
| 147 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 148 | `` | Blank line used to separate logical blocks for readability. |
| 149 | `    <div *ngIf="paymentCheckoutError" class="alert alert-warning py-2 mb-2">{{ paymentCheckoutError }}</div>` | Declares a core TypeScript structure used by this module. |
| 150 | `` | Blank line used to separate logical blocks for readability. |
| 151 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 152 | `      <button class="btn btn-outline-secondary" [disabled]="paymentCheckoutLoading" (click)="closeBookingPaymentModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 153 | `      <button class="btn btn-primary" [disabled]="paymentCheckoutLoading" (click)="startTrainerBookingCheckout()">` | Declares a core TypeScript structure used by this module. |
| 154 | `        {{ paymentCheckoutLoading ? 'Redirecting...' : 'Checkout' }}` | Core implementation line contributing to the file behavior. |
| 155 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 156 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 157 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 158 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.