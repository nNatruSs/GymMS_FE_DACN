import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../../auth/services/storage/storage.service';
import { MembershipService } from '../../../services/membership.service';

@Component({
  selector: 'app-user-membership-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-membership-management.component.html',
  styleUrls: ['./user-membership-management.component.css']
})
export class UserMembershipManagementComponent implements OnInit {
  userId!: string;
  membership: any | null = null;
  plans: any[] = [];
  loading = true;
  checkingOut = false;
  showPlanModal = false;
  selectedPlanId: string | null = null;

  constructor(
    private membershipService: MembershipService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.userId = this.storage.getUserId();
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.membershipService.getUserMembership().subscribe({
      next: (membership) => {
        this.membership = membership;
        this.membershipService.getPlans().subscribe({
          next: (plans) => {
            this.plans = plans;
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          },
        });
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getEndDate(): string {
    if (!this.membership?.endDate) return '-';
    return new Date(this.membership.endDate).toISOString().split('T')[0];
  }

  getTotalDays(): number {
    if (!this.membership?.startDate || !this.membership?.endDate) return 0;
    const start = new Date(this.membership.startDate);
    const end = new Date(this.membership.endDate);
    return Math.max(
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)),
      0
    );
  }

  getRemainingDays(): number {
    if (!this.membership?.endDate) return 0;
    const end = new Date(this.membership.endDate);
    const today = new Date();
    return Math.max(
      Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
      0
    );
  }

  getProgressPercent(): number {
    const total = this.getTotalDays();
    if (total <= 0) return 0;
    return Math.min((this.getRemainingDays() / total) * 100, 100);
  }

  hasCurrentMembership(): boolean {
    return !!this.membership;
  }

  openMembershipModal() {
    this.selectedPlanId = this.membership?.membershipId ?? null;
    this.showPlanModal = true;
  }

  closeMembershipModal() {
    if (this.checkingOut) return;
    this.showPlanModal = false;
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('membership-modal-overlay')) {
      this.closeMembershipModal();
    }
  }

  selectPlan(planId: string) {
    this.selectedPlanId = planId;
  }

  proceedToCheckout() {
    if (!this.selectedPlanId || this.checkingOut) return;
    this.checkingOut = true;
    this.membershipService.initiateCheckout(this.selectedPlanId).subscribe({
      next: (res) => {
        const checkoutUrl = res?.checkoutUrl ?? res?.data?.checkoutUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
          return;
        }
        this.checkingOut = false;
        alert('Could not start Stripe checkout. Please try again.');
      },
      error: () => {
        this.checkingOut = false;
        alert('Could not start Stripe checkout. Please try again.');
      },
    });
  }

  formatPrice(plan: any): number {
    return plan.purchasePrice || plan.minPrice || 0;
  }

  planLogoUrl(plan: any): string {
    return plan?.logoUrl || plan?.image_url || 'assets/logo.svg';
  }

  currentMembershipLogoUrl(): string {
    const fromMembershipObject = this.membership?.membership?.logoUrl;
    if (fromMembershipObject) return fromMembershipObject;

    const matchedPlan = this.plans.find((p) => p.id === this.membership?.membershipId);
    return this.planLogoUrl(matchedPlan);
  }
}
