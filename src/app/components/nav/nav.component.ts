
import { Component } from '@angular/core';
import { RouterModule, Router  } from '@angular/router';
import { StorageService } from '../../auth/services/storage/storage.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppNotification, NotificationService } from '../../services/notification.service';
import { TrainerService } from '../../modules/trainer/services/trainer.service';
import { Inject, PLATFORM_ID } from '@angular/core';


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
  showBookingRequestModal = false;
  selectedBookingNotification: AppNotification | null = null;
  selectedBookingDetail: any | null = null;
  bookingActionLoading = false;
  bookingActionError: string | null = null;
  showBookingPaymentModal = false;
  selectedPaymentNotification: AppNotification | null = null;
  paymentCheckoutLoading = false;
  paymentCheckoutError: string | null = null;
  
 private loginStatusSubscription!: Subscription;
 
  constructor(
    private router: Router,
    private storage: StorageService,
    private notificationService: NotificationService,
    private trainerService: TrainerService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.handleStripeReturnFallback();
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

  onNotificationClick(notification: AppNotification): void {
    this.markNotificationRead(notification);
    const bookingId = notification?.['metadata']?.bookingId || notification?.['referenceId'];
    const isBookingNotice = String(notification?.['type'] ?? '').toUpperCase() === 'BOOKING';
    if (!bookingId || !isBookingNotice) return;

    const eventKey = String(notification?.['metadata']?.eventKey ?? '').toLowerCase();
    const bookingStatus = String(notification?.['metadata']?.bookingStatus ?? '').toUpperCase();

    if (
      this.isUserLoggedIn &&
      (eventKey === 'notification.trainer-booking.accepted' ||
        bookingStatus === 'ACCEPTED_PENDING_PAYMENT')
    ) {
      this.selectedPaymentNotification = notification;
      this.paymentCheckoutError = null;
      this.showBookingPaymentModal = true;
      return;
    }

    if (!this.isTrainerLoggedIn) return;

    this.selectedBookingNotification = notification;
    this.selectedBookingDetail = null;
    this.bookingActionError = null;
    this.showBookingRequestModal = true;

    this.trainerService.getTrainerMyBookings().subscribe({
      next: (bookings) => {
        this.selectedBookingDetail = (bookings ?? []).find((b) => b?.id === bookingId) ?? null;
      },
      error: () => {
        this.selectedBookingDetail = null;
      },
    });
  }

  closeBookingRequestModal(): void {
    if (this.bookingActionLoading) return;
    this.showBookingRequestModal = false;
    this.selectedBookingNotification = null;
    this.selectedBookingDetail = null;
    this.bookingActionError = null;
  }

  closeBookingPaymentModal(): void {
    if (this.paymentCheckoutLoading) return;
    this.showBookingPaymentModal = false;
    this.selectedPaymentNotification = null;
    this.paymentCheckoutError = null;
  }

  private currentBookingId(): string {
    return (
      this.selectedBookingNotification?.['metadata']?.bookingId ||
      this.selectedBookingNotification?.['referenceId'] ||
      ''
    );
  }

  private currentTrainerId(): string {
    return this.selectedBookingDetail?.trainerId || this.storage.getUserId() || '';
  }

  private currentMemberId(): string {
    return this.selectedBookingDetail?.memberId || this.selectedBookingDetail?.member?.id || '';
  }

  acceptBookingFromNotification(): void {
    const bookingId = this.currentBookingId();
    if (!bookingId || this.bookingActionLoading) return;

    this.bookingActionLoading = true;
    this.bookingActionError = null;
    this.trainerService.acceptTrainerBooking(bookingId).subscribe({
      next: () => {
        const trainerId = this.currentTrainerId();
        const memberId = this.currentMemberId();
        if (trainerId && memberId) {
          this.trainerService.createTrainerClientLink(trainerId, memberId).subscribe({
            next: () => {
              this.bookingActionLoading = false;
              this.closeBookingRequestModal();
              this.loadNotifications();
            },
            error: () => {
              this.bookingActionLoading = false;
              this.bookingActionError =
                'Booking accepted, but linking this member to trainer clients failed.';
            },
          });
          return;
        }

        this.bookingActionLoading = false;
        this.bookingActionError =
          'Booking accepted, but member/trainer id was missing so client link was not created.';
      },
      error: () => {
        this.bookingActionLoading = false;
        this.bookingActionError = 'Could not accept this booking request.';
      },
    });
  }

  rejectBookingFromNotification(): void {
    const bookingId = this.currentBookingId();
    if (!bookingId || this.bookingActionLoading) return;

    this.bookingActionLoading = true;
    this.bookingActionError = null;
    this.trainerService.rejectTrainerBooking(bookingId).subscribe({
      next: () => {
        this.bookingActionLoading = false;
        this.closeBookingRequestModal();
        this.loadNotifications();
      },
      error: () => {
        this.bookingActionLoading = false;
        this.bookingActionError = 'Could not reject this booking request.';
      },
    });
  }

  bookingStartAt(): string {
    return (
      this.selectedBookingNotification?.['metadata']?.startAt ||
      this.selectedBookingDetail?.startAt ||
      ''
    );
  }

  bookingEndAt(): string {
    return (
      this.selectedBookingNotification?.['metadata']?.endAt ||
      this.selectedBookingDetail?.endAt ||
      ''
    );
  }

  paymentBookingStartAt(): string {
    return this.selectedPaymentNotification?.['metadata']?.startAt || '';
  }

  paymentBookingEndAt(): string {
    return this.selectedPaymentNotification?.['metadata']?.endAt || '';
  }

  paymentTargetBookingId(): string {
    return (
      this.selectedPaymentNotification?.['metadata']?.bookingId ||
      this.selectedPaymentNotification?.['referenceId'] ||
      this.selectedPaymentNotification?.id ||
      ''
    );
  }

  startTrainerBookingCheckout(): void {
    const targetId = this.paymentTargetBookingId();
    if (!targetId || this.paymentCheckoutLoading) return;
    if (!isPlatformBrowser(this.platformId)) return;

    this.paymentCheckoutLoading = true;
    this.paymentCheckoutError = null;
    const origin = window.location.origin;
    const successUrl = `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/payment/cancel`;
    this.notificationService
      .checkoutPayment({
        targetType: 'TRAINER_BOOKING',
        targetId,
        amount: 50000,
        currency: 'VND',
        successUrl,
        cancelUrl,
      })
      .subscribe({
        next: (res) => {
          this.paymentCheckoutLoading = false;
          const checkoutUrl = res?.checkoutUrl ?? res?.data?.checkoutUrl;
          if (checkoutUrl) {
            window.open(checkoutUrl, '_blank');
            this.closeBookingPaymentModal();
            return;
          }
          this.paymentCheckoutError = 'Checkout URL not returned from payment API.';
        },
        error: () => {
          this.paymentCheckoutLoading = false;
          this.paymentCheckoutError = 'Could not start checkout for this trainer booking.';
        },
      });
  }

  private handleStripeReturnFallback(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const currentPath = window.location.pathname.toLowerCase();
    const isResultPath =
      currentPath.startsWith('/payment/success') ||
      currentPath.startsWith('/payment/cancel');
    if (isResultPath) return;

    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    const canceled = params.get('canceled');
    const redirectStatus = (params.get('redirect_status') || '').toLowerCase();

    if (sessionId) {
      this.router.navigate(['/payment/success'], { queryParams: { session_id: sessionId } });
      return;
    }

    if (canceled === 'true' || redirectStatus === 'failed' || redirectStatus === 'canceled') {
      this.router.navigate(['/payment/cancel']);
    }
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
