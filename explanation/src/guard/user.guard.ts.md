# Explanation: `src/guard/user.guard.ts`

## File Overview
- **Relative path:** `src/guard/user.guard.ts`
- **Total lines:** `47`
- **Non-empty lines:** `16`
- **Import statements:** `3`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `2`

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
| 8 | `  ` | Blank line used to separate logical blocks for readability. |
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
| 28 | `import { CanMatchFn, Router } from '@angular/router';` | Imports a dependency so this file can use external symbols. |
| 29 | `import { StorageService } from '../app/auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 30 | `import { inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `export const userGuard: CanMatchFn = (route, segments) => {` | Exports symbols so other files can import this logic. |
| 33 | `  const storage = inject(StorageService);` | Core implementation line contributing to the file behavior. |
| 34 | `  const router  = inject(Router);` | Core implementation line contributing to the file behavior. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `  if (!storage.hasToken()) {` | Conditional branch: executes block only when condition is true. |
| 37 | `    router.navigateByUrl('/login');` | Core implementation line contributing to the file behavior. |
| 38 | `    return false;` | Returns a value from the current function/method. |
| 39 | `  }` | Closes the current code/style block scope. |
| 40 | `` | Blank line used to separate logical blocks for readability. |
| 41 | `  if (storage.isUserLoggedIn()) {   ` | Conditional branch: executes block only when condition is true. |
| 42 | `    return true;` | Returns a value from the current function/method. |
| 43 | `  }` | Closes the current code/style block scope. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `  router.navigateByUrl('/home');` | Core implementation line contributing to the file behavior. |
| 46 | `  return false;` | Returns a value from the current function/method. |
| 47 | `};` | Core implementation line contributing to the file behavior. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.