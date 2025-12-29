import { Component } from '@angular/core';
import { MembershipService } from '../../../services/membership.service';
import { StorageService } from '../../../../../auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { ExtendMembershipModalComponent } from './extend-membership-modal/extend-membership-modal.component';
import { ConfirmModalComponent } from './confirm-modal.component.html/confirm-modal.component';

@Component({
  selector: 'app-user-membership-management',
  standalone: true,
  imports: [CommonModule, ExtendMembershipModalComponent, ConfirmModalComponent],
  templateUrl: './user-membership-management.component.html',
  styleUrls: ['./user-membership-management.component.css']
})
export class UserMembershipManagementComponent implements OnInit {

  userId!: string;
  membership: any | null = null;
  plans: any[] = [];
  loading = true;

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

    this.membershipService.getUserMembership(this.userId).subscribe(memberships => {
      this.membership = memberships.length ? memberships[0] : null;

      this.membershipService.getPlans().subscribe(plans => {
        this.plans = plans;
        this.loading = false;
      });
    });

    // forkJoin({
    //   membership: this.membershipService.getUserMembership(this.userId),
    //   plans: this.membershipService.getPlans(),

    //   minDelay: of(true).pipe(delay(1000)) //remove later when use real backend
    // })
    // .pipe(
    //   finalize(() => {
    //     this.loading = false;
    //   })
    // )
    // .subscribe(({ membership, plans }) => {
    //   this.membership = membership.length ? membership[0] : null;
    //   this.plans = plans;
    // });

  }

  /** REGISTER NEW MEMBERSHIP */
  register(plan: any) {
    const newMembership = {
      user_id: this.userId,
      plan: plan.name,
      start_date: new Date().toISOString().split('T')[0],
      duration_days: plan.duration_days
    };

    this.membershipService.registerMembership(newMembership).subscribe(() => {
      alert('Membership registered successfully');
      this.loadData();
    });
  }

  /** EXTEND MEMBERSHIP (add plan duration days) */
  extend(planDays: number = 30) {
    const updated = {
      duration_days: this.membership.duration_days + planDays
    };

    this.membershipService.updateMembership(this.membership.id, updated).subscribe(() => {
      this.loadData();
    });
  }

  /** CANCEL MEMBERSHIP */
  cancel() {
    if (!confirm('Are you sure you want to cancel your membership?')) return;

    this.membershipService.cancelMembership(this.membership.id).subscribe(() => {
      this.loadData();
    });
  }

  /** CALCULATE END DATE (days-based) */
  getEndDate(): string {
    const start = new Date(this.membership.start_date);
    start.setDate(start.getDate() + this.membership.duration_days);
    return start.toISOString().split('T')[0];
  }

  getRemainingDays(): number {
  const start = new Date(this.membership.start_date);
  const end = new Date(start);
  end.setDate(end.getDate() + this.membership.duration_days);

  const today = new Date();
  return Math.max(
    Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
    0
  );
}

getProgressPercent(): number {
  const used =
    this.membership.duration_days - this.getRemainingDays();

  return Math.min((this.getRemainingDays() / this.membership.duration_days) * 100, 100);
}

///////////////

  showExtendModal = false;
  showCancelModal = false;

  openExtendModal() {
    this.showExtendModal = true;
  }

  openCancelModal() {
    this.showCancelModal = true;
  }

  extendConfirmed(days: number) {
    this.showExtendModal = false;
    this.extend(days);
  }

  cancelConfirmed() {
    this.showCancelModal = false;
    this.cancel();
  }



}
