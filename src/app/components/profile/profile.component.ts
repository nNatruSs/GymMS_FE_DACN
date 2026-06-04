import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { StorageService } from '../../auth/services/storage/storage.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  private fb = inject(FormBuilder);
  private profileService = inject(ProfileService);
  private storage = inject(StorageService);

  loading = true;
  saving = false;
  uploadingAvatar = false;
  errorMessage = '';
  successMessage = '';
  selectedAvatarFile: File | null = null;
  avatarPreviewUrl = '';
  user: any | null = null;

  form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    gender: ['male', Validators.required],
    dob: ['', Validators.required],
    address: [''],
    ptSessionPrice60: [250000],
    specialization: [''],
    experienceYears: [0],
    biography: [''],
    certifications: [''],
    areasOfExpertise: [''],
  });

  ngOnInit(): void {
    this.loadProfile();
  }

  isTrainer(): boolean {
    return this.storage.getUserRoles().includes('TRAINER');
  }

  private isAdmin(): boolean {
    return this.storage.getUserRoles().includes('ADMIN');
  }

  loadProfile(): void {
    const userId = this.storage.getUserId();
    if (!userId) {
      this.loading = false;
      this.errorMessage = 'Could not identify current user.';
      return;
    }

    this.loading = true;
    const request$ = this.isTrainer()
      ? this.profileService.getTrainerById(userId)
      : this.profileService.getById(userId);
    request$.subscribe({
      next: (user) => {
        this.user = user;
        this.avatarPreviewUrl = user?.avatarUrl || '';
        this.form.reset({
          firstName: user?.firstName ?? '',
          lastName: user?.lastName ?? '',
          email: user?.email ?? '',
          phone: user?.phone ?? '',
          gender: (user?.gender ?? 'male').toLowerCase(),
          dob: this.toDateInputValue(user?.dob),
          address: user?.address ?? '',
          ptSessionPrice60: Number(user?.ptSessionPrice60 ?? 250000),
          specialization: user?.trainerSpecialization ?? user?.specialization ?? '',
          experienceYears: Number(user?.trainerExperienceYears ?? user?.experienceYears ?? 0),
          biography: user?.trainerBiography ?? user?.biography ?? '',
          certifications: (user?.trainerCertifications ?? user?.certifications ?? []).join(', '),
          areasOfExpertise: (user?.trainerAreasOfExpertise ?? user?.areasOfExpertise ?? []).join(', '),
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        const fallbackUser = this.storage.getUser();
        if (fallbackUser) {
          this.user = fallbackUser;
          this.form.patchValue({
            firstName: fallbackUser.firstName ?? '',
            lastName: fallbackUser.lastName ?? '',
            email: fallbackUser.email ?? '',
          });
          this.errorMessage = 'Could not load full profile from API. Showing stored account info.';
          return;
        }
        this.errorMessage = 'Could not load profile.';
      },
    });
  }

  saveProfile(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.saving || !this.user?.id) return;

    this.saving = true;
    this.errorMessage = '';
    this.successMessage = '';

    const basePayload: any = {
      firstName: this.form.controls.firstName.value.trim(),
      lastName: this.form.controls.lastName.value.trim(),
      email: this.form.controls.email.value.trim(),
      phone: this.form.controls.phone.value.trim(),
      gender: this.form.controls.gender.value.toLowerCase(),
      dob: this.form.controls.dob.value,
      address: this.form.controls.address.value.trim() || undefined,
      status: this.user?.status ?? 'active',
      role: this.isTrainer() ? 'TRAINER' : undefined,
    };

    const payload = this.isTrainer()
      ? {
          ...basePayload,
          ptSessionPrice60: Number(this.form.controls.ptSessionPrice60.value || 0),
          specialization: this.form.controls.specialization.value.trim() || undefined,
          experienceYears: Number(this.form.controls.experienceYears.value || 0),
          biography: this.form.controls.biography.value.trim() || undefined,
          certifications: this.splitCommaList(this.form.controls.certifications.value),
          areasOfExpertise: this.splitCommaList(this.form.controls.areasOfExpertise.value),
        }
      : basePayload;

    const request$ = this.isTrainer()
      ? this.profileService.updateTrainer(this.user.id, payload)
      : this.profileService.updateUser(this.user.id, payload);

    request$.subscribe({
      next: () => {
        this.saving = false;
        this.successMessage = 'Profile updated successfully.';
        this.loadProfile();
      },
      error: () => {
        this.saving = false;
        this.errorMessage = this.isAdmin()
          ? 'Could not update profile.'
          : 'Profile update is not available for this role on current backend.';
      },
    });
  }

  onAvatarFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedAvatarFile = file;
  }

  uploadAvatar(): void {
    if (!this.selectedAvatarFile || this.uploadingAvatar) return;
    this.uploadingAvatar = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.profileService.uploadAvatar(this.selectedAvatarFile).subscribe({
      next: () => {
        this.uploadingAvatar = false;
        this.successMessage = 'Avatar updated successfully.';
        this.loadProfile();
      },
      error: () => {
        this.uploadingAvatar = false;
        this.errorMessage = 'Could not upload avatar.';
      },
    });
  }

  private splitCommaList(value: string): string[] {
    return String(value ?? '')
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
  }

  private toDateInputValue(value?: string): string {
    if (!value) return '';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return date.toISOString().slice(0, 10);
  }
}
