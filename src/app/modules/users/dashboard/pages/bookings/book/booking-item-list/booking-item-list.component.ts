import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../../../services/booking.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
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

  constructor(private bookingService: BookingService) {}

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

  confirm() {
    alert('Booking confirmed (mock)');
    this.close();
  }
}
