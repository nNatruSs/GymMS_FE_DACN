# Explanation: `src/app/modules/users/dashboard/pages/membership-management/user-membership-management.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/membership-management/user-membership-management.component.ts`
- **Total lines:** `143`
- **Non-empty lines:** `125`
- **Import statements:** `4`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `7`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component, OnInit } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { StorageService } from '../../../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { MembershipService } from '../../../services/membership.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `@Component({` | Angular decorator declaring metadata for this component. |
| 7 | `  selector: 'app-user-membership-management',` | Core implementation line contributing to the file behavior. |
| 8 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 9 | `  imports: [CommonModule],` | Core implementation line contributing to the file behavior. |
| 10 | `  templateUrl: './user-membership-management.component.html',` | Core implementation line contributing to the file behavior. |
| 11 | `  styleUrls: ['./user-membership-management.component.css']` | Core implementation line contributing to the file behavior. |
| 12 | `})` | Core implementation line contributing to the file behavior. |
| 13 | `export class UserMembershipManagementComponent implements OnInit {` | Exports symbols so other files can import this logic. |
| 14 | `  userId!: string;` | CSS declaration assigning a style property value. |
| 15 | `  membership: any \| null = null;` | CSS declaration assigning a style property value. |
| 16 | `  plans: any[] = [];` | CSS declaration assigning a style property value. |
| 17 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 18 | `  checkingOut = false;` | Core implementation line contributing to the file behavior. |
| 19 | `  showPlanModal = false;` | Core implementation line contributing to the file behavior. |
| 20 | `  selectedPlanId: string \| null = null;` | CSS declaration assigning a style property value. |
| 21 | `` | Blank line used to separate logical blocks for readability. |
| 22 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 23 | `    private membershipService: MembershipService,` | Core implementation line contributing to the file behavior. |
| 24 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 25 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 28 | `    this.userId = this.storage.getUserId();` | Core implementation line contributing to the file behavior. |
| 29 | `    this.loadData();` | Core implementation line contributing to the file behavior. |
| 30 | `  }` | Closes the current code/style block scope. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `  loadData() {` | Begins a new code/style block scope. |
| 33 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 34 | `    this.membershipService.getUserMembership().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 35 | `      next: (membership) => {` | Arrow function definition, often used for callbacks. |
| 36 | `        this.membership = membership;` | Core implementation line contributing to the file behavior. |
| 37 | `        this.membershipService.getPlans().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 38 | `          next: (plans) => {` | Arrow function definition, often used for callbacks. |
| 39 | `            this.plans = plans;` | Core implementation line contributing to the file behavior. |
| 40 | `            this.loading = false;` | Core implementation line contributing to the file behavior. |
| 41 | `          },` | Core implementation line contributing to the file behavior. |
| 42 | `          error: () => {` | Arrow function definition, often used for callbacks. |
| 43 | `            this.loading = false;` | Core implementation line contributing to the file behavior. |
| 44 | `          },` | Core implementation line contributing to the file behavior. |
| 45 | `        });` | Core implementation line contributing to the file behavior. |
| 46 | `      },` | Core implementation line contributing to the file behavior. |
| 47 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 48 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 49 | `      },` | Core implementation line contributing to the file behavior. |
| 50 | `    });` | Core implementation line contributing to the file behavior. |
| 51 | `  }` | Closes the current code/style block scope. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `  getEndDate(): string {` | Begins a new code/style block scope. |
| 54 | `    if (!this.membership?.endDate) return '-';` | Conditional branch: executes block only when condition is true. |
| 55 | `    return new Date(this.membership.endDate).toISOString().split('T')[0];` | Returns a value from the current function/method. |
| 56 | `  }` | Closes the current code/style block scope. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `  getTotalDays(): number {` | Begins a new code/style block scope. |
| 59 | `    if (!this.membership?.startDate \|\| !this.membership?.endDate) return 0;` | Conditional branch: executes block only when condition is true. |
| 60 | `    const start = new Date(this.membership.startDate);` | Core implementation line contributing to the file behavior. |
| 61 | `    const end = new Date(this.membership.endDate);` | Core implementation line contributing to the file behavior. |
| 62 | `    return Math.max(` | Returns a value from the current function/method. |
| 63 | `      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)),` | Core implementation line contributing to the file behavior. |
| 64 | `      0` | Core implementation line contributing to the file behavior. |
| 65 | `    );` | Closes a function/method call statement. |
| 66 | `  }` | Closes the current code/style block scope. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `  getRemainingDays(): number {` | Begins a new code/style block scope. |
| 69 | `    if (!this.membership?.endDate) return 0;` | Conditional branch: executes block only when condition is true. |
| 70 | `    const end = new Date(this.membership.endDate);` | Core implementation line contributing to the file behavior. |
| 71 | `    const today = new Date();` | Core implementation line contributing to the file behavior. |
| 72 | `    return Math.max(` | Returns a value from the current function/method. |
| 73 | `      Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),` | Core implementation line contributing to the file behavior. |
| 74 | `      0` | Core implementation line contributing to the file behavior. |
| 75 | `    );` | Closes a function/method call statement. |
| 76 | `  }` | Closes the current code/style block scope. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `  getProgressPercent(): number {` | Begins a new code/style block scope. |
| 79 | `    const total = this.getTotalDays();` | Core implementation line contributing to the file behavior. |
| 80 | `    if (total <= 0) return 0;` | Conditional branch: executes block only when condition is true. |
| 81 | `    return Math.min((this.getRemainingDays() / total) * 100, 100);` | Returns a value from the current function/method. |
| 82 | `  }` | Closes the current code/style block scope. |
| 83 | `` | Blank line used to separate logical blocks for readability. |
| 84 | `  hasCurrentMembership(): boolean {` | Begins a new code/style block scope. |
| 85 | `    return !!this.membership;` | Returns a value from the current function/method. |
| 86 | `  }` | Closes the current code/style block scope. |
| 87 | `` | Blank line used to separate logical blocks for readability. |
| 88 | `  openMembershipModal() {` | Begins a new code/style block scope. |
| 89 | `    this.selectedPlanId = this.membership?.membershipId ?? null;` | Core implementation line contributing to the file behavior. |
| 90 | `    this.showPlanModal = true;` | Core implementation line contributing to the file behavior. |
| 91 | `  }` | Closes the current code/style block scope. |
| 92 | `` | Blank line used to separate logical blocks for readability. |
| 93 | `  closeMembershipModal() {` | Begins a new code/style block scope. |
| 94 | `    if (this.checkingOut) return;` | Conditional branch: executes block only when condition is true. |
| 95 | `    this.showPlanModal = false;` | Core implementation line contributing to the file behavior. |
| 96 | `  }` | Closes the current code/style block scope. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `  onBackdropClick(event: MouseEvent) {` | Begins a new code/style block scope. |
| 99 | `    if ((event.target as HTMLElement).classList.contains('membership-modal-overlay')) {` | Conditional branch: executes block only when condition is true. |
| 100 | `      this.closeMembershipModal();` | Core implementation line contributing to the file behavior. |
| 101 | `    }` | Closes the current code/style block scope. |
| 102 | `  }` | Closes the current code/style block scope. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `  selectPlan(planId: string) {` | Begins a new code/style block scope. |
| 105 | `    this.selectedPlanId = planId;` | Core implementation line contributing to the file behavior. |
| 106 | `  }` | Closes the current code/style block scope. |
| 107 | `` | Blank line used to separate logical blocks for readability. |
| 108 | `  proceedToCheckout() {` | Begins a new code/style block scope. |
| 109 | `    if (!this.selectedPlanId \|\| this.checkingOut) return;` | Conditional branch: executes block only when condition is true. |
| 110 | `    this.checkingOut = true;` | Core implementation line contributing to the file behavior. |
| 111 | `    this.membershipService.initiateCheckout(this.selectedPlanId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 112 | `      next: (res) => {` | Arrow function definition, often used for callbacks. |
| 113 | `        const checkoutUrl = res?.checkoutUrl ?? res?.data?.checkoutUrl;` | Core implementation line contributing to the file behavior. |
| 114 | `        if (checkoutUrl) {` | Conditional branch: executes block only when condition is true. |
| 115 | `          window.location.href = checkoutUrl;` | Core implementation line contributing to the file behavior. |
| 116 | `          return;` | Core implementation line contributing to the file behavior. |
| 117 | `        }` | Closes the current code/style block scope. |
| 118 | `        this.checkingOut = false;` | Core implementation line contributing to the file behavior. |
| 119 | `        alert('Could not start Stripe checkout. Please try again.');` | Core implementation line contributing to the file behavior. |
| 120 | `      },` | Core implementation line contributing to the file behavior. |
| 121 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 122 | `        this.checkingOut = false;` | Core implementation line contributing to the file behavior. |
| 123 | `        alert('Could not start Stripe checkout. Please try again.');` | Core implementation line contributing to the file behavior. |
| 124 | `      },` | Core implementation line contributing to the file behavior. |
| 125 | `    });` | Core implementation line contributing to the file behavior. |
| 126 | `  }` | Closes the current code/style block scope. |
| 127 | `` | Blank line used to separate logical blocks for readability. |
| 128 | `  formatPrice(plan: any): number {` | Begins a new code/style block scope. |
| 129 | `    return plan.purchasePrice \|\| plan.minPrice \|\| 0;` | Returns a value from the current function/method. |
| 130 | `  }` | Closes the current code/style block scope. |
| 131 | `` | Blank line used to separate logical blocks for readability. |
| 132 | `  planLogoUrl(plan: any): string {` | Begins a new code/style block scope. |
| 133 | `    return plan?.logoUrl \|\| plan?.image_url \|\| 'assets/logo.svg';` | Returns a value from the current function/method. |
| 134 | `  }` | Closes the current code/style block scope. |
| 135 | `` | Blank line used to separate logical blocks for readability. |
| 136 | `  currentMembershipLogoUrl(): string {` | Begins a new code/style block scope. |
| 137 | `    const fromMembershipObject = this.membership?.membership?.logoUrl;` | Core implementation line contributing to the file behavior. |
| 138 | `    if (fromMembershipObject) return fromMembershipObject;` | Conditional branch: executes block only when condition is true. |
| 139 | `` | Blank line used to separate logical blocks for readability. |
| 140 | `    const matchedPlan = this.plans.find((p) => p.id === this.membership?.membershipId);` | Core implementation line contributing to the file behavior. |
| 141 | `    return this.planLogoUrl(matchedPlan);` | Returns a value from the current function/method. |
| 142 | `  }` | Closes the current code/style block scope. |
| 143 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.