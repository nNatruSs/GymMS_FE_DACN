# Explanation: `src/app/components/home/programs/programs.component.html`

## File Overview
- **Relative path:** `src/app/components/home/programs/programs.component.html`
- **Total lines:** `18`
- **Non-empty lines:** `17`
- **Import statements:** `0`
- **Class-like declarations found:** `7`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<section class="container py-5">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <h3 class="text-center fw-bold mb-4">Our Training Programs</h3>` | Declares a core TypeScript structure used by this module. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `  <div class="row g-4">` | Declares a core TypeScript structure used by this module. |
| 5 | `    <div class="col-md-6 col-lg-4" *ngFor="let p of programs">` | Declares a core TypeScript structure used by this module. |
| 6 | `      <div class="program-card">` | Declares a core TypeScript structure used by this module. |
| 7 | `        <img [src]="p.image" />` | HTML tag opening/closing markup for component template structure. |
| 8 | `        <div class="overlay">` | Declares a core TypeScript structure used by this module. |
| 9 | `          <h5>{{ p.title }}</h5>` | HTML tag opening/closing markup for component template structure. |
| 10 | `          <p>{{ p.desc }}</p>` | HTML tag opening/closing markup for component template structure. |
| 11 | `          <button class="btn btn-outline-light btn-sm">` | Declares a core TypeScript structure used by this module. |
| 12 | `            {{ p.cta }}` | Core implementation line contributing to the file behavior. |
| 13 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 14 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 15 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 16 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 17 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 18 | `</section>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.