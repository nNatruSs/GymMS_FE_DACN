# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-item-list/booking-item-list.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-item-list/booking-item-list.component.ts`
- **Total lines:** `419`
- **Non-empty lines:** `371`
- **Import statements:** `5`
- **Class-like declarations found:** `5`
- **Function/method-like signatures found (approx):** `5`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormsModule } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { BookingService } from '../../../../../services/booking.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { StorageService } from '../../../../../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `@Component({` | Angular decorator declaring metadata for this component. |
| 8 | `  selector: 'app-booking-item-list',` | Core implementation line contributing to the file behavior. |
| 9 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 10 | `  imports: [CommonModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 11 | `  templateUrl: './booking-item-list.component.html',` | Core implementation line contributing to the file behavior. |
| 12 | `  styleUrls: ['./booking-item-list.component.css']` | Core implementation line contributing to the file behavior. |
| 13 | `})` | Core implementation line contributing to the file behavior. |
| 14 | `export class BookingItemListComponent implements OnInit {` | Exports symbols so other files can import this logic. |
| 15 | `  @Input() branch!: any;` | Angular input property declaration (data passed from parent). |
| 16 | `  @Input() mode!: 'class' \| 'trainer';` | Angular input property declaration (data passed from parent). |
| 17 | `  @Output() back = new EventEmitter();` | Angular output event declaration (events emitted to parent). |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `  @Input() hasMembership = true;` | Angular input property declaration (data passed from parent). |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `  selectedItem: any = null;` | CSS declaration assigning a style property value. |
| 22 | `  selectedClass: any = null;` | CSS declaration assigning a style property value. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `  items: any[] = [];` | CSS declaration assigning a style property value. |
| 25 | `  classCategories: string[] = [];` | CSS declaration assigning a style property value. |
| 26 | `  classFilters: {` | Begins a new code/style block scope. |
| 27 | `    page: number;` | CSS declaration assigning a style property value. |
| 28 | `    limit: number;` | CSS declaration assigning a style property value. |
| 29 | `    sort: 'asc' \| 'desc' \| '';` | CSS declaration assigning a style property value. |
| 30 | `    q: string;` | CSS declaration assigning a style property value. |
| 31 | `    searchField: string;` | CSS declaration assigning a style property value. |
| 32 | `    dayOfWeek: string;` | CSS declaration assigning a style property value. |
| 33 | `  } = {` | Begins a new code/style block scope. |
| 34 | `    page: 1,` | Core implementation line contributing to the file behavior. |
| 35 | `    limit: 12,` | Core implementation line contributing to the file behavior. |
| 36 | `    sort: 'desc',` | Core implementation line contributing to the file behavior. |
| 37 | `    q: '',` | Core implementation line contributing to the file behavior. |
| 38 | `    searchField: 'className',` | Core implementation line contributing to the file behavior. |
| 39 | `    dayOfWeek: '',` | Core implementation line contributing to the file behavior. |
| 40 | `  };` | Core implementation line contributing to the file behavior. |
| 41 | `  classPageMeta = {` | Begins a new code/style block scope. |
| 42 | `    totalDocs: 0,` | Core implementation line contributing to the file behavior. |
| 43 | `    totalPages: 1,` | Core implementation line contributing to the file behavior. |
| 44 | `    hasNext: false,` | Core implementation line contributing to the file behavior. |
| 45 | `    hasPrev: false,` | Core implementation line contributing to the file behavior. |
| 46 | `  };` | Core implementation line contributing to the file behavior. |
| 47 | `  bookingStartDate = '';` | Core implementation line contributing to the file behavior. |
| 48 | `  bookingEndDate = '';` | Core implementation line contributing to the file behavior. |
| 49 | `  bookingClassSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 50 | `  trainerBookingSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 51 | `  trainerDetailLoading = false;` | Core implementation line contributing to the file behavior. |
| 52 | `  trainerProfile: any \| null = null;` | CSS declaration assigning a style property value. |
| 53 | `  trainerSlots: any[] = [];` | CSS declaration assigning a style property value. |
| 54 | `  selectedTrainerSlot: any \| null = null;` | CSS declaration assigning a style property value. |
| 55 | `  trainerBookingNotes = '';` | Core implementation line contributing to the file behavior. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `  trainerFilters: {` | Begins a new code/style block scope. |
| 58 | `    q: string;` | CSS declaration assigning a style property value. |
| 59 | `    specialization: string;` | CSS declaration assigning a style property value. |
| 60 | `    date: string;` | CSS declaration assigning a style property value. |
| 61 | `    availableOnly: boolean;` | CSS declaration assigning a style property value. |
| 62 | `    priceMin: string;` | CSS declaration assigning a style property value. |
| 63 | `    priceMax: string;` | CSS declaration assigning a style property value. |
| 64 | `  } = {` | Begins a new code/style block scope. |
| 65 | `    q: '',` | Core implementation line contributing to the file behavior. |
| 66 | `    specialization: '',` | Core implementation line contributing to the file behavior. |
| 67 | `    date: '',` | Core implementation line contributing to the file behavior. |
| 68 | `    availableOnly: false,` | Core implementation line contributing to the file behavior. |
| 69 | `    priceMin: '',` | Core implementation line contributing to the file behavior. |
| 70 | `    priceMax: '',` | Core implementation line contributing to the file behavior. |
| 71 | `  };` | Core implementation line contributing to the file behavior. |
| 72 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 73 | `` | Blank line used to separate logical blocks for readability. |
| 74 | `  constructor(private bookingService: BookingService, private storage: StorageService) {}` | Class constructor for dependency injection and initial setup. |
| 75 | `` | Blank line used to separate logical blocks for readability. |
| 76 | `  ngOnInit() {` | Angular lifecycle hook that runs after component initialization. |
| 77 | `    if (this.mode === 'class') {` | Conditional branch: executes block only when condition is true. |
| 78 | `      this.loadClassCategories();` | Core implementation line contributing to the file behavior. |
| 79 | `      this.loadClassSchedules(1);` | Core implementation line contributing to the file behavior. |
| 80 | `      return;` | Core implementation line contributing to the file behavior. |
| 81 | `    }` | Closes the current code/style block scope. |
| 82 | `` | Blank line used to separate logical blocks for readability. |
| 83 | `    this.loadTrainerList();` | Core implementation line contributing to the file behavior. |
| 84 | `  }` | Closes the current code/style block scope. |
| 85 | `  ` | Blank line used to separate logical blocks for readability. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `  open(item: any) {` | Begins a new code/style block scope. |
| 88 | `    if (!this.hasMembership) return;` | Conditional branch: executes block only when condition is true. |
| 89 | `    if (this.mode === 'class') {` | Conditional branch: executes block only when condition is true. |
| 90 | `      this.selectedClass = item;` | Core implementation line contributing to the file behavior. |
| 91 | `      const minDate = this.toDateInput(item.validFrom);` | Core implementation line contributing to the file behavior. |
| 92 | `      const maxDate = this.toDateInput(item.validUntil);` | Core implementation line contributing to the file behavior. |
| 93 | `      this.bookingStartDate = minDate;` | Core implementation line contributing to the file behavior. |
| 94 | `      this.bookingEndDate = maxDate;` | Core implementation line contributing to the file behavior. |
| 95 | `      return;` | Core implementation line contributing to the file behavior. |
| 96 | `    }` | Closes the current code/style block scope. |
| 97 | `    this.openTrainerDetail(item);` | Core implementation line contributing to the file behavior. |
| 98 | `  }` | Closes the current code/style block scope. |
| 99 | `` | Blank line used to separate logical blocks for readability. |
| 100 | `  close() {` | Begins a new code/style block scope. |
| 101 | `    this.selectedItem = null;` | Core implementation line contributing to the file behavior. |
| 102 | `    this.selectedClass = null;` | Core implementation line contributing to the file behavior. |
| 103 | `    this.bookingClassSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 104 | `    this.trainerBookingSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 105 | `    this.selectedTrainerSlot = null;` | Core implementation line contributing to the file behavior. |
| 106 | `    this.trainerProfile = null;` | Core implementation line contributing to the file behavior. |
| 107 | `    this.trainerSlots = [];` | Core implementation line contributing to the file behavior. |
| 108 | `    this.trainerBookingNotes = '';` | Core implementation line contributing to the file behavior. |
| 109 | `  }` | Closes the current code/style block scope. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `` | Blank line used to separate logical blocks for readability. |
| 112 | `` | Blank line used to separate logical blocks for readability. |
| 113 | `` | Blank line used to separate logical blocks for readability. |
| 114 | `` | Blank line used to separate logical blocks for readability. |
| 115 | `` | Blank line used to separate logical blocks for readability. |
| 116 | `  confirm({ date, time }: { date: string; time: string }) {` | Begins a new code/style block scope. |
| 117 | `    const booking = {` | Begins a new code/style block scope. |
| 118 | `      id: crypto.randomUUID(),` | Core implementation line contributing to the file behavior. |
| 119 | `      user_id: this.storage.getUserId(),` | Core implementation line contributing to the file behavior. |
| 120 | `      type: this.mode,` | Declares a core TypeScript structure used by this module. |
| 121 | `      ref_id: this.mode === 'trainer'` | Core implementation line contributing to the file behavior. |
| 122 | `        ? this.selectedItem.trainerUserId` | Core implementation line contributing to the file behavior. |
| 123 | `        : this.selectedItem.id,` | Core implementation line contributing to the file behavior. |
| 124 | `      branch_id: this.branch.id,` | Core implementation line contributing to the file behavior. |
| 125 | `      date,` | Core implementation line contributing to the file behavior. |
| 126 | `      time,` | Core implementation line contributing to the file behavior. |
| 127 | `      status: 'upcoming',` | Core implementation line contributing to the file behavior. |
| 128 | `      price: this.selectedItem.price` | Core implementation line contributing to the file behavior. |
| 129 | `    };` | Core implementation line contributing to the file behavior. |
| 130 | `` | Blank line used to separate logical blocks for readability. |
| 131 | `    this.bookingService.createBooking(booking).subscribe(() => {` | Subscribes to an Observable to react to async emissions. |
| 132 | `      this.selectedItem = null;` | Core implementation line contributing to the file behavior. |
| 133 | `      alert('Booking successful!');` | Core implementation line contributing to the file behavior. |
| 134 | `    });` | Core implementation line contributing to the file behavior. |
| 135 | `  }` | Closes the current code/style block scope. |
| 136 | `` | Blank line used to separate logical blocks for readability. |
| 137 | `  loadClassCategories(): void {` | Begins a new code/style block scope. |
| 138 | `    this.bookingService.getClassTypes().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 139 | `      next: (classes) => {` | Arrow function definition, often used for callbacks. |
| 140 | `        const categories = (classes ?? []).map((c: any) => c.category).filter(Boolean);` | CSS declaration assigning a style property value. |
| 141 | `        this.classCategories = Array.from(new Set(categories));` | Core implementation line contributing to the file behavior. |
| 142 | `      },` | Core implementation line contributing to the file behavior. |
| 143 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 144 | `        this.classCategories = [];` | Core implementation line contributing to the file behavior. |
| 145 | `      }` | Closes the current code/style block scope. |
| 146 | `    });` | Core implementation line contributing to the file behavior. |
| 147 | `  }` | Closes the current code/style block scope. |
| 148 | `` | Blank line used to separate logical blocks for readability. |
| 149 | `  loadClassSchedules(page = this.classFilters.page): void {` | Begins a new code/style block scope. |
| 150 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 151 | `    this.classFilters.page = page;` | Core implementation line contributing to the file behavior. |
| 152 | `    this.bookingService` | Core implementation line contributing to the file behavior. |
| 153 | `      .listClassSchedules({` | Begins a new code/style block scope. |
| 154 | `        page: this.classFilters.page,` | Core implementation line contributing to the file behavior. |
| 155 | `        limit: this.classFilters.limit,` | Core implementation line contributing to the file behavior. |
| 156 | `        sort: this.classFilters.sort,` | Core implementation line contributing to the file behavior. |
| 157 | `        q: this.classFilters.q,` | Core implementation line contributing to the file behavior. |
| 158 | `        searchField: this.classFilters.searchField,` | Core implementation line contributing to the file behavior. |
| 159 | `        dayOfWeek: this.classFilters.dayOfWeek,` | Core implementation line contributing to the file behavior. |
| 160 | `      })` | Core implementation line contributing to the file behavior. |
| 161 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 162 | `        next: (res) => {` | Arrow function definition, often used for callbacks. |
| 163 | `          const data = res?.data ?? {};` | Core implementation line contributing to the file behavior. |
| 164 | `          this.items = data?.docs ?? [];` | Core implementation line contributing to the file behavior. |
| 165 | `          this.classPageMeta = {` | Begins a new code/style block scope. |
| 166 | `            totalDocs: Number(data?.totalDocs ?? this.items.length),` | Core implementation line contributing to the file behavior. |
| 167 | `            totalPages: Number(data?.totalPages ?? 1),` | Core implementation line contributing to the file behavior. |
| 168 | `            hasNext: Boolean(data?.hasNext),` | Core implementation line contributing to the file behavior. |
| 169 | `            hasPrev: Boolean(data?.hasPrev),` | Core implementation line contributing to the file behavior. |
| 170 | `          };` | Core implementation line contributing to the file behavior. |
| 171 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 172 | `        },` | Core implementation line contributing to the file behavior. |
| 173 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 174 | `          this.items = [];` | Core implementation line contributing to the file behavior. |
| 175 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 176 | `        },` | Core implementation line contributing to the file behavior. |
| 177 | `      });` | Core implementation line contributing to the file behavior. |
| 178 | `  }` | Closes the current code/style block scope. |
| 179 | `` | Blank line used to separate logical blocks for readability. |
| 180 | `  applyClassFilters(): void {` | Begins a new code/style block scope. |
| 181 | `    this.loadClassSchedules(1);` | Core implementation line contributing to the file behavior. |
| 182 | `  }` | Closes the current code/style block scope. |
| 183 | `` | Blank line used to separate logical blocks for readability. |
| 184 | `  clearClassFilters(): void {` | Begins a new code/style block scope. |
| 185 | `    this.classFilters = {` | Begins a new code/style block scope. |
| 186 | `      page: 1,` | Core implementation line contributing to the file behavior. |
| 187 | `      limit: 12,` | Core implementation line contributing to the file behavior. |
| 188 | `      sort: 'desc',` | Core implementation line contributing to the file behavior. |
| 189 | `      q: '',` | Core implementation line contributing to the file behavior. |
| 190 | `      searchField: 'className',` | Core implementation line contributing to the file behavior. |
| 191 | `      dayOfWeek: '',` | Core implementation line contributing to the file behavior. |
| 192 | `    };` | Core implementation line contributing to the file behavior. |
| 193 | `    this.loadClassSchedules(1);` | Core implementation line contributing to the file behavior. |
| 194 | `  }` | Closes the current code/style block scope. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `  prevClassPage(): void {` | Begins a new code/style block scope. |
| 197 | `    if (!this.classPageMeta.hasPrev \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 198 | `    this.loadClassSchedules(this.classFilters.page - 1);` | Core implementation line contributing to the file behavior. |
| 199 | `  }` | Closes the current code/style block scope. |
| 200 | `` | Blank line used to separate logical blocks for readability. |
| 201 | `  nextClassPage(): void {` | Begins a new code/style block scope. |
| 202 | `    if (!this.classPageMeta.hasNext \|\| this.loading) return;` | Conditional branch: executes block only when condition is true. |
| 203 | `    this.loadClassSchedules(this.classFilters.page + 1);` | Core implementation line contributing to the file behavior. |
| 204 | `  }` | Closes the current code/style block scope. |
| 205 | `` | Blank line used to separate logical blocks for readability. |
| 206 | `  getClassLogo(item: any): string {` | Begins a new code/style block scope. |
| 207 | `    return item?.imageUrl \|\| 'assets/logo.svg';` | Returns a value from the current function/method. |
| 208 | `  }` | Closes the current code/style block scope. |
| 209 | `` | Blank line used to separate logical blocks for readability. |
| 210 | `  formatClassTime(value: string): string {` | Begins a new code/style block scope. |
| 211 | `    if (!value) return '-';` | Conditional branch: executes block only when condition is true. |
| 212 | `    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);` | Conditional branch: executes block only when condition is true. |
| 213 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 214 | `    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(11, 16);` | Conditional branch: executes block only when condition is true. |
| 215 | `    return value.slice(0, 5);` | Returns a value from the current function/method. |
| 216 | `  }` | Closes the current code/style block scope. |
| 217 | `` | Blank line used to separate logical blocks for readability. |
| 218 | `  toDateInput(value: string): string {` | Begins a new code/style block scope. |
| 219 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 220 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 221 | `    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);` | Conditional branch: executes block only when condition is true. |
| 222 | `    return value.slice(0, 10);` | Returns a value from the current function/method. |
| 223 | `  }` | Closes the current code/style block scope. |
| 224 | `` | Blank line used to separate logical blocks for readability. |
| 225 | `  canBookClass(): boolean {` | Begins a new code/style block scope. |
| 226 | `    if (!this.selectedClass) return false;` | Conditional branch: executes block only when condition is true. |
| 227 | `    if (!this.bookingStartDate \|\| !this.bookingEndDate) return false;` | Conditional branch: executes block only when condition is true. |
| 228 | `    if (this.bookingStartDate > this.bookingEndDate) return false;` | Conditional branch: executes block only when condition is true. |
| 229 | `    const min = this.toDateInput(this.selectedClass.validFrom);` | Core implementation line contributing to the file behavior. |
| 230 | `    const max = this.toDateInput(this.selectedClass.validUntil);` | Core implementation line contributing to the file behavior. |
| 231 | `    return this.bookingStartDate >= min && this.bookingEndDate <= max;` | Returns a value from the current function/method. |
| 232 | `  }` | Closes the current code/style block scope. |
| 233 | `` | Blank line used to separate logical blocks for readability. |
| 234 | `  confirmClassBooking(): void {` | Begins a new code/style block scope. |
| 235 | `    if (!this.selectedClass \|\| !this.canBookClass() \|\| this.bookingClassSubmitting) return;` | Conditional branch: executes block only when condition is true. |
| 236 | `` | Blank line used to separate logical blocks for readability. |
| 237 | `    this.bookingClassSubmitting = true;` | Core implementation line contributing to the file behavior. |
| 238 | `    this.bookingService` | Core implementation line contributing to the file behavior. |
| 239 | `      .createMyClassBookings({` | Begins a new code/style block scope. |
| 240 | `        bookingStartDate: this.bookingStartDate,` | Core implementation line contributing to the file behavior. |
| 241 | `        bookingEndDate: this.bookingEndDate,` | Core implementation line contributing to the file behavior. |
| 242 | `        classScheduleId: [this.selectedClass.id],` | Core implementation line contributing to the file behavior. |
| 243 | `      })` | Core implementation line contributing to the file behavior. |
| 244 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 245 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 246 | `          this.bookingClassSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 247 | `          alert('Class booking created successfully.');` | Core implementation line contributing to the file behavior. |
| 248 | `          this.selectedClass = null;` | Core implementation line contributing to the file behavior. |
| 249 | `          this.loadClassSchedules(this.classFilters.page);` | Core implementation line contributing to the file behavior. |
| 250 | `        },` | Core implementation line contributing to the file behavior. |
| 251 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 252 | `          this.bookingClassSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 253 | `          alert('Could not create class booking. Please try again.');` | Declares a core TypeScript structure used by this module. |
| 254 | `        },` | Core implementation line contributing to the file behavior. |
| 255 | `      });` | Core implementation line contributing to the file behavior. |
| 256 | `  }` | Closes the current code/style block scope. |
| 257 | `` | Blank line used to separate logical blocks for readability. |
| 258 | `  ` | Blank line used to separate logical blocks for readability. |
| 259 | `  loadTrainerList(): void {` | Begins a new code/style block scope. |
| 260 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 261 | `    this.bookingService` | Core implementation line contributing to the file behavior. |
| 262 | `      .getBookableTrainers({` | Begins a new code/style block scope. |
| 263 | `        q: this.trainerFilters.q ?? '',` | Core implementation line contributing to the file behavior. |
| 264 | `        specialization: this.trainerFilters.specialization ?? '',` | Core implementation line contributing to the file behavior. |
| 265 | `        date: this.trainerFilters.date ?? '',` | Core implementation line contributing to the file behavior. |
| 266 | `        availableOnly: this.trainerFilters.availableOnly ?? false,` | Core implementation line contributing to the file behavior. |
| 267 | `        priceMin: this.trainerFilters.priceMin ? Number(this.trainerFilters.priceMin) : undefined,` | Core implementation line contributing to the file behavior. |
| 268 | `        priceMax: this.trainerFilters.priceMax ? Number(this.trainerFilters.priceMax) : undefined,` | Core implementation line contributing to the file behavior. |
| 269 | `      })` | Core implementation line contributing to the file behavior. |
| 270 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 271 | `        next: (res) => {` | Arrow function definition, often used for callbacks. |
| 272 | `          const payload = res?.data ?? res;` | Core implementation line contributing to the file behavior. |
| 273 | `          const trainers = Array.isArray(payload)` | Core implementation line contributing to the file behavior. |
| 274 | `            ? payload` | Core implementation line contributing to the file behavior. |
| 275 | `            : Array.isArray(payload?.docs)` | Core implementation line contributing to the file behavior. |
| 276 | `              ? payload.docs` | Core implementation line contributing to the file behavior. |
| 277 | `              : Array.isArray(payload?.items)` | Core implementation line contributing to the file behavior. |
| 278 | `                ? payload.items` | Core implementation line contributing to the file behavior. |
| 279 | `                : [];` | CSS declaration assigning a style property value. |
| 280 | `          this.items = trainers;` | Core implementation line contributing to the file behavior. |
| 281 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 282 | `        },` | Core implementation line contributing to the file behavior. |
| 283 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 284 | `          this.items = [];` | Core implementation line contributing to the file behavior. |
| 285 | `          this.loading = false;` | Core implementation line contributing to the file behavior. |
| 286 | `        },` | Core implementation line contributing to the file behavior. |
| 287 | `      });` | Core implementation line contributing to the file behavior. |
| 288 | `  }` | Closes the current code/style block scope. |
| 289 | `` | Blank line used to separate logical blocks for readability. |
| 290 | `  applyTrainerFilters(): void {` | Begins a new code/style block scope. |
| 291 | `    this.loadTrainerList();` | Core implementation line contributing to the file behavior. |
| 292 | `  }` | Closes the current code/style block scope. |
| 293 | `` | Blank line used to separate logical blocks for readability. |
| 294 | `  clearTrainerFilters(): void {` | Begins a new code/style block scope. |
| 295 | `    this.trainerFilters = {` | Begins a new code/style block scope. |
| 296 | `      q: '',` | Core implementation line contributing to the file behavior. |
| 297 | `      specialization: '',` | Core implementation line contributing to the file behavior. |
| 298 | `      date: '',` | Core implementation line contributing to the file behavior. |
| 299 | `      availableOnly: false,` | Core implementation line contributing to the file behavior. |
| 300 | `      priceMin: '',` | Core implementation line contributing to the file behavior. |
| 301 | `      priceMax: '',` | Core implementation line contributing to the file behavior. |
| 302 | `    };` | Core implementation line contributing to the file behavior. |
| 303 | `    this.loadTrainerList();` | Core implementation line contributing to the file behavior. |
| 304 | `  }` | Closes the current code/style block scope. |
| 305 | `` | Blank line used to separate logical blocks for readability. |
| 306 | `  openTrainerDetail(item: any): void {` | Begins a new code/style block scope. |
| 307 | `    this.selectedItem = item;` | Core implementation line contributing to the file behavior. |
| 308 | `    this.trainerProfile = null;` | Core implementation line contributing to the file behavior. |
| 309 | `    this.trainerSlots = [];` | Core implementation line contributing to the file behavior. |
| 310 | `    this.selectedTrainerSlot = null;` | Core implementation line contributing to the file behavior. |
| 311 | `    this.trainerBookingNotes = '';` | Core implementation line contributing to the file behavior. |
| 312 | `    this.trainerDetailLoading = true;` | Core implementation line contributing to the file behavior. |
| 313 | `` | Blank line used to separate logical blocks for readability. |
| 314 | `    const trainerId = item?.id ?? item?.trainerUserId ?? item?.userId;` | Core implementation line contributing to the file behavior. |
| 315 | `    if (!trainerId) {` | Conditional branch: executes block only when condition is true. |
| 316 | `      this.trainerDetailLoading = false;` | Core implementation line contributing to the file behavior. |
| 317 | `      return;` | Core implementation line contributing to the file behavior. |
| 318 | `    }` | Closes the current code/style block scope. |
| 319 | `` | Blank line used to separate logical blocks for readability. |
| 320 | `    this.bookingService.getTrainerProfile(trainerId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 321 | `      next: (profile) => {` | Arrow function definition, often used for callbacks. |
| 322 | `        this.trainerProfile = profile;` | Core implementation line contributing to the file behavior. |
| 323 | `        this.bookingService.getTrainerSlots(trainerId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 324 | `          next: (slots) => {` | Arrow function definition, often used for callbacks. |
| 325 | `            this.trainerSlots = (slots ?? []).filter((slot: any) => slot?.isAvailable !== false);` | CSS declaration assigning a style property value. |
| 326 | `            this.trainerDetailLoading = false;` | Core implementation line contributing to the file behavior. |
| 327 | `          },` | Core implementation line contributing to the file behavior. |
| 328 | `          error: () => {` | Arrow function definition, often used for callbacks. |
| 329 | `            this.trainerSlots = [];` | Core implementation line contributing to the file behavior. |
| 330 | `            this.trainerDetailLoading = false;` | Core implementation line contributing to the file behavior. |
| 331 | `          },` | Core implementation line contributing to the file behavior. |
| 332 | `        });` | Core implementation line contributing to the file behavior. |
| 333 | `      },` | Core implementation line contributing to the file behavior. |
| 334 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 335 | `        this.trainerDetailLoading = false;` | Core implementation line contributing to the file behavior. |
| 336 | `      },` | Core implementation line contributing to the file behavior. |
| 337 | `    });` | Core implementation line contributing to the file behavior. |
| 338 | `  }` | Closes the current code/style block scope. |
| 339 | `` | Blank line used to separate logical blocks for readability. |
| 340 | `  trainerDisplayName(item: any): string {` | Begins a new code/style block scope. |
| 341 | `    return (` | Returns a value from the current function/method. |
| 342 | `      \`${item?.firstName ?? ''} ${item?.lastName ?? ''}\`.trim() \|\|` | Core implementation line contributing to the file behavior. |
| 343 | `      item?.name \|\|` | Core implementation line contributing to the file behavior. |
| 344 | `      item?.trainerName \|\|` | Core implementation line contributing to the file behavior. |
| 345 | `      'Trainer'` | Core implementation line contributing to the file behavior. |
| 346 | `    );` | Closes a function/method call statement. |
| 347 | `  }` | Closes the current code/style block scope. |
| 348 | `` | Blank line used to separate logical blocks for readability. |
| 349 | `  trainerSpecialization(item: any): string {` | Begins a new code/style block scope. |
| 350 | `    const fromArray = item?.specialization ?? item?.areasOfExpertise ?? [];` | Core implementation line contributing to the file behavior. |
| 351 | `    if (Array.isArray(fromArray) && fromArray.length) return fromArray.join(', ');` | Conditional branch: executes block only when condition is true. |
| 352 | `    return item?.specialization \|\| 'No specialization';` | Returns a value from the current function/method. |
| 353 | `  }` | Closes the current code/style block scope. |
| 354 | `` | Blank line used to separate logical blocks for readability. |
| 355 | `  trainerThumbnail(item: any): string {` | Begins a new code/style block scope. |
| 356 | `    return item?.profileImage \|\| item?.avatarUrl \|\| item?.thumbnail \|\| 'assets/logo.svg';` | Returns a value from the current function/method. |
| 357 | `  }` | Closes the current code/style block scope. |
| 358 | `` | Blank line used to separate logical blocks for readability. |
| 359 | `  slotStart(slot: any): string {` | Begins a new code/style block scope. |
| 360 | `    return slot?.startAt \|\| slot?.startTime \|\| slot?.start \|\| '';` | Returns a value from the current function/method. |
| 361 | `  }` | Closes the current code/style block scope. |
| 362 | `` | Blank line used to separate logical blocks for readability. |
| 363 | `  slotEnd(slot: any): string {` | Begins a new code/style block scope. |
| 364 | `    return slot?.endAt \|\| slot?.endTime \|\| slot?.end \|\| '';` | Returns a value from the current function/method. |
| 365 | `  }` | Closes the current code/style block scope. |
| 366 | `` | Blank line used to separate logical blocks for readability. |
| 367 | `  slotTimeLabel(slot: any): string {` | Begins a new code/style block scope. |
| 368 | `    return \`${this.formatDateTime(this.slotStart(slot))} → ${this.formatDateTime(this.slotEnd(slot))}\`;` | Returns a value from the current function/method. |
| 369 | `  }` | Closes the current code/style block scope. |
| 370 | `` | Blank line used to separate logical blocks for readability. |
| 371 | `  formatDateTime(value: string): string {` | Begins a new code/style block scope. |
| 372 | `    if (!value) return '-';` | Conditional branch: executes block only when condition is true. |
| 373 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 374 | `    if (Number.isNaN(d.getTime())) return value;` | Conditional branch: executes block only when condition is true. |
| 375 | `    return d.toLocaleString(undefined, {` | Returns a value from the current function/method. |
| 376 | `      year: 'numeric',` | Core implementation line contributing to the file behavior. |
| 377 | `      month: '2-digit',` | Core implementation line contributing to the file behavior. |
| 378 | `      day: '2-digit',` | Core implementation line contributing to the file behavior. |
| 379 | `      hour: '2-digit',` | Core implementation line contributing to the file behavior. |
| 380 | `      minute: '2-digit',` | Core implementation line contributing to the file behavior. |
| 381 | `      hour12: false,` | Core implementation line contributing to the file behavior. |
| 382 | `    });` | Core implementation line contributing to the file behavior. |
| 383 | `  }` | Closes the current code/style block scope. |
| 384 | `` | Blank line used to separate logical blocks for readability. |
| 385 | `  selectTrainerSlot(slot: any): void {` | Begins a new code/style block scope. |
| 386 | `    if (slot?.isAvailable === false) return;` | Conditional branch: executes block only when condition is true. |
| 387 | `    this.selectedTrainerSlot = slot;` | Core implementation line contributing to the file behavior. |
| 388 | `  }` | Closes the current code/style block scope. |
| 389 | `` | Blank line used to separate logical blocks for readability. |
| 390 | `  confirmTrainerBooking(): void {` | Begins a new code/style block scope. |
| 391 | `    if (!this.selectedItem \|\| !this.selectedTrainerSlot \|\| this.trainerBookingSubmitting) return;` | Conditional branch: executes block only when condition is true. |
| 392 | `    const trainerId = this.selectedItem?.id ?? this.selectedItem?.trainerUserId ?? this.selectedItem?.userId;` | Core implementation line contributing to the file behavior. |
| 393 | `    const startAt = this.slotStart(this.selectedTrainerSlot);` | Core implementation line contributing to the file behavior. |
| 394 | `    const endAt = this.slotEnd(this.selectedTrainerSlot);` | Core implementation line contributing to the file behavior. |
| 395 | `    if (!trainerId \|\| !startAt \|\| !endAt) return;` | Conditional branch: executes block only when condition is true. |
| 396 | `` | Blank line used to separate logical blocks for readability. |
| 397 | `    this.trainerBookingSubmitting = true;` | Core implementation line contributing to the file behavior. |
| 398 | `    this.bookingService` | Core implementation line contributing to the file behavior. |
| 399 | `      .createTrainerBooking({` | Begins a new code/style block scope. |
| 400 | `        trainerId,` | Core implementation line contributing to the file behavior. |
| 401 | `        startAt,` | Core implementation line contributing to the file behavior. |
| 402 | `        endAt,` | Core implementation line contributing to the file behavior. |
| 403 | `        notes: this.trainerBookingNotes?.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 404 | `      })` | Core implementation line contributing to the file behavior. |
| 405 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 406 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 407 | `          this.trainerBookingSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 408 | `          alert('Trainer booking request created successfully.');` | Core implementation line contributing to the file behavior. |
| 409 | `          this.close();` | Core implementation line contributing to the file behavior. |
| 410 | `          this.loadTrainerList();` | Core implementation line contributing to the file behavior. |
| 411 | `        },` | Core implementation line contributing to the file behavior. |
| 412 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 413 | `          this.trainerBookingSubmitting = false;` | Core implementation line contributing to the file behavior. |
| 414 | `          alert('Could not create trainer booking request.');` | Core implementation line contributing to the file behavior. |
| 415 | `        },` | Core implementation line contributing to the file behavior. |
| 416 | `      });` | Core implementation line contributing to the file behavior. |
| 417 | `  }` | Closes the current code/style block scope. |
| 418 | `` | Blank line used to separate logical blocks for readability. |
| 419 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.