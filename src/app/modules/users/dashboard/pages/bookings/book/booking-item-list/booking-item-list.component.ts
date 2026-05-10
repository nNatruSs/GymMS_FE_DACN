import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../../../../services/booking.service';
import { StorageService } from '../../../../../../../auth/services/storage/storage.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-booking-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-item-list.component.html',
  styleUrls: ['./booking-item-list.component.css']
})
export class BookingItemListComponent implements OnInit {
  @Input() branch!: any;
  @Input() mode!: 'class' | 'trainer';
  @Output() back = new EventEmitter();

  @Input() hasMembership = true;

  selectedItem: any = null;
  selectedClass: any = null;

  items: any[] = [];
  classCategories: string[] = [];
  classFilters: {
    page: number;
    limit: number;
    sort: 'asc' | 'desc' | '';
    q: string;
    searchField: string;
    dayOfWeek: string;
  } = {
    page: 1,
    limit: 12,
    sort: 'desc',
    q: '',
    searchField: 'className',
    dayOfWeek: '',
  };
  classPageMeta = {
    totalDocs: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  };
  bookingStartDate = '';
  bookingEndDate = '';
  bookingClassSubmitting = false;
  trainerBookingSubmitting = false;
  trainerDetailLoading = false;
  trainerProfile: any | null = null;
  trainerSlots: any[] = [];
  selectedTrainerSlot: any | null = null;
  trainerBookingNotes = '';

  trainerFilters: {
    q: string;
    specialization: string;
    date: string;
    availableOnly: boolean;
    priceMin: string;
    priceMax: string;
  } = {
    q: '',
    specialization: '',
    date: '',
    availableOnly: false,
    priceMin: '',
    priceMax: '',
  };
  loading = true;

  constructor(private bookingService: BookingService, private storage: StorageService) {}

  ngOnInit() {
    if (this.mode === 'class') {
      this.loadClassCategories();
      this.loadClassSchedules(1);
      return;
    }

    this.loadTrainerList();
  }
  

  open(item: any) {
    if (!this.hasMembership) return;
    if (this.mode === 'class') {
      this.selectedClass = item;
      const minDate = this.toDateInput(item.validFrom);
      const maxDate = this.toDateInput(item.validUntil);
      this.bookingStartDate = minDate;
      this.bookingEndDate = maxDate;
      return;
    }
    this.openTrainerDetail(item);
  }

  close() {
    this.selectedItem = null;
    this.selectedClass = null;
    this.bookingClassSubmitting = false;
    this.trainerBookingSubmitting = false;
    this.selectedTrainerSlot = null;
    this.trainerProfile = null;
    this.trainerSlots = [];
    this.trainerBookingNotes = '';
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

  loadClassCategories(): void {
    this.bookingService.getClassTypes().subscribe({
      next: (classes) => {
        const categories = (classes ?? []).map((c: any) => c.category).filter(Boolean);
        this.classCategories = Array.from(new Set(categories));
      },
      error: () => {
        this.classCategories = [];
      }
    });
  }

  loadClassSchedules(page = this.classFilters.page): void {
    this.loading = true;
    this.classFilters.page = page;
    this.bookingService
      .listClassSchedules({
        page: this.classFilters.page,
        limit: this.classFilters.limit,
        sort: this.classFilters.sort,
        q: this.classFilters.q,
        searchField: this.classFilters.searchField,
        dayOfWeek: this.classFilters.dayOfWeek,
      })
      .subscribe({
        next: (res) => {
          const data = res?.data ?? {};
          this.items = data?.docs ?? [];
          this.classPageMeta = {
            totalDocs: Number(data?.totalDocs ?? this.items.length),
            totalPages: Number(data?.totalPages ?? 1),
            hasNext: Boolean(data?.hasNext),
            hasPrev: Boolean(data?.hasPrev),
          };
          this.loading = false;
        },
        error: () => {
          this.items = [];
          this.loading = false;
        },
      });
  }

  applyClassFilters(): void {
    this.loadClassSchedules(1);
  }

  clearClassFilters(): void {
    this.classFilters = {
      page: 1,
      limit: 12,
      sort: 'desc',
      q: '',
      searchField: 'className',
      dayOfWeek: '',
    };
    this.loadClassSchedules(1);
  }

  prevClassPage(): void {
    if (!this.classPageMeta.hasPrev || this.loading) return;
    this.loadClassSchedules(this.classFilters.page - 1);
  }

  nextClassPage(): void {
    if (!this.classPageMeta.hasNext || this.loading) return;
    this.loadClassSchedules(this.classFilters.page + 1);
  }

  getClassLogo(item: any): string {
    return item?.imageUrl || 'assets/logo.svg';
  }

  formatClassTime(value: string): string {
    if (!value) return '-';
    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(11, 16);
    return value.slice(0, 5);
  }

  toDateInput(value: string): string {
    if (!value) return '';
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
    return value.slice(0, 10);
  }

  canBookClass(): boolean {
    if (!this.selectedClass) return false;
    if (!this.bookingStartDate || !this.bookingEndDate) return false;
    if (this.bookingStartDate > this.bookingEndDate) return false;
    const min = this.toDateInput(this.selectedClass.validFrom);
    const max = this.toDateInput(this.selectedClass.validUntil);
    return this.bookingStartDate >= min && this.bookingEndDate <= max;
  }

  confirmClassBooking(): void {
    if (!this.selectedClass || !this.canBookClass() || this.bookingClassSubmitting) return;

    this.bookingClassSubmitting = true;
    this.bookingService
      .createMyClassBookings({
        bookingStartDate: this.bookingStartDate,
        bookingEndDate: this.bookingEndDate,
        classScheduleId: [this.selectedClass.id],
      })
      .pipe(
        switchMap((res: any) => {
          const bookingData = res?.data ?? res;
          const createdBooking = Array.isArray(bookingData) ? bookingData[0] : bookingData;
          const bookingId = createdBooking?.id;
          if (!bookingId) {
            throw new Error('Could not retrieve booking id for checkout.');
          }
          return this.bookingService.checkoutClassBooking(bookingId);
        })
      )
      .subscribe({
        next: (checkoutRes: any) => {
          this.bookingClassSubmitting = false;
          const checkoutUrl = checkoutRes?.checkoutUrl ?? checkoutRes?.data?.checkoutUrl;
          if (checkoutUrl) {
            window.open(checkoutUrl, '_blank');
          } else {
            alert('Booking created, but checkout link was not returned.');
          }
          this.selectedClass = null;
          this.loadClassSchedules(this.classFilters.page);
        },
        error: () => {
          this.bookingClassSubmitting = false;
          alert('Could not start class checkout. Please try again.');
        },
      });
  }

  // ─── Trainer booking flow ───────────────────────────────────────────────────
  loadTrainerList(): void {
    this.loading = true;
    this.bookingService
      .getBookableTrainers({
        q: this.trainerFilters.q ?? '',
        specialization: this.trainerFilters.specialization ?? '',
        date: this.trainerFilters.date ?? '',
        availableOnly: this.trainerFilters.availableOnly ?? false,
        priceMin: this.trainerFilters.priceMin ? Number(this.trainerFilters.priceMin) : undefined,
        priceMax: this.trainerFilters.priceMax ? Number(this.trainerFilters.priceMax) : undefined,
      })
      .subscribe({
        next: (res) => {
          const payload = res?.data ?? res;
          const trainers = Array.isArray(payload)
            ? payload
            : Array.isArray(payload?.docs)
              ? payload.docs
              : Array.isArray(payload?.items)
                ? payload.items
                : [];
          this.items = trainers;
          this.loading = false;
        },
        error: () => {
          this.items = [];
          this.loading = false;
        },
      });
  }

  applyTrainerFilters(): void {
    this.loadTrainerList();
  }

  clearTrainerFilters(): void {
    this.trainerFilters = {
      q: '',
      specialization: '',
      date: '',
      availableOnly: false,
      priceMin: '',
      priceMax: '',
    };
    this.loadTrainerList();
  }

  openTrainerDetail(item: any): void {
    this.selectedItem = item;
    this.trainerProfile = null;
    this.trainerSlots = [];
    this.selectedTrainerSlot = null;
    this.trainerBookingNotes = '';
    this.trainerDetailLoading = true;

    const trainerId = item?.id ?? item?.trainerUserId ?? item?.userId;
    if (!trainerId) {
      this.trainerDetailLoading = false;
      return;
    }

    this.bookingService.getTrainerProfile(trainerId).subscribe({
      next: (profile) => {
        this.trainerProfile = profile;
        this.bookingService.getTrainerSlots(trainerId).subscribe({
          next: (slots) => {
            this.trainerSlots = (slots ?? []).filter((slot: any) => slot?.isAvailable !== false);
            this.trainerDetailLoading = false;
          },
          error: () => {
            this.trainerSlots = [];
            this.trainerDetailLoading = false;
          },
        });
      },
      error: () => {
        this.trainerDetailLoading = false;
      },
    });
  }

  trainerDisplayName(item: any): string {
    return (
      `${item?.firstName ?? ''} ${item?.lastName ?? ''}`.trim() ||
      item?.name ||
      item?.trainerName ||
      'Trainer'
    );
  }

  trainerSpecialization(item: any): string {
    const fromArray = item?.specializations ?? item?.trainerAreasOfExpertise ?? [];
    if (Array.isArray(fromArray) && fromArray.length) return fromArray.join(', ');
    return item?.specialization || item?.trainerSpecialization || 'No specialization';
  }

  trainerThumbnail(item: any): string {
    return item?.profileImage || item?.avatarUrl || item?.thumbnail || 'assets/logo.svg';
  }

  slotStart(slot: any): string {
    return slot?.startAt || slot?.startTime || slot?.start || '';
  }

  slotEnd(slot: any): string {
    return slot?.endAt || slot?.endTime || slot?.end || '';
  }

  slotTimeLabel(slot: any): string {
    return `${this.formatDateTime(this.slotStart(slot))} → ${this.formatDateTime(this.slotEnd(slot))}`;
  }

  formatDateTime(value: string): string {
    if (!value) return '-';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }

  selectTrainerSlot(slot: any): void {
    if (slot?.isAvailable === false) return;
    this.selectedTrainerSlot = slot;
  }

  confirmTrainerBooking(): void {
    if (!this.selectedItem || !this.selectedTrainerSlot || this.trainerBookingSubmitting) return;
    const trainerId = this.selectedItem?.id ?? this.selectedItem?.trainerUserId ?? this.selectedItem?.userId;
    const startAt = this.slotStart(this.selectedTrainerSlot);
    const endAt = this.slotEnd(this.selectedTrainerSlot);
    if (!trainerId || !startAt || !endAt) return;

    this.trainerBookingSubmitting = true;
    this.bookingService
      .createTrainerBooking({
        trainerId,
        startAt,
        endAt,
        notes: this.trainerBookingNotes?.trim() || undefined,
      })
      .subscribe({
        next: () => {
          this.trainerBookingSubmitting = false;
          alert('Trainer booking request created successfully.');
          this.close();
          this.loadTrainerList();
        },
        error: () => {
          this.trainerBookingSubmitting = false;
          alert('Could not create trainer booking request.');
        },
      });
  }

}
