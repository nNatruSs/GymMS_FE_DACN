# Explanation: `src/app/modules/admin/components/admin-class-schedule-management/admin-class-schedule-management.component.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-class-schedule-management/admin-class-schedule-management.component.ts`
- **Total lines:** `601`
- **Non-empty lines:** `538`
- **Import statements:** `6`
- **Class-like declarations found:** `7`
- **Function/method-like signatures found (approx):** `1`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component, inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { forkJoin } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 5 | `import {` | Imports a dependency so this file can use external symbols. |
| 6 | `  AdminClassScheduleService,` | Core implementation line contributing to the file behavior. |
| 7 | `  ClassSchedulePayload,` | Core implementation line contributing to the file behavior. |
| 8 | `  GymClassItem,` | Core implementation line contributing to the file behavior. |
| 9 | `  ScheduleExceptionPayload,` | Core implementation line contributing to the file behavior. |
| 10 | `  TrainerItem,` | Core implementation line contributing to the file behavior. |
| 11 | `} from '../../services/admin-class-schedule.service';` | Declares a core TypeScript structure used by this module. |
| 12 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `type DayCode = 'SUN' \| 'MON' \| 'TUE' \| 'WED' \| 'THU' \| 'FRI' \| 'SAT';` | Declares a core TypeScript structure used by this module. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `@Component({` | Angular decorator declaring metadata for this component. |
| 17 | `  selector: 'app-admin-class-schedule-management',` | Declares a core TypeScript structure used by this module. |
| 18 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 19 | `  imports: [CommonModule, FormsModule, ReactiveFormsModule],` | Core implementation line contributing to the file behavior. |
| 20 | `  templateUrl: './admin-class-schedule-management.component.html',` | Declares a core TypeScript structure used by this module. |
| 21 | `  styleUrls: ['./admin-class-schedule-management.component.css']` | Declares a core TypeScript structure used by this module. |
| 22 | `})` | Core implementation line contributing to the file behavior. |
| 23 | `export class AdminClassScheduleManagementComponent {` | Exports symbols so other files can import this logic. |
| 24 | `  private fb = inject(FormBuilder);` | Core implementation line contributing to the file behavior. |
| 25 | `  private scheduleService = inject(AdminClassScheduleService);` | Core implementation line contributing to the file behavior. |
| 26 | `  private confirmDialog = inject(ConfirmDialogService);` | Core implementation line contributing to the file behavior. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `  readonly days: { code: DayCode; label: string }[] = [` | Core implementation line contributing to the file behavior. |
| 29 | `    { code: 'MON', label: 'Monday' },` | Core implementation line contributing to the file behavior. |
| 30 | `    { code: 'TUE', label: 'Tuesday' },` | Core implementation line contributing to the file behavior. |
| 31 | `    { code: 'WED', label: 'Wednesday' },` | Core implementation line contributing to the file behavior. |
| 32 | `    { code: 'THU', label: 'Thursday' },` | Core implementation line contributing to the file behavior. |
| 33 | `    { code: 'FRI', label: 'Friday' },` | Core implementation line contributing to the file behavior. |
| 34 | `    { code: 'SAT', label: 'Saturday' },` | Core implementation line contributing to the file behavior. |
| 35 | `    { code: 'SUN', label: 'Sunday' },` | Core implementation line contributing to the file behavior. |
| 36 | `  ];` | Core implementation line contributing to the file behavior. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 39 | `  creating = false;` | Core implementation line contributing to the file behavior. |
| 40 | `  updating = false;` | Core implementation line contributing to the file behavior. |
| 41 | `  deleting = false;` | Core implementation line contributing to the file behavior. |
| 42 | `  checkingConflict = false;` | Core implementation line contributing to the file behavior. |
| 43 | `  uploadingImage = false;` | Core implementation line contributing to the file behavior. |
| 44 | `  loadingExceptions = false;` | Core implementation line contributing to the file behavior. |
| 45 | `  savingException = false;` | Core implementation line contributing to the file behavior. |
| 46 | `  deletingExceptionId: string \| null = null;` | CSS declaration assigning a style property value. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `  showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 49 | `  showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 52 | `  successMessage = '';` | Core implementation line contributing to the file behavior. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `  classTypes: GymClassItem[] = [];` | CSS declaration assigning a style property value. |
| 55 | `  scheduleDocs: any[] = [];` | CSS declaration assigning a style property value. |
| 56 | `  schedulePage = 1;` | Core implementation line contributing to the file behavior. |
| 57 | `  scheduleTotalPages = 1;` | Core implementation line contributing to the file behavior. |
| 58 | `  scheduleTotal = 0;` | Core implementation line contributing to the file behavior. |
| 59 | `  scheduleHasNext = false;` | Core implementation line contributing to the file behavior. |
| 60 | `  scheduleHasPrev = false;` | Core implementation line contributing to the file behavior. |
| 61 | `  scheduleLimit = 10;` | Core implementation line contributing to the file behavior. |
| 62 | `` | Blank line used to separate logical blocks for readability. |
| 63 | `  trainerPage = 1;` | Core implementation line contributing to the file behavior. |
| 64 | `  trainerTotalPages = 1;` | Core implementation line contributing to the file behavior. |
| 65 | `  trainerHasNext = false;` | Core implementation line contributing to the file behavior. |
| 66 | `  trainerHasPrev = false;` | Core implementation line contributing to the file behavior. |
| 67 | `  trainers: TrainerItem[] = [];` | CSS declaration assigning a style property value. |
| 68 | `  trainerFilterOptions: TrainerItem[] = [];` | CSS declaration assigning a style property value. |
| 69 | `` | Blank line used to separate logical blocks for readability. |
| 70 | `  ` | Blank line used to separate logical blocks for readability. |
| 71 | `  sort: 'asc' \| 'desc' \| '' = 'desc';` | CSS declaration assigning a style property value. |
| 72 | `  q = '';` | Core implementation line contributing to the file behavior. |
| 73 | `  searchField = 'className';` | Core implementation line contributing to the file behavior. |
| 74 | `  dayOfWeek = '';` | Core implementation line contributing to the file behavior. |
| 75 | `  trainerIdFilter = '';` | Core implementation line contributing to the file behavior. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `  selectedCreateTrainerId = '';` | Core implementation line contributing to the file behavior. |
| 78 | `  selectedEditTrainerId = '';` | Core implementation line contributing to the file behavior. |
| 79 | `  selectedCreateDays = new Set<DayCode>();` | Core implementation line contributing to the file behavior. |
| 80 | `  selectedEditDays = new Set<DayCode>();` | Core implementation line contributing to the file behavior. |
| 81 | `` | Blank line used to separate logical blocks for readability. |
| 82 | `  selectedSchedule: any \| null = null;` | CSS declaration assigning a style property value. |
| 83 | `  exceptions: any[] = [];` | CSS declaration assigning a style property value. |
| 84 | `  editingExceptionId: string \| null = null;` | CSS declaration assigning a style property value. |
| 85 | `  selectedClassImageFile: File \| null = null;` | CSS declaration assigning a style property value. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `  createForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 88 | `    classId: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 89 | `    startTime: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 90 | `    endTime: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 91 | `    validFrom: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 92 | `    validUntil: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 93 | `    location: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 94 | `    capacity: [20, [Validators.required, Validators.min(1)]],` | Core implementation line contributing to the file behavior. |
| 95 | `    isActive: [true, Validators.required],` | Core implementation line contributing to the file behavior. |
| 96 | `  });` | Core implementation line contributing to the file behavior. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `  editForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 99 | `    classId: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 100 | `    startTime: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 101 | `    endTime: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 102 | `    validFrom: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 103 | `    validUntil: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 104 | `    location: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 105 | `    capacity: [20, [Validators.required, Validators.min(1)]],` | Core implementation line contributing to the file behavior. |
| 106 | `    isActive: [true, Validators.required],` | Core implementation line contributing to the file behavior. |
| 107 | `  });` | Core implementation line contributing to the file behavior. |
| 108 | `` | Blank line used to separate logical blocks for readability. |
| 109 | `  exceptionForm = this.fb.nonNullable.group({` | Begins a new code/style block scope. |
| 110 | `    exceptionDate: ['', Validators.required],` | Core implementation line contributing to the file behavior. |
| 111 | `    type: ['CANCELLED', Validators.required],` | Declares a core TypeScript structure used by this module. |
| 112 | `    reason: [''],` | Core implementation line contributing to the file behavior. |
| 113 | `    newStartTime: [''],` | Core implementation line contributing to the file behavior. |
| 114 | `    newEndTime: [''],` | Core implementation line contributing to the file behavior. |
| 115 | `  });` | Core implementation line contributing to the file behavior. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 118 | `    this.bootstrap();` | Core implementation line contributing to the file behavior. |
| 119 | `  }` | Closes the current code/style block scope. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `  get categoryOptions(): string[] {` | Begins a new code/style block scope. |
| 122 | `    const values = this.classTypes.map((c) => c.category).filter(Boolean) as string[];` | Core implementation line contributing to the file behavior. |
| 123 | `    return Array.from(new Set(values));` | Returns a value from the current function/method. |
| 124 | `  }` | Closes the current code/style block scope. |
| 125 | `` | Blank line used to separate logical blocks for readability. |
| 126 | `  bootstrap(): void {` | Begins a new code/style block scope. |
| 127 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 128 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 129 | `    forkJoin({` | Begins a new code/style block scope. |
| 130 | `      classes: this.scheduleService.getClassTypes(),` | Core implementation line contributing to the file behavior. |
| 131 | `      trainersPage: this.scheduleService.listTrainers(1, 10),` | Core implementation line contributing to the file behavior. |
| 132 | `      trainerFilterPage: this.scheduleService.listTrainers(1, 100),` | Core implementation line contributing to the file behavior. |
| 133 | `      schedules: this.scheduleService.listSchedules({ page: 1, limit: this.scheduleLimit, sort: this.sort }),` | Core implementation line contributing to the file behavior. |
| 134 | `    }).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 135 | `      next: ({ classes, trainersPage, trainerFilterPage, schedules }) => {` | Arrow function definition, often used for callbacks. |
| 136 | `        this.classTypes = classes;` | Core implementation line contributing to the file behavior. |
| 137 | `        this.trainers = trainersPage.docs;` | Core implementation line contributing to the file behavior. |
| 138 | `        this.trainerFilterOptions = trainerFilterPage.docs;` | Core implementation line contributing to the file behavior. |
| 139 | `        this.trainerPage = trainersPage.currentPage;` | Core implementation line contributing to the file behavior. |
| 140 | `        this.trainerTotalPages = trainersPage.totalPages;` | Core implementation line contributing to the file behavior. |
| 141 | `        this.trainerHasNext = trainersPage.hasNext;` | Core implementation line contributing to the file behavior. |
| 142 | `        this.trainerHasPrev = trainersPage.hasPrev;` | Core implementation line contributing to the file behavior. |
| 143 | `        this.applyScheduleResult(schedules);` | Core implementation line contributing to the file behavior. |
| 144 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 145 | `      },` | Core implementation line contributing to the file behavior. |
| 146 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 147 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 148 | `        this.errorMessage = err?.error?.error?.message \|\| 'Failed to load class scheduling data.';` | Declares a core TypeScript structure used by this module. |
| 149 | `      },` | Core implementation line contributing to the file behavior. |
| 150 | `    });` | Core implementation line contributing to the file behavior. |
| 151 | `  }` | Closes the current code/style block scope. |
| 152 | `` | Blank line used to separate logical blocks for readability. |
| 153 | `  private applyScheduleResult(result: any): void {` | Begins a new code/style block scope. |
| 154 | `    this.scheduleDocs = result.docs ?? [];` | Core implementation line contributing to the file behavior. |
| 155 | `    this.schedulePage = result.currentPage ?? 1;` | Core implementation line contributing to the file behavior. |
| 156 | `    this.scheduleTotalPages = result.totalPages ?? 1;` | Core implementation line contributing to the file behavior. |
| 157 | `    this.scheduleTotal = result.totalDocs ?? this.scheduleDocs.length;` | Core implementation line contributing to the file behavior. |
| 158 | `    this.scheduleHasNext = result.hasNext ?? false;` | Core implementation line contributing to the file behavior. |
| 159 | `    this.scheduleHasPrev = result.hasPrev ?? false;` | Core implementation line contributing to the file behavior. |
| 160 | `  }` | Closes the current code/style block scope. |
| 161 | `` | Blank line used to separate logical blocks for readability. |
| 162 | `  loadSchedules(page = this.schedulePage): void {` | Begins a new code/style block scope. |
| 163 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 164 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 165 | `    this.scheduleService` | Core implementation line contributing to the file behavior. |
| 166 | `      .listSchedules({` | Begins a new code/style block scope. |
| 167 | `        page,` | Core implementation line contributing to the file behavior. |
| 168 | `        limit: this.scheduleLimit,` | Core implementation line contributing to the file behavior. |
| 169 | `        sort: this.sort,` | Core implementation line contributing to the file behavior. |
| 170 | `        q: this.q,` | Core implementation line contributing to the file behavior. |
| 171 | `        searchField: this.searchField,` | Core implementation line contributing to the file behavior. |
| 172 | `        dayOfWeek: this.dayOfWeek,` | Core implementation line contributing to the file behavior. |
| 173 | `        trainerId: this.trainerIdFilter,` | Core implementation line contributing to the file behavior. |
| 174 | `      })` | Core implementation line contributing to the file behavior. |
| 175 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 176 | `        next: (result) => {` | Arrow function definition, often used for callbacks. |
| 177 | `          this.applyScheduleResult(result);` | Core implementation line contributing to the file behavior. |
| 178 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 179 | `        },` | Core implementation line contributing to the file behavior. |
| 180 | `        error: (err) => {` | Arrow function definition, often used for callbacks. |
| 181 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 182 | `          this.errorMessage = err?.error?.error?.message \|\| 'Could not load schedules.';` | Core implementation line contributing to the file behavior. |
| 183 | `        },` | Core implementation line contributing to the file behavior. |
| 184 | `      });` | Core implementation line contributing to the file behavior. |
| 185 | `  }` | Closes the current code/style block scope. |
| 186 | `` | Blank line used to separate logical blocks for readability. |
| 187 | `  applyFilters(): void {` | Begins a new code/style block scope. |
| 188 | `    this.loadSchedules(1);` | Core implementation line contributing to the file behavior. |
| 189 | `  }` | Closes the current code/style block scope. |
| 190 | `` | Blank line used to separate logical blocks for readability. |
| 191 | `  clearFilters(): void {` | Begins a new code/style block scope. |
| 192 | `    this.sort = 'desc';` | Core implementation line contributing to the file behavior. |
| 193 | `    this.q = '';` | Core implementation line contributing to the file behavior. |
| 194 | `    this.searchField = 'className';` | Core implementation line contributing to the file behavior. |
| 195 | `    this.dayOfWeek = '';` | Core implementation line contributing to the file behavior. |
| 196 | `    this.trainerIdFilter = '';` | Core implementation line contributing to the file behavior. |
| 197 | `    this.loadSchedules(1);` | Core implementation line contributing to the file behavior. |
| 198 | `  }` | Closes the current code/style block scope. |
| 199 | `` | Blank line used to separate logical blocks for readability. |
| 200 | `  openCreateModal(): void {` | Begins a new code/style block scope. |
| 201 | `    this.showCreateModal = true;` | Core implementation line contributing to the file behavior. |
| 202 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 203 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 204 | `    this.selectedCreateTrainerId = '';` | Core implementation line contributing to the file behavior. |
| 205 | `    this.selectedCreateDays.clear();` | Core implementation line contributing to the file behavior. |
| 206 | `    this.createForm.reset({` | Begins a new code/style block scope. |
| 207 | `      classId: '',` | Core implementation line contributing to the file behavior. |
| 208 | `      startTime: '',` | Core implementation line contributing to the file behavior. |
| 209 | `      endTime: '',` | Core implementation line contributing to the file behavior. |
| 210 | `      validFrom: '',` | Core implementation line contributing to the file behavior. |
| 211 | `      validUntil: '',` | Core implementation line contributing to the file behavior. |
| 212 | `      location: '',` | Core implementation line contributing to the file behavior. |
| 213 | `      capacity: 20,` | Core implementation line contributing to the file behavior. |
| 214 | `      isActive: true,` | Core implementation line contributing to the file behavior. |
| 215 | `    });` | Core implementation line contributing to the file behavior. |
| 216 | `    this.loadTrainers(1);` | Core implementation line contributing to the file behavior. |
| 217 | `  }` | Closes the current code/style block scope. |
| 218 | `` | Blank line used to separate logical blocks for readability. |
| 219 | `  closeCreateModal(): void {` | Begins a new code/style block scope. |
| 220 | `    if (this.creating \|\| this.checkingConflict) return;` | Conditional branch: executes block only when condition is true. |
| 221 | `    this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 222 | `  }` | Closes the current code/style block scope. |
| 223 | `` | Blank line used to separate logical blocks for readability. |
| 224 | `  loadTrainers(page = this.trainerPage): void {` | Begins a new code/style block scope. |
| 225 | `    this.scheduleService.listTrainers(page, 10).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 226 | `      next: (res) => {` | Arrow function definition, often used for callbacks. |
| 227 | `        this.trainers = res.docs;` | Core implementation line contributing to the file behavior. |
| 228 | `        this.trainerPage = res.currentPage;` | Core implementation line contributing to the file behavior. |
| 229 | `        this.trainerTotalPages = res.totalPages;` | Core implementation line contributing to the file behavior. |
| 230 | `        this.trainerHasNext = res.hasNext;` | Core implementation line contributing to the file behavior. |
| 231 | `        this.trainerHasPrev = res.hasPrev;` | Core implementation line contributing to the file behavior. |
| 232 | `      },` | Core implementation line contributing to the file behavior. |
| 233 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 234 | `        this.errorMessage = 'Could not load trainers.';` | Core implementation line contributing to the file behavior. |
| 235 | `      },` | Core implementation line contributing to the file behavior. |
| 236 | `    });` | Core implementation line contributing to the file behavior. |
| 237 | `  }` | Closes the current code/style block scope. |
| 238 | `` | Blank line used to separate logical blocks for readability. |
| 239 | `  toggleCreateDay(day: DayCode, checked: boolean): void {` | Begins a new code/style block scope. |
| 240 | `    if (checked) this.selectedCreateDays.add(day);` | Conditional branch: executes block only when condition is true. |
| 241 | `    else this.selectedCreateDays.delete(day);` | Alternative branch when previous condition is not met. |
| 242 | `  }` | Closes the current code/style block scope. |
| 243 | `` | Blank line used to separate logical blocks for readability. |
| 244 | `  toggleEditDay(day: DayCode, checked: boolean): void {` | Begins a new code/style block scope. |
| 245 | `    if (checked) this.selectedEditDays.add(day);` | Conditional branch: executes block only when condition is true. |
| 246 | `    else this.selectedEditDays.delete(day);` | Alternative branch when previous condition is not met. |
| 247 | `  }` | Closes the current code/style block scope. |
| 248 | `` | Blank line used to separate logical blocks for readability. |
| 249 | `  createSchedule(): void {` | Begins a new code/style block scope. |
| 250 | `    this.createForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 251 | `    if (this.createForm.invalid \|\| !this.selectedCreateTrainerId \|\| !this.selectedCreateDays.size \|\| this.creating) {` | Conditional branch: executes block only when condition is true. |
| 252 | `      if (!this.selectedCreateTrainerId \|\| !this.selectedCreateDays.size) {` | Conditional branch: executes block only when condition is true. |
| 253 | `        this.errorMessage = 'Please select trainer and at least one day of week.';` | Core implementation line contributing to the file behavior. |
| 254 | `      }` | Closes the current code/style block scope. |
| 255 | `      return;` | Core implementation line contributing to the file behavior. |
| 256 | `    }` | Closes the current code/style block scope. |
| 257 | `` | Blank line used to separate logical blocks for readability. |
| 258 | `    const raw = this.createForm.getRawValue();` | Core implementation line contributing to the file behavior. |
| 259 | `    const days = Array.from(this.selectedCreateDays);` | Core implementation line contributing to the file behavior. |
| 260 | `    const conflictChecks = days.map((day) =>` | Arrow function definition, often used for callbacks. |
| 261 | `      this.scheduleService.checkConflict({` | Begins a new code/style block scope. |
| 262 | `        trainerId: this.selectedCreateTrainerId,` | Core implementation line contributing to the file behavior. |
| 263 | `        dayOfWeek: day,` | Core implementation line contributing to the file behavior. |
| 264 | `        startTime: this.toIsoWithDate(raw.validFrom, raw.startTime),` | Core implementation line contributing to the file behavior. |
| 265 | `        endTime: this.toIsoWithDate(raw.validFrom, raw.endTime),` | Core implementation line contributing to the file behavior. |
| 266 | `      })` | Core implementation line contributing to the file behavior. |
| 267 | `    );` | Closes a function/method call statement. |
| 268 | `` | Blank line used to separate logical blocks for readability. |
| 269 | `    this.checkingConflict = true;` | Core implementation line contributing to the file behavior. |
| 270 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 271 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 272 | `    forkJoin(conflictChecks).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 273 | `      next: (results) => {` | Arrow function definition, often used for callbacks. |
| 274 | `        const hasConflict = results.some((r) => this.isConflictResponse(r));` | Core implementation line contributing to the file behavior. |
| 275 | `        if (hasConflict) {` | Conditional branch: executes block only when condition is true. |
| 276 | `          this.checkingConflict = false;` | Core implementation line contributing to the file behavior. |
| 277 | `          this.errorMessage = 'Schedule conflict detected for selected trainer/time.';` | Core implementation line contributing to the file behavior. |
| 278 | `          return;` | Core implementation line contributing to the file behavior. |
| 279 | `        }` | Closes the current code/style block scope. |
| 280 | `        this.performCreate(raw, days);` | Core implementation line contributing to the file behavior. |
| 281 | `      },` | Core implementation line contributing to the file behavior. |
| 282 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 283 | `        this.checkingConflict = false;` | Core implementation line contributing to the file behavior. |
| 284 | `        this.errorMessage = err?.error?.error?.message \|\| 'Conflict check failed.';` | Core implementation line contributing to the file behavior. |
| 285 | `      },` | Core implementation line contributing to the file behavior. |
| 286 | `    });` | Core implementation line contributing to the file behavior. |
| 287 | `  }` | Closes the current code/style block scope. |
| 288 | `` | Blank line used to separate logical blocks for readability. |
| 289 | `  private performCreate(raw: any, days: DayCode[]): void {` | Begins a new code/style block scope. |
| 290 | `    const payload: ClassSchedulePayload = {` | Begins a new code/style block scope. |
| 291 | `      classId: raw.classId,` | Core implementation line contributing to the file behavior. |
| 292 | `      trainerId: this.selectedCreateTrainerId,` | Core implementation line contributing to the file behavior. |
| 293 | `      dayOfWeek: days[0],` | Core implementation line contributing to the file behavior. |
| 294 | `      daysOfWeek: days,` | Core implementation line contributing to the file behavior. |
| 295 | `      startTime: this.toIsoWithDate(raw.validFrom, raw.startTime),` | Core implementation line contributing to the file behavior. |
| 296 | `      endTime: this.toIsoWithDate(raw.validFrom, raw.endTime),` | Core implementation line contributing to the file behavior. |
| 297 | `      validFrom: raw.validFrom,` | Core implementation line contributing to the file behavior. |
| 298 | `      validUntil: raw.validUntil,` | Core implementation line contributing to the file behavior. |
| 299 | `      location: raw.location.trim(),` | Core implementation line contributing to the file behavior. |
| 300 | `      capacity: Number(raw.capacity),` | Core implementation line contributing to the file behavior. |
| 301 | `      isActive: Boolean(raw.isActive),` | Core implementation line contributing to the file behavior. |
| 302 | `    };` | Core implementation line contributing to the file behavior. |
| 303 | `` | Blank line used to separate logical blocks for readability. |
| 304 | `    this.creating = true;` | Core implementation line contributing to the file behavior. |
| 305 | `    this.scheduleService.createSchedule(payload).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 306 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 307 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 308 | `        this.checkingConflict = false;` | Core implementation line contributing to the file behavior. |
| 309 | `        this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 310 | `        this.successMessage = 'Class schedule created successfully.';` | Core implementation line contributing to the file behavior. |
| 311 | `        this.loadSchedules(1);` | Core implementation line contributing to the file behavior. |
| 312 | `      },` | Core implementation line contributing to the file behavior. |
| 313 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 314 | `        this.creating = false;` | Core implementation line contributing to the file behavior. |
| 315 | `        this.checkingConflict = false;` | Core implementation line contributing to the file behavior. |
| 316 | `        this.errorMessage = err?.error?.error?.message \|\| 'Create schedule failed.';` | Core implementation line contributing to the file behavior. |
| 317 | `      },` | Core implementation line contributing to the file behavior. |
| 318 | `    });` | Core implementation line contributing to the file behavior. |
| 319 | `  }` | Closes the current code/style block scope. |
| 320 | `` | Blank line used to separate logical blocks for readability. |
| 321 | `  openScheduleDetail(schedule: any): void {` | Begins a new code/style block scope. |
| 322 | `    this.showDetailModal = true;` | Core implementation line contributing to the file behavior. |
| 323 | `    this.selectedSchedule = schedule;` | Core implementation line contributing to the file behavior. |
| 324 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 325 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 326 | `    this.selectedClassImageFile = null;` | Core implementation line contributing to the file behavior. |
| 327 | `    this.editingExceptionId = null;` | Core implementation line contributing to the file behavior. |
| 328 | `    this.exceptionForm.reset({` | Begins a new code/style block scope. |
| 329 | `      exceptionDate: '',` | Core implementation line contributing to the file behavior. |
| 330 | `      type: 'CANCELLED',` | Declares a core TypeScript structure used by this module. |
| 331 | `      reason: '',` | Core implementation line contributing to the file behavior. |
| 332 | `      newStartTime: '',` | Core implementation line contributing to the file behavior. |
| 333 | `      newEndTime: '',` | Core implementation line contributing to the file behavior. |
| 334 | `    });` | Core implementation line contributing to the file behavior. |
| 335 | `` | Blank line used to separate logical blocks for readability. |
| 336 | `    this.selectedEditTrainerId = schedule.trainerId ?? '';` | Core implementation line contributing to the file behavior. |
| 337 | `    this.selectedEditDays.clear();` | Core implementation line contributing to the file behavior. |
| 338 | `    const days: string[] = Array.isArray(schedule.daysOfWeek)` | Core implementation line contributing to the file behavior. |
| 339 | `      ? schedule.daysOfWeek` | Core implementation line contributing to the file behavior. |
| 340 | `      : schedule.dayOfWeek` | Core implementation line contributing to the file behavior. |
| 341 | `      ? [schedule.dayOfWeek]` | Core implementation line contributing to the file behavior. |
| 342 | `      : [];` | CSS declaration assigning a style property value. |
| 343 | `    days.forEach((d) => this.selectedEditDays.add(d as DayCode));` | Core implementation line contributing to the file behavior. |
| 344 | `` | Blank line used to separate logical blocks for readability. |
| 345 | `    this.editForm.reset({` | Begins a new code/style block scope. |
| 346 | `      classId: schedule.classId ?? '',` | Core implementation line contributing to the file behavior. |
| 347 | `      startTime: this.toTimeInput(schedule.startTime),` | Core implementation line contributing to the file behavior. |
| 348 | `      endTime: this.toTimeInput(schedule.endTime),` | Core implementation line contributing to the file behavior. |
| 349 | `      validFrom: this.toDateInput(schedule.validFrom),` | Core implementation line contributing to the file behavior. |
| 350 | `      validUntil: this.toDateInput(schedule.validUntil),` | Core implementation line contributing to the file behavior. |
| 351 | `      location: schedule.location ?? '',` | Core implementation line contributing to the file behavior. |
| 352 | `      capacity: Number(schedule.capacity ?? 20),` | Core implementation line contributing to the file behavior. |
| 353 | `      isActive: Boolean(schedule.isActive ?? true),` | Core implementation line contributing to the file behavior. |
| 354 | `    });` | Core implementation line contributing to the file behavior. |
| 355 | `` | Blank line used to separate logical blocks for readability. |
| 356 | `    this.loadExceptions(schedule.id);` | Core implementation line contributing to the file behavior. |
| 357 | `    this.loadTrainers(1);` | Core implementation line contributing to the file behavior. |
| 358 | `  }` | Closes the current code/style block scope. |
| 359 | `` | Blank line used to separate logical blocks for readability. |
| 360 | `  closeDetailModal(): void {` | Begins a new code/style block scope. |
| 361 | `    if (this.updating \|\| this.deleting \|\| this.uploadingImage \|\| this.savingException \|\| !!this.deletingExceptionId) return;` | Conditional branch: executes block only when condition is true. |
| 362 | `    this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 363 | `    this.selectedSchedule = null;` | Core implementation line contributing to the file behavior. |
| 364 | `  }` | Closes the current code/style block scope. |
| 365 | `` | Blank line used to separate logical blocks for readability. |
| 366 | `  updateSchedule(): void {` | Begins a new code/style block scope. |
| 367 | `    this.editForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 368 | `    if (!this.selectedSchedule?.id \|\| this.editForm.invalid \|\| !this.selectedEditTrainerId \|\| !this.selectedEditDays.size) {` | Conditional branch: executes block only when condition is true. |
| 369 | `      this.errorMessage = 'Please complete required fields, select trainer and schedule days.';` | Core implementation line contributing to the file behavior. |
| 370 | `      return;` | Core implementation line contributing to the file behavior. |
| 371 | `    }` | Closes the current code/style block scope. |
| 372 | `` | Blank line used to separate logical blocks for readability. |
| 373 | `    const raw = this.editForm.getRawValue();` | Core implementation line contributing to the file behavior. |
| 374 | `    const days = Array.from(this.selectedEditDays);` | Core implementation line contributing to the file behavior. |
| 375 | `    const payload: ClassSchedulePayload = {` | Begins a new code/style block scope. |
| 376 | `      classId: raw.classId,` | Core implementation line contributing to the file behavior. |
| 377 | `      trainerId: this.selectedEditTrainerId,` | Core implementation line contributing to the file behavior. |
| 378 | `      dayOfWeek: days[0],` | Core implementation line contributing to the file behavior. |
| 379 | `      daysOfWeek: days,` | Core implementation line contributing to the file behavior. |
| 380 | `      startTime: this.toIsoWithDate(raw.validFrom, raw.startTime),` | Core implementation line contributing to the file behavior. |
| 381 | `      endTime: this.toIsoWithDate(raw.validFrom, raw.endTime),` | Core implementation line contributing to the file behavior. |
| 382 | `      validFrom: raw.validFrom,` | Core implementation line contributing to the file behavior. |
| 383 | `      validUntil: raw.validUntil,` | Core implementation line contributing to the file behavior. |
| 384 | `      location: raw.location.trim(),` | Core implementation line contributing to the file behavior. |
| 385 | `      capacity: Number(raw.capacity),` | Core implementation line contributing to the file behavior. |
| 386 | `      isActive: Boolean(raw.isActive),` | Core implementation line contributing to the file behavior. |
| 387 | `    };` | Core implementation line contributing to the file behavior. |
| 388 | `` | Blank line used to separate logical blocks for readability. |
| 389 | `    this.updating = true;` | Core implementation line contributing to the file behavior. |
| 390 | `    this.scheduleService.updateSchedule(this.selectedSchedule.id, payload).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 391 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 392 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 393 | `        this.successMessage = 'Schedule updated successfully.';` | Core implementation line contributing to the file behavior. |
| 394 | `        this.loadSchedules(this.schedulePage);` | Core implementation line contributing to the file behavior. |
| 395 | `        this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 396 | `      },` | Core implementation line contributing to the file behavior. |
| 397 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 398 | `        this.updating = false;` | Core implementation line contributing to the file behavior. |
| 399 | `        this.errorMessage = err?.error?.error?.message \|\| 'Update schedule failed.';` | Core implementation line contributing to the file behavior. |
| 400 | `      },` | Core implementation line contributing to the file behavior. |
| 401 | `    });` | Core implementation line contributing to the file behavior. |
| 402 | `  }` | Closes the current code/style block scope. |
| 403 | `` | Blank line used to separate logical blocks for readability. |
| 404 | `  async deleteSchedule(): Promise<void> {` | Begins a new code/style block scope. |
| 405 | `    if (!this.selectedSchedule?.id \|\| this.deleting) return;` | Conditional branch: executes block only when condition is true. |
| 406 | `    const confirmed = await this.confirmDialog.confirm('Delete this schedule?', {` | Begins a new code/style block scope. |
| 407 | `      title: 'Confirm Delete Schedule',` | Core implementation line contributing to the file behavior. |
| 408 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 409 | `    });` | Core implementation line contributing to the file behavior. |
| 410 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 411 | `` | Blank line used to separate logical blocks for readability. |
| 412 | `    this.deleting = true;` | Core implementation line contributing to the file behavior. |
| 413 | `    this.scheduleService.deleteSchedule(this.selectedSchedule.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 414 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 415 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 416 | `        this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 417 | `        this.selectedSchedule = null;` | Core implementation line contributing to the file behavior. |
| 418 | `        this.successMessage = 'Schedule deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 419 | `        this.loadSchedules(1);` | Core implementation line contributing to the file behavior. |
| 420 | `      },` | Core implementation line contributing to the file behavior. |
| 421 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 422 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 423 | `        this.errorMessage = err?.error?.error?.message \|\| 'Delete schedule failed.';` | Core implementation line contributing to the file behavior. |
| 424 | `      },` | Core implementation line contributing to the file behavior. |
| 425 | `    });` | Core implementation line contributing to the file behavior. |
| 426 | `  }` | Closes the current code/style block scope. |
| 427 | `` | Blank line used to separate logical blocks for readability. |
| 428 | `  onClassImageSelected(event: Event): void {` | Begins a new code/style block scope. |
| 429 | `    const input = event.target as HTMLInputElement;` | Core implementation line contributing to the file behavior. |
| 430 | `    const file = input.files?.[0] ?? null;` | Core implementation line contributing to the file behavior. |
| 431 | `    this.selectedClassImageFile = file;` | Core implementation line contributing to the file behavior. |
| 432 | `  }` | Closes the current code/style block scope. |
| 433 | `` | Blank line used to separate logical blocks for readability. |
| 434 | `  uploadClassImage(): void {` | Begins a new code/style block scope. |
| 435 | `    const classId = this.selectedSchedule?.id` | Core implementation line contributing to the file behavior. |
| 436 | `    if (!classId \|\| !this.selectedClassImageFile) return;` | Conditional branch: executes block only when condition is true. |
| 437 | `    this.uploadingImage = true;` | Core implementation line contributing to the file behavior. |
| 438 | `    this.scheduleService.uploadClassImage(classId, this.selectedClassImageFile).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 439 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 440 | `        this.uploadingImage = false;` | Core implementation line contributing to the file behavior. |
| 441 | `        this.selectedClassImageFile = null;` | Core implementation line contributing to the file behavior. |
| 442 | `        this.successMessage = 'Class cover image uploaded successfully.';` | Core implementation line contributing to the file behavior. |
| 443 | `      },` | Core implementation line contributing to the file behavior. |
| 444 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 445 | `        this.uploadingImage = false;` | Core implementation line contributing to the file behavior. |
| 446 | `        this.errorMessage = err?.error?.error?.message \|\| 'Upload class image failed.';` | Declares a core TypeScript structure used by this module. |
| 447 | `      },` | Core implementation line contributing to the file behavior. |
| 448 | `    });` | Core implementation line contributing to the file behavior. |
| 449 | `  }` | Closes the current code/style block scope. |
| 450 | `` | Blank line used to separate logical blocks for readability. |
| 451 | `  loadExceptions(scheduleId: string): void {` | Begins a new code/style block scope. |
| 452 | `    this.loadingExceptions = true;` | Core implementation line contributing to the file behavior. |
| 453 | `    this.scheduleService.listExceptions(scheduleId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 454 | `      next: (rows) => {` | Arrow function definition, often used for callbacks. |
| 455 | `        this.exceptions = rows;` | Core implementation line contributing to the file behavior. |
| 456 | `        this.loadingExceptions = false;` | Core implementation line contributing to the file behavior. |
| 457 | `      },` | Core implementation line contributing to the file behavior. |
| 458 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 459 | `        this.loadingExceptions = false;` | Core implementation line contributing to the file behavior. |
| 460 | `        this.exceptions = [];` | Core implementation line contributing to the file behavior. |
| 461 | `      },` | Core implementation line contributing to the file behavior. |
| 462 | `    });` | Core implementation line contributing to the file behavior. |
| 463 | `  }` | Closes the current code/style block scope. |
| 464 | `` | Blank line used to separate logical blocks for readability. |
| 465 | `  editException(exception: any): void {` | Begins a new code/style block scope. |
| 466 | `    this.editingExceptionId = exception.id;` | Core implementation line contributing to the file behavior. |
| 467 | `    this.exceptionForm.reset({` | Begins a new code/style block scope. |
| 468 | `      exceptionDate: this.toDateInput(exception.exceptionDate),` | Core implementation line contributing to the file behavior. |
| 469 | `      type: exception.type ?? 'CANCELLED',` | Declares a core TypeScript structure used by this module. |
| 470 | `      reason: exception.reason ?? '',` | Core implementation line contributing to the file behavior. |
| 471 | `      newStartTime: this.toTimeInput(exception.newStartTime),` | Core implementation line contributing to the file behavior. |
| 472 | `      newEndTime: this.toTimeInput(exception.newEndTime),` | Core implementation line contributing to the file behavior. |
| 473 | `    });` | Core implementation line contributing to the file behavior. |
| 474 | `  }` | Closes the current code/style block scope. |
| 475 | `` | Blank line used to separate logical blocks for readability. |
| 476 | `  cancelExceptionEdit(): void {` | Begins a new code/style block scope. |
| 477 | `    this.editingExceptionId = null;` | Core implementation line contributing to the file behavior. |
| 478 | `    this.exceptionForm.reset({` | Begins a new code/style block scope. |
| 479 | `      exceptionDate: '',` | Core implementation line contributing to the file behavior. |
| 480 | `      type: 'CANCELLED',` | Declares a core TypeScript structure used by this module. |
| 481 | `      reason: '',` | Core implementation line contributing to the file behavior. |
| 482 | `      newStartTime: '',` | Core implementation line contributing to the file behavior. |
| 483 | `      newEndTime: '',` | Core implementation line contributing to the file behavior. |
| 484 | `    });` | Core implementation line contributing to the file behavior. |
| 485 | `  }` | Closes the current code/style block scope. |
| 486 | `` | Blank line used to separate logical blocks for readability. |
| 487 | `  saveException(): void {` | Begins a new code/style block scope. |
| 488 | `    if (!this.selectedSchedule?.id \|\| this.savingException) return;` | Conditional branch: executes block only when condition is true. |
| 489 | `    this.exceptionForm.markAllAsTouched();` | Core implementation line contributing to the file behavior. |
| 490 | `    if (this.exceptionForm.invalid) return;` | Conditional branch: executes block only when condition is true. |
| 491 | `` | Blank line used to separate logical blocks for readability. |
| 492 | `    const raw = this.exceptionForm.getRawValue();` | Core implementation line contributing to the file behavior. |
| 493 | `    const payload: ScheduleExceptionPayload = {` | Begins a new code/style block scope. |
| 494 | `      exceptionDate: raw.exceptionDate,` | Core implementation line contributing to the file behavior. |
| 495 | `      type: raw.type,` | Declares a core TypeScript structure used by this module. |
| 496 | `      reason: raw.reason?.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 497 | `      newStartTime: raw.newStartTime \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 498 | `      newEndTime: raw.newEndTime \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 499 | `    };` | Core implementation line contributing to the file behavior. |
| 500 | `` | Blank line used to separate logical blocks for readability. |
| 501 | `    this.savingException = true;` | Core implementation line contributing to the file behavior. |
| 502 | `    const request$ = this.editingExceptionId` | Core implementation line contributing to the file behavior. |
| 503 | `      ? this.scheduleService.updateException(this.editingExceptionId, payload)` | Core implementation line contributing to the file behavior. |
| 504 | `      : this.scheduleService.createException(this.selectedSchedule.id, payload);` | CSS declaration assigning a style property value. |
| 505 | `` | Blank line used to separate logical blocks for readability. |
| 506 | `    request$.subscribe({` | Subscribes to an Observable to react to async emissions. |
| 507 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 508 | `        this.savingException = false;` | Core implementation line contributing to the file behavior. |
| 509 | `        this.successMessage = this.editingExceptionId` | Core implementation line contributing to the file behavior. |
| 510 | `          ? 'Exception updated successfully.'` | Core implementation line contributing to the file behavior. |
| 511 | `          : 'Exception created successfully.';` | CSS declaration assigning a style property value. |
| 512 | `        this.cancelExceptionEdit();` | Core implementation line contributing to the file behavior. |
| 513 | `        this.loadExceptions(this.selectedSchedule.id);` | Core implementation line contributing to the file behavior. |
| 514 | `      },` | Core implementation line contributing to the file behavior. |
| 515 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 516 | `        this.savingException = false;` | Core implementation line contributing to the file behavior. |
| 517 | `        this.errorMessage = err?.error?.error?.message \|\| 'Save exception failed.';` | Core implementation line contributing to the file behavior. |
| 518 | `      },` | Core implementation line contributing to the file behavior. |
| 519 | `    });` | Core implementation line contributing to the file behavior. |
| 520 | `  }` | Closes the current code/style block scope. |
| 521 | `` | Blank line used to separate logical blocks for readability. |
| 522 | `  async deleteException(exceptionId: string): Promise<void> {` | Begins a new code/style block scope. |
| 523 | `    if (!exceptionId \|\| this.deletingExceptionId) return;` | Conditional branch: executes block only when condition is true. |
| 524 | `    const confirmed = await this.confirmDialog.confirm('Delete this schedule exception?', {` | Begins a new code/style block scope. |
| 525 | `      title: 'Confirm Delete Exception',` | Core implementation line contributing to the file behavior. |
| 526 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 527 | `    });` | Core implementation line contributing to the file behavior. |
| 528 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 529 | `` | Blank line used to separate logical blocks for readability. |
| 530 | `    this.deletingExceptionId = exceptionId;` | Core implementation line contributing to the file behavior. |
| 531 | `    this.scheduleService.deleteException(exceptionId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 532 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 533 | `        this.deletingExceptionId = null;` | Core implementation line contributing to the file behavior. |
| 534 | `        if (this.selectedSchedule?.id) this.loadExceptions(this.selectedSchedule.id);` | Conditional branch: executes block only when condition is true. |
| 535 | `      },` | Core implementation line contributing to the file behavior. |
| 536 | `      error: (err) => {` | Arrow function definition, often used for callbacks. |
| 537 | `        this.deletingExceptionId = null;` | Core implementation line contributing to the file behavior. |
| 538 | `        this.errorMessage = err?.error?.error?.message \|\| 'Delete exception failed.';` | Core implementation line contributing to the file behavior. |
| 539 | `      },` | Core implementation line contributing to the file behavior. |
| 540 | `    });` | Core implementation line contributing to the file behavior. |
| 541 | `  }` | Closes the current code/style block scope. |
| 542 | `` | Blank line used to separate logical blocks for readability. |
| 543 | `  previousSchedulePage(): void {` | Begins a new code/style block scope. |
| 544 | `    if (!this.scheduleHasPrev \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 545 | `    this.loadSchedules(this.schedulePage - 1);` | Core implementation line contributing to the file behavior. |
| 546 | `  }` | Closes the current code/style block scope. |
| 547 | `` | Blank line used to separate logical blocks for readability. |
| 548 | `  nextSchedulePage(): void {` | Begins a new code/style block scope. |
| 549 | `    if (!this.scheduleHasNext \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 550 | `    this.loadSchedules(this.schedulePage + 1);` | Core implementation line contributing to the file behavior. |
| 551 | `  }` | Closes the current code/style block scope. |
| 552 | `` | Blank line used to separate logical blocks for readability. |
| 553 | `  onBackdropClick(event: MouseEvent, modalType: 'create' \| 'detail'): void {` | Begins a new code/style block scope. |
| 554 | `    if (event.target !== event.currentTarget) return;` | Conditional branch: executes block only when condition is true. |
| 555 | `    if (modalType === 'create') this.closeCreateModal();` | Conditional branch: executes block only when condition is true. |
| 556 | `    else this.closeDetailModal();` | Alternative branch when previous condition is not met. |
| 557 | `  }` | Closes the current code/style block scope. |
| 558 | `` | Blank line used to separate logical blocks for readability. |
| 559 | `  trainerName(trainer: TrainerItem): string {` | Begins a new code/style block scope. |
| 560 | `    const full = \`${trainer.firstName ?? ''} ${trainer.lastName ?? ''}\`.trim();` | Core implementation line contributing to the file behavior. |
| 561 | `    return full \|\| trainer.email \|\| 'Trainer';` | Returns a value from the current function/method. |
| 562 | `  }` | Closes the current code/style block scope. |
| 563 | `` | Blank line used to separate logical blocks for readability. |
| 564 | `  classNameById(classId: string): string {` | Begins a new code/style block scope. |
| 565 | `    return this.classTypes.find((c) => c.id === classId)?.className ?? classId;` | Returns a value from the current function/method. |
| 566 | `  }` | Closes the current code/style block scope. |
| 567 | `` | Blank line used to separate logical blocks for readability. |
| 568 | `  displayTime(value: string \| undefined): string {` | Begins a new code/style block scope. |
| 569 | `    if (!value) return '-';` | Conditional branch: executes block only when condition is true. |
| 570 | `    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);` | Conditional branch: executes block only when condition is true. |
| 571 | `    const date = new Date(value);` | Core implementation line contributing to the file behavior. |
| 572 | `    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(11, 16);` | Conditional branch: executes block only when condition is true. |
| 573 | `    return value.slice(0, 5);` | Returns a value from the current function/method. |
| 574 | `  }` | Closes the current code/style block scope. |
| 575 | `` | Blank line used to separate logical blocks for readability. |
| 576 | `  private isConflictResponse(value: any): boolean {` | Begins a new code/style block scope. |
| 577 | `    return Boolean(value?.conflict \|\| value?.hasConflict \|\| value?.isConflict \|\| value?.available === false);` | Returns a value from the current function/method. |
| 578 | `  }` | Closes the current code/style block scope. |
| 579 | `` | Blank line used to separate logical blocks for readability. |
| 580 | `  private toIsoWithDate(dateValue: string, timeValue: string): string {` | Begins a new code/style block scope. |
| 581 | `    const time = (timeValue \|\| '').slice(0, 5);` | Core implementation line contributing to the file behavior. |
| 582 | `    return \`${dateValue}T${time}:00Z\`;` | Returns a value from the current function/method. |
| 583 | `  }` | Closes the current code/style block scope. |
| 584 | `` | Blank line used to separate logical blocks for readability. |
| 585 | `  private toTimeInput(value: string \| null \| undefined): string {` | Begins a new code/style block scope. |
| 586 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 587 | `    if (/^\d{2}:\d{2}$/.test(value)) return value;` | Conditional branch: executes block only when condition is true. |
| 588 | `    const date = new Date(value);` | Core implementation line contributing to the file behavior. |
| 589 | `    if (!Number.isNaN(date.getTime())) {` | Conditional branch: executes block only when condition is true. |
| 590 | `      return date.toISOString().slice(11, 16);` | Returns a value from the current function/method. |
| 591 | `    }` | Closes the current code/style block scope. |
| 592 | `    return value.slice(0, 5);` | Returns a value from the current function/method. |
| 593 | `  }` | Closes the current code/style block scope. |
| 594 | `` | Blank line used to separate logical blocks for readability. |
| 595 | `  private toDateInput(value: string \| null \| undefined): string {` | Begins a new code/style block scope. |
| 596 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 597 | `    const date = new Date(value);` | Core implementation line contributing to the file behavior. |
| 598 | `    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10);` | Conditional branch: executes block only when condition is true. |
| 599 | `    return value.slice(0, 10);` | Returns a value from the current function/method. |
| 600 | `  }` | Closes the current code/style block scope. |
| 601 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.