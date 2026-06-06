# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-details-modal/booking-details-modal.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-details-modal/booking-details-modal.component.ts`
- **Total lines:** `289`
- **Non-empty lines:** `187`
- **Import statements:** `5`
- **Class-like declarations found:** `2`
- **Function/method-like signatures found (approx):** `15`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { BookingService } from '../../../../../services/booking.service';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { Console } from 'console';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { forkJoin } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `interface CalendarCell {` | Declares a core TypeScript structure used by this module. |
| 8 | `  date: string;` | CSS declaration assigning a style property value. |
| 9 | `  time: string;` | CSS declaration assigning a style property value. |
| 10 | `  available: boolean;` | CSS declaration assigning a style property value. |
| 11 | `}` | Closes the current code/style block scope. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `@Component({` | Angular decorator declaring metadata for this component. |
| 14 | `  selector: 'app-booking-details-modal',` | Core implementation line contributing to the file behavior. |
| 15 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 16 | `  imports: [CommonModule],` | Core implementation line contributing to the file behavior. |
| 17 | `  templateUrl: './booking-details-modal.component.html',` | Core implementation line contributing to the file behavior. |
| 18 | `  styleUrls: ['./booking-details-modal.component.css'],` | Core implementation line contributing to the file behavior. |
| 19 | `})` | Core implementation line contributing to the file behavior. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `` | Blank line used to separate logical blocks for readability. |
| 22 | `` | Blank line used to separate logical blocks for readability. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `` | Blank line used to separate logical blocks for readability. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `` | Blank line used to separate logical blocks for readability. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `` | Blank line used to separate logical blocks for readability. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `` | Blank line used to separate logical blocks for readability. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `` | Blank line used to separate logical blocks for readability. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `export class BookingDetailsModalComponent implements OnInit {` | Exports symbols so other files can import this logic. |
| 45 | `  @Input() item: any;` | Angular input property declaration (data passed from parent). |
| 46 | `  @Input() mode!: 'class' \| 'trainer';` | Angular input property declaration (data passed from parent). |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `  @Output() close = new EventEmitter<void>();` | Angular output event declaration (events emitted to parent). |
| 49 | `  @Output() confirm = new EventEmitter<{` | Angular output event declaration (events emitted to parent). |
| 50 | `    date: string \| null;` | CSS declaration assigning a style property value. |
| 51 | `    time: string \| null;` | CSS declaration assigning a style property value. |
| 52 | `  }>();` | Core implementation line contributing to the file behavior. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `  images: string[] = [];` | CSS declaration assigning a style property value. |
| 55 | `  currentIndex = 0;` | Core implementation line contributing to the file behavior. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `  availability: {` | Begins a new code/style block scope. |
| 59 | `    date: string;` | CSS declaration assigning a style property value. |
| 60 | `    slots: string[];` | CSS declaration assigning a style property value. |
| 61 | `  }[] = [];` | Core implementation line contributing to the file behavior. |
| 62 | `  ` | Blank line used to separate logical blocks for readability. |
| 63 | `  selectedDate: string \| null = null;` | CSS declaration assigning a style property value. |
| 64 | `  selectedSlot: string \| null = null;` | CSS declaration assigning a style property value. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `  weekDates: string[] = [];` | CSS declaration assigning a style property value. |
| 67 | `  timeSlots: string[] = [];` | CSS declaration assigning a style property value. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `  currentWeekStart!: Date;` | CSS declaration assigning a style property value. |
| 70 | `  monthLabel = '';` | Core implementation line contributing to the file behavior. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `  bookedSlots: { date: string; time: string }[] = [];` | CSS declaration assigning a style property value. |
| 73 | `  unavailableByClassSchedules: { date: string; time: string; reason: string }[] = [];` | CSS declaration assigning a style property value. |
| 74 | `` | Blank line used to separate logical blocks for readability. |
| 75 | `  loading = false;` | Core implementation line contributing to the file behavior. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `  private autoSlideInterval?: any;` | CSS declaration assigning a style property value. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `  ` | Blank line used to separate logical blocks for readability. |
| 80 | `  ` | Blank line used to separate logical blocks for readability. |
| 81 | `  constructor(private bookingService: BookingService) {}` | Class constructor for dependency injection and initial setup. |
| 82 | `` | Blank line used to separate logical blocks for readability. |
| 83 | `  ngOnInit() {` | Angular lifecycle hook that runs after component initialization. |
| 84 | `    this.images = this.item.images?.length` | Core implementation line contributing to the file behavior. |
| 85 | `      ? this.item.images` | Core implementation line contributing to the file behavior. |
| 86 | `      : [this.item.thumbnail];` | CSS declaration assigning a style property value. |
| 87 | `    ` | Blank line used to separate logical blocks for readability. |
| 88 | `    this.startAutoSlide();` | Core implementation line contributing to the file behavior. |
| 89 | `` | Blank line used to separate logical blocks for readability. |
| 90 | `    if (this.mode === 'trainer') {` | Conditional branch: executes block only when condition is true. |
| 91 | `        this.loadAvailability();` | Core implementation line contributing to the file behavior. |
| 92 | `        ` | Blank line used to separate logical blocks for readability. |
| 93 | `        ` | Blank line used to separate logical blocks for readability. |
| 94 | `    }` | Closes the current code/style block scope. |
| 95 | `  }` | Closes the current code/style block scope. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `  ngOnDestroy() {` | Begins a new code/style block scope. |
| 98 | `    this.stopAutoSlide();` | Core implementation line contributing to the file behavior. |
| 99 | `  }` | Closes the current code/style block scope. |
| 100 | `` | Blank line used to separate logical blocks for readability. |
| 101 | `  startAutoSlide() {` | Begins a new code/style block scope. |
| 102 | `    this.stopAutoSlide();` | Core implementation line contributing to the file behavior. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `    this.autoSlideInterval = setInterval(() => {` | Arrow function definition, often used for callbacks. |
| 105 | `      this.next();` | Core implementation line contributing to the file behavior. |
| 106 | `    }, 4500); ` | Core implementation line contributing to the file behavior. |
| 107 | `  }` | Closes the current code/style block scope. |
| 108 | `` | Blank line used to separate logical blocks for readability. |
| 109 | `  stopAutoSlide() {` | Begins a new code/style block scope. |
| 110 | `    if (this.autoSlideInterval) {` | Conditional branch: executes block only when condition is true. |
| 111 | `      clearInterval(this.autoSlideInterval);` | Core implementation line contributing to the file behavior. |
| 112 | `    }` | Closes the current code/style block scope. |
| 113 | `  }` | Closes the current code/style block scope. |
| 114 | `` | Blank line used to separate logical blocks for readability. |
| 115 | `  loadAvailability() {` | Begins a new code/style block scope. |
| 116 | `        this.loading = true;` | Core implementation line contributing to the file behavior. |
| 117 | `` | Blank line used to separate logical blocks for readability. |
| 118 | `    ` | Blank line used to separate logical blocks for readability. |
| 119 | `    ` | Blank line used to separate logical blocks for readability. |
| 120 | `    ` | Blank line used to separate logical blocks for readability. |
| 121 | `    ` | Blank line used to separate logical blocks for readability. |
| 122 | `    ` | Blank line used to separate logical blocks for readability. |
| 123 | `` | Blank line used to separate logical blocks for readability. |
| 124 | `    ` | Blank line used to separate logical blocks for readability. |
| 125 | `    ` | Blank line used to separate logical blocks for readability. |
| 126 | `` | Blank line used to separate logical blocks for readability. |
| 127 | `    ` | Blank line used to separate logical blocks for readability. |
| 128 | `    ` | Blank line used to separate logical blocks for readability. |
| 129 | `` | Blank line used to separate logical blocks for readability. |
| 130 | `        const next7Dates: string[] = Array.from({ length: 7 }, (_, i) => {` | Arrow function definition, often used for callbacks. |
| 131 | `            const d = new Date();` | Core implementation line contributing to the file behavior. |
| 132 | `            d.setDate(d.getDate() + i);` | Core implementation line contributing to the file behavior. |
| 133 | `            return d.toISOString().split('T')[0];` | Returns a value from the current function/method. |
| 134 | `        });` | Core implementation line contributing to the file behavior. |
| 135 | `` | Blank line used to separate logical blocks for readability. |
| 136 | `        const unavailableRequests = next7Dates.reduce((acc, date) => {` | Arrow function definition, often used for callbacks. |
| 137 | `            acc[date] = this.bookingService.getTrainerUnavailableFromClassSchedules(` | Core implementation line contributing to the file behavior. |
| 138 | `                this.item.trainerUserId,` | Core implementation line contributing to the file behavior. |
| 139 | `                date` | Core implementation line contributing to the file behavior. |
| 140 | `            );` | Closes a function/method call statement. |
| 141 | `            return acc;` | Returns a value from the current function/method. |
| 142 | `        }, {} as Record<string, any>);` | Core implementation line contributing to the file behavior. |
| 143 | `` | Blank line used to separate logical blocks for readability. |
| 144 | `        forkJoin({` | Begins a new code/style block scope. |
| 145 | `            availability: this.bookingService.getTrainerAvailability(this.item.trainerUserId, this.item.branchId),` | Core implementation line contributing to the file behavior. |
| 146 | `            bookings: this.bookingService.getTrainerBookings(this.item.trainerUserId),` | Core implementation line contributing to the file behavior. |
| 147 | `            unavailable: forkJoin(unavailableRequests)` | Core implementation line contributing to the file behavior. |
| 148 | `        }).subscribe(({ availability, bookings, unavailable }) => {` | Subscribes to an Observable to react to async emissions. |
| 149 | `            this.availability = availability;` | Core implementation line contributing to the file behavior. |
| 150 | `            this.bookedSlots = bookings.map(b => ({` | Begins a new code/style block scope. |
| 151 | `            date: b.date,` | Core implementation line contributing to the file behavior. |
| 152 | `            time: b.time` | Core implementation line contributing to the file behavior. |
| 153 | `            }));` | Core implementation line contributing to the file behavior. |
| 154 | `            this.unavailableByClassSchedules = Object.entries(unavailable).flatMap(([date, slots]: [string, any]) =>` | Arrow function definition, often used for callbacks. |
| 155 | `                (slots ?? []).map((s: any) => ({ date, time: s.time, reason: s.reason }))` | Core implementation line contributing to the file behavior. |
| 156 | `            );` | Closes a function/method call statement. |
| 157 | `` | Blank line used to separate logical blocks for readability. |
| 158 | `            this.buildWeek();` | Core implementation line contributing to the file behavior. |
| 159 | `            this.buildTimeSlots();` | Core implementation line contributing to the file behavior. |
| 160 | `            this.loading = false;` | Core implementation line contributing to the file behavior. |
| 161 | `        });` | Core implementation line contributing to the file behavior. |
| 162 | `    }` | Closes the current code/style block scope. |
| 163 | `` | Blank line used to separate logical blocks for readability. |
| 164 | `` | Blank line used to separate logical blocks for readability. |
| 165 | `    buildWeek(start?: Date) {` | Begins a new code/style block scope. |
| 166 | `        const base = start ?? new Date();` | Core implementation line contributing to the file behavior. |
| 167 | `` | Blank line used to separate logical blocks for readability. |
| 168 | `        ` | Blank line used to separate logical blocks for readability. |
| 169 | `        base.setHours(0, 0, 0, 0);` | Core implementation line contributing to the file behavior. |
| 170 | `` | Blank line used to separate logical blocks for readability. |
| 171 | `        ` | Blank line used to separate logical blocks for readability. |
| 172 | `        const monday = new Date(base);` | Core implementation line contributing to the file behavior. |
| 173 | `        const day = monday.getDay() \|\| 7;` | Core implementation line contributing to the file behavior. |
| 174 | `        monday.setDate(monday.getDate() - day + 1);` | Core implementation line contributing to the file behavior. |
| 175 | `` | Blank line used to separate logical blocks for readability. |
| 176 | `        this.currentWeekStart = monday;` | Core implementation line contributing to the file behavior. |
| 177 | `` | Blank line used to separate logical blocks for readability. |
| 178 | `        this.weekDates = Array.from({ length: 7 }).map((_, i) => {` | Arrow function definition, often used for callbacks. |
| 179 | `            const d = new Date(monday);` | Core implementation line contributing to the file behavior. |
| 180 | `            d.setDate(monday.getDate() + i);` | Core implementation line contributing to the file behavior. |
| 181 | `            return d.toISOString().split('T')[0];` | Returns a value from the current function/method. |
| 182 | `        });` | Core implementation line contributing to the file behavior. |
| 183 | `` | Blank line used to separate logical blocks for readability. |
| 184 | `        ` | Blank line used to separate logical blocks for readability. |
| 185 | `        this.monthLabel = monday.toLocaleDateString('en-US', {` | Begins a new code/style block scope. |
| 186 | `            month: 'long',` | Core implementation line contributing to the file behavior. |
| 187 | `            year: 'numeric'` | Core implementation line contributing to the file behavior. |
| 188 | `        });` | Core implementation line contributing to the file behavior. |
| 189 | `    }` | Closes the current code/style block scope. |
| 190 | `    buildTimeSlots() {` | Begins a new code/style block scope. |
| 191 | `        this.timeSlots = [` | Core implementation line contributing to the file behavior. |
| 192 | `            '08:00',` | Core implementation line contributing to the file behavior. |
| 193 | `            '09:00',` | Core implementation line contributing to the file behavior. |
| 194 | `            '10:00',` | Core implementation line contributing to the file behavior. |
| 195 | `            '11:00',` | Core implementation line contributing to the file behavior. |
| 196 | `            '12:00',` | Core implementation line contributing to the file behavior. |
| 197 | `            '13:00',` | Core implementation line contributing to the file behavior. |
| 198 | `            '14:00',` | Core implementation line contributing to the file behavior. |
| 199 | `            '15:00',` | Core implementation line contributing to the file behavior. |
| 200 | `            '16:00',` | Core implementation line contributing to the file behavior. |
| 201 | `            '17:00'` | Core implementation line contributing to the file behavior. |
| 202 | `        ];` | Core implementation line contributing to the file behavior. |
| 203 | `    }` | Closes the current code/style block scope. |
| 204 | `` | Blank line used to separate logical blocks for readability. |
| 205 | `    prevWeek() {` | Begins a new code/style block scope. |
| 206 | `        const prev = new Date(this.currentWeekStart);` | Core implementation line contributing to the file behavior. |
| 207 | `        prev.setDate(prev.getDate() - 7);` | Core implementation line contributing to the file behavior. |
| 208 | `        this.buildWeek(prev);` | Core implementation line contributing to the file behavior. |
| 209 | `    }` | Closes the current code/style block scope. |
| 210 | `` | Blank line used to separate logical blocks for readability. |
| 211 | `    nextWeek() {` | Begins a new code/style block scope. |
| 212 | `        const next = new Date(this.currentWeekStart);` | Core implementation line contributing to the file behavior. |
| 213 | `        next.setDate(next.getDate() + 7);` | Core implementation line contributing to the file behavior. |
| 214 | `        this.buildWeek(next);` | Core implementation line contributing to the file behavior. |
| 215 | `    }` | Closes the current code/style block scope. |
| 216 | `` | Blank line used to separate logical blocks for readability. |
| 217 | `    isPast(date: string): boolean {` | Begins a new code/style block scope. |
| 218 | `        const today = new Date();` | Core implementation line contributing to the file behavior. |
| 219 | `        today.setHours(0, 0, 0, 0);` | Core implementation line contributing to the file behavior. |
| 220 | `` | Blank line used to separate logical blocks for readability. |
| 221 | `        const d = new Date(date);` | Core implementation line contributing to the file behavior. |
| 222 | `        return d < today;` | Returns a value from the current function/method. |
| 223 | `    }` | Closes the current code/style block scope. |
| 224 | `` | Blank line used to separate logical blocks for readability. |
| 225 | `    selectDate(date: string) {` | Begins a new code/style block scope. |
| 226 | `    this.selectedDate = date;` | Core implementation line contributing to the file behavior. |
| 227 | `    this.selectedSlot = null;` | Core implementation line contributing to the file behavior. |
| 228 | `    }` | Closes the current code/style block scope. |
| 229 | `` | Blank line used to separate logical blocks for readability. |
| 230 | `    isBooked(date: string, time: string): boolean {` | Begins a new code/style block scope. |
| 231 | `        return this.bookedSlots.some(` | Returns a value from the current function/method. |
| 232 | `            b => b.date === date && b.time === time` | Core implementation line contributing to the file behavior. |
| 233 | `        );` | Closes a function/method call statement. |
| 234 | `    }` | Closes the current code/style block scope. |
| 235 | `` | Blank line used to separate logical blocks for readability. |
| 236 | `    isAvailable(date: string, time: string): boolean {` | Begins a new code/style block scope. |
| 237 | `        if (this.isPast(date)) return false;` | Conditional branch: executes block only when condition is true. |
| 238 | `        if (this.isBooked(date, time)) return false;` | Conditional branch: executes block only when condition is true. |
| 239 | `        if (this.isUnavailableByClassSchedule(date, time)) return false;` | Conditional branch: executes block only when condition is true. |
| 240 | `` | Blank line used to separate logical blocks for readability. |
| 241 | `        const day = this.availability.find(a => a.date === date);` | Core implementation line contributing to the file behavior. |
| 242 | `        return !!day && day.slots.includes(time);` | Returns a value from the current function/method. |
| 243 | `    }` | Closes the current code/style block scope. |
| 244 | `` | Blank line used to separate logical blocks for readability. |
| 245 | `    isUnavailableByClassSchedule(date: string, time: string): boolean {` | Begins a new code/style block scope. |
| 246 | `        return this.unavailableByClassSchedules.some(` | Returns a value from the current function/method. |
| 247 | `            s => s.date === date && s.time === time` | Core implementation line contributing to the file behavior. |
| 248 | `        );` | Closes a function/method call statement. |
| 249 | `    }` | Closes the current code/style block scope. |
| 250 | `` | Blank line used to separate logical blocks for readability. |
| 251 | `    selectSlot(date: string, time: string) {` | Begins a new code/style block scope. |
| 252 | `    if (!this.isAvailable(date, time)) return;` | Conditional branch: executes block only when condition is true. |
| 253 | `` | Blank line used to separate logical blocks for readability. |
| 254 | `    this.selectedDate = date;` | Core implementation line contributing to the file behavior. |
| 255 | `    this.selectedSlot = time;` | Core implementation line contributing to the file behavior. |
| 256 | `  }` | Closes the current code/style block scope. |
| 257 | `` | Blank line used to separate logical blocks for readability. |
| 258 | `  isSelected(date: string, time: string): boolean {` | Begins a new code/style block scope. |
| 259 | `    return this.selectedDate === date && this.selectedSlot === time;` | Returns a value from the current function/method. |
| 260 | `  }` | Closes the current code/style block scope. |
| 261 | `` | Blank line used to separate logical blocks for readability. |
| 262 | `    ` | Blank line used to separate logical blocks for readability. |
| 263 | `    ` | Blank line used to separate logical blocks for readability. |
| 264 | `` | Blank line used to separate logical blocks for readability. |
| 265 | `    ` | Blank line used to separate logical blocks for readability. |
| 266 | `    ` | Blank line used to separate logical blocks for readability. |
| 267 | `    ` | Blank line used to separate logical blocks for readability. |
| 268 | `` | Blank line used to separate logical blocks for readability. |
| 269 | `    ` | Blank line used to separate logical blocks for readability. |
| 270 | `    ` | Blank line used to separate logical blocks for readability. |
| 271 | `` | Blank line used to separate logical blocks for readability. |
| 272 | `` | Blank line used to separate logical blocks for readability. |
| 273 | `  next() {` | Begins a new code/style block scope. |
| 274 | `    this.currentIndex = (this.currentIndex + 1) % this.images.length;` | Core implementation line contributing to the file behavior. |
| 275 | `  }` | Closes the current code/style block scope. |
| 276 | `` | Blank line used to separate logical blocks for readability. |
| 277 | `  prev() {` | Begins a new code/style block scope. |
| 278 | `    this.currentIndex =` | Core implementation line contributing to the file behavior. |
| 279 | `      (this.currentIndex - 1 + this.images.length) % this.images.length;` | Core implementation line contributing to the file behavior. |
| 280 | `  }` | Closes the current code/style block scope. |
| 281 | `` | Blank line used to separate logical blocks for readability. |
| 282 | `  purchase() {` | Begins a new code/style block scope. |
| 283 | `    this.confirm.emit({` | Begins a new code/style block scope. |
| 284 | `      date: this.selectedDate,` | Core implementation line contributing to the file behavior. |
| 285 | `      time: this.selectedSlot,` | Core implementation line contributing to the file behavior. |
| 286 | `    });` | Core implementation line contributing to the file behavior. |
| 287 | `  }` | Closes the current code/style block scope. |
| 288 | `}` | Closes the current code/style block scope. |
| 289 | `` | Blank line used to separate logical blocks for readability. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.