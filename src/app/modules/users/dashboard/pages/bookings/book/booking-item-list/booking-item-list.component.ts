import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../../../services/booking.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
import { StorageService } from '../../../../../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-booking-item-list',
  standalone: true,
  imports: [CommonModule, BookingDetailsModalComponent],
  templateUrl: './booking-item-list.component.html',
  styleUrls: ['./booking-item-list.component.css']
})
export class BookingItemListComponent implements OnInit {
  @Input() branch!: any;
  @Input() mode!: 'class' | 'trainer';
  @Output() back = new EventEmitter();

  @Input() hasMembership = true;

  selectedItem: any = null;

  items: any[] = [];
  loading = true;

  constructor(private bookingService: BookingService, private storage: StorageService) {}

  ngOnInit() {
    const req = this.mode === 'class'
      ? this.bookingService.getClassesByBranch(this.branch.id)
      : this.bookingService.getTrainersByBranch(this.branch.id);

    req.subscribe(d => {
      this.items = d;
      this.loading = false;
    });
  }
  

  open(item: any) {
    if (!this.hasMembership) return;
    this.selectedItem = item;
  }

  close() {
    this.selectedItem = null;
  }

//   confirm() {
//     alert('Booking confirmed (mock)');
//     this.close();
//   }

    confirm({ date, time }: { date: string; time: string }) {
    const booking = {
        id: crypto.randomUUID(),
        user_id: this.storage.getUserId(),
        type: this.mode,
        ref_id: this.mode === 'trainer'
        ? this.selectedItem.trainerUserId
        : this.selectedItem.id,
        branch_id: this.branch.id,
        date,
        time,
        status: 'upcoming',
        price: this.selectedItem.price
    };

    this.bookingService.createBooking(booking).subscribe(() => {
        this.selectedItem = null;
        alert('Booking successful!');
    });
    }

}
