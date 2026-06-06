# Explanation: `src/app/modules/admin/components/admin-reporting/admin-reporting.component.html`

## File Overview
- **Relative path:** `src/app/modules/admin/components/admin-reporting/admin-reporting.component.html`
- **Total lines:** `181`
- **Non-empty lines:** `168`
- **Import statements:** `0`
- **Class-like declarations found:** `60`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="reporting-page">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="hero-card shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <div>` | HTML tag opening/closing markup for component template structure. |
| 4 | `      <h4 class="mb-1">Reporting</h4>` | Declares a core TypeScript structure used by this module. |
| 5 | `      <p class="text-muted mb-0">Summary KPIs, revenue analytics, and class performance.</p>` | Declares a core TypeScript structure used by this module. |
| 6 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 7 | `    <button class="btn btn-sm btn-outline-primary" (click)="loadSummaryKpis(); loadRevenueAnalytics(); loadClassPerformance()">` | Declares a core TypeScript structure used by this module. |
| 8 | `      Refresh` | Core implementation line contributing to the file behavior. |
| 9 | `    </button>` | HTML tag opening/closing markup for component template structure. |
| 10 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `  <div *ngIf="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `  <div class="kpi-grid mt-3">` | Declares a core TypeScript structure used by this module. |
| 15 | `    <div class="kpi-card">` | Declares a core TypeScript structure used by this module. |
| 16 | `      <div class="kpi-label">Total Revenue</div>` | Declares a core TypeScript structure used by this module. |
| 17 | `      <div class="kpi-value" *ngIf="!loadingKpis; else kpiLoading">` | Declares a core TypeScript structure used by this module. |
| 18 | `        {{ summaryKpis.totalRevenue \| number }} VND` | Core implementation line contributing to the file behavior. |
| 19 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 20 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 21 | `    <div class="kpi-card">` | Declares a core TypeScript structure used by this module. |
| 22 | `      <div class="kpi-label">Active Members</div>` | Declares a core TypeScript structure used by this module. |
| 23 | `      <div class="kpi-value" *ngIf="!loadingKpis; else kpiLoading">` | Declares a core TypeScript structure used by this module. |
| 24 | `        {{ summaryKpis.activeMembers \| number }}` | Core implementation line contributing to the file behavior. |
| 25 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 26 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `    <div class="kpi-card">` | Declares a core TypeScript structure used by this module. |
| 28 | `      <div class="kpi-label">Total Trainers</div>` | Declares a core TypeScript structure used by this module. |
| 29 | `      <div class="kpi-value" *ngIf="!loadingKpis; else kpiLoading">` | Declares a core TypeScript structure used by this module. |
| 30 | `        {{ summaryKpis.totalTrainers \| number }}` | Core implementation line contributing to the file behavior. |
| 31 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 32 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 33 | `    <div class="kpi-card">` | Declares a core TypeScript structure used by this module. |
| 34 | `      <div class="kpi-label">Today's Class Bookings</div>` | Declares a core TypeScript structure used by this module. |
| 35 | `      <div class="kpi-value" *ngIf="!loadingKpis; else kpiLoading">` | Declares a core TypeScript structure used by this module. |
| 36 | `        {{ summaryKpis.todaysClassBookings \| number }}` | Core implementation line contributing to the file behavior. |
| 37 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 38 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 39 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 40 | `` | Blank line used to separate logical blocks for readability. |
| 41 | `  <ng-template #kpiLoading>` | HTML tag opening/closing markup for component template structure. |
| 42 | `    <div class="text-muted">Loading...</div>` | Declares a core TypeScript structure used by this module. |
| 43 | `  </ng-template>` | HTML tag opening/closing markup for component template structure. |
| 44 | `` | Blank line used to separate logical blocks for readability. |
| 45 | `  <div class="section-card mt-4">` | Declares a core TypeScript structure used by this module. |
| 46 | `    <div class="section-header">` | Declares a core TypeScript structure used by this module. |
| 47 | `      <h5 class="mb-0">Revenue Analytics</h5>` | Declares a core TypeScript structure used by this module. |
| 48 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 49 | `` | Blank line used to separate logical blocks for readability. |
| 50 | `    <div class="filters-grid">` | Declares a core TypeScript structure used by this module. |
| 51 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 52 | `        <label class="form-label small mb-1">Start Date</label>` | Declares a core TypeScript structure used by this module. |
| 53 | `        <input class="form-control form-control-sm" type="date" [(ngModel)]="revenueFilters.startDate" />` | Declares a core TypeScript structure used by this module. |
| 54 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 55 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 56 | `        <label class="form-label small mb-1">End Date</label>` | Declares a core TypeScript structure used by this module. |
| 57 | `        <input class="form-control form-control-sm" type="date" [(ngModel)]="revenueFilters.endDate" />` | Declares a core TypeScript structure used by this module. |
| 58 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 59 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 60 | `        <label class="form-label small mb-1">Interval</label>` | Declares a core TypeScript structure used by this module. |
| 61 | `        <select class="form-select form-select-sm" [(ngModel)]="revenueFilters.interval">` | Declares a core TypeScript structure used by this module. |
| 62 | `          <option value="day">Day</option>` | HTML tag opening/closing markup for component template structure. |
| 63 | `          <option value="week">Week</option>` | HTML tag opening/closing markup for component template structure. |
| 64 | `          <option value="month">Month</option>` | HTML tag opening/closing markup for component template structure. |
| 65 | `        </select>` | HTML tag opening/closing markup for component template structure. |
| 66 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `      <div class="d-flex align-items-end">` | Declares a core TypeScript structure used by this module. |
| 68 | `        <button class="btn btn-sm btn-primary w-100" (click)="loadRevenueAnalytics()">Apply</button>` | Declares a core TypeScript structure used by this module. |
| 69 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 70 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `    <div *ngIf="loadingRevenue" class="text-muted mt-2">Loading revenue analytics...</div>` | Declares a core TypeScript structure used by this module. |
| 73 | `    <div *ngIf="!loadingRevenue && revenueAnalytics.buckets.length === 0" class="text-muted mt-2">` | Declares a core TypeScript structure used by this module. |
| 74 | `      No revenue analytics data in this date range.` | Core implementation line contributing to the file behavior. |
| 75 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `    <div` | Core implementation line contributing to the file behavior. |
| 78 | `      class="revenue-chart-container mt-3"` | Declares a core TypeScript structure used by this module. |
| 79 | `      *ngIf="!loadingRevenue && revenueAnalytics.buckets.length > 0"` | Block comment content (documentation for nearby code). |
| 80 | `    >` | Core implementation line contributing to the file behavior. |
| 81 | `      <canvas #revenueChartCanvas aria-label="Revenue analytics chart"></canvas>` | HTML tag opening/closing markup for component template structure. |
| 82 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 83 | `` | Blank line used to separate logical blocks for readability. |
| 84 | `    <div class="table-responsive mt-3" *ngIf="!loadingRevenue && revenueAnalytics.buckets.length > 0">` | Declares a core TypeScript structure used by this module. |
| 85 | `      <table class="table table-striped align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 86 | `        <thead>` | HTML tag opening/closing markup for component template structure. |
| 87 | `          <tr>` | HTML tag opening/closing markup for component template structure. |
| 88 | `            <th>Bucket</th>` | HTML tag opening/closing markup for component template structure. |
| 89 | `            <th>Total Revenue</th>` | HTML tag opening/closing markup for component template structure. |
| 90 | `            <th>Membership Revenue</th>` | HTML tag opening/closing markup for component template structure. |
| 91 | `            <th>Class Booking Revenue</th>` | HTML tag opening/closing markup for component template structure. |
| 92 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 93 | `        </thead>` | HTML tag opening/closing markup for component template structure. |
| 94 | `        <tbody>` | HTML tag opening/closing markup for component template structure. |
| 95 | `          <tr *ngFor="let bucket of revenueAnalytics.buckets">` | HTML tag opening/closing markup for component template structure. |
| 96 | `            <td>{{ bucket.bucket \| date:'yyyy-MM-dd' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 97 | `            <td>{{ bucket.totalRevenue \| number }} VND</td>` | HTML tag opening/closing markup for component template structure. |
| 98 | `            <td>{{ bucket.membershipRevenue \| number }} VND</td>` | HTML tag opening/closing markup for component template structure. |
| 99 | `            <td>{{ bucket.classBookingRevenue \| number }} VND</td>` | HTML tag opening/closing markup for component template structure. |
| 100 | `          </tr>` | HTML tag opening/closing markup for component template structure. |
| 101 | `        </tbody>` | HTML tag opening/closing markup for component template structure. |
| 102 | `      </table>` | HTML tag opening/closing markup for component template structure. |
| 103 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 104 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 105 | `` | Blank line used to separate logical blocks for readability. |
| 106 | `  <div class="section-card mt-4">` | Declares a core TypeScript structure used by this module. |
| 107 | `    <div class="section-header">` | Declares a core TypeScript structure used by this module. |
| 108 | `      <h5 class="mb-0">Class Performance</h5>` | Declares a core TypeScript structure used by this module. |
| 109 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 110 | `` | Blank line used to separate logical blocks for readability. |
| 111 | `    <div class="filters-grid performance-filters">` | Declares a core TypeScript structure used by this module. |
| 112 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 113 | `        <label class="form-label small mb-1">Start Date</label>` | Declares a core TypeScript structure used by this module. |
| 114 | `        <input class="form-control form-control-sm" type="date" [(ngModel)]="performanceFilters.startDate" />` | Declares a core TypeScript structure used by this module. |
| 115 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 116 | `      <div>` | HTML tag opening/closing markup for component template structure. |
| 117 | `        <label class="form-label small mb-1">End Date</label>` | Declares a core TypeScript structure used by this module. |
| 118 | `        <input class="form-control form-control-sm" type="date" [(ngModel)]="performanceFilters.endDate" />` | Declares a core TypeScript structure used by this module. |
| 119 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 120 | `      <div class="d-flex align-items-end">` | Declares a core TypeScript structure used by this module. |
| 121 | `        <button class="btn btn-sm btn-primary w-100" (click)="loadClassPerformance()">Apply</button>` | Declares a core TypeScript structure used by this module. |
| 122 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 123 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 124 | `` | Blank line used to separate logical blocks for readability. |
| 125 | `    <div *ngIf="loadingClassPerformance" class="text-muted mt-2">Loading class performance...</div>` | Declares a core TypeScript structure used by this module. |
| 126 | `` | Blank line used to separate logical blocks for readability. |
| 127 | `    <div class="row g-3 mt-1" *ngIf="!loadingClassPerformance">` | Declares a core TypeScript structure used by this module. |
| 128 | `      <div class="col-lg-6">` | Declares a core TypeScript structure used by this module. |
| 129 | `        <div class="subsection-card">` | Declares a core TypeScript structure used by this module. |
| 130 | `          <h6>Top Booked Classes</h6>` | HTML tag opening/closing markup for component template structure. |
| 131 | `          <div *ngIf="classPerformance.topBookedClasses.length === 0" class="text-muted small">` | Declares a core TypeScript structure used by this module. |
| 132 | `            No class booking data.` | Declares a core TypeScript structure used by this module. |
| 133 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 134 | `          <div class="table-responsive" *ngIf="classPerformance.topBookedClasses.length > 0">` | Declares a core TypeScript structure used by this module. |
| 135 | `            <table class="table table-sm align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 136 | `              <thead>` | HTML tag opening/closing markup for component template structure. |
| 137 | `                <tr>` | HTML tag opening/closing markup for component template structure. |
| 138 | `                  <th>Class</th>` | HTML tag opening/closing markup for component template structure. |
| 139 | `                  <th>Category</th>` | HTML tag opening/closing markup for component template structure. |
| 140 | `                  <th>Bookings</th>` | HTML tag opening/closing markup for component template structure. |
| 141 | `                </tr>` | HTML tag opening/closing markup for component template structure. |
| 142 | `              </thead>` | HTML tag opening/closing markup for component template structure. |
| 143 | `              <tbody>` | HTML tag opening/closing markup for component template structure. |
| 144 | `                <tr *ngFor="let item of classPerformance.topBookedClasses">` | HTML tag opening/closing markup for component template structure. |
| 145 | `                  <td>{{ item.className }}</td>` | HTML tag opening/closing markup for component template structure. |
| 146 | `                  <td>{{ item.category \|\| '-' }}</td>` | HTML tag opening/closing markup for component template structure. |
| 147 | `                  <td>{{ item.bookingCount \| number }}</td>` | HTML tag opening/closing markup for component template structure. |
| 148 | `                </tr>` | HTML tag opening/closing markup for component template structure. |
| 149 | `              </tbody>` | HTML tag opening/closing markup for component template structure. |
| 150 | `            </table>` | HTML tag opening/closing markup for component template structure. |
| 151 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 152 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 153 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 154 | `` | Blank line used to separate logical blocks for readability. |
| 155 | `      <div class="col-lg-6">` | Declares a core TypeScript structure used by this module. |
| 156 | `        <div class="subsection-card">` | Declares a core TypeScript structure used by this module. |
| 157 | `          <h6>Revenue by Category</h6>` | HTML tag opening/closing markup for component template structure. |
| 158 | `          <div *ngIf="classPerformance.revenueByCategory.length === 0" class="text-muted small">` | Declares a core TypeScript structure used by this module. |
| 159 | `            No category revenue data.` | Core implementation line contributing to the file behavior. |
| 160 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 161 | `          <div class="table-responsive" *ngIf="classPerformance.revenueByCategory.length > 0">` | Declares a core TypeScript structure used by this module. |
| 162 | `            <table class="table table-sm align-middle mb-0">` | Declares a core TypeScript structure used by this module. |
| 163 | `              <thead>` | HTML tag opening/closing markup for component template structure. |
| 164 | `                <tr>` | HTML tag opening/closing markup for component template structure. |
| 165 | `                  <th>Category</th>` | HTML tag opening/closing markup for component template structure. |
| 166 | `                  <th>Total Revenue</th>` | HTML tag opening/closing markup for component template structure. |
| 167 | `                </tr>` | HTML tag opening/closing markup for component template structure. |
| 168 | `              </thead>` | HTML tag opening/closing markup for component template structure. |
| 169 | `              <tbody>` | HTML tag opening/closing markup for component template structure. |
| 170 | `                <tr *ngFor="let row of classPerformance.revenueByCategory">` | HTML tag opening/closing markup for component template structure. |
| 171 | `                  <td>{{ row.category }}</td>` | HTML tag opening/closing markup for component template structure. |
| 172 | `                  <td>{{ row.totalRevenue \| number }} VND</td>` | HTML tag opening/closing markup for component template structure. |
| 173 | `                </tr>` | HTML tag opening/closing markup for component template structure. |
| 174 | `              </tbody>` | HTML tag opening/closing markup for component template structure. |
| 175 | `            </table>` | HTML tag opening/closing markup for component template structure. |
| 176 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 177 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 178 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 179 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 180 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 181 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.