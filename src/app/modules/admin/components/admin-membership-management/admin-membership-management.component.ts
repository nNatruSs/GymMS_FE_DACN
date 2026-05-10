import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminMembershipService, MembershipTierPayload } from '../../services/admin-membership.service';

@Component({
  selector: 'app-admin-membership-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-membership-management.component.html',
  styleUrls: ['./admin-membership-management.component.css']
})
export class AdminMembershipManagementComponent {
  private fb = inject(FormBuilder);
  private adminMembershipService = inject(AdminMembershipService);

  loading = true;
  creating = false;
  updating = false;
  uploadingLogo = false;
  deletingId: string | null = null;
  tiers: any[] = [];
  errorMessage = '';
  showCreateModal = false;
  showEditModal = false;
  selectedTier: any | null = null;
  selectedLogoFile: File | null = null;

  createForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    minPrice: [0, [Validators.required, Validators.min(0)]],
    purchasePrice: [0, [Validators.required, Validators.min(0)]],
    level: ['PREMIUM', [Validators.required]],
  });

  editForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    minPrice: [0, [Validators.required, Validators.min(0)]],
    purchasePrice: [0, [Validators.required, Validators.min(0)]],
    level: ['PREMIUM', [Validators.required]],
  });

  ngOnInit(): void {
    this.loadTiers();
  }

  loadTiers(): void {
    this.loading = true;
    this.errorMessage = '';
    this.adminMembershipService.listTiers().subscribe({
      next: (tiers) => {
        this.tiers = tiers;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load membership tiers.';
        this.loading = false;
      },
    });
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    this.errorMessage = '';
    this.createForm.reset({
      name: '',
      description: '',
      minPrice: 0,
      purchasePrice: 0,
      level: 'PREMIUM',
    });
  }

  closeCreateModal(): void {
    if (this.creating) return;
    this.showCreateModal = false;
  }

  openEditModal(tier: any): void {
    this.selectedTier = tier;
    this.showEditModal = true;
    this.errorMessage = '';
    this.selectedLogoFile = null;
    this.editForm.patchValue({
      name: tier.name ?? '',
      description: tier.description ?? '',
      minPrice: Number(tier.minPrice ?? 0),
      purchasePrice: Number(tier.purchasePrice ?? 0),
      level: tier.level ?? 'PREMIUM',
    });
  }

  closeEditModal(): void {
    if (this.updating || this.deletingId || this.uploadingLogo) return;
    this.showEditModal = false;
    this.selectedTier = null;
    this.selectedLogoFile = null;
  }

  createTier(): void {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.creating) return;
    if (!confirm('Create this membership tier?')) return;

    const payload: MembershipTierPayload = {
      name: this.createForm.controls.name.value,
      description: this.createForm.controls.description.value,
      minPrice: Number(this.createForm.controls.minPrice.value),
      purchasePrice: Number(this.createForm.controls.purchasePrice.value),
      level: this.createForm.controls.level.value,
    };

    this.creating = true;
    this.errorMessage = '';
    this.adminMembershipService.createTier(payload).subscribe({
      next: () => {
        this.creating = false;
        this.closeCreateModal();
        this.loadTiers();
      },
      error: (err) => {
        this.creating = false;
        this.errorMessage = err?.error?.error?.message || 'Create failed.';
      },
    });
  }

  updateTier(): void {
    this.editForm.markAllAsTouched();
    if (this.editForm.invalid || this.updating || !this.selectedTier?.id) return;
    if (!confirm('Update this membership tier?')) return;

    const payload: MembershipTierPayload = {
      name: this.editForm.controls.name.value,
      description: this.editForm.controls.description.value,
      minPrice: Number(this.editForm.controls.minPrice.value),
      purchasePrice: Number(this.editForm.controls.purchasePrice.value),
      level: this.editForm.controls.level.value,
    };

    this.updating = true;
    this.errorMessage = '';
    this.adminMembershipService.updateTier(this.selectedTier.id, payload).subscribe({
      next: () => {
        this.updating = false;
        this.closeEditModal();
        this.loadTiers();
      },
      error: (err) => {
        this.updating = false;
        this.errorMessage = err?.error?.error?.message || 'Update failed.';
      },
    });
  }

  deleteTier(id: string | undefined): void {
    if (!id || this.deletingId) return;
    if (!confirm('Delete this membership tier?')) return;

    this.deletingId = id;
    this.errorMessage = '';
    this.adminMembershipService.deleteTier(id).subscribe({
      next: () => {
        this.deletingId = null;
        if (this.selectedTier?.id === id) this.closeEditModal();
        this.loadTiers();
      },
      error: (err) => {
        this.deletingId = null;
        this.errorMessage = err?.error?.error?.message || 'Delete failed.';
      },
    });
  }

  onLogoFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedLogoFile = input.files?.[0] ?? null;
  }

  uploadLogo(): void {
    if (!this.selectedTier?.id || !this.selectedLogoFile || this.uploadingLogo) return;
    this.uploadingLogo = true;
    this.errorMessage = '';
    this.adminMembershipService.uploadTierLogo(this.selectedTier.id, this.selectedLogoFile).subscribe({
      next: () => {
        this.uploadingLogo = false;
        this.selectedLogoFile = null;
        this.loadTiers();
      },
      error: (err) => {
        this.uploadingLogo = false;
        this.errorMessage = err?.error?.error?.message || 'Logo upload failed.';
      },
    });
  }

  logoUrlOf(tier: any): string | null {
    return tier?.logoUrl || null;
  }

  onBackdropClick(event: MouseEvent, modalType: 'create' | 'edit'): void {
    if (event.target !== event.currentTarget) return;
    if (modalType === 'create') this.closeCreateModal();
    else this.closeEditModal();
  }
}
