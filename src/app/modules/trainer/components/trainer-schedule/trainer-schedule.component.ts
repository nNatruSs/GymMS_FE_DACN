import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import {
  TrainerAvailabilitySlot,
  TrainerBookingSlot,
  TrainerService,
} from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-schedule.component.html',
  styleUrl: './trainer-schedule.component.css',
})
export class TrainerScheduleComponent {
  loading = true;
  saving = false;
  deletingSlotId: string | null = null;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  trainerId = '';

  slots: TrainerAvailabilitySlot[] = [];
  bookings: TrainerBookingSlot[] = [];
  showBookedDetails = true;
  selectedCellBookings: TrainerBookingSlot[] = [];
  selectedCellLabel = '';

  weekOffset = 0;
  weekDates: Date[] = [];
  timeSlots: string[] = [];

  newSlot: TrainerAvailabilitySlot = {
    dayOfWeek: 1,
    startTime: '09:00',
    endTime: '17:00',
    isAvailable: true,
  };

  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(
    private trainerService: TrainerService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.trainerId = this.storage.getUserId();
    this.timeSlots = this.buildHalfHourSlots('06:00', '22:00');
    this.setWeek(0);
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.errorMessage = null;
    forkJoin({
      availability: this.trainerService.getAvailability(this.trainerId),
      bookings: this.trainerService.getTrainerMyBookings(),
    }).subscribe({
      next: ({ availability, bookings }) => {
        this.slots = availability ?? [];
        this.bookings = bookings ?? [];
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load trainer schedule data.';
        this.loading = false;
      },
    });
  }

  addSlot(): void {
    if (this.newSlot.startTime >= this.newSlot.endTime) {
      this.errorMessage = 'End time must be after start time.';
      return;
    }
    this.errorMessage = null;
    this.successMessage = null;
    this.slots = [...this.slots, { ...this.newSlot }];
  }

  removeSlot(index: number): void {
    const slot = this.slots[index];
    if (!slot) return;

    if (slot.id) {
      if (!confirm('Delete this availability slot?')) return;
      this.deletingSlotId = slot.id;
      this.trainerService.deleteAvailabilitySlot(this.trainerId, slot.id).subscribe({
        next: () => {
          this.deletingSlotId = null;
          this.successMessage = 'Slot deleted successfully.';
          this.loadData();
        },
        error: () => {
          this.deletingSlotId = null;
          this.errorMessage = 'Could not delete slot.';
        },
      });
      return;
    }

    this.slots = this.slots.filter((_, i) => i !== index);
  }

  saveAvailability(): void {
    this.saving = true;
    this.errorMessage = null;
    this.successMessage = null;
    this.trainerService.setAvailability(this.trainerId, this.slots).subscribe({
      next: () => {
        this.successMessage = 'Schedule updated successfully.';
        this.saving = false;
        this.loadData();
      },
      error: () => {
        this.errorMessage = 'Failed to save availability.';
        this.saving = false;
      },
    });
  }

  prevWeek(): void {
    this.setWeek(this.weekOffset - 1);
  }

  nextWeek(): void {
    this.setWeek(this.weekOffset + 1);
  }

  setWeek(offset: number): void {
    this.weekOffset = offset;
    const today = new Date();
    const monday = this.getMonday(today);
    monday.setDate(monday.getDate() + offset * 7);
    this.weekDates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
    this.selectedCellBookings = [];
    this.selectedCellLabel = '';
  }

  weekRangeLabel(): string {
    if (!this.weekDates.length) return '';
    const start = this.weekDates[0].toLocaleDateString();
    const end = this.weekDates[6].toLocaleDateString();
    return `${start} - ${end}`;
  }

  isPastDay(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const check = new Date(date);
    check.setHours(0, 0, 0, 0);
    return check.getTime() < today.getTime();
  }

  cellClass(date: Date, time: string): string {
    if (this.isPastDay(date)) return 'cell-past';
    if (this.isBooked(date, time)) return 'cell-booked';
    if (this.isAvailable(date, time)) return 'cell-available';
    return '';
  }

  onCellClick(date: Date, time: string): void {
    if (!this.showBookedDetails || !this.isBooked(date, time)) return;
    this.selectedCellBookings = this.bookingsForCell(date, time);
    this.selectedCellLabel = `${date.toDateString()} ${time}`;
  }

  private isAvailable(date: Date, time: string): boolean {
    const dayIndex = date.getDay();
    return this.slots.some((slot) => {
      if (!slot.isAvailable || slot.dayOfWeek !== dayIndex) return false;
      return this.cellIntersectsTimeRange(time, slot.startTime, slot.endTime);
    });
  }

  private isBooked(date: Date, time: string): boolean {
    return this.bookingsForCell(date, time).length > 0;
  }

  private bookingsForCell(date: Date, time: string): TrainerBookingSlot[] {
    const cellStart = this.toDateTime(date, time);
    const cellEnd = new Date(cellStart.getTime() + 30 * 60 * 1000);
    return this.bookings.filter((booking) => {
      const start = new Date(booking.startAt);
      const end = new Date(booking.endAt);
      return start < cellEnd && end > cellStart;
    });
  }

  private toDateTime(date: Date, time: string): Date {
    const [h, m] = time.split(':').map(Number);
    const d = new Date(date);
    d.setHours(h, m, 0, 0);
    return d;
  }

  private cellIntersectsTimeRange(cellTime: string, start: string, end: string): boolean {
    const cellStart = this.toMinutes(cellTime);
    const cellEnd = cellStart + 30;
    const startMin = this.toMinutes(start);
    const endMin = this.toMinutes(end);
    return startMin < cellEnd && endMin > cellStart;
  }

  private toMinutes(hhmm: string): number {
    const [h, m] = hhmm.slice(0, 5).split(':').map(Number);
    return h * 60 + m;
  }

  private buildHalfHourSlots(start: string, end: string): string[] {
    const startMin = this.toMinutes(start);
    const endMin = this.toMinutes(end);
    const values: string[] = [];
    for (let m = startMin; m < endMin; m += 30) {
      const hh = String(Math.floor(m / 60)).padStart(2, '0');
      const mm = String(m % 60).padStart(2, '0');
      values.push(`${hh}:${mm}`);
    }
    return values;
  }

  private getMonday(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay(); // 0 Sun
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }
}
