# Explanation: `src/app/modules/admin/services/admin-user.service.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/services/admin-user.service.ts`
- **Total lines:** `207`
- **Non-empty lines:** `184`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `13`

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
| 7 | `export interface AdminUserPayload {` | Exports symbols so other files can import this logic. |
| 8 | `  firstName: string;` | CSS declaration assigning a style property value. |
| 9 | `  lastName: string;` | CSS declaration assigning a style property value. |
| 10 | `  email: string;` | CSS declaration assigning a style property value. |
| 11 | `  phone: string;` | CSS declaration assigning a style property value. |
| 12 | `  gender: string;` | CSS declaration assigning a style property value. |
| 13 | `  dob: string;` | CSS declaration assigning a style property value. |
| 14 | `  address?: string;` | CSS declaration assigning a style property value. |
| 15 | `  role?: string;` | CSS declaration assigning a style property value. |
| 16 | `  status?: string;` | CSS declaration assigning a style property value. |
| 17 | `  password?: string;` | CSS declaration assigning a style property value. |
| 18 | `}` | Closes the current code/style block scope. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `export interface AdminTrainerPayload extends AdminUserPayload {` | Exports symbols so other files can import this logic. |
| 21 | `  ptSessionPrice30?: number;` | CSS declaration assigning a style property value. |
| 22 | `  ptSessionPrice60: number;` | CSS declaration assigning a style property value. |
| 23 | `  ptSessionPrice90?: number;` | CSS declaration assigning a style property value. |
| 24 | `  specialization?: string;` | CSS declaration assigning a style property value. |
| 25 | `  experienceYears?: number;` | CSS declaration assigning a style property value. |
| 26 | `  biography?: string;` | CSS declaration assigning a style property value. |
| 27 | `  certifications?: string[];` | CSS declaration assigning a style property value. |
| 28 | `  areasOfExpertise?: string[];` | CSS declaration assigning a style property value. |
| 29 | `}` | Closes the current code/style block scope. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `export interface AdminUserRole {` | Exports symbols so other files can import this logic. |
| 32 | `  id: string;` | CSS declaration assigning a style property value. |
| 33 | `  name: string;` | CSS declaration assigning a style property value. |
| 34 | `  description?: string;` | CSS declaration assigning a style property value. |
| 35 | `}` | Closes the current code/style block scope. |
| 36 | `` | Blank line used to separate logical blocks for readability. |
| 37 | `export interface AdminUserListItem {` | Exports symbols so other files can import this logic. |
| 38 | `  id: string;` | CSS declaration assigning a style property value. |
| 39 | `  firstName: string;` | CSS declaration assigning a style property value. |
| 40 | `  lastName: string;` | CSS declaration assigning a style property value. |
| 41 | `  email: string;` | CSS declaration assigning a style property value. |
| 42 | `  phone?: string;` | CSS declaration assigning a style property value. |
| 43 | `  gender?: string;` | CSS declaration assigning a style property value. |
| 44 | `  dob?: string;` | CSS declaration assigning a style property value. |
| 45 | `  address?: string \| null;` | CSS declaration assigning a style property value. |
| 46 | `  status?: string;` | CSS declaration assigning a style property value. |
| 47 | `  createdAt?: string;` | CSS declaration assigning a style property value. |
| 48 | `  avatarUrl?: string \| null;` | CSS declaration assigning a style property value. |
| 49 | `  ptSessionPrice30?: number;` | CSS declaration assigning a style property value. |
| 50 | `  ptSessionPrice60?: number;` | CSS declaration assigning a style property value. |
| 51 | `  ptSessionPrice90?: number;` | CSS declaration assigning a style property value. |
| 52 | `  trainerSpecialization?: string \| null;` | CSS declaration assigning a style property value. |
| 53 | `  trainerExperienceYears?: number \| null;` | CSS declaration assigning a style property value. |
| 54 | `  trainerBiography?: string \| null;` | CSS declaration assigning a style property value. |
| 55 | `  trainerCertifications?: string[];` | CSS declaration assigning a style property value. |
| 56 | `  trainerAreasOfExpertise?: string[];` | CSS declaration assigning a style property value. |
| 57 | `  roles?: AdminUserRole[];` | CSS declaration assigning a style property value. |
| 58 | `  memberships?: { id: string; name: string; description?: string }[];` | CSS declaration assigning a style property value. |
| 59 | `}` | Closes the current code/style block scope. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `export interface AdminUserListResult {` | Exports symbols so other files can import this logic. |
| 62 | `  docs: AdminUserListItem[];` | CSS declaration assigning a style property value. |
| 63 | `  totalDocs: number;` | CSS declaration assigning a style property value. |
| 64 | `  totalPages: number;` | CSS declaration assigning a style property value. |
| 65 | `  currentPage: number;` | CSS declaration assigning a style property value. |
| 66 | `  hasNext: boolean;` | CSS declaration assigning a style property value. |
| 67 | `  hasPrev: boolean;` | CSS declaration assigning a style property value. |
| 68 | `  nextPage: number \| null;` | CSS declaration assigning a style property value. |
| 69 | `  previousPage: number \| null;` | CSS declaration assigning a style property value. |
| 70 | `  limit: number;` | CSS declaration assigning a style property value. |
| 71 | `}` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `export interface AdminRoleItem {` | Exports symbols so other files can import this logic. |
| 74 | `  id: string;` | CSS declaration assigning a style property value. |
| 75 | `  name: string;` | CSS declaration assigning a style property value. |
| 76 | `  description?: string;` | CSS declaration assigning a style property value. |
| 77 | `  userCount?: number;` | CSS declaration assigning a style property value. |
| 78 | `}` | Closes the current code/style block scope. |
| 79 | `` | Blank line used to separate logical blocks for readability. |
| 80 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 81 | `export class AdminUserService {` | Exports symbols so other files can import this logic. |
| 82 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 83 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 84 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 85 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 88 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 89 | `  }` | Closes the current code/style block scope. |
| 90 | `` | Blank line used to separate logical blocks for readability. |
| 91 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 92 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 93 | `  }` | Closes the current code/style block scope. |
| 94 | `` | Blank line used to separate logical blocks for readability. |
| 95 | `  private normalizeListResponse(response: any): AdminUserListResult {` | Begins a new code/style block scope. |
| 96 | `    const payload = this.unwrapData<any>(response) ?? {};` | Core implementation line contributing to the file behavior. |
| 97 | `    const docs = Array.isArray(payload?.docs) ? payload.docs : [];` | CSS declaration assigning a style property value. |
| 98 | `    return {` | Returns a value from the current function/method. |
| 99 | `      docs,` | Core implementation line contributing to the file behavior. |
| 100 | `      totalDocs: Number(payload?.totalDocs ?? docs.length ?? 0),` | Core implementation line contributing to the file behavior. |
| 101 | `      totalPages: Number(payload?.totalPages ?? 1),` | Core implementation line contributing to the file behavior. |
| 102 | `      currentPage: Number(payload?.currentPage ?? 1),` | Core implementation line contributing to the file behavior. |
| 103 | `      hasNext: Boolean(payload?.hasNext),` | Core implementation line contributing to the file behavior. |
| 104 | `      hasPrev: Boolean(payload?.hasPrev),` | Core implementation line contributing to the file behavior. |
| 105 | `      nextPage: payload?.nextPage ?? null,` | Core implementation line contributing to the file behavior. |
| 106 | `      previousPage: payload?.previousPage ?? null,` | Core implementation line contributing to the file behavior. |
| 107 | `      limit: Number(payload?.limit ?? 10),` | Core implementation line contributing to the file behavior. |
| 108 | `    };` | Core implementation line contributing to the file behavior. |
| 109 | `  }` | Closes the current code/style block scope. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `  private normalizeRoleItems(response: any): AdminRoleItem[] {` | Begins a new code/style block scope. |
| 112 | `    const payload = this.unwrapData<any>(response) ?? {};` | Core implementation line contributing to the file behavior. |
| 113 | `    const items = Array.isArray(payload?.items) ? payload.items : Array.isArray(payload) ? payload : [];` | CSS declaration assigning a style property value. |
| 114 | `    return items as AdminRoleItem[];` | Returns a value from the current function/method. |
| 115 | `  }` | Closes the current code/style block scope. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `  listUsers(page = 1, limit = 10) {` | Begins a new code/style block scope. |
| 118 | `    return this.http` | Returns a value from the current function/method. |
| 119 | `      .get<any>(\`${BASE_URL}/user/list?page=${page}&limit=${limit}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 120 | `      .pipe(map((res) => this.normalizeListResponse(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 121 | `  }` | Closes the current code/style block scope. |
| 122 | `` | Blank line used to separate logical blocks for readability. |
| 123 | `  getUserById(id: string) {` | Begins a new code/style block scope. |
| 124 | `    return this.http` | Returns a value from the current function/method. |
| 125 | `      .get<any>(\`${BASE_URL}/user/${id}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 126 | `      .pipe(map((res) => this.unwrapData<AdminUserListItem>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 127 | `  }` | Closes the current code/style block scope. |
| 128 | `` | Blank line used to separate logical blocks for readability. |
| 129 | `  createUser(payload: AdminUserPayload) {` | Begins a new code/style block scope. |
| 130 | `    return this.http` | Returns a value from the current function/method. |
| 131 | `      .post<any>(\`${BASE_URL}/user/create\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 132 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 133 | `  }` | Closes the current code/style block scope. |
| 134 | `` | Blank line used to separate logical blocks for readability. |
| 135 | `  updateUser(id: string, payload: AdminUserPayload) {` | Begins a new code/style block scope. |
| 136 | `    return this.http` | Returns a value from the current function/method. |
| 137 | `      .patch<any>(\`${BASE_URL}/user/${id}\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 138 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 139 | `  }` | Closes the current code/style block scope. |
| 140 | `` | Blank line used to separate logical blocks for readability. |
| 141 | `  createTrainer(payload: AdminTrainerPayload) {` | Begins a new code/style block scope. |
| 142 | `    return this.http` | Returns a value from the current function/method. |
| 143 | `      .post<any>(\`${BASE_URL}/trainer/create\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 144 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 145 | `  }` | Closes the current code/style block scope. |
| 146 | `` | Blank line used to separate logical blocks for readability. |
| 147 | `  updateTrainer(id: string, payload: AdminTrainerPayload) {` | Begins a new code/style block scope. |
| 148 | `    return this.http` | Returns a value from the current function/method. |
| 149 | `      .patch<any>(\`${BASE_URL}/trainer/${id}\`, payload, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 150 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 151 | `  }` | Closes the current code/style block scope. |
| 152 | `` | Blank line used to separate logical blocks for readability. |
| 153 | `  deleteUser(id: string) {` | Begins a new code/style block scope. |
| 154 | `    return this.http` | Returns a value from the current function/method. |
| 155 | `      .delete<any>(\`${BASE_URL}/user/${id}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 156 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 157 | `  }` | Closes the current code/style block scope. |
| 158 | `` | Blank line used to separate logical blocks for readability. |
| 159 | `  assignRoles(userId: string, roleIds: string[]) {` | Begins a new code/style block scope. |
| 160 | `    return this.http` | Returns a value from the current function/method. |
| 161 | `      .post<any>(\`${BASE_URL}/user/${userId}/roles\`, { roleIds }, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 162 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 163 | `  }` | Closes the current code/style block scope. |
| 164 | `` | Blank line used to separate logical blocks for readability. |
| 165 | `  removeRole(userId: string, roleId: string) {` | Begins a new code/style block scope. |
| 166 | `    return this.http` | Returns a value from the current function/method. |
| 167 | `      .delete<any>(\`${BASE_URL}/user/${userId}/roles/${roleId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 168 | `      .pipe(map((res) => this.unwrapData<any>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 169 | `  }` | Closes the current code/style block scope. |
| 170 | `` | Blank line used to separate logical blocks for readability. |
| 171 | `  getUsersByRole(roleId: string) {` | Begins a new code/style block scope. |
| 172 | `    return this.http` | Returns a value from the current function/method. |
| 173 | `      .get<any>(\`${BASE_URL}/user/by-role/${roleId}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 174 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 175 | `        map((res) => {` | Arrow function definition, often used for callbacks. |
| 176 | `          const payload = this.unwrapData<any>(res);` | Core implementation line contributing to the file behavior. |
| 177 | `          if (Array.isArray(payload)) return payload as AdminUserListItem[];` | Conditional branch: executes block only when condition is true. |
| 178 | `          if (Array.isArray(payload?.docs)) return payload.docs as AdminUserListItem[];` | Conditional branch: executes block only when condition is true. |
| 179 | `          if (Array.isArray(payload?.users)) {` | Conditional branch: executes block only when condition is true. |
| 180 | `            const role = payload?.role;` | Core implementation line contributing to the file behavior. |
| 181 | `            return payload.users.map((user: any) => {` | Returns a value from the current function/method. |
| 182 | `              const fullName = String(user?.name ?? '').trim();` | Core implementation line contributing to the file behavior. |
| 183 | `              const [firstName, ...lastParts] = fullName.split(' ');` | Core implementation line contributing to the file behavior. |
| 184 | `              return {` | Returns a value from the current function/method. |
| 185 | `                id: user?.id,` | Core implementation line contributing to the file behavior. |
| 186 | `                firstName: firstName \|\| fullName \|\| 'Unknown',` | Core implementation line contributing to the file behavior. |
| 187 | `                lastName: lastParts.join(' '),` | Core implementation line contributing to the file behavior. |
| 188 | `                email: user?.email ?? '',` | Core implementation line contributing to the file behavior. |
| 189 | `                phone: user?.phoneNumber ?? '',` | Core implementation line contributing to the file behavior. |
| 190 | `                status: 'active',` | Core implementation line contributing to the file behavior. |
| 191 | `                roles: role ? [{ id: role.id, name: role.name, description: role.description }] : [],` | Core implementation line contributing to the file behavior. |
| 192 | `              } as AdminUserListItem;` | Core implementation line contributing to the file behavior. |
| 193 | `            });` | Core implementation line contributing to the file behavior. |
| 194 | `          }` | Closes the current code/style block scope. |
| 195 | `          return [];` | Returns a value from the current function/method. |
| 196 | `        })` | Core implementation line contributing to the file behavior. |
| 197 | `      );` | Closes a function/method call statement. |
| 198 | `  }` | Closes the current code/style block scope. |
| 199 | `` | Blank line used to separate logical blocks for readability. |
| 200 | `  getRoles(page = 1, limit = 50, search = '') {` | Begins a new code/style block scope. |
| 201 | `    const searchParam = search.trim() ? \`&search=${encodeURIComponent(search.trim())}\` : '';` | CSS declaration assigning a style property value. |
| 202 | `    return this.http` | Returns a value from the current function/method. |
| 203 | `      .get<any>(\`${BASE_URL}/roles?page=${page}&limit=${limit}${searchParam}\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 204 | `      .pipe(map((res) => this.normalizeRoleItems(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 205 | `  }` | Closes the current code/style block scope. |
| 206 | `` | Blank line used to separate logical blocks for readability. |
| 207 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.