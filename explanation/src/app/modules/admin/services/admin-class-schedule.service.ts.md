# Explanation: `src/app/modules/admin/services/admin-class-schedule.service.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/services/admin-class-schedule.service.ts`
- **Total lines:** `199`
- **Non-empty lines:** `175`
- **Import statements:** `5`
- **Class-like declarations found:** `12`
- **Function/method-like signatures found (approx):** `11`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { HttpClient, HttpHeaders } from '@angular/common/http';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Injectable } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { map } from 'rxjs/operators';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { StorageService } from '../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `export interface GymClassItem {` | Exports symbols so other files can import this logic. |
| 8 | `  id: string;` | CSS declaration assigning a style property value. |
| 9 | `  className: string;` | CSS declaration assigning a style property value. |
| 10 | `  description?: string;` | CSS declaration assigning a style property value. |
| 11 | `  difficultyLevel?: string;` | CSS declaration assigning a style property value. |
| 12 | `  category?: string;` | CSS declaration assigning a style property value. |
| 13 | `  isActive?: boolean;` | CSS declaration assigning a style property value. |
| 14 | `  imageUrl?: string \| null;` | CSS declaration assigning a style property value. |
| 15 | `}` | Closes the current code/style block scope. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `export interface TrainerItem {` | Exports symbols so other files can import this logic. |
| 18 | `  id: string;` | CSS declaration assigning a style property value. |
| 19 | `  firstName?: string;` | CSS declaration assigning a style property value. |
| 20 | `  lastName?: string;` | CSS declaration assigning a style property value. |
| 21 | `  email?: string;` | CSS declaration assigning a style property value. |
| 22 | `}` | Closes the current code/style block scope. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `export interface PaginatedResult<T> {` | Exports symbols so other files can import this logic. |
| 25 | `  docs: T[];` | CSS declaration assigning a style property value. |
| 26 | `  totalDocs: number;` | CSS declaration assigning a style property value. |
| 27 | `  totalPages: number;` | CSS declaration assigning a style property value. |
| 28 | `  currentPage: number;` | CSS declaration assigning a style property value. |
| 29 | `  hasNext: boolean;` | CSS declaration assigning a style property value. |
| 30 | `  hasPrev: boolean;` | CSS declaration assigning a style property value. |
| 31 | `  nextPage: number \| null;` | CSS declaration assigning a style property value. |
| 32 | `  previousPage: number \| null;` | CSS declaration assigning a style property value. |
| 33 | `  limit: number;` | CSS declaration assigning a style property value. |
| 34 | `}` | Closes the current code/style block scope. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `export interface ClassSchedulePayload {` | Exports symbols so other files can import this logic. |
| 37 | `  classId: string;` | CSS declaration assigning a style property value. |
| 38 | `  trainerId: string;` | CSS declaration assigning a style property value. |
| 39 | `  dayOfWeek: string;` | CSS declaration assigning a style property value. |
| 40 | `  daysOfWeek: string[];` | CSS declaration assigning a style property value. |
| 41 | `  startTime: string;` | CSS declaration assigning a style property value. |
| 42 | `  endTime: string;` | CSS declaration assigning a style property value. |
| 43 | `  validFrom: string;` | CSS declaration assigning a style property value. |
| 44 | `  validUntil: string;` | CSS declaration assigning a style property value. |
| 45 | `  location: string;` | CSS declaration assigning a style property value. |
| 46 | `  capacity: number;` | CSS declaration assigning a style property value. |
| 47 | `  isActive: boolean;` | CSS declaration assigning a style property value. |
| 48 | `}` | Closes the current code/style block scope. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `export interface ScheduleExceptionPayload {` | Exports symbols so other files can import this logic. |
| 51 | `  exceptionDate: string;` | CSS declaration assigning a style property value. |
| 52 | `  type: string;` | Declares a core TypeScript structure used by this module. |
| 53 | `  reason?: string;` | CSS declaration assigning a style property value. |
| 54 | `  newStartTime?: string;` | CSS declaration assigning a style property value. |
| 55 | `  newEndTime?: string;` | CSS declaration assigning a style property value. |
| 56 | `}` | Closes the current code/style block scope. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 59 | `export class AdminClassScheduleService {` | Exports symbols so other files can import this logic. |
| 60 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 61 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 62 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 63 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 64 | `` | Blank line used to separate logical blocks for readability. |
| 65 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 66 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 67 | `  }` | Closes the current code/style block scope. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 70 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 71 | `  }` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `  private normalizePage<T>(response: any): PaginatedResult<T> {` | Begins a new code/style block scope. |
| 74 | `    const payload = this.unwrapData<any>(response) ?? {};` | Core implementation line contributing to the file behavior. |
| 75 | `    const docs = Array.isArray(payload?.docs)` | Core implementation line contributing to the file behavior. |
| 76 | `      ? payload.docs` | Core implementation line contributing to the file behavior. |
| 77 | `      : Array.isArray(payload?.items)` | Core implementation line contributing to the file behavior. |
| 78 | `      ? payload.items` | Core implementation line contributing to the file behavior. |
| 79 | `      : Array.isArray(payload)` | Core implementation line contributing to the file behavior. |
| 80 | `      ? payload` | Core implementation line contributing to the file behavior. |
| 81 | `      : [];` | CSS declaration assigning a style property value. |
| 82 | `    const pageMeta = payload?.pagination ?? payload;` | Core implementation line contributing to the file behavior. |
| 83 | `` | Blank line used to separate logical blocks for readability. |
| 84 | `    const currentPage = Number(pageMeta?.currentPage ?? pageMeta?.page ?? 1);` | Core implementation line contributing to the file behavior. |
| 85 | `    const totalPages = Number(pageMeta?.totalPages ?? 1);` | Core implementation line contributing to the file behavior. |
| 86 | `    const totalDocs = Number(pageMeta?.totalDocs ?? pageMeta?.total ?? docs.length);` | Core implementation line contributing to the file behavior. |
| 87 | `` | Blank line used to separate logical blocks for readability. |
| 88 | `    return {` | Returns a value from the current function/method. |
| 89 | `      docs: docs as T[],` | Core implementation line contributing to the file behavior. |
| 90 | `      totalDocs,` | Core implementation line contributing to the file behavior. |
| 91 | `      totalPages,` | Core implementation line contributing to the file behavior. |
| 92 | `      currentPage,` | Core implementation line contributing to the file behavior. |
| 93 | `      hasNext: Boolean(pageMeta?.hasNext ?? currentPage < totalPages),` | Core implementation line contributing to the file behavior. |
| 94 | `      hasPrev: Boolean(pageMeta?.hasPrev ?? currentPage > 1),` | Core implementation line contributing to the file behavior. |
| 95 | `      nextPage: pageMeta?.nextPage ?? (currentPage < totalPages ? currentPage + 1 : null),` | Core implementation line contributing to the file behavior. |
| 96 | `      previousPage: pageMeta?.previousPage ?? (currentPage > 1 ? currentPage - 1 : null),` | Core implementation line contributing to the file behavior. |
| 97 | `      limit: Number(pageMeta?.limit ?? 10),` | Core implementation line contributing to the file behavior. |
| 98 | `    };` | Core implementation line contributing to the file behavior. |
| 99 | `  }` | Closes the current code/style block scope. |
| 100 | `` | Blank line used to separate logical blocks for readability. |
| 101 | `  getClassTypes() {` | Begins a new code/style block scope. |
| 102 | `    return this.http` | Returns a value from the current function/method. |
| 103 | `      .get<any>(\`${BASE_URL}/class-schedule/classes\`, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 104 | `      .pipe(map((res) => this.unwrapData<GymClassItem[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 105 | `  }` | Closes the current code/style block scope. |
| 106 | `` | Blank line used to separate logical blocks for readability. |
| 107 | `  listTrainers(page = 1, limit = 10) {` | Begins a new code/style block scope. |
| 108 | `    return this.http` | Returns a value from the current function/method. |
| 109 | `      .get<any>(\`${BASE_URL}/trainer/list?page=${page}&limit=${limit}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 110 | `      .pipe(map((res) => this.normalizePage<TrainerItem>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 111 | `  }` | Closes the current code/style block scope. |
| 112 | `` | Blank line used to separate logical blocks for readability. |
| 113 | `  checkConflict(payload: {` | Begins a new code/style block scope. |
| 114 | `    trainerId: string;` | CSS declaration assigning a style property value. |
| 115 | `    dayOfWeek: string;` | CSS declaration assigning a style property value. |
| 116 | `    startTime: string;` | CSS declaration assigning a style property value. |
| 117 | `    endTime: string;` | CSS declaration assigning a style property value. |
| 118 | `    excludeScheduleId?: string;` | CSS declaration assigning a style property value. |
| 119 | `  }) {` | Begins a new code/style block scope. |
| 120 | `    return this.http` | Returns a value from the current function/method. |
| 121 | `      .post<any>(\`${BASE_URL}/class-schedule/check-conflict\`, payload, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 122 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 123 | `  }` | Closes the current code/style block scope. |
| 124 | `` | Blank line used to separate logical blocks for readability. |
| 125 | `  createSchedule(payload: ClassSchedulePayload) {` | Begins a new code/style block scope. |
| 126 | `    return this.http` | Returns a value from the current function/method. |
| 127 | `      .post<any>(\`${BASE_URL}/class-schedule/create\`, payload, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 128 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 129 | `  }` | Closes the current code/style block scope. |
| 130 | `` | Blank line used to separate logical blocks for readability. |
| 131 | `  listSchedules(params: {` | Begins a new code/style block scope. |
| 132 | `    page?: number;` | CSS declaration assigning a style property value. |
| 133 | `    limit?: number;` | CSS declaration assigning a style property value. |
| 134 | `    sort?: 'asc' \| 'desc' \| '';` | CSS declaration assigning a style property value. |
| 135 | `    q?: string;` | CSS declaration assigning a style property value. |
| 136 | `    searchField?: string;` | CSS declaration assigning a style property value. |
| 137 | `    dayOfWeek?: string;` | CSS declaration assigning a style property value. |
| 138 | `    trainerId?: string;` | CSS declaration assigning a style property value. |
| 139 | `    classId?: string;` | CSS declaration assigning a style property value. |
| 140 | `  }) {` | Begins a new code/style block scope. |
| 141 | `    const query = new URLSearchParams();` | Core implementation line contributing to the file behavior. |
| 142 | `    query.set('page', String(params.page ?? 1));` | Core implementation line contributing to the file behavior. |
| 143 | `    query.set('limit', String(params.limit ?? 10));` | Core implementation line contributing to the file behavior. |
| 144 | `    if (params.sort) query.set('sort', params.sort);` | Conditional branch: executes block only when condition is true. |
| 145 | `    if (params.q) query.set('q', params.q);` | Conditional branch: executes block only when condition is true. |
| 146 | `    if (params.searchField) query.set('searchField', params.searchField);` | Conditional branch: executes block only when condition is true. |
| 147 | `    if (params.dayOfWeek) query.set('dayOfWeek', params.dayOfWeek);` | Conditional branch: executes block only when condition is true. |
| 148 | `    if (params.trainerId) query.set('trainerId', params.trainerId);` | Conditional branch: executes block only when condition is true. |
| 149 | `    if (params.classId) query.set('classId', params.classId);` | Conditional branch: executes block only when condition is true. |
| 150 | `` | Blank line used to separate logical blocks for readability. |
| 151 | `    return this.http` | Returns a value from the current function/method. |
| 152 | `      .get<any>(\`${BASE_URL}/class-schedule/list?${query.toString()}\`, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 153 | `      .pipe(map((res) => this.normalizePage<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 154 | `  }` | Closes the current code/style block scope. |
| 155 | `` | Blank line used to separate logical blocks for readability. |
| 156 | `  updateSchedule(id: string, payload: ClassSchedulePayload) {` | Begins a new code/style block scope. |
| 157 | `    return this.http` | Returns a value from the current function/method. |
| 158 | `      .patch<any>(\`${BASE_URL}/class-schedule/${id}\`, payload, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 159 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 160 | `  }` | Closes the current code/style block scope. |
| 161 | `` | Blank line used to separate logical blocks for readability. |
| 162 | `  deleteSchedule(id: string) {` | Begins a new code/style block scope. |
| 163 | `    return this.http` | Returns a value from the current function/method. |
| 164 | `      .delete<any>(\`${BASE_URL}/class-schedule/${id}\`, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 165 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 166 | `  }` | Closes the current code/style block scope. |
| 167 | `` | Blank line used to separate logical blocks for readability. |
| 168 | `  uploadClassImage(classId: string, file: File) {` | Begins a new code/style block scope. |
| 169 | `    const formData = new FormData();` | Core implementation line contributing to the file behavior. |
| 170 | `    formData.append('file', file);` | Core implementation line contributing to the file behavior. |
| 171 | `    return this.http` | Returns a value from the current function/method. |
| 172 | `      .post<any>(\`${BASE_URL}/class-schedule/classes/${classId}/image\`, formData, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 173 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 174 | `  }` | Closes the current code/style block scope. |
| 175 | `` | Blank line used to separate logical blocks for readability. |
| 176 | `  listExceptions(scheduleId: string) {` | Begins a new code/style block scope. |
| 177 | `    return this.http` | Returns a value from the current function/method. |
| 178 | `      .get<any>(\`${BASE_URL}/class-schedule/${scheduleId}/exceptions\`, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 179 | `      .pipe(map((res) => this.unwrapData<any[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 180 | `  }` | Closes the current code/style block scope. |
| 181 | `` | Blank line used to separate logical blocks for readability. |
| 182 | `  createException(scheduleId: string, payload: ScheduleExceptionPayload) {` | Begins a new code/style block scope. |
| 183 | `    return this.http` | Returns a value from the current function/method. |
| 184 | `      .post<any>(\`${BASE_URL}/class-schedule/${scheduleId}/exceptions\`, payload, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 185 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 186 | `  }` | Closes the current code/style block scope. |
| 187 | `` | Blank line used to separate logical blocks for readability. |
| 188 | `  updateException(exceptionId: string, payload: ScheduleExceptionPayload) {` | Begins a new code/style block scope. |
| 189 | `    return this.http` | Returns a value from the current function/method. |
| 190 | `      .patch<any>(\`${BASE_URL}/class-schedule/exceptions/${exceptionId}\`, payload, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 191 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 192 | `  }` | Closes the current code/style block scope. |
| 193 | `` | Blank line used to separate logical blocks for readability. |
| 194 | `  deleteException(exceptionId: string) {` | Begins a new code/style block scope. |
| 195 | `    return this.http` | Returns a value from the current function/method. |
| 196 | `      .delete<any>(\`${BASE_URL}/class-schedule/exceptions/${exceptionId}\`, { headers: this.authHeaders() })` | Declares a core TypeScript structure used by this module. |
| 197 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 198 | `  }` | Closes the current code/style block scope. |
| 199 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.