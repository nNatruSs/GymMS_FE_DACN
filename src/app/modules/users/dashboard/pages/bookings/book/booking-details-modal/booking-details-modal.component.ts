import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../../../services/booking.service';


@Component({
  selector: 'app-booking-details-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-details-modal.component.html',
  styleUrls: ['./booking-details-modal.component.css'],
})
// export class BookingDetailsModalComponent {
//   @Input() item: any;
//   @Input() mode!: 'class' | 'trainer';

//   @Output() close = new EventEmitter<void>();
//   @Output() confirm = new EventEmitter<void>();

//   currentIndex = 0;

//   get images(): string[] {
//     return this.item.images?.length
//       ? this.item.images
//       : [this.item.thumbnail];
//   }

//   next() {
//     this.currentIndex = (this.currentIndex + 1) % this.images.length;
//   }

//   prev() {
//     this.currentIndex =
//       (this.currentIndex - 1 + this.images.length) % this.images.length;
//   }
// }
export class BookingDetailsModalComponent implements OnInit {
  @Input() item: any;
  @Input() mode!: 'class' | 'trainer';

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{
    date: string | null;
    time: string | null;
  }>();

  images: string[] = [];
  currentIndex = 0;

  availability: {
    date: string;
    slots: string[];
  }[] = [];
  selectedDate: string | null = null;
  selectedSlot: string | null = null;

  loading = false;
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.images = this.item.images?.length
      ? this.item.images
      : [this.item.thumbnail];
    
    if (this.mode === 'trainer') {
        this.loadAvailability();
    }
  }

  loadAvailability() {
    this.loading = true;

    this.bookingService
        .getTrainerAvailability(this.item.trainerUserId, this.item.branchId)
        .subscribe(data => {
        this.availability = data;
        this.loading = false;
        });
    console.log('Loading trainer availability...', this.availability);
    console.log(this.item);
    }

    selectDate(date: string) {
    this.selectedDate = date;
    this.selectedSlot = null;
    }

    selectSlot(slot: string) {
    this.selectedSlot = slot;
    }

    get selectedDaySlots(): string[] {
    if (!this.selectedDate) return [];

    const day = this.availability.find(
        a => a.date === this.selectedDate
    );

    return day ? day.slots : [];
    }


  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
