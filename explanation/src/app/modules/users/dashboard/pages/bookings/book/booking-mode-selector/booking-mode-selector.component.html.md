# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-mode-selector/booking-mode-selector.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-mode-selector/booking-mode-selector.component.html`
- **Total lines:** `45`
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
| 3 | `<div class="mode-header mb-4 d-flex align-items-center">` | Declares a core TypeScript structure used by this module. |
| 4 | `  <button` | Core implementation line contributing to the file behavior. |
| 5 | `    class="back-btn me-3"` | Declares a core TypeScript structure used by this module. |
| 6 | `    type="button"` | Declares a core TypeScript structure used by this module. |
| 7 | `    (click)="back.emit()"` | Core implementation line contributing to the file behavior. |
| 8 | `    aria-label="Go back"` | Core implementation line contributing to the file behavior. |
| 9 | `  >` | Core implementation line contributing to the file behavior. |
| 10 | `    <i class="bi bi-arrow-left"></i>` | Declares a core TypeScript structure used by this module. |
| 11 | `  </button>` | HTML tag opening/closing markup for component template structure. |
| 12 | `  <h5 class="fw-semibold mb-0">` | Declares a core TypeScript structure used by this module. |
| 13 | `    {{ branch.name }} — Choose your class type preference!` | Declares a core TypeScript structure used by this module. |
| 14 | `  </h5>` | HTML tag opening/closing markup for component template structure. |
| 15 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `<div class="mode-grid">` | Declares a core TypeScript structure used by this module. |
| 18 | `  ` | Blank line used to separate logical blocks for readability. |
| 19 | `  <div` | Core implementation line contributing to the file behavior. |
| 20 | `    data-testid="booking-mode-class"` | Declares a core TypeScript structure used by this module. |
| 21 | `    class="mode-card class"` | Declares a core TypeScript structure used by this module. |
| 22 | `    [class.disabled]="disabled"` | Declares a core TypeScript structure used by this module. |
| 23 | `    (click)="choose('class')">` | Declares a core TypeScript structure used by this module. |
| 24 | `    <div class="overlay">` | Declares a core TypeScript structure used by this module. |
| 25 | `      <h2>Classes</h2>` | HTML tag opening/closing markup for component template structure. |
| 26 | `      <p>Group sessions</p>` | HTML tag opening/closing markup for component template structure. |
| 27 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `  ` | Blank line used to separate logical blocks for readability. |
| 31 | `  <div` | Core implementation line contributing to the file behavior. |
| 32 | `    data-testid="booking-mode-trainer"` | Core implementation line contributing to the file behavior. |
| 33 | `    class="mode-card trainer"` | Declares a core TypeScript structure used by this module. |
| 34 | `    [class.disabled]="disabled"` | Declares a core TypeScript structure used by this module. |
| 35 | `    (click)="choose('trainer')">` | Core implementation line contributing to the file behavior. |
| 36 | `    <div class="overlay">` | Declares a core TypeScript structure used by this module. |
| 37 | `      <h2>Trainers</h2>` | HTML tag opening/closing markup for component template structure. |
| 38 | `      <p>1-on-1 coaching</p>` | HTML tag opening/closing markup for component template structure. |
| 39 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 40 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `<div *ngIf="disabled" class="text-danger mt-3">` | Declares a core TypeScript structure used by this module. |
| 44 | `  Membership required to continue.` | Core implementation line contributing to the file behavior. |
| 45 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.