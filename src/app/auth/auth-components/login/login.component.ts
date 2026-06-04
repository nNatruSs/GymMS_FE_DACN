





































 










           












































    





import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  successMessage: string | null = null;
  message: string = '';
  spinning: boolean = false;

  constructor(
    private serv: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private storage: StorageService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.successMessage = params['successMessage'] || null;
      this.scrollToTop();
    });
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.spinning = true;
    this.message = '';

    this.serv.login(this.loginForm.value).subscribe({
      next: (response) => {
        
        const { accessToken, newRefreshToken } = response.data;

        
        const payload = this.decodeJwt(accessToken);

        const user = {
          id: payload.sub,
          email: payload.email,
          roles: payload.roles ?? [],    
        };

        this.storage.saveUser(user);
        this.storage.saveToken(accessToken);
        this.storage.saveRefreshToken(newRefreshToken);

        this.spinning = false;

        
        if (this.storage.isAdminLoggedIn()) {
          this.router.navigateByUrl('/admin/dashboard/memberships');
        } else if (this.storage.isUserLoggedIn()) {   
          this.router.navigateByUrl('/user/dashboard/memberships');
        } else if (this.storage.isTrainerLoggedIn()) {
          this.router.navigateByUrl('/trainer/dashboard');
        } else {
          this.message = 'Unknown role. Please contact support.';
        }
      },
      error: (err) => {
        this.spinning = false;
        if (err.status === 401 || err.status === 400) {
          this.message = 'Invalid email or password.';
        } else if (err.status === 0) {
          this.message = 'Cannot connect to server. Please try again later.';
        } else {
          this.message = err.error?.error?.message ?? 'Login failed. Please try again.';
        }
      }
    });
  }

  
  private decodeJwt(token: string): any {
    try {
      const base64Payload = token.split('.')[1];
      const decoded = atob(base64Payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch {
      return {};
    }
  }
}