# Explanation: `src/app/modules/admin/services/admin-membership.service.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/services/admin-membership.service.ts`
- **Total lines:** `72`
- **Non-empty lines:** `61`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `6`

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
| 7 | `export interface MembershipTierPayload {` | Exports symbols so other files can import this logic. |
| 8 | `  name: string;` | CSS declaration assigning a style property value. |
| 9 | `  description: string;` | CSS declaration assigning a style property value. |
| 10 | `  minPrice: number;` | CSS declaration assigning a style property value. |
| 11 | `  purchasePrice: number;` | CSS declaration assigning a style property value. |
| 12 | `  level: 'BASIC' \| 'PREMIUM' \| 'VIP' \| string;` | CSS declaration assigning a style property value. |
| 13 | `}` | Closes the current code/style block scope. |
| 14 | `` | Blank line used to separate logical blocks for readability. |
| 15 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 16 | `export class AdminMembershipService {` | Exports symbols so other files can import this logic. |
| 17 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 18 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 19 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 20 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 21 | `` | Blank line used to separate logical blocks for readability. |
| 22 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 23 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 24 | `  }` | Closes the current code/style block scope. |
| 25 | `` | Blank line used to separate logical blocks for readability. |
| 26 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 27 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 28 | `  }` | Closes the current code/style block scope. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `  private normalizeArrayResponse(response: any): any[] {` | Begins a new code/style block scope. |
| 31 | `    const payload = this.unwrapData<any>(response);` | Core implementation line contributing to the file behavior. |
| 32 | `    if (Array.isArray(payload)) return payload;` | Conditional branch: executes block only when condition is true. |
| 33 | `    if (!payload \|\| typeof payload !== 'object') return [];` | Conditional branch: executes block only when condition is true. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `    return Object.entries(payload)` | Returns a value from the current function/method. |
| 36 | `      .filter(([key, value]) => /^\d+$/.test(key) && !!value && typeof value === 'object')` | Core implementation line contributing to the file behavior. |
| 37 | `      .sort((a, b) => Number(a[0]) - Number(b[0]))` | Core implementation line contributing to the file behavior. |
| 38 | `      .map(([, value]) => value as any);` | Core implementation line contributing to the file behavior. |
| 39 | `  }` | Closes the current code/style block scope. |
| 40 | `` | Blank line used to separate logical blocks for readability. |
| 41 | `  listTiers() {` | Begins a new code/style block scope. |
| 42 | `    return this.http` | Returns a value from the current function/method. |
| 43 | `      .get<any>(\`${BASE_URL}/memberships\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 44 | `      .pipe(map((res) => this.normalizeArrayResponse(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 45 | `  }` | Closes the current code/style block scope. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `  createTier(payload: MembershipTierPayload) {` | Begins a new code/style block scope. |
| 48 | `    return this.http` | Returns a value from the current function/method. |
| 49 | `      .post<any>(\`${BASE_URL}/memberships\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 50 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 51 | `  }` | Closes the current code/style block scope. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `  updateTier(id: string, payload: MembershipTierPayload) {` | Begins a new code/style block scope. |
| 54 | `    return this.http` | Returns a value from the current function/method. |
| 55 | `      .patch<any>(\`${BASE_URL}/memberships/${id}\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 56 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 57 | `  }` | Closes the current code/style block scope. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `  deleteTier(id: string) {` | Begins a new code/style block scope. |
| 60 | `    return this.http` | Returns a value from the current function/method. |
| 61 | `      .delete<any>(\`${BASE_URL}/memberships/${id}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 62 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 63 | `  }` | Closes the current code/style block scope. |
| 64 | `` | Blank line used to separate logical blocks for readability. |
| 65 | `  uploadTierLogo(id: string, file: File) {` | Begins a new code/style block scope. |
| 66 | `    const formData = new FormData();` | Core implementation line contributing to the file behavior. |
| 67 | `    formData.append('file', file);` | Core implementation line contributing to the file behavior. |
| 68 | `    return this.http` | Returns a value from the current function/method. |
| 69 | `      .post<any>(\`${BASE_URL}/memberships/${id}/logo\`, formData, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 70 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 71 | `  }` | Closes the current code/style block scope. |
| 72 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.