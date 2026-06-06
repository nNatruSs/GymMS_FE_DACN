# Explanation: `src/app/components/our-services/our-services.component.html`

## File Overview
- **Relative path:** `src/app/components/our-services/our-services.component.html`
- **Total lines:** `43`
- **Non-empty lines:** `35`
- **Import statements:** `0`
- **Class-like declarations found:** `10`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<section class="services-hero">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <h1>Our Services</h1>` | HTML tag opening/closing markup for component template structure. |
| 3 | `  <p>` | HTML tag opening/closing markup for component template structure. |
| 4 | `    Comprehensive fitness services designed to help you achieve your health` | Core implementation line contributing to the file behavior. |
| 5 | `    and wellness goals.` | Core implementation line contributing to the file behavior. |
| 6 | `  </p>` | HTML tag opening/closing markup for component template structure. |
| 7 | `</section>` | HTML tag opening/closing markup for component template structure. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `<section class="service-block" *ngFor="let s of services; let i = index">` | Declares a core TypeScript structure used by this module. |
| 10 | `  <div class="content" [class.reverse]="i % 2 !== 0">` | Declares a core TypeScript structure used by this module. |
| 11 | `    <div class="text">` | Declares a core TypeScript structure used by this module. |
| 12 | `      <i class="bi" [ngClass]="s.icon"></i>` | Declares a core TypeScript structure used by this module. |
| 13 | `      <h3>{{ s.title }}</h3>` | HTML tag opening/closing markup for component template structure. |
| 14 | `      <p>{{ s.description }}</p>` | HTML tag opening/closing markup for component template structure. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `      <ul>` | HTML tag opening/closing markup for component template structure. |
| 17 | `        <li *ngFor="let f of s.features">{{ f }}</li>` | HTML tag opening/closing markup for component template structure. |
| 18 | `      </ul>` | HTML tag opening/closing markup for component template structure. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `      <button class="btn-secondary">{{ s.cta }}</button>` | Declares a core TypeScript structure used by this module. |
| 21 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 22 | `` | Blank line used to separate logical blocks for readability. |
| 23 | `    <img [src]="s.image" alt="" />` | HTML tag opening/closing markup for component template structure. |
| 24 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 25 | `</section>` | HTML tag opening/closing markup for component template structure. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `<section class="pricing">` | Declares a core TypeScript structure used by this module. |
| 28 | `  <h2>Flexible Membership Options</h2>` | HTML tag opening/closing markup for component template structure. |
| 29 | `  <p>Choose a plan that fits your lifestyle and goals</p>` | HTML tag opening/closing markup for component template structure. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `  <div class="plans">` | Declares a core TypeScript structure used by this module. |
| 32 | `    <div class="plan" *ngFor="let p of plans" [class.highlight]="p.featured">` | Declares a core TypeScript structure used by this module. |
| 33 | `      <h3>{{ p.name }}</h3>` | HTML tag opening/closing markup for component template structure. |
| 34 | `      <h4>{{ p.price }}</h4>` | HTML tag opening/closing markup for component template structure. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `      <ul>` | HTML tag opening/closing markup for component template structure. |
| 37 | `        <li *ngFor="let f of p.features">{{ f }}</li>` | HTML tag opening/closing markup for component template structure. |
| 38 | `      </ul>` | HTML tag opening/closing markup for component template structure. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `      <button class="btn-primary">Select Plan</button>` | Declares a core TypeScript structure used by this module. |
| 41 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 42 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 43 | `</section>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.