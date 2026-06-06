# Explanation: `src/app/services/notification.service.ts`

## File Overview
- **Relative path:** `src/app/services/notification.service.ts`
- **Total lines:** `82`
- **Non-empty lines:** `72`
- **Import statements:** `6`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `1`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { HttpClient, HttpHeaders } from '@angular/common/http';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Injectable } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { StorageService } from '../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { Observable } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { catchError, map } from 'rxjs/operators';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { API_BASE_URL as BASE_URL } from '../core/constants/api.constants';` | Imports a dependency so this file can use external symbols. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `export interface AppNotification {` | Exports symbols so other files can import this logic. |
| 9 | `  id: string;` | CSS declaration assigning a style property value. |
| 10 | `  title?: string;` | CSS declaration assigning a style property value. |
| 11 | `  message?: string;` | CSS declaration assigning a style property value. |
| 12 | `  content?: string;` | CSS declaration assigning a style property value. |
| 13 | `  isRead?: boolean;` | CSS declaration assigning a style property value. |
| 14 | `  createdAt?: string;` | CSS declaration assigning a style property value. |
| 15 | `  [key: string]: any;` | CSS declaration assigning a style property value. |
| 16 | `}` | Closes the current code/style block scope. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 19 | `export class NotificationService {` | Exports symbols so other files can import this logic. |
| 20 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 21 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 22 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 23 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 26 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 27 | `  }` | Closes the current code/style block scope. |
| 28 | `` | Blank line used to separate logical blocks for readability. |
| 29 | `  getUnreadCount(): Observable<number> {` | Begins a new code/style block scope. |
| 30 | `    return this.http` | Returns a value from the current function/method. |
| 31 | `      .get<any>(\`${BASE_URL}/notifications/unread-count\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 32 | `      .pipe(map((res) => Number(res?.data?.updatedCount ?? 0)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 33 | `  }` | Closes the current code/style block scope. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `  getNotifications(page = 1, limit = 10): Observable<AppNotification[]> {` | Begins a new code/style block scope. |
| 36 | `    return this.http` | Returns a value from the current function/method. |
| 37 | `      .get<any>(\`${BASE_URL}/notifications?page=${page}&limit=${limit}&unreadOnly=false\`, {` | Begins a new code/style block scope. |
| 38 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 39 | `      })` | Core implementation line contributing to the file behavior. |
| 40 | `      .pipe(map((res) => (res?.data?.docs ?? []) as AppNotification[]));` | Starts an RxJS operator pipeline to transform Observable values. |
| 41 | `  }` | Closes the current code/style block scope. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `  markOneRead(id: string): Observable<number> {` | Begins a new code/style block scope. |
| 44 | `    return this.http` | Returns a value from the current function/method. |
| 45 | `      .patch<any>(\`${BASE_URL}/notifications/${id}/read\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 46 | `      .pipe(map((res) => Number(res?.data?.updatedCount ?? 0)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 47 | `  }` | Closes the current code/style block scope. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `  markAllRead(): Observable<number> {` | Begins a new code/style block scope. |
| 50 | `    return this.http` | Returns a value from the current function/method. |
| 51 | `      .patch<any>(\`${BASE_URL}/notifications/read-all\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 52 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 53 | `        map((res) => Number(res?.data?.updatedCount ?? 0)),` | Core implementation line contributing to the file behavior. |
| 54 | `        ` | Blank line used to separate logical blocks for readability. |
| 55 | `        catchError(() =>` | Arrow function definition, often used for callbacks. |
| 56 | `          this.http` | Core implementation line contributing to the file behavior. |
| 57 | `            .patch<any>(\`${BASE_URL}/notification/read-all\`, {}, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 58 | `            .pipe(map((res) => Number(res?.data?.updatedCount ?? 0)))` | Starts an RxJS operator pipeline to transform Observable values. |
| 59 | `        )` | Core implementation line contributing to the file behavior. |
| 60 | `      );` | Closes a function/method call statement. |
| 61 | `  }` | Closes the current code/style block scope. |
| 62 | `` | Blank line used to separate logical blocks for readability. |
| 63 | `  checkoutPayment(payload: {` | Begins a new code/style block scope. |
| 64 | `    targetType: 'TRAINER_BOOKING' \| string;` | CSS declaration assigning a style property value. |
| 65 | `    targetId: string;` | CSS declaration assigning a style property value. |
| 66 | `    amount: number;` | CSS declaration assigning a style property value. |
| 67 | `    currency?: string;` | CSS declaration assigning a style property value. |
| 68 | `  }): Observable<any> {` | Begins a new code/style block scope. |
| 69 | `    const body: any = {` | Begins a new code/style block scope. |
| 70 | `      targetType: payload.targetType,` | Core implementation line contributing to the file behavior. |
| 71 | `      targetId: payload.targetId,` | Core implementation line contributing to the file behavior. |
| 72 | `      amount: payload.amount,` | Core implementation line contributing to the file behavior. |
| 73 | `      currency: payload.currency ?? 'VND',` | Core implementation line contributing to the file behavior. |
| 74 | `    };` | Core implementation line contributing to the file behavior. |
| 75 | `` | Blank line used to separate logical blocks for readability. |
| 76 | `    return this.http.post<any>(` | Returns a value from the current function/method. |
| 77 | `      \`${BASE_URL}/payments/checkout\`,` | Core implementation line contributing to the file behavior. |
| 78 | `      body,` | Core implementation line contributing to the file behavior. |
| 79 | `      { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 80 | `    );` | Closes a function/method call statement. |
| 81 | `  }` | Closes the current code/style block scope. |
| 82 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.