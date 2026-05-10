import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import {
  AdminClassScheduleService,
  ClassSchedulePayload,
  GymClassItem,
  ScheduleExceptionPayload,
  TrainerItem,
} from '../../services/admin-class-schedule.service';

type DayCode = 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';

@Component({
  selector: 'app-admin-class-schedule-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-class-schedule-management.component.html',
  styleUrls: ['./admin-class-schedule-management.component.css']
})
export class AdminClassScheduleManagementComponent {
  private fb = inject(FormBuilder);
  private scheduleService = inject(AdminClassScheduleService);

  readonly days: { code: DayCode; label: string }[] = [
    { code: 'MON', label: 'Monday' },
    { code: 'TUE', label: 'Tuesday' },
    { code: 'WED', label: 'Wednesday' },
    { code: 'THU', label: 'Thursday' },
    { code: 'FRI', label: 'Friday' },
    { code: 'SAT', label: 'Saturday' },
    { code: 'SUN', label: 'Sunday' },
  ];

  loading = true;
  creating = false;
  updating = false;
  deleting = false;
  checkingConflict = false;
  uploadingImage = false;
  loadingExceptions = false;
  savingException = false;
  deletingExceptionId: string | null = null;

  showCreateModal = false;
  showDetailModal = false;

  errorMessage = '';
  successMessage = '';

  classTypes: GymClassItem[] = [];
  scheduleDocs: any[] = [];
  schedulePage = 1;
  scheduleTotalPages = 1;
  scheduleTotal = 0;
  scheduleHasNext = false;
  scheduleHasPrev = false;
  scheduleLimit = 10;

  trainerPage = 1;
  trainerTotalPages = 1;
  trainerHasNext = false;
  trainerHasPrev = false;
  trainers: TrainerItem[] = [];
  trainerFilterOptions: TrainerItem[] = [];

  // list filters
  sort: 'asc' | 'desc' | '' = 'desc';
  q = '';
  searchField = 'className';
  dayOfWeek = '';
  trainerIdFilter = '';

  selectedCreateTrainerId = '';
  selectedEditTrainerId = '';
  selectedCreateDays = new Set<DayCode>();
  selectedEditDays = new Set<DayCode>();

  selectedSchedule: any | null = null;
  exceptions: any[] = [];
  editingExceptionId: string | null = null;
  selectedClassImageFile: File | null = null;

  createForm = this.fb.nonNullable.group({
    classId: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    validFrom: ['', Validators.required],
    validUntil: ['', Validators.required],
    location: ['', Validators.required],
    capacity: [20, [Validators.required, Validators.min(1)]],
    isActive: [true, Validators.required],
  });

  editForm = this.fb.nonNullable.group({
    classId: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    validFrom: ['', Validators.required],
    validUntil: ['', Validators.required],
    location: ['', Validators.required],
    capacity: [20, [Validators.required, Validators.min(1)]],
    isActive: [true, Validators.required],
  });

  exceptionForm = this.fb.nonNullable.group({
    exceptionDate: ['', Validators.required],
    type: ['CANCELLED', Validators.required],
    reason: [''],
    newStartTime: [''],
    newEndTime: [''],
  });

  ngOnInit(): void {
    this.bootstrap();
  }

  get categoryOptions(): string[] {
    const values = this.classTypes.map((c) => c.category).filter(Boolean) as string[];
    return Array.from(new Set(values));
  }

  bootstrap(): void {
    this.loading = true;
    this.errorMessage = '';
    forkJoin({
      classes: this.scheduleService.getClassTypes(),
      trainersPage: this.scheduleService.listTrainers(1, 10),
      trainerFilterPage: this.scheduleService.listTrainers(1, 100),
      schedules: this.scheduleService.listSchedules({ page: 1, limit: this.scheduleLimit, sort: this.sort }),
    }).subscribe({
      next: ({ classes, trainersPage, trainerFilterPage, schedules }) => {
        this.classTypes = classes;
        this.trainers = trainersPage.docs;
        this.trainerFilterOptions = trainerFilterPage.docs;
        this.trainerPage = trainersPage.currentPage;
        this.trainerTotalPages = trainersPage.totalPages;
        this.trainerHasNext = trainersPage.hasNext;
        this.trainerHasPrev = trainersPage.hasPrev;
        this.applyScheduleResult(schedules);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.error?.message || 'Failed to load class scheduling data.';
      },
    });
  }

  private applyScheduleResult(result: any): void {
    this.scheduleDocs = result.docs ?? [];
    this.schedulePage = result.currentPage ?? 1;
    this.scheduleTotalPages = result.totalPages ?? 1;
    this.scheduleTotal = result.totalDocs ?? this.scheduleDocs.length;
    this.scheduleHasNext = result.hasNext ?? false;
    this.scheduleHasPrev = result.hasPrev ?? false;
  }

  loadSchedules(page = this.schedulePage): void {
    this.loading = true;
    this.errorMessage = '';
    this.scheduleService
      .listSchedules({
        page,
        limit: this.scheduleLimit,
        sort: this.sort,
        q: this.q,
        searchField: this.searchField,
        dayOfWeek: this.dayOfWeek,
        trainerId: this.trainerIdFilter,
      })
      .subscribe({
        next: (result) => {
          this.applyScheduleResult(result);
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err?.error?.error?.message || 'Could not load schedules.';
        },
      });
  }

  applyFilters(): void {
    this.loadSchedules(1);
  }

  clearFilters(): void {
    this.sort = 'desc';
    this.q = '';
    this.searchField = 'className';
    this.dayOfWeek = '';
    this.trainerIdFilter = '';
    this.loadSchedules(1);
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.selectedCreateTrainerId = '';
    this.selectedCreateDays.clear();
    this.createForm.reset({
      classId: '',
      startTime: '',
      endTime: '',
      validFrom: '',
      validUntil: '',
      location: '',
      capacity: 20,
      isActive: true,
    });
    this.loadTrainers(1);
  }

  closeCreateModal(): void {
    if (this.creating || this.checkingConflict) return;
    this.showCreateModal = false;
  }

  loadTrainers(page = this.trainerPage): void {
    this.scheduleService.listTrainers(page, 10).subscribe({
      next: (res) => {
        this.trainers = res.docs;
        this.trainerPage = res.currentPage;
        this.trainerTotalPages = res.totalPages;
        this.trainerHasNext = res.hasNext;
        this.trainerHasPrev = res.hasPrev;
      },
      error: () => {
        this.errorMessage = 'Could not load trainers.';
      },
    });
  }

  toggleCreateDay(day: DayCode, checked: boolean): void {
    if (checked) this.selectedCreateDays.add(day);
    else this.selectedCreateDays.delete(day);
  }

  toggleEditDay(day: DayCode, checked: boolean): void {
    if (checked) this.selectedEditDays.add(day);
    else this.selectedEditDays.delete(day);
  }

  createSchedule(): void {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || !this.selectedCreateTrainerId || !this.selectedCreateDays.size || this.creating) {
      if (!this.selectedCreateTrainerId || !this.selectedCreateDays.size) {
        this.errorMessage = 'Please select trainer and at least one day of week.';
      }
      return;
    }

    const raw = this.createForm.getRawValue();
    const days = Array.from(this.selectedCreateDays);
    const conflictChecks = days.map((day) =>
      this.scheduleService.checkConflict({
        trainerId: this.selectedCreateTrainerId,
        dayOfWeek: day,
        startTime: this.toIsoWithDate(raw.validFrom, raw.startTime),
        endTime: this.toIsoWithDate(raw.validFrom, raw.endTime),
      })
    );

    this.checkingConflict = true;
    this.errorMessage = '';
    this.successMessage = '';
    forkJoin(conflictChecks).subscribe({
      next: (results) => {
        const hasConflict = results.some((r) => this.isConflictResponse(r));
        if (hasConflict) {
          this.checkingConflict = false;
          this.errorMessage = 'Schedule conflict detected for selected trainer/time.';
          return;
        }
        this.performCreate(raw, days);
      },
      error: (err) => {
        this.checkingConflict = false;
        this.errorMessage = err?.error?.error?.message || 'Conflict check failed.';
      },
    });
  }

  private performCreate(raw: any, days: DayCode[]): void {
    const payload: ClassSchedulePayload = {
      classId: raw.classId,
      trainerId: this.selectedCreateTrainerId,
      dayOfWeek: days[0],
      daysOfWeek: days,
      startTime: this.toIsoWithDate(raw.validFrom, raw.startTime),
      endTime: this.toIsoWithDate(raw.validFrom, raw.endTime),
      validFrom: raw.validFrom,
      validUntil: raw.validUntil,
      location: raw.location.trim(),
      capacity: Number(raw.capacity),
      isActive: Boolean(raw.isActive),
    };

    this.creating = true;
    this.scheduleService.createSchedule(payload).subscribe({
      next: () => {
        this.creating = false;
        this.checkingConflict = false;
        this.showCreateModal = false;
        this.successMessage = 'Class schedule created successfully.';
        this.loadSchedules(1);
      },
      error: (err) => {
        this.creating = false;
        this.checkingConflict = false;
        this.errorMessage = err?.error?.error?.message || 'Create schedule failed.';
      },
    });
  }

  openScheduleDetail(schedule: any): void {
    this.showDetailModal = true;
    this.selectedSchedule = schedule;
    this.errorMessage = '';
    this.successMessage = '';
    this.selectedClassImageFile = null;
    this.editingExceptionId = null;
    this.exceptionForm.reset({
      exceptionDate: '',
      type: 'CANCELLED',
      reason: '',
      newStartTime: '',
      newEndTime: '',
    });

    this.selectedEditTrainerId = schedule.trainerId ?? '';
    this.selectedEditDays.clear();
    const days: string[] = Array.isArray(schedule.daysOfWeek)
      ? schedule.daysOfWeek
      : schedule.dayOfWeek
      ? [schedule.dayOfWeek]
      : [];
    days.forEach((d) => this.selectedEditDays.add(d as DayCode));

    this.editForm.reset({
      classId: schedule.classId ?? '',
      startTime: this.toTimeInput(schedule.startTime),
      endTime: this.toTimeInput(schedule.endTime),
      validFrom: this.toDateInput(schedule.validFrom),
      validUntil: this.toDateInput(schedule.validUntil),
      location: schedule.location ?? '',
      capacity: Number(schedule.capacity ?? 20),
      isActive: Boolean(schedule.isActive ?? true),
    });

    this.loadExceptions(schedule.id);
    this.loadTrainers(1);
  }

  closeDetailModal(): void {
    if (this.updating || this.deleting || this.uploadingImage || this.savingException || !!this.deletingExceptionId) return;
    this.showDetailModal = false;
    this.selectedSchedule = null;
  }

  updateSchedule(): void {
    this.editForm.markAllAsTouched();
    if (!this.selectedSchedule?.id || this.editForm.invalid || !this.selectedEditTrainerId || !this.selectedEditDays.size) {
      this.errorMessage = 'Please complete required fields, select trainer and schedule days.';
      return;
    }

    const raw = this.editForm.getRawValue();
    const days = Array.from(this.selectedEditDays);
    const payload: ClassSchedulePayload = {
      classId: raw.classId,
      trainerId: this.selectedEditTrainerId,
      dayOfWeek: days[0],
      daysOfWeek: days,
      startTime: this.toIsoWithDate(raw.validFrom, raw.startTime),
      endTime: this.toIsoWithDate(raw.validFrom, raw.endTime),
      validFrom: raw.validFrom,
      validUntil: raw.validUntil,
      location: raw.location.trim(),
      capacity: Number(raw.capacity),
      isActive: Boolean(raw.isActive),
    };

    this.updating = true;
    this.scheduleService.updateSchedule(this.selectedSchedule.id, payload).subscribe({
      next: () => {
        this.updating = false;
        this.successMessage = 'Schedule updated successfully.';
        this.loadSchedules(this.schedulePage);
        this.showDetailModal = false;
      },
      error: (err) => {
        this.updating = false;
        this.errorMessage = err?.error?.error?.message || 'Update schedule failed.';
      },
    });
  }

  deleteSchedule(): void {
    if (!this.selectedSchedule?.id || this.deleting) return;
    if (!confirm('Delete this schedule?')) return;

    this.deleting = true;
    this.scheduleService.deleteSchedule(this.selectedSchedule.id).subscribe({
      next: () => {
        this.deleting = false;
        this.showDetailModal = false;
        this.selectedSchedule = null;
        this.successMessage = 'Schedule deleted successfully.';
        this.loadSchedules(1);
      },
      error: (err) => {
        this.deleting = false;
        this.errorMessage = err?.error?.error?.message || 'Delete schedule failed.';
      },
    });
  }

  onClassImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedClassImageFile = file;
  }

  uploadClassImage(): void {
    if (!this.selectedSchedule?.classId || !this.selectedClassImageFile) return;
    this.uploadingImage = true;
    this.scheduleService.uploadClassImage(this.selectedSchedule.classId, this.selectedClassImageFile).subscribe({
      next: () => {
        this.uploadingImage = false;
        this.selectedClassImageFile = null;
        this.successMessage = 'Class cover image uploaded successfully.';
      },
      error: (err) => {
        this.uploadingImage = false;
        this.errorMessage = err?.error?.error?.message || 'Upload class image failed.';
      },
    });
  }

  loadExceptions(scheduleId: string): void {
    this.loadingExceptions = true;
    this.scheduleService.listExceptions(scheduleId).subscribe({
      next: (rows) => {
        this.exceptions = rows;
        this.loadingExceptions = false;
      },
      error: () => {
        this.loadingExceptions = false;
        this.exceptions = [];
      },
    });
  }

  editException(exception: any): void {
    this.editingExceptionId = exception.id;
    this.exceptionForm.reset({
      exceptionDate: this.toDateInput(exception.exceptionDate),
      type: exception.type ?? 'CANCELLED',
      reason: exception.reason ?? '',
      newStartTime: this.toTimeInput(exception.newStartTime),
      newEndTime: this.toTimeInput(exception.newEndTime),
    });
  }

  cancelExceptionEdit(): void {
    this.editingExceptionId = null;
    this.exceptionForm.reset({
      exceptionDate: '',
      type: 'CANCELLED',
      reason: '',
      newStartTime: '',
      newEndTime: '',
    });
  }

  saveException(): void {
    if (!this.selectedSchedule?.id || this.savingException) return;
    this.exceptionForm.markAllAsTouched();
    if (this.exceptionForm.invalid) return;

    const raw = this.exceptionForm.getRawValue();
    const payload: ScheduleExceptionPayload = {
      exceptionDate: raw.exceptionDate,
      type: raw.type,
      reason: raw.reason?.trim() || undefined,
      newStartTime: raw.newStartTime || undefined,
      newEndTime: raw.newEndTime || undefined,
    };

    this.savingException = true;
    const request$ = this.editingExceptionId
      ? this.scheduleService.updateException(this.editingExceptionId, payload)
      : this.scheduleService.createException(this.selectedSchedule.id, payload);

    request$.subscribe({
      next: () => {
        this.savingException = false;
        this.successMessage = this.editingExceptionId
          ? 'Exception updated successfully.'
          : 'Exception created successfully.';
        this.cancelExceptionEdit();
        this.loadExceptions(this.selectedSchedule.id);
      },
      error: (err) => {
        this.savingException = false;
        this.errorMessage = err?.error?.error?.message || 'Save exception failed.';
      },
    });
  }

  deleteException(exceptionId: string): void {
    if (!exceptionId || this.deletingExceptionId) return;
    if (!confirm('Delete this schedule exception?')) return;

    this.deletingExceptionId = exceptionId;
    this.scheduleService.deleteException(exceptionId).subscribe({
      next: () => {
        this.deletingExceptionId = null;
        if (this.selectedSchedule?.id) this.loadExceptions(this.selectedSchedule.id);
      },
      error: (err) => {
        this.deletingExceptionId = null;
        this.errorMessage = err?.error?.error?.message || 'Delete exception failed.';
      },
    });
  }

  previousSchedulePage(): void {
    if (!this.scheduleHasPrev || this.loading) return;
    this.loadSchedules(this.schedulePage - 1);
  }

  nextSchedulePage(): void {
    if (!this.scheduleHasNext || this.loading) return;
    this.loadSchedules(this.schedulePage + 1);
  }

  onBackdropClick(event: MouseEvent, modalType: 'create' | 'detail'): void {
    if (event.target !== event.currentTarget) return;
    if (modalType === 'create') this.closeCreateModal();
    else this.closeDetailModal();
  }

  trainerName(trainer: TrainerItem): string {
    const full = `${trainer.firstName ?? ''} ${trainer.lastName ?? ''}`.trim();
    return full || trainer.email || 'Trainer';
  }

  classNameById(classId: string): string {
    return this.classTypes.find((c) => c.id === classId)?.className ?? classId;
  }

  displayTime(value: string | undefined): string {
    if (!value) return '-';
    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(11, 16);
    return value.slice(0, 5);
  }

  private isConflictResponse(value: any): boolean {
    return Boolean(value?.conflict || value?.hasConflict || value?.isConflict || value?.available === false);
  }

  private toIsoWithDate(dateValue: string, timeValue: string): string {
    const time = (timeValue || '').slice(0, 5);
    return `${dateValue}T${time}:00Z`;
  }

  private toTimeInput(value: string | null | undefined): string {
    if (!value) return '';
    if (/^\d{2}:\d{2}$/.test(value)) return value;
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return date.toISOString().slice(11, 16);
    }
    return value.slice(0, 5);
  }

  private toDateInput(value: string | null | undefined): string {
    if (!value) return '';
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);
    return value.slice(0, 10);
  }
}
