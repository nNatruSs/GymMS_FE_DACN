# Explanation: `src/app/modules/trainer/components/trainer-my-clients/trainer-my-clients.component.html`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-my-clients/trainer-my-clients.component.html`
- **Total lines:** `75`
- **Non-empty lines:** `69`
- **Import statements:** `0`
- **Class-like declarations found:** `20`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <h4 class="fw-semibold mb-2">My Clients</h4>` | Declares a core TypeScript structure used by this module. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `    <div *ngIf="loading" class="text-muted">Loading clients...</div>` | Declares a core TypeScript structure used by this module. |
| 6 | `    <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 7 | `    <div *ngIf="actionMessage" class="alert alert-success">{{ actionMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 8 | `` | Blank line used to separate logical blocks for readability. |
| 9 | `    <div *ngIf="!loading && !errorMessage && clients.length === 0" class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 10 | `      You have no active clients yet.` | Core implementation line contributing to the file behavior. |
| 11 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `    <div class="table-responsive" *ngIf="!loading && clients.length > 0">` | Declares a core TypeScript structure used by this module. |
| 14 | `      <table class="table align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 15 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 16 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 17 | `            <th>Client</th>` | HTML tag opening/closing markup for component template structure. |
| 18 | `            <th>Email</th>` | HTML tag opening/closing markup for component template structure. |
| 19 | `            <th>Linked At</th>` | HTML tag opening/closing markup for component template structure. |
| 20 | `            <th>Status</th>` | HTML tag opening/closing markup for component template structure. |
| 21 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 22 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 23 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 24 | `          <tr *ngFor="let client of clients">` | HTML tag opening/closing markup for component template structure. |
| 25 | `            <td>{{ client.member.firstName }} {{ client.member.lastName }}</td>` | HTML tag opening/closing markup for component template structure. |
| 26 | `            <td>{{ client.member.email }}</td>` | HTML tag opening/closing markup for component template structure. |
| 27 | `            <td>{{ client.linkedAt \| date:'yyyy-MM-dd HH:mm' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 28 | `            <td>` | HTML tag opening/closing markup for component template structure. |
| 29 | `              <span class="badge bg-success">{{ client.status }}</span>` | Declares a core TypeScript structure used by this module. |
| 30 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 31 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 32 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 33 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 34 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `    <hr class="my-4" />` | Declares a core TypeScript structure used by this module. |
| 37 | `` | Blank line used to separate logical blocks for readability. |
| 38 | `    <h5 class="fw-semibold mb-2">Booked Sessions</h5>` | Declares a core TypeScript structure used by this module. |
| 39 | `    <div *ngIf="loadingBookings" class="text-muted">Loading booked sessions...</div>` | Declares a core TypeScript structure used by this module. |
| 40 | `    <div *ngIf="!loadingBookings && bookings.length === 0" class="text-muted">` | Declares a core TypeScript structure used by this module. |
| 41 | `      No booked sessions found.` | Core implementation line contributing to the file behavior. |
| 42 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `    <div class="table-responsive" *ngIf="!loadingBookings && bookings.length > 0">` | Declares a core TypeScript structure used by this module. |
| 45 | `      <table class="table align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 46 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 47 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 48 | `            <th>Member</th>` | HTML tag opening/closing markup for component template structure. |
| 49 | `            <th>Start</th>` | HTML tag opening/closing markup for component template structure. |
| 50 | `            <th>End</th>` | HTML tag opening/closing markup for component template structure. |
| 51 | `            <th>Status</th>` | HTML tag opening/closing markup for component template structure. |
| 52 | `            <th class="text-end">Action</th>` | Declares a core TypeScript structure used by this module. |
| 53 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 54 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 55 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 56 | `          <tr *ngFor="let booking of bookings">` | HTML tag opening/closing markup for component template structure. |
| 57 | `            <td>{{ booking.member?.firstName }} {{ booking.member?.lastName }}</td>` | HTML tag opening/closing markup for component template structure. |
| 58 | `            <td>{{ booking.startAt \| date:'yyyy-MM-dd HH:mm' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 59 | `            <td>{{ booking.endAt \| date:'yyyy-MM-dd HH:mm' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 60 | `            <td><span class="badge bg-secondary">{{ booking.status }}</span></td>` | Declares a core TypeScript structure used by this module. |
| 61 | `            <td class="text-end">` | Declares a core TypeScript structure used by this module. |
| 62 | `              <button` | Core implementation line contributing to the file behavior. |
| 63 | `                class="btn btn-sm btn-outline-primary"` | Declares a core TypeScript structure used by this module. |
| 64 | `                [disabled]="!canCompleteBooking(booking) \|\| completingBookingId === booking.id"` | Core implementation line contributing to the file behavior. |
| 65 | `                (click)="completeSession(booking)"` | Core implementation line contributing to the file behavior. |
| 66 | `              >` | Core implementation line contributing to the file behavior. |
| 67 | `                {{ completingBookingId === booking.id ? 'Completing...' : 'Complete Session' }}` | Core implementation line contributing to the file behavior. |
| 68 | `              </button>` | HTML tag opening/closing markup for component template structure. |
| 69 | `            </td>` | HTML tag opening/closing markup for component template structure. |
| 70 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 71 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 72 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 73 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 74 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 75 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.