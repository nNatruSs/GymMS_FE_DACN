import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { BookingService } from '../../../../services/booking.service';
import { StorageService } from '../../../../../../auth/services/storage/storage.service';
import { switchMap } from 'rxjs';
import { BookingCalendarModalComponent } from './booking-calendar-modal/booking-calendar-modal.component';

@Component({
  selector: 'app-booking-calendar',
  standalone: true,
  imports: [CommonModule, BookingCalendarModalComponent],
  templateUrl: './booking-calendar.component.html',
  styleUrl: './booking-calendar.component.css'
})
export class BookingCalendarComponent implements OnInit {
  bookings: any[] = [];
  loading = true;

  weekDates: string[] = [];
  timeSlots = [
    '08:00','09:00','10:00','11:00',
    '12:00','13:00','14:00','15:00',
    '16:00','17:00','18:00'
  ];

  currentWeek = new Date();
  monthLabel = '';

  // @Output() selectBooking = new EventEmitter<any>();

  selectedBooking: any | null = null;

  constructor(private bookingService: BookingService, private storage: StorageService) {}

  ngOnInit() {
    // this.bookingService
    //   .getHistory()
    //   .subscribe((data) => (this.bookings = data));
    this.buildWeek(this.currentWeek);

    const userId = this.storage.getUserId();
    this.bookingService
      .getUserBookings(userId)
      .pipe(switchMap(b => this.bookingService.resolveBookings(b)))
      .subscribe(resolved => {
        this.bookings = resolved.filter(b => b.status !== 'cancelled');
        this.loading = false;
    });
  }

  prevWeek() {
    this.currentWeek.setDate(this.currentWeek.getDate() - 7);
    this.buildWeek(this.currentWeek);
  }

  nextWeek() {
    this.currentWeek.setDate(this.currentWeek.getDate() + 7);
    this.buildWeek(this.currentWeek);
  }

  buildWeek(base: Date) {
    const monday = new Date(base);
    const day = monday.getDay() || 7;
    monday.setDate(monday.getDate() - day + 1);

    this.weekDates = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d.toISOString().split('T')[0];
    });

    this.monthLabel = monday.toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric'
    });
  }

  getBooking(date: string, time: string) {
    return this.bookings.find(
      b => b.date === date && b.time.startsWith(time)
    );
  }

  isClass(date: string, time: string) {
    return this.getBooking(date, time)?.type === 'class';
  }

  isTrainer(date: string, time: string) {
    return this.getBooking(date, time)?.type === 'trainer';
  }

  openBooking(booking: any) {
    this.selectedBooking = booking;
  }

  closeModal() {
    this.selectedBooking = null;
  }

  cancelBooking(id: string) {
    this.bookingService.updateBooking(id, { status: 'cancelled' }).subscribe(() => {
      this.bookings = this.bookings.filter(b => b.id !== id);
      this.closeModal();

      this.selectedBooking = null;
    });
  }
}
