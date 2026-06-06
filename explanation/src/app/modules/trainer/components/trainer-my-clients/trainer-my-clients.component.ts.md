# Explanation: `src/app/modules/trainer/components/trainer-my-clients/trainer-my-clients.component.ts`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-my-clients/trainer-my-clients.component.ts`
- **Total lines:** `135`
- **Non-empty lines:** `122`
- **Import statements:** `4`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { TrainerClientLinkView, TrainerService } from '../../services/trainer.service';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `@Component({` | Angular decorator declaring metadata for this component. |
| 7 | `  selector: 'app-trainer-my-clients',` | Core implementation line contributing to the file behavior. |
| 8 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 9 | `  imports: [CommonModule],` | Core implementation line contributing to the file behavior. |
| 10 | `  templateUrl: './trainer-my-clients.component.html',` | Core implementation line contributing to the file behavior. |
| 11 | `  styleUrl: './trainer-my-clients.component.css',` | Core implementation line contributing to the file behavior. |
| 12 | `})` | Core implementation line contributing to the file behavior. |
| 13 | `export class TrainerMyClientsComponent {` | Exports symbols so other files can import this logic. |
| 14 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 15 | `  loadingBookings = true;` | Core implementation line contributing to the file behavior. |
| 16 | `  errorMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 17 | `  actionMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 18 | `  clients: TrainerClientLinkView[] = [];` | CSS declaration assigning a style property value. |
| 19 | `  bookings: any[] = [];` | CSS declaration assigning a style property value. |
| 20 | `  completingBookingId: string \| null = null;` | CSS declaration assigning a style property value. |
| 21 | `` | Blank line used to separate logical blocks for readability. |
| 22 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 23 | `    private trainerService: TrainerService,` | Core implementation line contributing to the file behavior. |
| 24 | `    private confirmDialog: ConfirmDialogService` | Core implementation line contributing to the file behavior. |
| 25 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 28 | `    this.loadClients();` | Core implementation line contributing to the file behavior. |
| 29 | `    this.loadBookings();` | Core implementation line contributing to the file behavior. |
| 30 | `  }` | Closes the current code/style block scope. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `  loadClients(): void {` | Begins a new code/style block scope. |
| 33 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 34 | `    this.trainerService.listTrainerClients().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 35 | `      next: (data) => {` | Arrow function definition, often used for callbacks. |
| 36 | `        this.clients = data;` | Core implementation line contributing to the file behavior. |
| 37 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 38 | `      },` | Core implementation line contributing to the file behavior. |
| 39 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 40 | `        this.errorMessage = 'Could not load your clients.';` | Core implementation line contributing to the file behavior. |
| 41 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 42 | `      },` | Core implementation line contributing to the file behavior. |
| 43 | `    });` | Core implementation line contributing to the file behavior. |
| 44 | `  }` | Closes the current code/style block scope. |
| 45 | `` | Blank line used to separate logical blocks for readability. |
| 46 | `  loadBookings(): void {` | Begins a new code/style block scope. |
| 47 | `    this.loadingBookings = true;` | Core implementation line contributing to the file behavior. |
| 48 | `    this.trainerService.getTrainerMyBookings().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 49 | `      next: (rows) => {` | Arrow function definition, often used for callbacks. |
| 50 | `        this.bookings = rows ?? [];` | Core implementation line contributing to the file behavior. |
| 51 | `        this.loadingBookings = false;` | Core implementation line contributing to the file behavior. |
| 52 | `      },` | Core implementation line contributing to the file behavior. |
| 53 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 54 | `        this.bookings = [];` | Core implementation line contributing to the file behavior. |
| 55 | `        this.loadingBookings = false;` | Core implementation line contributing to the file behavior. |
| 56 | `      },` | Core implementation line contributing to the file behavior. |
| 57 | `    });` | Core implementation line contributing to the file behavior. |
| 58 | `  }` | Closes the current code/style block scope. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `  canCompleteBooking(booking: any): boolean {` | Begins a new code/style block scope. |
| 61 | `    const status = String(booking?.status ?? '').toLowerCase();` | Core implementation line contributing to the file behavior. |
| 62 | `    if (status === 'accepted_pending_payment') return false;` | Conditional branch: executes block only when condition is true. |
| 63 | `    if (status.includes('pending')) return false;` | Conditional branch: executes block only when condition is true. |
| 64 | `    return !['completed', 'cancelled', 'rejected'].includes(status);` | Returns a value from the current function/method. |
| 65 | `  }` | Closes the current code/style block scope. |
| 66 | `` | Blank line used to separate logical blocks for readability. |
| 67 | `  private resolveLinkForBooking(booking: any): TrainerClientLinkView \| null {` | Begins a new code/style block scope. |
| 68 | `    const memberId = booking?.memberId \|\| booking?.member?.id;` | Core implementation line contributing to the file behavior. |
| 69 | `    if (!memberId) return null;` | Conditional branch: executes block only when condition is true. |
| 70 | `    return this.clients.find((x) => x.memberId === memberId \|\| x.member?.id === memberId) ?? null;` | Returns a value from the current function/method. |
| 71 | `  }` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `  async completeSession(booking: any): Promise<void> {` | Begins a new code/style block scope. |
| 74 | `    if (!booking?.id \|\| this.completingBookingId \|\| !this.canCompleteBooking(booking)) return;` | Conditional branch: executes block only when condition is true. |
| 75 | `    const confirmed = await this.confirmDialog.confirm('Mark this session as completed?', {` | Begins a new code/style block scope. |
| 76 | `      title: 'Confirm Complete Session',` | Core implementation line contributing to the file behavior. |
| 77 | `      confirmText: 'Complete',` | Core implementation line contributing to the file behavior. |
| 78 | `    });` | Core implementation line contributing to the file behavior. |
| 79 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 80 | `` | Blank line used to separate logical blocks for readability. |
| 81 | `    this.completingBookingId = booking.id;` | Core implementation line contributing to the file behavior. |
| 82 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 83 | `    this.actionMessage = null;` | Core implementation line contributing to the file behavior. |
| 84 | `` | Blank line used to separate logical blocks for readability. |
| 85 | `    this.trainerService.completeTrainerBooking(booking.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 86 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 87 | `        const finalizeEndLink = (link: TrainerClientLinkView \| null) => {` | Arrow function definition, often used for callbacks. |
| 88 | `          const trainerId = booking?.trainerId \|\| link?.trainerId \|\| '';` | Core implementation line contributing to the file behavior. |
| 89 | `          if (!trainerId \|\| !link?.id) {` | Conditional branch: executes block only when condition is true. |
| 90 | `            this.completingBookingId = null;` | Core implementation line contributing to the file behavior. |
| 91 | `            this.actionMessage = 'Session completed. No active client link found to end.';` | Core implementation line contributing to the file behavior. |
| 92 | `            this.loadBookings();` | Core implementation line contributing to the file behavior. |
| 93 | `            return;` | Core implementation line contributing to the file behavior. |
| 94 | `          }` | Closes the current code/style block scope. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `          this.trainerService.endTrainerClientLink(trainerId, link.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 97 | `            next: () => {` | Arrow function definition, often used for callbacks. |
| 98 | `              this.completingBookingId = null;` | Core implementation line contributing to the file behavior. |
| 99 | `              this.actionMessage = 'Session completed and trainer-client link ended.';` | Core implementation line contributing to the file behavior. |
| 100 | `              this.loadClients();` | Core implementation line contributing to the file behavior. |
| 101 | `              this.loadBookings();` | Core implementation line contributing to the file behavior. |
| 102 | `            },` | Core implementation line contributing to the file behavior. |
| 103 | `            error: () => {` | Arrow function definition, often used for callbacks. |
| 104 | `              this.completingBookingId = null;` | Core implementation line contributing to the file behavior. |
| 105 | `              this.errorMessage = 'Session completed, but ending trainer-client link failed.';` | Core implementation line contributing to the file behavior. |
| 106 | `              this.loadBookings();` | Core implementation line contributing to the file behavior. |
| 107 | `            },` | Core implementation line contributing to the file behavior. |
| 108 | `          });` | Core implementation line contributing to the file behavior. |
| 109 | `        };` | Core implementation line contributing to the file behavior. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `        const localLink = this.resolveLinkForBooking(booking);` | Core implementation line contributing to the file behavior. |
| 112 | `        if (localLink) {` | Conditional branch: executes block only when condition is true. |
| 113 | `          finalizeEndLink(localLink);` | Core implementation line contributing to the file behavior. |
| 114 | `          return;` | Core implementation line contributing to the file behavior. |
| 115 | `        }` | Closes the current code/style block scope. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `        this.trainerService.listTrainerClients().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 118 | `          next: (freshClients) => {` | Arrow function definition, often used for callbacks. |
| 119 | `            this.clients = freshClients ?? [];` | Core implementation line contributing to the file behavior. |
| 120 | `            finalizeEndLink(this.resolveLinkForBooking(booking));` | Core implementation line contributing to the file behavior. |
| 121 | `          },` | Core implementation line contributing to the file behavior. |
| 122 | `          error: () => {` | Arrow function definition, often used for callbacks. |
| 123 | `            this.completingBookingId = null;` | Core implementation line contributing to the file behavior. |
| 124 | `            this.actionMessage = 'Session completed. Could not refresh clients to end link.';` | Core implementation line contributing to the file behavior. |
| 125 | `            this.loadBookings();` | Core implementation line contributing to the file behavior. |
| 126 | `          },` | Core implementation line contributing to the file behavior. |
| 127 | `        });` | Core implementation line contributing to the file behavior. |
| 128 | `      },` | Core implementation line contributing to the file behavior. |
| 129 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 130 | `        this.completingBookingId = null;` | Core implementation line contributing to the file behavior. |
| 131 | `        this.errorMessage = 'Could not complete this session.';` | Core implementation line contributing to the file behavior. |
| 132 | `      },` | Core implementation line contributing to the file behavior. |
| 133 | `    });` | Core implementation line contributing to the file behavior. |
| 134 | `  }` | Closes the current code/style block scope. |
| 135 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.