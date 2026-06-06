# Explanation: `src/app/auth/auth-components/verify-email/verify-email.component.html`

## File Overview
- **Relative path:** `src/app/auth/auth-components/verify-email/verify-email.component.html`
- **Total lines:** `55`
- **Non-empty lines:** `50`
- **Import statements:** `0`
- **Class-like declarations found:** `24`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<section class="bg-light py-5">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="container px-5">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div class="row justify-content-center">` | Declares a core TypeScript structure used by this module. |
| 4 | `      <div class="col-md-8 col-lg-6">` | Declares a core TypeScript structure used by this module. |
| 5 | `        <div class="card shadow-sm p-4">` | Declares a core TypeScript structure used by this module. |
| 6 | `          <h2 class="h4 mb-2 text-center">Verify Email</h2>` | Declares a core TypeScript structure used by this module. |
| 7 | `          <p class="text-muted text-center mb-4">` | Declares a core TypeScript structure used by this module. |
| 8 | `            Confirm your email address to activate your account.` | Core implementation line contributing to the file behavior. |
| 9 | `          </p>` | HTML tag opening/closing markup for component template structure. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `          <div *ngIf="loading" data-testid="verify-loading" class="text-center py-4">` | Declares a core TypeScript structure used by this module. |
| 12 | `            <div class="spinner-border text-primary" role="status"></div>` | Declares a core TypeScript structure used by this module. |
| 13 | `            <p class="small text-muted mt-2 mb-0">Checking verification link...</p>` | Declares a core TypeScript structure used by this module. |
| 14 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `          <div *ngIf="!loading">` | HTML tag opening/closing markup for component template structure. |
| 17 | `            <div *ngIf="errorMessage" data-testid="verify-error-message" class="alert alert-danger">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 18 | `            <div *ngIf="successMessage" data-testid="verify-success-message" class="alert alert-success">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `            <form *ngIf="!successMessage" data-testid="verify-form" [formGroup]="form" (ngSubmit)="verify()">` | HTML tag opening/closing markup for component template structure. |
| 21 | `              <ng-container *ngIf="requiresPasswordSetup">` | HTML tag opening/closing markup for component template structure. |
| 22 | `                <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 23 | `                  <label class="form-label">Password *</label>` | Declares a core TypeScript structure used by this module. |
| 24 | `                  <input data-testid="verify-password" type="password" class="form-control" formControlName="password" placeholder="Create password" />` | Declares a core TypeScript structure used by this module. |
| 25 | `                  <div class="text-danger small mt-1" *ngIf="form.get('password')?.touched && form.get('password')?.errors?.['required']">` | Declares a core TypeScript structure used by this module. |
| 26 | `                    Password is required.` | Core implementation line contributing to the file behavior. |
| 27 | `                  </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `                  <div class="text-danger small mt-1" *ngIf="form.get('password')?.touched && form.get('password')?.errors?.['minlength']">` | Declares a core TypeScript structure used by this module. |
| 29 | `                    Password must be at least 8 characters.` | Core implementation line contributing to the file behavior. |
| 30 | `                  </div>` | HTML tag opening/closing markup for component template structure. |
| 31 | `                </div>` | HTML tag opening/closing markup for component template structure. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `                <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 34 | `                  <label class="form-label">Confirm Password *</label>` | Declares a core TypeScript structure used by this module. |
| 35 | `                  <input data-testid="verify-confirm-password" type="password" class="form-control" formControlName="confirmPassword" placeholder="Confirm password" />` | Declares a core TypeScript structure used by this module. |
| 36 | `                  <div class="text-danger small mt-1" *ngIf="form.get('confirmPassword')?.touched && form.get('confirmPassword')?.errors?.['required']">` | Declares a core TypeScript structure used by this module. |
| 37 | `                    Confirm password is required.` | Core implementation line contributing to the file behavior. |
| 38 | `                  </div>` | HTML tag opening/closing markup for component template structure. |
| 39 | `                  <div class="text-danger small mt-1" *ngIf="form.errors?.['passwordMismatch'] && form.get('confirmPassword')?.touched">` | Declares a core TypeScript structure used by this module. |
| 40 | `                    Passwords do not match.` | Core implementation line contributing to the file behavior. |
| 41 | `                  </div>` | HTML tag opening/closing markup for component template structure. |
| 42 | `                </div>` | HTML tag opening/closing markup for component template structure. |
| 43 | `              </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `              <button data-testid="verify-submit" class="btn btn-primary w-100" type="submit" [disabled]="submitting">` | Declares a core TypeScript structure used by this module. |
| 46 | `                <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>` | Declares a core TypeScript structure used by this module. |
| 47 | `                {{ submitting ? 'Verifying...' : (requiresPasswordSetup ? 'Set Password and Verify' : 'Verify Email') }}` | Core implementation line contributing to the file behavior. |
| 48 | `              </button>` | HTML tag opening/closing markup for component template structure. |
| 49 | `            </form>` | HTML tag opening/closing markup for component template structure. |
| 50 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 51 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 52 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 53 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 54 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `</section>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.