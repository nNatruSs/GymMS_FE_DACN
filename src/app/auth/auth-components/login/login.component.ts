import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common'
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
  constructor(private serv: AuthService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef, private storage: StorageService, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.successMessage = params['successMessage'] || null;
      this.scrollToTop();
    });
  }
  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  message:string = "";
  spinning:boolean = false;

 

  login() {
    console.log(this.loginForm.value);
    this.serv.login(this.loginForm.value).subscribe(
      // (response)=>{
      //  if(response.userId!=null){
      //      const user = {
      //         id: response.userId,
      //         role: response.userRole
      //      }
           
      //      this.storage.saveUser(user);
      //      this.storage.saveToken(response.jwt);

      //      if(this.storage.isAdminLoggedIn()){
      //       this.router.navigateByUrl('/admin/dashboard');
      //      }else if(this.storage.isUserLoggedIn()){
      //       this.router.navigateByUrl('/user/dashboard');
      //      }else if(this.storage.isOrganizerLoggedIn()){
      //       this.storage.loggedInSubject$.next(true);
      //       this.cdr.detectChanges();
      //       this.router.navigateByUrl('/organizers/dashboard');
      //      }else{
      //         this.message = "Bad Credentials";
      //      }
      //      this.spinning = false;
      //  }

      {next: (response)=>{
        const user = {
          id: response.user.id,
          role: response.user.role,
          name: response.user.name
        };

        this.storage.saveUser(user);
        this.storage.saveToken(response.token);

        if (this.storage.isAdminLoggedIn()) {
          this.router.navigateByUrl('/admin/dashboard');
        } else if (this.storage.isUserLoggedIn()) {
          this.router.navigateByUrl('/user/dashboard');
        } else if (this.storage.isTrainerLoggedIn()) {
          this.router.navigateByUrl('/trainer/dashboard');
        } else {
          this.message = 'Bad Credentials';
        }

        this.spinning = false;

      },
      error: () => {
        this.message = 'Invalid email or password';
        this.spinning = false;
      }
    
    });
  }
}
