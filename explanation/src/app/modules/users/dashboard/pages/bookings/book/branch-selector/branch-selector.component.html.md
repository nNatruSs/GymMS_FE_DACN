# Explanation: `src/app/modules/users/dashboard/pages/bookings/book/branch-selector/branch-selector.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/bookings/book/branch-selector/branch-selector.component.html`
- **Total lines:** `22`
- **Non-empty lines:** `19`
- **Import statements:** `0`
- **Class-like declarations found:** `11`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<h4 class="fw-semibold mb-4">Choose a Facility</h4>` | Declares a core TypeScript structure used by this module. |
| 2 | `` | Blank line used to separate logical blocks for readability. |
| 3 | `<div class="row g-4">` | Declares a core TypeScript structure used by this module. |
| 4 | `  <div class="col-md-6" *ngFor="let b of branches">` | Declares a core TypeScript structure used by this module. |
| 5 | `    <div class="branch-card" (click)="select.emit(b)">` | Declares a core TypeScript structure used by this module. |
| 6 | `      <img [src]="b.thumbnail" />` | HTML tag opening/closing markup for component template structure. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `      <div class="branch-overlay">` | Declares a core TypeScript structure used by this module. |
| 9 | `        <h5>{{ b.name }}</h5>` | HTML tag opening/closing markup for component template structure. |
| 10 | `        <p>{{ b.address }}</p>` | HTML tag opening/closing markup for component template structure. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `        <div class="stats">` | Declares a core TypeScript structure used by this module. |
| 13 | `          <span><i class="bi bi-heart-pulse"></i> {{ b.stats?.cardio \|\| 0 }}</span>` | Declares a core TypeScript structure used by this module. |
| 14 | `          <span><i class="bi bi-bar-chart"></i> {{ b.stats?.strength \|\| 0 }}</span>` | Declares a core TypeScript structure used by this module. |
| 15 | `          <span><i class="bi bi-flower1"></i> {{ b.stats?.mind_body \|\| 0 }}</span>` | Declares a core TypeScript structure used by this module. |
| 16 | `          <span><i class="bi bi-lightning"></i> {{ b.stats?.specialty \|\| 0 }}</span>` | Declares a core TypeScript structure used by this module. |
| 17 | `          <span><i class="bi bi-person-badge"></i> {{ b.stats?.trainers \|\| 0 }}</span>` | Declares a core TypeScript structure used by this module. |
| 18 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 19 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 20 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 21 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 22 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.