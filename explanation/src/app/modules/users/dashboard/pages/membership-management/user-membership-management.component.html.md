# Explanation: `src/app/modules/users/dashboard/pages/membership-management/user-membership-management.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/membership-management/user-membership-management.component.html`
- **Total lines:** `189`
- **Non-empty lines:** `152`
- **Import statements:** `0`
- **Class-like declarations found:** `66`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `<div class="container-fluid py-4 bg-light min-vh-100">` | Declares a core TypeScript structure used by this module. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `  ` | Blank line used to separate logical blocks for readability. |
| 7 | `  <div *ngIf="loading" class="d-flex justify-content-center align-items-center" style="height: 300px;">` | Declares a core TypeScript structure used by this module. |
| 8 | `    <div class="spinner-border text-primary"></div>` | Declares a core TypeScript structure used by this module. |
| 9 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `  <div *ngIf="!loading" class="container-lg">` | Declares a core TypeScript structure used by this module. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `    ` | Blank line used to separate logical blocks for readability. |
| 14 | `    <div data-testid="membership-status-card" class="card shadow-sm border-0 mb-5 membership-card">` | Declares a core TypeScript structure used by this module. |
| 15 | `      <div class="card-body">` | Declares a core TypeScript structure used by this module. |
| 16 | `        <h5 class="fw-semibold mb-4">My Membership Status</h5>` | Declares a core TypeScript structure used by this module. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `        <ng-container *ngIf="membership; else noMembership">` | HTML tag opening/closing markup for component template structure. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `          <div class="row g-4 align-items-center">` | Declares a core TypeScript structure used by this module. |
| 21 | `            <div class="col-md-2 d-flex justify-content-center">` | Declares a core TypeScript structure used by this module. |
| 22 | `              <img` | Core implementation line contributing to the file behavior. |
| 23 | `                [src]="currentMembershipLogoUrl()"` | Core implementation line contributing to the file behavior. |
| 24 | `                alt="current membership logo"` | Core implementation line contributing to the file behavior. |
| 25 | `                class="membership-logo"` | Declares a core TypeScript structure used by this module. |
| 26 | `              />` | Core implementation line contributing to the file behavior. |
| 27 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `            <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 29 | `              <small class="text-muted">Plan</small>` | Declares a core TypeScript structure used by this module. |
| 30 | `              <div class="fs-4 fw-bold text-primary text-capitalize">` | Declares a core TypeScript structure used by this module. |
| 31 | `                {{ membership.membershipName }}` | Core implementation line contributing to the file behavior. |
| 32 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 33 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `            <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 36 | `              <small class="text-muted">Duration</small>` | Declares a core TypeScript structure used by this module. |
| 37 | `              <div class="fw-medium">{{ getTotalDays() }} days</div>` | Declares a core TypeScript structure used by this module. |
| 38 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `            <div class="col-md-2">` | Declares a core TypeScript structure used by this module. |
| 41 | `              <small class="text-muted">Start Date</small>` | Declares a core TypeScript structure used by this module. |
| 42 | `              <div class="fw-medium">{{ membership.startDate \| date:'yyyy-MM-dd' }}</div>` | Declares a core TypeScript structure used by this module. |
| 43 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `            <div class="col-md-3">` | Declares a core TypeScript structure used by this module. |
| 46 | `              <small class="text-muted">End Date</small>` | Declares a core TypeScript structure used by this module. |
| 47 | `              <div class="fw-medium">{{ membership.endDate \| date:'yyyy-MM-dd' }}</div>` | Declares a core TypeScript structure used by this module. |
| 48 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 49 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `          ` | Blank line used to separate logical blocks for readability. |
| 52 | `          <div class="mt-4">` | Declares a core TypeScript structure used by this module. |
| 53 | `            <div class="d-flex justify-content-between mb-1">` | Declares a core TypeScript structure used by this module. |
| 54 | `              <small class="text-muted">Membership Progress</small>` | Declares a core TypeScript structure used by this module. |
| 55 | `              <small class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 56 | `                {{ getRemainingDays() }} days remaining` | Core implementation line contributing to the file behavior. |
| 57 | `              </small>` | HTML tag opening/closing markup for component template structure. |
| 58 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `            <div class="progress" style="height: 10px;">` | Declares a core TypeScript structure used by this module. |
| 61 | `              <div` | Core implementation line contributing to the file behavior. |
| 62 | `                class="progress-bar bg-primary"` | Declares a core TypeScript structure used by this module. |
| 63 | `                [style.width.%]="getProgressPercent()"` | Core implementation line contributing to the file behavior. |
| 64 | `              ></div>` | Core implementation line contributing to the file behavior. |
| 65 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 66 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `          ` | Blank line used to separate logical blocks for readability. |
| 69 | `          <div class="mt-4 d-flex gap-2 flex-wrap">` | Declares a core TypeScript structure used by this module. |
| 70 | `            <button` | Core implementation line contributing to the file behavior. |
| 71 | `              data-testid="membership-update-btn"` | Core implementation line contributing to the file behavior. |
| 72 | `              class="btn btn-primary px-4"` | Declares a core TypeScript structure used by this module. |
| 73 | `              (click)="openMembershipModal()"` | Core implementation line contributing to the file behavior. |
| 74 | `            >` | Core implementation line contributing to the file behavior. |
| 75 | `              Update Membership` | Core implementation line contributing to the file behavior. |
| 76 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 77 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `        </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 80 | `` | Blank line used to separate logical blocks for readability. |
| 81 | `        <ng-template #noMembership>` | HTML tag opening/closing markup for component template structure. |
| 82 | `          <div data-testid="membership-empty-state" class="alert alert-warning mb-0">` | Declares a core TypeScript structure used by this module. |
| 83 | `            You don’t currently have an active membership.` | Core implementation line contributing to the file behavior. |
| 84 | `            <button data-testid="membership-register-cta" class="btn btn-sm btn-primary ms-3" (click)="openMembershipModal()">` | Declares a core TypeScript structure used by this module. |
| 85 | `              Register Membership` | Core implementation line contributing to the file behavior. |
| 86 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 87 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 88 | `        </ng-template>` | HTML tag opening/closing markup for component template structure. |
| 89 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 91 | `` | Blank line used to separate logical blocks for readability. |
| 92 | `    ` | Blank line used to separate logical blocks for readability. |
| 93 | `    <h5 class="fw-semibold mb-4">Available Membership Plans</h5>` | Declares a core TypeScript structure used by this module. |
| 94 | `` | Blank line used to separate logical blocks for readability. |
| 95 | `    <div class="row g-4">` | Declares a core TypeScript structure used by this module. |
| 96 | `      <div data-testid="membership-plan-card" class="col-md-6 col-lg-4" *ngFor="let plan of plans">` | Declares a core TypeScript structure used by this module. |
| 97 | `        <div class="card plan-card h-100 border-0 shadow-sm text-center">` | Declares a core TypeScript structure used by this module. |
| 98 | `          <div class="card-body">` | Declares a core TypeScript structure used by this module. |
| 99 | `` | Blank line used to separate logical blocks for readability. |
| 100 | `            <img` | Core implementation line contributing to the file behavior. |
| 101 | `              [src]="planLogoUrl(plan)"` | Core implementation line contributing to the file behavior. |
| 102 | `              class="plan-img mb-3"` | Declares a core TypeScript structure used by this module. |
| 103 | `              alt="{{ plan.name }}"` | Core implementation line contributing to the file behavior. |
| 104 | `            />` | Core implementation line contributing to the file behavior. |
| 105 | `` | Blank line used to separate logical blocks for readability. |
| 106 | `            <h6 class="fw-bold text-capitalize">{{ plan.name }}</h6>` | Declares a core TypeScript structure used by this module. |
| 107 | `` | Blank line used to separate logical blocks for readability. |
| 108 | `            <p class="text-muted small mb-3">` | Declares a core TypeScript structure used by this module. |
| 109 | `              {{ plan.description }}` | Core implementation line contributing to the file behavior. |
| 110 | `            </p>` | HTML tag opening/closing markup for component template structure. |
| 111 | `` | Blank line used to separate logical blocks for readability. |
| 112 | `            <div class="fs-4 fw-bold text-primary mb-3">` | Declares a core TypeScript structure used by this module. |
| 113 | `              {{ plan.purchasePrice \|\| plan.minPrice \| number }} VND` | Core implementation line contributing to the file behavior. |
| 114 | `              <small class="fs-6 text-muted d-block">{{ plan.level }}</small>` | Declares a core TypeScript structure used by this module. |
| 115 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `            ` | Blank line used to separate logical blocks for readability. |
| 118 | `` | Blank line used to separate logical blocks for readability. |
| 119 | `            <span` | Core implementation line contributing to the file behavior. |
| 120 | `              *ngIf="membership?.membershipId === plan.id"` | Block comment content (documentation for nearby code). |
| 121 | `              class="badge bg-success"` | Declares a core TypeScript structure used by this module. |
| 122 | `            >` | Core implementation line contributing to the file behavior. |
| 123 | `              Current Plan` | Core implementation line contributing to the file behavior. |
| 124 | `            </span>` | HTML tag opening/closing markup for component template structure. |
| 125 | `` | Blank line used to separate logical blocks for readability. |
| 126 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 127 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 128 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 129 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 130 | `` | Blank line used to separate logical blocks for readability. |
| 131 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 132 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 133 | `` | Blank line used to separate logical blocks for readability. |
| 134 | `` | Blank line used to separate logical blocks for readability. |
| 135 | `<div` | Core implementation line contributing to the file behavior. |
| 136 | `  data-testid="membership-plan-modal"` | Core implementation line contributing to the file behavior. |
| 137 | `  *ngIf="showPlanModal"` | Block comment content (documentation for nearby code). |
| 138 | `  class="membership-modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"` | Declares a core TypeScript structure used by this module. |
| 139 | `  style="background: rgba(0,0,0,0.45); z-index: 1200;"` | Core implementation line contributing to the file behavior. |
| 140 | `  (click)="onBackdropClick($event)"` | Core implementation line contributing to the file behavior. |
| 141 | `>` | Core implementation line contributing to the file behavior. |
| 142 | `  <div class="bg-white rounded-4 shadow p-4" style="width: min(920px, 92vw); max-height: 90vh; overflow:auto;">` | Declares a core TypeScript structure used by this module. |
| 143 | `    <div class="d-flex justify-content-between align-items-center mb-3">` | Declares a core TypeScript structure used by this module. |
| 144 | `      <h5 class="mb-0">{{ hasCurrentMembership() ? 'Update Membership' : 'Register Membership' }}</h5>` | Declares a core TypeScript structure used by this module. |
| 145 | `      <button data-testid="membership-modal-close" class="btn btn-sm btn-outline-secondary" (click)="closeMembershipModal()" [disabled]="checkingOut">` | Declares a core TypeScript structure used by this module. |
| 146 | `        Close` | Core implementation line contributing to the file behavior. |
| 147 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 148 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 149 | `` | Blank line used to separate logical blocks for readability. |
| 150 | `    <p class="text-muted mb-3">` | Declares a core TypeScript structure used by this module. |
| 151 | `      Choose a membership tier/plan, then proceed to Stripe checkout.` | Core implementation line contributing to the file behavior. |
| 152 | `    </p>` | HTML tag opening/closing markup for component template structure. |
| 153 | `` | Blank line used to separate logical blocks for readability. |
| 154 | `    <div class="row g-3 mb-3">` | Declares a core TypeScript structure used by this module. |
| 155 | `      <div class="col-md-6 col-lg-4" *ngFor="let plan of plans">` | Declares a core TypeScript structure used by this module. |
| 156 | `        <button` | Core implementation line contributing to the file behavior. |
| 157 | `          data-testid="membership-modal-plan-option"` | Core implementation line contributing to the file behavior. |
| 158 | `          type="button"` | Declares a core TypeScript structure used by this module. |
| 159 | `          class="card w-100 h-100 border-2 text-start modal-plan-card"` | Declares a core TypeScript structure used by this module. |
| 160 | `          [class.is-selected]="selectedPlanId === plan.id"` | Declares a core TypeScript structure used by this module. |
| 161 | `          [class.is-current]="membership?.membershipId === plan.id"` | Declares a core TypeScript structure used by this module. |
| 162 | `          (click)="selectPlan(plan.id)"` | Core implementation line contributing to the file behavior. |
| 163 | `        >` | Core implementation line contributing to the file behavior. |
| 164 | `          <div class="card-body">` | Declares a core TypeScript structure used by this module. |
| 165 | `            <div class="d-flex justify-content-center mb-2">` | Declares a core TypeScript structure used by this module. |
| 166 | `              <img [src]="planLogoUrl(plan)" alt="{{ plan.name }}" class="modal-plan-logo" />` | Declares a core TypeScript structure used by this module. |
| 167 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 168 | `            <div class="d-flex justify-content-between align-items-start">` | Declares a core TypeScript structure used by this module. |
| 169 | `              <h6 class="fw-bold mb-1">{{ plan.name }}</h6>` | Declares a core TypeScript structure used by this module. |
| 170 | `              <span *ngIf="membership?.membershipId === plan.id" class="badge bg-success">Current</span>` | Declares a core TypeScript structure used by this module. |
| 171 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 172 | `            <div class="text-muted small mb-2">{{ plan.description \|\| 'No description' }}</div>` | Declares a core TypeScript structure used by this module. |
| 173 | `            <div class="fw-bold text-primary">{{ formatPrice(plan) \| number }} VND</div>` | Declares a core TypeScript structure used by this module. |
| 174 | `            <small class="text-muted">{{ plan.level }}</small>` | Declares a core TypeScript structure used by this module. |
| 175 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 176 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 177 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 178 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 179 | `` | Blank line used to separate logical blocks for readability. |
| 180 | `    <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 181 | `      <button data-testid="membership-modal-cancel" class="btn btn-outline-secondary" (click)="closeMembershipModal()" [disabled]="checkingOut">` | Declares a core TypeScript structure used by this module. |
| 182 | `        Cancel` | Core implementation line contributing to the file behavior. |
| 183 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 184 | `      <button data-testid="membership-proceed-checkout" class="btn btn-primary" [disabled]="!selectedPlanId \|\| checkingOut" (click)="proceedToCheckout()">` | Declares a core TypeScript structure used by this module. |
| 185 | `        {{ checkingOut ? 'Redirecting...' : 'Proceed to Stripe Checkout' }}` | Core implementation line contributing to the file behavior. |
| 186 | `      </button>` | HTML tag opening/closing markup for component template structure. |
| 187 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 188 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 189 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.