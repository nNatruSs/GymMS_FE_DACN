# Explanation: `src/app/modules/trainer/components/trainer-schedule/trainer-schedule.component.css`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-schedule/trainer-schedule.component.css`
- **Total lines:** `90`
- **Non-empty lines:** `77`
- **Import statements:** `0`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `.form-label {` | Begins a new code/style block scope. |
| 2 | `  font-weight: 500;` | CSS declaration assigning a style property value. |
| 3 | `}` | Closes the current code/style block scope. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `.calendar-grid-wrapper {` | Begins a new code/style block scope. |
| 6 | `  overflow-x: auto;` | CSS declaration assigning a style property value. |
| 7 | `}` | Closes the current code/style block scope. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `.calendar-grid {` | Begins a new code/style block scope. |
| 10 | `  display: grid;` | CSS declaration assigning a style property value. |
| 11 | `  grid-template-columns: 58px repeat(7, minmax(62px, 1fr));` | CSS declaration assigning a style property value. |
| 12 | `  border: 1px solid #e5e7eb;` | CSS declaration assigning a style property value. |
| 13 | `  border-radius: 12px;` | CSS declaration assigning a style property value. |
| 14 | `  overflow: hidden;` | CSS declaration assigning a style property value. |
| 15 | `  min-width: 560px;` | CSS declaration assigning a style property value. |
| 16 | `}` | Closes the current code/style block scope. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `.calendar-header,` | Core implementation line contributing to the file behavior. |
| 19 | `.time-col,` | Core implementation line contributing to the file behavior. |
| 20 | `.calendar-cell {` | Begins a new code/style block scope. |
| 21 | `  border-right: 1px solid #e5e7eb;` | CSS declaration assigning a style property value. |
| 22 | `  border-bottom: 1px solid #e5e7eb;` | CSS declaration assigning a style property value. |
| 23 | `}` | Closes the current code/style block scope. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `.calendar-header,` | Core implementation line contributing to the file behavior. |
| 26 | `.time-col {` | Begins a new code/style block scope. |
| 27 | `  background: #f8fafc;` | CSS declaration assigning a style property value. |
| 28 | `  padding: 6px;` | CSS declaration assigning a style property value. |
| 29 | `  font-size: 10px;` | CSS declaration assigning a style property value. |
| 30 | `  text-align: center;` | CSS declaration assigning a style property value. |
| 31 | `}` | Closes the current code/style block scope. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `.calendar-cell {` | Begins a new code/style block scope. |
| 34 | `  height: 16px;` | CSS declaration assigning a style property value. |
| 35 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 36 | `}` | Closes the current code/style block scope. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `.cell-available {` | Begins a new code/style block scope. |
| 39 | `  background: #93c5fd;` | CSS declaration assigning a style property value. |
| 40 | `}` | Closes the current code/style block scope. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `.cell-booked {` | Begins a new code/style block scope. |
| 43 | `  background: #fca5a5;` | CSS declaration assigning a style property value. |
| 44 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 45 | `}` | Closes the current code/style block scope. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `.cell-past {` | Begins a new code/style block scope. |
| 48 | `  background: repeating-linear-gradient(` | Core implementation line contributing to the file behavior. |
| 49 | `    -45deg,` | Core implementation line contributing to the file behavior. |
| 50 | `    #f3f4f6,` | Core implementation line contributing to the file behavior. |
| 51 | `    #f3f4f6 8px,` | Core implementation line contributing to the file behavior. |
| 52 | `    #e5e7eb 8px,` | Core implementation line contributing to the file behavior. |
| 53 | `    #e5e7eb 16px` | Core implementation line contributing to the file behavior. |
| 54 | `  );` | Closes a function/method call statement. |
| 55 | `}` | Closes the current code/style block scope. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `.legend-dot {` | Begins a new code/style block scope. |
| 58 | `  display: inline-block;` | CSS declaration assigning a style property value. |
| 59 | `  width: 10px;` | CSS declaration assigning a style property value. |
| 60 | `  height: 10px;` | CSS declaration assigning a style property value. |
| 61 | `  border-radius: 50%;` | CSS declaration assigning a style property value. |
| 62 | `  margin-right: 6px;` | CSS declaration assigning a style property value. |
| 63 | `}` | Closes the current code/style block scope. |
| 64 | `` | Blank line used to separate logical blocks for readability. |
| 65 | `.legend-available {` | Begins a new code/style block scope. |
| 66 | `  background: #93c5fd;` | CSS declaration assigning a style property value. |
| 67 | `}` | Closes the current code/style block scope. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `.legend-booked {` | Begins a new code/style block scope. |
| 70 | `  background: #fca5a5;` | CSS declaration assigning a style property value. |
| 71 | `}` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `.legend-past {` | Begins a new code/style block scope. |
| 74 | `  border-radius: 2px;` | CSS declaration assigning a style property value. |
| 75 | `  width: 14px;` | CSS declaration assigning a style property value. |
| 76 | `  background: repeating-linear-gradient(` | Core implementation line contributing to the file behavior. |
| 77 | `    -45deg,` | Core implementation line contributing to the file behavior. |
| 78 | `    #f3f4f6,` | Core implementation line contributing to the file behavior. |
| 79 | `    #f3f4f6 4px,` | Core implementation line contributing to the file behavior. |
| 80 | `    #d1d5db 4px,` | Core implementation line contributing to the file behavior. |
| 81 | `    #d1d5db 8px` | Core implementation line contributing to the file behavior. |
| 82 | `  );` | Closes a function/method call statement. |
| 83 | `}` | Closes the current code/style block scope. |
| 84 | `` | Blank line used to separate logical blocks for readability. |
| 85 | `.nav-week {` | Begins a new code/style block scope. |
| 86 | `  width: 32px;` | CSS declaration assigning a style property value. |
| 87 | `  height: 32px;` | CSS declaration assigning a style property value. |
| 88 | `  border-radius: 999px;` | CSS declaration assigning a style property value. |
| 89 | `  padding: 0;` | CSS declaration assigning a style property value. |
| 90 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.