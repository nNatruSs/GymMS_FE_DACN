import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../../../services/booking.service';
import { Console } from 'console';
import { forkJoin } from 'rxjs';

interface CalendarCell {
  date: string;
  time: string;
  available: boolean;
}

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

  weekDates: string[] = [];
  timeSlots: string[] = [];

  currentWeekStart!: Date;
  monthLabel = '';

  bookedSlots: { date: string; time: string }[] = [];

  loading = false;
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.images = this.item.images?.length
      ? this.item.images
      : [this.item.thumbnail];
    
    if (this.mode === 'trainer') {
        this.loadAvailability();
        // console.log('availability 2', this.availability);
        // console.log('item', this.item.trainerUserId, this.item.branchId);
    }
  }

  loadAvailability() {
        this.loading = true;

    // this.bookingService
    //     .getTrainerAvailability(this.item.trainerUserId, this.item.branchId)
    //     .subscribe(data => {
    //     this.availability = data;
    //     console.log('availability 1', this.availability);

    //     this.buildWeek();
    //     this.buildTimeSlots();

    //     this.loading = false;
    //     });

        forkJoin({
            availability: this.bookingService.getTrainerAvailability(
            this.item.trainerUserId,
            this.item.branchId
            ),
            bookings: this.bookingService.getTrainerBookings(this.item.trainerUserId)
        }).subscribe(({ availability, bookings }) => {
            this.availability = availability;
            this.bookedSlots = bookings.map(b => ({
            date: b.date,
            time: b.time
            }));

            this.buildWeek();
            this.buildTimeSlots();
            this.loading = false;
        });
    }


    buildWeek(start?: Date) {
        const base = start ?? new Date();

        // normalize time
        base.setHours(0, 0, 0, 0);

        // force Monday
        const monday = new Date(base);
        const day = monday.getDay() || 7;
        monday.setDate(monday.getDate() - day + 1);

        this.currentWeekStart = monday;

        this.weekDates = Array.from({ length: 7 }).map((_, i) => {
            const d = new Date(monday);
            d.setDate(monday.getDate() + i);
            return d.toISOString().split('T')[0];
        });

        // Month + year label
        this.monthLabel = monday.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }
    buildTimeSlots() {
        this.timeSlots = [
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00'
        ];
    }

    prevWeek() {
        const prev = new Date(this.currentWeekStart);
        prev.setDate(prev.getDate() - 7);
        this.buildWeek(prev);
    }

    nextWeek() {
        const next = new Date(this.currentWeekStart);
        next.setDate(next.getDate() + 7);
        this.buildWeek(next);
    }

    isPast(date: string): boolean {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const d = new Date(date);
        return d < today;
    }

    selectDate(date: string) {
    this.selectedDate = date;
    this.selectedSlot = null;
    }

    isBooked(date: string, time: string): boolean {
        return this.bookedSlots.some(
            b => b.date === date && b.time === time
        );
    }

    isAvailable(date: string, time: string): boolean {
        if (this.isPast(date)) return false;
        if (this.isBooked(date, time)) return false;

        const day = this.availability.find(a => a.date === date);
        return !!day && day.slots.includes(time);
    }

    selectSlot(date: string, time: string) {
    if (!this.isAvailable(date, time)) return;

    this.selectedDate = date;
    this.selectedSlot = time;
  }

  isSelected(date: string, time: string): boolean {
    return this.selectedDate === date && this.selectedSlot === time;
  }

    // get selectedDaySlots(): string[] {
    // if (!this.selectedDate) return [];

    // const day = this.availability.find(
    //     a => a.date === this.selectedDate
    // );

    // return day ? day.slots : [];
    // }


  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  purchase() {
    this.confirm.emit({
      date: this.selectedDate,
      time: this.selectedSlot,
    });
  }
}

