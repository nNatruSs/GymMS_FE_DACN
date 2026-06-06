# Explanation: `src/app/auth/services/storage/storage.service.ts`

## File Overview
- **Relative path:** `src/app/auth/services/storage/storage.service.ts`
- **Total lines:** `203`
- **Non-empty lines:** `87`
- **Import statements:** `3`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `1`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `` | Blank line used to separate logical blocks for readability. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
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
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `` | Blank line used to separate logical blocks for readability. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `` | Blank line used to separate logical blocks for readability. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `` | Blank line used to separate logical blocks for readability. |
| 63 | `` | Blank line used to separate logical blocks for readability. |
| 64 | `` | Blank line used to separate logical blocks for readability. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `` | Blank line used to separate logical blocks for readability. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `` | Blank line used to separate logical blocks for readability. |
| 70 | `` | Blank line used to separate logical blocks for readability. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `` | Blank line used to separate logical blocks for readability. |
| 74 | `` | Blank line used to separate logical blocks for readability. |
| 75 | `` | Blank line used to separate logical blocks for readability. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `` | Blank line used to separate logical blocks for readability. |
| 80 | `` | Blank line used to separate logical blocks for readability. |
| 81 | `` | Blank line used to separate logical blocks for readability. |
| 82 | `` | Blank line used to separate logical blocks for readability. |
| 83 | `import { Inject, Injectable, PLATFORM_ID } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 84 | `import { isPlatformBrowser } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 85 | `import { BehaviorSubject } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `const TOKEN = 'token';` | Core implementation line contributing to the file behavior. |
| 88 | `const REFRESH_TOKEN = 'refreshToken';` | Core implementation line contributing to the file behavior. |
| 89 | `const USER = 'user';` | Core implementation line contributing to the file behavior. |
| 90 | `` | Blank line used to separate logical blocks for readability. |
| 91 | `@Injectable({` | Angular decorator declaring this class as an injectable service. |
| 92 | `  providedIn: 'root'` | Core implementation line contributing to the file behavior. |
| 93 | `})` | Core implementation line contributing to the file behavior. |
| 94 | `export class StorageService {` | Exports symbols so other files can import this logic. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `  loggedInSubject$ = new BehaviorSubject<boolean>(false);` | Core implementation line contributing to the file behavior. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}` | Class constructor for dependency injection and initial setup. |
| 99 | `` | Blank line used to separate logical blocks for readability. |
| 100 | `  private isBrowser(): boolean {` | Begins a new code/style block scope. |
| 101 | `    return isPlatformBrowser(this.platformId);` | Returns a value from the current function/method. |
| 102 | `  }` | Closes the current code/style block scope. |
| 103 | `` | Blank line used to separate logical blocks for readability. |
| 104 | `  ` | Blank line used to separate logical blocks for readability. |
| 105 | `` | Blank line used to separate logical blocks for readability. |
| 106 | `  saveToken(token: string): void {` | Begins a new code/style block scope. |
| 107 | `    if (!this.isBrowser()) return;` | Conditional branch: executes block only when condition is true. |
| 108 | `    localStorage.setItem(TOKEN, token);` | Core implementation line contributing to the file behavior. |
| 109 | `    this.loggedInSubject$.next(true);` | Core implementation line contributing to the file behavior. |
| 110 | `  }` | Closes the current code/style block scope. |
| 111 | `` | Blank line used to separate logical blocks for readability. |
| 112 | `  saveRefreshToken(token: string): void {` | Begins a new code/style block scope. |
| 113 | `    if (!this.isBrowser()) return;` | Conditional branch: executes block only when condition is true. |
| 114 | `    localStorage.setItem(REFRESH_TOKEN, token);` | Core implementation line contributing to the file behavior. |
| 115 | `  }` | Closes the current code/style block scope. |
| 116 | `` | Blank line used to separate logical blocks for readability. |
| 117 | `  getToken(): string \| null {` | Begins a new code/style block scope. |
| 118 | `    if (!this.isBrowser()) return null;` | Conditional branch: executes block only when condition is true. |
| 119 | `    return localStorage.getItem(TOKEN);` | Returns a value from the current function/method. |
| 120 | `  }` | Closes the current code/style block scope. |
| 121 | `` | Blank line used to separate logical blocks for readability. |
| 122 | `  getRefreshToken(): string \| null {` | Begins a new code/style block scope. |
| 123 | `    if (!this.isBrowser()) return null;` | Conditional branch: executes block only when condition is true. |
| 124 | `    return localStorage.getItem(REFRESH_TOKEN);` | Returns a value from the current function/method. |
| 125 | `  }` | Closes the current code/style block scope. |
| 126 | `` | Blank line used to separate logical blocks for readability. |
| 127 | `  ` | Blank line used to separate logical blocks for readability. |
| 128 | `` | Blank line used to separate logical blocks for readability. |
| 129 | `  ` | Blank line used to separate logical blocks for readability. |
| 130 | `  saveUser(user: any): void {` | Begins a new code/style block scope. |
| 131 | `    if (!this.isBrowser()) return;` | Conditional branch: executes block only when condition is true. |
| 132 | `    localStorage.setItem(USER, JSON.stringify(user));` | Core implementation line contributing to the file behavior. |
| 133 | `  }` | Closes the current code/style block scope. |
| 134 | `` | Blank line used to separate logical blocks for readability. |
| 135 | `  getUser(): any {` | Begins a new code/style block scope. |
| 136 | `    if (!this.isBrowser()) return null;` | Conditional branch: executes block only when condition is true. |
| 137 | `    const user = localStorage.getItem(USER);` | Core implementation line contributing to the file behavior. |
| 138 | `    return user ? JSON.parse(user) : null;` | Returns a value from the current function/method. |
| 139 | `  }` | Closes the current code/style block scope. |
| 140 | `` | Blank line used to separate logical blocks for readability. |
| 141 | `  getUserId(): string {` | Begins a new code/style block scope. |
| 142 | `    return this.getUser()?.id ?? '';` | Returns a value from the current function/method. |
| 143 | `  }` | Closes the current code/style block scope. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `  getUserName(): string {` | Begins a new code/style block scope. |
| 146 | `    const user = this.getUser();` | Core implementation line contributing to the file behavior. |
| 147 | `    if (!user) return '';` | Conditional branch: executes block only when condition is true. |
| 148 | `    if (user.firstName && user.lastName) return \`${user.firstName} ${user.lastName}\`.trim();` | Conditional branch: executes block only when condition is true. |
| 149 | `    if (user.name) return user.name;` | Conditional branch: executes block only when condition is true. |
| 150 | `    return user.email ?? '';` | Returns a value from the current function/method. |
| 151 | `  }` | Closes the current code/style block scope. |
| 152 | `` | Blank line used to separate logical blocks for readability. |
| 153 | `  getUserEmail(): string {` | Begins a new code/style block scope. |
| 154 | `    return this.getUser()?.email ?? '';` | Returns a value from the current function/method. |
| 155 | `  }` | Closes the current code/style block scope. |
| 156 | `` | Blank line used to separate logical blocks for readability. |
| 157 | `  ` | Blank line used to separate logical blocks for readability. |
| 158 | `  getUserRoles(): string[] {` | Begins a new code/style block scope. |
| 159 | `    const user = this.getUser();` | Core implementation line contributing to the file behavior. |
| 160 | `    if (!user) return [];` | Conditional branch: executes block only when condition is true. |
| 161 | `    ` | Blank line used to separate logical blocks for readability. |
| 162 | `    if (Array.isArray(user.roles)) return user.roles;` | Conditional branch: executes block only when condition is true. |
| 163 | `    if (user.role) return [user.role];` | Conditional branch: executes block only when condition is true. |
| 164 | `    return [];` | Returns a value from the current function/method. |
| 165 | `  }` | Closes the current code/style block scope. |
| 166 | `` | Blank line used to separate logical blocks for readability. |
| 167 | `  hasRole(role: string): boolean {` | Begins a new code/style block scope. |
| 168 | `    return this.getUserRoles().includes(role);` | Returns a value from the current function/method. |
| 169 | `  }` | Closes the current code/style block scope. |
| 170 | `` | Blank line used to separate logical blocks for readability. |
| 171 | `  ` | Blank line used to separate logical blocks for readability. |
| 172 | `` | Blank line used to separate logical blocks for readability. |
| 173 | `  hasToken(): boolean {` | Begins a new code/style block scope. |
| 174 | `    return !!this.getToken();` | Returns a value from the current function/method. |
| 175 | `  }` | Closes the current code/style block scope. |
| 176 | `` | Blank line used to separate logical blocks for readability. |
| 177 | `  isAdminLoggedIn(): boolean {` | Begins a new code/style block scope. |
| 178 | `    return this.hasToken() && this.hasRole('ADMIN');` | Returns a value from the current function/method. |
| 179 | `  }` | Closes the current code/style block scope. |
| 180 | `` | Blank line used to separate logical blocks for readability. |
| 181 | `  ` | Blank line used to separate logical blocks for readability. |
| 182 | `  isUserLoggedIn(): boolean {` | Begins a new code/style block scope. |
| 183 | `    return this.hasToken() && this.hasRole('MEMBER');` | Returns a value from the current function/method. |
| 184 | `  }` | Closes the current code/style block scope. |
| 185 | `` | Blank line used to separate logical blocks for readability. |
| 186 | `  isTrainerLoggedIn(): boolean {` | Begins a new code/style block scope. |
| 187 | `    return this.hasToken() && this.hasRole('TRAINER');` | Returns a value from the current function/method. |
| 188 | `  }` | Closes the current code/style block scope. |
| 189 | `` | Blank line used to separate logical blocks for readability. |
| 190 | `  isStaffLoggedIn(): boolean {` | Begins a new code/style block scope. |
| 191 | `    return this.hasToken() && this.hasRole('STAFF');` | Returns a value from the current function/method. |
| 192 | `  }` | Closes the current code/style block scope. |
| 193 | `` | Blank line used to separate logical blocks for readability. |
| 194 | `  ` | Blank line used to separate logical blocks for readability. |
| 195 | `` | Blank line used to separate logical blocks for readability. |
| 196 | `  signOut(): void {` | Begins a new code/style block scope. |
| 197 | `    if (!this.isBrowser()) return;` | Conditional branch: executes block only when condition is true. |
| 198 | `    localStorage.removeItem(TOKEN);` | Core implementation line contributing to the file behavior. |
| 199 | `    localStorage.removeItem(REFRESH_TOKEN);` | Core implementation line contributing to the file behavior. |
| 200 | `    localStorage.removeItem(USER);` | Core implementation line contributing to the file behavior. |
| 201 | `    this.loggedInSubject$.next(false);` | Core implementation line contributing to the file behavior. |
| 202 | `  }` | Closes the current code/style block scope. |
| 203 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.