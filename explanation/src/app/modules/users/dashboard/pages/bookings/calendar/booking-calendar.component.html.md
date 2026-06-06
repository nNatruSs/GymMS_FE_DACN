# Explanation: `src/app/modules/users/dashboard/pages/bookings/calendar/booking-calendar.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/calendar/booking-calendar.component.html`
- **Total lines:** `58`
- **Non-empty lines:** `38`
- **Import statements:** `0`
- **Class-like declarations found:** `15`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `<div *ngIf="loading" class="text-center py-5">` | Declares a core TypeScript structure used by this module. |
| 9 | `  <div class="spinner-border text-primary"></div>` | Declares a core TypeScript structure used by this module. |
| 10 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `<div *ngIf="!loading" class="calendar-wrapper">` | Declares a core TypeScript structure used by this module. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `  ` | Blank line used to separate logical blocks for readability. |
| 15 | `  <div class="calendar-nav">` | Declares a core TypeScript structure used by this module. |
| 16 | `    <button data-testid="calendar-prev-week" class="nav-btn" (click)="prevWeek()">‹</button>` | Declares a core TypeScript structure used by this module. |
| 17 | `    <span class="fw-semibold">{{ monthLabel }}</span>` | Declares a core TypeScript structure used by this module. |
| 18 | `    <button data-testid="calendar-next-week" class="nav-btn" (click)="nextWeek()">›</button>` | Declares a core TypeScript structure used by this module. |
| 19 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `  ` | Blank line used to separate logical blocks for readability. |
| 22 | `  <div class="calendar-grid">` | Declares a core TypeScript structure used by this module. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `    <div></div>` | HTML tag opening/closing markup for component template structure. |
| 25 | `    <div *ngFor="let d of weekDates" class="calendar-header">` | Declares a core TypeScript structure used by this module. |
| 26 | `      {{ d \| date:'EEE dd' }}` | Core implementation line contributing to the file behavior. |
| 27 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `` | Blank line used to separate logical blocks for readability. |
| 29 | `    <ng-container *ngFor="let time of timeSlots">` | HTML tag opening/closing markup for component template structure. |
| 30 | `      <div class="time-label">{{ time }}</div>` | Declares a core TypeScript structure used by this module. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `      <div` | Core implementation line contributing to the file behavior. |
| 33 | `        data-testid="calendar-cell"` | Core implementation line contributing to the file behavior. |
| 34 | `        *ngFor="let d of weekDates"` | Block comment content (documentation for nearby code). |
| 35 | `        class="calendar-cell"` | Declares a core TypeScript structure used by this module. |
| 36 | `        [class.class-booking]="isClass(d,time)"` | Declares a core TypeScript structure used by this module. |
| 37 | `        [class.past-day]="isPast(d)"` | Declares a core TypeScript structure used by this module. |
| 38 | `        (click)="getBooking(d,time) && openBooking(getBooking(d,time))"` | Core implementation line contributing to the file behavior. |
| 39 | `      >` | Core implementation line contributing to the file behavior. |
| 40 | `        {{ getBooking(d,time)?.title }}` | Core implementation line contributing to the file behavior. |
| 41 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 42 | `    </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 43 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `  ` | Blank line used to separate logical blocks for readability. |
| 46 | `  <div class="calendar-legend">` | Declares a core TypeScript structure used by this module. |
| 47 | `    <div><span class="dot class"></span> Class booking</div>` | Declares a core TypeScript structure used by this module. |
| 48 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `<app-booking-calendar-modal` | Core implementation line contributing to the file behavior. |
| 54 | `  *ngIf="selectedBooking"` | Block comment content (documentation for nearby code). |
| 55 | `  [booking]="selectedBooking"` | Core implementation line contributing to the file behavior. |
| 56 | `  (close)="closeModal()"` | Core implementation line contributing to the file behavior. |
| 57 | `  (cancel)="cancelBooking($event)">` | Core implementation line contributing to the file behavior. |
| 58 | `</app-booking-calendar-modal>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.