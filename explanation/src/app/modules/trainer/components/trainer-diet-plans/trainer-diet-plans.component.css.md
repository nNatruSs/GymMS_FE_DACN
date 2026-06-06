# Explanation: `src/app/modules/trainer/components/trainer-diet-plans/trainer-diet-plans.component.css`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-diet-plans/trainer-diet-plans.component.css`
- **Total lines:** `84`
- **Non-empty lines:** `73`
- **Import statements:** `0`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `.filter-row {` | Begins a new code/style block scope. |
| 2 | `  display: grid;` | CSS declaration assigning a style property value. |
| 3 | `  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));` | CSS declaration assigning a style property value. |
| 4 | `  gap: 0.75rem;` | CSS declaration assigning a style property value. |
| 5 | `  align-items: end;` | CSS declaration assigning a style property value. |
| 6 | `}` | Closes the current code/style block scope. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `.include-archived {` | Begins a new code/style block scope. |
| 9 | `  display: flex;` | CSS declaration assigning a style property value. |
| 10 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 11 | `  padding-bottom: 0.35rem;` | CSS declaration assigning a style property value. |
| 12 | `}` | Closes the current code/style block scope. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `.diet-list {` | Begins a new code/style block scope. |
| 15 | `  display: grid;` | CSS declaration assigning a style property value. |
| 16 | `  gap: 0.5rem;` | CSS declaration assigning a style property value. |
| 17 | `  max-height: 480px;` | CSS declaration assigning a style property value. |
| 18 | `  overflow: auto;` | CSS declaration assigning a style property value. |
| 19 | `}` | Closes the current code/style block scope. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `.diet-item {` | Begins a new code/style block scope. |
| 22 | `  border: 1px solid #e9ecef;` | CSS declaration assigning a style property value. |
| 23 | `  border-radius: 10px;` | CSS declaration assigning a style property value. |
| 24 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 25 | `  text-align: left;` | CSS declaration assigning a style property value. |
| 26 | `  padding: 0.65rem 0.75rem;` | CSS declaration assigning a style property value. |
| 27 | `  transition: all 0.15s ease;` | CSS declaration assigning a style property value. |
| 28 | `}` | Closes the current code/style block scope. |
| 29 | `` | Blank line used to separate logical blocks for readability. |
| 30 | `.diet-item:hover {` | Begins a new code/style block scope. |
| 31 | `  border-color: #0d6efd;` | CSS declaration assigning a style property value. |
| 32 | `  box-shadow: 0 2px 8px rgba(13, 110, 253, 0.12);` | CSS declaration assigning a style property value. |
| 33 | `}` | Closes the current code/style block scope. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `.modal-overlay {` | Begins a new code/style block scope. |
| 36 | `  position: fixed;` | CSS declaration assigning a style property value. |
| 37 | `  inset: 0;` | CSS declaration assigning a style property value. |
| 38 | `  z-index: 1080;` | CSS declaration assigning a style property value. |
| 39 | `  background: rgba(0, 0, 0, 0.45);` | CSS declaration assigning a style property value. |
| 40 | `  display: flex;` | CSS declaration assigning a style property value. |
| 41 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 42 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 43 | `  padding: 1rem;` | CSS declaration assigning a style property value. |
| 44 | `}` | Closes the current code/style block scope. |
| 45 | `` | Blank line used to separate logical blocks for readability. |
| 46 | `.modal-card {` | Begins a new code/style block scope. |
| 47 | `  width: min(760px, 96vw);` | CSS declaration assigning a style property value. |
| 48 | `  max-height: 92vh;` | CSS declaration assigning a style property value. |
| 49 | `  overflow: auto;` | CSS declaration assigning a style property value. |
| 50 | `  border-radius: 14px;` | CSS declaration assigning a style property value. |
| 51 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 52 | `  padding: 1rem 1.25rem;` | CSS declaration assigning a style property value. |
| 53 | `}` | Closes the current code/style block scope. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `.modal-wide {` | Begins a new code/style block scope. |
| 56 | `  width: min(1040px, 98vw);` | CSS declaration assigning a style property value. |
| 57 | `}` | Closes the current code/style block scope. |
| 58 | `` | Blank line used to separate logical blocks for readability. |
| 59 | `.meal-card {` | Begins a new code/style block scope. |
| 60 | `  border: 1px solid #ececec;` | CSS declaration assigning a style property value. |
| 61 | `  border-radius: 10px;` | CSS declaration assigning a style property value. |
| 62 | `  padding: 0.6rem;` | CSS declaration assigning a style property value. |
| 63 | `  background: #fbfbfc;` | CSS declaration assigning a style property value. |
| 64 | `}` | Closes the current code/style block scope. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `.assign-card {` | Begins a new code/style block scope. |
| 67 | `  border: 1px dashed #ced4da;` | CSS declaration assigning a style property value. |
| 68 | `  border-radius: 10px;` | CSS declaration assigning a style property value. |
| 69 | `  padding: 0.75rem;` | CSS declaration assigning a style property value. |
| 70 | `  background: #f8f9fb;` | CSS declaration assigning a style property value. |
| 71 | `}` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `.member-grid {` | Begins a new code/style block scope. |
| 74 | `  display: grid;` | CSS declaration assigning a style property value. |
| 75 | `  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));` | CSS declaration assigning a style property value. |
| 76 | `  gap: 0.5rem;` | CSS declaration assigning a style property value. |
| 77 | `}` | Closes the current code/style block scope. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `.member-item {` | Begins a new code/style block scope. |
| 80 | `  border: 1px solid #e8e8e8;` | CSS declaration assigning a style property value. |
| 81 | `  border-radius: 10px;` | CSS declaration assigning a style property value. |
| 82 | `  padding: 0.5rem 0.65rem;` | CSS declaration assigning a style property value. |
| 83 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 84 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.