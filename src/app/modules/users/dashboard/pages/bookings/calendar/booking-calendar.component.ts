import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { BookingService } from '../../../../services/booking.service';
import { StorageService } from '../../../../../../auth/services/storage/storage.service';
import { BookingCalendarModalComponent } from './booking-calendar-modal/booking-calendar-modal.component';

@Component({
  selector: 'app-booking-calendar',
  standalone: true,
  imports: [CommonModule, BookingCalendarModalComponent],
  templateUrl: './booking-calendar.component.html',
  styleUrl: './booking-calendar.component.css'
})
export class BookingCalendarComponent implements OnInit {
  classBookings: any[] = [];
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
    this.buildWeek(this.currentWeek);

    this.bookingService
      .getMyClassBookings()
      .subscribe(res => {
        this.classBookings = (res?.data ?? []).filter((b: any) => b.status !== 'cancelled');
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
    const match = this.classBookings.find((b: any) => this.isBookingOnCell(b, date, time));
    if (!match) return null;
    return {
      ...match,
      type: 'class',
      title: match.classSchedule?.className || 'Class Session',
      date,
      time,
      status: match.status || 'pending',
      branchName: match.classSchedule?.location || '',
      specialties: [],
    };
  }

  isClass(date: string, time: string) {
    return !!this.getBooking(date, time);
  }

  isTrainer(date: string, time: string) {
    return false;
  }

  isPast(date: string): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(`${date}T00:00:00`);
    return d.getTime() < today.getTime();
  }

  openBooking(booking: any) {
    this.selectedBooking = booking;
  }

  closeModal() {
    this.selectedBooking = null;
  }

  cancelBooking(id: string) {
    this.bookingService.updateBooking(id, { status: 'cancelled' }).subscribe(() => {
      this.classBookings = this.classBookings.filter((b: any) => b.id !== id);
      this.closeModal();

      this.selectedBooking = null;
    });
  }

  private isBookingOnCell(booking: any, cellDate: string, cellTime: string): boolean {
    const schedule = booking?.classSchedule;
    if (!schedule) return false;

    const startDate = this.toDateOnly(booking.bookingStartDate);
    const endDate = this.toDateOnly(booking.bookingEndDate);
    if (!startDate || !endDate) return false;
    if (cellDate < startDate || cellDate > endDate) return false;

    const dayCode = this.dayCodeFromDate(cellDate);
    const scheduleDays: string[] = Array.isArray(schedule.daysOfWeek)
      ? schedule.daysOfWeek
      : [schedule.dayOfWeek].filter(Boolean);
    if (scheduleDays.length && !scheduleDays.includes(dayCode)) return false;

    const start = this.toHHmm(schedule.startTime);
    const end = this.toHHmm(schedule.endTime);
    if (!start || !end) return false;

    const cellStart = this.toMinutes(cellTime);
    const cellEnd = cellStart + 60;
    const bookingStart = this.toMinutes(start);
    const bookingEnd = this.toMinutes(end);
    return bookingStart < cellEnd && bookingEnd > cellStart;
  }

  private toDateOnly(value: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
    return value.slice(0, 10);
  }

  private toHHmm(value: string): string {
    if (!value) return '';
    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(11, 16);
    return value.slice(0, 5);
  }

  private dayCodeFromDate(dateStr: string): string {
    const dayEnum = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const d = new Date(`${dateStr}T12:00:00`);
    return dayEnum[d.getDay()];
  }

  private toMinutes(hhmm: string): number {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
  }
}
