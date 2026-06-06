# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-item-list/booking-item-list.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-item-list/booking-item-list.component.html`
- **Total lines:** `240`
- **Non-empty lines:** `220`
- **Import statements:** `0`
- **Class-like declarations found:** `107`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `<div class="mode-header mb-4 d-flex align-items-center">` | Declares a core TypeScript structure used by this module. |
| 6 | `  <button` | Core implementation line contributing to the file behavior. |
| 7 | `    class="back-btn me-3"` | Declares a core TypeScript structure used by this module. |
| 8 | `    type="button"` | Declares a core TypeScript structure used by this module. |
| 9 | `    (click)="back.emit()"` | Core implementation line contributing to the file behavior. |
| 10 | `    aria-label="Go back"` | Core implementation line contributing to the file behavior. |
| 11 | `  >` | Core implementation line contributing to the file behavior. |
| 12 | `    <i class="bi bi-arrow-left"></i>` | Declares a core TypeScript structure used by this module. |
| 13 | `  </button>` | HTML tag opening/closing markup for component template structure. |
| 14 | `  <h5 class="fw-semibold mb-0">` | Declares a core TypeScript structure used by this module. |
| 15 | `    {{ branch.name }} — {{ mode === 'class' ? 'Book Classes' : 'Choose your trainer' }}` | Declares a core TypeScript structure used by this module. |
| 16 | `  </h5>` | HTML tag opening/closing markup for component template structure. |
| 17 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `<div *ngIf="mode === 'class'" class="card border-0 shadow-sm mb-3">` | Declares a core TypeScript structure used by this module. |
| 20 | `  <div class="card-body p-3">` | Declares a core TypeScript structure used by this module. |
| 21 | `    <div class="row g-2 align-items-end">` | Declares a core TypeScript structure used by this module. |
| 22 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 23 | `        <label class="form-label small mb-1">Sort</label>` | Declares a core TypeScript structure used by this module. |
| 24 | `        <select class="form-select form-select-sm" [(ngModel)]="classFilters.sort">` | Declares a core TypeScript structure used by this module. |
| 25 | `          <option value="">Default</option>` | HTML tag opening/closing markup for component template structure. |
| 26 | `          <option value="asc">Ascending</option>` | HTML tag opening/closing markup for component template structure. |
| 27 | `          <option value="desc">Descending</option>` | HTML tag opening/closing markup for component template structure. |
| 28 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 29 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 30 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 31 | `        <label class="form-label small mb-1">Category</label>` | Declares a core TypeScript structure used by this module. |
| 32 | `        <select class="form-select form-select-sm" [(ngModel)]="classFilters.q">` | Declares a core TypeScript structure used by this module. |
| 33 | `          <option value="">All categories</option>` | HTML tag opening/closing markup for component template structure. |
| 34 | `          <option *ngFor="let c of classCategories" [value]="c">{{ c }}</option>` | HTML tag opening/closing markup for component template structure. |
| 35 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 36 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 37 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 38 | `        <label class="form-label small mb-1">Search Field</label>` | Declares a core TypeScript structure used by this module. |
| 39 | `        <input class="form-control form-control-sm" [(ngModel)]="classFilters.searchField" placeholder="className or location" />` | Declares a core TypeScript structure used by this module. |
| 40 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 42 | `        <label class="form-label small mb-1">Day</label>` | Declares a core TypeScript structure used by this module. |
| 43 | `        <select class="form-select form-select-sm" [(ngModel)]="classFilters.dayOfWeek">` | Declares a core TypeScript structure used by this module. |
| 44 | `          <option value="">All</option>` | HTML tag opening/closing markup for component template structure. |
| 45 | `          <option value="MON">MON</option>` | HTML tag opening/closing markup for component template structure. |
| 46 | `          <option value="TUE">TUE</option>` | HTML tag opening/closing markup for component template structure. |
| 47 | `          <option value="WED">WED</option>` | HTML tag opening/closing markup for component template structure. |
| 48 | `          <option value="THU">THU</option>` | HTML tag opening/closing markup for component template structure. |
| 49 | `          <option value="FRI">FRI</option>` | HTML tag opening/closing markup for component template structure. |
| 50 | `          <option value="SAT">SAT</option>` | HTML tag opening/closing markup for component template structure. |
| 51 | `          <option value="SUN">SUN</option>` | HTML tag opening/closing markup for component template structure. |
| 52 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 53 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 54 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `    <div class="d-flex gap-2 mt-2">` | Declares a core TypeScript structure used by this module. |
| 56 | `      <button class="btn btn-sm btn-outline-primary" (click)="applyClassFilters()">Apply</button>` | Declares a core TypeScript structure used by this module. |
| 57 | `      <button class="btn btn-sm btn-outline-secondary" (click)="clearClassFilters()">Clear</button>` | Declares a core TypeScript structure used by this module. |
| 58 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 59 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `<div *ngIf="mode === 'trainer'" class="card border-0 shadow-sm mb-3">` | Declares a core TypeScript structure used by this module. |
| 63 | `  <div class="card-body p-3">` | Declares a core TypeScript structure used by this module. |
| 64 | `    <div class="row g-2 align-items-end">` | Declares a core TypeScript structure used by this module. |
| 65 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 66 | `        <label class="form-label small mb-1">Search (q)</label>` | Declares a core TypeScript structure used by this module. |
| 67 | `        <input class="form-control form-control-sm" [(ngModel)]="trainerFilters.q" placeholder="Name or keyword" />` | Declares a core TypeScript structure used by this module. |
| 68 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 69 | `      <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 70 | `        <label class="form-label small mb-1">Specialization</label>` | Declares a core TypeScript structure used by this module. |
| 71 | `        <input class="form-control form-control-sm" [(ngModel)]="trainerFilters.specialization" placeholder="Optional" />` | Declares a core TypeScript structure used by this module. |
| 72 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 73 | `      <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 74 | `        <label class="form-label small mb-1">Date</label>` | Declares a core TypeScript structure used by this module. |
| 75 | `        <input class="form-control form-control-sm" type="date" [(ngModel)]="trainerFilters.date" />` | Declares a core TypeScript structure used by this module. |
| 76 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 77 | `      <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 78 | `        <label class="form-label small mb-1">Price Min</label>` | Declares a core TypeScript structure used by this module. |
| 79 | `        <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="trainerFilters.priceMin" />` | Declares a core TypeScript structure used by this module. |
| 80 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 81 | `      <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 82 | `        <label class="form-label small mb-1">Price Max</label>` | Declares a core TypeScript structure used by this module. |
| 83 | `        <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="trainerFilters.priceMax" />` | Declares a core TypeScript structure used by this module. |
| 84 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 85 | `      <div class="col-md-1 d-flex align-items-center pt-3">` | Declares a core TypeScript structure used by this module. |
| 86 | `        <input id="availableOnly" class="form-check-input me-2" type="checkbox" [(ngModel)]="trainerFilters.availableOnly" />` | Declares a core TypeScript structure used by this module. |
| 87 | `        <label for="availableOnly" class="small">Only avail</label>` | Declares a core TypeScript structure used by this module. |
| 88 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `    <div class="d-flex gap-2 mt-2">` | Declares a core TypeScript structure used by this module. |
| 91 | `      <button class="btn btn-sm btn-outline-primary" (click)="applyTrainerFilters()">Apply</button>` | Declares a core TypeScript structure used by this module. |
| 92 | `      <button class="btn btn-sm btn-outline-secondary" (click)="clearTrainerFilters()">Clear</button>` | Declares a core TypeScript structure used by this module. |
| 93 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 94 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 95 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `<div *ngIf="loading" class="text-center py-5">` | Declares a core TypeScript structure used by this module. |
| 98 | `  <div class="spinner-border text-primary"></div>` | Declares a core TypeScript structure used by this module. |
| 99 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 100 | `` | Blank line used to separate logical blocks for readability. |
| 101 | `<div class="row g-3" *ngIf="!loading">` | Declares a core TypeScript structure used by this module. |
| 102 | `  <div class="col-md-4" *ngFor="let i of items">` | Declares a core TypeScript structure used by this module. |
| 103 | `    <div` | Core implementation line contributing to the file behavior. |
| 104 | `      data-testid="booking-item-card"` | Core implementation line contributing to the file behavior. |
| 105 | `      class="card item-card h-100"` | Declares a core TypeScript structure used by this module. |
| 106 | `      [class.disabled]="!hasMembership"` | Declares a core TypeScript structure used by this module. |
| 107 | `      (click)="open(i)">` | Core implementation line contributing to the file behavior. |
| 108 | `      <div class="thumb-wrapper">` | Declares a core TypeScript structure used by this module. |
| 109 | `        <img [src]="mode === 'class' ? getClassLogo(i) : trainerThumbnail(i)" alt="" />` | Declares a core TypeScript structure used by this module. |
| 110 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 111 | `      ` | Blank line used to separate logical blocks for readability. |
| 112 | `      <div class="card-body">` | Declares a core TypeScript structure used by this module. |
| 113 | `        <h6 class="fw-semibold mb-1">` | Declares a core TypeScript structure used by this module. |
| 114 | `          {{ mode === 'class' ? i.className : trainerDisplayName(i) }}` | Declares a core TypeScript structure used by this module. |
| 115 | `        </h6>` | HTML tag opening/closing markup for component template structure. |
| 116 | `        <small class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 117 | `          {{` | Begins a new code/style block scope. |
| 118 | `            mode === 'class'` | Declares a core TypeScript structure used by this module. |
| 119 | `              ? (i.category + ' • ' + (i.daysOfWeek.join(', ') \|\| '-'))` | Core implementation line contributing to the file behavior. |
| 120 | `              : trainerSpecialization(i)` | Core implementation line contributing to the file behavior. |
| 121 | `          }}` | Core implementation line contributing to the file behavior. |
| 122 | `        </small>` | HTML tag opening/closing markup for component template structure. |
| 123 | `        <div *ngIf="mode === 'class'" class="small mt-2 text-muted">` | Declares a core TypeScript structure used by this module. |
| 124 | `          {{ formatClassTime(i.startTime) }} - {{ formatClassTime(i.endTime) }} • {{ i.location }}` | Core implementation line contributing to the file behavior. |
| 125 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 126 | `        <div *ngIf="mode === 'trainer'" class="small mt-2 text-muted">` | Declares a core TypeScript structure used by this module. |
| 127 | `          {{ i.ptSessionPrice60 \|\| i.hourlyRate \|\| i.pricing['60'] \|\| 0 \| number }} VND / session` | Core implementation line contributing to the file behavior. |
| 128 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 129 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 130 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 131 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 132 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 133 | `` | Blank line used to separate logical blocks for readability. |
| 134 | `<div *ngIf="mode === 'class' && !loading" class="d-flex justify-content-between align-items-center mt-3">` | Declares a core TypeScript structure used by this module. |
| 135 | `  <small class="text-muted">Page {{ classFilters.page }} / {{ classPageMeta.totalPages }}</small>` | Declares a core TypeScript structure used by this module. |
| 136 | `  <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 137 | `    <button class="btn btn-sm btn-outline-secondary" [disabled]="!classPageMeta.hasPrev" (click)="prevClassPage()">Previous</button>` | Declares a core TypeScript structure used by this module. |
| 138 | `    <button class="btn btn-sm btn-outline-secondary" [disabled]="!classPageMeta.hasNext" (click)="nextClassPage()">Next</button>` | Declares a core TypeScript structure used by this module. |
| 139 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 140 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 141 | `` | Blank line used to separate logical blocks for readability. |
| 142 | `<div data-testid="trainer-booking-modal" *ngIf="selectedItem && mode==='trainer'" class="membership-modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,.5); z-index:1200;" (click)="close()">` | Declares a core TypeScript structure used by this module. |
| 143 | `  <div class="bg-white rounded-4 shadow p-4 trainer-modal" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 144 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 145 | `      <h5 class="mb-0">Trainer Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 146 | `      <button class="btn btn-sm btn-outline-secondary" (click)="close()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 147 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 148 | `` | Blank line used to separate logical blocks for readability. |
| 149 | `    <div *ngIf="trainerDetailLoading" class="text-muted">Loading trainer profile and slots...</div>` | Declares a core TypeScript structure used by this module. |
| 150 | `` | Blank line used to separate logical blocks for readability. |
| 151 | `    <div *ngIf="!trainerDetailLoading">` | HTML tag opening/closing markup for component template structure. |
| 152 | `      <div class="d-flex gap-3 align-items-start flex-wrap mb-3">` | Declares a core TypeScript structure used by this module. |
| 153 | `        <img [src]="trainerThumbnail(trainerProfile \|\| selectedItem)" class="class-logo" alt="trainer avatar" />` | Declares a core TypeScript structure used by this module. |
| 154 | `        <div class="flex-grow-1 small">` | Declares a core TypeScript structure used by this module. |
| 155 | `          <div><strong>Name:</strong> {{ trainerDisplayName(trainerProfile \|\| selectedItem) }}</div>` | HTML tag opening/closing markup for component template structure. |
| 156 | `          <div><strong>Email:</strong> {{ (trainerProfile \|\| selectedItem)?.email \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 157 | `          <div><strong>Specialization:</strong> {{ trainerSpecialization(trainerProfile \|\| selectedItem) }}</div>` | HTML tag opening/closing markup for component template structure. |
| 158 | `          <div><strong>Experience:</strong> {{ (trainerProfile \|\| selectedItem)?.experience ?? '-' }} years</div>` | HTML tag opening/closing markup for component template structure. |
| 159 | `          <div><strong>Biography:</strong> {{ (trainerProfile \|\| selectedItem)?.biography \|\| (trainerProfile \|\| selectedItem)?.bio \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 160 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 161 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 162 | `` | Blank line used to separate logical blocks for readability. |
| 163 | `      <div class="mb-2 fw-semibold">Bookable slots</div>` | Declares a core TypeScript structure used by this module. |
| 164 | `      <div *ngIf="trainerSlots.length === 0" class="text-muted small mb-3">No available slots.</div>` | Declares a core TypeScript structure used by this module. |
| 165 | `      <div class="trainer-slot-list mb-3" *ngIf="trainerSlots.length > 0">` | Declares a core TypeScript structure used by this module. |
| 166 | `        <button` | Core implementation line contributing to the file behavior. |
| 167 | `          data-testid="trainer-slot-option"` | Core implementation line contributing to the file behavior. |
| 168 | `          type="button"` | Declares a core TypeScript structure used by this module. |
| 169 | `          class="trainer-slot-chip"` | Declares a core TypeScript structure used by this module. |
| 170 | `          [class.active]="selectedTrainerSlot === slot"` | Declares a core TypeScript structure used by this module. |
| 171 | `          *ngFor="let slot of trainerSlots"` | Block comment content (documentation for nearby code). |
| 172 | `          (click)="selectTrainerSlot(slot)"` | Core implementation line contributing to the file behavior. |
| 173 | `        >` | Core implementation line contributing to the file behavior. |
| 174 | `          {{ slotTimeLabel(slot) }}` | Core implementation line contributing to the file behavior. |
| 175 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 176 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 177 | `` | Blank line used to separate logical blocks for readability. |
| 178 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 179 | `        <label class="form-label">Notes (optional)</label>` | Declares a core TypeScript structure used by this module. |
| 180 | `        <textarea data-testid="trainer-booking-notes" class="form-control" rows="2" [(ngModel)]="trainerBookingNotes" placeholder="Note here"></textarea>` | Declares a core TypeScript structure used by this module. |
| 181 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 182 | `` | Blank line used to separate logical blocks for readability. |
| 183 | `      <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 184 | `        <button class="btn btn-outline-secondary" (click)="close()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 185 | `        <button data-testid="trainer-booking-submit" class="btn btn-primary" [disabled]="!selectedTrainerSlot \|\| trainerBookingSubmitting" (click)="confirmTrainerBooking()">` | Declares a core TypeScript structure used by this module. |
| 186 | `          {{ trainerBookingSubmitting ? 'Booking...' : 'Create Booking Request' }}` | Core implementation line contributing to the file behavior. |
| 187 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 188 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 189 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 190 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 191 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 192 | `` | Blank line used to separate logical blocks for readability. |
| 193 | `<div *ngIf="selectedClass" data-testid="class-booking-modal" class="membership-modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,.5); z-index:1200;" (click)="close()">` | Declares a core TypeScript structure used by this module. |
| 194 | `  <div class="bg-white rounded-4 shadow p-4 class-modal" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 195 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 196 | `      <h5 class="mb-0">{{ selectedClass.className }}</h5>` | Declares a core TypeScript structure used by this module. |
| 197 | `      <button class="btn btn-sm btn-outline-secondary" (click)="close()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 198 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 199 | `` | Blank line used to separate logical blocks for readability. |
| 200 | `    <div class="d-flex gap-3 align-items-start flex-wrap mb-3">` | Declares a core TypeScript structure used by this module. |
| 201 | `      <img [src]="getClassLogo(selectedClass)" class="class-logo" alt="class logo" />` | Declares a core TypeScript structure used by this module. |
| 202 | `      <div class="flex-grow-1">` | Declares a core TypeScript structure used by this module. |
| 203 | `        <div class="text-muted mb-2">{{ selectedClass.description \|\| 'No description' }}</div>` | Declares a core TypeScript structure used by this module. |
| 204 | `        <div class="small">` | Declares a core TypeScript structure used by this module. |
| 205 | `          <div><strong>Category:</strong> {{ selectedClass.category }}</div>` | HTML tag opening/closing markup for component template structure. |
| 206 | `          <div><strong>Difficulty:</strong> {{ selectedClass.difficultyLevel }}</div>` | HTML tag opening/closing markup for component template structure. |
| 207 | `          <div><strong>Days:</strong> {{ (selectedClass.daysOfWeek \|\| [selectedClass.dayOfWeek]).join(', ') }}</div>` | HTML tag opening/closing markup for component template structure. |
| 208 | `          <div><strong>Time:</strong> {{ formatClassTime(selectedClass.startTime) }} - {{ formatClassTime(selectedClass.endTime) }}</div>` | HTML tag opening/closing markup for component template structure. |
| 209 | `          <div><strong>Location:</strong> {{ selectedClass.location }}</div>` | HTML tag opening/closing markup for component template structure. |
| 210 | `          <div><strong>Capacity:</strong> {{ selectedClass.capacity }} (remaining: {{ selectedClass.remainingSlots }})</div>` | HTML tag opening/closing markup for component template structure. |
| 211 | `          <div><strong>Valid range:</strong> {{ selectedClass.validFrom \| date:'yyyy-MM-dd' }} → {{ selectedClass.validUntil \| date:'yyyy-MM-dd' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 212 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 213 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 214 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 215 | `` | Blank line used to separate logical blocks for readability. |
| 216 | `    <div class="row g-2 mb-3">` | Declares a core TypeScript structure used by this module. |
| 217 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 218 | `        <label class="form-label">Booking start date *</label>` | Declares a core TypeScript structure used by this module. |
| 219 | `        <input data-testid="class-booking-start-date" class="form-control" type="date"` | Declares a core TypeScript structure used by this module. |
| 220 | `          [min]="toDateInput(selectedClass.validFrom)"` | Core implementation line contributing to the file behavior. |
| 221 | `          [max]="toDateInput(selectedClass.validUntil)"` | Core implementation line contributing to the file behavior. |
| 222 | `          [(ngModel)]="bookingStartDate" />` | Core implementation line contributing to the file behavior. |
| 223 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 224 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 225 | `        <label class="form-label">Booking end date *</label>` | Declares a core TypeScript structure used by this module. |
| 226 | `        <input data-testid="class-booking-end-date" class="form-control" type="date"` | Declares a core TypeScript structure used by this module. |
| 227 | `          [min]="toDateInput(selectedClass.validFrom)"` | Core implementation line contributing to the file behavior. |
| 228 | `          [max]="toDateInput(selectedClass.validUntil)"` | Core implementation line contributing to the file behavior. |
| 229 | `          [(ngModel)]="bookingEndDate" />` | Core implementation line contributing to the file behavior. |
| 230 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 231 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 232 | `` | Blank line used to separate logical blocks for readability. |
| 233 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 234 | `      <button class="btn btn-outline-secondary" (click)="close()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 235 | `      <button data-testid="class-booking-submit" class="btn btn-primary" [disabled]="!canBookClass() \|\| bookingClassSubmitting" (click)="confirmClassBooking()">` | Declares a core TypeScript structure used by this module. |
| 236 | `        {{ bookingClassSubmitting ? 'Booking...' : 'Book Class' }}` | Core implementation line contributing to the file behavior. |
| 237 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 238 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 239 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 240 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.