# Explanation: `src/app/components/profile/profile.component.ts`

## File Overview
- **Relative path:** `src/app/components/profile/profile.component.ts`
- **Total lines:** `195`
- **Non-empty lines:** `177`
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
| 4 | `import { ProfileService } from '../../services/profile.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { StorageService } from '../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `@Component({` | Angular decorator declaring metadata for this component. |
| 8 | `  selector: 'app-profile',` | Core implementation line contributing to the file behavior. |
| 9 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 10 | `  imports: [CommonModule, ReactiveFormsModule],` | Core implementation line contributing to the file behavior. |
| 11 | `  templateUrl: './profile.component.html',` | Core implementation line contributing to the file behavior. |
| 12 | `  styleUrls: ['./profile.component.css'],` | Core implementation line contributing to the file behavior. |
| 13 | `})` | Core implementation line contributing to the file behavior. |
| 14 | `export class ProfileComponent {` | Exports symbols so other files can import this logic. |
| 15 | `  private fb = inject(FormBuilder);` | Core implementation line contributing to the file behavior. |
| 16 | `  private profileService = inject(ProfileService);` | Core implementation line contributing to the file behavior. |
| 17 | `  private storage = inject(StorageService);` | Core implementation line contributing to the file behavior. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 20 | `  saving = false;` | Core implementation line contributing to the file behavior. |
| 21 | `  uploadingAvatar = false;` | Core implementation line contributing to the file behavior. |
| 22 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 23 | `  successMessage = '';` | Core implementation line contributing to the file behavior. |
| 24 | `  selectedAvatarFile: File \| null = null;` | CSS declaration assigning a style property value. |
| 25 | `  avatarPreviewUrl = '';` | Core implementation line contributing to the file behavior. |
| 26 | `  user: any \| null = null;` | CSS declaration assigning a style property value. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `  form = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 29 | `    firstName: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 30 | `    lastName: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 31 | `    email: ['', [Validators.required, Validators.email]],` | Core implementation line contributing to the file behavior. |
| 32 | `    phone: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 33 | `    gender: ['male', Validators.required],` | Core implementation line contributing to the file behavior. |
| 34 | `    dob: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 35 | `    address: [''],` | Core implementation line contributing to the file behavior. |
| 36 | `    ptSessionPrice60: [250000],` | Core implementation line contributing to the file behavior. |
| 37 | `    specialization: [''],` | Core implementation line contributing to the file behavior. |
| 38 | `    experienceYears: [0],` | Core implementation line contributing to the file behavior. |
| 39 | `    biography: [''],` | Core implementation line contributing to the file behavior. |
| 40 | `    certifications: [''],` | Core implementation line contributing to the file behavior. |
| 41 | `    areasOfExpertise: [''],` | Core implementation line contributing to the file behavior. |
| 42 | `  });` | Core implementation line contributing to the file behavior. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 45 | `    this.loadProfile();` | Core implementation line contributing to the file behavior. |
| 46 | `  }` | Closes the current code/style block scope. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `  isTrainer(): boolean {` | Begins a new code/style block scope. |
| 49 | `    return this.storage.getUserRoles().includes('TRAINER');` | Returns a value from the current function/method. |
| 50 | `  }` | Closes the current code/style block scope. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `  private isAdmin(): boolean {` | Begins a new code/style block scope. |
| 53 | `    return this.storage.getUserRoles().includes('ADMIN');` | Returns a value from the current function/method. |
| 54 | `  }` | Closes the current code/style block scope. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `  loadProfile(): void {` | Begins a new code/style block scope. |
| 57 | `    const userId = this.storage.getUserId();` | Core implementation line contributing to the file behavior. |
| 58 | `    if (!userId) {` | Conditional branch: executes block only when condition is true. |
| 59 | `      this.loading = false;` | Core implementation line contributing to the file behavior. |
| 60 | `      this.errorMessage = 'Could not identify current user.';` | Core implementation line contributing to the file behavior. |
| 61 | `      return;` | Core implementation line contributing to the file behavior. |
| 62 | `    }` | Closes the current code/style block scope. |
| 63 | `` | Blank line used to separate logical blocks for readability. |
| 64 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 65 | `    const request$ = this.isTrainer()` | Core implementation line contributing to the file behavior. |
| 66 | `      ? this.profileService.getTrainerById(userId)` | Core implementation line contributing to the file behavior. |
| 67 | `      : this.profileService.getById(userId);` | CSS declaration assigning a style property value. |
| 68 | `    request$.subscribe({` | Subscribes to an Observable to react to async emissions. |
| 69 | `      next: (user) => {` | Arrow function definition, often used for callbacks. |
| 70 | `        this.user = user;` | Core implementation line contributing to the file behavior. |
| 71 | `        this.avatarPreviewUrl = user?.avatarUrl \|\| '';` | Core implementation line contributing to the file behavior. |
| 72 | `        this.form.reset({` | Begins a new code/style block scope. |
| 73 | `          firstName: user?.firstName ?? '',` | Core implementation line contributing to the file behavior. |
| 74 | `          lastName: user?.lastName ?? '',` | Core implementation line contributing to the file behavior. |
| 75 | `          email: user?.email ?? '',` | Core implementation line contributing to the file behavior. |
| 76 | `          phone: user?.phone ?? '',` | Core implementation line contributing to the file behavior. |
| 77 | `          gender: (user?.gender ?? 'male').toLowerCase(),` | Core implementation line contributing to the file behavior. |
| 78 | `          dob: this.toDateInputValue(user?.dob),` | Core implementation line contributing to the file behavior. |
| 79 | `          address: user?.address ?? '',` | Core implementation line contributing to the file behavior. |
| 80 | `          ptSessionPrice60: Number(user?.ptSessionPrice60 ?? 250000),` | Core implementation line contributing to the file behavior. |
| 81 | `          specialization: user?.trainerSpecialization ?? user?.specialization ?? '',` | Core implementation line contributing to the file behavior. |
| 82 | `          experienceYears: Number(user?.trainerExperienceYears ?? user?.experienceYears ?? 0),` | Core implementation line contributing to the file behavior. |
| 83 | `          biography: user?.trainerBiography ?? user?.biography ?? '',` | Core implementation line contributing to the file behavior. |
| 84 | `          certifications: (user?.trainerCertifications ?? user?.certifications ?? []).join(', '),` | Core implementation line contributing to the file behavior. |
| 85 | `          areasOfExpertise: (user?.trainerAreasOfExpertise ?? user?.areasOfExpertise ?? []).join(', '),` | Core implementation line contributing to the file behavior. |
| 86 | `        });` | Core implementation line contributing to the file behavior. |
| 87 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 88 | `      },` | Core implementation line contributing to the file behavior. |
| 89 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 90 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 91 | `        const fallbackUser = this.storage.getUser();` | Core implementation line contributing to the file behavior. |
| 92 | `        if (fallbackUser) {` | Conditional branch: executes block only when condition is true. |
| 93 | `          this.user = fallbackUser;` | Core implementation line contributing to the file behavior. |
| 94 | `          this.form.patchValue({` | Begins a new code/style block scope. |
| 95 | `            firstName: fallbackUser.firstName ?? '',` | Core implementation line contributing to the file behavior. |
| 96 | `            lastName: fallbackUser.lastName ?? '',` | Core implementation line contributing to the file behavior. |
| 97 | `            email: fallbackUser.email ?? '',` | Core implementation line contributing to the file behavior. |
| 98 | `          });` | Core implementation line contributing to the file behavior. |
| 99 | `          this.errorMessage = 'Could not load full profile from API. Showing stored account info.';` | Core implementation line contributing to the file behavior. |
| 100 | `          return;` | Core implementation line contributing to the file behavior. |
| 101 | `        }` | Closes the current code/style block scope. |
| 102 | `        this.errorMessage = 'Could not load profile.';` | Core implementation line contributing to the file behavior. |
| 103 | `      },` | Core implementation line contributing to the file behavior. |
| 104 | `    });` | Core implementation line contributing to the file behavior. |
| 105 | `  }` | Closes the current code/style block scope. |
| 106 | `` | Blank line used to separate logical blocks for readability. |
| 107 | `  saveProfile(): void {` | Begins a new code/style block scope. |
| 108 | `    this.form.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 109 | `    if (this.form.invalid \|\| this.saving \|\| !this.user?.id) return;` | Conditional branch: executes block only when condition is true. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `    this.saving = true;` | Core implementation line contributing to the file behavior. |
| 112 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 113 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 114 | `` | Blank line used to separate logical blocks for readability. |
| 115 | `    const basePayload: any = {` | Begins a new code/style block scope. |
| 116 | `      firstName: this.form.controls.firstName.value.trim(),` | Core implementation line contributing to the file behavior. |
| 117 | `      lastName: this.form.controls.lastName.value.trim(),` | Core implementation line contributing to the file behavior. |
| 118 | `      email: this.form.controls.email.value.trim(),` | Core implementation line contributing to the file behavior. |
| 119 | `      phone: this.form.controls.phone.value.trim(),` | Core implementation line contributing to the file behavior. |
| 120 | `      gender: this.form.controls.gender.value.toLowerCase(),` | Core implementation line contributing to the file behavior. |
| 121 | `      dob: this.form.controls.dob.value,` | Core implementation line contributing to the file behavior. |
| 122 | `      address: this.form.controls.address.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 123 | `      status: this.user?.status ?? 'active',` | Core implementation line contributing to the file behavior. |
| 124 | `      role: this.isTrainer() ? 'TRAINER' : undefined,` | Core implementation line contributing to the file behavior. |
| 125 | `    };` | Core implementation line contributing to the file behavior. |
| 126 | `` | Blank line used to separate logical blocks for readability. |
| 127 | `    const payload = this.isTrainer()` | Core implementation line contributing to the file behavior. |
| 128 | `      ? {` | Begins a new code/style block scope. |
| 129 | `          ...basePayload,` | Core implementation line contributing to the file behavior. |
| 130 | `          ptSessionPrice60: Number(this.form.controls.ptSessionPrice60.value \|\| 0),` | Core implementation line contributing to the file behavior. |
| 131 | `          specialization: this.form.controls.specialization.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 132 | `          experienceYears: Number(this.form.controls.experienceYears.value \|\| 0),` | Core implementation line contributing to the file behavior. |
| 133 | `          biography: this.form.controls.biography.value.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 134 | `          certifications: this.splitCommaList(this.form.controls.certifications.value),` | Core implementation line contributing to the file behavior. |
| 135 | `          areasOfExpertise: this.splitCommaList(this.form.controls.areasOfExpertise.value),` | Core implementation line contributing to the file behavior. |
| 136 | `        }` | Closes the current code/style block scope. |
| 137 | `      : basePayload;` | CSS declaration assigning a style property value. |
| 138 | `` | Blank line used to separate logical blocks for readability. |
| 139 | `    const request$ = this.isTrainer()` | Core implementation line contributing to the file behavior. |
| 140 | `      ? this.profileService.updateTrainer(this.user.id, payload)` | Core implementation line contributing to the file behavior. |
| 141 | `      : this.profileService.updateUser(this.user.id, payload);` | CSS declaration assigning a style property value. |
| 142 | `` | Blank line used to separate logical blocks for readability. |
| 143 | `    request$.subscribe({` | Subscribes to an Observable to react to async emissions. |
| 144 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 145 | `        this.saving = false;` | Core implementation line contributing to the file behavior. |
| 146 | `        this.successMessage = 'Profile updated successfully.';` | Core implementation line contributing to the file behavior. |
| 147 | `        this.loadProfile();` | Core implementation line contributing to the file behavior. |
| 148 | `      },` | Core implementation line contributing to the file behavior. |
| 149 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 150 | `        this.saving = false;` | Core implementation line contributing to the file behavior. |
| 151 | `        this.errorMessage = this.isAdmin()` | Core implementation line contributing to the file behavior. |
| 152 | `          ? 'Could not update profile.'` | Core implementation line contributing to the file behavior. |
| 153 | `          : 'Profile update is not available for this role on current backend.';` | CSS declaration assigning a style property value. |
| 154 | `      },` | Core implementation line contributing to the file behavior. |
| 155 | `    });` | Core implementation line contributing to the file behavior. |
| 156 | `  }` | Closes the current code/style block scope. |
| 157 | `` | Blank line used to separate logical blocks for readability. |
| 158 | `  onAvatarFileSelected(event: Event): void {` | Begins a new code/style block scope. |
| 159 | `    const input = event.target as HTMLInputElement;` | Core implementation line contributing to the file behavior. |
| 160 | `    const file = input.files?.[0] ?? null;` | Core implementation line contributing to the file behavior. |
| 161 | `    this.selectedAvatarFile = file;` | Core implementation line contributing to the file behavior. |
| 162 | `  }` | Closes the current code/style block scope. |
| 163 | `` | Blank line used to separate logical blocks for readability. |
| 164 | `  uploadAvatar(): void {` | Begins a new code/style block scope. |
| 165 | `    if (!this.selectedAvatarFile \|\| this.uploadingAvatar) return;` | Conditional branch: executes block only when condition is true. |
| 166 | `    this.uploadingAvatar = true;` | Core implementation line contributing to the file behavior. |
| 167 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 168 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 169 | `    this.profileService.uploadAvatar(this.selectedAvatarFile).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 170 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 171 | `        this.uploadingAvatar = false;` | Core implementation line contributing to the file behavior. |
| 172 | `        this.successMessage = 'Avatar updated successfully.';` | Core implementation line contributing to the file behavior. |
| 173 | `        this.loadProfile();` | Core implementation line contributing to the file behavior. |
| 174 | `      },` | Core implementation line contributing to the file behavior. |
| 175 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 176 | `        this.uploadingAvatar = false;` | Core implementation line contributing to the file behavior. |
| 177 | `        this.errorMessage = 'Could not upload avatar.';` | Core implementation line contributing to the file behavior. |
| 178 | `      },` | Core implementation line contributing to the file behavior. |
| 179 | `    });` | Core implementation line contributing to the file behavior. |
| 180 | `  }` | Closes the current code/style block scope. |
| 181 | `` | Blank line used to separate logical blocks for readability. |
| 182 | `  private splitCommaList(value: string): string[] {` | Begins a new code/style block scope. |
| 183 | `    return String(value ?? '')` | Returns a value from the current function/method. |
| 184 | `      .split(',')` | Core implementation line contributing to the file behavior. |
| 185 | `      .map((x) => x.trim())` | Core implementation line contributing to the file behavior. |
| 186 | `      .filter(Boolean);` | Core implementation line contributing to the file behavior. |
| 187 | `  }` | Closes the current code/style block scope. |
| 188 | `` | Blank line used to separate logical blocks for readability. |
| 189 | `  private toDateInputValue(value?: string): string {` | Begins a new code/style block scope. |
| 190 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 191 | `    const date = new Date(value);` | Core implementation line contributing to the file behavior. |
| 192 | `    if (Number.isNaN(date.getTime())) return '';` | Conditional branch: executes block only when condition is true. |
| 193 | `    return date.toISOString().slice(0, 10);` | Returns a value from the current function/method. |
| 194 | `  }` | Closes the current code/style block scope. |
| 195 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.