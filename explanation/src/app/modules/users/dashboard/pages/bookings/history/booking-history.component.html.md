# Explanation: `src/app/modules/users/dashboard/pages/bookings/history/booking-history.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/history/booking-history.component.html`
- **Total lines:** `162`
- **Non-empty lines:** `147`
- **Import statements:** `0`
- **Class-like declarations found:** `55`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `<div *ngIf="loading" class="text-center py-5">` | Declares a core TypeScript structure used by this module. |
| 4 | `  <div class="spinner-border text-primary"></div>` | Declares a core TypeScript structure used by this module. |
| 5 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `<div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `<div class="card shadow-sm border-0 mb-3">` | Declares a core TypeScript structure used by this module. |
| 10 | `  <div class="card-body d-flex flex-wrap gap-2 align-items-center">` | Declares a core TypeScript structure used by this module. |
| 11 | `    <button data-testid="history-mode-class" class="btn btn-sm" [class.btn-primary]="mode==='class'" [class.btn-outline-primary]="mode!=='class'" (click)="setMode('class')">` | Declares a core TypeScript structure used by this module. |
| 12 | `      Class Bookings` | Core implementation line contributing to the file behavior. |
| 13 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 14 | `    <button data-testid="history-mode-trainer" class="btn btn-sm" [class.btn-primary]="mode==='trainer'" [class.btn-outline-primary]="mode!=='trainer'" (click)="setMode('trainer')">` | Declares a core TypeScript structure used by this module. |
| 15 | `      Personal Sessions` | Core implementation line contributing to the file behavior. |
| 16 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `    <ng-container *ngIf="mode==='class'">` | Declares a core TypeScript structure used by this module. |
| 19 | `      <div class="ms-auto d-flex gap-2 flex-wrap">` | Declares a core TypeScript structure used by this module. |
| 20 | `        <select class="form-select form-select-sm" style="width: 160px;" [(ngModel)]="sort">` | Declares a core TypeScript structure used by this module. |
| 21 | `          <option value="asc">Ascending</option>` | HTML tag opening/closing markup for component template structure. |
| 22 | `          <option value="desc">Descending</option>` | HTML tag opening/closing markup for component template structure. |
| 23 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 24 | `        <input class="form-control form-control-sm" style="width: 180px;" placeholder="Category (q)" [(ngModel)]="q" />` | Declares a core TypeScript structure used by this module. |
| 25 | `        <button data-testid="history-apply-class-filter" class="btn btn-sm btn-outline-secondary" (click)="applyClassFilters()">Apply</button>` | Declares a core TypeScript structure used by this module. |
| 26 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `    </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 28 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `<div *ngIf="!loading && mode==='class'" class="card shadow-sm border-0">` | Declares a core TypeScript structure used by this module. |
| 32 | `  <div class="card-body p-0">` | Declares a core TypeScript structure used by this module. |
| 33 | `    <table class="table table-hover align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 34 | `      <thead class="table-light">` | Declares a core TypeScript structure used by this module. |
| 35 | `        <tr>` | HTML tag opening/closing markup for component template structure. |
| 36 | `          <th>Class</th>` | HTML tag opening/closing markup for component template structure. |
| 37 | `          <th>Category</th>` | HTML tag opening/closing markup for component template structure. |
| 38 | `          <th>Booking Range</th>` | HTML tag opening/closing markup for component template structure. |
| 39 | `          <th>Schedule Time</th>` | HTML tag opening/closing markup for component template structure. |
| 40 | `          <th>Status</th>` | HTML tag opening/closing markup for component template structure. |
| 41 | `        </tr>` | HTML tag opening/closing markup for component template structure. |
| 42 | `      </thead>` | HTML tag opening/closing markup for component template structure. |
| 43 | `      <tbody>` | HTML tag opening/closing markup for component template structure. |
| 44 | `        <tr data-testid="history-class-row" *ngFor="let b of classBookings" class="history-row-clickable" (click)="openClassBookingDetail(b)">` | Declares a core TypeScript structure used by this module. |
| 45 | `          <td class="fw-semibold">{{ b.classSchedule?.className \|\| 'Class' }}</td>` | Declares a core TypeScript structure used by this module. |
| 46 | `          <td>{{ b.classSchedule?.category \|\| '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 47 | `          <td>{{ b.bookingStartDate \| date:'yyyy-MM-dd' }} → {{ b.bookingEndDate \| date:'yyyy-MM-dd' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 48 | `          <td>{{ displayTime(b.classSchedule?.startTime) }} - {{ displayTime(b.classSchedule?.endTime) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 49 | `          <td><span class="badge bg-secondary">{{ b.status }}</span></td>` | Declares a core TypeScript structure used by this module. |
| 50 | `        </tr>` | HTML tag opening/closing markup for component template structure. |
| 51 | `      </tbody>` | HTML tag opening/closing markup for component template structure. |
| 52 | `    </table>` | HTML tag opening/closing markup for component template structure. |
| 53 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 54 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `<div *ngIf="!loading && mode==='class'" class="d-flex justify-content-between align-items-center mt-2">` | Declares a core TypeScript structure used by this module. |
| 57 | `  <small class="text-muted">Total {{ totalDocs }} • Page {{ page }} / {{ totalPages }}</small>` | Declares a core TypeScript structure used by this module. |
| 58 | `  <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 59 | `    <button data-testid="history-prev-page" class="btn btn-sm btn-outline-secondary" [disabled]="!hasPrev" (click)="prevPage()">Previous</button>` | Declares a core TypeScript structure used by this module. |
| 60 | `    <button data-testid="history-next-page" class="btn btn-sm btn-outline-secondary" [disabled]="!hasNext" (click)="nextPage()">Next</button>` | Declares a core TypeScript structure used by this module. |
| 61 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 62 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 63 | `` | Blank line used to separate logical blocks for readability. |
| 64 | `<div *ngIf="!loading && mode==='trainer'" class="card shadow-sm border-0">` | Declares a core TypeScript structure used by this module. |
| 65 | `  <div class="card-body p-0">` | Declares a core TypeScript structure used by this module. |
| 66 | `    <table class="table table-hover align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 67 | `      <thead class="table-light">` | Declares a core TypeScript structure used by this module. |
| 68 | `        <tr>` | HTML tag opening/closing markup for component template structure. |
| 69 | `          <th>Trainer</th>` | HTML tag opening/closing markup for component template structure. |
| 70 | `          <th>Start</th>` | HTML tag opening/closing markup for component template structure. |
| 71 | `          <th>End</th>` | HTML tag opening/closing markup for component template structure. |
| 72 | `          <th>Status</th>` | HTML tag opening/closing markup for component template structure. |
| 73 | `        </tr>` | HTML tag opening/closing markup for component template structure. |
| 74 | `      </thead>` | HTML tag opening/closing markup for component template structure. |
| 75 | `      <tbody>` | HTML tag opening/closing markup for component template structure. |
| 76 | `        <tr data-testid="history-trainer-row" *ngFor="let b of trainerBookings" class="history-row-clickable" (click)="openTrainerBookingDetail(b)">` | Declares a core TypeScript structure used by this module. |
| 77 | `          <td class="fw-semibold">{{ b.trainer?.firstName }} {{ b.trainer?.lastName }}</td>` | Declares a core TypeScript structure used by this module. |
| 78 | `          <td>{{ b.startAt \| date:'yyyy-MM-dd HH:mm' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 79 | `          <td>{{ b.endAt \| date:'yyyy-MM-dd HH:mm' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 80 | `          <td><span class="badge bg-secondary">{{ b.status }}</span></td>` | Declares a core TypeScript structure used by this module. |
| 81 | `        </tr>` | HTML tag opening/closing markup for component template structure. |
| 82 | `      </tbody>` | HTML tag opening/closing markup for component template structure. |
| 83 | `    </table>` | HTML tag opening/closing markup for component template structure. |
| 84 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 85 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `<div data-testid="history-trainer-modal" *ngIf="selectedTrainerBooking" class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center booking-history-modal-overlay" (click)="closeTrainerBookingDetail()">` | Declares a core TypeScript structure used by this module. |
| 88 | `  <div class="bg-white rounded-4 shadow booking-history-modal" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 89 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 90 | `      <h5 class="mb-0">Trainer Booking</h5>` | Declares a core TypeScript structure used by this module. |
| 91 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeTrainerBookingDetail()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 92 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `` | Blank line used to separate logical blocks for readability. |
| 94 | `    <div class="small mb-3">` | Declares a core TypeScript structure used by this module. |
| 95 | `      <div><strong>Trainer:</strong> {{ selectedTrainerBooking.trainer?.firstName }} {{ selectedTrainerBooking.trainer?.lastName }}</div>` | HTML tag opening/closing markup for component template structure. |
| 96 | `      <div><strong>Start:</strong> {{ selectedTrainerBooking.startAt \| date:'yyyy-MM-dd HH:mm' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 97 | `      <div><strong>End:</strong> {{ selectedTrainerBooking.endAt \| date:'yyyy-MM-dd HH:mm' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 98 | `      <div><strong>Status:</strong> {{ selectedTrainerBooking.status }}</div>` | HTML tag opening/closing markup for component template structure. |
| 99 | `      <div><strong>Notes:</strong> {{ selectedTrainerBooking.notes \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 100 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 101 | `` | Blank line used to separate logical blocks for readability. |
| 102 | `    <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 103 | `      <label class="form-label">Cancel reason</label>` | Declares a core TypeScript structure used by this module. |
| 104 | `      <textarea class="form-control" rows="2" [(ngModel)]="trainerCancelReason" placeholder="Trainer unavailable due to event"></textarea>` | Declares a core TypeScript structure used by this module. |
| 105 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 106 | `` | Blank line used to separate logical blocks for readability. |
| 107 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 108 | `      <button class="btn btn-outline-secondary" (click)="closeTrainerBookingDetail()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 109 | `      <button` | Core implementation line contributing to the file behavior. |
| 110 | `        data-testid="history-cancel-trainer-booking"` | Core implementation line contributing to the file behavior. |
| 111 | `        class="btn btn-danger"` | Declares a core TypeScript structure used by this module. |
| 112 | `        [disabled]="cancellingTrainerBooking \|\| !canCancelTrainerBooking(selectedTrainerBooking)"` | Core implementation line contributing to the file behavior. |
| 113 | `        (click)="cancelSelectedTrainerBooking()"` | Core implementation line contributing to the file behavior. |
| 114 | `      >` | Core implementation line contributing to the file behavior. |
| 115 | `        {{ cancellingTrainerBooking ? 'Cancelling...' : 'Cancel Booking' }}` | Core implementation line contributing to the file behavior. |
| 116 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 117 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 118 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 119 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `<div data-testid="history-class-modal" *ngIf="selectedClassBooking" class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center booking-history-modal-overlay" (click)="closeClassBookingDetail()">` | Declares a core TypeScript structure used by this module. |
| 122 | `  <div class="bg-white rounded-4 shadow booking-history-modal" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 123 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 124 | `      <h5 class="mb-0">{{ selectedClassBooking.classSchedule?.className \|\| 'Class Booking' }}</h5>` | Declares a core TypeScript structure used by this module. |
| 125 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeClassBookingDetail()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 126 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 127 | `` | Blank line used to separate logical blocks for readability. |
| 128 | `    <div class="d-flex gap-3 align-items-start flex-wrap mb-3">` | Declares a core TypeScript structure used by this module. |
| 129 | `      <img [src]="bookingImage(selectedClassBooking)" class="booking-history-modal-img" alt="class image" />` | Declares a core TypeScript structure used by this module. |
| 130 | `      <div class="small">` | Declares a core TypeScript structure used by this module. |
| 131 | `        <div><strong>Category:</strong> {{ selectedClassBooking.classSchedule?.category \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 132 | `        <div><strong>Difficulty:</strong> {{ selectedClassBooking.classSchedule?.difficultyLevel \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 133 | `        <div><strong>Description:</strong> {{ selectedClassBooking.classSchedule?.description \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 134 | `        <div><strong>Location:</strong> {{ selectedClassBooking.classSchedule?.location \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 135 | `        <div>` | HTML tag opening/closing markup for component template structure. |
| 136 | `          <strong>Schedule:</strong>` | HTML tag opening/closing markup for component template structure. |
| 137 | `          {{ selectedClassBooking.classSchedule?.dayOfWeek \|\| '-' }}` | Core implementation line contributing to the file behavior. |
| 138 | `          • {{ displayTime(selectedClassBooking.classSchedule?.startTime) }} - {{ displayTime(selectedClassBooking.classSchedule?.endTime) }}` | Core implementation line contributing to the file behavior. |
| 139 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 140 | `        <div>` | HTML tag opening/closing markup for component template structure. |
| 141 | `          <strong>Booking range:</strong>` | HTML tag opening/closing markup for component template structure. |
| 142 | `          {{ selectedClassBooking.bookingStartDate \| date:'yyyy-MM-dd' }}` | Core implementation line contributing to the file behavior. |
| 143 | `          →` | Core implementation line contributing to the file behavior. |
| 144 | `          {{ selectedClassBooking.bookingEndDate \| date:'yyyy-MM-dd' }}` | Core implementation line contributing to the file behavior. |
| 145 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 146 | `        <div><strong>Status:</strong> {{ selectedClassBooking.status }}</div>` | HTML tag opening/closing markup for component template structure. |
| 147 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 148 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 149 | `` | Blank line used to separate logical blocks for readability. |
| 150 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 151 | `      <button class="btn btn-outline-secondary" (click)="closeClassBookingDetail()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 152 | `      <button` | Core implementation line contributing to the file behavior. |
| 153 | `        data-testid="history-cancel-class-booking"` | Declares a core TypeScript structure used by this module. |
| 154 | `        class="btn btn-danger"` | Declares a core TypeScript structure used by this module. |
| 155 | `        [disabled]="cancellingClassBooking \|\| selectedClassBooking.status === 'cancelled'"` | Core implementation line contributing to the file behavior. |
| 156 | `        (click)="cancelSelectedClassBooking()"` | Core implementation line contributing to the file behavior. |
| 157 | `      >` | Core implementation line contributing to the file behavior. |
| 158 | `        {{ cancellingClassBooking ? 'Cancelling...' : 'Cancel Booking' }}` | Core implementation line contributing to the file behavior. |
| 159 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 160 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 161 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 162 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.