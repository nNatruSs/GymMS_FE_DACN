# Explanation: `src/app/modules/users/dashboard/pages/bookings/calendar/booking-calendar.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/calendar/booking-calendar.component.ts`
- **Total lines:** `172`
- **Non-empty lines:** `140`
- **Import statements:** `6`
- **Class-like declarations found:** `2`
- **Function/method-like signatures found (approx):** `11`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component, EventEmitter, Output } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `import { OnInit } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { BookingService } from '../../../../services/booking.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { StorageService } from '../../../../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 7 | `import { BookingCalendarModalComponent } from './booking-calendar-modal/booking-calendar-modal.component';` | Imports a dependency so this file can use external symbols. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `@Component({` | Angular decorator declaring metadata for this component. |
| 10 | `  selector: 'app-booking-calendar',` | Core implementation line contributing to the file behavior. |
| 11 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 12 | `  imports: [CommonModule, BookingCalendarModalComponent],` | Core implementation line contributing to the file behavior. |
| 13 | `  templateUrl: './booking-calendar.component.html',` | Core implementation line contributing to the file behavior. |
| 14 | `  styleUrl: './booking-calendar.component.css'` | Core implementation line contributing to the file behavior. |
| 15 | `})` | Core implementation line contributing to the file behavior. |
| 16 | `export class BookingCalendarComponent implements OnInit {` | Exports symbols so other files can import this logic. |
| 17 | `  classBookings: any[] = [];` | CSS declaration assigning a style property value. |
| 18 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `  weekDates: string[] = [];` | CSS declaration assigning a style property value. |
| 21 | `  timeSlots = [` | Core implementation line contributing to the file behavior. |
| 22 | `    '08:00','09:00','10:00','11:00',` | Core implementation line contributing to the file behavior. |
| 23 | `    '12:00','13:00','14:00','15:00',` | Core implementation line contributing to the file behavior. |
| 24 | `    '16:00','17:00','18:00'` | Core implementation line contributing to the file behavior. |
| 25 | `  ];` | Core implementation line contributing to the file behavior. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `  currentWeek = new Date();` | Core implementation line contributing to the file behavior. |
| 28 | `  monthLabel = '';` | Core implementation line contributing to the file behavior. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `  ` | Blank line used to separate logical blocks for readability. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `  selectedBooking: any \| null = null;` | CSS declaration assigning a style property value. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `  constructor(private bookingService: BookingService, private storage: StorageService) {}` | Class constructor for dependency injection and initial setup. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `  ngOnInit() {` | Angular lifecycle hook that runs after component initialization. |
| 37 | `    this.buildWeek(this.currentWeek);` | Core implementation line contributing to the file behavior. |
| 38 | `` | Blank line used to separate logical blocks for readability. |
| 39 | `    this.bookingService` | Core implementation line contributing to the file behavior. |
| 40 | `      .getMyClassBookings()` | Core implementation line contributing to the file behavior. |
| 41 | `      .subscribe(res => {` | Subscribes to an Observable to react to async emissions. |
| 42 | `        this.classBookings = (res?.data ?? []).filter((b: any) => b.status !== 'cancelled');` | CSS declaration assigning a style property value. |
| 43 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 44 | `      });` | Core implementation line contributing to the file behavior. |
| 45 | `  }` | Closes the current code/style block scope. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `  prevWeek() {` | Begins a new code/style block scope. |
| 48 | `    this.currentWeek.setDate(this.currentWeek.getDate() - 7);` | Core implementation line contributing to the file behavior. |
| 49 | `    this.buildWeek(this.currentWeek);` | Core implementation line contributing to the file behavior. |
| 50 | `  }` | Closes the current code/style block scope. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `  nextWeek() {` | Begins a new code/style block scope. |
| 53 | `    this.currentWeek.setDate(this.currentWeek.getDate() + 7);` | Core implementation line contributing to the file behavior. |
| 54 | `    this.buildWeek(this.currentWeek);` | Core implementation line contributing to the file behavior. |
| 55 | `  }` | Closes the current code/style block scope. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `  buildWeek(base: Date) {` | Begins a new code/style block scope. |
| 58 | `    const monday = new Date(base);` | Core implementation line contributing to the file behavior. |
| 59 | `    const day = monday.getDay() \|\| 7;` | Core implementation line contributing to the file behavior. |
| 60 | `    monday.setDate(monday.getDate() - day + 1);` | Core implementation line contributing to the file behavior. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `    this.weekDates = Array.from({ length: 7 }).map((_, i) => {` | Arrow function definition, often used for callbacks. |
| 63 | `      const d = new Date(monday);` | Core implementation line contributing to the file behavior. |
| 64 | `      d.setDate(monday.getDate() + i);` | Core implementation line contributing to the file behavior. |
| 65 | `      return d.toISOString().split('T')[0];` | Returns a value from the current function/method. |
| 66 | `    });` | Core implementation line contributing to the file behavior. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `    this.monthLabel = monday.toLocaleDateString(undefined, {` | Begins a new code/style block scope. |
| 69 | `      month: 'long',` | Core implementation line contributing to the file behavior. |
| 70 | `      year: 'numeric'` | Core implementation line contributing to the file behavior. |
| 71 | `    });` | Core implementation line contributing to the file behavior. |
| 72 | `  }` | Closes the current code/style block scope. |
| 73 | `` | Blank line used to separate logical blocks for readability. |
| 74 | `  getBooking(date: string, time: string) {` | Begins a new code/style block scope. |
| 75 | `    const match = this.classBookings.find((b: any) => this.isBookingOnCell(b, date, time));` | CSS declaration assigning a style property value. |
| 76 | `    if (!match) return null;` | Conditional branch: executes block only when condition is true. |
| 77 | `    return {` | Returns a value from the current function/method. |
| 78 | `      ...match,` | Core implementation line contributing to the file behavior. |
| 79 | `      type: 'class',` | Declares a core TypeScript structure used by this module. |
| 80 | `      title: match.classSchedule?.className \|\| 'Class Session',` | Core implementation line contributing to the file behavior. |
| 81 | `      date,` | Core implementation line contributing to the file behavior. |
| 82 | `      time,` | Core implementation line contributing to the file behavior. |
| 83 | `      status: match.status \|\| 'pending',` | Core implementation line contributing to the file behavior. |
| 84 | `      branchName: match.classSchedule?.location \|\| '',` | Core implementation line contributing to the file behavior. |
| 85 | `      specialties: [],` | Core implementation line contributing to the file behavior. |
| 86 | `    };` | Core implementation line contributing to the file behavior. |
| 87 | `  }` | Closes the current code/style block scope. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `  isClass(date: string, time: string) {` | Begins a new code/style block scope. |
| 90 | `    return !!this.getBooking(date, time);` | Returns a value from the current function/method. |
| 91 | `  }` | Closes the current code/style block scope. |
| 92 | `` | Blank line used to separate logical blocks for readability. |
| 93 | `  isTrainer(date: string, time: string) {` | Begins a new code/style block scope. |
| 94 | `    return false;` | Returns a value from the current function/method. |
| 95 | `  }` | Closes the current code/style block scope. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `  isPast(date: string): boolean {` | Begins a new code/style block scope. |
| 98 | `    const today = new Date();` | Core implementation line contributing to the file behavior. |
| 99 | `    today.setHours(0, 0, 0, 0);` | Core implementation line contributing to the file behavior. |
| 100 | `    const d = new Date(\`${date}T00:00:00\`);` | CSS declaration assigning a style property value. |
| 101 | `    return d.getTime() < today.getTime();` | Returns a value from the current function/method. |
| 102 | `  }` | Closes the current code/style block scope. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `  openBooking(booking: any) {` | Begins a new code/style block scope. |
| 105 | `    this.selectedBooking = booking;` | Core implementation line contributing to the file behavior. |
| 106 | `  }` | Closes the current code/style block scope. |
| 107 | `` | Blank line used to separate logical blocks for readability. |
| 108 | `  closeModal() {` | Begins a new code/style block scope. |
| 109 | `    this.selectedBooking = null;` | Core implementation line contributing to the file behavior. |
| 110 | `  }` | Closes the current code/style block scope. |
| 111 | `` | Blank line used to separate logical blocks for readability. |
| 112 | `  cancelBooking(id: string) {` | Begins a new code/style block scope. |
| 113 | `    this.bookingService.updateBooking(id, { status: 'cancelled' }).subscribe(() => {` | Subscribes to an Observable to react to async emissions. |
| 114 | `      this.classBookings = this.classBookings.filter((b: any) => b.id !== id);` | CSS declaration assigning a style property value. |
| 115 | `      this.closeModal();` | Core implementation line contributing to the file behavior. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `      this.selectedBooking = null;` | Core implementation line contributing to the file behavior. |
| 118 | `    });` | Core implementation line contributing to the file behavior. |
| 119 | `  }` | Closes the current code/style block scope. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `  private isBookingOnCell(booking: any, cellDate: string, cellTime: string): boolean {` | Begins a new code/style block scope. |
| 122 | `    const schedule = booking?.classSchedule;` | Core implementation line contributing to the file behavior. |
| 123 | `    if (!schedule) return false;` | Conditional branch: executes block only when condition is true. |
| 124 | `` | Blank line used to separate logical blocks for readability. |
| 125 | `    const startDate = this.toDateOnly(booking.bookingStartDate);` | Core implementation line contributing to the file behavior. |
| 126 | `    const endDate = this.toDateOnly(booking.bookingEndDate);` | Core implementation line contributing to the file behavior. |
| 127 | `    if (!startDate \|\| !endDate) return false;` | Conditional branch: executes block only when condition is true. |
| 128 | `    if (cellDate < startDate \|\| cellDate > endDate) return false;` | Conditional branch: executes block only when condition is true. |
| 129 | `` | Blank line used to separate logical blocks for readability. |
| 130 | `    const dayCode = this.dayCodeFromDate(cellDate);` | Core implementation line contributing to the file behavior. |
| 131 | `    const scheduleDays: string[] = Array.isArray(schedule.daysOfWeek)` | Core implementation line contributing to the file behavior. |
| 132 | `      ? schedule.daysOfWeek` | Core implementation line contributing to the file behavior. |
| 133 | `      : [schedule.dayOfWeek].filter(Boolean);` | CSS declaration assigning a style property value. |
| 134 | `    if (scheduleDays.length && !scheduleDays.includes(dayCode)) return false;` | Conditional branch: executes block only when condition is true. |
| 135 | `` | Blank line used to separate logical blocks for readability. |
| 136 | `    const start = this.toHHmm(schedule.startTime);` | Core implementation line contributing to the file behavior. |
| 137 | `    const end = this.toHHmm(schedule.endTime);` | Core implementation line contributing to the file behavior. |
| 138 | `    if (!start \|\| !end) return false;` | Conditional branch: executes block only when condition is true. |
| 139 | `` | Blank line used to separate logical blocks for readability. |
| 140 | `    const cellStart = this.toMinutes(cellTime);` | Core implementation line contributing to the file behavior. |
| 141 | `    const cellEnd = cellStart + 60;` | Core implementation line contributing to the file behavior. |
| 142 | `    const bookingStart = this.toMinutes(start);` | Core implementation line contributing to the file behavior. |
| 143 | `    const bookingEnd = this.toMinutes(end);` | Core implementation line contributing to the file behavior. |
| 144 | `    return bookingStart < cellEnd && bookingEnd > cellStart;` | Returns a value from the current function/method. |
| 145 | `  }` | Closes the current code/style block scope. |
| 146 | `` | Blank line used to separate logical blocks for readability. |
| 147 | `  private toDateOnly(value: string): string {` | Begins a new code/style block scope. |
| 148 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 149 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 150 | `    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);` | Conditional branch: executes block only when condition is true. |
| 151 | `    return value.slice(0, 10);` | Returns a value from the current function/method. |
| 152 | `  }` | Closes the current code/style block scope. |
| 153 | `` | Blank line used to separate logical blocks for readability. |
| 154 | `  private toHHmm(value: string): string {` | Begins a new code/style block scope. |
| 155 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 156 | `    if (/^\d{2}:\d{2}/.test(value)) return value.slice(0, 5);` | Conditional branch: executes block only when condition is true. |
| 157 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 158 | `    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(11, 16);` | Conditional branch: executes block only when condition is true. |
| 159 | `    return value.slice(0, 5);` | Returns a value from the current function/method. |
| 160 | `  }` | Closes the current code/style block scope. |
| 161 | `` | Blank line used to separate logical blocks for readability. |
| 162 | `  private dayCodeFromDate(dateStr: string): string {` | Begins a new code/style block scope. |
| 163 | `    const dayEnum = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];` | Core implementation line contributing to the file behavior. |
| 164 | `    const d = new Date(\`${dateStr}T12:00:00\`);` | CSS declaration assigning a style property value. |
| 165 | `    return dayEnum[d.getDay()];` | Returns a value from the current function/method. |
| 166 | `  }` | Closes the current code/style block scope. |
| 167 | `` | Blank line used to separate logical blocks for readability. |
| 168 | `  private toMinutes(hhmm: string): number {` | Begins a new code/style block scope. |
| 169 | `    const [h, m] = hhmm.split(':').map(Number);` | CSS declaration assigning a style property value. |
| 170 | `    return h * 60 + m;` | Returns a value from the current function/method. |
| 171 | `  }` | Closes the current code/style block scope. |
| 172 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.