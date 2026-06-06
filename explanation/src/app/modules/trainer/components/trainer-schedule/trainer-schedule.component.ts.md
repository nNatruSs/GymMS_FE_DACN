# Explanation: `src/app/modules/trainer/components/trainer-schedule/trainer-schedule.component.ts`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-schedule/trainer-schedule.component.ts`
- **Total lines:** `246`
- **Non-empty lines:** `218`
- **Import statements:** `7`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormsModule } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { forkJoin } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { StorageService } from '../../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 7 | `import {` | Imports a dependency so this file can use external symbols. |
| 8 | `  TrainerAvailabilitySlot,` | Core implementation line contributing to the file behavior. |
| 9 | `  TrainerBookingSlot,` | Core implementation line contributing to the file behavior. |
| 10 | `  TrainerService,` | Core implementation line contributing to the file behavior. |
| 11 | `} from '../../services/trainer.service';` | Core implementation line contributing to the file behavior. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `@Component({` | Angular decorator declaring metadata for this component. |
| 14 | `  selector: 'app-trainer-schedule',` | Core implementation line contributing to the file behavior. |
| 15 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 16 | `  imports: [CommonModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 17 | `  templateUrl: './trainer-schedule.component.html',` | Core implementation line contributing to the file behavior. |
| 18 | `  styleUrl: './trainer-schedule.component.css',` | Core implementation line contributing to the file behavior. |
| 19 | `})` | Core implementation line contributing to the file behavior. |
| 20 | `export class TrainerScheduleComponent {` | Exports symbols so other files can import this logic. |
| 21 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 22 | `  saving = false;` | Core implementation line contributing to the file behavior. |
| 23 | `  deletingSlotId: string \| null = null;` | CSS declaration assigning a style property value. |
| 24 | `  errorMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 25 | `  successMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 26 | `  trainerId = '';` | Core implementation line contributing to the file behavior. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `  slots: TrainerAvailabilitySlot[] = [];` | CSS declaration assigning a style property value. |
| 29 | `  bookings: TrainerBookingSlot[] = [];` | CSS declaration assigning a style property value. |
| 30 | `  showBookedDetails = true;` | Core implementation line contributing to the file behavior. |
| 31 | `  selectedCellBookings: TrainerBookingSlot[] = [];` | CSS declaration assigning a style property value. |
| 32 | `  selectedCellLabel = '';` | Core implementation line contributing to the file behavior. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `  weekOffset = 0;` | Core implementation line contributing to the file behavior. |
| 35 | `  weekDates: Date[] = [];` | CSS declaration assigning a style property value. |
| 36 | `  timeSlots: string[] = [];` | CSS declaration assigning a style property value. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `  newSlot: TrainerAvailabilitySlot = {` | Begins a new code/style block scope. |
| 39 | `    dayOfWeek: 1,` | Core implementation line contributing to the file behavior. |
| 40 | `    startTime: '09:00',` | Core implementation line contributing to the file behavior. |
| 41 | `    endTime: '17:00',` | Core implementation line contributing to the file behavior. |
| 42 | `    isAvailable: true,` | Core implementation line contributing to the file behavior. |
| 43 | `  };` | Core implementation line contributing to the file behavior. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];` | Core implementation line contributing to the file behavior. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 48 | `    private trainerService: TrainerService,` | Core implementation line contributing to the file behavior. |
| 49 | `    private storage: StorageService,` | Core implementation line contributing to the file behavior. |
| 50 | `    private confirmDialog: ConfirmDialogService` | Core implementation line contributing to the file behavior. |
| 51 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 54 | `    this.trainerId = this.storage.getUserId();` | Core implementation line contributing to the file behavior. |
| 55 | `    this.timeSlots = this.buildHalfHourSlots('06:00', '22:00');` | CSS declaration assigning a style property value. |
| 56 | `    this.setWeek(0);` | Core implementation line contributing to the file behavior. |
| 57 | `    this.loadData();` | Core implementation line contributing to the file behavior. |
| 58 | `  }` | Closes the current code/style block scope. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `  loadData(): void {` | Begins a new code/style block scope. |
| 61 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 62 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 63 | `    forkJoin({` | Begins a new code/style block scope. |
| 64 | `      availability: this.trainerService.getAvailability(this.trainerId),` | Core implementation line contributing to the file behavior. |
| 65 | `      bookings: this.trainerService.getTrainerMyBookings(),` | Core implementation line contributing to the file behavior. |
| 66 | `    }).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 67 | `      next: ({ availability, bookings }) => {` | Arrow function definition, often used for callbacks. |
| 68 | `        this.slots = availability ?? [];` | Core implementation line contributing to the file behavior. |
| 69 | `        this.bookings = bookings ?? [];` | Core implementation line contributing to the file behavior. |
| 70 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 71 | `      },` | Core implementation line contributing to the file behavior. |
| 72 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 73 | `        this.errorMessage = 'Could not load trainer schedule data.';` | Core implementation line contributing to the file behavior. |
| 74 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 75 | `      },` | Core implementation line contributing to the file behavior. |
| 76 | `    });` | Core implementation line contributing to the file behavior. |
| 77 | `  }` | Closes the current code/style block scope. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `  addSlot(): void {` | Begins a new code/style block scope. |
| 80 | `    if (this.newSlot.startTime >= this.newSlot.endTime) {` | Conditional branch: executes block only when condition is true. |
| 81 | `      this.errorMessage = 'End time must be after start time.';` | Core implementation line contributing to the file behavior. |
| 82 | `      return;` | Core implementation line contributing to the file behavior. |
| 83 | `    }` | Closes the current code/style block scope. |
| 84 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 85 | `    this.successMessage = null;` | Core implementation line contributing to the file behavior. |
| 86 | `    this.slots = [...this.slots, { ...this.newSlot }];` | Core implementation line contributing to the file behavior. |
| 87 | `  }` | Closes the current code/style block scope. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `  async removeSlot(index: number): Promise<void> {` | Begins a new code/style block scope. |
| 90 | `    const slot = this.slots[index];` | Core implementation line contributing to the file behavior. |
| 91 | `    if (!slot) return;` | Conditional branch: executes block only when condition is true. |
| 92 | `` | Blank line used to separate logical blocks for readability. |
| 93 | `    if (slot.id) {` | Conditional branch: executes block only when condition is true. |
| 94 | `      const confirmed = await this.confirmDialog.confirm('Delete this availability slot?', {` | Begins a new code/style block scope. |
| 95 | `        title: 'Confirm Delete Availability',` | Core implementation line contributing to the file behavior. |
| 96 | `        confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 97 | `      });` | Core implementation line contributing to the file behavior. |
| 98 | `      if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 99 | `      this.deletingSlotId = slot.id;` | Core implementation line contributing to the file behavior. |
| 100 | `      this.trainerService.deleteAvailabilitySlot(this.trainerId, slot.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 101 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 102 | `          this.deletingSlotId = null;` | Core implementation line contributing to the file behavior. |
| 103 | `          this.successMessage = 'Slot deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 104 | `          this.loadData();` | Core implementation line contributing to the file behavior. |
| 105 | `        },` | Core implementation line contributing to the file behavior. |
| 106 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 107 | `          this.deletingSlotId = null;` | Core implementation line contributing to the file behavior. |
| 108 | `          this.errorMessage = 'Could not delete slot.';` | Core implementation line contributing to the file behavior. |
| 109 | `        },` | Core implementation line contributing to the file behavior. |
| 110 | `      });` | Core implementation line contributing to the file behavior. |
| 111 | `      return;` | Core implementation line contributing to the file behavior. |
| 112 | `    }` | Closes the current code/style block scope. |
| 113 | `` | Blank line used to separate logical blocks for readability. |
| 114 | `    this.slots = this.slots.filter((_, i) => i !== index);` | Core implementation line contributing to the file behavior. |
| 115 | `  }` | Closes the current code/style block scope. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `  saveAvailability(): void {` | Begins a new code/style block scope. |
| 118 | `    this.saving = true;` | Core implementation line contributing to the file behavior. |
| 119 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 120 | `    this.successMessage = null;` | Core implementation line contributing to the file behavior. |
| 121 | `    this.trainerService.setAvailability(this.trainerId, this.slots).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 122 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 123 | `        this.successMessage = 'Schedule updated successfully.';` | Core implementation line contributing to the file behavior. |
| 124 | `        this.saving = false;` | Core implementation line contributing to the file behavior. |
| 125 | `        this.loadData();` | Core implementation line contributing to the file behavior. |
| 126 | `      },` | Core implementation line contributing to the file behavior. |
| 127 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 128 | `        this.errorMessage = 'Failed to save availability.';` | Core implementation line contributing to the file behavior. |
| 129 | `        this.saving = false;` | Core implementation line contributing to the file behavior. |
| 130 | `      },` | Core implementation line contributing to the file behavior. |
| 131 | `    });` | Core implementation line contributing to the file behavior. |
| 132 | `  }` | Closes the current code/style block scope. |
| 133 | `` | Blank line used to separate logical blocks for readability. |
| 134 | `  prevWeek(): void {` | Begins a new code/style block scope. |
| 135 | `    this.setWeek(this.weekOffset - 1);` | Core implementation line contributing to the file behavior. |
| 136 | `  }` | Closes the current code/style block scope. |
| 137 | `` | Blank line used to separate logical blocks for readability. |
| 138 | `  nextWeek(): void {` | Begins a new code/style block scope. |
| 139 | `    this.setWeek(this.weekOffset + 1);` | Core implementation line contributing to the file behavior. |
| 140 | `  }` | Closes the current code/style block scope. |
| 141 | `` | Blank line used to separate logical blocks for readability. |
| 142 | `  setWeek(offset: number): void {` | Begins a new code/style block scope. |
| 143 | `    this.weekOffset = offset;` | Core implementation line contributing to the file behavior. |
| 144 | `    const today = new Date();` | Core implementation line contributing to the file behavior. |
| 145 | `    const monday = this.getMonday(today);` | Core implementation line contributing to the file behavior. |
| 146 | `    monday.setDate(monday.getDate() + offset * 7);` | Core implementation line contributing to the file behavior. |
| 147 | `    this.weekDates = Array.from({ length: 7 }, (_, i) => {` | Arrow function definition, often used for callbacks. |
| 148 | `      const d = new Date(monday);` | Core implementation line contributing to the file behavior. |
| 149 | `      d.setDate(monday.getDate() + i);` | Core implementation line contributing to the file behavior. |
| 150 | `      return d;` | Returns a value from the current function/method. |
| 151 | `    });` | Core implementation line contributing to the file behavior. |
| 152 | `    this.selectedCellBookings = [];` | Core implementation line contributing to the file behavior. |
| 153 | `    this.selectedCellLabel = '';` | Core implementation line contributing to the file behavior. |
| 154 | `  }` | Closes the current code/style block scope. |
| 155 | `` | Blank line used to separate logical blocks for readability. |
| 156 | `  weekRangeLabel(): string {` | Begins a new code/style block scope. |
| 157 | `    if (!this.weekDates.length) return '';` | Conditional branch: executes block only when condition is true. |
| 158 | `    const start = this.weekDates[0].toLocaleDateString();` | Core implementation line contributing to the file behavior. |
| 159 | `    const end = this.weekDates[6].toLocaleDateString();` | Core implementation line contributing to the file behavior. |
| 160 | `    return \`${start} - ${end}\`;` | Returns a value from the current function/method. |
| 161 | `  }` | Closes the current code/style block scope. |
| 162 | `` | Blank line used to separate logical blocks for readability. |
| 163 | `  isPastDay(date: Date): boolean {` | Begins a new code/style block scope. |
| 164 | `    const today = new Date();` | Core implementation line contributing to the file behavior. |
| 165 | `    today.setHours(0, 0, 0, 0);` | Core implementation line contributing to the file behavior. |
| 166 | `    const check = new Date(date);` | Core implementation line contributing to the file behavior. |
| 167 | `    check.setHours(0, 0, 0, 0);` | Core implementation line contributing to the file behavior. |
| 168 | `    return check.getTime() < today.getTime();` | Returns a value from the current function/method. |
| 169 | `  }` | Closes the current code/style block scope. |
| 170 | `` | Blank line used to separate logical blocks for readability. |
| 171 | `  cellClass(date: Date, time: string): string {` | Begins a new code/style block scope. |
| 172 | `    if (this.isPastDay(date)) return 'cell-past';` | Conditional branch: executes block only when condition is true. |
| 173 | `    if (this.isBooked(date, time)) return 'cell-booked';` | Conditional branch: executes block only when condition is true. |
| 174 | `    if (this.isAvailable(date, time)) return 'cell-available';` | Conditional branch: executes block only when condition is true. |
| 175 | `    return '';` | Returns a value from the current function/method. |
| 176 | `  }` | Closes the current code/style block scope. |
| 177 | `` | Blank line used to separate logical blocks for readability. |
| 178 | `  onCellClick(date: Date, time: string): void {` | Begins a new code/style block scope. |
| 179 | `    if (!this.showBookedDetails \|\| !this.isBooked(date, time)) return;` | Conditional branch: executes block only when condition is true. |
| 180 | `    this.selectedCellBookings = this.bookingsForCell(date, time);` | Core implementation line contributing to the file behavior. |
| 181 | `    this.selectedCellLabel = \`${date.toDateString()} ${time}\`;` | Core implementation line contributing to the file behavior. |
| 182 | `  }` | Closes the current code/style block scope. |
| 183 | `` | Blank line used to separate logical blocks for readability. |
| 184 | `  private isAvailable(date: Date, time: string): boolean {` | Begins a new code/style block scope. |
| 185 | `    const dayIndex = date.getDay();` | Core implementation line contributing to the file behavior. |
| 186 | `    return this.slots.some((slot) => {` | Returns a value from the current function/method. |
| 187 | `      if (!slot.isAvailable \|\| slot.dayOfWeek !== dayIndex) return false;` | Conditional branch: executes block only when condition is true. |
| 188 | `      return this.cellIntersectsTimeRange(time, slot.startTime, slot.endTime);` | Returns a value from the current function/method. |
| 189 | `    });` | Core implementation line contributing to the file behavior. |
| 190 | `  }` | Closes the current code/style block scope. |
| 191 | `` | Blank line used to separate logical blocks for readability. |
| 192 | `  private isBooked(date: Date, time: string): boolean {` | Begins a new code/style block scope. |
| 193 | `    return this.bookingsForCell(date, time).length > 0;` | Returns a value from the current function/method. |
| 194 | `  }` | Closes the current code/style block scope. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `  private bookingsForCell(date: Date, time: string): TrainerBookingSlot[] {` | Begins a new code/style block scope. |
| 197 | `    const cellStart = this.toDateTime(date, time);` | Core implementation line contributing to the file behavior. |
| 198 | `    const cellEnd = new Date(cellStart.getTime() + 30 * 60 * 1000);` | Core implementation line contributing to the file behavior. |
| 199 | `    return this.bookings.filter((booking) => {` | Returns a value from the current function/method. |
| 200 | `      const start = new Date(booking.startAt);` | Core implementation line contributing to the file behavior. |
| 201 | `      const end = new Date(booking.endAt);` | Core implementation line contributing to the file behavior. |
| 202 | `      return start < cellEnd && end > cellStart;` | Returns a value from the current function/method. |
| 203 | `    });` | Core implementation line contributing to the file behavior. |
| 204 | `  }` | Closes the current code/style block scope. |
| 205 | `` | Blank line used to separate logical blocks for readability. |
| 206 | `  private toDateTime(date: Date, time: string): Date {` | Begins a new code/style block scope. |
| 207 | `    const [h, m] = time.split(':').map(Number);` | CSS declaration assigning a style property value. |
| 208 | `    const d = new Date(date);` | Core implementation line contributing to the file behavior. |
| 209 | `    d.setHours(h, m, 0, 0);` | Core implementation line contributing to the file behavior. |
| 210 | `    return d;` | Returns a value from the current function/method. |
| 211 | `  }` | Closes the current code/style block scope. |
| 212 | `` | Blank line used to separate logical blocks for readability. |
| 213 | `  private cellIntersectsTimeRange(cellTime: string, start: string, end: string): boolean {` | Begins a new code/style block scope. |
| 214 | `    const cellStart = this.toMinutes(cellTime);` | Core implementation line contributing to the file behavior. |
| 215 | `    const cellEnd = cellStart + 30;` | Core implementation line contributing to the file behavior. |
| 216 | `    const startMin = this.toMinutes(start);` | Core implementation line contributing to the file behavior. |
| 217 | `    const endMin = this.toMinutes(end);` | Core implementation line contributing to the file behavior. |
| 218 | `    return startMin < cellEnd && endMin > cellStart;` | Returns a value from the current function/method. |
| 219 | `  }` | Closes the current code/style block scope. |
| 220 | `` | Blank line used to separate logical blocks for readability. |
| 221 | `  private toMinutes(hhmm: string): number {` | Begins a new code/style block scope. |
| 222 | `    const [h, m] = hhmm.slice(0, 5).split(':').map(Number);` | CSS declaration assigning a style property value. |
| 223 | `    return h * 60 + m;` | Returns a value from the current function/method. |
| 224 | `  }` | Closes the current code/style block scope. |
| 225 | `` | Blank line used to separate logical blocks for readability. |
| 226 | `  private buildHalfHourSlots(start: string, end: string): string[] {` | Begins a new code/style block scope. |
| 227 | `    const startMin = this.toMinutes(start);` | Core implementation line contributing to the file behavior. |
| 228 | `    const endMin = this.toMinutes(end);` | Core implementation line contributing to the file behavior. |
| 229 | `    const values: string[] = [];` | CSS declaration assigning a style property value. |
| 230 | `    for (let m = startMin; m < endMin; m += 30) {` | Loop iterating across a collection or numeric range. |
| 231 | `      const hh = String(Math.floor(m / 60)).padStart(2, '0');` | Core implementation line contributing to the file behavior. |
| 232 | `      const mm = String(m % 60).padStart(2, '0');` | Core implementation line contributing to the file behavior. |
| 233 | `      values.push(\`${hh}:${mm}\`);` | CSS declaration assigning a style property value. |
| 234 | `    }` | Closes the current code/style block scope. |
| 235 | `    return values;` | Returns a value from the current function/method. |
| 236 | `  }` | Closes the current code/style block scope. |
| 237 | `` | Blank line used to separate logical blocks for readability. |
| 238 | `  private getMonday(date: Date): Date {` | Begins a new code/style block scope. |
| 239 | `    const d = new Date(date);` | Core implementation line contributing to the file behavior. |
| 240 | `    const day = d.getDay(); ` | Core implementation line contributing to the file behavior. |
| 241 | `    const diff = day === 0 ? -6 : 1 - day;` | CSS declaration assigning a style property value. |
| 242 | `    d.setDate(d.getDate() + diff);` | Core implementation line contributing to the file behavior. |
| 243 | `    d.setHours(0, 0, 0, 0);` | Core implementation line contributing to the file behavior. |
| 244 | `    return d;` | Returns a value from the current function/method. |
| 245 | `  }` | Closes the current code/style block scope. |
| 246 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.