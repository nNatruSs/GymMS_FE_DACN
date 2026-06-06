# Explanation: `src/guard/prevent-access-if-logged-in-guard.guard.ts`

## File Overview
- **Relative path:** `src/guard/prevent-access-if-logged-in-guard.guard.ts`
- **Total lines:** `60`
- **Non-empty lines:** `21`
- **Import statements:** `3`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `3`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `  ` | Blank line used to separate logical blocks for readability. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | ` ` | Blank line used to separate logical blocks for readability. |
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
| 34 | `import { inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 35 | `import { CanActivateFn, Router } from '@angular/router';` | Imports a dependency so this file can use external symbols. |
| 36 | `import { StorageService } from '../app/auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `export const preventAccessIfLoggedInGuardGuard: CanActivateFn = (route, state) => {` | Exports symbols so other files can import this logic. |
| 39 | `  const storage = inject(StorageService);` | Core implementation line contributing to the file behavior. |
| 40 | `  const router  = inject(Router);` | Core implementation line contributing to the file behavior. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `  if (!storage.hasToken()) return true;` | Conditional branch: executes block only when condition is true. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `  if (storage.isAdminLoggedIn()) {` | Conditional branch: executes block only when condition is true. |
| 45 | `    router.navigateByUrl('/admin/dashboard/memberships');` | Core implementation line contributing to the file behavior. |
| 46 | `    return false;` | Returns a value from the current function/method. |
| 47 | `  }` | Closes the current code/style block scope. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `  if (storage.isUserLoggedIn()) {   ` | Conditional branch: executes block only when condition is true. |
| 50 | `    router.navigateByUrl('/user/dashboard/membership-management');` | Core implementation line contributing to the file behavior. |
| 51 | `    return false;` | Returns a value from the current function/method. |
| 52 | `  }` | Closes the current code/style block scope. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `  if (storage.isTrainerLoggedIn()) {` | Conditional branch: executes block only when condition is true. |
| 55 | `    router.navigateByUrl('/trainer/dashboard');` | Core implementation line contributing to the file behavior. |
| 56 | `    return false;` | Returns a value from the current function/method. |
| 57 | `  }` | Closes the current code/style block scope. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `  return true;` | Returns a value from the current function/method. |
| 60 | `};` | Core implementation line contributing to the file behavior. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.