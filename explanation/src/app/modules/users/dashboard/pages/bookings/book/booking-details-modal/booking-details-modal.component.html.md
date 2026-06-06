# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-details-modal/booking-details-modal.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-details-modal/booking-details-modal.component.html`
- **Total lines:** `178`
- **Non-empty lines:** `128`
- **Import statements:** `0`
- **Class-like declarations found:** `50`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `<div class="modal-backdrop-custom" (click)="close.emit()"></div>` | Declares a core TypeScript structure used by this module. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `<div class="modal-container">` | Declares a core TypeScript structure used by this module. |
| 6 | `  <div class="modal-card">` | Declares a core TypeScript structure used by this module. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `    ` | Blank line used to separate logical blocks for readability. |
| 9 | `    <div class="modal-header justify-content-end mt-4 me-4">` | Declares a core TypeScript structure used by this module. |
| 10 | `      <button class="btn-close" (click)="close.emit()"></button>` | Declares a core TypeScript structure used by this module. |
| 11 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `    ` | Blank line used to separate logical blocks for readability. |
| 14 | `    <div class="modal-body-grid">` | Declares a core TypeScript structure used by this module. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `      ` | Blank line used to separate logical blocks for readability. |
| 17 | `      <div class="image-section"` | Declares a core TypeScript structure used by this module. |
| 18 | `        (mouseenter)="stopAutoSlide()"` | Core implementation line contributing to the file behavior. |
| 19 | `        (mouseleave)="startAutoSlide()"` | Core implementation line contributing to the file behavior. |
| 20 | `      >` | Core implementation line contributing to the file behavior. |
| 21 | `        <div class="image-wrapper">` | Declares a core TypeScript structure used by this module. |
| 22 | `          <img [src]="images[currentIndex]" />` | HTML tag opening/closing markup for component template structure. |
| 23 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `        <button` | Core implementation line contributing to the file behavior. |
| 26 | `          type="button"` | Declares a core TypeScript structure used by this module. |
| 27 | `          class="slide-nav slide-prev"` | Declares a core TypeScript structure used by this module. |
| 28 | `          (click)="prev()"` | Core implementation line contributing to the file behavior. |
| 29 | `          aria-label="Previous image"` | Core implementation line contributing to the file behavior. |
| 30 | `        >` | Core implementation line contributing to the file behavior. |
| 31 | `          <i class="bi bi-chevron-left"></i>` | Declares a core TypeScript structure used by this module. |
| 32 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `        <button` | Core implementation line contributing to the file behavior. |
| 35 | `          type="button"` | Declares a core TypeScript structure used by this module. |
| 36 | `          class="slide-nav slide-next"` | Declares a core TypeScript structure used by this module. |
| 37 | `          (click)="next()"` | Core implementation line contributing to the file behavior. |
| 38 | `          aria-label="Next image"` | Core implementation line contributing to the file behavior. |
| 39 | `        >` | Core implementation line contributing to the file behavior. |
| 40 | `          <i class="bi bi-chevron-right"></i>` | Declares a core TypeScript structure used by this module. |
| 41 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 42 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `      ` | Blank line used to separate logical blocks for readability. |
| 45 | `      <div class="content-section">` | Declares a core TypeScript structure used by this module. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `        <h3 class="fw-bold mb-1">` | Declares a core TypeScript structure used by this module. |
| 48 | `          {{ item.name }}` | Core implementation line contributing to the file behavior. |
| 49 | `        </h3>` | HTML tag opening/closing markup for component template structure. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `        <div *ngIf="mode==='class'" class="text-muted mb-3">` | Declares a core TypeScript structure used by this module. |
| 52 | `          Instructor:` | Core implementation line contributing to the file behavior. |
| 53 | `          <strong class="text-dark">{{ item.trainerName }}</strong>` | Declares a core TypeScript structure used by this module. |
| 54 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `        <p class="mb-2 text-muted">{{ item.trainerBio }}</p>` | Declares a core TypeScript structure used by this module. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `        <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 59 | `        <span class="small text-muted mb-1">Trainer's specialties:</span>` | Declares a core TypeScript structure used by this module. |
| 60 | `          <span` | Core implementation line contributing to the file behavior. |
| 61 | `            class="badge bg-light text-dark me-2"` | Declares a core TypeScript structure used by this module. |
| 62 | `            *ngFor="let s of item.trainerSpecialties"` | Block comment content (documentation for nearby code). |
| 63 | `          >` | Core implementation line contributing to the file behavior. |
| 64 | `            {{ s }}` | Core implementation line contributing to the file behavior. |
| 65 | `          </span>` | HTML tag opening/closing markup for component template structure. |
| 66 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `        <hr />` | HTML tag opening/closing markup for component template structure. |
| 69 | `` | Blank line used to separate logical blocks for readability. |
| 70 | `        <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 71 | `          <i class="bi bi-geo-alt me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 72 | `          <strong>{{ item.branchName }}</strong>` | HTML tag opening/closing markup for component template structure. |
| 73 | `          <div class="text-muted small">` | Declares a core TypeScript structure used by this module. |
| 74 | `            {{ item.branchAddress }}` | Core implementation line contributing to the file behavior. |
| 75 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 76 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `        ` | Blank line used to separate logical blocks for readability. |
| 79 | `        <div *ngIf="mode === 'class'" class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 80 | `          <i class="bi bi-clock me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 81 | `          {{ item.schedule }}` | Core implementation line contributing to the file behavior. |
| 82 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 83 | `        ` | Blank line used to separate logical blocks for readability. |
| 84 | `        ` | Blank line used to separate logical blocks for readability. |
| 85 | `        <div *ngIf="mode === 'trainer'" class="mb-3 text-muted">` | Declares a core TypeScript structure used by this module. |
| 86 | `          <i class="bi bi-info-circle me-2"></i>` | Declares a core TypeScript structure used by this module. |
| 87 | `          Private session — please select an available date & time below.` | Core implementation line contributing to the file behavior. |
| 88 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `` | Blank line used to separate logical blocks for readability. |
| 90 | `        <p class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 91 | `          Description: {{ item.description }}` | Core implementation line contributing to the file behavior. |
| 92 | `        </p>` | HTML tag opening/closing markup for component template structure. |
| 93 | `` | Blank line used to separate logical blocks for readability. |
| 94 | `        ` | Blank line used to separate logical blocks for readability. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `        <div *ngIf="mode === 'trainer'" class="trainer-calendar mb-4">` | Declares a core TypeScript structure used by this module. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `            <h6 class="fw-semibold mb-3">` | Declares a core TypeScript structure used by this module. |
| 99 | `                Select a time slot` | Core implementation line contributing to the file behavior. |
| 100 | `            ` | Blank line used to separate logical blocks for readability. |
| 101 | `            </h6>` | HTML tag opening/closing markup for component template structure. |
| 102 | `` | Blank line used to separate logical blocks for readability. |
| 103 | `            <div class="calendar-nav d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 104 | `            <button class="nav-week" (click)="prevWeek()">‹</button>` | Declares a core TypeScript structure used by this module. |
| 105 | `` | Blank line used to separate logical blocks for readability. |
| 106 | `            <div class="fw-semibold">` | Declares a core TypeScript structure used by this module. |
| 107 | `                {{ monthLabel }}` | Core implementation line contributing to the file behavior. |
| 108 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 109 | `` | Blank line used to separate logical blocks for readability. |
| 110 | `            <button class="nav-week" (click)="nextWeek()">›</button>` | Declares a core TypeScript structure used by this module. |
| 111 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 112 | `` | Blank line used to separate logical blocks for readability. |
| 113 | `` | Blank line used to separate logical blocks for readability. |
| 114 | `            <div class="calendar-grid">` | Declares a core TypeScript structure used by this module. |
| 115 | `` | Blank line used to separate logical blocks for readability. |
| 116 | `                ` | Blank line used to separate logical blocks for readability. |
| 117 | `                <div class="calendar-header"></div>` | Declares a core TypeScript structure used by this module. |
| 118 | `                <div` | Core implementation line contributing to the file behavior. |
| 119 | `                    class="calendar-header"` | Declares a core TypeScript structure used by this module. |
| 120 | `                    *ngFor="let d of weekDates"` | Block comment content (documentation for nearby code). |
| 121 | `                >` | Core implementation line contributing to the file behavior. |
| 122 | `                    {{ d \| date:'EEE dd' }}` | Core implementation line contributing to the file behavior. |
| 123 | `                </div>` | HTML tag opening/closing markup for component template structure. |
| 124 | `` | Blank line used to separate logical blocks for readability. |
| 125 | `                ` | Blank line used to separate logical blocks for readability. |
| 126 | `                <ng-container *ngFor="let time of timeSlots">` | HTML tag opening/closing markup for component template structure. |
| 127 | `                    <div class="time-label">{{ time }}</div>` | Declares a core TypeScript structure used by this module. |
| 128 | `` | Blank line used to separate logical blocks for readability. |
| 129 | `                    <div` | Core implementation line contributing to the file behavior. |
| 130 | `                    *ngFor="let d of weekDates"` | Block comment content (documentation for nearby code). |
| 131 | `                    class="calendar-cell"` | Declares a core TypeScript structure used by this module. |
| 132 | `                    [class.available]="isAvailable(d, time)"` | Declares a core TypeScript structure used by this module. |
| 133 | `                    [class.disabled]="isPast(d)"` | Declares a core TypeScript structure used by this module. |
| 134 | `                    [class.booked]="isBooked(d, time)"` | Declares a core TypeScript structure used by this module. |
| 135 | `                    [class.selected]="isSelected(d, time)"` | Declares a core TypeScript structure used by this module. |
| 136 | `                    (click)="selectSlot(d, time)"` | Core implementation line contributing to the file behavior. |
| 137 | `                    >` | Core implementation line contributing to the file behavior. |
| 138 | `                    </div>` | HTML tag opening/closing markup for component template structure. |
| 139 | `                </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 140 | `` | Blank line used to separate logical blocks for readability. |
| 141 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 142 | `` | Blank line used to separate logical blocks for readability. |
| 143 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `` | Blank line used to separate logical blocks for readability. |
| 146 | `        ` | Blank line used to separate logical blocks for readability. |
| 147 | `        ` | Blank line used to separate logical blocks for readability. |
| 148 | `` | Blank line used to separate logical blocks for readability. |
| 149 | `        <div class="purchase-box">` | Declares a core TypeScript structure used by this module. |
| 150 | `` | Blank line used to separate logical blocks for readability. |
| 151 | `          <div>` | HTML tag opening/closing markup for component template structure. |
| 152 | `            <div class="small text-muted">Price</div>` | Declares a core TypeScript structure used by this module. |
| 153 | `            <div class="fw-bold fs-5">` | Declares a core TypeScript structure used by this module. |
| 154 | `              ${{ item.price }}` | Core implementation line contributing to the file behavior. |
| 155 | `              <span class="fs-6 text-muted">/ session</span>` | Declares a core TypeScript structure used by this module. |
| 156 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 157 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 158 | `` | Blank line used to separate logical blocks for readability. |
| 159 | `          <div class="d-flex gap-2 align-items-center">` | Declares a core TypeScript structure used by this module. |
| 160 | `            <select class="form-select">` | Declares a core TypeScript structure used by this module. |
| 161 | `              <option>1 session</option>` | HTML tag opening/closing markup for component template structure. |
| 162 | `              <option>4 sessions</option>` | HTML tag opening/closing markup for component template structure. |
| 163 | `              <option>8 sessions</option>` | HTML tag opening/closing markup for component template structure. |
| 164 | `            </select>` | HTML tag opening/closing markup for component template structure. |
| 165 | `` | Blank line used to separate logical blocks for readability. |
| 166 | `            <button` | Core implementation line contributing to the file behavior. |
| 167 | `              class="btn btn-primary px-4"` | Declares a core TypeScript structure used by this module. |
| 168 | `              [disabled]="mode === 'trainer' && !selectedSlot"` | Core implementation line contributing to the file behavior. |
| 169 | `              (click)="purchase()"` | Core implementation line contributing to the file behavior. |
| 170 | `            >` | Core implementation line contributing to the file behavior. |
| 171 | `              Purchase` | Core implementation line contributing to the file behavior. |
| 172 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 173 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 174 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 175 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 176 | `` | Blank line used to separate logical blocks for readability. |
| 177 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 178 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.