# Explanation: `src/app/modules/trainer/services/trainer.service.ts`

## File Overview
- **Relative path:** `src/app/modules/trainer/services/trainer.service.ts`
- **Total lines:** `489`
- **Non-empty lines:** `427`
- **Import statements:** `5`
- **Class-like declarations found:** `3`
- **Function/method-like signatures found (approx):** `34`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Injectable } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { HttpClient, HttpHeaders } from '@angular/common/http';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { map } from 'rxjs/operators';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { StorageService } from '../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `export interface TrainerMessagingParticipant {` | Exports symbols so other files can import this logic. |
| 8 | `  id: string;` | CSS declaration assigning a style property value. |
| 9 | `  firstName: string;` | CSS declaration assigning a style property value. |
| 10 | `  lastName: string;` | CSS declaration assigning a style property value. |
| 11 | `  avatarUrl: string \| null;` | CSS declaration assigning a style property value. |
| 12 | `}` | Closes the current code/style block scope. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `export interface TrainerMessagingConversationSummary {` | Exports symbols so other files can import this logic. |
| 15 | `  conversationId: string;` | CSS declaration assigning a style property value. |
| 16 | `  partner: TrainerMessagingParticipant;` | CSS declaration assigning a style property value. |
| 17 | `  lastMessageAt: string \| null;` | CSS declaration assigning a style property value. |
| 18 | `  lastMessagePreview: string \| null;` | CSS declaration assigning a style property value. |
| 19 | `  unreadCount: number;` | CSS declaration assigning a style property value. |
| 20 | `}` | Closes the current code/style block scope. |
| 21 | `` | Blank line used to separate logical blocks for readability. |
| 22 | `export interface TrainerMessagingConversationMessage {` | Exports symbols so other files can import this logic. |
| 23 | `  id: string;` | CSS declaration assigning a style property value. |
| 24 | `  senderUserId: string;` | CSS declaration assigning a style property value. |
| 25 | `  content: string;` | CSS declaration assigning a style property value. |
| 26 | `  createdAt: string;` | CSS declaration assigning a style property value. |
| 27 | `  isOwn: boolean;` | CSS declaration assigning a style property value. |
| 28 | `}` | Closes the current code/style block scope. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `export interface TrainerMessagingConversationMessagesPage {` | Exports symbols so other files can import this logic. |
| 31 | `  conversationId: string;` | CSS declaration assigning a style property value. |
| 32 | `  partner: TrainerMessagingParticipant;` | CSS declaration assigning a style property value. |
| 33 | `  unreadCount: number;` | CSS declaration assigning a style property value. |
| 34 | `  nextCursor: string \| null;` | CSS declaration assigning a style property value. |
| 35 | `  messages: TrainerMessagingConversationMessage[];` | CSS declaration assigning a style property value. |
| 36 | `}` | Closes the current code/style block scope. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `export interface TrainerClientLinkView {` | Exports symbols so other files can import this logic. |
| 39 | `  id: string;` | CSS declaration assigning a style property value. |
| 40 | `  trainerId: string;` | CSS declaration assigning a style property value. |
| 41 | `  memberId: string;` | CSS declaration assigning a style property value. |
| 42 | `  status: string;` | CSS declaration assigning a style property value. |
| 43 | `  linkedAt: string;` | CSS declaration assigning a style property value. |
| 44 | `  endedAt: string \| null;` | CSS declaration assigning a style property value. |
| 45 | `  endReason: string \| null;` | CSS declaration assigning a style property value. |
| 46 | `  member: {` | Begins a new code/style block scope. |
| 47 | `    id: string;` | CSS declaration assigning a style property value. |
| 48 | `    firstName: string;` | CSS declaration assigning a style property value. |
| 49 | `    lastName: string;` | CSS declaration assigning a style property value. |
| 50 | `    email: string;` | CSS declaration assigning a style property value. |
| 51 | `  };` | Core implementation line contributing to the file behavior. |
| 52 | `}` | Closes the current code/style block scope. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `export interface TrainerAvailabilitySlot {` | Exports symbols so other files can import this logic. |
| 55 | `  id?: string;` | CSS declaration assigning a style property value. |
| 56 | `  dayOfWeek: number;` | CSS declaration assigning a style property value. |
| 57 | `  startTime: string;` | CSS declaration assigning a style property value. |
| 58 | `  endTime: string;` | CSS declaration assigning a style property value. |
| 59 | `  isAvailable: boolean;` | CSS declaration assigning a style property value. |
| 60 | `}` | Closes the current code/style block scope. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `export interface TrainerBookingSlot {` | Exports symbols so other files can import this logic. |
| 63 | `  id: string;` | CSS declaration assigning a style property value. |
| 64 | `  memberId: string;` | CSS declaration assigning a style property value. |
| 65 | `  trainerId: string;` | CSS declaration assigning a style property value. |
| 66 | `  startAt: string;` | CSS declaration assigning a style property value. |
| 67 | `  endAt: string;` | CSS declaration assigning a style property value. |
| 68 | `  status: string;` | CSS declaration assigning a style property value. |
| 69 | `  notes?: string \| null;` | CSS declaration assigning a style property value. |
| 70 | `  member?: {` | Begins a new code/style block scope. |
| 71 | `    id: string;` | CSS declaration assigning a style property value. |
| 72 | `    firstName?: string;` | CSS declaration assigning a style property value. |
| 73 | `    lastName?: string;` | CSS declaration assigning a style property value. |
| 74 | `    email?: string;` | CSS declaration assigning a style property value. |
| 75 | `    phone?: string;` | CSS declaration assigning a style property value. |
| 76 | `  } \| null;` | Core implementation line contributing to the file behavior. |
| 77 | `}` | Closes the current code/style block scope. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `export interface ExercisePayload {` | Exports symbols so other files can import this logic. |
| 80 | `  name: string;` | CSS declaration assigning a style property value. |
| 81 | `  description: string;` | CSS declaration assigning a style property value. |
| 82 | `  category: string;` | CSS declaration assigning a style property value. |
| 83 | `  equipmentRequired: string;` | CSS declaration assigning a style property value. |
| 84 | `}` | Closes the current code/style block scope. |
| 85 | `` | Blank line used to separate logical blocks for readability. |
| 86 | `export interface WorkoutPlanPayload {` | Exports symbols so other files can import this logic. |
| 87 | `  title: string;` | CSS declaration assigning a style property value. |
| 88 | `  duration: number;` | CSS declaration assigning a style property value. |
| 89 | `  status: string;` | CSS declaration assigning a style property value. |
| 90 | `  visibility: string;` | CSS declaration assigning a style property value. |
| 91 | `  assignedMemberIds: string[];` | CSS declaration assigning a style property value. |
| 92 | `  planItems: Array<{` | Begins a new code/style block scope. |
| 93 | `    exerciseId: string;` | CSS declaration assigning a style property value. |
| 94 | `    sequence: number;` | CSS declaration assigning a style property value. |
| 95 | `    targetSet: number;` | CSS declaration assigning a style property value. |
| 96 | `    targetRep: number;` | CSS declaration assigning a style property value. |
| 97 | `    targetWeight: number;` | CSS declaration assigning a style property value. |
| 98 | `    dayOfWeek: string;` | CSS declaration assigning a style property value. |
| 99 | `    notes?: string;` | CSS declaration assigning a style property value. |
| 100 | `  }>;` | Core implementation line contributing to the file behavior. |
| 101 | `}` | Closes the current code/style block scope. |
| 102 | `` | Blank line used to separate logical blocks for readability. |
| 103 | `export interface DietPlanMealPayload {` | Exports symbols so other files can import this logic. |
| 104 | `  sequence: number;` | CSS declaration assigning a style property value. |
| 105 | `  mealType: string;` | CSS declaration assigning a style property value. |
| 106 | `  mealTitle: string;` | CSS declaration assigning a style property value. |
| 107 | `  scheduledTime: string;` | CSS declaration assigning a style property value. |
| 108 | `  foodItemsText: string;` | CSS declaration assigning a style property value. |
| 109 | `  calories: number;` | CSS declaration assigning a style property value. |
| 110 | `  proteinGrams: number;` | CSS declaration assigning a style property value. |
| 111 | `  carbsGrams: number;` | CSS declaration assigning a style property value. |
| 112 | `  fatGrams: number;` | CSS declaration assigning a style property value. |
| 113 | `  notes?: string;` | CSS declaration assigning a style property value. |
| 114 | `}` | Closes the current code/style block scope. |
| 115 | `` | Blank line used to separate logical blocks for readability. |
| 116 | `export interface DietPlanPayload {` | Exports symbols so other files can import this logic. |
| 117 | `  title: string;` | CSS declaration assigning a style property value. |
| 118 | `  description: string;` | CSS declaration assigning a style property value. |
| 119 | `  durationDays: number;` | CSS declaration assigning a style property value. |
| 120 | `  calorieTarget: number;` | CSS declaration assigning a style property value. |
| 121 | `  meals: DietPlanMealPayload[];` | CSS declaration assigning a style property value. |
| 122 | `}` | Closes the current code/style block scope. |
| 123 | `` | Blank line used to separate logical blocks for readability. |
| 124 | `export interface DietPlanUpdatePayload extends DietPlanPayload {` | Exports symbols so other files can import this logic. |
| 125 | `  status: string;` | CSS declaration assigning a style property value. |
| 126 | `}` | Closes the current code/style block scope. |
| 127 | `` | Blank line used to separate logical blocks for readability. |
| 128 | `export interface DietPlanAssignmentPayload {` | Exports symbols so other files can import this logic. |
| 129 | `  assignments: Array<{` | Begins a new code/style block scope. |
| 130 | `    memberId: string;` | CSS declaration assigning a style property value. |
| 131 | `    effectiveFrom: string;` | CSS declaration assigning a style property value. |
| 132 | `    effectiveTo: string;` | CSS declaration assigning a style property value. |
| 133 | `  }>;` | Core implementation line contributing to the file behavior. |
| 134 | `}` | Closes the current code/style block scope. |
| 135 | `` | Blank line used to separate logical blocks for readability. |
| 136 | `export interface TrainerClassScheduleBlock {` | Exports symbols so other files can import this logic. |
| 137 | `  scheduleId: string;` | CSS declaration assigning a style property value. |
| 138 | `  className: string;` | CSS declaration assigning a style property value. |
| 139 | `  dayOfWeek: string \| null;` | CSS declaration assigning a style property value. |
| 140 | `  startTime: string;` | CSS declaration assigning a style property value. |
| 141 | `  endTime: string;` | CSS declaration assigning a style property value. |
| 142 | `}` | Closes the current code/style block scope. |
| 143 | `` | Blank line used to separate logical blocks for readability. |
| 144 | `export interface ScheduleExceptionView {` | Exports symbols so other files can import this logic. |
| 145 | `  id: string;` | CSS declaration assigning a style property value. |
| 146 | `  scheduleId: string;` | CSS declaration assigning a style property value. |
| 147 | `  exceptionDate: string;` | CSS declaration assigning a style property value. |
| 148 | `  type: 'CANCELLED' \| 'RESCHEDULED' \| string;` | Declares a core TypeScript structure used by this module. |
| 149 | `  reason: string \| null;` | CSS declaration assigning a style property value. |
| 150 | `  newStartTime: string \| null;` | CSS declaration assigning a style property value. |
| 151 | `  newEndTime: string \| null;` | CSS declaration assigning a style property value. |
| 152 | `}` | Closes the current code/style block scope. |
| 153 | `` | Blank line used to separate logical blocks for readability. |
| 154 | `@Injectable({` | Angular decorator declaring this class as an injectable service. |
| 155 | `  providedIn: 'root'` | Core implementation line contributing to the file behavior. |
| 156 | `})` | Core implementation line contributing to the file behavior. |
| 157 | `export class TrainerService {` | Exports symbols so other files can import this logic. |
| 158 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 159 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 160 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 161 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 162 | `` | Blank line used to separate logical blocks for readability. |
| 163 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 164 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 165 | `  }` | Closes the current code/style block scope. |
| 166 | `` | Blank line used to separate logical blocks for readability. |
| 167 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 168 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 169 | `  }` | Closes the current code/style block scope. |
| 170 | `` | Blank line used to separate logical blocks for readability. |
| 171 | `  private normalizeArrayResponse<T>(response: any): T[] {` | Begins a new code/style block scope. |
| 172 | `    const payload = this.unwrapData<any>(response);` | Core implementation line contributing to the file behavior. |
| 173 | `    if (Array.isArray(payload)) return payload as T[];` | Conditional branch: executes block only when condition is true. |
| 174 | `    if (Array.isArray(payload?.docs)) return payload.docs as T[];` | Conditional branch: executes block only when condition is true. |
| 175 | `    if (Array.isArray(payload?.items)) return payload.items as T[];` | Conditional branch: executes block only when condition is true. |
| 176 | `` | Blank line used to separate logical blocks for readability. |
| 177 | `    if (payload && typeof payload === 'object') {` | Conditional branch: executes block only when condition is true. |
| 178 | `      const values = Object.values(payload).filter(` | Core implementation line contributing to the file behavior. |
| 179 | `        (value) => value && typeof value === 'object' && !Array.isArray(value)` | Core implementation line contributing to the file behavior. |
| 180 | `      );` | Closes a function/method call statement. |
| 181 | `      if (values.length) return values as T[];` | Conditional branch: executes block only when condition is true. |
| 182 | `    }` | Closes the current code/style block scope. |
| 183 | `    return [];` | Returns a value from the current function/method. |
| 184 | `  }` | Closes the current code/style block scope. |
| 185 | `` | Blank line used to separate logical blocks for readability. |
| 186 | `  private formatTime(value: string): string {` | Begins a new code/style block scope. |
| 187 | `    if (!value) return '';` | Conditional branch: executes block only when condition is true. |
| 188 | `    const trimmed = String(value).trim();` | Core implementation line contributing to the file behavior. |
| 189 | `    if (/^\d{2}:\d{2}/.test(trimmed)) return trimmed.slice(0, 5);` | Conditional branch: executes block only when condition is true. |
| 190 | `` | Blank line used to separate logical blocks for readability. |
| 191 | `    const parsed = new Date(trimmed);` | Core implementation line contributing to the file behavior. |
| 192 | `    if (!Number.isNaN(parsed.getTime())) {` | Conditional branch: executes block only when condition is true. |
| 193 | `      return parsed.toISOString().slice(11, 16);` | Returns a value from the current function/method. |
| 194 | `    }` | Closes the current code/style block scope. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `    return trimmed.length >= 5 ? trimmed.slice(0, 5) : trimmed;` | Returns a value from the current function/method. |
| 197 | `  }` | Closes the current code/style block scope. |
| 198 | `` | Blank line used to separate logical blocks for readability. |
| 199 | `  listTrainerClients() {` | Begins a new code/style block scope. |
| 200 | `    return this.http` | Returns a value from the current function/method. |
| 201 | `      .get<any>(\`${BASE_URL}/trainer/me/clients\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 202 | `      .pipe(map((res) => this.unwrapData<TrainerClientLinkView[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 203 | `  }` | Closes the current code/style block scope. |
| 204 | `` | Blank line used to separate logical blocks for readability. |
| 205 | `  getAvailability(trainerId: string) {` | Begins a new code/style block scope. |
| 206 | `    return this.http` | Returns a value from the current function/method. |
| 207 | `      .get<any>(\`${BASE_URL}/trainer/${trainerId}/availability\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 208 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 209 | `        map((res) => this.unwrapData<{ trainerId: string; availability: TrainerAvailabilitySlot[] }>(res)),` | Core implementation line contributing to the file behavior. |
| 210 | `        map((payload) =>` | Arrow function definition, often used for callbacks. |
| 211 | `          (payload?.availability ?? []).map((slot) => ({` | Begins a new code/style block scope. |
| 212 | `            ...slot,` | Core implementation line contributing to the file behavior. |
| 213 | `            startTime: this.formatTime(slot.startTime),` | Core implementation line contributing to the file behavior. |
| 214 | `            endTime: this.formatTime(slot.endTime),` | Core implementation line contributing to the file behavior. |
| 215 | `          }))` | Core implementation line contributing to the file behavior. |
| 216 | `        )` | Core implementation line contributing to the file behavior. |
| 217 | `      );` | Closes a function/method call statement. |
| 218 | `  }` | Closes the current code/style block scope. |
| 219 | `` | Blank line used to separate logical blocks for readability. |
| 220 | `  setAvailability(trainerId: string, slots: TrainerAvailabilitySlot[]) {` | Begins a new code/style block scope. |
| 221 | `    const dayEnum = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];` | Core implementation line contributing to the file behavior. |
| 222 | `    const payload = {` | Begins a new code/style block scope. |
| 223 | `      slots: slots.map((s) => ({` | Begins a new code/style block scope. |
| 224 | `        dayOfWeek: dayEnum[s.dayOfWeek],` | Core implementation line contributing to the file behavior. |
| 225 | `        startTime: this.formatTime(s.startTime),` | Core implementation line contributing to the file behavior. |
| 226 | `        endTime: this.formatTime(s.endTime),` | Core implementation line contributing to the file behavior. |
| 227 | `        isAvailable: s.isAvailable,` | Core implementation line contributing to the file behavior. |
| 228 | `      })),` | Core implementation line contributing to the file behavior. |
| 229 | `    };` | Core implementation line contributing to the file behavior. |
| 230 | `` | Blank line used to separate logical blocks for readability. |
| 231 | `    return this.http` | Returns a value from the current function/method. |
| 232 | `      .put<any>(\`${BASE_URL}/trainer/${trainerId}/availability\`, payload, {` | Begins a new code/style block scope. |
| 233 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 234 | `      })` | Core implementation line contributing to the file behavior. |
| 235 | `      .pipe(map((res) => this.unwrapData<{ availability: TrainerAvailabilitySlot[] }>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 236 | `  }` | Closes the current code/style block scope. |
| 237 | `` | Blank line used to separate logical blocks for readability. |
| 238 | `  deleteAvailabilitySlot(trainerId: string, slotId: string) {` | Begins a new code/style block scope. |
| 239 | `    return this.http.delete<any>(\`${BASE_URL}/trainer/${trainerId}/availability/${slotId}\`, {` | Returns a value from the current function/method. |
| 240 | `      headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 241 | `    });` | Core implementation line contributing to the file behavior. |
| 242 | `  }` | Closes the current code/style block scope. |
| 243 | `` | Blank line used to separate logical blocks for readability. |
| 244 | `  getTrainerMyBookings() {` | Begins a new code/style block scope. |
| 245 | `    return this.http` | Returns a value from the current function/method. |
| 246 | `      .get<any>(\`${BASE_URL}/trainer-bookings/trainer/me\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 247 | `      .pipe(map((res) => this.unwrapData<TrainerBookingSlot[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 248 | `  }` | Closes the current code/style block scope. |
| 249 | `` | Blank line used to separate logical blocks for readability. |
| 250 | `  acceptTrainerBooking(bookingId: string) {` | Begins a new code/style block scope. |
| 251 | `    return this.http` | Returns a value from the current function/method. |
| 252 | `      .post<any>(\`${BASE_URL}/trainer-bookings/${bookingId}/accept\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 253 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 254 | `  }` | Closes the current code/style block scope. |
| 255 | `` | Blank line used to separate logical blocks for readability. |
| 256 | `  rejectTrainerBooking(bookingId: string) {` | Begins a new code/style block scope. |
| 257 | `    return this.http` | Returns a value from the current function/method. |
| 258 | `      .post<any>(\`${BASE_URL}/trainer-bookings/${bookingId}/reject\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 259 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 260 | `  }` | Closes the current code/style block scope. |
| 261 | `` | Blank line used to separate logical blocks for readability. |
| 262 | `  completeTrainerBooking(bookingId: string) {` | Begins a new code/style block scope. |
| 263 | `    return this.http` | Returns a value from the current function/method. |
| 264 | `      .post<any>(\`${BASE_URL}/trainer-bookings/${bookingId}/complete\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 265 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 266 | `  }` | Closes the current code/style block scope. |
| 267 | `` | Blank line used to separate logical blocks for readability. |
| 268 | `  createTrainerClientLink(trainerId: string, memberId: string) {` | Begins a new code/style block scope. |
| 269 | `    return this.http` | Returns a value from the current function/method. |
| 270 | `      .post<any>(\`${BASE_URL}/trainer/${trainerId}/clients\`, { memberId }, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 271 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 272 | `  }` | Closes the current code/style block scope. |
| 273 | `` | Blank line used to separate logical blocks for readability. |
| 274 | `  endTrainerClientLink(trainerId: string, linkId: string) {` | Begins a new code/style block scope. |
| 275 | `    return this.http` | Returns a value from the current function/method. |
| 276 | `      .patch<any>(\`${BASE_URL}/trainer/${trainerId}/clients/${linkId}/end\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 277 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 278 | `  }` | Closes the current code/style block scope. |
| 279 | `` | Blank line used to separate logical blocks for readability. |
| 280 | `  getTrainerClassSchedules(trainerId: string) {` | Begins a new code/style block scope. |
| 281 | `    return this.http` | Returns a value from the current function/method. |
| 282 | `      .get<any>(\`${BASE_URL}/class-schedule/list?page=1&limit=100&trainerId=${trainerId}\`, {` | Declares a core TypeScript structure used by this module. |
| 283 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 284 | `      })` | Core implementation line contributing to the file behavior. |
| 285 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 286 | `        map((res) => this.unwrapData<any>(res)),` | Core implementation line contributing to the file behavior. |
| 287 | `        map((data) => (data?.docs ?? data ?? [])),` | Core implementation line contributing to the file behavior. |
| 288 | `        map((docs: any[]) =>` | Arrow function definition, often used for callbacks. |
| 289 | `          docs.map((s) => ({` | Begins a new code/style block scope. |
| 290 | `            scheduleId: s.id,` | Core implementation line contributing to the file behavior. |
| 291 | `            className: s.className ?? 'Class',` | Core implementation line contributing to the file behavior. |
| 292 | `            dayOfWeek: s.dayOfWeek ?? null,` | Core implementation line contributing to the file behavior. |
| 293 | `            startTime: this.formatTime(s.startTime),` | Core implementation line contributing to the file behavior. |
| 294 | `            endTime: this.formatTime(s.endTime),` | Core implementation line contributing to the file behavior. |
| 295 | `          })) as TrainerClassScheduleBlock[]` | Core implementation line contributing to the file behavior. |
| 296 | `        )` | Core implementation line contributing to the file behavior. |
| 297 | `      );` | Closes a function/method call statement. |
| 298 | `  }` | Closes the current code/style block scope. |
| 299 | `` | Blank line used to separate logical blocks for readability. |
| 300 | `  getScheduleExceptions(scheduleId: string) {` | Begins a new code/style block scope. |
| 301 | `    return this.http` | Returns a value from the current function/method. |
| 302 | `      .get<any>(\`${BASE_URL}/class-schedule/${scheduleId}/exceptions\`, {` | Declares a core TypeScript structure used by this module. |
| 303 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 304 | `      })` | Core implementation line contributing to the file behavior. |
| 305 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 306 | `        map((res) => this.unwrapData<any[]>(res) ?? []),` | Core implementation line contributing to the file behavior. |
| 307 | `        map(` | Core implementation line contributing to the file behavior. |
| 308 | `          (exceptions) =>` | Arrow function definition, often used for callbacks. |
| 309 | `            exceptions.map((e) => ({` | Begins a new code/style block scope. |
| 310 | `              id: e.id,` | Core implementation line contributing to the file behavior. |
| 311 | `              scheduleId: e.scheduleId,` | Core implementation line contributing to the file behavior. |
| 312 | `              exceptionDate: e.exceptionDate,` | Core implementation line contributing to the file behavior. |
| 313 | `              type: e.type,` | Declares a core TypeScript structure used by this module. |
| 314 | `              reason: e.reason ?? null,` | Core implementation line contributing to the file behavior. |
| 315 | `              newStartTime: e.newStartTime ? this.formatTime(e.newStartTime) : null,` | Core implementation line contributing to the file behavior. |
| 316 | `              newEndTime: e.newEndTime ? this.formatTime(e.newEndTime) : null,` | Core implementation line contributing to the file behavior. |
| 317 | `            })) as ScheduleExceptionView[]` | Core implementation line contributing to the file behavior. |
| 318 | `        )` | Core implementation line contributing to the file behavior. |
| 319 | `      );` | Closes a function/method call statement. |
| 320 | `  }` | Closes the current code/style block scope. |
| 321 | `` | Blank line used to separate logical blocks for readability. |
| 322 | `  listConversations() {` | Begins a new code/style block scope. |
| 323 | `    return this.http` | Returns a value from the current function/method. |
| 324 | `      .get<any>(\`${BASE_URL}/trainer-messaging/conversations\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 325 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 326 | `  }` | Closes the current code/style block scope. |
| 327 | `` | Blank line used to separate logical blocks for readability. |
| 328 | `  listContacts() {` | Begins a new code/style block scope. |
| 329 | `    return this.http` | Returns a value from the current function/method. |
| 330 | `      .get<any>(\`${BASE_URL}/trainer-messaging/contacts\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 331 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingParticipant[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 332 | `  }` | Closes the current code/style block scope. |
| 333 | `` | Blank line used to separate logical blocks for readability. |
| 334 | `  createOrGetConversation(partnerId: string) {` | Begins a new code/style block scope. |
| 335 | `    return this.http` | Returns a value from the current function/method. |
| 336 | `      .post<any>(\`${BASE_URL}/trainer-messaging/conversations\`, { partnerId }, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 337 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 338 | `  }` | Closes the current code/style block scope. |
| 339 | `` | Blank line used to separate logical blocks for readability. |
| 340 | `  getMessages(conversationId: string, limit = 50) {` | Begins a new code/style block scope. |
| 341 | `    return this.http` | Returns a value from the current function/method. |
| 342 | `      .get<any>(\`${BASE_URL}/trainer-messaging/conversations/${conversationId}/messages?limit=${limit}\`, {` | Begins a new code/style block scope. |
| 343 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 344 | `      })` | Core implementation line contributing to the file behavior. |
| 345 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationMessagesPage>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 346 | `  }` | Closes the current code/style block scope. |
| 347 | `` | Blank line used to separate logical blocks for readability. |
| 348 | `  sendMessage(conversationId: string, content: string) {` | Begins a new code/style block scope. |
| 349 | `    return this.http` | Returns a value from the current function/method. |
| 350 | `      .post<any>(` | Core implementation line contributing to the file behavior. |
| 351 | `        \`${BASE_URL}/trainer-messaging/conversations/${conversationId}/messages\`,` | Core implementation line contributing to the file behavior. |
| 352 | `        { content },` | Core implementation line contributing to the file behavior. |
| 353 | `        { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 354 | `      )` | Core implementation line contributing to the file behavior. |
| 355 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationMessagesPage>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 356 | `  }` | Closes the current code/style block scope. |
| 357 | `` | Blank line used to separate logical blocks for readability. |
| 358 | `  markConversationRead(conversationId: string) {` | Begins a new code/style block scope. |
| 359 | `    return this.http.post<any>(` | Returns a value from the current function/method. |
| 360 | `      \`${BASE_URL}/trainer-messaging/conversations/${conversationId}/read\`,` | Core implementation line contributing to the file behavior. |
| 361 | `      {},` | Core implementation line contributing to the file behavior. |
| 362 | `      { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 363 | `    );` | Closes a function/method call statement. |
| 364 | `  }` | Closes the current code/style block scope. |
| 365 | `` | Blank line used to separate logical blocks for readability. |
| 366 | `  ` | Blank line used to separate logical blocks for readability. |
| 367 | `  listExercises() {` | Begins a new code/style block scope. |
| 368 | `    return this.http` | Returns a value from the current function/method. |
| 369 | `      .get<any>(\`${BASE_URL}/exercises\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 370 | `      .pipe(map((res) => this.normalizeArrayResponse<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 371 | `  }` | Closes the current code/style block scope. |
| 372 | `` | Blank line used to separate logical blocks for readability. |
| 373 | `  createExercise(payload: ExercisePayload) {` | Begins a new code/style block scope. |
| 374 | `    return this.http` | Returns a value from the current function/method. |
| 375 | `      .post<any>(\`${BASE_URL}/exercises\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 376 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 377 | `  }` | Closes the current code/style block scope. |
| 378 | `` | Blank line used to separate logical blocks for readability. |
| 379 | `  updateExercise(exerciseId: string, payload: ExercisePayload) {` | Begins a new code/style block scope. |
| 380 | `    return this.http` | Returns a value from the current function/method. |
| 381 | `      .patch<any>(\`${BASE_URL}/exercises/${exerciseId}\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 382 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 383 | `  }` | Closes the current code/style block scope. |
| 384 | `` | Blank line used to separate logical blocks for readability. |
| 385 | `  deleteExercise(exerciseId: string) {` | Begins a new code/style block scope. |
| 386 | `    return this.http` | Returns a value from the current function/method. |
| 387 | `      .delete<any>(\`${BASE_URL}/exercises/${exerciseId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 388 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 389 | `  }` | Closes the current code/style block scope. |
| 390 | `` | Blank line used to separate logical blocks for readability. |
| 391 | `  ` | Blank line used to separate logical blocks for readability. |
| 392 | `  listWorkoutPlans() {` | Begins a new code/style block scope. |
| 393 | `    return this.http` | Returns a value from the current function/method. |
| 394 | `      .get<any>(\`${BASE_URL}/workout-plans\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 395 | `      .pipe(map((res) => this.normalizeArrayResponse<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 396 | `  }` | Closes the current code/style block scope. |
| 397 | `` | Blank line used to separate logical blocks for readability. |
| 398 | `  getWorkoutPlanById(planId: string) {` | Begins a new code/style block scope. |
| 399 | `    return this.http` | Returns a value from the current function/method. |
| 400 | `      .get<any>(\`${BASE_URL}/workout-plans/${planId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 401 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 402 | `  }` | Closes the current code/style block scope. |
| 403 | `` | Blank line used to separate logical blocks for readability. |
| 404 | `  createWorkoutPlan(payload: WorkoutPlanPayload) {` | Begins a new code/style block scope. |
| 405 | `    return this.http` | Returns a value from the current function/method. |
| 406 | `      .post<any>(\`${BASE_URL}/workout-plans\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 407 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 408 | `  }` | Closes the current code/style block scope. |
| 409 | `` | Blank line used to separate logical blocks for readability. |
| 410 | `  deleteWorkoutPlan(planId: string) {` | Begins a new code/style block scope. |
| 411 | `    return this.http` | Returns a value from the current function/method. |
| 412 | `      .delete<any>(\`${BASE_URL}/workout-plans/${planId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 413 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 414 | `  }` | Closes the current code/style block scope. |
| 415 | `` | Blank line used to separate logical blocks for readability. |
| 416 | `  ` | Blank line used to separate logical blocks for readability. |
| 417 | `  listDietPlans(params?: {` | Begins a new code/style block scope. |
| 418 | `    page?: number;` | CSS declaration assigning a style property value. |
| 419 | `    limit?: number;` | CSS declaration assigning a style property value. |
| 420 | `    status?: string;` | CSS declaration assigning a style property value. |
| 421 | `    includeArchived?: boolean;` | CSS declaration assigning a style property value. |
| 422 | `  }) {` | Begins a new code/style block scope. |
| 423 | `    const page = params?.page ?? 1;` | Core implementation line contributing to the file behavior. |
| 424 | `    const limit = params?.limit ?? 10;` | Core implementation line contributing to the file behavior. |
| 425 | `    const status = params?.status ?? 'ACTIVE';` | Core implementation line contributing to the file behavior. |
| 426 | `    const includeArchived = params?.includeArchived ?? false;` | Core implementation line contributing to the file behavior. |
| 427 | `` | Blank line used to separate logical blocks for readability. |
| 428 | `    const query =` | Core implementation line contributing to the file behavior. |
| 429 | `      \`page=${encodeURIComponent(String(page))}\` +` | Core implementation line contributing to the file behavior. |
| 430 | `      \`&limit=${encodeURIComponent(String(limit))}\` +` | Core implementation line contributing to the file behavior. |
| 431 | `      \`&status=${encodeURIComponent(status)}\` +` | Core implementation line contributing to the file behavior. |
| 432 | `      \`&includeArchived=${encodeURIComponent(String(includeArchived))}\`;` | Core implementation line contributing to the file behavior. |
| 433 | `` | Blank line used to separate logical blocks for readability. |
| 434 | `    return this.http` | Returns a value from the current function/method. |
| 435 | `      .get<any>(\`${BASE_URL}/diet-plans?${query}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 436 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 437 | `        map((res) => this.unwrapData<any>(res)),` | Core implementation line contributing to the file behavior. |
| 438 | `        map((payload) => ({` | Begins a new code/style block scope. |
| 439 | `          docs: payload?.docs ?? this.normalizeArrayResponse<any>({ data: payload }),` | Core implementation line contributing to the file behavior. |
| 440 | `          totalDocs: Number(payload?.totalDocs ?? payload?.docsCount ?? 0),` | Core implementation line contributing to the file behavior. |
| 441 | `          totalPages: Number(payload?.totalPages ?? 1),` | Core implementation line contributing to the file behavior. |
| 442 | `          currentPage: Number(payload?.currentPage ?? page),` | Core implementation line contributing to the file behavior. |
| 443 | `          limit: Number(payload?.limit ?? limit),` | Core implementation line contributing to the file behavior. |
| 444 | `          hasNext: Boolean(payload?.hasNext ?? false),` | Core implementation line contributing to the file behavior. |
| 445 | `          hasPrev: Boolean(payload?.hasPrev ?? false),` | Core implementation line contributing to the file behavior. |
| 446 | `          nextPage: payload?.nextPage ?? null,` | Core implementation line contributing to the file behavior. |
| 447 | `          previousPage: payload?.previousPage ?? null,` | Core implementation line contributing to the file behavior. |
| 448 | `        }))` | Core implementation line contributing to the file behavior. |
| 449 | `      );` | Closes a function/method call statement. |
| 450 | `  }` | Closes the current code/style block scope. |
| 451 | `` | Blank line used to separate logical blocks for readability. |
| 452 | `  getDietPlanById(planId: string) {` | Begins a new code/style block scope. |
| 453 | `    return this.http` | Returns a value from the current function/method. |
| 454 | `      .get<any>(\`${BASE_URL}/diet-plans/${planId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 455 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 456 | `  }` | Closes the current code/style block scope. |
| 457 | `` | Blank line used to separate logical blocks for readability. |
| 458 | `  createDietPlan(payload: DietPlanPayload) {` | Begins a new code/style block scope. |
| 459 | `    return this.http` | Returns a value from the current function/method. |
| 460 | `      .post<any>(\`${BASE_URL}/diet-plans\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 461 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 462 | `  }` | Closes the current code/style block scope. |
| 463 | `` | Blank line used to separate logical blocks for readability. |
| 464 | `  updateDietPlan(planId: string, payload: DietPlanUpdatePayload) {` | Begins a new code/style block scope. |
| 465 | `    return this.http` | Returns a value from the current function/method. |
| 466 | `      .patch<any>(\`${BASE_URL}/diet-plans/${planId}\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 467 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 468 | `  }` | Closes the current code/style block scope. |
| 469 | `` | Blank line used to separate logical blocks for readability. |
| 470 | `  deleteDietPlan(planId: string) {` | Begins a new code/style block scope. |
| 471 | `    return this.http` | Returns a value from the current function/method. |
| 472 | `      .delete<any>(\`${BASE_URL}/diet-plans/${planId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 473 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 474 | `  }` | Closes the current code/style block scope. |
| 475 | `` | Blank line used to separate logical blocks for readability. |
| 476 | `  assignDietPlan(planId: string, payload: DietPlanAssignmentPayload) {` | Begins a new code/style block scope. |
| 477 | `    return this.http` | Returns a value from the current function/method. |
| 478 | `      .post<any>(\`${BASE_URL}/diet-plans/${planId}/assignments\`, payload, {` | Begins a new code/style block scope. |
| 479 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 480 | `      })` | Core implementation line contributing to the file behavior. |
| 481 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 482 | `  }` | Closes the current code/style block scope. |
| 483 | `` | Blank line used to separate logical blocks for readability. |
| 484 | `  archiveDietPlan(planId: string) {` | Begins a new code/style block scope. |
| 485 | `    return this.http` | Returns a value from the current function/method. |
| 486 | `      .post<any>(\`${BASE_URL}/diet-plans/${planId}/archive\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 487 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 488 | `  }` | Closes the current code/style block scope. |
| 489 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.