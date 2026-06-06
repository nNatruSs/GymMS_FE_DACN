# Explanation: `src/app/modules/users/dashboard/pages/workout-sessions/user-workout-sessions.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/workout-sessions/user-workout-sessions.component.html`
- **Total lines:** `146`
- **Non-empty lines:** `132`
- **Import statements:** `0`
- **Class-like declarations found:** `70`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 4 | `      <h4 class="fw-semibold mb-0">Workout Sessions</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <button class="btn btn-sm btn-primary" (click)="openStartModal()">Start Workout Session</button>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `    <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 9 | `    <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `    <div *ngIf="loading" class="text-muted">Loading workout sessions...</div>` | Declares a core TypeScript structure used by this module. |
| 12 | `    <div *ngIf="!loading && sessions.length === 0" class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 13 | `      No accessible workout sessions found.` | Core implementation line contributing to the file behavior. |
| 14 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `    <div class="table-responsive" *ngIf="!loading && sessions.length > 0">` | Declares a core TypeScript structure used by this module. |
| 17 | `      <table class="table align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 18 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 19 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 20 | `            <th>Session ID</th>` | HTML tag opening/closing markup for component template structure. |
| 21 | `            <th>Workout Plan ID</th>` | HTML tag opening/closing markup for component template structure. |
| 22 | `            <th>Start Time</th>` | HTML tag opening/closing markup for component template structure. |
| 23 | `            <th>End Time</th>` | HTML tag opening/closing markup for component template structure. |
| 24 | `            <th>Status</th>` | HTML tag opening/closing markup for component template structure. |
| 25 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 26 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 27 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 28 | `          <tr *ngFor="let session of sessions" class="row-clickable" (click)="openSessionDetail(session)">` | Declares a core TypeScript structure used by this module. |
| 29 | `            <td>{{ session.id }}</td>` | HTML tag opening/closing markup for component template structure. |
| 30 | `            <td>{{ resolvePlanId(session) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 31 | `            <td>{{ displayDateTime(session.startTime) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 32 | `            <td>{{ displayDateTime(session.endTime) }}</td>` | HTML tag opening/closing markup for component template structure. |
| 33 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 34 | `              <span class="badge bg-secondary">{{ session.status \|\| 'IN_PROGRESS' }}</span>` | Declares a core TypeScript structure used by this module. |
| 35 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 36 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 37 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 38 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 39 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 40 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `<div *ngIf="showStartModal" class="overlay" (click)="closeStartModal()">` | Declares a core TypeScript structure used by this module. |
| 45 | `  <div class="modal-card" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 46 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 47 | `      <h5 class="mb-0">Start Workout Session</h5>` | Declares a core TypeScript structure used by this module. |
| 48 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeStartModal()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 49 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `    <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 52 | `      <label class="form-label">Workout Plan ID *</label>` | Declares a core TypeScript structure used by this module. |
| 53 | `      <input class="form-control" [(ngModel)]="startForm.workoutPlanId" />` | Declares a core TypeScript structure used by this module. |
| 54 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `    <div class="mb-2">` | Declares a core TypeScript structure used by this module. |
| 57 | `      <label class="form-label">Start Time *</label>` | Declares a core TypeScript structure used by this module. |
| 58 | `      <input class="form-control" type="datetime-local" [(ngModel)]="startForm.startTime" />` | Declares a core TypeScript structure used by this module. |
| 59 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `    <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 62 | `      <label class="form-label">Notes</label>` | Declares a core TypeScript structure used by this module. |
| 63 | `      <textarea class="form-control" rows="2" [(ngModel)]="startForm.notes"></textarea>` | Declares a core TypeScript structure used by this module. |
| 64 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 67 | `      <button class="btn btn-outline-secondary" (click)="closeStartModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 68 | `      <button class="btn btn-primary" [disabled]="starting" (click)="startSession()">` | Declares a core TypeScript structure used by this module. |
| 69 | `        {{ starting ? 'Starting...' : 'Start Session' }}` | Core implementation line contributing to the file behavior. |
| 70 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 71 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 72 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 73 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 74 | `` | Blank line used to separate logical blocks for readability. |
| 75 | `` | Blank line used to separate logical blocks for readability. |
| 76 | `<div *ngIf="showDetailModal && selectedSession" class="overlay" (click)="closeSessionDetail()">` | Declares a core TypeScript structure used by this module. |
| 77 | `  <div class="modal-card modal-wide" (click)="$event.stopPropagation()">` | Declares a core TypeScript structure used by this module. |
| 78 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 79 | `      <h5 class="mb-0">Workout Session Detail</h5>` | Declares a core TypeScript structure used by this module. |
| 80 | `      <button class="btn btn-sm btn-outline-secondary" (click)="closeSessionDetail()">Close</button>` | Declares a core TypeScript structure used by this module. |
| 81 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 82 | `` | Blank line used to separate logical blocks for readability. |
| 83 | `    <div class="small mb-3">` | Declares a core TypeScript structure used by this module. |
| 84 | `      <div><strong>Session ID:</strong> {{ selectedSession.id }}</div>` | HTML tag opening/closing markup for component template structure. |
| 85 | `      <div><strong>Workout Plan ID:</strong> {{ resolvePlanId(selectedSession) }}</div>` | HTML tag opening/closing markup for component template structure. |
| 86 | `      <div><strong>Status:</strong> {{ selectedSession.status \|\| 'IN_PROGRESS' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 87 | `      <div><strong>Start:</strong> {{ displayDateTime(selectedSession.startTime) }}</div>` | HTML tag opening/closing markup for component template structure. |
| 88 | `      <div><strong>End:</strong> {{ displayDateTime(selectedSession.endTime) }}</div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `      <div><strong>Notes:</strong> {{ selectedSession.notes \|\| '-' }}</div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 91 | `` | Blank line used to separate logical blocks for readability. |
| 92 | `    <div class="sub-card mb-3">` | Declares a core TypeScript structure used by this module. |
| 93 | `      <h6 class="mb-2">Log Completed Set</h6>` | Declares a core TypeScript structure used by this module. |
| 94 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 95 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 96 | `          <label class="form-label small">Exercise ID *</label>` | Declares a core TypeScript structure used by this module. |
| 97 | `          <input class="form-control form-control-sm" [(ngModel)]="setForm.exerciseId" />` | Declares a core TypeScript structure used by this module. |
| 98 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 99 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 100 | `          <label class="form-label small">Plan Item ID *</label>` | Declares a core TypeScript structure used by this module. |
| 101 | `          <input class="form-control form-control-sm" [(ngModel)]="setForm.planItemId" />` | Declares a core TypeScript structure used by this module. |
| 102 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 103 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 104 | `          <label class="form-label small">Set Number</label>` | Declares a core TypeScript structure used by this module. |
| 105 | `          <input class="form-control form-control-sm" type="number" min="1" [(ngModel)]="setForm.setNumber" />` | Declares a core TypeScript structure used by this module. |
| 106 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 107 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 108 | `          <label class="form-label small">Actual Rep</label>` | Declares a core TypeScript structure used by this module. |
| 109 | `          <input class="form-control form-control-sm" type="number" min="1" [(ngModel)]="setForm.actualRep" />` | Declares a core TypeScript structure used by this module. |
| 110 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 111 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 112 | `          <label class="form-label small">Actual Weight</label>` | Declares a core TypeScript structure used by this module. |
| 113 | `          <input class="form-control form-control-sm" type="number" min="0" [(ngModel)]="setForm.actualWeight" />` | Declares a core TypeScript structure used by this module. |
| 114 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 115 | `        <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 116 | `          <label class="form-label small">RPE</label>` | Declares a core TypeScript structure used by this module. |
| 117 | `          <input class="form-control form-control-sm" type="number" min="1" max="10" [(ngModel)]="setForm.rpe" />` | Declares a core TypeScript structure used by this module. |
| 118 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 119 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `      <div class="d-flex justify-content-end mt-2">` | Declares a core TypeScript structure used by this module. |
| 121 | `        <button class="btn btn-sm btn-outline-primary" [disabled]="loggingSet" (click)="logSet()">` | Declares a core TypeScript structure used by this module. |
| 122 | `          {{ loggingSet ? 'Logging...' : 'Log Set' }}` | Core implementation line contributing to the file behavior. |
| 123 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 124 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 125 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 126 | `` | Blank line used to separate logical blocks for readability. |
| 127 | `    <div class="sub-card">` | Declares a core TypeScript structure used by this module. |
| 128 | `      <h6 class="mb-2">Complete Session</h6>` | Declares a core TypeScript structure used by this module. |
| 129 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 130 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 131 | `          <label class="form-label small">End Time *</label>` | Declares a core TypeScript structure used by this module. |
| 132 | `          <input class="form-control form-control-sm" type="datetime-local" [(ngModel)]="completeForm.endTime" />` | Declares a core TypeScript structure used by this module. |
| 133 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 134 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 135 | `          <label class="form-label small">Notes</label>` | Declares a core TypeScript structure used by this module. |
| 136 | `          <input class="form-control form-control-sm" [(ngModel)]="completeForm.notes" />` | Declares a core TypeScript structure used by this module. |
| 137 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 138 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 139 | `      <div class="d-flex justify-content-end mt-2">` | Declares a core TypeScript structure used by this module. |
| 140 | `        <button class="btn btn-sm btn-success" [disabled]="completing" (click)="completeSession()">` | Declares a core TypeScript structure used by this module. |
| 141 | `          {{ completing ? 'Completing...' : 'Complete Session' }}` | Core implementation line contributing to the file behavior. |
| 142 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 143 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 144 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 145 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 146 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.