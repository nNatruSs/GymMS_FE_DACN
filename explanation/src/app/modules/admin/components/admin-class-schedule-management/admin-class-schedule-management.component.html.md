# Explanation: `src/app/modules/admin/components/admin-class-schedule-management/admin-class-schedule-management.component.html`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-class-schedule-management/admin-class-schedule-management.component.html`
- **Total lines:** `363`
- **Non-empty lines:** `343`
- **Import statements:** `0`
- **Class-like declarations found:** `159`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="schedule-page">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="hero-card mb-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div>` | HTML tag opening/closing markup for component template structure. |
| 4 | `      <h4 class="mb-1">Class Scheduling</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <p class="mb-0 text-muted">Schedule classes between members and trainers with conflict checks and exceptions.</p>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `    <button class="btn btn-primary px-4" (click)="openCreateModal()">Create Class Schedule</button>` | Declares a core TypeScript structure used by this module. |
| 8 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `  <div class="control-card mb-3">` | Declares a core TypeScript structure used by this module. |
| 11 | `    <div class="row g-2 align-items-end">` | Declares a core TypeScript structure used by this module. |
| 12 | `      <div class="col-lg-2">` | Declares a core TypeScript structure used by this module. |
| 13 | `        <label class="form-label mb-1">Sort</label>` | Declares a core TypeScript structure used by this module. |
| 14 | `        <select class="form-select" [(ngModel)]="sort">` | Declares a core TypeScript structure used by this module. |
| 15 | `          <option value="">Default</option>` | HTML tag opening/closing markup for component template structure. |
| 16 | `          <option value="asc">Ascending</option>` | HTML tag opening/closing markup for component template structure. |
| 17 | `          <option value="desc">Descending</option>` | HTML tag opening/closing markup for component template structure. |
| 18 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 19 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 20 | `      <div class="col-lg-2">` | Declares a core TypeScript structure used by this module. |
| 21 | `        <label class="form-label mb-1">Category (q)</label>` | Declares a core TypeScript structure used by this module. |
| 22 | `        <select class="form-select" [(ngModel)]="q">` | Declares a core TypeScript structure used by this module. |
| 23 | `          <option value="">All</option>` | HTML tag opening/closing markup for component template structure. |
| 24 | `          <option *ngFor="let c of categoryOptions" [value]="c">{{ c }}</option>` | HTML tag opening/closing markup for component template structure. |
| 25 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 26 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `      <div class="col-lg-2">` | Declares a core TypeScript structure used by this module. |
| 28 | `        <label class="form-label mb-1">Search Field</label>` | Declares a core TypeScript structure used by this module. |
| 29 | `        <input class="form-control" [(ngModel)]="searchField" placeholder="Class name/location" />` | Declares a core TypeScript structure used by this module. |
| 30 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 31 | `      <div class="col-lg-2">` | Declares a core TypeScript structure used by this module. |
| 32 | `        <label class="form-label mb-1">Day</label>` | Declares a core TypeScript structure used by this module. |
| 33 | `        <select class="form-select" [(ngModel)]="dayOfWeek">` | Declares a core TypeScript structure used by this module. |
| 34 | `          <option value="">All</option>` | HTML tag opening/closing markup for component template structure. |
| 35 | `          <option *ngFor="let d of days" [value]="d.code">{{ d.code }}</option>` | HTML tag opening/closing markup for component template structure. |
| 36 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 37 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 38 | `      <div class="col-lg-2">` | Declares a core TypeScript structure used by this module. |
| 39 | `        <label class="form-label mb-1">Trainer Filter</label>` | Declares a core TypeScript structure used by this module. |
| 40 | `        <select class="form-select" [(ngModel)]="trainerIdFilter">` | Declares a core TypeScript structure used by this module. |
| 41 | `          <option value="">All trainers</option>` | HTML tag opening/closing markup for component template structure. |
| 42 | `          <option *ngFor="let t of trainerFilterOptions" [value]="t.id">` | HTML tag opening/closing markup for component template structure. |
| 43 | `            {{ trainerName(t) }}` | Core implementation line contributing to the file behavior. |
| 44 | `          </option>` | HTML tag opening/closing markup for component template structure. |
| 45 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 46 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 47 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `    <div class="d-flex gap-2 mt-3">` | Declares a core TypeScript structure used by this module. |
| 50 | `      <button class="btn btn-outline-primary" (click)="applyFilters()">Apply Filters</button>` | Declares a core TypeScript structure used by this module. |
| 51 | `      <button class="btn btn-outline-secondary" (click)="clearFilters()">Clear</button>` | Declares a core TypeScript structure used by this module. |
| 52 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 53 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `  <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 56 | `  <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `  <div class="list-card">` | Declares a core TypeScript structure used by this module. |
| 59 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 60 | `      <h5 class="mb-0">Class Schedules</h5>` | Declares a core TypeScript structure used by this module. |
| 61 | `      <span class="text-muted small">Total {{ scheduleTotal }}</span>` | Declares a core TypeScript structure used by this module. |
| 62 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 63 | `` | Blank line used to separate logical blocks for readability. |
| 64 | `    <div *ngIf="loading" class="text-muted">Loading schedules...</div>` | Declares a core TypeScript structure used by this module. |
| 65 | `    <div *ngIf="!loading && scheduleDocs.length === 0" class="text-muted">No schedules found.</div>` | Declares a core TypeScript structure used by this module. |
| 66 | `` | Blank line used to separate logical blocks for readability. |
| 67 | `    <div class="table-responsive" *ngIf="!loading && scheduleDocs.length > 0">` | Declares a core TypeScript structure used by this module. |
| 68 | `      <table class="table align-middle schedule-table mb-0">` | Declares a core TypeScript structure used by this module. |
| 69 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 70 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 71 | `            <th>Class</th>` | HTML tag opening/closing markup for component template structure. |
| 72 | `            <th>Trainer id</th>` | HTML tag opening/closing markup for component template structure. |
| 73 | `            <th>Days</th>` | HTML tag opening/closing markup for component template structure. |
| 74 | `            <th>Time</th>` | HTML tag opening/closing markup for component template structure. |
| 75 | `            <th>Validity</th>` | HTML tag opening/closing markup for component template structure. |
| 76 | `            <th>Location</th>` | HTML tag opening/closing markup for component template structure. |
| 77 | `            <th>Capacity</th>` | HTML tag opening/closing markup for component template structure. |
| 78 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 79 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 80 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 81 | `          <tr class="row-clickable" *ngFor="let s of scheduleDocs" (click)="openScheduleDetail(s)">` | Declares a core TypeScript structure used by this module. |
| 82 | `            <td class="fw-semibold">{{ s.className \|\| classNameById(s.classId) }}</td>` | Declares a core TypeScript structure used by this module. |
| 83 | `            <td>{{ s.trainerName \|\| s.trainer?.firstName \|\| s.trainerId }}</td>` | HTML tag opening/closing markup for component template structure. |
| 84 | `            <td>{{ (s.daysOfWeek \|\| [s.dayOfWeek \|\| '-']).join(', ') }}</td>` | HTML tag opening/closing markup for component template structure. |
| 85 | `            <td>{{ displayTime(s.startTime) }} - {{ displayTime(s.endTime) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 86 | `            <td>{{ s.validFrom \| date:'yyyy-MM-dd' }} → {{ s.validUntil \| date:'yyyy-MM-dd' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 87 | `            <td>{{ s.location }}</td>` | HTML tag opening/closing markup for component template structure. |
| 88 | `            <td>{{ s.capacity }}</td>` | HTML tag opening/closing markup for component template structure. |
| 89 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 90 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 91 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 92 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `` | Blank line used to separate logical blocks for readability. |
| 94 | `    <div class="d-flex justify-content-between align-items-center mt-3">` | Declares a core TypeScript structure used by this module. |
| 95 | `      <div class="text-muted small">Page {{ schedulePage }} / {{ scheduleTotalPages }}</div>` | Declares a core TypeScript structure used by this module. |
| 96 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 97 | `        <button class="btn btn-sm btn-outline-secondary" [disabled]="!scheduleHasPrev \|\| loading" (click)="previousSchedulePage()">Previous</button>` | Declares a core TypeScript structure used by this module. |
| 98 | `        <button class="btn btn-sm btn-outline-secondary" [disabled]="!scheduleHasNext \|\| loading" (click)="nextSchedulePage()">Next</button>` | Declares a core TypeScript structure used by this module. |
| 99 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 100 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 101 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 102 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `<div *ngIf="showCreateModal" class="modal-overlay" (click)="onBackdropClick($event, 'create')">` | Declares a core TypeScript structure used by this module. |
| 105 | `  <div class="modal-card modal-xl-card">` | Declares a core TypeScript structure used by this module. |
| 106 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 107 | `      <h5 class="mb-0">Create Class Schedule</h5>` | Declares a core TypeScript structure used by this module. |
| 108 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeCreateModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 109 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `    <form [formGroup]="createForm" (ngSubmit)="createSchedule()">` | HTML tag opening/closing markup for component template structure. |
| 112 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 113 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 114 | `          <label class="form-label">Class Type *</label>` | Declares a core TypeScript structure used by this module. |
| 115 | `          <select class="form-select" formControlName="classId">` | Declares a core TypeScript structure used by this module. |
| 116 | `            <option value="">Select class</option>` | Declares a core TypeScript structure used by this module. |
| 117 | `            <option *ngFor="let c of classTypes" [value]="c.id">{{ c.className }} ({{ c.category }})</option>` | HTML tag opening/closing markup for component template structure. |
| 118 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 119 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 121 | `          <label class="form-label">Start Time *</label>` | Declares a core TypeScript structure used by this module. |
| 122 | `          <input class="form-control" type="time" formControlName="startTime" />` | Declares a core TypeScript structure used by this module. |
| 123 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 124 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 125 | `          <label class="form-label">End Time *</label>` | Declares a core TypeScript structure used by this module. |
| 126 | `          <input class="form-control" type="time" formControlName="endTime" />` | Declares a core TypeScript structure used by this module. |
| 127 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 128 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 129 | `          <label class="form-label">Valid From *</label>` | Declares a core TypeScript structure used by this module. |
| 130 | `          <input class="form-control" type="date" formControlName="validFrom" />` | Declares a core TypeScript structure used by this module. |
| 131 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 132 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 133 | `          <label class="form-label">Valid Until *</label>` | Declares a core TypeScript structure used by this module. |
| 134 | `          <input class="form-control" type="date" formControlName="validUntil" />` | Declares a core TypeScript structure used by this module. |
| 135 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 136 | `        <div class="col-md-4">` | Declares a core TypeScript structure used by this module. |
| 137 | `          <label class="form-label">Location *</label>` | Declares a core TypeScript structure used by this module. |
| 138 | `          <input class="form-control" formControlName="location" />` | Declares a core TypeScript structure used by this module. |
| 139 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 140 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 141 | `          <label class="form-label">Capacity *</label>` | Declares a core TypeScript structure used by this module. |
| 142 | `          <input class="form-control" type="number" min="1" formControlName="capacity" />` | Declares a core TypeScript structure used by this module. |
| 143 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 144 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 145 | `` | Blank line used to separate logical blocks for readability. |
| 146 | `      <div class="mt-3">` | Declares a core TypeScript structure used by this module. |
| 147 | `        <label class="form-label">Days of Week *</label>` | Declares a core TypeScript structure used by this module. |
| 148 | `        <div class="day-grid">` | Declares a core TypeScript structure used by this module. |
| 149 | `          <label class="day-item" *ngFor="let d of days">` | Declares a core TypeScript structure used by this module. |
| 150 | `            <input type="checkbox" class="form-check-input me-2" (change)="toggleCreateDay(d.code, $any($event.target).checked)" />` | Declares a core TypeScript structure used by this module. |
| 151 | `            <span>{{ d.label }} ({{ d.code }})</span>` | HTML tag opening/closing markup for component template structure. |
| 152 | `          </label>` | HTML tag opening/closing markup for component template structure. |
| 153 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 154 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 155 | `` | Blank line used to separate logical blocks for readability. |
| 156 | `      <div class="mt-3">` | Declares a core TypeScript structure used by this module. |
| 157 | `        <h6 class="mb-2">Choose Trainer (paginated)</h6>` | Declares a core TypeScript structure used by this module. |
| 158 | `        <div class="table-responsive trainer-box">` | Declares a core TypeScript structure used by this module. |
| 159 | `          <table class="table align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 160 | `            <thead>` | HTML tag opening/closing markup for component template structure. |
| 161 | `              <tr>` | HTML tag opening/closing markup for component template structure. |
| 162 | `                <th></th>` | HTML tag opening/closing markup for component template structure. |
| 163 | `                <th>Name</th>` | HTML tag opening/closing markup for component template structure. |
| 164 | `                <th>Email</th>` | HTML tag opening/closing markup for component template structure. |
| 165 | `                <th>ID</th>` | HTML tag opening/closing markup for component template structure. |
| 166 | `              </tr>` | HTML tag opening/closing markup for component template structure. |
| 167 | `            </thead>` | HTML tag opening/closing markup for component template structure. |
| 168 | `            <tbody>` | HTML tag opening/closing markup for component template structure. |
| 169 | `              <tr *ngFor="let t of trainers">` | HTML tag opening/closing markup for component template structure. |
| 170 | `                <td>` | HTML tag opening/closing markup for component template structure. |
| 171 | `                  <input type="radio" name="createTrainer" [checked]="selectedCreateTrainerId === t.id" (change)="selectedCreateTrainerId = t.id" />` | Declares a core TypeScript structure used by this module. |
| 172 | `                </td>` | HTML tag opening/closing markup for component template structure. |
| 173 | `                <td>{{ trainerName(t) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 174 | `                <td>{{ t.email \|\| '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 175 | `                <td class="small text-muted">{{ t.id }}</td>` | Declares a core TypeScript structure used by this module. |
| 176 | `              </tr>` | HTML tag opening/closing markup for component template structure. |
| 177 | `            </tbody>` | HTML tag opening/closing markup for component template structure. |
| 178 | `          </table>` | HTML tag opening/closing markup for component template structure. |
| 179 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 180 | `        <div class="d-flex justify-content-end gap-2 mt-2">` | Declares a core TypeScript structure used by this module. |
| 181 | `          <button type="button" class="btn btn-sm btn-outline-secondary" [disabled]="!trainerHasPrev" (click)="loadTrainers(trainerPage - 1)">Prev trainers</button>` | Declares a core TypeScript structure used by this module. |
| 182 | `          <button type="button" class="btn btn-sm btn-outline-secondary" [disabled]="!trainerHasNext" (click)="loadTrainers(trainerPage + 1)">Next trainers</button>` | Declares a core TypeScript structure used by this module. |
| 183 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 184 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 185 | `` | Blank line used to separate logical blocks for readability. |
| 186 | `      <div class="d-flex justify-content-end gap-2 mt-4">` | Declares a core TypeScript structure used by this module. |
| 187 | `        <button type="button" class="btn btn-outline-secondary" (click)="closeCreateModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 188 | `        <button type="submit" class="btn btn-primary" [disabled]="creating \|\| checkingConflict">` | Declares a core TypeScript structure used by this module. |
| 189 | `          {{ checkingConflict ? 'Checking conflicts...' : (creating ? 'Creating...' : 'Create Schedule') }}` | Core implementation line contributing to the file behavior. |
| 190 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 191 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 192 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 193 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 194 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `<div *ngIf="showDetailModal" class="modal-overlay" (click)="onBackdropClick($event, 'detail')">` | Declares a core TypeScript structure used by this module. |
| 197 | `  <div class="modal-card modal-xl-card">` | Declares a core TypeScript structure used by this module. |
| 198 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 199 | `      <h5 class="mb-0">Schedule Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 200 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeDetailModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 201 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 202 | `` | Blank line used to separate logical blocks for readability. |
| 203 | `    <form [formGroup]="editForm" (ngSubmit)="updateSchedule()">` | HTML tag opening/closing markup for component template structure. |
| 204 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 205 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 206 | `          <label class="form-label">Class Type *</label>` | Declares a core TypeScript structure used by this module. |
| 207 | `          <select class="form-select" formControlName="classId">` | Declares a core TypeScript structure used by this module. |
| 208 | `            <option *ngFor="let c of classTypes" [value]="c.id">{{ c.className }} ({{ c.category }})</option>` | HTML tag opening/closing markup for component template structure. |
| 209 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 210 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 211 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 212 | `          <label class="form-label">Start Time *</label>` | Declares a core TypeScript structure used by this module. |
| 213 | `          <input class="form-control" type="time" formControlName="startTime" />` | Declares a core TypeScript structure used by this module. |
| 214 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 215 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 216 | `          <label class="form-label">End Time *</label>` | Declares a core TypeScript structure used by this module. |
| 217 | `          <input class="form-control" type="time" formControlName="endTime" />` | Declares a core TypeScript structure used by this module. |
| 218 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 219 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 220 | `          <label class="form-label">Valid From *</label>` | Declares a core TypeScript structure used by this module. |
| 221 | `          <input class="form-control" type="date" formControlName="validFrom" />` | Declares a core TypeScript structure used by this module. |
| 222 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 223 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 224 | `          <label class="form-label">Valid Until *</label>` | Declares a core TypeScript structure used by this module. |
| 225 | `          <input class="form-control" type="date" formControlName="validUntil" />` | Declares a core TypeScript structure used by this module. |
| 226 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 227 | `        <div class="col-md-4">` | Declares a core TypeScript structure used by this module. |
| 228 | `          <label class="form-label">Location *</label>` | Declares a core TypeScript structure used by this module. |
| 229 | `          <input class="form-control" formControlName="location" />` | Declares a core TypeScript structure used by this module. |
| 230 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 231 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 232 | `          <label class="form-label">Capacity *</label>` | Declares a core TypeScript structure used by this module. |
| 233 | `          <input class="form-control" type="number" min="1" formControlName="capacity" />` | Declares a core TypeScript structure used by this module. |
| 234 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 235 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 236 | `` | Blank line used to separate logical blocks for readability. |
| 237 | `      <div class="mt-3">` | Declares a core TypeScript structure used by this module. |
| 238 | `        <label class="form-label">Days of Week *</label>` | Declares a core TypeScript structure used by this module. |
| 239 | `        <div class="day-grid">` | Declares a core TypeScript structure used by this module. |
| 240 | `          <label class="day-item" *ngFor="let d of days">` | Declares a core TypeScript structure used by this module. |
| 241 | `            <input` | Core implementation line contributing to the file behavior. |
| 242 | `              type="checkbox"` | Declares a core TypeScript structure used by this module. |
| 243 | `              class="form-check-input me-2"` | Declares a core TypeScript structure used by this module. |
| 244 | `              [checked]="selectedEditDays.has(d.code)"` | Core implementation line contributing to the file behavior. |
| 245 | `              (change)="toggleEditDay(d.code, $any($event.target).checked)"` | Core implementation line contributing to the file behavior. |
| 246 | `            />` | Core implementation line contributing to the file behavior. |
| 247 | `            <span>{{ d.label }} ({{ d.code }})</span>` | HTML tag opening/closing markup for component template structure. |
| 248 | `          </label>` | HTML tag opening/closing markup for component template structure. |
| 249 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 250 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 251 | `` | Blank line used to separate logical blocks for readability. |
| 252 | `      <div class="mt-3">` | Declares a core TypeScript structure used by this module. |
| 253 | `        <h6 class="mb-2">Trainer</h6>` | Declares a core TypeScript structure used by this module. |
| 254 | `        <div class="table-responsive trainer-box">` | Declares a core TypeScript structure used by this module. |
| 255 | `          <table class="table align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 256 | `            <thead>` | HTML tag opening/closing markup for component template structure. |
| 257 | `              <tr>` | HTML tag opening/closing markup for component template structure. |
| 258 | `                <th></th>` | HTML tag opening/closing markup for component template structure. |
| 259 | `                <th>Name</th>` | HTML tag opening/closing markup for component template structure. |
| 260 | `                <th>Email</th>` | HTML tag opening/closing markup for component template structure. |
| 261 | `              </tr>` | HTML tag opening/closing markup for component template structure. |
| 262 | `            </thead>` | HTML tag opening/closing markup for component template structure. |
| 263 | `            <tbody>` | HTML tag opening/closing markup for component template structure. |
| 264 | `              <tr *ngFor="let t of trainers">` | HTML tag opening/closing markup for component template structure. |
| 265 | `                <td>` | HTML tag opening/closing markup for component template structure. |
| 266 | `                  <input type="radio" name="editTrainer" [checked]="selectedEditTrainerId === t.id" (change)="selectedEditTrainerId = t.id" />` | Declares a core TypeScript structure used by this module. |
| 267 | `                </td>` | HTML tag opening/closing markup for component template structure. |
| 268 | `                <td>{{ trainerName(t) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 269 | `                <td>{{ t.email \|\| '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 270 | `              </tr>` | HTML tag opening/closing markup for component template structure. |
| 271 | `            </tbody>` | HTML tag opening/closing markup for component template structure. |
| 272 | `          </table>` | HTML tag opening/closing markup for component template structure. |
| 273 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 274 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 275 | `` | Blank line used to separate logical blocks for readability. |
| 276 | `      <div class="mt-3">` | Declares a core TypeScript structure used by this module. |
| 277 | `        <h6 class="mb-2">Upload Class Cover Image</h6>` | Declares a core TypeScript structure used by this module. |
| 278 | `        <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 279 | `          <input class="form-control" type="file" accept="image/*" (change)="onClassImageSelected($event)" />` | Declares a core TypeScript structure used by this module. |
| 280 | `          <button type="button" class="btn btn-outline-primary" [disabled]="!selectedClassImageFile \|\| uploadingImage" (click)="uploadClassImage()">` | Declares a core TypeScript structure used by this module. |
| 281 | `            {{ uploadingImage ? 'Uploading...' : 'Upload' }}` | Core implementation line contributing to the file behavior. |
| 282 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 283 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 284 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 285 | `` | Blank line used to separate logical blocks for readability. |
| 286 | `      <div class="exception-section mt-4">` | Declares a core TypeScript structure used by this module. |
| 287 | `        <h6>Schedule Exceptions</h6>` | HTML tag opening/closing markup for component template structure. |
| 288 | `        <div [formGroup]="exceptionForm" class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 289 | `          <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 290 | `            <label class="form-label">Date *</label>` | Declares a core TypeScript structure used by this module. |
| 291 | `            <input class="form-control" type="date" formControlName="exceptionDate" />` | Declares a core TypeScript structure used by this module. |
| 292 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 293 | `          <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 294 | `            <label class="form-label">Type *</label>` | Declares a core TypeScript structure used by this module. |
| 295 | `            <select class="form-select" formControlName="type">` | Declares a core TypeScript structure used by this module. |
| 296 | `              <option value="CANCELLED">CANCELLED</option>` | HTML tag opening/closing markup for component template structure. |
| 297 | `              <option value="RESCHEDULED">RESCHEDULED</option>` | HTML tag opening/closing markup for component template structure. |
| 298 | `            </select>` | HTML tag opening/closing markup for component template structure. |
| 299 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 300 | `          <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 301 | `            <label class="form-label">New Start</label>` | Declares a core TypeScript structure used by this module. |
| 302 | `            <input class="form-control" type="time" formControlName="newStartTime" />` | Declares a core TypeScript structure used by this module. |
| 303 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 304 | `          <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 305 | `            <label class="form-label">New End</label>` | Declares a core TypeScript structure used by this module. |
| 306 | `            <input class="form-control" type="time" formControlName="newEndTime" />` | Declares a core TypeScript structure used by this module. |
| 307 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 308 | `          <div class="col-12">` | Declares a core TypeScript structure used by this module. |
| 309 | `            <label class="form-label">Reason</label>` | Declares a core TypeScript structure used by this module. |
| 310 | `            <input class="form-control" formControlName="reason" />` | Declares a core TypeScript structure used by this module. |
| 311 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 312 | `          <div class="col-12 d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 313 | `            <button type="button" class="btn btn-outline-secondary" *ngIf="editingExceptionId" (click)="cancelExceptionEdit()">Cancel Edit</button>` | Declares a core TypeScript structure used by this module. |
| 314 | `            <button type="button" class="btn btn-outline-primary" [disabled]="savingException" (click)="saveException()">` | Declares a core TypeScript structure used by this module. |
| 315 | `              {{ savingException ? 'Saving...' : (editingExceptionId ? 'Update Exception' : 'Add Exception') }}` | Core implementation line contributing to the file behavior. |
| 316 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 317 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 318 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 319 | `` | Blank line used to separate logical blocks for readability. |
| 320 | `        <div *ngIf="loadingExceptions" class="text-muted mt-2">Loading exceptions...</div>` | Declares a core TypeScript structure used by this module. |
| 321 | `        <div class="table-responsive mt-2" *ngIf="!loadingExceptions && exceptions.length">` | Declares a core TypeScript structure used by this module. |
| 322 | `          <table class="table table-sm align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 323 | `            <thead>` | HTML tag opening/closing markup for component template structure. |
| 324 | `              <tr>` | HTML tag opening/closing markup for component template structure. |
| 325 | `                <th>Date</th>` | HTML tag opening/closing markup for component template structure. |
| 326 | `                <th>Type</th>` | HTML tag opening/closing markup for component template structure. |
| 327 | `                <th>Reason</th>` | HTML tag opening/closing markup for component template structure. |
| 328 | `                <th>New Time</th>` | HTML tag opening/closing markup for component template structure. |
| 329 | `                <th class="text-end">Actions</th>` | Declares a core TypeScript structure used by this module. |
| 330 | `              </tr>` | HTML tag opening/closing markup for component template structure. |
| 331 | `            </thead>` | HTML tag opening/closing markup for component template structure. |
| 332 | `            <tbody>` | HTML tag opening/closing markup for component template structure. |
| 333 | `              <tr *ngFor="let ex of exceptions">` | HTML tag opening/closing markup for component template structure. |
| 334 | `                <td>{{ ex.exceptionDate \| date:'yyyy-MM-dd' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 335 | `                <td>{{ ex.type }}</td>` | Declares a core TypeScript structure used by this module. |
| 336 | `                <td>{{ ex.reason \|\| '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 337 | `                <td>{{ ex.newStartTime \|\| '-' }} - {{ ex.newEndTime \|\| '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 338 | `                <td class="text-end">` | Declares a core TypeScript structure used by this module. |
| 339 | `                  <button type="button" class="btn btn-sm btn-outline-primary me-2" (click)="editException(ex)">Edit</button>` | Declares a core TypeScript structure used by this module. |
| 340 | `                  <button type="button" class="btn btn-sm btn-outline-danger" [disabled]="deletingExceptionId===ex.id" (click)="deleteException(ex.id)">` | Declares a core TypeScript structure used by this module. |
| 341 | `                    {{ deletingExceptionId===ex.id ? 'Deleting...' : 'Delete' }}` | Core implementation line contributing to the file behavior. |
| 342 | `                  </button>` | HTML tag opening/closing markup for component template structure. |
| 343 | `                </td>` | HTML tag opening/closing markup for component template structure. |
| 344 | `              </tr>` | HTML tag opening/closing markup for component template structure. |
| 345 | `            </tbody>` | HTML tag opening/closing markup for component template structure. |
| 346 | `          </table>` | HTML tag opening/closing markup for component template structure. |
| 347 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 348 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 349 | `` | Blank line used to separate logical blocks for readability. |
| 350 | `      <div class="d-flex justify-content-between mt-4 flex-wrap gap-2">` | Declares a core TypeScript structure used by this module. |
| 351 | `        <button type="button" class="btn btn-outline-danger" [disabled]="deleting" (click)="deleteSchedule()">` | Declares a core TypeScript structure used by this module. |
| 352 | `          {{ deleting ? 'Deleting...' : 'Delete Schedule' }}` | Core implementation line contributing to the file behavior. |
| 353 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 354 | `        <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 355 | `          <button type="button" class="btn btn-outline-secondary" (click)="closeDetailModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 356 | `          <button type="submit" class="btn btn-primary" [disabled]="updating">` | Declares a core TypeScript structure used by this module. |
| 357 | `            {{ updating ? 'Updating...' : 'Update Schedule' }}` | Core implementation line contributing to the file behavior. |
| 358 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 359 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 360 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 361 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 362 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 363 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.