
import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, RouterModule, Router  } from '@angular/router';
import { StorageService } from '../../auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'] // Corrected to styleUrls
})
export class NavComponent {
  isLoggedIn: boolean = false;
  isUserLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  isTrainerLoggedIn: boolean = false;
  userName: string = '';
  
 private loginStatusSubscription: Subscription;
 
  constructor(private router: Router,  private cdr: ChangeDetectorRef, private storage: StorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storage.isUserLoggedIn();

    this.loginStatusSubscription = this.storage.loggedInSubject$.subscribe((status) => {
      // Set login status
      this.isLoggedIn = status;

      this.isUserLoggedIn = this.storage.isUserLoggedIn();
      this.isAdminLoggedIn = this.storage.isAdminLoggedIn();
      this.isTrainerLoggedIn = this.storage.isTrainerLoggedIn();
      const user = this.storage.getUser();
      if (user) {
        this.userName = user.name || 'User';
      }

    });


    // Check if user is logged in
    this.isAdminLoggedIn = this.storage.isAdminLoggedIn();
    this.isUserLoggedIn = this.storage.isUserLoggedIn();
    this.isTrainerLoggedIn = this.storage.isTrainerLoggedIn();
    const user = this.storage.getUser();
    if (user) {
      this.userName = user.name || 'User'; // Assuming the user has a 'name' property
    }
  }

  // Redirect user to login page if not logged in
  onSignInClick(): void {
    if (!this.isUserLoggedIn && !this.isAdminLoggedIn && !this.isTrainerLoggedIn) {
      this.router.navigate(['/login']);  // Or redirect to any login route you have
    }
  }

  // Sign out the user
  onSignOutClick(): void {
    this.storage.signOut();
    this.storage.loggedInSubject$.next(false);
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.isTrainerLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/home']);
  }
}
