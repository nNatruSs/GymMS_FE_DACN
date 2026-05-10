import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { SupportService } from '../../../services/support.service';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css'],
})
export class UserFeedbackComponent {
  private fb = inject(FormBuilder);
  private supportService = inject(SupportService);

  submitting = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  form = this.fb.nonNullable.group({
    subject: ['', [Validators.required, Validators.maxLength(200)]],
    message: ['', [Validators.required, Validators.maxLength(5000)]],
  });

  submit() {
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.successMessage = null;
    this.errorMessage = null;
    this.submitting = true;

    const { subject, message } = this.form.getRawValue();

    this.supportService
      .submitFeedback({ subject, message })
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: () => {
          this.successMessage =
            'Thank you. Your feedback has been sent to our team.';
          this.form.reset();
        },
        error: (err) => {
          const body = err?.error;
          this.errorMessage =
            (typeof body?.message === 'string' && body.message) ||
            (Array.isArray(body?.message) && body.message.join(', ')) ||
            err?.message ||
            'Could not send feedback. Please try again later.';
        },
      });
  }
}
