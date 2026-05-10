// import { Component, ChangeDetectorRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
// import { CommonModule } from '@angular/common'
// import { AuthService } from '../../services/auth/auth.service';
// import { StorageService } from '../../services/storage/storage.service';
// import { Router, RouterModule, ActivatedRoute } from '@angular/router';
// import { ViewportScroller } from '@angular/common';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, RouterModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   successMessage: string | null = null;
//   constructor(private serv: AuthService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef, private storage: StorageService, private viewportScroller: ViewportScroller) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe((params) => {
//       this.successMessage = params['successMessage'] || null;
//       this.scrollToTop();
//     });
//   }
//   scrollToTop(): void {
//     this.viewportScroller.scrollToPosition([0, 0]);
//     // window.scrollTo({ top: 0, behavior: 'smooth' });
//   }

//   loginForm: FormGroup = new FormGroup({
//     email: new FormControl("", [Validators.required, Validators.email]),
//     password: new FormControl("", Validators.required),
//   });

//   message:string = "";
//   spinning:boolean = false;

 

//   login() {
//     console.log(this.loginForm.value);
//     this.serv.login(this.loginForm.value).subscribe(
//       // (response)=>{
//       //  if(response.userId!=null){
//       //      const user = {
//       //         id: response.userId,
//       //         role: response.userRole
//       //      }
           
//       //      this.storage.saveUser(user);
//       //      this.storage.saveToken(response.jwt);

//       //      if(this.storage.isAdminLoggedIn()){
//       //       this.router.navigateByUrl('/admin/dashboard');
//       //      }else if(this.storage.isUserLoggedIn()){
//       //       this.router.navigateByUrl('/user/dashboard');
//       //      }else if(this.storage.isOrganizerLoggedIn()){
//       //       this.storage.loggedInSubject$.next(true);
//       //       this.cdr.detectChanges();
//       //       this.router.navigateByUrl('/organizers/dashboard');
//       //      }else{
//       //         this.message = "Bad Credentials";
//       //      }
//       //      this.spinning = false;
//       //  }

//       {next: (response)=>{
//         const user = {
//           id: response.user.id,
//           role: response.user.role,
//           name: response.user.name
//         };

//         this.storage.saveUser(user);
//         this.storage.saveToken(response.token);

//         if (this.storage.isAdminLoggedIn()) {
//           this.router.navigateByUrl('/admin/dashboard');
//         } else if (this.storage.isUserLoggedIn()) {
//           this.router.navigateByUrl('/user/dashboard');
//         } else if (this.storage.isTrainerLoggedIn()) {
//           this.router.navigateByUrl('/trainer/dashboard');
//         } else {
//           this.message = 'Bad Credentials';
//         }

//         this.spinning = false;

//       },
//       error: () => {
//         this.message = 'Invalid email or password';
//         this.spinning = false;
//       }
    
//     });
//   }
// }


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
        /**
         * Real backend response shape:
         * {
         *   data: { accessToken: string, newRefreshToken: string },
         *   status: 0,
         *   statusText: 'OK'
         * }
         * The JWT payload contains: { sub, email, roles: string[], ... }
         */
        const { accessToken, newRefreshToken } = response.data;

        // Decode JWT payload to get user info (roles, id, email)
        const payload = this.decodeJwt(accessToken);

        const user = {
          id: payload.sub,
          email: payload.email,
          roles: payload.roles ?? [],    // e.g. ['ADMIN'] | ['MEMBER'] | ['TRAINER']
        };

        this.storage.saveToken(accessToken);
        this.storage.saveRefreshToken(newRefreshToken);
        this.storage.saveUser(user);

        this.spinning = false;

        // Route based on role
        if (this.storage.isAdminLoggedIn()) {
          this.router.navigateByUrl('/admin/dashboard/memberships');
        } else if (this.storage.isUserLoggedIn()) {   // MEMBER
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

  /** Decode a JWT without a library — just reads the payload */
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