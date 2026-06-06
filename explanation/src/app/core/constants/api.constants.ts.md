# Explanation: `src/app/core/constants/api.constants.ts`

## File Overview
- **Relative path:** `src/app/core/constants/api.constants.ts`
- **Total lines:** `10`
- **Non-empty lines:** `10`
- **Import statements:** `0`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `/**` | Block comment content (documentation for nearby code). |
| 2 | ` * Change this single value when switching backend host.` | Block comment content (documentation for nearby code). |
| 3 | ` * https://k16fc7gv-3501.asse.devtunnels.ms` | Block comment content (documentation for nearby code). |
| 4 | ` */` | Block comment content (documentation for nearby code). |
| 5 | `export const API_HOST_URL = 'https://gms-backend-lc61.onrender.com';` | Exports symbols so other files can import this logic. |
| 6 | `// https://gms-backend-lc61.onrender.com` | Single-line comment documenting intent or behavior. |
| 7 | `/**` | Block comment content (documentation for nearby code). |
| 8 | ` * Shared API v1 base URL used across services.` | Block comment content (documentation for nearby code). |
| 9 | ` */` | Block comment content (documentation for nearby code). |
| 10 | `export const API_BASE_URL = \`${API_HOST_URL.replace(/\/+$/, '')}/api/v1\`;` | Exports symbols so other files can import this logic. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.