# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-book.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-book.component.ts`
- **Total lines:** `48`
- **Non-empty lines:** `39`
- **Import statements:** `8`
- **Class-like declarations found:** `3`
- **Function/method-like signatures found (approx):** `5`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { OnInit } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { BookingService } from '../../../../services/booking.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { StorageService } from '../../../../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { BookingModeSelectorComponent } from './booking-mode-selector/booking-mode-selector.component';` | Imports a dependency so this file can use external symbols. |
| 7 | `import { BookingItemListComponent } from './booking-item-list/booking-item-list.component';` | Imports a dependency so this file can use external symbols. |
| 8 | `import { MembershipService } from '../../../../services/membership.service';` | Imports a dependency so this file can use external symbols. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `@Component({` | Angular decorator declaring metadata for this component. |
| 11 | `  selector: 'app-booking-book',` | Core implementation line contributing to the file behavior. |
| 12 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 13 | `  imports: [CommonModule, BookingModeSelectorComponent, BookingItemListComponent],` | Core implementation line contributing to the file behavior. |
| 14 | `  templateUrl: './booking-book.component.html',` | Core implementation line contributing to the file behavior. |
| 15 | `  styleUrls: ['./booking-book.component.css']` | Core implementation line contributing to the file behavior. |
| 16 | `})` | Core implementation line contributing to the file behavior. |
| 17 | `export class BookingBookComponent implements OnInit {` | Exports symbols so other files can import this logic. |
| 18 | `  selectedBranch: any = { id: 'default', name: 'GymMS' };` | CSS declaration assigning a style property value. |
| 19 | `  mode: 'class' \| 'trainer' \| null = null;` | Declares a core TypeScript structure used by this module. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `   hasMembership = false;` | Core implementation line contributing to the file behavior. |
| 22 | `  userId!: string;` | CSS declaration assigning a style property value. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `  constructor(private bookingService: BookingService, private membershipService: MembershipService, private storage: StorageService) {}` | Class constructor for dependency injection and initial setup. |
| 25 | `` | Blank line used to separate logical blocks for readability. |
| 26 | `  ngOnInit() {` | Angular lifecycle hook that runs after component initialization. |
| 27 | `    this.userId = this.storage.getUserId();` | Core implementation line contributing to the file behavior. |
| 28 | `` | Blank line used to separate logical blocks for readability. |
| 29 | `    this.membershipService` | Core implementation line contributing to the file behavior. |
| 30 | `      .getUserMembership()` | Core implementation line contributing to the file behavior. |
| 31 | `      .subscribe(m => this.hasMembership = !!m);` | Subscribes to an Observable to react to async emissions. |
| 32 | `  }` | Closes the current code/style block scope. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `  onBranchSelected(branch: any) {` | Begins a new code/style block scope. |
| 35 | `    this.selectedBranch = branch;` | Core implementation line contributing to the file behavior. |
| 36 | `    this.mode = null;` | Core implementation line contributing to the file behavior. |
| 37 | `  }` | Closes the current code/style block scope. |
| 38 | `` | Blank line used to separate logical blocks for readability. |
| 39 | `  onModeSelected(mode: 'class' \| 'trainer') {` | Declares a core TypeScript structure used by this module. |
| 40 | `    if (!this.hasMembership) return;` | Conditional branch: executes block only when condition is true. |
| 41 | `    this.mode = mode;` | Core implementation line contributing to the file behavior. |
| 42 | `  }` | Closes the current code/style block scope. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `  reset() {` | Begins a new code/style block scope. |
| 45 | `    this.mode = null;` | Core implementation line contributing to the file behavior. |
| 46 | `  }` | Closes the current code/style block scope. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.