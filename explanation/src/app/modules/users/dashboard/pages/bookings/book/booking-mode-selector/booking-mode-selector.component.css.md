# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-mode-selector/booking-mode-selector.component.css`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-mode-selector/booking-mode-selector.component.css`
- **Total lines:** `84`
- **Non-empty lines:** `70`
- **Import statements:** `0`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `.mode-grid {` | Begins a new code/style block scope. |
| 4 | `  display: grid;` | CSS declaration assigning a style property value. |
| 5 | `  grid-template-columns: 1fr 1fr;` | CSS declaration assigning a style property value. |
| 6 | `  gap: 24px;` | CSS declaration assigning a style property value. |
| 7 | `}` | Closes the current code/style block scope. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `.mode-card {` | Begins a new code/style block scope. |
| 10 | `  height: 240px;` | CSS declaration assigning a style property value. |
| 11 | `  border-radius: 18px;` | CSS declaration assigning a style property value. |
| 12 | `  position: relative;` | CSS declaration assigning a style property value. |
| 13 | `  overflow: hidden;` | CSS declaration assigning a style property value. |
| 14 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 15 | `  transition: all .35s cubic-bezier(.4,0,.2,1);` | CSS declaration assigning a style property value. |
| 16 | `}` | Closes the current code/style block scope. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `.mode-card.class {` | Declares a core TypeScript structure used by this module. |
| 19 | `  background: url('/assets/book/mode-select/class_session.jpg') center / cover;` | CSS declaration assigning a style property value. |
| 20 | `  border: 2px solid #4f46e5;` | CSS declaration assigning a style property value. |
| 21 | `}` | Closes the current code/style block scope. |
| 22 | `` | Blank line used to separate logical blocks for readability. |
| 23 | `.mode-card.trainer {` | Begins a new code/style block scope. |
| 24 | `  background: url('/assets/book/mode-select/trainer_session.jpg') center / cover;` | CSS declaration assigning a style property value. |
| 25 | `  border: 2px solid #16a34a;` | CSS declaration assigning a style property value. |
| 26 | `}` | Closes the current code/style block scope. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `.mode-card::after {` | Begins a new code/style block scope. |
| 29 | `  content: '';` | CSS declaration assigning a style property value. |
| 30 | `  position: absolute;` | CSS declaration assigning a style property value. |
| 31 | `  inset: 0;` | CSS declaration assigning a style property value. |
| 32 | `  background: rgba(0,0,0,.45);` | CSS declaration assigning a style property value. |
| 33 | `}` | Closes the current code/style block scope. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `.mode-card .overlay {` | Begins a new code/style block scope. |
| 36 | `  position: absolute;` | CSS declaration assigning a style property value. |
| 37 | `  inset: 0;` | CSS declaration assigning a style property value. |
| 38 | `  z-index: 1;` | CSS declaration assigning a style property value. |
| 39 | `  color: #fff;` | CSS declaration assigning a style property value. |
| 40 | `  display: flex;` | CSS declaration assigning a style property value. |
| 41 | `  flex-direction: column;` | CSS declaration assigning a style property value. |
| 42 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 43 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 44 | `  transition: transform .3s ease;` | CSS declaration assigning a style property value. |
| 45 | `}` | Closes the current code/style block scope. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `.mode-card:hover {` | Begins a new code/style block scope. |
| 48 | `  transform: translateY(-8px) scale(1.02);` | CSS declaration assigning a style property value. |
| 49 | `}` | Closes the current code/style block scope. |
| 50 | `` | Blank line used to separate logical blocks for readability. |
| 51 | `.mode-card:hover .overlay {` | Begins a new code/style block scope. |
| 52 | `  transform: scale(1.1);` | CSS declaration assigning a style property value. |
| 53 | `}` | Closes the current code/style block scope. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `.mode-card.disabled {` | Begins a new code/style block scope. |
| 56 | `  opacity: .45;` | CSS declaration assigning a style property value. |
| 57 | `  pointer-events: none;` | CSS declaration assigning a style property value. |
| 58 | `}` | Closes the current code/style block scope. |
| 59 | `` | Blank line used to separate logical blocks for readability. |
| 60 | `.back-btn {` | Begins a new code/style block scope. |
| 61 | `  width: 38px;` | CSS declaration assigning a style property value. |
| 62 | `  height: 38px;` | CSS declaration assigning a style property value. |
| 63 | `  border-radius: 50%;` | CSS declaration assigning a style property value. |
| 64 | `  border: none;` | CSS declaration assigning a style property value. |
| 65 | `  background: rgba(0, 0, 0, 0.04);` | CSS declaration assigning a style property value. |
| 66 | `  color: #111;` | CSS declaration assigning a style property value. |
| 67 | `  display: flex;` | CSS declaration assigning a style property value. |
| 68 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 69 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 70 | `  transition: all .25s cubic-bezier(.4,0,.2,1);` | CSS declaration assigning a style property value. |
| 71 | `}` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `.back-btn i {` | Begins a new code/style block scope. |
| 74 | `  font-size: 1.2rem;` | CSS declaration assigning a style property value. |
| 75 | `}` | Closes the current code/style block scope. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `.back-btn:hover {` | Begins a new code/style block scope. |
| 78 | `  background: rgba(0, 0, 0, 0.08);` | CSS declaration assigning a style property value. |
| 79 | `  transform: translateX(-2px);` | CSS declaration assigning a style property value. |
| 80 | `}` | Closes the current code/style block scope. |
| 81 | `` | Blank line used to separate logical blocks for readability. |
| 82 | `.back-btn:active {` | Begins a new code/style block scope. |
| 83 | `  transform: scale(0.92);` | CSS declaration assigning a style property value. |
| 84 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.