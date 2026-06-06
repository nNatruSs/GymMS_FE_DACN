# Explanation: `src/app/components/nav/nav.component.ts`

## File Overview
- **Relative path:** `src/app/components/nav/nav.component.ts`
- **Total lines:** `381`
- **Non-empty lines:** `327`
- **Import statements:** `8`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `1`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { RouterModule, Router  } from '@angular/router';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { StorageService } from '../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { CommonModule, isPlatformBrowser } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { Subscription } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 7 | `import { AppNotification, NotificationService } from '../../services/notification.service';` | Imports a dependency so this file can use external symbols. |
| 8 | `import { TrainerService } from '../../modules/trainer/services/trainer.service';` | Imports a dependency so this file can use external symbols. |
| 9 | `import { Inject, PLATFORM_ID } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `@Component({` | Angular decorator declaring metadata for this component. |
| 13 | `  selector: 'app-nav',` | Core implementation line contributing to the file behavior. |
| 14 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 15 | `  imports: [RouterModule,CommonModule],` | Core implementation line contributing to the file behavior. |
| 16 | `  templateUrl: './nav.component.html',` | Core implementation line contributing to the file behavior. |
| 17 | `  styleUrls: ['./nav.component.css'] ` | Core implementation line contributing to the file behavior. |
| 18 | `})` | Core implementation line contributing to the file behavior. |
| 19 | `export class NavComponent {` | Exports symbols so other files can import this logic. |
| 20 | `  isLoggedIn: boolean = false;` | CSS declaration assigning a style property value. |
| 21 | `  isUserLoggedIn: boolean = false;` | CSS declaration assigning a style property value. |
| 22 | `  isAdminLoggedIn: boolean = false;` | CSS declaration assigning a style property value. |
| 23 | `  isTrainerLoggedIn: boolean = false;` | CSS declaration assigning a style property value. |
| 24 | `  userName: string = '';` | CSS declaration assigning a style property value. |
| 25 | `  showNotifications = false;` | Core implementation line contributing to the file behavior. |
| 26 | `  notifications: AppNotification[] = [];` | CSS declaration assigning a style property value. |
| 27 | `  unreadCount = 0;` | Core implementation line contributing to the file behavior. |
| 28 | `  loadingNotifications = false;` | Core implementation line contributing to the file behavior. |
| 29 | `  showBookingRequestModal = false;` | Core implementation line contributing to the file behavior. |
| 30 | `  selectedBookingNotification: AppNotification \| null = null;` | CSS declaration assigning a style property value. |
| 31 | `  selectedBookingDetail: any \| null = null;` | CSS declaration assigning a style property value. |
| 32 | `  bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 33 | `  bookingActionError: string \| null = null;` | CSS declaration assigning a style property value. |
| 34 | `  showBookingPaymentModal = false;` | Core implementation line contributing to the file behavior. |
| 35 | `  selectedPaymentNotification: AppNotification \| null = null;` | CSS declaration assigning a style property value. |
| 36 | `  paymentCheckoutLoading = false;` | Core implementation line contributing to the file behavior. |
| 37 | `  paymentCheckoutError: string \| null = null;` | CSS declaration assigning a style property value. |
| 38 | `  ` | Blank line used to separate logical blocks for readability. |
| 39 | ` private loginStatusSubscription!: Subscription;` | CSS declaration assigning a style property value. |
| 40 | ` ` | Blank line used to separate logical blocks for readability. |
| 41 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 42 | `    private router: Router,` | Core implementation line contributing to the file behavior. |
| 43 | `    private storage: StorageService,` | Core implementation line contributing to the file behavior. |
| 44 | `    private notificationService: NotificationService,` | Core implementation line contributing to the file behavior. |
| 45 | `    private trainerService: TrainerService,` | Core implementation line contributing to the file behavior. |
| 46 | `    @Inject(PLATFORM_ID) private platformId: Object` | Core implementation line contributing to the file behavior. |
| 47 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 50 | `    this.handleStripeReturnFallback();` | Core implementation line contributing to the file behavior. |
| 51 | `    this.isLoggedIn = this.storage.isUserLoggedIn();` | Core implementation line contributing to the file behavior. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `    this.loginStatusSubscription = this.storage.loggedInSubject$.subscribe((status) => {` | Subscribes to an Observable to react to async emissions. |
| 54 | `      ` | Blank line used to separate logical blocks for readability. |
| 55 | `      this.isLoggedIn = status;` | Core implementation line contributing to the file behavior. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `      this.isUserLoggedIn = this.storage.isUserLoggedIn();` | Core implementation line contributing to the file behavior. |
| 58 | `      this.isAdminLoggedIn = this.storage.isAdminLoggedIn();` | Core implementation line contributing to the file behavior. |
| 59 | `      this.isTrainerLoggedIn = this.storage.isTrainerLoggedIn();` | Core implementation line contributing to the file behavior. |
| 60 | `      const user = this.storage.getUser();` | Core implementation line contributing to the file behavior. |
| 61 | `      if (user) {` | Conditional branch: executes block only when condition is true. |
| 62 | `        this.userName = user.email \|\| 'User';` | Core implementation line contributing to the file behavior. |
| 63 | `      }` | Closes the current code/style block scope. |
| 64 | `      this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `    });` | Core implementation line contributing to the file behavior. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `    ` | Blank line used to separate logical blocks for readability. |
| 70 | `    this.isAdminLoggedIn = this.storage.isAdminLoggedIn();` | Core implementation line contributing to the file behavior. |
| 71 | `    this.isUserLoggedIn = this.storage.isUserLoggedIn();` | Core implementation line contributing to the file behavior. |
| 72 | `    this.isTrainerLoggedIn = this.storage.isTrainerLoggedIn();` | Core implementation line contributing to the file behavior. |
| 73 | `    const user = this.storage.getUser();` | Core implementation line contributing to the file behavior. |
| 74 | `    if (user) {` | Conditional branch: executes block only when condition is true. |
| 75 | `      this.userName = user.email \|\| 'User'; ` | Core implementation line contributing to the file behavior. |
| 76 | `    }` | Closes the current code/style block scope. |
| 77 | `    this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 78 | `  }` | Closes the current code/style block scope. |
| 79 | `` | Blank line used to separate logical blocks for readability. |
| 80 | `  ngOnDestroy(): void {` | Begins a new code/style block scope. |
| 81 | `    this.loginStatusSubscription?.unsubscribe();` | Subscribes to an Observable to react to async emissions. |
| 82 | `  }` | Closes the current code/style block scope. |
| 83 | `` | Blank line used to separate logical blocks for readability. |
| 84 | `  isAnyRoleLoggedIn(): boolean {` | Begins a new code/style block scope. |
| 85 | `    return this.isUserLoggedIn \|\| this.isAdminLoggedIn \|\| this.isTrainerLoggedIn;` | Returns a value from the current function/method. |
| 86 | `  }` | Closes the current code/style block scope. |
| 87 | `` | Blank line used to separate logical blocks for readability. |
| 88 | `  toggleNotifications(): void {` | Begins a new code/style block scope. |
| 89 | `    this.showNotifications = !this.showNotifications;` | Core implementation line contributing to the file behavior. |
| 90 | `    if (this.showNotifications) {` | Conditional branch: executes block only when condition is true. |
| 91 | `      this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 92 | `    }` | Closes the current code/style block scope. |
| 93 | `  }` | Closes the current code/style block scope. |
| 94 | `` | Blank line used to separate logical blocks for readability. |
| 95 | `  loadNotifications(): void {` | Begins a new code/style block scope. |
| 96 | `    if (!this.isAnyRoleLoggedIn()) {` | Conditional branch: executes block only when condition is true. |
| 97 | `      this.notifications = [];` | Core implementation line contributing to the file behavior. |
| 98 | `      this.unreadCount = 0;` | Core implementation line contributing to the file behavior. |
| 99 | `      this.showNotifications = false;` | Core implementation line contributing to the file behavior. |
| 100 | `      return;` | Core implementation line contributing to the file behavior. |
| 101 | `    }` | Closes the current code/style block scope. |
| 102 | `` | Blank line used to separate logical blocks for readability. |
| 103 | `    this.loadingNotifications = true;` | Core implementation line contributing to the file behavior. |
| 104 | `    this.notificationService.getUnreadCount().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 105 | `      next: (count) => {` | Arrow function definition, often used for callbacks. |
| 106 | `        this.unreadCount = count;` | Core implementation line contributing to the file behavior. |
| 107 | `      },` | Core implementation line contributing to the file behavior. |
| 108 | `    });` | Core implementation line contributing to the file behavior. |
| 109 | `` | Blank line used to separate logical blocks for readability. |
| 110 | `    this.notificationService.getNotifications(1, 10).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 111 | `      next: (docs) => {` | Arrow function definition, often used for callbacks. |
| 112 | `        this.notifications = docs;` | Core implementation line contributing to the file behavior. |
| 113 | `        this.loadingNotifications = false;` | Core implementation line contributing to the file behavior. |
| 114 | `      },` | Core implementation line contributing to the file behavior. |
| 115 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 116 | `        this.loadingNotifications = false;` | Core implementation line contributing to the file behavior. |
| 117 | `      },` | Core implementation line contributing to the file behavior. |
| 118 | `    });` | Core implementation line contributing to the file behavior. |
| 119 | `  }` | Closes the current code/style block scope. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `  markAllNotificationsRead(): void {` | Begins a new code/style block scope. |
| 122 | `    this.notificationService.markAllRead().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 123 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 124 | `        this.unreadCount = 0;` | Core implementation line contributing to the file behavior. |
| 125 | `        this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 126 | `      },` | Core implementation line contributing to the file behavior. |
| 127 | `    });` | Core implementation line contributing to the file behavior. |
| 128 | `  }` | Closes the current code/style block scope. |
| 129 | `` | Blank line used to separate logical blocks for readability. |
| 130 | `  markNotificationRead(notification: AppNotification): void {` | Begins a new code/style block scope. |
| 131 | `    if (!notification?.id) return;` | Conditional branch: executes block only when condition is true. |
| 132 | `    this.notificationService.markOneRead(notification.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 133 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 134 | `        this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 135 | `      },` | Core implementation line contributing to the file behavior. |
| 136 | `    });` | Core implementation line contributing to the file behavior. |
| 137 | `  }` | Closes the current code/style block scope. |
| 138 | `` | Blank line used to separate logical blocks for readability. |
| 139 | `  onNotificationClick(notification: AppNotification): void {` | Begins a new code/style block scope. |
| 140 | `    this.markNotificationRead(notification);` | Core implementation line contributing to the file behavior. |
| 141 | `    const bookingId = notification?.['metadata']?.bookingId \|\| notification?.['referenceId'];` | Core implementation line contributing to the file behavior. |
| 142 | `    const isBookingNotice = String(notification?.['type'] ?? '').toUpperCase() === 'BOOKING';` | Declares a core TypeScript structure used by this module. |
| 143 | `    if (!bookingId \|\| !isBookingNotice) return;` | Conditional branch: executes block only when condition is true. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `    const eventKey = String(notification?.['metadata']?.eventKey ?? '').toLowerCase();` | Core implementation line contributing to the file behavior. |
| 146 | `    const bookingStatus = String(notification?.['metadata']?.bookingStatus ?? '').toUpperCase();` | Core implementation line contributing to the file behavior. |
| 147 | `` | Blank line used to separate logical blocks for readability. |
| 148 | `    if (` | Conditional branch: executes block only when condition is true. |
| 149 | `      this.isUserLoggedIn &&` | Core implementation line contributing to the file behavior. |
| 150 | `      (eventKey === 'notification.trainer-booking.accepted' \|\|` | Core implementation line contributing to the file behavior. |
| 151 | `        bookingStatus === 'ACCEPTED_PENDING_PAYMENT')` | Core implementation line contributing to the file behavior. |
| 152 | `    ) {` | Begins a new code/style block scope. |
| 153 | `      this.selectedPaymentNotification = notification;` | Core implementation line contributing to the file behavior. |
| 154 | `      this.paymentCheckoutError = null;` | Core implementation line contributing to the file behavior. |
| 155 | `      this.showBookingPaymentModal = true;` | Core implementation line contributing to the file behavior. |
| 156 | `      return;` | Core implementation line contributing to the file behavior. |
| 157 | `    }` | Closes the current code/style block scope. |
| 158 | `` | Blank line used to separate logical blocks for readability. |
| 159 | `    if (!this.isTrainerLoggedIn) return;` | Conditional branch: executes block only when condition is true. |
| 160 | `` | Blank line used to separate logical blocks for readability. |
| 161 | `    this.selectedBookingNotification = notification;` | Core implementation line contributing to the file behavior. |
| 162 | `    this.selectedBookingDetail = null;` | Core implementation line contributing to the file behavior. |
| 163 | `    this.bookingActionError = null;` | Core implementation line contributing to the file behavior. |
| 164 | `    this.showBookingRequestModal = true;` | Core implementation line contributing to the file behavior. |
| 165 | `` | Blank line used to separate logical blocks for readability. |
| 166 | `    this.trainerService.getTrainerMyBookings().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 167 | `      next: (bookings) => {` | Arrow function definition, often used for callbacks. |
| 168 | `        this.selectedBookingDetail = (bookings ?? []).find((b) => b?.id === bookingId) ?? null;` | Core implementation line contributing to the file behavior. |
| 169 | `      },` | Core implementation line contributing to the file behavior. |
| 170 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 171 | `        this.selectedBookingDetail = null;` | Core implementation line contributing to the file behavior. |
| 172 | `      },` | Core implementation line contributing to the file behavior. |
| 173 | `    });` | Core implementation line contributing to the file behavior. |
| 174 | `  }` | Closes the current code/style block scope. |
| 175 | `` | Blank line used to separate logical blocks for readability. |
| 176 | `  closeBookingRequestModal(): void {` | Begins a new code/style block scope. |
| 177 | `    if (this.bookingActionLoading) return;` | Conditional branch: executes block only when condition is true. |
| 178 | `    this.showBookingRequestModal = false;` | Core implementation line contributing to the file behavior. |
| 179 | `    this.selectedBookingNotification = null;` | Core implementation line contributing to the file behavior. |
| 180 | `    this.selectedBookingDetail = null;` | Core implementation line contributing to the file behavior. |
| 181 | `    this.bookingActionError = null;` | Core implementation line contributing to the file behavior. |
| 182 | `  }` | Closes the current code/style block scope. |
| 183 | `` | Blank line used to separate logical blocks for readability. |
| 184 | `  closeBookingPaymentModal(): void {` | Begins a new code/style block scope. |
| 185 | `    if (this.paymentCheckoutLoading) return;` | Conditional branch: executes block only when condition is true. |
| 186 | `    this.showBookingPaymentModal = false;` | Core implementation line contributing to the file behavior. |
| 187 | `    this.selectedPaymentNotification = null;` | Core implementation line contributing to the file behavior. |
| 188 | `    this.paymentCheckoutError = null;` | Core implementation line contributing to the file behavior. |
| 189 | `  }` | Closes the current code/style block scope. |
| 190 | `` | Blank line used to separate logical blocks for readability. |
| 191 | `  private currentBookingId(): string {` | Begins a new code/style block scope. |
| 192 | `    return (` | Returns a value from the current function/method. |
| 193 | `      this.selectedBookingNotification?.['metadata']?.bookingId \|\|` | Core implementation line contributing to the file behavior. |
| 194 | `      this.selectedBookingNotification?.['referenceId'] \|\|` | Core implementation line contributing to the file behavior. |
| 195 | `      ''` | Core implementation line contributing to the file behavior. |
| 196 | `    );` | Closes a function/method call statement. |
| 197 | `  }` | Closes the current code/style block scope. |
| 198 | `` | Blank line used to separate logical blocks for readability. |
| 199 | `  private currentTrainerId(): string {` | Begins a new code/style block scope. |
| 200 | `    return this.selectedBookingDetail?.trainerId \|\| this.storage.getUserId() \|\| '';` | Returns a value from the current function/method. |
| 201 | `  }` | Closes the current code/style block scope. |
| 202 | `` | Blank line used to separate logical blocks for readability. |
| 203 | `  private currentMemberId(): string {` | Begins a new code/style block scope. |
| 204 | `    return this.selectedBookingDetail?.memberId \|\| this.selectedBookingDetail?.member?.id \|\| '';` | Returns a value from the current function/method. |
| 205 | `  }` | Closes the current code/style block scope. |
| 206 | `` | Blank line used to separate logical blocks for readability. |
| 207 | `  acceptBookingFromNotification(): void {` | Begins a new code/style block scope. |
| 208 | `    const bookingId = this.currentBookingId();` | Core implementation line contributing to the file behavior. |
| 209 | `    if (!bookingId \|\| this.bookingActionLoading) return;` | Conditional branch: executes block only when condition is true. |
| 210 | `` | Blank line used to separate logical blocks for readability. |
| 211 | `    this.bookingActionLoading = true;` | Core implementation line contributing to the file behavior. |
| 212 | `    this.bookingActionError = null;` | Core implementation line contributing to the file behavior. |
| 213 | `    this.trainerService.acceptTrainerBooking(bookingId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 214 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 215 | `        const trainerId = this.currentTrainerId();` | Core implementation line contributing to the file behavior. |
| 216 | `        const memberId = this.currentMemberId();` | Core implementation line contributing to the file behavior. |
| 217 | `        if (trainerId && memberId) {` | Conditional branch: executes block only when condition is true. |
| 218 | `          this.trainerService.createTrainerClientLink(trainerId, memberId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 219 | `            next: () => {` | Arrow function definition, often used for callbacks. |
| 220 | `              this.bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 221 | `              this.closeBookingRequestModal();` | Core implementation line contributing to the file behavior. |
| 222 | `              this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 223 | `            },` | Core implementation line contributing to the file behavior. |
| 224 | `            error: () => {` | Arrow function definition, often used for callbacks. |
| 225 | `              this.bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 226 | `              this.bookingActionError =` | Core implementation line contributing to the file behavior. |
| 227 | `                'Booking accepted, but linking this member to trainer clients failed.';` | Core implementation line contributing to the file behavior. |
| 228 | `            },` | Core implementation line contributing to the file behavior. |
| 229 | `          });` | Core implementation line contributing to the file behavior. |
| 230 | `          return;` | Core implementation line contributing to the file behavior. |
| 231 | `        }` | Closes the current code/style block scope. |
| 232 | `` | Blank line used to separate logical blocks for readability. |
| 233 | `        this.bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 234 | `        this.bookingActionError =` | Core implementation line contributing to the file behavior. |
| 235 | `          'Booking accepted, but member/trainer id was missing so client link was not created.';` | Core implementation line contributing to the file behavior. |
| 236 | `      },` | Core implementation line contributing to the file behavior. |
| 237 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 238 | `        this.bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 239 | `        this.bookingActionError = 'Could not accept this booking request.';` | Core implementation line contributing to the file behavior. |
| 240 | `      },` | Core implementation line contributing to the file behavior. |
| 241 | `    });` | Core implementation line contributing to the file behavior. |
| 242 | `  }` | Closes the current code/style block scope. |
| 243 | `` | Blank line used to separate logical blocks for readability. |
| 244 | `  rejectBookingFromNotification(): void {` | Begins a new code/style block scope. |
| 245 | `    const bookingId = this.currentBookingId();` | Core implementation line contributing to the file behavior. |
| 246 | `    if (!bookingId \|\| this.bookingActionLoading) return;` | Conditional branch: executes block only when condition is true. |
| 247 | `` | Blank line used to separate logical blocks for readability. |
| 248 | `    this.bookingActionLoading = true;` | Core implementation line contributing to the file behavior. |
| 249 | `    this.bookingActionError = null;` | Core implementation line contributing to the file behavior. |
| 250 | `    this.trainerService.rejectTrainerBooking(bookingId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 251 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 252 | `        this.bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 253 | `        this.closeBookingRequestModal();` | Core implementation line contributing to the file behavior. |
| 254 | `        this.loadNotifications();` | Core implementation line contributing to the file behavior. |
| 255 | `      },` | Core implementation line contributing to the file behavior. |
| 256 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 257 | `        this.bookingActionLoading = false;` | Core implementation line contributing to the file behavior. |
| 258 | `        this.bookingActionError = 'Could not reject this booking request.';` | Core implementation line contributing to the file behavior. |
| 259 | `      },` | Core implementation line contributing to the file behavior. |
| 260 | `    });` | Core implementation line contributing to the file behavior. |
| 261 | `  }` | Closes the current code/style block scope. |
| 262 | `` | Blank line used to separate logical blocks for readability. |
| 263 | `  bookingStartAt(): string {` | Begins a new code/style block scope. |
| 264 | `    return (` | Returns a value from the current function/method. |
| 265 | `      this.selectedBookingNotification?.['metadata']?.startAt \|\|` | Core implementation line contributing to the file behavior. |
| 266 | `      this.selectedBookingDetail?.startAt \|\|` | Core implementation line contributing to the file behavior. |
| 267 | `      ''` | Core implementation line contributing to the file behavior. |
| 268 | `    );` | Closes a function/method call statement. |
| 269 | `  }` | Closes the current code/style block scope. |
| 270 | `` | Blank line used to separate logical blocks for readability. |
| 271 | `  bookingEndAt(): string {` | Begins a new code/style block scope. |
| 272 | `    return (` | Returns a value from the current function/method. |
| 273 | `      this.selectedBookingNotification?.['metadata']?.endAt \|\|` | Core implementation line contributing to the file behavior. |
| 274 | `      this.selectedBookingDetail?.endAt \|\|` | Core implementation line contributing to the file behavior. |
| 275 | `      ''` | Core implementation line contributing to the file behavior. |
| 276 | `    );` | Closes a function/method call statement. |
| 277 | `  }` | Closes the current code/style block scope. |
| 278 | `` | Blank line used to separate logical blocks for readability. |
| 279 | `  paymentBookingStartAt(): string {` | Begins a new code/style block scope. |
| 280 | `    return this.selectedPaymentNotification?.['metadata']?.startAt \|\| '';` | Returns a value from the current function/method. |
| 281 | `  }` | Closes the current code/style block scope. |
| 282 | `` | Blank line used to separate logical blocks for readability. |
| 283 | `  paymentBookingEndAt(): string {` | Begins a new code/style block scope. |
| 284 | `    return this.selectedPaymentNotification?.['metadata']?.endAt \|\| '';` | Returns a value from the current function/method. |
| 285 | `  }` | Closes the current code/style block scope. |
| 286 | `` | Blank line used to separate logical blocks for readability. |
| 287 | `  paymentTargetBookingId(): string {` | Begins a new code/style block scope. |
| 288 | `    return (` | Returns a value from the current function/method. |
| 289 | `      this.selectedPaymentNotification?.['metadata']?.bookingId \|\|` | Core implementation line contributing to the file behavior. |
| 290 | `      this.selectedPaymentNotification?.['referenceId'] \|\|` | Core implementation line contributing to the file behavior. |
| 291 | `      this.selectedPaymentNotification?.id \|\|` | Core implementation line contributing to the file behavior. |
| 292 | `      ''` | Core implementation line contributing to the file behavior. |
| 293 | `    );` | Closes a function/method call statement. |
| 294 | `  }` | Closes the current code/style block scope. |
| 295 | `` | Blank line used to separate logical blocks for readability. |
| 296 | `  startTrainerBookingCheckout(): void {` | Begins a new code/style block scope. |
| 297 | `    const targetId = this.paymentTargetBookingId();` | Core implementation line contributing to the file behavior. |
| 298 | `    if (!targetId \|\| this.paymentCheckoutLoading) return;` | Conditional branch: executes block only when condition is true. |
| 299 | `    if (!isPlatformBrowser(this.platformId)) return;` | Conditional branch: executes block only when condition is true. |
| 300 | `` | Blank line used to separate logical blocks for readability. |
| 301 | `    this.paymentCheckoutLoading = true;` | Core implementation line contributing to the file behavior. |
| 302 | `    this.paymentCheckoutError = null;` | Core implementation line contributing to the file behavior. |
| 303 | `    this.notificationService` | Core implementation line contributing to the file behavior. |
| 304 | `      .checkoutPayment({` | Begins a new code/style block scope. |
| 305 | `        targetType: 'TRAINER_BOOKING',` | Core implementation line contributing to the file behavior. |
| 306 | `        targetId,` | Core implementation line contributing to the file behavior. |
| 307 | `        amount: 50000,` | Core implementation line contributing to the file behavior. |
| 308 | `        currency: 'VND',` | Core implementation line contributing to the file behavior. |
| 309 | `      })` | Core implementation line contributing to the file behavior. |
| 310 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 311 | `        next: (res) => {` | Arrow function definition, often used for callbacks. |
| 312 | `          this.paymentCheckoutLoading = false;` | Core implementation line contributing to the file behavior. |
| 313 | `          const checkoutUrl = res?.checkoutUrl ?? res?.data?.checkoutUrl;` | Core implementation line contributing to the file behavior. |
| 314 | `          if (checkoutUrl) {` | Conditional branch: executes block only when condition is true. |
| 315 | `            window.open(checkoutUrl, '_blank');` | Core implementation line contributing to the file behavior. |
| 316 | `            this.closeBookingPaymentModal();` | Core implementation line contributing to the file behavior. |
| 317 | `            return;` | Core implementation line contributing to the file behavior. |
| 318 | `          }` | Closes the current code/style block scope. |
| 319 | `          this.paymentCheckoutError = 'Checkout URL not returned from payment API.';` | Core implementation line contributing to the file behavior. |
| 320 | `        },` | Core implementation line contributing to the file behavior. |
| 321 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 322 | `          this.paymentCheckoutLoading = false;` | Core implementation line contributing to the file behavior. |
| 323 | `          this.paymentCheckoutError = 'Could not start checkout for this trainer booking.';` | Core implementation line contributing to the file behavior. |
| 324 | `        },` | Core implementation line contributing to the file behavior. |
| 325 | `      });` | Core implementation line contributing to the file behavior. |
| 326 | `  }` | Closes the current code/style block scope. |
| 327 | `` | Blank line used to separate logical blocks for readability. |
| 328 | `  private handleStripeReturnFallback(): void {` | Begins a new code/style block scope. |
| 329 | `    if (!isPlatformBrowser(this.platformId)) return;` | Conditional branch: executes block only when condition is true. |
| 330 | `` | Blank line used to separate logical blocks for readability. |
| 331 | `    const currentPath = window.location.pathname.toLowerCase();` | Core implementation line contributing to the file behavior. |
| 332 | `    const isResultPath =` | Core implementation line contributing to the file behavior. |
| 333 | `      currentPath.startsWith('/payment/success') \|\|` | Core implementation line contributing to the file behavior. |
| 334 | `      currentPath.startsWith('/payment/cancel');` | Core implementation line contributing to the file behavior. |
| 335 | `    if (isResultPath) return;` | Conditional branch: executes block only when condition is true. |
| 336 | `` | Blank line used to separate logical blocks for readability. |
| 337 | `    const params = new URLSearchParams(window.location.search);` | Core implementation line contributing to the file behavior. |
| 338 | `    const sessionId = params.get('session_id');` | Core implementation line contributing to the file behavior. |
| 339 | `    const canceled = params.get('canceled');` | Core implementation line contributing to the file behavior. |
| 340 | `    const redirectStatus = (params.get('redirect_status') \|\| '').toLowerCase();` | Core implementation line contributing to the file behavior. |
| 341 | `` | Blank line used to separate logical blocks for readability. |
| 342 | `    if (sessionId) {` | Conditional branch: executes block only when condition is true. |
| 343 | `      this.router.navigate(['/payment/success'], { queryParams: { session_id: sessionId } });` | CSS declaration assigning a style property value. |
| 344 | `      return;` | Core implementation line contributing to the file behavior. |
| 345 | `    }` | Closes the current code/style block scope. |
| 346 | `` | Blank line used to separate logical blocks for readability. |
| 347 | `    if (canceled === 'true' \|\| redirectStatus === 'failed' \|\| redirectStatus === 'canceled') {` | Conditional branch: executes block only when condition is true. |
| 348 | `      this.router.navigate(['/payment/cancel']);` | Core implementation line contributing to the file behavior. |
| 349 | `    }` | Closes the current code/style block scope. |
| 350 | `  }` | Closes the current code/style block scope. |
| 351 | `` | Blank line used to separate logical blocks for readability. |
| 352 | `  notificationText(notification: AppNotification): string {` | Begins a new code/style block scope. |
| 353 | `    return (` | Returns a value from the current function/method. |
| 354 | `      notification.message \|\|` | Core implementation line contributing to the file behavior. |
| 355 | `      notification.content \|\|` | Core implementation line contributing to the file behavior. |
| 356 | `      notification.title \|\|` | Core implementation line contributing to the file behavior. |
| 357 | `      'Notification'` | Core implementation line contributing to the file behavior. |
| 358 | `    );` | Closes a function/method call statement. |
| 359 | `  }` | Closes the current code/style block scope. |
| 360 | `` | Blank line used to separate logical blocks for readability. |
| 361 | `  ` | Blank line used to separate logical blocks for readability. |
| 362 | `  onSignInClick(): void {` | Begins a new code/style block scope. |
| 363 | `    if (!this.isUserLoggedIn && !this.isAdminLoggedIn && !this.isTrainerLoggedIn) {` | Conditional branch: executes block only when condition is true. |
| 364 | `      this.router.navigate(['/login']);  ` | Core implementation line contributing to the file behavior. |
| 365 | `    }` | Closes the current code/style block scope. |
| 366 | `  }` | Closes the current code/style block scope. |
| 367 | `` | Blank line used to separate logical blocks for readability. |
| 368 | `  ` | Blank line used to separate logical blocks for readability. |
| 369 | `  onSignOutClick(): void {` | Begins a new code/style block scope. |
| 370 | `    this.storage.signOut();` | Core implementation line contributing to the file behavior. |
| 371 | `    this.storage.loggedInSubject$.next(false);` | Core implementation line contributing to the file behavior. |
| 372 | `    this.isUserLoggedIn = false;` | Core implementation line contributing to the file behavior. |
| 373 | `    this.isAdminLoggedIn = false;` | Core implementation line contributing to the file behavior. |
| 374 | `    this.isTrainerLoggedIn = false;` | Core implementation line contributing to the file behavior. |
| 375 | `    this.userName = '';` | Core implementation line contributing to the file behavior. |
| 376 | `    this.unreadCount = 0;` | Core implementation line contributing to the file behavior. |
| 377 | `    this.notifications = [];` | Core implementation line contributing to the file behavior. |
| 378 | `    this.showNotifications = false;` | Core implementation line contributing to the file behavior. |
| 379 | `    this.router.navigate(['/home']);` | Core implementation line contributing to the file behavior. |
| 380 | `  }` | Closes the current code/style block scope. |
| 381 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.