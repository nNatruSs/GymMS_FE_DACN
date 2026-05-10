import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css',
})
export class VerifyEmailComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);

  loading = true;
  submitting = false;
  requiresPasswordSetup = false;
  token = '';
  errorMessage = '';
  successMessage = '';

  form = this.fb.group(
    {
      password: [''],
      confirmPassword: [''],
    },
    { validators: this.passwordsMatchValidator() }
  );

  constructor() {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';

    if (!this.token) {
      this.loading = false;
      this.errorMessage = 'Verification token is missing from the link.';
      return;
    }

    this.authService.verifyEmailLanding(this.token).subscribe({
      next: (html) => {
        this.requiresPasswordSetup = /name="password"/i.test(html);
        this.configurePasswordValidators();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message ||
          'Verification link is invalid or expired. Please request a new verification email.';
      },
    });
  }

  verify(): void {
    if (!this.token || this.submitting) return;

    this.errorMessage = '';
    this.successMessage = '';

    if (this.requiresPasswordSetup) {
      this.form.markAllAsTouched();
      if (this.form.invalid) return;
    }

    this.submitting = true;

    const payload: {
      token: string;
      password?: string;
      confirmPassword?: string;
    } = { token: this.token };

    if (this.requiresPasswordSetup) {
      payload.password = this.form.get('password')?.value ?? '';
      payload.confirmPassword = this.form.get('confirmPassword')?.value ?? '';
    }

    this.authService.verifyEmail(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.successMessage = 'Email verified successfully. Redirecting to homepage...';
        setTimeout(() => this.router.navigateByUrl('/'), 1500);
      },
      error: (err) => {
        this.submitting = false;
        this.errorMessage =
          err?.error?.error?.message ||
          err?.error?.message ||
          'Email verification failed. Please try again.';
      },
    });
  }

  private configurePasswordValidators(): void {
    const passwordControl = this.form.get('password');
    const confirmControl = this.form.get('confirmPassword');
    if (!passwordControl || !confirmControl) return;

    if (this.requiresPasswordSetup) {
      passwordControl.setValidators([Validators.required, Validators.minLength(8)]);
      confirmControl.setValidators([Validators.required, Validators.minLength(8)]);
    } else {
      passwordControl.clearValidators();
      confirmControl.clearValidators();
      passwordControl.setValue('');
      confirmControl.setValue('');
    }

    passwordControl.updateValueAndValidity();
    confirmControl.updateValueAndValidity();
    this.form.updateValueAndValidity();
  }

  private passwordsMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      if (!password || !confirmPassword) return null;
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }
}
