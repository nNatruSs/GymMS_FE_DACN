# Explanation: `src/app/modules/admin/services/admin-reporting.service.ts`

## File Overview
- **Relative path:** `src/app/modules/admin/services/admin-reporting.service.ts`
- **Total lines:** `109`
- **Non-empty lines:** `95`
- **Import statements:** `5`
- **Class-like declarations found:** `2`
- **Function/method-like signatures found (approx):** `3`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { HttpClient, HttpHeaders } from '@angular/common/http';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Injectable } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { map } from 'rxjs/operators';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { StorageService } from '../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `export interface ReportingSummaryKpis {` | Exports symbols so other files can import this logic. |
| 8 | `  totalRevenue: number;` | CSS declaration assigning a style property value. |
| 9 | `  activeMembers: number;` | CSS declaration assigning a style property value. |
| 10 | `  totalTrainers: number;` | CSS declaration assigning a style property value. |
| 11 | `  todaysClassBookings: number;` | CSS declaration assigning a style property value. |
| 12 | `}` | Closes the current code/style block scope. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `export interface RevenueBucket {` | Exports symbols so other files can import this logic. |
| 15 | `  bucket: string;` | CSS declaration assigning a style property value. |
| 16 | `  totalRevenue: number;` | CSS declaration assigning a style property value. |
| 17 | `  membershipRevenue: number;` | CSS declaration assigning a style property value. |
| 18 | `  classBookingRevenue: number;` | CSS declaration assigning a style property value. |
| 19 | `}` | Closes the current code/style block scope. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `export interface RevenueAnalyticsResult {` | Exports symbols so other files can import this logic. |
| 22 | `  interval: 'day' \| 'week' \| 'month' \| string;` | CSS declaration assigning a style property value. |
| 23 | `  startDate: string;` | CSS declaration assigning a style property value. |
| 24 | `  endDate: string;` | CSS declaration assigning a style property value. |
| 25 | `  buckets: RevenueBucket[];` | CSS declaration assigning a style property value. |
| 26 | `}` | Closes the current code/style block scope. |
| 27 | `` | Blank line used to separate logical blocks for readability. |
| 28 | `export interface ClassPerformanceClassItem {` | Exports symbols so other files can import this logic. |
| 29 | `  classId: string;` | CSS declaration assigning a style property value. |
| 30 | `  className: string;` | CSS declaration assigning a style property value. |
| 31 | `  category: string;` | CSS declaration assigning a style property value. |
| 32 | `  bookingCount: number;` | CSS declaration assigning a style property value. |
| 33 | `}` | Closes the current code/style block scope. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `export interface ClassPerformanceCategoryRevenueItem {` | Exports symbols so other files can import this logic. |
| 36 | `  category: string;` | CSS declaration assigning a style property value. |
| 37 | `  totalRevenue: number;` | CSS declaration assigning a style property value. |
| 38 | `}` | Closes the current code/style block scope. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `export interface ClassPerformanceResult {` | Exports symbols so other files can import this logic. |
| 41 | `  startDate: string;` | CSS declaration assigning a style property value. |
| 42 | `  endDate: string;` | CSS declaration assigning a style property value. |
| 43 | `  topBookedClasses: ClassPerformanceClassItem[];` | CSS declaration assigning a style property value. |
| 44 | `  revenueByCategory: ClassPerformanceCategoryRevenueItem[];` | CSS declaration assigning a style property value. |
| 45 | `}` | Closes the current code/style block scope. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 48 | `export class AdminReportingService {` | Exports symbols so other files can import this logic. |
| 49 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 50 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 51 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 52 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 55 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 56 | `  }` | Closes the current code/style block scope. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 59 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 60 | `  }` | Closes the current code/style block scope. |
| 61 | `` | Blank line used to separate logical blocks for readability. |
| 62 | `  getSummaryKpis() {` | Begins a new code/style block scope. |
| 63 | `    return this.http` | Returns a value from the current function/method. |
| 64 | `      .get<any>(\`${BASE_URL}/reporting/summary-kpis\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 65 | `      .pipe(map((res) => this.unwrapData<ReportingSummaryKpis>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 66 | `  }` | Closes the current code/style block scope. |
| 67 | `` | Blank line used to separate logical blocks for readability. |
| 68 | `  getRevenueAnalytics(params: {` | Begins a new code/style block scope. |
| 69 | `    startDate: string;` | CSS declaration assigning a style property value. |
| 70 | `    endDate: string;` | CSS declaration assigning a style property value. |
| 71 | `    interval?: 'day' \| 'week' \| 'month' \| string;` | CSS declaration assigning a style property value. |
| 72 | `  }) {` | Begins a new code/style block scope. |
| 73 | `    const query = new URLSearchParams();` | Core implementation line contributing to the file behavior. |
| 74 | `    query.set('startDate', params.startDate);` | Core implementation line contributing to the file behavior. |
| 75 | `    query.set('endDate', params.endDate);` | Core implementation line contributing to the file behavior. |
| 76 | `    query.set('interval', params.interval ?? 'month');` | Core implementation line contributing to the file behavior. |
| 77 | `` | Blank line used to separate logical blocks for readability. |
| 78 | `    return this.http` | Returns a value from the current function/method. |
| 79 | `      .get<any>(\`${BASE_URL}/reporting/revenue-analytics?${query.toString()}\`, {` | Begins a new code/style block scope. |
| 80 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 81 | `      })` | Core implementation line contributing to the file behavior. |
| 82 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 83 | `        map((res) => this.unwrapData<RevenueAnalyticsResult>(res)),` | Core implementation line contributing to the file behavior. |
| 84 | `        map((data) => ({` | Begins a new code/style block scope. |
| 85 | `          ...data,` | Core implementation line contributing to the file behavior. |
| 86 | `          buckets: Array.isArray(data?.buckets) ? data.buckets : [],` | Core implementation line contributing to the file behavior. |
| 87 | `        }))` | Core implementation line contributing to the file behavior. |
| 88 | `      );` | Closes a function/method call statement. |
| 89 | `  }` | Closes the current code/style block scope. |
| 90 | `` | Blank line used to separate logical blocks for readability. |
| 91 | `  getClassPerformance(params: { startDate: string; endDate: string }) {` | Begins a new code/style block scope. |
| 92 | `    const query = new URLSearchParams();` | Core implementation line contributing to the file behavior. |
| 93 | `    query.set('startDate', params.startDate);` | Core implementation line contributing to the file behavior. |
| 94 | `    query.set('endDate', params.endDate);` | Core implementation line contributing to the file behavior. |
| 95 | `` | Blank line used to separate logical blocks for readability. |
| 96 | `    return this.http` | Returns a value from the current function/method. |
| 97 | `      .get<any>(\`${BASE_URL}/reporting/class-performance?${query.toString()}\`, {` | Declares a core TypeScript structure used by this module. |
| 98 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 99 | `      })` | Core implementation line contributing to the file behavior. |
| 100 | `      .pipe(` | Starts an RxJS operator pipeline to transform Observable values. |
| 101 | `        map((res) => this.unwrapData<ClassPerformanceResult>(res)),` | Core implementation line contributing to the file behavior. |
| 102 | `        map((data) => ({` | Begins a new code/style block scope. |
| 103 | `          ...data,` | Core implementation line contributing to the file behavior. |
| 104 | `          topBookedClasses: Array.isArray(data?.topBookedClasses) ? data.topBookedClasses : [],` | Core implementation line contributing to the file behavior. |
| 105 | `          revenueByCategory: Array.isArray(data?.revenueByCategory) ? data.revenueByCategory : [],` | Core implementation line contributing to the file behavior. |
| 106 | `        }))` | Core implementation line contributing to the file behavior. |
| 107 | `      );` | Closes a function/method call statement. |
| 108 | `  }` | Closes the current code/style block scope. |
| 109 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.