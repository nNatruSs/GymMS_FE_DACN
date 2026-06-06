# Explanation: `src/app/modules/admin/services/admin-role.service.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/services/admin-role.service.ts`
- **Total lines:** `100`
- **Non-empty lines:** `87`
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
| 7 | `export interface AdminRolePayload {` | Exports symbols so other files can import this logic. |
| 8 | `  name: string;` | CSS declaration assigning a style property value. |
| 9 | `  description: string;` | CSS declaration assigning a style property value. |
| 10 | `}` | Closes the current code/style block scope. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `export interface AdminRoleItem {` | Exports symbols so other files can import this logic. |
| 13 | `  id: string;` | CSS declaration assigning a style property value. |
| 14 | `  name: string;` | CSS declaration assigning a style property value. |
| 15 | `  description?: string;` | CSS declaration assigning a style property value. |
| 16 | `  userCount?: number;` | CSS declaration assigning a style property value. |
| 17 | `  createdAt?: string;` | CSS declaration assigning a style property value. |
| 18 | `  updatedAt?: string;` | CSS declaration assigning a style property value. |
| 19 | `}` | Closes the current code/style block scope. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `export interface AdminRoleListResult {` | Exports symbols so other files can import this logic. |
| 22 | `  items: AdminRoleItem[];` | CSS declaration assigning a style property value. |
| 23 | `  page: number;` | CSS declaration assigning a style property value. |
| 24 | `  limit: number;` | CSS declaration assigning a style property value. |
| 25 | `  total: number;` | CSS declaration assigning a style property value. |
| 26 | `  totalPages: number;` | CSS declaration assigning a style property value. |
| 27 | `  hasNext: boolean;` | CSS declaration assigning a style property value. |
| 28 | `  hasPrev: boolean;` | CSS declaration assigning a style property value. |
| 29 | `}` | Closes the current code/style block scope. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 32 | `export class AdminRoleService {` | Exports symbols so other files can import this logic. |
| 33 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 34 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 35 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 36 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 39 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 40 | `  }` | Closes the current code/style block scope. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 43 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 44 | `  }` | Closes the current code/style block scope. |
| 45 | `` | Blank line used to separate logical blocks for readability. |
| 46 | `  private normalizeListResponse(response: any): AdminRoleListResult {` | Begins a new code/style block scope. |
| 47 | `    const payload = this.unwrapData<any>(response) ?? {};` | Core implementation line contributing to the file behavior. |
| 48 | `    const items = Array.isArray(payload?.items) ? payload.items : [];` | CSS declaration assigning a style property value. |
| 49 | `    const pagination = payload?.pagination ?? {};` | Core implementation line contributing to the file behavior. |
| 50 | `    const page = Number(pagination?.page ?? 1);` | Core implementation line contributing to the file behavior. |
| 51 | `    const totalPages = Number(pagination?.totalPages ?? 1);` | Core implementation line contributing to the file behavior. |
| 52 | `    const total = Number(pagination?.total ?? items.length ?? 0);` | Core implementation line contributing to the file behavior. |
| 53 | `    const limit = Number(pagination?.limit ?? 10);` | Core implementation line contributing to the file behavior. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `    return {` | Returns a value from the current function/method. |
| 56 | `      items,` | Core implementation line contributing to the file behavior. |
| 57 | `      page,` | Core implementation line contributing to the file behavior. |
| 58 | `      limit,` | Core implementation line contributing to the file behavior. |
| 59 | `      total,` | Core implementation line contributing to the file behavior. |
| 60 | `      totalPages,` | Core implementation line contributing to the file behavior. |
| 61 | `      hasNext: page < totalPages,` | Core implementation line contributing to the file behavior. |
| 62 | `      hasPrev: page > 1,` | Core implementation line contributing to the file behavior. |
| 63 | `    };` | Core implementation line contributing to the file behavior. |
| 64 | `  }` | Closes the current code/style block scope. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `  listRoles(page = 1, limit = 10, search = '') {` | Begins a new code/style block scope. |
| 67 | `    const searchParam = search.trim() ? \`&search=${encodeURIComponent(search.trim())}\` : '';` | CSS declaration assigning a style property value. |
| 68 | `    return this.http` | Returns a value from the current function/method. |
| 69 | `      .get<any>(\`${BASE_URL}/roles?page=${page}&limit=${limit}${searchParam}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 70 | `      .pipe(map((res) => this.normalizeListResponse(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 71 | `  }` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `  searchRoles(query: string, page = 1, limit = 10) {` | Begins a new code/style block scope. |
| 74 | `    const search = encodeURIComponent(query.trim());` | Core implementation line contributing to the file behavior. |
| 75 | `    return this.http` | Returns a value from the current function/method. |
| 76 | `      .get<any>(` | Core implementation line contributing to the file behavior. |
| 77 | `        \`${BASE_URL}/roles/search?page=${page}&limit=${limit}&search=${search}\`,` | Core implementation line contributing to the file behavior. |
| 78 | `        { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 79 | `      )` | Core implementation line contributing to the file behavior. |
| 80 | `      .pipe(map((res) => this.normalizeListResponse(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 81 | `  }` | Closes the current code/style block scope. |
| 82 | `` | Blank line used to separate logical blocks for readability. |
| 83 | `  createRole(payload: AdminRolePayload) {` | Begins a new code/style block scope. |
| 84 | `    return this.http` | Returns a value from the current function/method. |
| 85 | `      .post<any>(\`${BASE_URL}/roles\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 86 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 87 | `  }` | Closes the current code/style block scope. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `  updateRole(id: string, payload: AdminRolePayload) {` | Begins a new code/style block scope. |
| 90 | `    return this.http` | Returns a value from the current function/method. |
| 91 | `      .patch<any>(\`${BASE_URL}/roles/${id}\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 92 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 93 | `  }` | Closes the current code/style block scope. |
| 94 | `` | Blank line used to separate logical blocks for readability. |
| 95 | `  deleteRole(id: string) {` | Begins a new code/style block scope. |
| 96 | `    return this.http` | Returns a value from the current function/method. |
| 97 | `      .delete<any>(\`${BASE_URL}/roles/${id}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 98 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 99 | `  }` | Closes the current code/style block scope. |
| 100 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.