import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { BookingService } from '../../../../services/booking.service';
import { StorageService } from '../../../../../../auth/services/storage/storage.service';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit{
  mode: 'class' | 'trainer' = 'class';
  classBookings: any[] = [];
  trainerBookings: any[] = [];
  loading = true;
  errorMessage = '';

  // class booking list filters
  page = 1;
  limit = 10;
  sort: 'asc' | 'desc' = 'desc';
  q = '';
  totalPages = 1;
  totalDocs = 0;
  hasNext = false;
  hasPrev = false;
  selectedClassBooking: any | null = null;
  cancellingClassBooking = false;
  selectedTrainerBooking: any | null = null;
  cancellingTrainerBooking = false;
  trainerCancelReason = '';

  constructor(private bookingService: BookingService, private storage: StorageService) {}


  ngOnInit() {
    this.loadClassBookings(1);
  }

  setMode(mode: 'class' | 'trainer'): void {
    this.mode = mode;
    this.errorMessage = '';
    if (mode === 'class') {
      this.loadClassBookings(1);
    } else {
      this.loadTrainerBookings();
    }
  }

  loadClassBookings(page = this.page): void {
    this.loading = true;
    this.page = page;
    this.bookingService
      .getClassBookingsList({
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        q: this.q || undefined,
      })
      .subscribe({
        next: (res) => {
          const data = res?.data ?? {};
          this.classBookings = data?.docs ?? [];
          this.totalDocs = Number(data?.totalDocs ?? this.classBookings.length);
          this.totalPages = Number(data?.totalPages ?? 1);
          this.hasNext = Boolean(data?.hasNext);
          this.hasPrev = Boolean(data?.hasPrev);
          this.loading = false;
        },
        error: () => {
          // Fallback to member-owned endpoint if list endpoint is unavailable for this role.
          this.bookingService.getMyClassBookings().subscribe({
            next: (res) => {
              const allRows = (res?.data ?? []) as any[];
              const filtered = this.q
                ? allRows.filter((x) =>
                    String(x?.classSchedule?.category ?? '')
                      .toLowerCase()
                      .includes(this.q.toLowerCase())
                  )
                : allRows;
              const sorted = [...filtered].sort((a, b) => {
                const aTime = new Date(a?.createdAt || 0).getTime();
                const bTime = new Date(b?.createdAt || 0).getTime();
                return this.sort === 'asc' ? aTime - bTime : bTime - aTime;
              });
              const start = (this.page - 1) * this.limit;
              const end = start + this.limit;
              this.classBookings = sorted.slice(start, end);
              this.totalDocs = sorted.length;
              this.totalPages = Math.max(Math.ceil(sorted.length / this.limit), 1);
              this.hasPrev = this.page > 1;
              this.hasNext = this.page < this.totalPages;
              this.loading = false;
              this.errorMessage = '';
            },
            error: () => {
              this.classBookings = [];
              this.loading = false;
              this.errorMessage = 'Could not load class booking history.';
            },
          });
        },
      });
  }

  loadTrainerBookings(): void {
    this.loading = true;
    this.bookingService.getMyTrainerBookings().subscribe({
      next: (res) => {
        this.trainerBookings = res?.data ?? [];
        this.loading = false;
      },
      error: () => {
        this.trainerBookings = [];
        this.loading = false;
        this.errorMessage = 'Could not load personal session history.';
      },
    });
  }

  applyClassFilters(): void {
    this.loadClassBookings(1);
  }

  prevPage(): void {
    if (!this.hasPrev || this.loading) return;
    this.loadClassBookings(this.page - 1);
  }

  nextPage(): void {
    if (!this.hasNext || this.loading) return;
    this.loadClassBookings(this.page + 1);
  }

  displayTime(value: string): string {
    if (!value) return '-';
    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(11, 16);
    return value.slice(0, 5);
  }

  openClassBookingDetail(booking: any): void {
    this.selectedClassBooking = booking;
  }

  closeClassBookingDetail(): void {
    if (this.cancellingClassBooking) return;
    this.selectedClassBooking = null;
  }

  cancelSelectedClassBooking(): void {
    const bookingId = this.selectedClassBooking?.id;
    if (!bookingId || this.cancellingClassBooking) return;
    if (!confirm('Are you sure you want to cancel this class booking?')) return;

    this.cancellingClassBooking = true;
    this.bookingService.cancelClassBooking(bookingId).subscribe({
      next: () => {
        this.cancellingClassBooking = false;
        this.selectedClassBooking = null;
        this.loadClassBookings(this.page);
      },
      error: () => {
        this.cancellingClassBooking = false;
        this.errorMessage = 'Could not cancel class booking.';
      },
    });
  }

  bookingImage(booking: any): string {
    return booking?.classSchedule?.imageUrl || 'assets/logo.svg';
  }

  openTrainerBookingDetail(booking: any): void {
    this.selectedTrainerBooking = booking;
    this.trainerCancelReason = '';
  }

  closeTrainerBookingDetail(): void {
    if (this.cancellingTrainerBooking) return;
    this.selectedTrainerBooking = null;
  }

  canCancelTrainerBooking(booking: any): boolean {
    const status = String(booking?.status ?? '').toLowerCase();
    return !['cancelled', 'completed', 'rejected'].includes(status);
  }

  cancelSelectedTrainerBooking(): void {
    const bookingId = this.selectedTrainerBooking?.id;
    if (!bookingId || this.cancellingTrainerBooking || !this.canCancelTrainerBooking(this.selectedTrainerBooking)) return;
    if (!confirm('Are you sure you want to cancel this trainer booking?')) return;

    this.cancellingTrainerBooking = true;
    this.bookingService.cancelTrainerBooking(bookingId, this.trainerCancelReason?.trim() || undefined).subscribe({
      next: () => {
        this.cancellingTrainerBooking = false;
        this.selectedTrainerBooking = null;
        this.loadTrainerBookings();
      },
      error: () => {
        this.cancellingTrainerBooking = false;
        this.errorMessage = 'Could not cancel trainer booking.';
      },
    });
  }
}

