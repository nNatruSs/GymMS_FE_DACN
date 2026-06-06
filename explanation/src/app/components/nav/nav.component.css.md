# Explanation: `src/app/components/nav/nav.component.css`

## File Overview
- **Relative path:** `src/app/components/nav/nav.component.css`
- **Total lines:** `79`
- **Non-empty lines:** `69`
- **Import statements:** `0`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `.navbar {` | Begins a new code/style block scope. |
| 2 | `  position: sticky;` | CSS declaration assigning a style property value. |
| 3 | `  top: 0;` | CSS declaration assigning a style property value. |
| 4 | `  z-index: 100;` | CSS declaration assigning a style property value. |
| 5 | `  background: white;` | CSS declaration assigning a style property value. |
| 6 | `  display: flex;` | CSS declaration assigning a style property value. |
| 7 | `  justify-content: space-between;` | CSS declaration assigning a style property value. |
| 8 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 9 | `  padding: 16px 32px;` | CSS declaration assigning a style property value. |
| 10 | `  border-bottom: 1px solid #e5e7eb;` | CSS declaration assigning a style property value. |
| 11 | `}` | Closes the current code/style block scope. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `.logo {` | Begins a new code/style block scope. |
| 14 | `  font-weight: 700;` | CSS declaration assigning a style property value. |
| 15 | `  font-size: 1.25rem;` | CSS declaration assigning a style property value. |
| 16 | `}` | Closes the current code/style block scope. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `.nav-links {` | Begins a new code/style block scope. |
| 19 | `  list-style: none;` | CSS declaration assigning a style property value. |
| 20 | `  display: flex;` | CSS declaration assigning a style property value. |
| 21 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 22 | `  gap: 24px;` | CSS declaration assigning a style property value. |
| 23 | `}` | Closes the current code/style block scope. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `.nav-links li {` | Begins a new code/style block scope. |
| 26 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 27 | `  font-weight: 500;` | CSS declaration assigning a style property value. |
| 28 | `  color: #374151;` | CSS declaration assigning a style property value. |
| 29 | `}` | Closes the current code/style block scope. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `.nav-links li:hover {` | Begins a new code/style block scope. |
| 32 | `  color: #4f46e5;` | CSS declaration assigning a style property value. |
| 33 | `}` | Closes the current code/style block scope. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `.notification-dropdown {` | Begins a new code/style block scope. |
| 36 | `  position: absolute;` | CSS declaration assigning a style property value. |
| 37 | `  right: 0;` | CSS declaration assigning a style property value. |
| 38 | `  top: 110%;` | CSS declaration assigning a style property value. |
| 39 | `  width: 320px;` | CSS declaration assigning a style property value. |
| 40 | `  max-height: 360px;` | CSS declaration assigning a style property value. |
| 41 | `  overflow-y: auto;` | CSS declaration assigning a style property value. |
| 42 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 43 | `  border: 1px solid #e5e7eb;` | CSS declaration assigning a style property value. |
| 44 | `  border-radius: 10px;` | CSS declaration assigning a style property value. |
| 45 | `  padding: 10px;` | CSS declaration assigning a style property value. |
| 46 | `  z-index: 1100;` | CSS declaration assigning a style property value. |
| 47 | `}` | Closes the current code/style block scope. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `.notification-item:last-child {` | Begins a new code/style block scope. |
| 50 | `  border-bottom: 0 !important;` | CSS declaration assigning a style property value. |
| 51 | `}` | Closes the current code/style block scope. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `.notification-item {` | Begins a new code/style block scope. |
| 54 | `  color: inherit;` | CSS declaration assigning a style property value. |
| 55 | `}` | Closes the current code/style block scope. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `.tiny {` | Begins a new code/style block scope. |
| 58 | `  font-size: 0.75rem;` | CSS declaration assigning a style property value. |
| 59 | `}` | Closes the current code/style block scope. |
| 60 | `` | Blank line used to separate logical blocks for readability. |
| 61 | `.booking-request-modal-overlay {` | Begins a new code/style block scope. |
| 62 | `  position: fixed;` | CSS declaration assigning a style property value. |
| 63 | `  inset: 0;` | CSS declaration assigning a style property value. |
| 64 | `  z-index: 1600;` | CSS declaration assigning a style property value. |
| 65 | `  background: rgba(0, 0, 0, 0.45);` | CSS declaration assigning a style property value. |
| 66 | `  display: flex;` | CSS declaration assigning a style property value. |
| 67 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 68 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 69 | `  padding: 1rem;` | CSS declaration assigning a style property value. |
| 70 | `}` | Closes the current code/style block scope. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `.booking-request-modal-card {` | Begins a new code/style block scope. |
| 73 | `  width: min(680px, 94vw);` | CSS declaration assigning a style property value. |
| 74 | `  max-height: 90vh;` | CSS declaration assigning a style property value. |
| 75 | `  overflow: auto;` | CSS declaration assigning a style property value. |
| 76 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 77 | `  border-radius: 12px;` | CSS declaration assigning a style property value. |
| 78 | `  padding: 1rem 1.1rem;` | CSS declaration assigning a style property value. |
| 79 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.