# Explanation: `src/app/modules/trainer/components/trainer-workout/trainer-workout.component.html`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-workout/trainer-workout.component.html`
- **Total lines:** `264`
- **Non-empty lines:** `241`
- **Import statements:** `0`
- **Class-like declarations found:** `138`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">` | Declares a core TypeScript structure used by this module. |
| 4 | `      <h4 class="fw-semibold mb-0">Workout</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `    <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 8 | `    <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 9 | `    <div *ngIf="loading" class="text-muted">Loading workout resources...</div>` | Declares a core TypeScript structure used by this module. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `    <div *ngIf="!loading" class="row g-4">` | Declares a core TypeScript structure used by this module. |
| 12 | `      ` | Blank line used to separate logical blocks for readability. |
| 13 | `      <div class="col-lg-5">` | Declares a core TypeScript structure used by this module. |
| 14 | `        <div class="section-card p-3 h-100">` | Declares a core TypeScript structure used by this module. |
| 15 | `          <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 16 | `            <h6 class="mb-0">Exercises</h6>` | Declares a core TypeScript structure used by this module. |
| 17 | `            <button class="btn btn-sm btn-primary" (click)="openCreateExerciseModal()">Add Exercise</button>` | Declares a core TypeScript structure used by this module. |
| 18 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `          <div *ngIf="exercises.length === 0" class="text-muted small">No exercises yet.</div>` | Declares a core TypeScript structure used by this module. |
| 21 | `          <div class="exercise-list" *ngIf="exercises.length > 0">` | Declares a core TypeScript structure used by this module. |
| 22 | `            <button type="button" class="exercise-item" *ngFor="let ex of exercises" (click)="openExerciseDetail(ex)">` | Declares a core TypeScript structure used by this module. |
| 23 | `              <div class="fw-semibold">{{ ex.name }}</div>` | Declares a core TypeScript structure used by this module. |
| 24 | `              <small class="text-muted">{{ ex.category }} • {{ ex.equipmentRequired \|\| 'No equipment info' }}</small>` | Declares a core TypeScript structure used by this module. |
| 25 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 26 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `      ` | Blank line used to separate logical blocks for readability. |
| 31 | `      <div class="col-lg-7">` | Declares a core TypeScript structure used by this module. |
| 32 | `        <div class="section-card p-3 h-100">` | Declares a core TypeScript structure used by this module. |
| 33 | `          <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 34 | `            <h6 class="mb-0">Workout Plans</h6>` | Declares a core TypeScript structure used by this module. |
| 35 | `            <button class="btn btn-sm btn-primary" (click)="openCreatePlanModal()">Create Plan</button>` | Declares a core TypeScript structure used by this module. |
| 36 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `          <div *ngIf="bookedMembers.length === 0" class="alert alert-warning py-2 mb-2">` | Declares a core TypeScript structure used by this module. |
| 39 | `            No booked members found from trainer bookings. You can create plans after members book sessions.` | Core implementation line contributing to the file behavior. |
| 40 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `          <div *ngIf="workoutPlans.length === 0" class="text-muted small">No workout plans yet.</div>` | Declares a core TypeScript structure used by this module. |
| 43 | `          <div class="plan-list" *ngIf="workoutPlans.length > 0">` | Declares a core TypeScript structure used by this module. |
| 44 | `            <button type="button" class="plan-item" *ngFor="let plan of workoutPlans" (click)="openPlanDetail(plan)">` | Declares a core TypeScript structure used by this module. |
| 45 | `              <div class="d-flex justify-content-between align-items-center">` | Declares a core TypeScript structure used by this module. |
| 46 | `                <span class="fw-semibold">{{ plan.title \|\| 'Workout Plan' }}</span>` | Declares a core TypeScript structure used by this module. |
| 47 | `                <span class="badge bg-light text-dark">{{ plan.status \|\| 'DRAFT' }}</span>` | Declares a core TypeScript structure used by this module. |
| 48 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 49 | `              <small class="text-muted">Duration: {{ plan.duration \|\| '-' }} min</small>` | Declares a core TypeScript structure used by this module. |
| 50 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 51 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 52 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 53 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 54 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 56 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `<div *ngIf="showCreateExerciseModal" class="modal-overlay" (click)="closeExerciseModals()">` | Declares a core TypeScript structure used by this module. |
| 60 | `  <div class="modal-card" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 61 | `    <h5 class="mb-3">Create Exercise</h5>` | Declares a core TypeScript structure used by this module. |
| 62 | `    <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 63 | `      <label class="form-label">Name *</label>` | Declares a core TypeScript structure used by this module. |
| 64 | `      <input class="form-control" [(ngModel)]="exerciseForm.name" />` | Declares a core TypeScript structure used by this module. |
| 65 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 66 | `    <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 67 | `      <label class="form-label">Description</label>` | Declares a core TypeScript structure used by this module. |
| 68 | `      <textarea class="form-control" rows="3" [(ngModel)]="exerciseForm.description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 69 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 70 | `    <div class="row g-2 mb-3">` | Declares a core TypeScript structure used by this module. |
| 71 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 72 | `        <label class="form-label">Category</label>` | Declares a core TypeScript structure used by this module. |
| 73 | `        <input class="form-control" [(ngModel)]="exerciseForm.category" />` | Declares a core TypeScript structure used by this module. |
| 74 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 75 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 76 | `        <label class="form-label">Equipment</label>` | Declares a core TypeScript structure used by this module. |
| 77 | `        <input class="form-control" [(ngModel)]="exerciseForm.equipmentRequired" />` | Declares a core TypeScript structure used by this module. |
| 78 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 79 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 80 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 81 | `      <button class="btn btn-outline-secondary" (click)="closeExerciseModals()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 82 | `      <button class="btn btn-primary" [disabled]="creatingExercise" (click)="createExercise()">` | Declares a core TypeScript structure used by this module. |
| 83 | `        {{ creatingExercise ? 'Creating...' : 'Create' }}` | Core implementation line contributing to the file behavior. |
| 84 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 85 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 86 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 87 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `` | Blank line used to separate logical blocks for readability. |
| 90 | `<div *ngIf="showExerciseDetailModal" class="modal-overlay" (click)="closeExerciseModals()">` | Declares a core TypeScript structure used by this module. |
| 91 | `  <div class="modal-card" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 92 | `    <h5 class="mb-3">Exercise Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 93 | `    <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 94 | `      <label class="form-label">Name *</label>` | Declares a core TypeScript structure used by this module. |
| 95 | `      <input class="form-control" [(ngModel)]="exerciseForm.name" />` | Declares a core TypeScript structure used by this module. |
| 96 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 97 | `    <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 98 | `      <label class="form-label">Description</label>` | Declares a core TypeScript structure used by this module. |
| 99 | `      <textarea class="form-control" rows="3" [(ngModel)]="exerciseForm.description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 100 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 101 | `    <div class="row g-2 mb-3">` | Declares a core TypeScript structure used by this module. |
| 102 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 103 | `        <label class="form-label">Category</label>` | Declares a core TypeScript structure used by this module. |
| 104 | `        <input class="form-control" [(ngModel)]="exerciseForm.category" />` | Declares a core TypeScript structure used by this module. |
| 105 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 106 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 107 | `        <label class="form-label">Equipment</label>` | Declares a core TypeScript structure used by this module. |
| 108 | `        <input class="form-control" [(ngModel)]="exerciseForm.equipmentRequired" />` | Declares a core TypeScript structure used by this module. |
| 109 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 110 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 111 | `    <div class="d-flex justify-content-between gap-2">` | Declares a core TypeScript structure used by this module. |
| 112 | `      <button class="btn btn-outline-danger" [disabled]="deletingExercise" (click)="deleteExercise()">` | Declares a core TypeScript structure used by this module. |
| 113 | `        {{ deletingExercise ? 'Deleting...' : 'Delete' }}` | Core implementation line contributing to the file behavior. |
| 114 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 115 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 116 | `        <button class="btn btn-outline-secondary" (click)="closeExerciseModals()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 117 | `        <button class="btn btn-primary" [disabled]="updatingExercise" (click)="updateExercise()">` | Declares a core TypeScript structure used by this module. |
| 118 | `          {{ updatingExercise ? 'Updating...' : 'Update' }}` | Core implementation line contributing to the file behavior. |
| 119 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 120 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 121 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 122 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 123 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 124 | `` | Blank line used to separate logical blocks for readability. |
| 125 | `` | Blank line used to separate logical blocks for readability. |
| 126 | `<div *ngIf="showCreatePlanModal" class="modal-overlay" (click)="closePlanModals()">` | Declares a core TypeScript structure used by this module. |
| 127 | `  <div class="modal-card modal-wide" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 128 | `    <h5 class="mb-3">Create Workout Plan</h5>` | Declares a core TypeScript structure used by this module. |
| 129 | `` | Blank line used to separate logical blocks for readability. |
| 130 | `    <div class="row g-2 mb-2">` | Declares a core TypeScript structure used by this module. |
| 131 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 132 | `        <label class="form-label">Title *</label>` | Declares a core TypeScript structure used by this module. |
| 133 | `        <input class="form-control" [(ngModel)]="planForm.title" />` | Declares a core TypeScript structure used by this module. |
| 134 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 135 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 136 | `        <label class="form-label">Duration (min)</label>` | Declares a core TypeScript structure used by this module. |
| 137 | `        <input class="form-control" type="number" min="1" [(ngModel)]="planForm.duration" />` | Declares a core TypeScript structure used by this module. |
| 138 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 139 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 140 | `        <label class="form-label">Status</label>` | Declares a core TypeScript structure used by this module. |
| 141 | `        <select class="form-select" [(ngModel)]="planForm.status">` | Declares a core TypeScript structure used by this module. |
| 142 | `          <option value="DRAFT">DRAFT</option>` | HTML tag opening/closing markup for component template structure. |
| 143 | `          <option value="ACTIVE">ACTIVE</option>` | HTML tag opening/closing markup for component template structure. |
| 144 | `          <option value="ARCHIVED">ARCHIVED</option>` | HTML tag opening/closing markup for component template structure. |
| 145 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 146 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 147 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 148 | `` | Blank line used to separate logical blocks for readability. |
| 149 | `    <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 150 | `      <label class="form-label">Visibility</label>` | Declares a core TypeScript structure used by this module. |
| 151 | `      <select class="form-select" [(ngModel)]="planForm.visibility">` | Declares a core TypeScript structure used by this module. |
| 152 | `        <option value="PRIVATE">PRIVATE</option>` | HTML tag opening/closing markup for component template structure. |
| 153 | `        <option value="PUBLIC">PUBLIC</option>` | HTML tag opening/closing markup for component template structure. |
| 154 | `      </select>` | HTML tag opening/closing markup for component template structure. |
| 155 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 156 | `` | Blank line used to separate logical blocks for readability. |
| 157 | `    <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 158 | `      <label class="form-label">Assign Booked Members *</label>` | Declares a core TypeScript structure used by this module. |
| 159 | `      <div *ngIf="bookedMembers.length === 0" class="text-muted small">No booked members available.</div>` | Declares a core TypeScript structure used by this module. |
| 160 | `      <div class="member-grid" *ngIf="bookedMembers.length > 0">` | Declares a core TypeScript structure used by this module. |
| 161 | `        <label class="member-item" *ngFor="let member of bookedMembers">` | Declares a core TypeScript structure used by this module. |
| 162 | `          <input` | Core implementation line contributing to the file behavior. |
| 163 | `            type="checkbox"` | Declares a core TypeScript structure used by this module. |
| 164 | `            class="form-check-input me-2"` | Declares a core TypeScript structure used by this module. |
| 165 | `            [checked]="planForm.assignedMemberIds.includes(member.id)"` | Core implementation line contributing to the file behavior. |
| 166 | `            (change)="toggleAssignedMember(member.id, $any($event.target).checked)"` | Core implementation line contributing to the file behavior. |
| 167 | `          />` | Core implementation line contributing to the file behavior. |
| 168 | `          <span>{{ member.name }}</span>` | HTML tag opening/closing markup for component template structure. |
| 169 | `          <small class="text-muted d-block">{{ member.email }}</small>` | Declares a core TypeScript structure used by this module. |
| 170 | `        </label>` | HTML tag opening/closing markup for component template structure. |
| 171 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 172 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 173 | `` | Blank line used to separate logical blocks for readability. |
| 174 | `    <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 175 | `      <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 176 | `        <label class="form-label mb-0">Plan Items</label>` | Declares a core TypeScript structure used by this module. |
| 177 | `        <button class="btn btn-sm btn-outline-primary" type="button" (click)="addPlanItem()">Add Item</button>` | Declares a core TypeScript structure used by this module. |
| 178 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 179 | `      <div class="plan-item-card mb-2" *ngFor="let item of planForm.planItems; index as i">` | Declares a core TypeScript structure used by this module. |
| 180 | `        <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 181 | `          <div class="col-md-4">` | Declares a core TypeScript structure used by this module. |
| 182 | `            <label class="form-label small">Exercise *</label>` | Declares a core TypeScript structure used by this module. |
| 183 | `            <select class="form-select form-select-sm" [(ngModel)]="item.exerciseId" [ngModelOptions]="{standalone:true}">` | Declares a core TypeScript structure used by this module. |
| 184 | `              <option value="">Select exercise</option>` | HTML tag opening/closing markup for component template structure. |
| 185 | `              <option *ngFor="let ex of exercises" [value]="ex.id">{{ ex.name }}</option>` | HTML tag opening/closing markup for component template structure. |
| 186 | `            </select>` | HTML tag opening/closing markup for component template structure. |
| 187 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 188 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 189 | `            <label class="form-label small">Set</label>` | Declares a core TypeScript structure used by this module. |
| 190 | `            <input class="form-control form-control-sm" type="number" min="1" [(ngModel)]="item.targetSet" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 191 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 192 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 193 | `            <label class="form-label small">Rep</label>` | Declares a core TypeScript structure used by this module. |
| 194 | `            <input class="form-control form-control-sm" type="number" min="1" [(ngModel)]="item.targetRep" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 195 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 196 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 197 | `            <label class="form-label small">Weight</label>` | Declares a core TypeScript structure used by this module. |
| 198 | `            <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="item.targetWeight" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 199 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 200 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 201 | `            <label class="form-label small">Day</label>` | Declares a core TypeScript structure used by this module. |
| 202 | `            <select class="form-select form-select-sm" [(ngModel)]="item.dayOfWeek" [ngModelOptions]="{standalone:true}">` | Declares a core TypeScript structure used by this module. |
| 203 | `              <option value="MON">MON</option>` | HTML tag opening/closing markup for component template structure. |
| 204 | `              <option value="TUE">TUE</option>` | HTML tag opening/closing markup for component template structure. |
| 205 | `              <option value="WED">WED</option>` | HTML tag opening/closing markup for component template structure. |
| 206 | `              <option value="THU">THU</option>` | HTML tag opening/closing markup for component template structure. |
| 207 | `              <option value="FRI">FRI</option>` | HTML tag opening/closing markup for component template structure. |
| 208 | `              <option value="SAT">SAT</option>` | HTML tag opening/closing markup for component template structure. |
| 209 | `              <option value="SUN">SUN</option>` | HTML tag opening/closing markup for component template structure. |
| 210 | `            </select>` | HTML tag opening/closing markup for component template structure. |
| 211 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 212 | `          <div class="col-12">` | Declares a core TypeScript structure used by this module. |
| 213 | `            <label class="form-label small">Notes</label>` | Declares a core TypeScript structure used by this module. |
| 214 | `            <input class="form-control form-control-sm" [(ngModel)]="item.notes" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 215 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 216 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 217 | `        <div class="text-end mt-2">` | Declares a core TypeScript structure used by this module. |
| 218 | `          <button class="btn btn-sm btn-outline-danger" type="button" (click)="removePlanItem(i)" [disabled]="planForm.planItems.length === 1">` | Declares a core TypeScript structure used by this module. |
| 219 | `            Remove` | Core implementation line contributing to the file behavior. |
| 220 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 221 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 222 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 223 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 224 | `` | Blank line used to separate logical blocks for readability. |
| 225 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 226 | `      <button class="btn btn-outline-secondary" (click)="closePlanModals()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 227 | `      <button class="btn btn-primary" [disabled]="creatingPlan \|\| bookedMembers.length===0" (click)="createWorkoutPlan()">` | Declares a core TypeScript structure used by this module. |
| 228 | `        {{ creatingPlan ? 'Creating...' : 'Create Plan' }}` | Core implementation line contributing to the file behavior. |
| 229 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 230 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 231 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 232 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 233 | `` | Blank line used to separate logical blocks for readability. |
| 234 | `` | Blank line used to separate logical blocks for readability. |
| 235 | `<div *ngIf="showPlanDetailModal" class="modal-overlay" (click)="closePlanModals()">` | Declares a core TypeScript structure used by this module. |
| 236 | `  <div class="modal-card modal-wide" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 237 | `    <h5 class="mb-3">Workout Plan Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 238 | `    <div *ngIf="loadingPlanDetail" class="text-muted">Loading plan details...</div>` | Declares a core TypeScript structure used by this module. |
| 239 | `    <div *ngIf="!loadingPlanDetail && selectedPlanDetail">` | HTML tag opening/closing markup for component template structure. |
| 240 | `      <div class="mb-2"><strong>Title:</strong> {{ selectedPlanDetail.title }}</div>` | Declares a core TypeScript structure used by this module. |
| 241 | `      <div class="mb-2"><strong>Status:</strong> {{ selectedPlanDetail.status }}</div>` | Declares a core TypeScript structure used by this module. |
| 242 | `      <div class="mb-2"><strong>Visibility:</strong> {{ selectedPlanDetail.visibility }}</div>` | Declares a core TypeScript structure used by this module. |
| 243 | `      <div class="mb-2"><strong>Duration:</strong> {{ selectedPlanDetail.duration }} min</div>` | Declares a core TypeScript structure used by this module. |
| 244 | `` | Blank line used to separate logical blocks for readability. |
| 245 | `      <h6 class="mt-3">Plan Items</h6>` | Declares a core TypeScript structure used by this module. |
| 246 | `      <div *ngIf="!(selectedPlanDetail.planItems?.length)" class="text-muted small">No items.</div>` | Declares a core TypeScript structure used by this module. |
| 247 | `      <div class="plan-item-card mb-2" *ngFor="let item of selectedPlanDetail.planItems">` | Declares a core TypeScript structure used by this module. |
| 248 | `        <div class="small">` | Declares a core TypeScript structure used by this module. |
| 249 | `          <strong>#{{ item.sequence }}</strong> • {{ item.exercise?.name \|\| item.exerciseId }}` | Core implementation line contributing to the file behavior. |
| 250 | `          • Set {{ item.targetSet }} • Rep {{ item.targetRep }} • Weight {{ item.targetWeight }}` | Core implementation line contributing to the file behavior. |
| 251 | `          • {{ item.dayOfWeek }}` | Core implementation line contributing to the file behavior. |
| 252 | `          <span *ngIf="item.notes"> • {{ item.notes }}</span>` | HTML tag opening/closing markup for component template structure. |
| 253 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 254 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 255 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 256 | `` | Blank line used to separate logical blocks for readability. |
| 257 | `    <div class="d-flex justify-content-between gap-2 mt-3">` | Declares a core TypeScript structure used by this module. |
| 258 | `      <button class="btn btn-outline-danger" [disabled]="deletingPlan \|\| loadingPlanDetail" (click)="deleteWorkoutPlan()">` | Declares a core TypeScript structure used by this module. |
| 259 | `        {{ deletingPlan ? 'Deleting...' : 'Delete Plan' }}` | Core implementation line contributing to the file behavior. |
| 260 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 261 | `      <button class="btn btn-outline-secondary" (click)="closePlanModals()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 262 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 263 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 264 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.