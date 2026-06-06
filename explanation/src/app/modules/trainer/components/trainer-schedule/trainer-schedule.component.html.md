# Explanation: `src/app/modules/trainer/components/trainer-schedule/trainer-schedule.component.html`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-schedule/trainer-schedule.component.html`
- **Total lines:** `121`
- **Non-empty lines:** `109`
- **Import statements:** `0`
- **Class-like declarations found:** `49`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <h4 class="fw-semibold mb-2">Schedule</h4>` | Declares a core TypeScript structure used by this module. |
| 4 | `    <p class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 5 | `      Weekly availability planner with live booking overlays.` | Core implementation line contributing to the file behavior. |
| 6 | `    </p>` | HTML tag opening/closing markup for component template structure. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `    <div *ngIf="loading" class="text-muted">Loading trainer schedule...</div>` | Declares a core TypeScript structure used by this module. |
| 9 | `    <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 10 | `    <div *ngIf="successMessage" class="alert alert-success">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `    <div *ngIf="!loading">` | HTML tag opening/closing markup for component template structure. |
| 13 | `      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">` | Declares a core TypeScript structure used by this module. |
| 14 | `        <button class="btn btn-sm btn-outline-secondary nav-week" (click)="prevWeek()">‹</button>` | Declares a core TypeScript structure used by this module. |
| 15 | `        <div class="fw-semibold">{{ weekRangeLabel() }}</div>` | Declares a core TypeScript structure used by this module. |
| 16 | `        <button class="btn btn-sm btn-outline-secondary nav-week" (click)="nextWeek()">›</button>` | Declares a core TypeScript structure used by this module. |
| 17 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `      <div class="d-flex flex-wrap gap-3 mb-3 small">` | Declares a core TypeScript structure used by this module. |
| 20 | `        <span><span class="legend-dot legend-available"></span>Availability</span>` | Declares a core TypeScript structure used by this module. |
| 21 | `        <span><span class="legend-dot legend-booked"></span>Booked</span>` | Declares a core TypeScript structure used by this module. |
| 22 | `        <span><span class="legend-dot legend-past"></span>Past day</span>` | Declares a core TypeScript structure used by this module. |
| 23 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `      <div class="form-check form-switch mb-3">` | Declares a core TypeScript structure used by this module. |
| 26 | `        <input class="form-check-input" type="checkbox" id="bookingDetailToggle" [(ngModel)]="showBookedDetails">` | Declares a core TypeScript structure used by this module. |
| 27 | `        <label class="form-check-label" for="bookingDetailToggle">Toggle booked slot details on click</label>` | Declares a core TypeScript structure used by this module. |
| 28 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `      <div class="calendar-grid-wrapper mb-3">` | Declares a core TypeScript structure used by this module. |
| 31 | `        <div class="calendar-grid">` | Declares a core TypeScript structure used by this module. |
| 32 | `          <div class="calendar-header"></div>` | Declares a core TypeScript structure used by this module. |
| 33 | `          <div class="calendar-header" *ngFor="let d of weekDates">` | Declares a core TypeScript structure used by this module. |
| 34 | `            {{ dayNames[d.getDay()] }}<br />` | Core implementation line contributing to the file behavior. |
| 35 | `            <small>{{ d \| date:'MM/dd' }}</small>` | HTML tag opening/closing markup for component template structure. |
| 36 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `          <ng-container *ngFor="let time of timeSlots">` | HTML tag opening/closing markup for component template structure. |
| 39 | `            <div class="time-col">{{ time }}</div>` | Declares a core TypeScript structure used by this module. |
| 40 | `            <div` | Core implementation line contributing to the file behavior. |
| 41 | `              class="calendar-cell"` | Declares a core TypeScript structure used by this module. |
| 42 | `              *ngFor="let d of weekDates"` | Block comment content (documentation for nearby code). |
| 43 | `              [ngClass]="cellClass(d, time)"` | Core implementation line contributing to the file behavior. |
| 44 | `              (click)="onCellClick(d, time)"` | Core implementation line contributing to the file behavior. |
| 45 | `            ></div>` | Core implementation line contributing to the file behavior. |
| 46 | `          </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 47 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 48 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `      <div class="card border-0 bg-light mb-3" *ngIf="selectedCellBookings.length && showBookedDetails">` | Declares a core TypeScript structure used by this module. |
| 51 | `        <div class="card-body py-2 px-3">` | Declares a core TypeScript structure used by this module. |
| 52 | `          <div class="fw-semibold mb-1">Booked details: {{ selectedCellLabel }}</div>` | Declares a core TypeScript structure used by this module. |
| 53 | `          <div class="small" *ngFor="let b of selectedCellBookings">` | Declares a core TypeScript structure used by this module. |
| 54 | `            <span class="fw-medium">{{ b.startAt \| date:'HH:mm' }} - {{ b.endAt \| date:'HH:mm' }}</span>` | Declares a core TypeScript structure used by this module. |
| 55 | `            • {{ b.status }}` | Core implementation line contributing to the file behavior. |
| 56 | `            <span *ngIf="b.member"> • {{ b.member.firstName }} {{ b.member.lastName }}</span>` | HTML tag opening/closing markup for component template structure. |
| 57 | `            <span *ngIf="b.notes"> • {{ b.notes }}</span>` | HTML tag opening/closing markup for component template structure. |
| 58 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 59 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `      <hr class="my-4" />` | Declares a core TypeScript structure used by this module. |
| 63 | `` | Blank line used to separate logical blocks for readability. |
| 64 | `      <h6 class="fw-semibold mb-2">Manage Weekly Availability Slots</h6>` | Declares a core TypeScript structure used by this module. |
| 65 | `      <div class="row g-2 align-items-end mb-3">` | Declares a core TypeScript structure used by this module. |
| 66 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 67 | `          <label class="form-label">Day</label>` | Declares a core TypeScript structure used by this module. |
| 68 | `          <select class="form-select" [(ngModel)]="newSlot.dayOfWeek">` | Declares a core TypeScript structure used by this module. |
| 69 | `            <option *ngFor="let d of dayNames; index as i" [ngValue]="i">{{ d }}</option>` | HTML tag opening/closing markup for component template structure. |
| 70 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 71 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 72 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 73 | `          <label class="form-label">Start</label>` | Declares a core TypeScript structure used by this module. |
| 74 | `          <input class="form-control" type="time" [(ngModel)]="newSlot.startTime" />` | Declares a core TypeScript structure used by this module. |
| 75 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 76 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 77 | `          <label class="form-label">End</label>` | Declares a core TypeScript structure used by this module. |
| 78 | `          <input class="form-control" type="time" [(ngModel)]="newSlot.endTime" />` | Declares a core TypeScript structure used by this module. |
| 79 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 80 | `        <div class="col-md-3 d-grid">` | Declares a core TypeScript structure used by this module. |
| 81 | `          <button class="btn btn-outline-primary" (click)="addSlot()">Add Slot</button>` | Declares a core TypeScript structure used by this module. |
| 82 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 83 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 84 | `` | Blank line used to separate logical blocks for readability. |
| 85 | `      <div class="table-responsive" *ngIf="slots.length > 0">` | Declares a core TypeScript structure used by this module. |
| 86 | `        <table class="table align-middle mb-3">` | Declares a core TypeScript structure used by this module. |
| 87 | `          <thead>` | HTML tag opening/closing markup for component template structure. |
| 88 | `            <tr>` | HTML tag opening/closing markup for component template structure. |
| 89 | `              <th>Day</th>` | HTML tag opening/closing markup for component template structure. |
| 90 | `              <th>Start</th>` | HTML tag opening/closing markup for component template structure. |
| 91 | `              <th>End</th>` | HTML tag opening/closing markup for component template structure. |
| 92 | `              <th></th>` | HTML tag opening/closing markup for component template structure. |
| 93 | `            </tr>` | HTML tag opening/closing markup for component template structure. |
| 94 | `          </thead>` | HTML tag opening/closing markup for component template structure. |
| 95 | `          <tbody>` | HTML tag opening/closing markup for component template structure. |
| 96 | `            <tr *ngFor="let slot of slots; index as i">` | HTML tag opening/closing markup for component template structure. |
| 97 | `              <td>{{ dayNames[slot.dayOfWeek] }}</td>` | HTML tag opening/closing markup for component template structure. |
| 98 | `              <td>{{ slot.startTime }}</td>` | HTML tag opening/closing markup for component template structure. |
| 99 | `              <td>{{ slot.endTime }}</td>` | HTML tag opening/closing markup for component template structure. |
| 100 | `              <td class="text-end">` | Declares a core TypeScript structure used by this module. |
| 101 | `                <button` | Core implementation line contributing to the file behavior. |
| 102 | `                  class="btn btn-sm btn-outline-danger"` | Declares a core TypeScript structure used by this module. |
| 103 | `                  [disabled]="deletingSlotId === slot.id"` | Core implementation line contributing to the file behavior. |
| 104 | `                  (click)="removeSlot(i)"` | Core implementation line contributing to the file behavior. |
| 105 | `                >` | Core implementation line contributing to the file behavior. |
| 106 | `                  {{ deletingSlotId === slot.id ? 'Deleting...' : 'Remove' }}` | Core implementation line contributing to the file behavior. |
| 107 | `                </button>` | HTML tag opening/closing markup for component template structure. |
| 108 | `              </td>` | HTML tag opening/closing markup for component template structure. |
| 109 | `            </tr>` | HTML tag opening/closing markup for component template structure. |
| 110 | `          </tbody>` | HTML tag opening/closing markup for component template structure. |
| 111 | `        </table>` | HTML tag opening/closing markup for component template structure. |
| 112 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 113 | `` | Blank line used to separate logical blocks for readability. |
| 114 | `      <div *ngIf="slots.length === 0" class="text-muted mb-3">No availability slots set.</div>` | Declares a core TypeScript structure used by this module. |
| 115 | `` | Blank line used to separate logical blocks for readability. |
| 116 | `      <button class="btn btn-primary" [disabled]="saving" (click)="saveAvailability()">` | Declares a core TypeScript structure used by this module. |
| 117 | `        {{ saving ? 'Saving...' : 'Save Availability' }}` | Core implementation line contributing to the file behavior. |
| 118 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 119 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 121 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.