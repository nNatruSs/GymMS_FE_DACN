# Explanation: `src/app/modules/users/dashboard/pages/bookings/history/booking-history.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/history/booking-history.component.ts`
- **Total lines:** `228`
- **Non-empty lines:** `202`
- **Import statements:** `7`
- **Class-like declarations found:** `7`
- **Function/method-like signatures found (approx):** `1`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `import { BookingService } from '../../../../services/booking.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { StorageService } from '../../../../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { OnInit } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 7 | `import { FormsModule } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 8 | `import { ConfirmDialogService } from '../../../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `@Component({` | Angular decorator declaring metadata for this component. |
| 11 | `  selector: 'app-booking-history',` | Core implementation line contributing to the file behavior. |
| 12 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 13 | `  imports: [CommonModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 14 | `  templateUrl: './booking-history.component.html',` | Core implementation line contributing to the file behavior. |
| 15 | `  styleUrls: ['./booking-history.component.css']` | Core implementation line contributing to the file behavior. |
| 16 | `})` | Core implementation line contributing to the file behavior. |
| 17 | `export class BookingHistoryComponent implements OnInit{` | Exports symbols so other files can import this logic. |
| 18 | `  mode: 'class' \| 'trainer' = 'class';` | Declares a core TypeScript structure used by this module. |
| 19 | `  classBookings: any[] = [];` | CSS declaration assigning a style property value. |
| 20 | `  trainerBookings: any[] = [];` | CSS declaration assigning a style property value. |
| 21 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 22 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `  ` | Blank line used to separate logical blocks for readability. |
| 25 | `  page = 1;` | Core implementation line contributing to the file behavior. |
| 26 | `  limit = 10;` | Core implementation line contributing to the file behavior. |
| 27 | `  sort: 'asc' \| 'desc' = 'desc';` | CSS declaration assigning a style property value. |
| 28 | `  q = '';` | Core implementation line contributing to the file behavior. |
| 29 | `  totalPages = 1;` | Core implementation line contributing to the file behavior. |
| 30 | `  totalDocs = 0;` | Core implementation line contributing to the file behavior. |
| 31 | `  hasNext = false;` | Core implementation line contributing to the file behavior. |
| 32 | `  hasPrev = false;` | Core implementation line contributing to the file behavior. |
| 33 | `  selectedClassBooking: any \| null = null;` | CSS declaration assigning a style property value. |
| 34 | `  cancellingClassBooking = false;` | Core implementation line contributing to the file behavior. |
| 35 | `  selectedTrainerBooking: any \| null = null;` | CSS declaration assigning a style property value. |
| 36 | `  cancellingTrainerBooking = false;` | Core implementation line contributing to the file behavior. |
| 37 | `  trainerCancelReason = '';` | Core implementation line contributing to the file behavior. |
| 38 | `` | Blank line used to separate logical blocks for readability. |
| 39 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 40 | `    private bookingService: BookingService,` | Core implementation line contributing to the file behavior. |
| 41 | `    private storage: StorageService,` | Core implementation line contributing to the file behavior. |
| 42 | `    private confirmDialog: ConfirmDialogService` | Core implementation line contributing to the file behavior. |
| 43 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `` | Blank line used to separate logical blocks for readability. |
| 46 | `  ngOnInit() {` | Angular lifecycle hook that runs after component initialization. |
| 47 | `    this.loadClassBookings(1);` | Core implementation line contributing to the file behavior. |
| 48 | `  }` | Closes the current code/style block scope. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `  setMode(mode: 'class' \| 'trainer'): void {` | Declares a core TypeScript structure used by this module. |
| 51 | `    this.mode = mode;` | Core implementation line contributing to the file behavior. |
| 52 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 53 | `    if (mode === 'class') {` | Conditional branch: executes block only when condition is true. |
| 54 | `      this.loadClassBookings(1);` | Core implementation line contributing to the file behavior. |
| 55 | `    } else {` | Begins a new code/style block scope. |
| 56 | `      this.loadTrainerBookings();` | Core implementation line contributing to the file behavior. |
| 57 | `    }` | Closes the current code/style block scope. |
| 58 | `  }` | Closes the current code/style block scope. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `  loadClassBookings(page = this.page): void {` | Begins a new code/style block scope. |
| 61 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 62 | `    this.page = page;` | Core implementation line contributing to the file behavior. |
| 63 | `    this.bookingService` | Core implementation line contributing to the file behavior. |
| 64 | `      .getClassBookingsList({` | Begins a new code/style block scope. |
| 65 | `        page: this.page,` | Core implementation line contributing to the file behavior. |
| 66 | `        limit: this.limit,` | Core implementation line contributing to the file behavior. |
| 67 | `        sort: this.sort,` | Core implementation line contributing to the file behavior. |
| 68 | `        q: this.q \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 69 | `      })` | Core implementation line contributing to the file behavior. |
| 70 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 71 | `        next: (res) => {` | Arrow function definition, often used for callbacks. |
| 72 | `          const data = res?.data ?? {};` | Core implementation line contributing to the file behavior. |
| 73 | `          this.classBookings = data?.docs ?? [];` | Core implementation line contributing to the file behavior. |
| 74 | `          this.totalDocs = Number(data?.totalDocs ?? this.classBookings.length);` | Core implementation line contributing to the file behavior. |
| 75 | `          this.totalPages = Number(data?.totalPages ?? 1);` | Core implementation line contributing to the file behavior. |
| 76 | `          this.hasNext = Boolean(data?.hasNext);` | Core implementation line contributing to the file behavior. |
| 77 | `          this.hasPrev = Boolean(data?.hasPrev);` | Core implementation line contributing to the file behavior. |
| 78 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 79 | `        },` | Core implementation line contributing to the file behavior. |
| 80 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 81 | `          ` | Blank line used to separate logical blocks for readability. |
| 82 | `          this.bookingService.getMyClassBookings().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 83 | `            next: (res) => {` | Arrow function definition, often used for callbacks. |
| 84 | `              const allRows = (res?.data ?? []) as any[];` | Core implementation line contributing to the file behavior. |
| 85 | `              const filtered = this.q` | Core implementation line contributing to the file behavior. |
| 86 | `                ? allRows.filter((x) =>` | Arrow function definition, often used for callbacks. |
| 87 | `                    String(x?.classSchedule?.category ?? '')` | Core implementation line contributing to the file behavior. |
| 88 | `                      .toLowerCase()` | Core implementation line contributing to the file behavior. |
| 89 | `                      .includes(this.q.toLowerCase())` | Core implementation line contributing to the file behavior. |
| 90 | `                  )` | Core implementation line contributing to the file behavior. |
| 91 | `                : allRows;` | CSS declaration assigning a style property value. |
| 92 | `              const sorted = [...filtered].sort((a, b) => {` | Arrow function definition, often used for callbacks. |
| 93 | `                const aTime = new Date(a?.createdAt \|\| 0).getTime();` | Core implementation line contributing to the file behavior. |
| 94 | `                const bTime = new Date(b?.createdAt \|\| 0).getTime();` | Core implementation line contributing to the file behavior. |
| 95 | `                return this.sort === 'asc' ? aTime - bTime : bTime - aTime;` | Returns a value from the current function/method. |
| 96 | `              });` | Core implementation line contributing to the file behavior. |
| 97 | `              const start = (this.page - 1) * this.limit;` | Core implementation line contributing to the file behavior. |
| 98 | `              const end = start + this.limit;` | Core implementation line contributing to the file behavior. |
| 99 | `              this.classBookings = sorted.slice(start, end);` | Core implementation line contributing to the file behavior. |
| 100 | `              this.totalDocs = sorted.length;` | Core implementation line contributing to the file behavior. |
| 101 | `              this.totalPages = Math.max(Math.ceil(sorted.length / this.limit), 1);` | Core implementation line contributing to the file behavior. |
| 102 | `              this.hasPrev = this.page > 1;` | Core implementation line contributing to the file behavior. |
| 103 | `              this.hasNext = this.page < this.totalPages;` | Core implementation line contributing to the file behavior. |
| 104 | `              this.loading = false;` | Core implementation line contributing to the file behavior. |
| 105 | `              this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 106 | `            },` | Core implementation line contributing to the file behavior. |
| 107 | `            error: () => {` | Arrow function definition, often used for callbacks. |
| 108 | `              this.classBookings = [];` | Core implementation line contributing to the file behavior. |
| 109 | `              this.loading = false;` | Core implementation line contributing to the file behavior. |
| 110 | `              this.errorMessage = 'Could not load class booking history.';` | Declares a core TypeScript structure used by this module. |
| 111 | `            },` | Core implementation line contributing to the file behavior. |
| 112 | `          });` | Core implementation line contributing to the file behavior. |
| 113 | `        },` | Core implementation line contributing to the file behavior. |
| 114 | `      });` | Core implementation line contributing to the file behavior. |
| 115 | `  }` | Closes the current code/style block scope. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `  loadTrainerBookings(): void {` | Begins a new code/style block scope. |
| 118 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 119 | `    this.bookingService.getMyTrainerBookings().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 120 | `      next: (res) => {` | Arrow function definition, often used for callbacks. |
| 121 | `        this.trainerBookings = res?.data ?? [];` | Core implementation line contributing to the file behavior. |
| 122 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 123 | `      },` | Core implementation line contributing to the file behavior. |
| 124 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 125 | `        this.trainerBookings = [];` | Core implementation line contributing to the file behavior. |
| 126 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 127 | `        this.errorMessage = 'Could not load personal session history.';` | Core implementation line contributing to the file behavior. |
| 128 | `      },` | Core implementation line contributing to the file behavior. |
| 129 | `    });` | Core implementation line contributing to the file behavior. |
| 130 | `  }` | Closes the current code/style block scope. |
| 131 | `` | Blank line used to separate logical blocks for readability. |
| 132 | `  applyClassFilters(): void {` | Begins a new code/style block scope. |
| 133 | `    this.loadClassBookings(1);` | Core implementation line contributing to the file behavior. |
| 134 | `  }` | Closes the current code/style block scope. |
| 135 | `` | Blank line used to separate logical blocks for readability. |
| 136 | `  prevPage(): void {` | Begins a new code/style block scope. |
| 137 | `    if (!this.hasPrev \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 138 | `    this.loadClassBookings(this.page - 1);` | Core implementation line contributing to the file behavior. |
| 139 | `  }` | Closes the current code/style block scope. |
| 140 | `` | Blank line used to separate logical blocks for readability. |
| 141 | `  nextPage(): void {` | Begins a new code/style block scope. |
| 142 | `    if (!this.hasNext \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 143 | `    this.loadClassBookings(this.page + 1);` | Core implementation line contributing to the file behavior. |
| 144 | `  }` | Closes the current code/style block scope. |
| 145 | `` | Blank line used to separate logical blocks for readability. |
| 146 | `  displayTime(value: string): string {` | Begins a new code/style block scope. |
| 147 | `    if (!value) return '-';` | Conditional branch: executes block only when condition is true. |
| 148 | `    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);` | Conditional branch: executes block only when condition is true. |
| 149 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 150 | `    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(11, 16);` | Conditional branch: executes block only when condition is true. |
| 151 | `    return value.slice(0, 5);` | Returns a value from the current function/method. |
| 152 | `  }` | Closes the current code/style block scope. |
| 153 | `` | Blank line used to separate logical blocks for readability. |
| 154 | `  openClassBookingDetail(booking: any): void {` | Begins a new code/style block scope. |
| 155 | `    this.selectedClassBooking = booking;` | Core implementation line contributing to the file behavior. |
| 156 | `  }` | Closes the current code/style block scope. |
| 157 | `` | Blank line used to separate logical blocks for readability. |
| 158 | `  closeClassBookingDetail(): void {` | Begins a new code/style block scope. |
| 159 | `    if (this.cancellingClassBooking) return;` | Conditional branch: executes block only when condition is true. |
| 160 | `    this.selectedClassBooking = null;` | Core implementation line contributing to the file behavior. |
| 161 | `  }` | Closes the current code/style block scope. |
| 162 | `` | Blank line used to separate logical blocks for readability. |
| 163 | `  async cancelSelectedClassBooking(): Promise<void> {` | Begins a new code/style block scope. |
| 164 | `    const bookingId = this.selectedClassBooking?.id;` | Core implementation line contributing to the file behavior. |
| 165 | `    if (!bookingId \|\| this.cancellingClassBooking) return;` | Conditional branch: executes block only when condition is true. |
| 166 | `    const confirmed = await this.confirmDialog.confirm('Are you sure you want to cancel this class booking?', {` | Declares a core TypeScript structure used by this module. |
| 167 | `      title: 'Confirm Cancel Class Booking',` | Core implementation line contributing to the file behavior. |
| 168 | `      confirmText: 'Cancel Booking',` | Core implementation line contributing to the file behavior. |
| 169 | `    });` | Core implementation line contributing to the file behavior. |
| 170 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 171 | `` | Blank line used to separate logical blocks for readability. |
| 172 | `    this.cancellingClassBooking = true;` | Core implementation line contributing to the file behavior. |
| 173 | `    this.bookingService.cancelClassBooking(bookingId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 174 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 175 | `        this.cancellingClassBooking = false;` | Core implementation line contributing to the file behavior. |
| 176 | `        this.selectedClassBooking = null;` | Core implementation line contributing to the file behavior. |
| 177 | `        this.loadClassBookings(this.page);` | Core implementation line contributing to the file behavior. |
| 178 | `      },` | Core implementation line contributing to the file behavior. |
| 179 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 180 | `        this.cancellingClassBooking = false;` | Core implementation line contributing to the file behavior. |
| 181 | `        this.errorMessage = 'Could not cancel class booking.';` | Declares a core TypeScript structure used by this module. |
| 182 | `      },` | Core implementation line contributing to the file behavior. |
| 183 | `    });` | Core implementation line contributing to the file behavior. |
| 184 | `  }` | Closes the current code/style block scope. |
| 185 | `` | Blank line used to separate logical blocks for readability. |
| 186 | `  bookingImage(booking: any): string {` | Begins a new code/style block scope. |
| 187 | `    return booking?.classSchedule?.imageUrl \|\| 'assets/logo.svg';` | Returns a value from the current function/method. |
| 188 | `  }` | Closes the current code/style block scope. |
| 189 | `` | Blank line used to separate logical blocks for readability. |
| 190 | `  openTrainerBookingDetail(booking: any): void {` | Begins a new code/style block scope. |
| 191 | `    this.selectedTrainerBooking = booking;` | Core implementation line contributing to the file behavior. |
| 192 | `    this.trainerCancelReason = '';` | Core implementation line contributing to the file behavior. |
| 193 | `  }` | Closes the current code/style block scope. |
| 194 | `` | Blank line used to separate logical blocks for readability. |
| 195 | `  closeTrainerBookingDetail(): void {` | Begins a new code/style block scope. |
| 196 | `    if (this.cancellingTrainerBooking) return;` | Conditional branch: executes block only when condition is true. |
| 197 | `    this.selectedTrainerBooking = null;` | Core implementation line contributing to the file behavior. |
| 198 | `  }` | Closes the current code/style block scope. |
| 199 | `` | Blank line used to separate logical blocks for readability. |
| 200 | `  canCancelTrainerBooking(booking: any): boolean {` | Begins a new code/style block scope. |
| 201 | `    const status = String(booking?.status ?? '').toLowerCase();` | Core implementation line contributing to the file behavior. |
| 202 | `    return !['cancelled', 'completed', 'rejected'].includes(status);` | Returns a value from the current function/method. |
| 203 | `  }` | Closes the current code/style block scope. |
| 204 | `` | Blank line used to separate logical blocks for readability. |
| 205 | `  async cancelSelectedTrainerBooking(): Promise<void> {` | Begins a new code/style block scope. |
| 206 | `    const bookingId = this.selectedTrainerBooking?.id;` | Core implementation line contributing to the file behavior. |
| 207 | `    if (!bookingId \|\| this.cancellingTrainerBooking \|\| !this.canCancelTrainerBooking(this.selectedTrainerBooking)) return;` | Conditional branch: executes block only when condition is true. |
| 208 | `    const confirmed = await this.confirmDialog.confirm('Are you sure you want to cancel this trainer booking?', {` | Begins a new code/style block scope. |
| 209 | `      title: 'Confirm Cancel Trainer Booking',` | Core implementation line contributing to the file behavior. |
| 210 | `      confirmText: 'Cancel Booking',` | Core implementation line contributing to the file behavior. |
| 211 | `    });` | Core implementation line contributing to the file behavior. |
| 212 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 213 | `` | Blank line used to separate logical blocks for readability. |
| 214 | `    this.cancellingTrainerBooking = true;` | Core implementation line contributing to the file behavior. |
| 215 | `    this.bookingService.cancelTrainerBooking(bookingId, this.trainerCancelReason?.trim() \|\| undefined).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 216 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 217 | `        this.cancellingTrainerBooking = false;` | Core implementation line contributing to the file behavior. |
| 218 | `        this.selectedTrainerBooking = null;` | Core implementation line contributing to the file behavior. |
| 219 | `        this.loadTrainerBookings();` | Core implementation line contributing to the file behavior. |
| 220 | `      },` | Core implementation line contributing to the file behavior. |
| 221 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 222 | `        this.cancellingTrainerBooking = false;` | Core implementation line contributing to the file behavior. |
| 223 | `        this.errorMessage = 'Could not cancel trainer booking.';` | Core implementation line contributing to the file behavior. |
| 224 | `      },` | Core implementation line contributing to the file behavior. |
| 225 | `    });` | Core implementation line contributing to the file behavior. |
| 226 | `  }` | Closes the current code/style block scope. |
| 227 | `}` | Closes the current code/style block scope. |
| 228 | `` | Blank line used to separate logical blocks for readability. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.