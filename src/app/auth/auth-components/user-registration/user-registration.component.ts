













  












     



  

























  























































   
  
































































import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {

  errorMessage: string = '';
  spinning: boolean = false;
  signUpForm!: FormGroup;

  constructor(
    private service: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:       new FormControl('', Validators.required),
      lastName:        new FormControl('', Validators.required),
      email:           new FormControl('', [Validators.required, Validators.email]),
      password:        new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmationValidator.bind(this)]),
      phone:           new FormControl(''),
      gender:          new FormControl('', Validators.required),
      dateOfBirth:     new FormControl('', Validators.required),
      address:         new FormControl(''),
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) return { required: true };
    if (this.signUpForm && control.value !== this.signUpForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  signup(): void {
    this.markAllAsTouched();
    if (!this.signUpForm.valid) return;

    this.spinning = true;
    this.errorMessage = '';

    const dobRaw = this.signUpForm.get('dateOfBirth')?.value as string;
    const dob = this.normalizeDobToApi(dobRaw);
    if (!dob) {
      this.errorMessage = 'Invalid date of birth.';
      return;
    }

    const payload = {
      firstName:       this.signUpForm.get('firstName')?.value,
      lastName:        this.signUpForm.get('lastName')?.value,
      email:           this.signUpForm.get('email')?.value,
      password:        this.signUpForm.get('password')?.value,
      confirmPassword: this.signUpForm.get('confirmPassword')?.value,
      phone:           this.signUpForm.get('phone')?.value || undefined,
      gender:          (this.signUpForm.get('gender')?.value || '').toLowerCase(),
      dob,
      address:         this.signUpForm.get('address')?.value || undefined,
    };

    this.service.registeruser(payload).subscribe({
      next: () => {
        this.spinning = false;
        this.router.navigate(['/login'], {
          queryParams: { successMessage: 'Account created! Please check your email to verify, then log in.' }
        });
      },
      error: (error) => {
        this.spinning = false;
        if (error.status === 400) {
          this.errorMessage = error.error?.error?.message ?? 'Please check the provided data.';
        } else if (error.status === 409) {
          this.errorMessage = 'An account with this email already exists.';
        } else {
          this.errorMessage = error.error?.error?.message ?? 'Unexpected error. Please try again.';
        }
        this.scrollToError();
      }
    });
  }

  markAllAsTouched() {
    Object.values(this.signUpForm.controls).forEach(c => c.markAsTouched());
  }

  scrollToError() {
    document.getElementById('userRegistrationDiv')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private normalizeDobToApi(value: string): string | null {
    if (!value) return null;

    
    if (/^\d{4}-\d{2}-\d{2}$/.test(value.trim())) {
      return value.trim();
    }

    
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim());
    if (!match) return null;
    const [, dd, mm, yyyy] = match;
    const day = Number(dd);
    const month = Number(mm);
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;
    return `${yyyy}-${mm}-${dd}`;
  }
}