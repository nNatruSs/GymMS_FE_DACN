# Explanation: `src/styles.css`

## File Overview
- **Relative path:** `src/styles.css`
- **Total lines:** `126`
- **Non-empty lines:** `106`
- **Import statements:** `0`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `:root {` | Begins a new code/style block scope. |
| 3 | `  --app-bg: #f6f7f9;` | CSS declaration assigning a style property value. |
| 4 | `  --surface: #ffffff;` | CSS declaration assigning a style property value. |
| 5 | `  --surface-muted: #f9fafb;` | CSS declaration assigning a style property value. |
| 6 | `  --text-primary: #1f2937;` | CSS declaration assigning a style property value. |
| 7 | `  --text-secondary: #6b7280;` | CSS declaration assigning a style property value. |
| 8 | `  --border: #e5e7eb;` | CSS declaration assigning a style property value. |
| 9 | `  --primary: #334155;` | CSS declaration assigning a style property value. |
| 10 | `  --primary-hover: #1f2937;` | CSS declaration assigning a style property value. |
| 11 | `  --success: #3f5f4f;` | CSS declaration assigning a style property value. |
| 12 | `  --danger: #7f1d1d;` | CSS declaration assigning a style property value. |
| 13 | `}` | Closes the current code/style block scope. |
| 14 | `` | Blank line used to separate logical blocks for readability. |
| 15 | `html,` | Core implementation line contributing to the file behavior. |
| 16 | `body {` | Begins a new code/style block scope. |
| 17 | `  background: var(--app-bg);` | CSS declaration assigning a style property value. |
| 18 | `  color: var(--text-primary);` | CSS declaration assigning a style property value. |
| 19 | `}` | Closes the current code/style block scope. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `body {` | Begins a new code/style block scope. |
| 22 | `  -webkit-font-smoothing: antialiased;` | CSS declaration assigning a style property value. |
| 23 | `  text-rendering: optimizeLegibility;` | CSS declaration assigning a style property value. |
| 24 | `}` | Closes the current code/style block scope. |
| 25 | `` | Blank line used to separate logical blocks for readability. |
| 26 | `.card,` | Core implementation line contributing to the file behavior. |
| 27 | `.modal-content,` | Core implementation line contributing to the file behavior. |
| 28 | `.dropdown-menu,` | Core implementation line contributing to the file behavior. |
| 29 | `.table,` | Core implementation line contributing to the file behavior. |
| 30 | `.list-group-item {` | Begins a new code/style block scope. |
| 31 | `  border-color: var(--border) !important;` | CSS declaration assigning a style property value. |
| 32 | `}` | Closes the current code/style block scope. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `.card,` | Core implementation line contributing to the file behavior. |
| 35 | `.modal-content,` | Core implementation line contributing to the file behavior. |
| 36 | `.dropdown-menu {` | Begins a new code/style block scope. |
| 37 | `  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04) !important;` | CSS declaration assigning a style property value. |
| 38 | `}` | Closes the current code/style block scope. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `.text-muted,` | Core implementation line contributing to the file behavior. |
| 41 | `small,` | Core implementation line contributing to the file behavior. |
| 42 | `.small {` | Begins a new code/style block scope. |
| 43 | `  color: var(--text-secondary) !important;` | CSS declaration assigning a style property value. |
| 44 | `}` | Closes the current code/style block scope. |
| 45 | `` | Blank line used to separate logical blocks for readability. |
| 46 | `.form-control,` | Core implementation line contributing to the file behavior. |
| 47 | `.form-select {` | Begins a new code/style block scope. |
| 48 | `  border-color: var(--border);` | CSS declaration assigning a style property value. |
| 49 | `  background-color: var(--surface);` | CSS declaration assigning a style property value. |
| 50 | `  color: var(--text-primary);` | CSS declaration assigning a style property value. |
| 51 | `  box-shadow: none !important;` | CSS declaration assigning a style property value. |
| 52 | `}` | Closes the current code/style block scope. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `.form-control:focus,` | Core implementation line contributing to the file behavior. |
| 55 | `.form-select:focus {` | Begins a new code/style block scope. |
| 56 | `  border-color: #cbd5e1;` | CSS declaration assigning a style property value. |
| 57 | `  box-shadow: 0 0 0 0.12rem rgba(100, 116, 139, 0.16) !important;` | CSS declaration assigning a style property value. |
| 58 | `}` | Closes the current code/style block scope. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `.table thead th {` | Begins a new code/style block scope. |
| 61 | `  color: #475569;` | CSS declaration assigning a style property value. |
| 62 | `  font-weight: 600;` | CSS declaration assigning a style property value. |
| 63 | `  background: var(--surface-muted);` | CSS declaration assigning a style property value. |
| 64 | `}` | Closes the current code/style block scope. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `.btn {` | Begins a new code/style block scope. |
| 67 | `  border-radius: 0.5rem;` | CSS declaration assigning a style property value. |
| 68 | `  font-weight: 500;` | CSS declaration assigning a style property value. |
| 69 | `  box-shadow: none !important;` | CSS declaration assigning a style property value. |
| 70 | `  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;` | CSS declaration assigning a style property value. |
| 71 | `}` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `.btn-primary {` | Begins a new code/style block scope. |
| 74 | `  background-color: var(--primary);` | CSS declaration assigning a style property value. |
| 75 | `  border-color: var(--primary);` | CSS declaration assigning a style property value. |
| 76 | `}` | Closes the current code/style block scope. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `.btn-primary:hover,` | Core implementation line contributing to the file behavior. |
| 79 | `.btn-primary:focus {` | Begins a new code/style block scope. |
| 80 | `  background-color: var(--primary-hover);` | CSS declaration assigning a style property value. |
| 81 | `  border-color: var(--primary-hover);` | CSS declaration assigning a style property value. |
| 82 | `}` | Closes the current code/style block scope. |
| 83 | `` | Blank line used to separate logical blocks for readability. |
| 84 | `.btn-outline-primary {` | Begins a new code/style block scope. |
| 85 | `  color: var(--primary);` | CSS declaration assigning a style property value. |
| 86 | `  border-color: #94a3b8;` | CSS declaration assigning a style property value. |
| 87 | `}` | Closes the current code/style block scope. |
| 88 | `` | Blank line used to separate logical blocks for readability. |
| 89 | `.btn-outline-primary:hover,` | Core implementation line contributing to the file behavior. |
| 90 | `.btn-outline-primary:focus {` | Begins a new code/style block scope. |
| 91 | `  color: #fff;` | CSS declaration assigning a style property value. |
| 92 | `  background-color: var(--primary);` | CSS declaration assigning a style property value. |
| 93 | `  border-color: var(--primary);` | CSS declaration assigning a style property value. |
| 94 | `}` | Closes the current code/style block scope. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `.btn-success {` | Begins a new code/style block scope. |
| 97 | `  background-color: var(--success);` | CSS declaration assigning a style property value. |
| 98 | `  border-color: var(--success);` | CSS declaration assigning a style property value. |
| 99 | `}` | Closes the current code/style block scope. |
| 100 | `` | Blank line used to separate logical blocks for readability. |
| 101 | `.btn-danger {` | Begins a new code/style block scope. |
| 102 | `  background-color: var(--danger);` | CSS declaration assigning a style property value. |
| 103 | `  border-color: var(--danger);` | CSS declaration assigning a style property value. |
| 104 | `}` | Closes the current code/style block scope. |
| 105 | `` | Blank line used to separate logical blocks for readability. |
| 106 | `` | Blank line used to separate logical blocks for readability. |
| 107 | `button:disabled,` | Core implementation line contributing to the file behavior. |
| 108 | `.btn:disabled,` | Core implementation line contributing to the file behavior. |
| 109 | `.btn.disabled,` | Core implementation line contributing to the file behavior. |
| 110 | `input:disabled,` | Core implementation line contributing to the file behavior. |
| 111 | `select:disabled,` | Core implementation line contributing to the file behavior. |
| 112 | `textarea:disabled {` | Begins a new code/style block scope. |
| 113 | `  background-color: #e5e7eb !important;` | CSS declaration assigning a style property value. |
| 114 | `  border-color: #d1d5db !important;` | CSS declaration assigning a style property value. |
| 115 | `  color: #9ca3af !important;` | CSS declaration assigning a style property value. |
| 116 | `  opacity: 1 !important;` | CSS declaration assigning a style property value. |
| 117 | `  cursor: not-allowed !important;` | CSS declaration assigning a style property value. |
| 118 | `  box-shadow: none !important;` | CSS declaration assigning a style property value. |
| 119 | `}` | Closes the current code/style block scope. |
| 120 | `` | Blank line used to separate logical blocks for readability. |
| 121 | `a.disabled,` | Core implementation line contributing to the file behavior. |
| 122 | `.nav-link.disabled {` | Begins a new code/style block scope. |
| 123 | `  color: #9ca3af !important;` | CSS declaration assigning a style property value. |
| 124 | `  pointer-events: none !important;` | CSS declaration assigning a style property value. |
| 125 | `}` | Closes the current code/style block scope. |
| 126 | `` | Blank line used to separate logical blocks for readability. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.