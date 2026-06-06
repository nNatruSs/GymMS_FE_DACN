# Explanation: `src/app/modules/admin/components/admin-membership-management/admin-membership-management.component.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-membership-management/admin-membership-management.component.ts`
- **Total lines:** `222`
- **Non-empty lines:** `200`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component, inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { AdminMembershipService, MembershipTierPayload } from '../../services/admin-membership.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `@Component({` | Angular decorator declaring metadata for this component. |
| 8 | `  selector: 'app-admin-membership-management',` | Core implementation line contributing to the file behavior. |
| 9 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 10 | `  imports: [CommonModule, ReactiveFormsModule],` | Core implementation line contributing to the file behavior. |
| 11 | `  templateUrl: './admin-membership-management.component.html',` | Core implementation line contributing to the file behavior. |
| 12 | `  styleUrls: ['./admin-membership-management.component.css']` | Core implementation line contributing to the file behavior. |
| 13 | `})` | Core implementation line contributing to the file behavior. |
| 14 | `export class AdminMembershipManagementComponent {` | Exports symbols so other files can import this logic. |
| 15 | `  private fb = inject(FormBuilder);` | Core implementation line contributing to the file behavior. |
| 16 | `  private adminMembershipService = inject(AdminMembershipService);` | Core implementation line contributing to the file behavior. |
| 17 | `  private confirmDialog = inject(ConfirmDialogService);` | Core implementation line contributing to the file behavior. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 20 | `  creating = false;` | Core implementation line contributing to the file behavior. |
| 21 | `  updating = false;` | Core implementation line contributing to the file behavior. |
| 22 | `  uploadingLogo = false;` | Core implementation line contributing to the file behavior. |
| 23 | `  deletingId: string \| null = null;` | CSS declaration assigning a style property value. |
| 24 | `  tiers: any[] = [];` | CSS declaration assigning a style property value. |
| 25 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 26 | `  showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 27 | `  showEditModal = false;` | Core implementation line contributing to the file behavior. |
| 28 | `  selectedTier: any \| null = null;` | CSS declaration assigning a style property value. |
| 29 | `  selectedLogoFile: File \| null = null;` | CSS declaration assigning a style property value. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `  createForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 32 | `    name: ['', [Validators.required]],` | Core implementation line contributing to the file behavior. |
| 33 | `    description: ['', [Validators.required]],` | Core implementation line contributing to the file behavior. |
| 34 | `    minPrice: [0, [Validators.required, Validators.min(0)]],` | Core implementation line contributing to the file behavior. |
| 35 | `    purchasePrice: [0, [Validators.required, Validators.min(0)]],` | Core implementation line contributing to the file behavior. |
| 36 | `    level: ['PREMIUM', [Validators.required]],` | Core implementation line contributing to the file behavior. |
| 37 | `  });` | Core implementation line contributing to the file behavior. |
| 38 | `` | Blank line used to separate logical blocks for readability. |
| 39 | `  editForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 40 | `    name: ['', [Validators.required]],` | Core implementation line contributing to the file behavior. |
| 41 | `    description: ['', [Validators.required]],` | Core implementation line contributing to the file behavior. |
| 42 | `    minPrice: [0, [Validators.required, Validators.min(0)]],` | Core implementation line contributing to the file behavior. |
| 43 | `    purchasePrice: [0, [Validators.required, Validators.min(0)]],` | Core implementation line contributing to the file behavior. |
| 44 | `    level: ['PREMIUM', [Validators.required]],` | Core implementation line contributing to the file behavior. |
| 45 | `  });` | Core implementation line contributing to the file behavior. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 48 | `    this.loadTiers();` | Core implementation line contributing to the file behavior. |
| 49 | `  }` | Closes the current code/style block scope. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `  loadTiers(): void {` | Begins a new code/style block scope. |
| 52 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 53 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 54 | `    this.adminMembershipService.listTiers().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 55 | `      next: (tiers) => {` | Arrow function definition, often used for callbacks. |
| 56 | `        this.tiers = tiers;` | Core implementation line contributing to the file behavior. |
| 57 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 58 | `      },` | Core implementation line contributing to the file behavior. |
| 59 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 60 | `        this.errorMessage = 'Could not load membership tiers.';` | Core implementation line contributing to the file behavior. |
| 61 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 62 | `      },` | Core implementation line contributing to the file behavior. |
| 63 | `    });` | Core implementation line contributing to the file behavior. |
| 64 | `  }` | Closes the current code/style block scope. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `  openCreateModal(): void {` | Begins a new code/style block scope. |
| 67 | `    this.showCreateModal = true;` | Core implementation line contributing to the file behavior. |
| 68 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 69 | `    this.createForm.reset({` | Begins a new code/style block scope. |
| 70 | `      name: '',` | Core implementation line contributing to the file behavior. |
| 71 | `      description: '',` | Core implementation line contributing to the file behavior. |
| 72 | `      minPrice: 0,` | Core implementation line contributing to the file behavior. |
| 73 | `      purchasePrice: 0,` | Core implementation line contributing to the file behavior. |
| 74 | `      level: 'PREMIUM',` | Core implementation line contributing to the file behavior. |
| 75 | `    });` | Core implementation line contributing to the file behavior. |
| 76 | `  }` | Closes the current code/style block scope. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `  closeCreateModal(): void {` | Begins a new code/style block scope. |
| 79 | `    if (this.creating) return;` | Conditional branch: executes block only when condition is true. |
| 80 | `    this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 81 | `  }` | Closes the current code/style block scope. |
| 82 | `` | Blank line used to separate logical blocks for readability. |
| 83 | `  openEditModal(tier: any): void {` | Begins a new code/style block scope. |
| 84 | `    this.selectedTier = tier;` | Core implementation line contributing to the file behavior. |
| 85 | `    this.showEditModal = true;` | Core implementation line contributing to the file behavior. |
| 86 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 87 | `    this.selectedLogoFile = null;` | Core implementation line contributing to the file behavior. |
| 88 | `    this.editForm.patchValue({` | Begins a new code/style block scope. |
| 89 | `      name: tier.name ?? '',` | Core implementation line contributing to the file behavior. |
| 90 | `      description: tier.description ?? '',` | Core implementation line contributing to the file behavior. |
| 91 | `      minPrice: Number(tier.minPrice ?? 0),` | Core implementation line contributing to the file behavior. |
| 92 | `      purchasePrice: Number(tier.purchasePrice ?? 0),` | Core implementation line contributing to the file behavior. |
| 93 | `      level: tier.level ?? 'PREMIUM',` | Core implementation line contributing to the file behavior. |
| 94 | `    });` | Core implementation line contributing to the file behavior. |
| 95 | `  }` | Closes the current code/style block scope. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `  closeEditModal(): void {` | Begins a new code/style block scope. |
| 98 | `    if (this.updating \|\| this.deletingId \|\| this.uploadingLogo) return;` | Conditional branch: executes block only when condition is true. |
| 99 | `    this.showEditModal = false;` | Core implementation line contributing to the file behavior. |
| 100 | `    this.selectedTier = null;` | Core implementation line contributing to the file behavior. |
| 101 | `    this.selectedLogoFile = null;` | Core implementation line contributing to the file behavior. |
| 102 | `  }` | Closes the current code/style block scope. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `  async createTier(): Promise<void> {` | Begins a new code/style block scope. |
| 105 | `    this.createForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 106 | `    if (this.createForm.invalid \|\| this.creating) return;` | Conditional branch: executes block only when condition is true. |
| 107 | `    const confirmed = await this.confirmDialog.confirm('Create this membership tier?', {` | Begins a new code/style block scope. |
| 108 | `      title: 'Confirm Create Membership',` | Core implementation line contributing to the file behavior. |
| 109 | `      confirmText: 'Create',` | Core implementation line contributing to the file behavior. |
| 110 | `    });` | Core implementation line contributing to the file behavior. |
| 111 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 112 | `` | Blank line used to separate logical blocks for readability. |
| 113 | `    const payload: MembershipTierPayload = {` | Begins a new code/style block scope. |
| 114 | `      name: this.createForm.controls.name.value,` | Core implementation line contributing to the file behavior. |
| 115 | `      description: this.createForm.controls.description.value,` | Core implementation line contributing to the file behavior. |
| 116 | `      minPrice: Number(this.createForm.controls.minPrice.value),` | Core implementation line contributing to the file behavior. |
| 117 | `      purchasePrice: Number(this.createForm.controls.purchasePrice.value),` | Core implementation line contributing to the file behavior. |
| 118 | `      level: this.createForm.controls.level.value,` | Core implementation line contributing to the file behavior. |
| 119 | `    };` | Core implementation line contributing to the file behavior. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `    this.creating = true;` | Core implementation line contributing to the file behavior. |
| 122 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 123 | `    this.adminMembershipService.createTier(payload).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 124 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 125 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 126 | `        this.closeCreateModal();` | Core implementation line contributing to the file behavior. |
| 127 | `        this.loadTiers();` | Core implementation line contributing to the file behavior. |
| 128 | `      },` | Core implementation line contributing to the file behavior. |
| 129 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 130 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 131 | `        this.errorMessage = err?.error?.error?.message \|\| 'Create failed.';` | Core implementation line contributing to the file behavior. |
| 132 | `      },` | Core implementation line contributing to the file behavior. |
| 133 | `    });` | Core implementation line contributing to the file behavior. |
| 134 | `  }` | Closes the current code/style block scope. |
| 135 | `` | Blank line used to separate logical blocks for readability. |
| 136 | `  async updateTier(): Promise<void> {` | Begins a new code/style block scope. |
| 137 | `    this.editForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 138 | `    if (this.editForm.invalid \|\| this.updating \|\| !this.selectedTier?.id) return;` | Conditional branch: executes block only when condition is true. |
| 139 | `    const confirmed = await this.confirmDialog.confirm('Update this membership tier?', {` | Begins a new code/style block scope. |
| 140 | `      title: 'Confirm Update Membership',` | Core implementation line contributing to the file behavior. |
| 141 | `      confirmText: 'Update',` | Core implementation line contributing to the file behavior. |
| 142 | `    });` | Core implementation line contributing to the file behavior. |
| 143 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `    const payload: MembershipTierPayload = {` | Begins a new code/style block scope. |
| 146 | `      name: this.editForm.controls.name.value,` | Core implementation line contributing to the file behavior. |
| 147 | `      description: this.editForm.controls.description.value,` | Core implementation line contributing to the file behavior. |
| 148 | `      minPrice: Number(this.editForm.controls.minPrice.value),` | Core implementation line contributing to the file behavior. |
| 149 | `      purchasePrice: Number(this.editForm.controls.purchasePrice.value),` | Core implementation line contributing to the file behavior. |
| 150 | `      level: this.editForm.controls.level.value,` | Core implementation line contributing to the file behavior. |
| 151 | `    };` | Core implementation line contributing to the file behavior. |
| 152 | `` | Blank line used to separate logical blocks for readability. |
| 153 | `    this.updating = true;` | Core implementation line contributing to the file behavior. |
| 154 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 155 | `    this.adminMembershipService.updateTier(this.selectedTier.id, payload).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 156 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 157 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 158 | `        this.closeEditModal();` | Core implementation line contributing to the file behavior. |
| 159 | `        this.loadTiers();` | Core implementation line contributing to the file behavior. |
| 160 | `      },` | Core implementation line contributing to the file behavior. |
| 161 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 162 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 163 | `        this.errorMessage = err?.error?.error?.message \|\| 'Update failed.';` | Core implementation line contributing to the file behavior. |
| 164 | `      },` | Core implementation line contributing to the file behavior. |
| 165 | `    });` | Core implementation line contributing to the file behavior. |
| 166 | `  }` | Closes the current code/style block scope. |
| 167 | `` | Blank line used to separate logical blocks for readability. |
| 168 | `  async deleteTier(id: string \| undefined): Promise<void> {` | Begins a new code/style block scope. |
| 169 | `    if (!id \|\| this.deletingId) return;` | Conditional branch: executes block only when condition is true. |
| 170 | `    const confirmed = await this.confirmDialog.confirm('Delete this membership tier?', {` | Begins a new code/style block scope. |
| 171 | `      title: 'Confirm Delete Membership',` | Core implementation line contributing to the file behavior. |
| 172 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 173 | `    });` | Core implementation line contributing to the file behavior. |
| 174 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 175 | `` | Blank line used to separate logical blocks for readability. |
| 176 | `    this.deletingId = id;` | Core implementation line contributing to the file behavior. |
| 177 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 178 | `    this.adminMembershipService.deleteTier(id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 179 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 180 | `        this.deletingId = null;` | Core implementation line contributing to the file behavior. |
| 181 | `        if (this.selectedTier?.id === id) this.closeEditModal();` | Conditional branch: executes block only when condition is true. |
| 182 | `        this.loadTiers();` | Core implementation line contributing to the file behavior. |
| 183 | `      },` | Core implementation line contributing to the file behavior. |
| 184 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 185 | `        this.deletingId = null;` | Core implementation line contributing to the file behavior. |
| 186 | `        this.errorMessage = err?.error?.error?.message \|\| 'Delete failed.';` | Core implementation line contributing to the file behavior. |
| 187 | `      },` | Core implementation line contributing to the file behavior. |
| 188 | `    });` | Core implementation line contributing to the file behavior. |
| 189 | `  }` | Closes the current code/style block scope. |
| 190 | `` | Blank line used to separate logical blocks for readability. |
| 191 | `  onLogoFileSelected(event: Event): void {` | Begins a new code/style block scope. |
| 192 | `    const input = event.target as HTMLInputElement;` | Core implementation line contributing to the file behavior. |
| 193 | `    this.selectedLogoFile = input.files?.[0] ?? null;` | Core implementation line contributing to the file behavior. |
| 194 | `  }` | Closes the current code/style block scope. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `  uploadLogo(): void {` | Begins a new code/style block scope. |
| 197 | `    if (!this.selectedTier?.id \|\| !this.selectedLogoFile \|\| this.uploadingLogo) return;` | Conditional branch: executes block only when condition is true. |
| 198 | `    this.uploadingLogo = true;` | Core implementation line contributing to the file behavior. |
| 199 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 200 | `    this.adminMembershipService.uploadTierLogo(this.selectedTier.id, this.selectedLogoFile).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 201 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 202 | `        this.uploadingLogo = false;` | Core implementation line contributing to the file behavior. |
| 203 | `        this.selectedLogoFile = null;` | Core implementation line contributing to the file behavior. |
| 204 | `        this.loadTiers();` | Core implementation line contributing to the file behavior. |
| 205 | `      },` | Core implementation line contributing to the file behavior. |
| 206 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 207 | `        this.uploadingLogo = false;` | Core implementation line contributing to the file behavior. |
| 208 | `        this.errorMessage = err?.error?.error?.message \|\| 'Logo upload failed.';` | Core implementation line contributing to the file behavior. |
| 209 | `      },` | Core implementation line contributing to the file behavior. |
| 210 | `    });` | Core implementation line contributing to the file behavior. |
| 211 | `  }` | Closes the current code/style block scope. |
| 212 | `` | Blank line used to separate logical blocks for readability. |
| 213 | `  logoUrlOf(tier: any): string \| null {` | Begins a new code/style block scope. |
| 214 | `    return tier?.logoUrl \|\| null;` | Returns a value from the current function/method. |
| 215 | `  }` | Closes the current code/style block scope. |
| 216 | `` | Blank line used to separate logical blocks for readability. |
| 217 | `  onBackdropClick(event: MouseEvent, modalType: 'create' \| 'edit'): void {` | Begins a new code/style block scope. |
| 218 | `    if (event.target !== event.currentTarget) return;` | Conditional branch: executes block only when condition is true. |
| 219 | `    if (modalType === 'create') this.closeCreateModal();` | Conditional branch: executes block only when condition is true. |
| 220 | `    else this.closeEditModal();` | Alternative branch when previous condition is not met. |
| 221 | `  }` | Closes the current code/style block scope. |
| 222 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.