# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-item-list/booking-item-list.component.css`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-item-list/booking-item-list.component.css`
- **Total lines:** `112`
- **Non-empty lines:** `93`
- **Import statements:** `0`
- **Class-like declarations found:** `2`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `.item-card {` | Begins a new code/style block scope. |
| 4 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 5 | `  border: none;` | CSS declaration assigning a style property value. |
| 6 | `  border-radius: 14px;` | CSS declaration assigning a style property value. |
| 7 | `  transition: .25s cubic-bezier(.4,0,.2,1);` | CSS declaration assigning a style property value. |
| 8 | `  box-shadow: 0 8px 24px rgba(0,0,0,.08);` | CSS declaration assigning a style property value. |
| 9 | `}` | Closes the current code/style block scope. |
| 10 | `` | Blank line used to separate logical blocks for readability. |
| 11 | `.item-card:hover {` | Begins a new code/style block scope. |
| 12 | `  transform: translateY(-6px);` | CSS declaration assigning a style property value. |
| 13 | `  box-shadow: 0 14px 32px rgba(0,0,0,.15);` | CSS declaration assigning a style property value. |
| 14 | `}` | Closes the current code/style block scope. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `.item-card.disabled {` | Begins a new code/style block scope. |
| 17 | `  opacity: .5;` | CSS declaration assigning a style property value. |
| 18 | `  pointer-events: none;` | CSS declaration assigning a style property value. |
| 19 | `}` | Closes the current code/style block scope. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `.back-btn {` | Begins a new code/style block scope. |
| 22 | `  width: 38px;` | CSS declaration assigning a style property value. |
| 23 | `  height: 38px;` | CSS declaration assigning a style property value. |
| 24 | `  border-radius: 50%;` | CSS declaration assigning a style property value. |
| 25 | `  border: none;` | CSS declaration assigning a style property value. |
| 26 | `  background: rgba(0, 0, 0, 0.04);` | CSS declaration assigning a style property value. |
| 27 | `  color: #111;` | CSS declaration assigning a style property value. |
| 28 | `  display: flex;` | CSS declaration assigning a style property value. |
| 29 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 30 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 31 | `  transition: all .25s cubic-bezier(.4,0,.2,1);` | CSS declaration assigning a style property value. |
| 32 | `}` | Closes the current code/style block scope. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `.back-btn i {` | Begins a new code/style block scope. |
| 35 | `  font-size: 1.2rem;` | CSS declaration assigning a style property value. |
| 36 | `}` | Closes the current code/style block scope. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `.back-btn:hover {` | Begins a new code/style block scope. |
| 39 | `  background: rgba(0, 0, 0, 0.08);` | CSS declaration assigning a style property value. |
| 40 | `  transform: translateX(-2px);` | CSS declaration assigning a style property value. |
| 41 | `}` | Closes the current code/style block scope. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `.back-btn:active {` | Begins a new code/style block scope. |
| 44 | `  transform: scale(0.92);` | CSS declaration assigning a style property value. |
| 45 | `}` | Closes the current code/style block scope. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `.thumb-wrapper {` | Begins a new code/style block scope. |
| 49 | `  position: relative;` | CSS declaration assigning a style property value. |
| 50 | `  width: 100%;` | CSS declaration assigning a style property value. |
| 51 | `  aspect-ratio: 16 / 9;` | CSS declaration assigning a style property value. |
| 52 | `  overflow: hidden;` | CSS declaration assigning a style property value. |
| 53 | `  border-radius: 12px 12px 0 0;` | CSS declaration assigning a style property value. |
| 54 | `  background: #f2f2f2;` | CSS declaration assigning a style property value. |
| 55 | `}` | Closes the current code/style block scope. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `.thumb-wrapper img {` | Begins a new code/style block scope. |
| 58 | `  width: 100%;` | CSS declaration assigning a style property value. |
| 59 | `  height: 100%;` | CSS declaration assigning a style property value. |
| 60 | `  object-fit: cover;` | CSS declaration assigning a style property value. |
| 61 | `  transition: transform .4s ease;` | CSS declaration assigning a style property value. |
| 62 | `}` | Closes the current code/style block scope. |
| 63 | `` | Blank line used to separate logical blocks for readability. |
| 64 | `.card:hover .thumb-wrapper img {` | Begins a new code/style block scope. |
| 65 | `  transform: scale(1.06);` | CSS declaration assigning a style property value. |
| 66 | `}` | Closes the current code/style block scope. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `.class-modal {` | Declares a core TypeScript structure used by this module. |
| 69 | `  width: min(860px, 92vw);` | CSS declaration assigning a style property value. |
| 70 | `  max-height: 90vh;` | CSS declaration assigning a style property value. |
| 71 | `  overflow: auto;` | CSS declaration assigning a style property value. |
| 72 | `}` | Closes the current code/style block scope. |
| 73 | `` | Blank line used to separate logical blocks for readability. |
| 74 | `.trainer-modal {` | Begins a new code/style block scope. |
| 75 | `  width: min(900px, 94vw);` | CSS declaration assigning a style property value. |
| 76 | `  max-height: 90vh;` | CSS declaration assigning a style property value. |
| 77 | `  overflow: auto;` | CSS declaration assigning a style property value. |
| 78 | `}` | Closes the current code/style block scope. |
| 79 | `` | Blank line used to separate logical blocks for readability. |
| 80 | `.class-logo {` | Declares a core TypeScript structure used by this module. |
| 81 | `  width: 96px;` | CSS declaration assigning a style property value. |
| 82 | `  height: 96px;` | CSS declaration assigning a style property value. |
| 83 | `  object-fit: cover;` | CSS declaration assigning a style property value. |
| 84 | `  border-radius: 12px;` | CSS declaration assigning a style property value. |
| 85 | `  border: 1px solid #e5e7eb;` | CSS declaration assigning a style property value. |
| 86 | `}` | Closes the current code/style block scope. |
| 87 | `` | Blank line used to separate logical blocks for readability. |
| 88 | `.trainer-slot-list {` | Begins a new code/style block scope. |
| 89 | `  display: flex;` | CSS declaration assigning a style property value. |
| 90 | `  flex-wrap: wrap;` | CSS declaration assigning a style property value. |
| 91 | `  gap: 0.5rem;` | CSS declaration assigning a style property value. |
| 92 | `}` | Closes the current code/style block scope. |
| 93 | `` | Blank line used to separate logical blocks for readability. |
| 94 | `.trainer-slot-chip {` | Begins a new code/style block scope. |
| 95 | `  border: 1px solid #dbe2ea;` | CSS declaration assigning a style property value. |
| 96 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 97 | `  border-radius: 999px;` | CSS declaration assigning a style property value. |
| 98 | `  padding: 0.4rem 0.75rem;` | CSS declaration assigning a style property value. |
| 99 | `  font-size: 0.85rem;` | CSS declaration assigning a style property value. |
| 100 | `  transition: all .2s ease;` | CSS declaration assigning a style property value. |
| 101 | `}` | Closes the current code/style block scope. |
| 102 | `` | Blank line used to separate logical blocks for readability. |
| 103 | `.trainer-slot-chip:hover {` | Begins a new code/style block scope. |
| 104 | `  border-color: #0d6efd;` | CSS declaration assigning a style property value. |
| 105 | `  color: #0d6efd;` | CSS declaration assigning a style property value. |
| 106 | `}` | Closes the current code/style block scope. |
| 107 | `` | Blank line used to separate logical blocks for readability. |
| 108 | `.trainer-slot-chip.active {` | Begins a new code/style block scope. |
| 109 | `  border-color: #0d6efd;` | CSS declaration assigning a style property value. |
| 110 | `  background: #0d6efd;` | CSS declaration assigning a style property value. |
| 111 | `  color: #fff;` | CSS declaration assigning a style property value. |
| 112 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.