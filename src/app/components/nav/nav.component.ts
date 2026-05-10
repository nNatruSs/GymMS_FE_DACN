
import { Component } from '@angular/core';
import { RouterModule, Router  } from '@angular/router';
import { StorageService } from '../../auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppNotification, NotificationService } from '../../services/notification.service';


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
  showNotifications = false;
  notifications: AppNotification[] = [];
  unreadCount = 0;
  loadingNotifications = false;
  
 private loginStatusSubscription!: Subscription;
 
  constructor(
    private router: Router,
    private storage: StorageService,
    private notificationService: NotificationService
  ) {}

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
        this.userName = user.email || 'User';
      }
      this.loadNotifications();

    });


    // Check if user is logged in
    this.isAdminLoggedIn = this.storage.isAdminLoggedIn();
    this.isUserLoggedIn = this.storage.isUserLoggedIn();
    this.isTrainerLoggedIn = this.storage.isTrainerLoggedIn();
    const user = this.storage.getUser();
    if (user) {
      this.userName = user.email || 'User'; // Assuming the user has a 'name' property
    }
    this.loadNotifications();
  }

  ngOnDestroy(): void {
    this.loginStatusSubscription?.unsubscribe();
  }

  isAnyRoleLoggedIn(): boolean {
    return this.isUserLoggedIn || this.isAdminLoggedIn || this.isTrainerLoggedIn;
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.loadNotifications();
    }
  }

  loadNotifications(): void {
    if (!this.isAnyRoleLoggedIn()) {
      this.notifications = [];
      this.unreadCount = 0;
      this.showNotifications = false;
      return;
    }

    this.loadingNotifications = true;
    this.notificationService.getUnreadCount().subscribe({
      next: (count) => {
        this.unreadCount = count;
      },
    });

    this.notificationService.getNotifications(1, 10).subscribe({
      next: (docs) => {
        this.notifications = docs;
        this.loadingNotifications = false;
      },
      error: () => {
        this.loadingNotifications = false;
      },
    });
  }

  markAllNotificationsRead(): void {
    this.notificationService.markAllRead().subscribe({
      next: () => {
        this.unreadCount = 0;
        this.loadNotifications();
      },
    });
  }

  markNotificationRead(notification: AppNotification): void {
    if (!notification?.id) return;
    this.notificationService.markOneRead(notification.id).subscribe({
      next: () => {
        this.loadNotifications();
      },
    });
  }

  notificationText(notification: AppNotification): string {
    return (
      notification.message ||
      notification.content ||
      notification.title ||
      'Notification'
    );
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
    this.unreadCount = 0;
    this.notifications = [];
    this.showNotifications = false;
    this.router.navigate(['/home']);
  }
}
