# Explanation: `src/app/modules/users/dashboard/pages/bookings/calendar/booking-calendar-modal/booking-calendar-modal.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/calendar/booking-calendar-modal/booking-calendar-modal.component.html`
- **Total lines:** `101`
- **Non-empty lines:** `74`
- **Import statements:** `0`
- **Class-like declarations found:** `27`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `<div class="modal-backdrop-custom" (click)="close.emit()"></div>` | Declares a core TypeScript structure used by this module. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `<div data-testid="calendar-booking-modal" class="modal-container">` | Declares a core TypeScript structure used by this module. |
| 7 | `  <div class="modal-card">` | Declares a core TypeScript structure used by this module. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `    ` | Blank line used to separate logical blocks for readability. |
| 10 | `    <div class="modal-header">` | Declares a core TypeScript structure used by this module. |
| 11 | `      <h5 class="fw-semibold mb-0">Booking Details</h5>` | Declares a core TypeScript structure used by this module. |
| 12 | `      <button class="btn-close" (click)="close.emit()"></button>` | Declares a core TypeScript structure used by this module. |
| 13 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 14 | `` | Blank line used to separate logical blocks for readability. |
| 15 | `    ` | Blank line used to separate logical blocks for readability. |
| 16 | `    <div class="modal-body">` | Declares a core TypeScript structure used by this module. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `      ` | Blank line used to separate logical blocks for readability. |
| 19 | `      <div class="image-wrapper mb-3">` | Declares a core TypeScript structure used by this module. |
| 20 | `        <img` | Core implementation line contributing to the file behavior. |
| 21 | `          *ngIf="booking.thumbnail"` | Block comment content (documentation for nearby code). |
| 22 | `          [src]="booking.thumbnail"` | Core implementation line contributing to the file behavior. |
| 23 | `          alt=""` | Core implementation line contributing to the file behavior. |
| 24 | `        />` | Core implementation line contributing to the file behavior. |
| 25 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `      ` | Blank line used to separate logical blocks for readability. |
| 28 | `      <h4 class="fw-bold mb-1">{{ booking.title }}</h4>` | Declares a core TypeScript structure used by this module. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `      <div class="mb-2 text-muted">` | Declares a core TypeScript structure used by this module. |
| 31 | `        <strong *ngIf="booking.type === 'trainer'">` | Declares a core TypeScript structure used by this module. |
| 32 | `          Trainer:` | Core implementation line contributing to the file behavior. |
| 33 | `        </strong>` | HTML tag opening/closing markup for component template structure. |
| 34 | `        <strong *ngIf="booking.type === 'class'">` | Declares a core TypeScript structure used by this module. |
| 35 | `          Class:` | Core implementation line contributing to the file behavior. |
| 36 | `        </strong>` | HTML tag opening/closing markup for component template structure. |
| 37 | `        {{ booking.title }}` | Core implementation line contributing to the file behavior. |
| 38 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `      ` | Blank line used to separate logical blocks for readability. |
| 41 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 42 | `        <span` | Core implementation line contributing to the file behavior. |
| 43 | `          class="badge me-2"` | Declares a core TypeScript structure used by this module. |
| 44 | `          [class.bg-info]="booking.type === 'class'"` | Declares a core TypeScript structure used by this module. |
| 45 | `          [class.bg-primary]="booking.type === 'trainer'"` | Declares a core TypeScript structure used by this module. |
| 46 | `        >` | Core implementation line contributing to the file behavior. |
| 47 | `          {{ booking.type \| titlecase }} Session` | Declares a core TypeScript structure used by this module. |
| 48 | `        </span>` | HTML tag opening/closing markup for component template structure. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `        <span` | Core implementation line contributing to the file behavior. |
| 51 | `          class="badge"` | Declares a core TypeScript structure used by this module. |
| 52 | `          [class.bg-warning]="booking.status === 'upcoming'"` | Declares a core TypeScript structure used by this module. |
| 53 | `          [class.bg-danger]="booking.status === 'cancelled'"` | Declares a core TypeScript structure used by this module. |
| 54 | `        >` | Core implementation line contributing to the file behavior. |
| 55 | `          {{ booking.status }}` | Core implementation line contributing to the file behavior. |
| 56 | `        </span>` | HTML tag opening/closing markup for component template structure. |
| 57 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `      <hr />` | HTML tag opening/closing markup for component template structure. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `      ` | Blank line used to separate logical blocks for readability. |
| 62 | `      <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 63 | `        <i class="bi bi-calendar-event me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 64 | `        {{ booking.date }} • {{ booking.time }}` | Core implementation line contributing to the file behavior. |
| 65 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 66 | `` | Blank line used to separate logical blocks for readability. |
| 67 | `      ` | Blank line used to separate logical blocks for readability. |
| 68 | `      <div *ngIf="booking.branchName" class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 69 | `        <i class="bi bi-geo-alt me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 70 | `        {{ booking.branchName }}` | Core implementation line contributing to the file behavior. |
| 71 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `      <div *ngIf="booking.specialties?.length" class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 74 | `        <span class="small text-muted d-block mb-1">` | Declares a core TypeScript structure used by this module. |
| 75 | `          Trainer Specialties` | Core implementation line contributing to the file behavior. |
| 76 | `        </span>` | HTML tag opening/closing markup for component template structure. |
| 77 | `        <span` | Core implementation line contributing to the file behavior. |
| 78 | `          *ngFor="let s of booking.specialties"` | Block comment content (documentation for nearby code). |
| 79 | `          class="badge bg-light text-dark me-2"` | Declares a core TypeScript structure used by this module. |
| 80 | `        >` | Core implementation line contributing to the file behavior. |
| 81 | `          {{ s }}` | Core implementation line contributing to the file behavior. |
| 82 | `        </span>` | HTML tag opening/closing markup for component template structure. |
| 83 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 84 | `` | Blank line used to separate logical blocks for readability. |
| 85 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `    ` | Blank line used to separate logical blocks for readability. |
| 88 | `    <div class="modal-footer">` | Declares a core TypeScript structure used by this module. |
| 89 | `` | Blank line used to separate logical blocks for readability. |
| 90 | `      <button` | Core implementation line contributing to the file behavior. |
| 91 | `        data-testid="calendar-cancel-booking"` | Core implementation line contributing to the file behavior. |
| 92 | `        *ngIf="booking.status === 'upcoming'"` | Block comment content (documentation for nearby code). |
| 93 | `        class="btn btn-danger"` | Declares a core TypeScript structure used by this module. |
| 94 | `        (click)="cancelBooking()"` | Core implementation line contributing to the file behavior. |
| 95 | `      >` | Core implementation line contributing to the file behavior. |
| 96 | `        Cancel Booking` | Core implementation line contributing to the file behavior. |
| 97 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 98 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 99 | `` | Blank line used to separate logical blocks for readability. |
| 100 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 101 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.