import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { BookingService } from '../../../../services/booking.service';
import { StorageService } from '../../../../../../auth/services/storage/storage.service';
import { forkJoin } from 'rxjs';
import { BranchSelectorComponent } from './branch-selector/branch-selector.component';
import { BookingModeSelectorComponent } from './booking-mode-selector/booking-mode-selector.component';
import { BookingItemListComponent } from './booking-item-list/booking-item-list.component';
import { MembershipService } from '../../../../services/membership.service';

@Component({
  selector: 'app-booking-book',
  standalone: true,
  imports: [CommonModule, BranchSelectorComponent, BookingModeSelectorComponent, BookingItemListComponent],
  templateUrl: './booking-book.component.html',
  styleUrls: ['./booking-book.component.css']
})
export class BookingBookComponent implements OnInit {
  branches: any[] = [];
  selectedBranch: any = null;
  mode: 'class' | 'trainer' | null = null;

   hasMembership = false;
  userId!: string;

  constructor(private bookingService: BookingService, private membershipService: MembershipService, private storage: StorageService) {}

  ngOnInit() {
    this.userId = this.storage.getUserId();

    this.bookingService.getBranches().subscribe(b => this.branches = b);

    this.membershipService
      .getUserMembership(this.userId)
      .subscribe(m => this.hasMembership = m.length > 0);
  }

  onBranchSelected(branch: any) {
    this.selectedBranch = branch;
    this.mode = null;
  }

  onModeSelected(mode: 'class' | 'trainer') {
    if (!this.hasMembership) return;
    this.mode = mode;
  }

  reset() {
    this.selectedBranch = null;
    this.mode = null;
  }

}
