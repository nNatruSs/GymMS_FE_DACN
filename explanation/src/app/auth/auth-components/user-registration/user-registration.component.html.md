# Explanation: `src/app/auth/auth-components/user-registration/user-registration.component.html`

## File Overview
- **Relative path:** `src/app/auth/auth-components/user-registration/user-registration.component.html`
- **Total lines:** `98`
- **Non-empty lines:** `84`
- **Import statements:** `0`
- **Class-like declarations found:** `51`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<section class="bg-light py-5">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="container px-5">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div class="row gx-5 justify-content-center">` | Declares a core TypeScript structure used by this module. |
| 4 | `      <div class="col-xxl-6 col-lg-8 col-md-10">` | Declares a core TypeScript structure used by this module. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `        <div class="card shadow-sm mb-4 p-4" id="userRegistrationDiv">` | Declares a core TypeScript structure used by this module. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `          <div *ngIf="errorMessage" data-testid="register-error-message" class="alert alert-danger" role="alert">` | Declares a core TypeScript structure used by this module. |
| 9 | `            {{ errorMessage }}` | Core implementation line contributing to the file behavior. |
| 10 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `          <h2 class="display-6 text-center mb-1">Create Account</h2>` | Declares a core TypeScript structure used by this module. |
| 13 | `          <p class="lead mb-4 text-center text-muted">Join GymMS as a member</p>` | Declares a core TypeScript structure used by this module. |
| 14 | `` | Blank line used to separate logical blocks for readability. |
| 15 | `          <form [formGroup]="signUpForm">` | HTML tag opening/closing markup for component template structure. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `            <div class="row">` | Declares a core TypeScript structure used by this module. |
| 18 | `              <div class="col-md-6 mb-3">` | Declares a core TypeScript structure used by this module. |
| 19 | `                <label class="form-label">First Name *</label>` | Declares a core TypeScript structure used by this module. |
| 20 | `                <input data-testid="register-first-name" formControlName="firstName" type="text" class="form-control" placeholder="First name" />` | Declares a core TypeScript structure used by this module. |
| 21 | `                <div *ngIf="signUpForm.controls['firstName'].touched && signUpForm.controls['firstName'].errors?.['required']" class="text-danger small">First name is required</div>` | Declares a core TypeScript structure used by this module. |
| 22 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 23 | `              <div class="col-md-6 mb-3">` | Declares a core TypeScript structure used by this module. |
| 24 | `                <label class="form-label">Last Name *</label>` | Declares a core TypeScript structure used by this module. |
| 25 | `                <input data-testid="register-last-name" formControlName="lastName" type="text" class="form-control" placeholder="Last name" />` | Declares a core TypeScript structure used by this module. |
| 26 | `                <div *ngIf="signUpForm.controls['lastName'].touched && signUpForm.controls['lastName'].errors?.['required']" class="text-danger small">Last name is required</div>` | Declares a core TypeScript structure used by this module. |
| 27 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `            <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 31 | `              <label class="form-label">Email *</label>` | Declares a core TypeScript structure used by this module. |
| 32 | `              <input data-testid="register-email" formControlName="email" type="email" class="form-control" placeholder="your@email.com" />` | Declares a core TypeScript structure used by this module. |
| 33 | `              <div *ngIf="signUpForm.controls['email'].touched && signUpForm.controls['email'].errors?.['required']" class="text-danger small">Email is required</div>` | Declares a core TypeScript structure used by this module. |
| 34 | `              <div *ngIf="signUpForm.controls['email'].touched && signUpForm.controls['email'].errors?.['email']" class="text-danger small">Please enter a valid email</div>` | Declares a core TypeScript structure used by this module. |
| 35 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 36 | `` | Blank line used to separate logical blocks for readability. |
| 37 | `            <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 38 | `              <label class="form-label">Phone (optional)</label>` | Declares a core TypeScript structure used by this module. |
| 39 | `              <input data-testid="register-phone" formControlName="phone" type="tel" class="form-control" placeholder="+84 xxx xxx xxx" />` | Declares a core TypeScript structure used by this module. |
| 40 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `            <div class="row">` | Declares a core TypeScript structure used by this module. |
| 43 | `              <div class="col-md-6 mb-3">` | Declares a core TypeScript structure used by this module. |
| 44 | `                <label class="form-label">Gender *</label>` | Declares a core TypeScript structure used by this module. |
| 45 | `                <select data-testid="register-gender" formControlName="gender" class="form-select">` | Declares a core TypeScript structure used by this module. |
| 46 | `                  <option value="" disabled selected>Select gender</option>` | HTML tag opening/closing markup for component template structure. |
| 47 | `                  <option value="MALE">Male</option>` | HTML tag opening/closing markup for component template structure. |
| 48 | `                  <option value="FEMALE">Female</option>` | HTML tag opening/closing markup for component template structure. |
| 49 | `                  <option value="OTHER">Other</option>` | HTML tag opening/closing markup for component template structure. |
| 50 | `                </select>` | HTML tag opening/closing markup for component template structure. |
| 51 | `                <div *ngIf="signUpForm.controls['gender'].touched && signUpForm.controls['gender'].errors?.['required']" class="text-danger small">Gender is required</div>` | Declares a core TypeScript structure used by this module. |
| 52 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 53 | `              <div class="col-md-6 mb-3">` | Declares a core TypeScript structure used by this module. |
| 54 | `                <label class="form-label">Date of Birth *</label>` | Declares a core TypeScript structure used by this module. |
| 55 | `                <input data-testid="register-dob" formControlName="dateOfBirth" type="date" class="form-control" />` | Declares a core TypeScript structure used by this module. |
| 56 | `                <div *ngIf="signUpForm.controls['dateOfBirth'].touched && signUpForm.controls['dateOfBirth'].errors?.['required']" class="text-danger small">Date of birth is required</div>` | Declares a core TypeScript structure used by this module. |
| 57 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 58 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `            <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 61 | `              <label class="form-label">Address (optional)</label>` | Declares a core TypeScript structure used by this module. |
| 62 | `              <input data-testid="register-address" formControlName="address" type="text" class="form-control" placeholder="Street, ward, district, city" />` | Declares a core TypeScript structure used by this module. |
| 63 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 64 | `` | Blank line used to separate logical blocks for readability. |
| 65 | `            <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 66 | `              <label class="form-label">Password * <small class="text-muted">(min 8 characters)</small></label>` | Declares a core TypeScript structure used by this module. |
| 67 | `              <input data-testid="register-password" formControlName="password" type="password" class="form-control" placeholder="Create a password" />` | Declares a core TypeScript structure used by this module. |
| 68 | `              <div *ngIf="signUpForm.controls['password'].touched && signUpForm.controls['password'].errors?.['required']" class="text-danger small">Password is required</div>` | Declares a core TypeScript structure used by this module. |
| 69 | `              <div *ngIf="signUpForm.controls['password'].touched && signUpForm.controls['password'].errors?.['minlength']" class="text-danger small">Password must be at least 8 characters</div>` | Declares a core TypeScript structure used by this module. |
| 70 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `            <div class="mb-4">` | Declares a core TypeScript structure used by this module. |
| 73 | `              <label class="form-label">Confirm Password *</label>` | Declares a core TypeScript structure used by this module. |
| 74 | `              <input data-testid="register-confirm-password" formControlName="confirmPassword" type="password" class="form-control" placeholder="Repeat your password" />` | Declares a core TypeScript structure used by this module. |
| 75 | `              <div *ngIf="signUpForm.controls['confirmPassword'].touched && signUpForm.controls['confirmPassword'].errors?.['required']" class="text-danger small">Please confirm your password</div>` | Declares a core TypeScript structure used by this module. |
| 76 | `              <div *ngIf="signUpForm.controls['confirmPassword'].touched && signUpForm.controls['confirmPassword'].errors?.['confirm']" class="text-danger small">Passwords do not match</div>` | Declares a core TypeScript structure used by this module. |
| 77 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `            <button` | Core implementation line contributing to the file behavior. |
| 80 | `              data-testid="register-submit"` | Core implementation line contributing to the file behavior. |
| 81 | `              type="button"` | Declares a core TypeScript structure used by this module. |
| 82 | `              class="btn btn-primary w-100"` | Declares a core TypeScript structure used by this module. |
| 83 | `              (click)="signup()"` | Core implementation line contributing to the file behavior. |
| 84 | `              [disabled]="spinning">` | Core implementation line contributing to the file behavior. |
| 85 | `              <span *ngIf="spinning" class="spinner-border spinner-border-sm me-2"></span>` | Declares a core TypeScript structure used by this module. |
| 86 | `              {{ spinning ? 'Creating account...' : 'Create Account' }}` | Core implementation line contributing to the file behavior. |
| 87 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `            <div class="text-center mt-3">` | Declares a core TypeScript structure used by this module. |
| 90 | `              <p class="mb-0">Already have an account? <a routerLink="/login">Sign in</a></p>` | Declares a core TypeScript structure used by this module. |
| 91 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 92 | `` | Blank line used to separate logical blocks for readability. |
| 93 | `          </form>` | HTML tag opening/closing markup for component template structure. |
| 94 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 95 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 96 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 97 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 98 | `</section>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.