# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/booking-details-modal/booking-details-modal.component.css`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/booking-details-modal/booking-details-modal.component.css`
- **Total lines:** `222`
- **Non-empty lines:** `177`
- **Import statements:** `0`
- **Class-like declarations found:** `0`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `` | Blank line used to separate logical blocks for readability. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `.modal-backdrop-custom {` | Begins a new code/style block scope. |
| 4 | `  position: fixed;` | CSS declaration assigning a style property value. |
| 5 | `  inset: 0;` | CSS declaration assigning a style property value. |
| 6 | `  background: rgba(0,0,0,.6);` | CSS declaration assigning a style property value. |
| 7 | `  z-index: 1040;` | CSS declaration assigning a style property value. |
| 8 | `}` | Closes the current code/style block scope. |
| 9 | `` | Blank line used to separate logical blocks for readability. |
| 10 | `.modal-container {` | Begins a new code/style block scope. |
| 11 | `  position: fixed;` | CSS declaration assigning a style property value. |
| 12 | `  inset: 0;` | CSS declaration assigning a style property value. |
| 13 | `  display: flex;` | CSS declaration assigning a style property value. |
| 14 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 15 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 16 | `  z-index: 1050;` | CSS declaration assigning a style property value. |
| 17 | `}` | Closes the current code/style block scope. |
| 18 | `` | Blank line used to separate logical blocks for readability. |
| 19 | `.modal-card {` | Begins a new code/style block scope. |
| 20 | `  background: #fff;` | CSS declaration assigning a style property value. |
| 21 | `  width: 90%;` | CSS declaration assigning a style property value. |
| 22 | `  max-width: 1100px;` | CSS declaration assigning a style property value. |
| 23 | `  ` | Blank line used to separate logical blocks for readability. |
| 24 | `  ` | Blank line used to separate logical blocks for readability. |
| 25 | `  max-height: 90vh;` | CSS declaration assigning a style property value. |
| 26 | `  display: flex;` | CSS declaration assigning a style property value. |
| 27 | `  flex-direction: column;` | CSS declaration assigning a style property value. |
| 28 | `` | Blank line used to separate logical blocks for readability. |
| 29 | `  border-radius: 16px;` | CSS declaration assigning a style property value. |
| 30 | `  overflow: hidden;` | CSS declaration assigning a style property value. |
| 31 | `  animation: scaleIn .25s ease;` | CSS declaration assigning a style property value. |
| 32 | `}` | Closes the current code/style block scope. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `.modal-header {` | Begins a new code/style block scope. |
| 35 | `  flex-shrink: 0;` | CSS declaration assigning a style property value. |
| 36 | `}` | Closes the current code/style block scope. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `@keyframes scaleIn {` | Begins a new code/style block scope. |
| 39 | `  from { transform: scale(.95); opacity: 0; }` | Core implementation line contributing to the file behavior. |
| 40 | `  to { transform: scale(1); opacity: 1; }` | Core implementation line contributing to the file behavior. |
| 41 | `}` | Closes the current code/style block scope. |
| 42 | `` | Blank line used to separate logical blocks for readability. |
| 43 | `.modal-body-grid {` | Begins a new code/style block scope. |
| 44 | `  flex: 1;` | CSS declaration assigning a style property value. |
| 45 | `  overflow-y: auto;` | CSS declaration assigning a style property value. |
| 46 | `  scroll-behavior: smooth;` | CSS declaration assigning a style property value. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `  display: grid;` | CSS declaration assigning a style property value. |
| 49 | `  grid-template-columns: 5fr 7fr;` | CSS declaration assigning a style property value. |
| 50 | `  gap: 24px;` | CSS declaration assigning a style property value. |
| 51 | `  padding: 24px;` | CSS declaration assigning a style property value. |
| 52 | `}` | Closes the current code/style block scope. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `.modal-body-grid::-webkit-scrollbar {` | Begins a new code/style block scope. |
| 55 | `  width: 8px;` | CSS declaration assigning a style property value. |
| 56 | `}` | Closes the current code/style block scope. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `.modal-body-grid::-webkit-scrollbar-thumb {` | Begins a new code/style block scope. |
| 59 | `  background: rgba(0,0,0,.2);` | CSS declaration assigning a style property value. |
| 60 | `  border-radius: 8px;` | CSS declaration assigning a style property value. |
| 61 | `}` | Closes the current code/style block scope. |
| 62 | `` | Blank line used to separate logical blocks for readability. |
| 63 | `.modal-body-grid::-webkit-scrollbar-track {` | Begins a new code/style block scope. |
| 64 | `  background: transparent;` | CSS declaration assigning a style property value. |
| 65 | `}` | Closes the current code/style block scope. |
| 66 | `` | Blank line used to separate logical blocks for readability. |
| 67 | `@media (max-width: 992px) {` | Begins a new code/style block scope. |
| 68 | `  .modal-body-grid {` | Begins a new code/style block scope. |
| 69 | `    grid-template-columns: 1fr;` | CSS declaration assigning a style property value. |
| 70 | `  }` | Closes the current code/style block scope. |
| 71 | `}` | Closes the current code/style block scope. |
| 72 | `` | Blank line used to separate logical blocks for readability. |
| 73 | `.image-section {` | Begins a new code/style block scope. |
| 74 | `  position: relative;` | CSS declaration assigning a style property value. |
| 75 | `}` | Closes the current code/style block scope. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `.image-wrapper {` | Begins a new code/style block scope. |
| 78 | `  aspect-ratio: 4 / 3;` | CSS declaration assigning a style property value. |
| 79 | `  overflow: hidden;` | CSS declaration assigning a style property value. |
| 80 | `  border-radius: 12px;` | CSS declaration assigning a style property value. |
| 81 | `  transition: opacity 0.35s ease, transform 0.35s ease;` | CSS declaration assigning a style property value. |
| 82 | `}` | Closes the current code/style block scope. |
| 83 | `` | Blank line used to separate logical blocks for readability. |
| 84 | `.image-wrapper img {` | Begins a new code/style block scope. |
| 85 | `  width: 100%;` | CSS declaration assigning a style property value. |
| 86 | `  height: 100%;` | CSS declaration assigning a style property value. |
| 87 | `  object-fit: cover;` | CSS declaration assigning a style property value. |
| 88 | `}` | Closes the current code/style block scope. |
| 89 | ` ` | Blank line used to separate logical blocks for readability. |
| 90 | `.slide-nav {` | Begins a new code/style block scope. |
| 91 | `  position: absolute;` | CSS declaration assigning a style property value. |
| 92 | `  top: 50%;` | CSS declaration assigning a style property value. |
| 93 | `  transform: translateY(-50%);` | CSS declaration assigning a style property value. |
| 94 | `  width: 44px;` | CSS declaration assigning a style property value. |
| 95 | `  height: 44px;` | CSS declaration assigning a style property value. |
| 96 | `  border-radius: 50%;` | CSS declaration assigning a style property value. |
| 97 | `  border: none;` | CSS declaration assigning a style property value. |
| 98 | `  background: rgba(0, 0, 0, 0.45);` | CSS declaration assigning a style property value. |
| 99 | `  backdrop-filter: blur(6px);` | CSS declaration assigning a style property value. |
| 100 | `  color: white;` | CSS declaration assigning a style property value. |
| 101 | `  display: flex;` | CSS declaration assigning a style property value. |
| 102 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 103 | `  justify-content: center;` | CSS declaration assigning a style property value. |
| 104 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 105 | `` | Blank line used to separate logical blocks for readability. |
| 106 | `  opacity: 0;` | CSS declaration assigning a style property value. |
| 107 | `  transition: all 0.25s ease;` | CSS declaration assigning a style property value. |
| 108 | `  z-index: 2;` | CSS declaration assigning a style property value. |
| 109 | `}` | Closes the current code/style block scope. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `.image-section:hover .slide-nav {` | Begins a new code/style block scope. |
| 112 | `  opacity: 1;` | CSS declaration assigning a style property value. |
| 113 | `}` | Closes the current code/style block scope. |
| 114 | `` | Blank line used to separate logical blocks for readability. |
| 115 | `.slide-nav:hover {` | Begins a new code/style block scope. |
| 116 | `  background: rgba(0, 0, 0, 0.65);` | CSS declaration assigning a style property value. |
| 117 | `  transform: translateY(-50%) scale(1.1);` | CSS declaration assigning a style property value. |
| 118 | `}` | Closes the current code/style block scope. |
| 119 | `` | Blank line used to separate logical blocks for readability. |
| 120 | `.slide-nav i {` | Begins a new code/style block scope. |
| 121 | `  font-size: 1.4rem;` | CSS declaration assigning a style property value. |
| 122 | `}` | Closes the current code/style block scope. |
| 123 | `` | Blank line used to separate logical blocks for readability. |
| 124 | `.slide-prev {` | Begins a new code/style block scope. |
| 125 | `  left: 12px;` | CSS declaration assigning a style property value. |
| 126 | `}` | Closes the current code/style block scope. |
| 127 | `` | Blank line used to separate logical blocks for readability. |
| 128 | `.slide-next {` | Begins a new code/style block scope. |
| 129 | `  right: 12px;` | CSS declaration assigning a style property value. |
| 130 | `}` | Closes the current code/style block scope. |
| 131 | `` | Blank line used to separate logical blocks for readability. |
| 132 | `.purchase-box {` | Begins a new code/style block scope. |
| 133 | `  margin-top: 20px;` | CSS declaration assigning a style property value. |
| 134 | `  padding: 16px;` | CSS declaration assigning a style property value. |
| 135 | `  background: #f8f9fa;` | CSS declaration assigning a style property value. |
| 136 | `  border-radius: 12px;` | CSS declaration assigning a style property value. |
| 137 | `  display: flex;` | CSS declaration assigning a style property value. |
| 138 | `  justify-content: space-between;` | CSS declaration assigning a style property value. |
| 139 | `  align-items: center;` | CSS declaration assigning a style property value. |
| 140 | `}` | Closes the current code/style block scope. |
| 141 | `` | Blank line used to separate logical blocks for readability. |
| 142 | `` | Blank line used to separate logical blocks for readability. |
| 143 | `` | Blank line used to separate logical blocks for readability. |
| 144 | `` | Blank line used to separate logical blocks for readability. |
| 145 | `` | Blank line used to separate logical blocks for readability. |
| 146 | `` | Blank line used to separate logical blocks for readability. |
| 147 | `` | Blank line used to separate logical blocks for readability. |
| 148 | `` | Blank line used to separate logical blocks for readability. |
| 149 | `.calendar-grid {` | Begins a new code/style block scope. |
| 150 | `  display: grid;` | CSS declaration assigning a style property value. |
| 151 | `  grid-template-columns: 80px repeat(7, 1fr);` | CSS declaration assigning a style property value. |
| 152 | `  border: 1px solid #dee2e6;` | CSS declaration assigning a style property value. |
| 153 | `  border-radius: 12px;` | CSS declaration assigning a style property value. |
| 154 | `  overflow: hidden;` | CSS declaration assigning a style property value. |
| 155 | `}` | Closes the current code/style block scope. |
| 156 | `` | Blank line used to separate logical blocks for readability. |
| 157 | `.calendar-header {` | Begins a new code/style block scope. |
| 158 | `  background: #f8f9fa;` | CSS declaration assigning a style property value. |
| 159 | `  font-weight: 600;` | CSS declaration assigning a style property value. |
| 160 | `  font-size: 0.85rem;` | CSS declaration assigning a style property value. |
| 161 | `  text-align: center;` | CSS declaration assigning a style property value. |
| 162 | `  padding: 10px;` | CSS declaration assigning a style property value. |
| 163 | `  border-bottom: 1px solid #dee2e6;` | CSS declaration assigning a style property value. |
| 164 | `}` | Closes the current code/style block scope. |
| 165 | `` | Blank line used to separate logical blocks for readability. |
| 166 | `.time-label {` | Begins a new code/style block scope. |
| 167 | `  background: #f8f9fa;` | CSS declaration assigning a style property value. |
| 168 | `  font-size: 0.8rem;` | CSS declaration assigning a style property value. |
| 169 | `  text-align: center;` | CSS declaration assigning a style property value. |
| 170 | `  padding: 8px;` | CSS declaration assigning a style property value. |
| 171 | `  border-right: 1px solid #dee2e6;` | CSS declaration assigning a style property value. |
| 172 | `}` | Closes the current code/style block scope. |
| 173 | `` | Blank line used to separate logical blocks for readability. |
| 174 | `.calendar-cell {` | Begins a new code/style block scope. |
| 175 | `  height: 38px;` | CSS declaration assigning a style property value. |
| 176 | `  border: 1px solid #f1f1f1;` | CSS declaration assigning a style property value. |
| 177 | `  cursor: not-allowed;` | CSS declaration assigning a style property value. |
| 178 | `}` | Closes the current code/style block scope. |
| 179 | `` | Blank line used to separate logical blocks for readability. |
| 180 | `.calendar-cell.available {` | Begins a new code/style block scope. |
| 181 | `  background: #e9f2ff;` | CSS declaration assigning a style property value. |
| 182 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 183 | `}` | Closes the current code/style block scope. |
| 184 | `` | Blank line used to separate logical blocks for readability. |
| 185 | `.calendar-cell.available:hover {` | Begins a new code/style block scope. |
| 186 | `  background: #d6e6ff;` | CSS declaration assigning a style property value. |
| 187 | `}` | Closes the current code/style block scope. |
| 188 | `` | Blank line used to separate logical blocks for readability. |
| 189 | `.calendar-cell.selected {` | Begins a new code/style block scope. |
| 190 | `  background: #0d6efd;` | CSS declaration assigning a style property value. |
| 191 | `}` | Closes the current code/style block scope. |
| 192 | `` | Blank line used to separate logical blocks for readability. |
| 193 | `.calendar-cell.disabled {` | Begins a new code/style block scope. |
| 194 | `  background: #f1f3f5;` | CSS declaration assigning a style property value. |
| 195 | `  cursor: not-allowed;` | CSS declaration assigning a style property value. |
| 196 | `  opacity: .5;` | CSS declaration assigning a style property value. |
| 197 | `}` | Closes the current code/style block scope. |
| 198 | `` | Blank line used to separate logical blocks for readability. |
| 199 | `.calendar-cell.booked {` | Begins a new code/style block scope. |
| 200 | `  background: repeating-linear-gradient(` | Core implementation line contributing to the file behavior. |
| 201 | `    45deg,` | Core implementation line contributing to the file behavior. |
| 202 | `    #dee2e6,` | Core implementation line contributing to the file behavior. |
| 203 | `    #dee2e6 5px,` | Core implementation line contributing to the file behavior. |
| 204 | `    #f8f9fa 5px,` | Core implementation line contributing to the file behavior. |
| 205 | `    #f8f9fa 10px` | Core implementation line contributing to the file behavior. |
| 206 | `  );` | Closes a function/method call statement. |
| 207 | `  cursor: not-allowed;` | CSS declaration assigning a style property value. |
| 208 | `}` | Closes the current code/style block scope. |
| 209 | `` | Blank line used to separate logical blocks for readability. |
| 210 | `` | Blank line used to separate logical blocks for readability. |
| 211 | `.nav-week {` | Begins a new code/style block scope. |
| 212 | `  border: none;` | CSS declaration assigning a style property value. |
| 213 | `  background: transparent;` | CSS declaration assigning a style property value. |
| 214 | `  font-size: 1.5rem;` | CSS declaration assigning a style property value. |
| 215 | `  color: #0d6efd;` | CSS declaration assigning a style property value. |
| 216 | `  cursor: pointer;` | CSS declaration assigning a style property value. |
| 217 | `  transition: transform .2s ease;` | CSS declaration assigning a style property value. |
| 218 | `}` | Closes the current code/style block scope. |
| 219 | `` | Blank line used to separate logical blocks for readability. |
| 220 | `.nav-week:hover {` | Begins a new code/style block scope. |
| 221 | `  transform: scale(1.2);` | CSS declaration assigning a style property value. |
| 222 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.