# Explanation: `src/app/components/profile/profile.component.html`

## File Overview
- **Relative path:** `src/app/components/profile/profile.component.html`
- **Total lines:** `93`
- **Non-empty lines:** `89`
- **Import statements:** `0`
- **Class-like declarations found:** `53`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="profile-page">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="profile-card">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <h4 class="mb-3">My Profile</h4>` | Declares a core TypeScript structure used by this module. |
| 4 | `    <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 5 | `    <div *ngIf="successMessage" class="alert alert-success py-2">{{ successMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 6 | `    <div *ngIf="loading" class="text-muted">Loading profile...</div>` | Declares a core TypeScript structure used by this module. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `    <form *ngIf="!loading" [formGroup]="form" (ngSubmit)="saveProfile()">` | HTML tag opening/closing markup for component template structure. |
| 9 | `      <div class="avatar-row mb-3">` | Declares a core TypeScript structure used by this module. |
| 10 | `        <img *ngIf="avatarPreviewUrl; else initialsAvatar" [src]="avatarPreviewUrl" class="avatar-preview" alt="avatar" />` | Declares a core TypeScript structure used by this module. |
| 11 | `        <ng-template #initialsAvatar>` | HTML tag opening/closing markup for component template structure. |
| 12 | `          <div class="avatar-placeholder">` | Declares a core TypeScript structure used by this module. |
| 13 | `            {{ (form.controls.firstName.value \|\| '?').slice(0,1).toUpperCase() }}{{ (form.controls.lastName.value \|\| '').slice(0,1).toUpperCase() }}` | Core implementation line contributing to the file behavior. |
| 14 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 15 | `        </ng-template>` | HTML tag opening/closing markup for component template structure. |
| 16 | `        <div class="avatar-actions">` | Declares a core TypeScript structure used by this module. |
| 17 | `          <input type="file" accept="image/*" (change)="onAvatarFileSelected($event)" />` | Declares a core TypeScript structure used by this module. |
| 18 | `          <button type="button" class="btn btn-outline-primary btn-sm mt-2" [disabled]="!selectedAvatarFile \|\| uploadingAvatar" (click)="uploadAvatar()">` | Declares a core TypeScript structure used by this module. |
| 19 | `            {{ uploadingAvatar ? 'Uploading...' : 'Upload Avatar' }}` | Core implementation line contributing to the file behavior. |
| 20 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 21 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 22 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `      <div class="row g-2">` | Declares a core TypeScript structure used by this module. |
| 25 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 26 | `          <label class="form-label">First Name *</label>` | Declares a core TypeScript structure used by this module. |
| 27 | `          <input class="form-control" formControlName="firstName" />` | Declares a core TypeScript structure used by this module. |
| 28 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 30 | `          <label class="form-label">Last Name *</label>` | Declares a core TypeScript structure used by this module. |
| 31 | `          <input class="form-control" formControlName="lastName" />` | Declares a core TypeScript structure used by this module. |
| 32 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 33 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 34 | `          <label class="form-label">Email *</label>` | Declares a core TypeScript structure used by this module. |
| 35 | `          <input class="form-control" type="email" formControlName="email" />` | Declares a core TypeScript structure used by this module. |
| 36 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 37 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 38 | `          <label class="form-label">Phone *</label>` | Declares a core TypeScript structure used by this module. |
| 39 | `          <input class="form-control" formControlName="phone" />` | Declares a core TypeScript structure used by this module. |
| 40 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 42 | `          <label class="form-label">Gender *</label>` | Declares a core TypeScript structure used by this module. |
| 43 | `          <select class="form-select" formControlName="gender">` | Declares a core TypeScript structure used by this module. |
| 44 | `            <option value="male">male</option>` | HTML tag opening/closing markup for component template structure. |
| 45 | `            <option value="female">female</option>` | HTML tag opening/closing markup for component template structure. |
| 46 | `            <option value="other">other</option>` | HTML tag opening/closing markup for component template structure. |
| 47 | `          </select>` | HTML tag opening/closing markup for component template structure. |
| 48 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 49 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 50 | `          <label class="form-label">Date of Birth *</label>` | Declares a core TypeScript structure used by this module. |
| 51 | `          <input class="form-control" type="date" formControlName="dob" />` | Declares a core TypeScript structure used by this module. |
| 52 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 53 | `        <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 54 | `          <label class="form-label">Address</label>` | Declares a core TypeScript structure used by this module. |
| 55 | `          <input class="form-control" formControlName="address" />` | Declares a core TypeScript structure used by this module. |
| 56 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `        <ng-container *ngIf="isTrainer()">` | HTML tag opening/closing markup for component template structure. |
| 59 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 60 | `            <label class="form-label">Private Session Pricing (60 mins)</label>` | Declares a core TypeScript structure used by this module. |
| 61 | `            <input class="form-control" type="number" min="0" formControlName="ptSessionPrice60" />` | Declares a core TypeScript structure used by this module. |
| 62 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 63 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 64 | `            <label class="form-label">Specialization</label>` | Declares a core TypeScript structure used by this module. |
| 65 | `            <input class="form-control" formControlName="specialization" />` | Declares a core TypeScript structure used by this module. |
| 66 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 68 | `            <label class="form-label">Experience Years</label>` | Declares a core TypeScript structure used by this module. |
| 69 | `            <input class="form-control" type="number" min="0" formControlName="experienceYears" />` | Declares a core TypeScript structure used by this module. |
| 70 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 71 | `          <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 72 | `            <label class="form-label">Certifications (comma separated)</label>` | Declares a core TypeScript structure used by this module. |
| 73 | `            <input class="form-control" formControlName="certifications" />` | Declares a core TypeScript structure used by this module. |
| 74 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 75 | `          <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 76 | `            <label class="form-label">Areas of Expertise (comma separated)</label>` | Declares a core TypeScript structure used by this module. |
| 77 | `            <input class="form-control" formControlName="areasOfExpertise" />` | Declares a core TypeScript structure used by this module. |
| 78 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 79 | `          <div class="col-md-12">` | Declares a core TypeScript structure used by this module. |
| 80 | `            <label class="form-label">Biography</label>` | Declares a core TypeScript structure used by this module. |
| 81 | `            <textarea class="form-control" rows="3" formControlName="biography"></textarea>` | Declares a core TypeScript structure used by this module. |
| 82 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 83 | `        </ng-container>` | HTML tag opening/closing markup for component template structure. |
| 84 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 85 | `` | Blank line used to separate logical blocks for readability. |
| 86 | `      <div class="d-flex justify-content-end mt-4">` | Declares a core TypeScript structure used by this module. |
| 87 | `        <button type="submit" class="btn btn-primary" [disabled]="saving">` | Declares a core TypeScript structure used by this module. |
| 88 | `          {{ saving ? 'Saving...' : 'Save Profile' }}` | Core implementation line contributing to the file behavior. |
| 89 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 90 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 91 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 92 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.