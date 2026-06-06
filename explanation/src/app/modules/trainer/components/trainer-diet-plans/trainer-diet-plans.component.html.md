# Explanation: `src/app/modules/trainer/components/trainer-diet-plans/trainer-diet-plans.component.html`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-diet-plans/trainer-diet-plans.component.html`
- **Total lines:** `311`
- **Non-empty lines:** `291`
- **Import statements:** `0`
- **Class-like declarations found:** `156`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">` | Declares a core TypeScript structure used by this module. |
| 4 | `      <h4 class="fw-semibold mb-0">Diet Plans</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <button class="btn btn-primary btn-sm" (click)="openCreateModal()">Create Diet Plan</button>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `    <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 9 | `    <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `    <div class="filter-row mb-3">` | Declares a core TypeScript structure used by this module. |
| 12 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 13 | `        <label class="form-label mb-1">Status</label>` | Declares a core TypeScript structure used by this module. |
| 14 | `        <select class="form-select form-select-sm" [(ngModel)]="filters.status" (change)="applyFilters()">` | Declares a core TypeScript structure used by this module. |
| 15 | `          <option value="ACTIVE">ACTIVE</option>` | HTML tag opening/closing markup for component template structure. |
| 16 | `          <option value="DRAFT">DRAFT</option>` | HTML tag opening/closing markup for component template structure. |
| 17 | `          <option value="ARCHIVED">ARCHIVED</option>` | HTML tag opening/closing markup for component template structure. |
| 18 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 19 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 20 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 21 | `        <label class="form-label mb-1">Limit</label>` | Declares a core TypeScript structure used by this module. |
| 22 | `        <select class="form-select form-select-sm" [(ngModel)]="filters.limit" (change)="applyFilters()">` | Declares a core TypeScript structure used by this module. |
| 23 | `          <option [ngValue]="10">10</option>` | HTML tag opening/closing markup for component template structure. |
| 24 | `          <option [ngValue]="20">20</option>` | HTML tag opening/closing markup for component template structure. |
| 25 | `          <option [ngValue]="50">50</option>` | HTML tag opening/closing markup for component template structure. |
| 26 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 27 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `      <div class="include-archived">` | Declares a core TypeScript structure used by this module. |
| 29 | `        <input` | Core implementation line contributing to the file behavior. |
| 30 | `          id="includeArchived"` | Core implementation line contributing to the file behavior. |
| 31 | `          type="checkbox"` | Declares a core TypeScript structure used by this module. |
| 32 | `          class="form-check-input"` | Declares a core TypeScript structure used by this module. |
| 33 | `          [(ngModel)]="filters.includeArchived"` | Core implementation line contributing to the file behavior. |
| 34 | `          (change)="applyFilters()"` | Core implementation line contributing to the file behavior. |
| 35 | `        />` | Core implementation line contributing to the file behavior. |
| 36 | `        <label for="includeArchived" class="form-check-label ms-2">Include Archived</label>` | Declares a core TypeScript structure used by this module. |
| 37 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 38 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `    <div *ngIf="loading" class="text-muted">Loading diet plans...</div>` | Declares a core TypeScript structure used by this module. |
| 41 | `    <div *ngIf="!loading && dietPlans.length === 0" class="text-muted">No diet plans found.</div>` | Declares a core TypeScript structure used by this module. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `    <div class="diet-list" *ngIf="!loading && dietPlans.length > 0">` | Declares a core TypeScript structure used by this module. |
| 44 | `      <button type="button" class="diet-item" *ngFor="let plan of dietPlans" (click)="openDetail(plan)">` | Declares a core TypeScript structure used by this module. |
| 45 | `        <div class="d-flex justify-content-between align-items-center">` | Declares a core TypeScript structure used by this module. |
| 46 | `          <div class="fw-semibold">{{ plan.title \|\| 'Diet Plan' }}</div>` | Declares a core TypeScript structure used by this module. |
| 47 | `          <span class="badge" [ngClass]="{` | Declares a core TypeScript structure used by this module. |
| 48 | `            'bg-success-subtle text-success': (plan.status \|\| '').toUpperCase() === 'ACTIVE',` | Core implementation line contributing to the file behavior. |
| 49 | `            'bg-warning-subtle text-warning-emphasis': (plan.status \|\| '').toUpperCase() === 'DRAFT',` | Core implementation line contributing to the file behavior. |
| 50 | `            'bg-secondary-subtle text-secondary-emphasis': (plan.status \|\| '').toUpperCase() === 'ARCHIVED'` | Core implementation line contributing to the file behavior. |
| 51 | `          }">{{ plan.status \|\| 'ACTIVE' }}</span>` | Core implementation line contributing to the file behavior. |
| 52 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 53 | `        <small class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 54 | `          {{ plan.durationDays \|\| '-' }} days • {{ plan.calorieTarget \|\| '-' }} kcal` | Core implementation line contributing to the file behavior. |
| 55 | `        </small>` | HTML tag opening/closing markup for component template structure. |
| 56 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 57 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `    <div class="d-flex align-items-center justify-content-between mt-3 pt-2 border-top" *ngIf="!loading">` | Declares a core TypeScript structure used by this module. |
| 60 | `      <small class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 61 | `        Page {{ pageInfo.currentPage }} / {{ pageInfo.totalPages }} • {{ pageInfo.totalDocs }} items` | Core implementation line contributing to the file behavior. |
| 62 | `      </small>` | HTML tag opening/closing markup for component template structure. |
| 63 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 64 | `        <button class="btn btn-outline-secondary btn-sm" [disabled]="!pageInfo.hasPrev" (click)="goToPrevious()">Previous</button>` | Declares a core TypeScript structure used by this module. |
| 65 | `        <button class="btn btn-outline-secondary btn-sm" [disabled]="!pageInfo.hasNext" (click)="goToNext()">Next</button>` | Declares a core TypeScript structure used by this module. |
| 66 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 68 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 69 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 70 | `` | Blank line used to separate logical blocks for readability. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `<div *ngIf="showCreateModal" class="modal-overlay" (click)="closeCreateModal()">` | Declares a core TypeScript structure used by this module. |
| 73 | `  <div class="modal-card modal-wide" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 74 | `    <h5 class="mb-3">Create Diet Plan</h5>` | Declares a core TypeScript structure used by this module. |
| 75 | `` | Blank line used to separate logical blocks for readability. |
| 76 | `    <div class="row g-2 mb-2">` | Declares a core TypeScript structure used by this module. |
| 77 | `      <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 78 | `        <label class="form-label">Title *</label>` | Declares a core TypeScript structure used by this module. |
| 79 | `        <input class="form-control" [(ngModel)]="createForm.title" />` | Declares a core TypeScript structure used by this module. |
| 80 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 81 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 82 | `        <label class="form-label">Duration (days)</label>` | Declares a core TypeScript structure used by this module. |
| 83 | `        <input class="form-control" type="number" min="1" [(ngModel)]="createForm.durationDays" />` | Declares a core TypeScript structure used by this module. |
| 84 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 85 | `      <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 86 | `        <label class="form-label">Calorie target</label>` | Declares a core TypeScript structure used by this module. |
| 87 | `        <input class="form-control" type="number" min="0" [(ngModel)]="createForm.calorieTarget" />` | Declares a core TypeScript structure used by this module. |
| 88 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `` | Blank line used to separate logical blocks for readability. |
| 91 | `    <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 92 | `      <label class="form-label">Description</label>` | Declares a core TypeScript structure used by this module. |
| 93 | `      <textarea class="form-control" rows="2" [(ngModel)]="createForm.description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 94 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `    <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 97 | `      <label class="form-label mb-0">Meals</label>` | Declares a core TypeScript structure used by this module. |
| 98 | `      <button type="button" class="btn btn-sm btn-outline-primary" (click)="addCreateMeal()">Add meal</button>` | Declares a core TypeScript structure used by this module. |
| 99 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 100 | `` | Blank line used to separate logical blocks for readability. |
| 101 | `    <div class="meal-card mb-2" *ngFor="let meal of createForm.meals; index as i">` | Declares a core TypeScript structure used by this module. |
| 102 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 103 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 104 | `          <label class="form-label small">Type</label>` | Declares a core TypeScript structure used by this module. |
| 105 | `          <select class="form-select form-select-sm" [(ngModel)]="meal.mealType" [ngModelOptions]="{standalone:true}">` | Declares a core TypeScript structure used by this module. |
| 106 | `            <option value="BREAKFAST">BREAKFAST</option>` | HTML tag opening/closing markup for component template structure. |
| 107 | `            <option value="LUNCH">LUNCH</option>` | HTML tag opening/closing markup for component template structure. |
| 108 | `            <option value="DINNER">DINNER</option>` | HTML tag opening/closing markup for component template structure. |
| 109 | `            <option value="SNACK">SNACK</option>` | HTML tag opening/closing markup for component template structure. |
| 110 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 111 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 112 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 113 | `          <label class="form-label small">Meal title</label>` | Declares a core TypeScript structure used by this module. |
| 114 | `          <input class="form-control form-control-sm" [(ngModel)]="meal.mealTitle" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 115 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 116 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 117 | `          <label class="form-label small">Time</label>` | Declares a core TypeScript structure used by this module. |
| 118 | `          <input class="form-control form-control-sm" type="time" step="1" [(ngModel)]="meal.scheduledTime" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 119 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 121 | `          <label class="form-label small">Calories</label>` | Declares a core TypeScript structure used by this module. |
| 122 | `          <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.calories" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 123 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 124 | `        <div class="col-md-1">` | Declares a core TypeScript structure used by this module. |
| 125 | `          <label class="form-label small">P</label>` | Declares a core TypeScript structure used by this module. |
| 126 | `          <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.proteinGrams" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 127 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 128 | `        <div class="col-md-1">` | Declares a core TypeScript structure used by this module. |
| 129 | `          <label class="form-label small">C</label>` | Declares a core TypeScript structure used by this module. |
| 130 | `          <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.carbsGrams" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 131 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 132 | `        <div class="col-md-1">` | Declares a core TypeScript structure used by this module. |
| 133 | `          <label class="form-label small">F</label>` | Declares a core TypeScript structure used by this module. |
| 134 | `          <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.fatGrams" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 135 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 136 | `        <div class="col-12">` | Declares a core TypeScript structure used by this module. |
| 137 | `          <label class="form-label small">Food items</label>` | Declares a core TypeScript structure used by this module. |
| 138 | `          <input class="form-control form-control-sm" [(ngModel)]="meal.foodItemsText" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 139 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 140 | `        <div class="col-12">` | Declares a core TypeScript structure used by this module. |
| 141 | `          <label class="form-label small">Notes</label>` | Declares a core TypeScript structure used by this module. |
| 142 | `          <input class="form-control form-control-sm" [(ngModel)]="meal.notes" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 143 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 144 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 145 | `      <div class="text-end mt-2">` | Declares a core TypeScript structure used by this module. |
| 146 | `        <button` | Core implementation line contributing to the file behavior. |
| 147 | `          type="button"` | Declares a core TypeScript structure used by this module. |
| 148 | `          class="btn btn-sm btn-outline-danger"` | Declares a core TypeScript structure used by this module. |
| 149 | `          [disabled]="createForm.meals.length === 1"` | Core implementation line contributing to the file behavior. |
| 150 | `          (click)="removeCreateMeal(i)"` | Core implementation line contributing to the file behavior. |
| 151 | `        >` | Core implementation line contributing to the file behavior. |
| 152 | `          Remove` | Core implementation line contributing to the file behavior. |
| 153 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 154 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 155 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 156 | `` | Blank line used to separate logical blocks for readability. |
| 157 | `    <div class="d-flex justify-content-end gap-2 mt-3">` | Declares a core TypeScript structure used by this module. |
| 158 | `      <button class="btn btn-outline-secondary" (click)="closeCreateModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 159 | `      <button class="btn btn-primary" [disabled]="submitting" (click)="createDietPlan()">` | Declares a core TypeScript structure used by this module. |
| 160 | `        {{ submitting ? 'Creating...' : 'Create' }}` | Core implementation line contributing to the file behavior. |
| 161 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 162 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 163 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 164 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 165 | `` | Blank line used to separate logical blocks for readability. |
| 166 | `` | Blank line used to separate logical blocks for readability. |
| 167 | `<div *ngIf="showDetailModal" class="modal-overlay" (click)="closeDetailModal()">` | Declares a core TypeScript structure used by this module. |
| 168 | `  <div class="modal-card modal-wide" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 169 | `    <h5 class="mb-3">Diet Plan Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 170 | `    <div *ngIf="loadingDetail" class="text-muted">Loading detail...</div>` | Declares a core TypeScript structure used by this module. |
| 171 | `` | Blank line used to separate logical blocks for readability. |
| 172 | `    <div *ngIf="!loadingDetail && selectedPlanDetail">` | HTML tag opening/closing markup for component template structure. |
| 173 | `      <div class="row g-2 mb-2">` | Declares a core TypeScript structure used by this module. |
| 174 | `        <div class="col-md-5">` | Declares a core TypeScript structure used by this module. |
| 175 | `          <label class="form-label">Title</label>` | Declares a core TypeScript structure used by this module. |
| 176 | `          <input class="form-control" [(ngModel)]="editForm.title" />` | Declares a core TypeScript structure used by this module. |
| 177 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 178 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 179 | `          <label class="form-label">Duration</label>` | Declares a core TypeScript structure used by this module. |
| 180 | `          <input class="form-control" type="number" min="1" [(ngModel)]="editForm.durationDays" />` | Declares a core TypeScript structure used by this module. |
| 181 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 182 | `        <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 183 | `          <label class="form-label">Calories</label>` | Declares a core TypeScript structure used by this module. |
| 184 | `          <input class="form-control" type="number" min="0" [(ngModel)]="editForm.calorieTarget" />` | Declares a core TypeScript structure used by this module. |
| 185 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 186 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 187 | `          <label class="form-label">Status</label>` | Declares a core TypeScript structure used by this module. |
| 188 | `          <select class="form-select" [(ngModel)]="editForm.status">` | Declares a core TypeScript structure used by this module. |
| 189 | `            <option value="DRAFT">DRAFT</option>` | HTML tag opening/closing markup for component template structure. |
| 190 | `            <option value="ACTIVE">ACTIVE</option>` | HTML tag opening/closing markup for component template structure. |
| 191 | `            <option value="ARCHIVED">ARCHIVED</option>` | HTML tag opening/closing markup for component template structure. |
| 192 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 193 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 194 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 197 | `        <label class="form-label">Description</label>` | Declares a core TypeScript structure used by this module. |
| 198 | `        <textarea class="form-control" rows="2" [(ngModel)]="editForm.description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 199 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 200 | `` | Blank line used to separate logical blocks for readability. |
| 201 | `      <div class="d-flex justify-content-between align-items-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 202 | `        <label class="form-label mb-0">Meals</label>` | Declares a core TypeScript structure used by this module. |
| 203 | `        <button type="button" class="btn btn-sm btn-outline-primary" (click)="addEditMeal()">Add meal</button>` | Declares a core TypeScript structure used by this module. |
| 204 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 205 | `` | Blank line used to separate logical blocks for readability. |
| 206 | `      <div class="meal-card mb-2" *ngFor="let meal of editForm.meals; index as i">` | Declares a core TypeScript structure used by this module. |
| 207 | `        <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 208 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 209 | `            <label class="form-label small">Type</label>` | Declares a core TypeScript structure used by this module. |
| 210 | `            <select class="form-select form-select-sm" [(ngModel)]="meal.mealType" [ngModelOptions]="{standalone:true}">` | Declares a core TypeScript structure used by this module. |
| 211 | `              <option value="BREAKFAST">BREAKFAST</option>` | HTML tag opening/closing markup for component template structure. |
| 212 | `              <option value="LUNCH">LUNCH</option>` | HTML tag opening/closing markup for component template structure. |
| 213 | `              <option value="DINNER">DINNER</option>` | HTML tag opening/closing markup for component template structure. |
| 214 | `              <option value="SNACK">SNACK</option>` | HTML tag opening/closing markup for component template structure. |
| 215 | `            </select>` | HTML tag opening/closing markup for component template structure. |
| 216 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 217 | `          <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 218 | `            <label class="form-label small">Meal title</label>` | Declares a core TypeScript structure used by this module. |
| 219 | `            <input class="form-control form-control-sm" [(ngModel)]="meal.mealTitle" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 220 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 221 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 222 | `            <label class="form-label small">Time</label>` | Declares a core TypeScript structure used by this module. |
| 223 | `            <input class="form-control form-control-sm" type="time" step="1" [(ngModel)]="meal.scheduledTime" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 224 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 225 | `          <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 226 | `            <label class="form-label small">Calories</label>` | Declares a core TypeScript structure used by this module. |
| 227 | `            <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.calories" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 228 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 229 | `          <div class="col-md-1">` | Declares a core TypeScript structure used by this module. |
| 230 | `            <label class="form-label small">P</label>` | Declares a core TypeScript structure used by this module. |
| 231 | `            <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.proteinGrams" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 232 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 233 | `          <div class="col-md-1">` | Declares a core TypeScript structure used by this module. |
| 234 | `            <label class="form-label small">C</label>` | Declares a core TypeScript structure used by this module. |
| 235 | `            <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.carbsGrams" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 236 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 237 | `          <div class="col-md-1">` | Declares a core TypeScript structure used by this module. |
| 238 | `            <label class="form-label small">F</label>` | Declares a core TypeScript structure used by this module. |
| 239 | `            <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="meal.fatGrams" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 240 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 241 | `          <div class="col-12">` | Declares a core TypeScript structure used by this module. |
| 242 | `            <label class="form-label small">Food items</label>` | Declares a core TypeScript structure used by this module. |
| 243 | `            <input class="form-control form-control-sm" [(ngModel)]="meal.foodItemsText" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 244 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 245 | `          <div class="col-12">` | Declares a core TypeScript structure used by this module. |
| 246 | `            <label class="form-label small">Notes</label>` | Declares a core TypeScript structure used by this module. |
| 247 | `            <input class="form-control form-control-sm" [(ngModel)]="meal.notes" [ngModelOptions]="{standalone:true}" />` | Declares a core TypeScript structure used by this module. |
| 248 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 249 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 250 | `        <div class="text-end mt-2">` | Declares a core TypeScript structure used by this module. |
| 251 | `          <button` | Core implementation line contributing to the file behavior. |
| 252 | `            type="button"` | Declares a core TypeScript structure used by this module. |
| 253 | `            class="btn btn-sm btn-outline-danger"` | Declares a core TypeScript structure used by this module. |
| 254 | `            [disabled]="editForm.meals.length === 1"` | Core implementation line contributing to the file behavior. |
| 255 | `            (click)="removeEditMeal(i)"` | Core implementation line contributing to the file behavior. |
| 256 | `          >` | Core implementation line contributing to the file behavior. |
| 257 | `            Remove` | Core implementation line contributing to the file behavior. |
| 258 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 259 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 260 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 261 | `` | Blank line used to separate logical blocks for readability. |
| 262 | `      <div class="assign-card mt-3">` | Declares a core TypeScript structure used by this module. |
| 263 | `        <h6 class="mb-2">Assign to booked members (ACTIVE only)</h6>` | Declares a core TypeScript structure used by this module. |
| 264 | `        <div *ngIf="bookedMembers.length === 0" class="text-muted small">No booked members available.</div>` | Declares a core TypeScript structure used by this module. |
| 265 | `        <div class="member-grid" *ngIf="bookedMembers.length > 0">` | Declares a core TypeScript structure used by this module. |
| 266 | `          <label class="member-item" *ngFor="let member of bookedMembers">` | Declares a core TypeScript structure used by this module. |
| 267 | `            <input` | Core implementation line contributing to the file behavior. |
| 268 | `              type="checkbox"` | Declares a core TypeScript structure used by this module. |
| 269 | `              class="form-check-input me-2"` | Declares a core TypeScript structure used by this module. |
| 270 | `              [checked]="assignment.memberIds.includes(member.id)"` | Core implementation line contributing to the file behavior. |
| 271 | `              (change)="toggleAssignmentMember(member.id, $any($event.target).checked)"` | Core implementation line contributing to the file behavior. |
| 272 | `            />` | Core implementation line contributing to the file behavior. |
| 273 | `            <span>{{ member.name }}</span>` | HTML tag opening/closing markup for component template structure. |
| 274 | `            <small class="text-muted d-block">{{ member.email }}</small>` | Declares a core TypeScript structure used by this module. |
| 275 | `          </label>` | HTML tag opening/closing markup for component template structure. |
| 276 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 277 | `        <div class="row g-2 mt-2">` | Declares a core TypeScript structure used by this module. |
| 278 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 279 | `            <label class="form-label small">Effective from</label>` | Declares a core TypeScript structure used by this module. |
| 280 | `            <input class="form-control form-control-sm" type="date" [(ngModel)]="assignment.effectiveFrom" />` | Declares a core TypeScript structure used by this module. |
| 281 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 282 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 283 | `            <label class="form-label small">Effective to</label>` | Declares a core TypeScript structure used by this module. |
| 284 | `            <input class="form-control form-control-sm" type="date" [(ngModel)]="assignment.effectiveTo" />` | Declares a core TypeScript structure used by this module. |
| 285 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 286 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 287 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 288 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 289 | `` | Blank line used to separate logical blocks for readability. |
| 290 | `    <div class="d-flex flex-wrap justify-content-between gap-2 mt-3">` | Declares a core TypeScript structure used by this module. |
| 291 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 292 | `        <button class="btn btn-outline-danger" [disabled]="!canDeleteSelected() \|\| deleting" (click)="deleteDietPlan()">` | Declares a core TypeScript structure used by this module. |
| 293 | `          {{ deleting ? 'Deleting...' : 'Delete DRAFT Private' }}` | Core implementation line contributing to the file behavior. |
| 294 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 295 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 296 | `      <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 297 | `        <button class="btn btn-outline-secondary" (click)="closeDetailModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 298 | `        <button class="btn btn-outline-primary" [disabled]="!canUpdateSelected() \|\| submitting" (click)="updateDietPlan()">` | Declares a core TypeScript structure used by this module. |
| 299 | `          {{ submitting ? 'Updating...' : 'Update (ACTIVE + Never Assigned)' }}` | Core implementation line contributing to the file behavior. |
| 300 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 301 | `        <button` | Core implementation line contributing to the file behavior. |
| 302 | `          class="btn btn-primary"` | Declares a core TypeScript structure used by this module. |
| 303 | `          [disabled]="assigning \|\| bookedMembers.length === 0"` | Core implementation line contributing to the file behavior. |
| 304 | `          (click)="assignAndArchive()"` | Core implementation line contributing to the file behavior. |
| 305 | `        >` | Core implementation line contributing to the file behavior. |
| 306 | `          {{ assigning ? 'Assigning...' : 'Assign + Archive' }}` | Core implementation line contributing to the file behavior. |
| 307 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 308 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 309 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 310 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 311 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.