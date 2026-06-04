import { Routes } from '@angular/router';
import { LoginComponent } from './auth/auth-components/login/login.component';
import { SignupComponent } from './auth/auth-components/signup/signup.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './auth/auth-components/user-registration/user-registration.component';
import { VerifyEmailComponent } from './auth/auth-components/verify-email/verify-email.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentFailComponent } from './components/payment-fail/payment-fail.component';
import { ProfileComponent } from './components/profile/profile.component';



import { preventAccessIfLoggedInGuardGuard } from '../guard/prevent-access-if-logged-in-guard.guard';
import { userGuard } from '../guard/user.guard';

import { adminGuard } from '../guard/admin.guard';
import { trainerGuard } from '../guard/trainer.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[preventAccessIfLoggedInGuardGuard] },
  { path: 'register', component: SignupComponent, canActivate:[preventAccessIfLoggedInGuardGuard] },
  { path: 'user-registration', component: UserRegistrationComponent, canActivate:[preventAccessIfLoggedInGuardGuard] },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'payment/success', component: PaymentSuccessComponent },
  { path: 'payment/cancel', component: PaymentFailComponent },
  { path: 'payment/fail', redirectTo: 'payment/cancel' },
  
  
  { 
    path: 'admin', 
    data: {role: 'ADMIN'},
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), 
    canActivate: [adminGuard] 
  },
  { 
    path: 'trainer', 
    data: {role: 'TRAINER'},
    loadChildren: () => import('./modules/trainer/trainer.module').then(m => m.TrainerModule), 
    canActivate: [trainerGuard] 
  },
  
  
  
  
  
  { 
    path: 'user', 
    data: {role: 'USER'},
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), 
    canActivate: [userGuard] 
  },
  
  
  
  
  

  { path: 'our-services', component: OurServicesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'home', component: HomeComponent },
   
   { path: '', component: HomeComponent },
   
   { path: 'home', component: HomeComponent },
   
   { path: '**', redirectTo: '' },
];
