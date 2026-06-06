# Explanation: `src/app/modules/admin/components/admin-membership-management/admin-membership-management.component.html`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-membership-management/admin-membership-management.component.html`
- **Total lines:** `162`
- **Non-empty lines:** `144`
- **Import statements:** `0`
- **Class-like declarations found:** `74`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">` | Declares a core TypeScript structure used by this module. |
| 4 | `      <h5 class="fw-semibold mb-0">Membership Tiers</h5>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <button class="btn btn-primary" (click)="openCreateModal()">Create New Membership Tier</button>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `    <div *ngIf="errorMessage" class="alert alert-danger py-2">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 9 | `    <div *ngIf="loading" class="text-muted">Loading tiers...</div>` | Declares a core TypeScript structure used by this module. |
| 10 | `    <div *ngIf="!loading && tiers.length === 0" class="text-muted">No membership tiers found.</div>` | Declares a core TypeScript structure used by this module. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `    <div class="row g-3" *ngIf="!loading && tiers.length > 0">` | Declares a core TypeScript structure used by this module. |
| 13 | `      <div class="col-lg-4 col-md-6" *ngFor="let tier of tiers">` | Declares a core TypeScript structure used by this module. |
| 14 | `        <button type="button" class="tier-card w-100 text-start" (click)="openEditModal(tier)">` | Declares a core TypeScript structure used by this module. |
| 15 | `          <div class="tier-logo-wrap mb-3">` | Declares a core TypeScript structure used by this module. |
| 16 | `            <img *ngIf="logoUrlOf(tier); else noLogo" [src]="logoUrlOf(tier)!" alt="membership logo" class="tier-logo" />` | Declares a core TypeScript structure used by this module. |
| 17 | `            <ng-template #noLogo>` | HTML tag opening/closing markup for component template structure. |
| 18 | `              <div class="tier-logo-placeholder">` | Declares a core TypeScript structure used by this module. |
| 19 | `                <i class="bi bi-image"></i>` | Declares a core TypeScript structure used by this module. |
| 20 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 21 | `            </ng-template>` | HTML tag opening/closing markup for component template structure. |
| 22 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 23 | `          <div class="d-flex justify-content-between align-items-start mb-2">` | Declares a core TypeScript structure used by this module. |
| 24 | `            <h6 class="fw-semibold mb-0">{{ tier.name }}</h6>` | Declares a core TypeScript structure used by this module. |
| 25 | `            <span class="badge text-bg-light">{{ tier.level }}</span>` | Declares a core TypeScript structure used by this module. |
| 26 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `          <p class="text-muted small mb-3">{{ tier.description \|\| 'No description' }}</p>` | Declares a core TypeScript structure used by this module. |
| 28 | `          <div class="small text-muted d-flex justify-content-between">` | Declares a core TypeScript structure used by this module. |
| 29 | `            <span>Min price</span>` | HTML tag opening/closing markup for component template structure. |
| 30 | `            <span class="fw-semibold text-dark">{{ tier.minPrice \| number }} VND</span>` | Declares a core TypeScript structure used by this module. |
| 31 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 32 | `          <div class="small text-muted d-flex justify-content-between">` | Declares a core TypeScript structure used by this module. |
| 33 | `            <span>Purchase price</span>` | HTML tag opening/closing markup for component template structure. |
| 34 | `            <span class="fw-semibold text-dark">{{ tier.purchasePrice \| number }} VND</span>` | Declares a core TypeScript structure used by this module. |
| 35 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 36 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 37 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 38 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 39 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 40 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `<div` | Core implementation line contributing to the file behavior. |
| 43 | `  *ngIf="showCreateModal"` | Block comment content (documentation for nearby code). |
| 44 | `  class="membership-modal-overlay"` | Declares a core TypeScript structure used by this module. |
| 45 | `  (click)="onBackdropClick($event, 'create')"` | Core implementation line contributing to the file behavior. |
| 46 | `>` | Core implementation line contributing to the file behavior. |
| 47 | `  <div class="membership-modal-card">` | Declares a core TypeScript structure used by this module. |
| 48 | `    ` | Blank line used to separate logical blocks for readability. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `    <form [formGroup]="createForm" (ngSubmit)="createTier()">` | HTML tag opening/closing markup for component template structure. |
| 51 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 52 | `        <label class="form-label">Name *</label>` | Declares a core TypeScript structure used by this module. |
| 53 | `        <input class="form-control" formControlName="name" />` | Declares a core TypeScript structure used by this module. |
| 54 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 57 | `        <label class="form-label">Description *</label>` | Declares a core TypeScript structure used by this module. |
| 58 | `        <textarea class="form-control" rows="3" formControlName="description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 59 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `      <div class="row g-2 mb-3">` | Declares a core TypeScript structure used by this module. |
| 62 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 63 | `          <label class="form-label">Min Price *</label>` | Declares a core TypeScript structure used by this module. |
| 64 | `          <input class="form-control" type="number" min="0" formControlName="minPrice" />` | Declares a core TypeScript structure used by this module. |
| 65 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 66 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 67 | `          <label class="form-label">Purchase Price *</label>` | Declares a core TypeScript structure used by this module. |
| 68 | `          <input class="form-control" type="number" min="0" formControlName="purchasePrice" />` | Declares a core TypeScript structure used by this module. |
| 69 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 70 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `      <div class="mb-4">` | Declares a core TypeScript structure used by this module. |
| 73 | `        <label class="form-label">Level *</label>` | Declares a core TypeScript structure used by this module. |
| 74 | `        <select class="form-select" formControlName="level">` | Declares a core TypeScript structure used by this module. |
| 75 | `          <option value="BASIC">BASIC</option>` | HTML tag opening/closing markup for component template structure. |
| 76 | `          <option value="PREMIUM">PREMIUM</option>` | HTML tag opening/closing markup for component template structure. |
| 77 | `          <option value="VIP">VIP</option>` | HTML tag opening/closing markup for component template structure. |
| 78 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 79 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 80 | `` | Blank line used to separate logical blocks for readability. |
| 81 | `      <div class="d-flex justify-content-end gap-2">` | Declares a core TypeScript structure used by this module. |
| 82 | `        <button type="button" class="btn btn-outline-secondary" (click)="closeCreateModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 83 | `        <button type="submit" class="btn btn-primary" [disabled]="creating">` | Declares a core TypeScript structure used by this module. |
| 84 | `          {{ creating ? 'Creating...' : 'Create New Tier' }}` | Core implementation line contributing to the file behavior. |
| 85 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 86 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 87 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 88 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `</div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `` | Blank line used to separate logical blocks for readability. |
| 91 | `<div` | Core implementation line contributing to the file behavior. |
| 92 | `  *ngIf="showEditModal"` | Block comment content (documentation for nearby code). |
| 93 | `  class="membership-modal-overlay"` | Declares a core TypeScript structure used by this module. |
| 94 | `  (click)="onBackdropClick($event, 'edit')"` | Core implementation line contributing to the file behavior. |
| 95 | `>` | Core implementation line contributing to the file behavior. |
| 96 | `  <div class="membership-modal-card">` | Declares a core TypeScript structure used by this module. |
| 97 | `    ` | Blank line used to separate logical blocks for readability. |
| 98 | `` | Blank line used to separate logical blocks for readability. |
| 99 | `    <form [formGroup]="editForm" (ngSubmit)="updateTier()">` | HTML tag opening/closing markup for component template structure. |
| 100 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 101 | `        <label class="form-label">Name *</label>` | Declares a core TypeScript structure used by this module. |
| 102 | `        <input class="form-control" formControlName="name" />` | Declares a core TypeScript structure used by this module. |
| 103 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 104 | `` | Blank line used to separate logical blocks for readability. |
| 105 | `      <div class="mb-3">` | Declares a core TypeScript structure used by this module. |
| 106 | `        <label class="form-label">Description *</label>` | Declares a core TypeScript structure used by this module. |
| 107 | `        <textarea class="form-control" rows="3" formControlName="description"></textarea>` | Declares a core TypeScript structure used by this module. |
| 108 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 109 | `` | Blank line used to separate logical blocks for readability. |
| 110 | `      <div class="row g-2 mb-3">` | Declares a core TypeScript structure used by this module. |
| 111 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 112 | `          <label class="form-label">Min Price *</label>` | Declares a core TypeScript structure used by this module. |
| 113 | `          <input class="form-control" type="number" min="0" formControlName="minPrice" />` | Declares a core TypeScript structure used by this module. |
| 114 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 115 | `        <div class="col-md-6">` | Declares a core TypeScript structure used by this module. |
| 116 | `          <label class="form-label">Purchase Price *</label>` | Declares a core TypeScript structure used by this module. |
| 117 | `          <input class="form-control" type="number" min="0" formControlName="purchasePrice" />` | Declares a core TypeScript structure used by this module. |
| 118 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 119 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `      <div class="mb-4">` | Declares a core TypeScript structure used by this module. |
| 122 | `        <label class="form-label">Level *</label>` | Declares a core TypeScript structure used by this module. |
| 123 | `        <select class="form-select" formControlName="level">` | Declares a core TypeScript structure used by this module. |
| 124 | `          <option value="BASIC">BASIC</option>` | HTML tag opening/closing markup for component template structure. |
| 125 | `          <option value="PREMIUM">PREMIUM</option>` | HTML tag opening/closing markup for component template structure. |
| 126 | `          <option value="VIP">VIP</option>` | HTML tag opening/closing markup for component template structure. |
| 127 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 128 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 129 | `` | Blank line used to separate logical blocks for readability. |
| 130 | `      <div class="mb-4">` | Declares a core TypeScript structure used by this module. |
| 131 | `        <label class="form-label">Membership Logo</label>` | Declares a core TypeScript structure used by this module. |
| 132 | `        <div class="d-flex gap-2 align-items-center">` | Declares a core TypeScript structure used by this module. |
| 133 | `          <input class="form-control" type="file" accept="image/*" (change)="onLogoFileSelected($event)" />` | Declares a core TypeScript structure used by this module. |
| 134 | `          <button type="button" class="btn btn-outline-primary" [disabled]="!selectedLogoFile \|\| uploadingLogo" (click)="uploadLogo()">` | Declares a core TypeScript structure used by this module. |
| 135 | `            {{ uploadingLogo ? 'Uploading...' : 'Upload Logo' }}` | Core implementation line contributing to the file behavior. |
| 136 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 137 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 138 | `        <div class="mt-2" *ngIf="logoUrlOf(selectedTier)">` | Declares a core TypeScript structure used by this module. |
| 139 | `          <img [src]="logoUrlOf(selectedTier)!" alt="current logo" class="tier-logo-preview" />` | Declares a core TypeScript structure used by this module. |
| 140 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 141 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 142 | `` | Blank line used to separate logical blocks for readability. |
| 143 | `      <div class="d-flex justify-content-between gap-2 flex-wrap">` | Declares a core TypeScript structure used by this module. |
| 144 | `        <button` | Core implementation line contributing to the file behavior. |
| 145 | `          type="button"` | Declares a core TypeScript structure used by this module. |
| 146 | `          class="btn btn-outline-danger"` | Declares a core TypeScript structure used by this module. |
| 147 | `          [disabled]="deletingId === selectedTier?.id"` | Core implementation line contributing to the file behavior. |
| 148 | `          (click)="deleteTier(selectedTier?.id)"` | Core implementation line contributing to the file behavior. |
| 149 | `        >` | Core implementation line contributing to the file behavior. |
| 150 | `          {{ deletingId === selectedTier?.id ? 'Deleting...' : 'Delete Tier' }}` | Core implementation line contributing to the file behavior. |
| 151 | `        </button>` | HTML tag opening/closing markup for component template structure. |
| 152 | `` | Blank line used to separate logical blocks for readability. |
| 153 | `        <div class="d-flex gap-2">` | Declares a core TypeScript structure used by this module. |
| 154 | `          <button type="button" class="btn btn-outline-secondary" (click)="closeEditModal()">Cancel</button>` | Declares a core TypeScript structure used by this module. |
| 155 | `          <button type="submit" class="btn btn-primary" [disabled]="updating">` | Declares a core TypeScript structure used by this module. |
| 156 | `            {{ updating ? 'Updating...' : 'Update Tier' }}` | Core implementation line contributing to the file behavior. |
| 157 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 158 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 159 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 160 | `    </form>` | HTML tag opening/closing markup for component template structure. |
| 161 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 162 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.