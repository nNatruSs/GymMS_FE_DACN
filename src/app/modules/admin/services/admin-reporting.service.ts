import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface ReportingSummaryKpis {
  totalRevenue: number;
  activeMembers: number;
  totalTrainers: number;
  todaysClassBookings: number;
}

export interface RevenueBucket {
  bucket: string;
  totalRevenue: number;
  membershipRevenue: number;
  classBookingRevenue: number;
}

export interface RevenueAnalyticsResult {
  interval: 'day' | 'week' | 'month' | string;
  startDate: string;
  endDate: string;
  buckets: RevenueBucket[];
}

export interface ClassPerformanceClassItem {
  classId: string;
  className: string;
  category: string;
  bookingCount: number;
}

export interface ClassPerformanceCategoryRevenueItem {
  category: string;
  totalRevenue: number;
}

export interface ClassPerformanceResult {
  startDate: string;
  endDate: string;
  topBookedClasses: ClassPerformanceClassItem[];
  revenueByCategory: ClassPerformanceCategoryRevenueItem[];
}

@Injectable({ providedIn: 'root' })
export class AdminReportingService {
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  private unwrapData<T>(response: any): T {
    return (response?.data ?? response) as T;
  }

  getSummaryKpis() {
    return this.http
      .get<any>(`${BASE_URL}/reporting/summary-kpis`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<ReportingSummaryKpis>(res)));
  }

  getRevenueAnalytics(params: {
    startDate: string;
    endDate: string;
    interval?: 'day' | 'week' | 'month' | string;
  }) {
    const query = new URLSearchParams();
    query.set('startDate', params.startDate);
    query.set('endDate', params.endDate);
    query.set('interval', params.interval ?? 'month');

    return this.http
      .get<any>(`${BASE_URL}/reporting/revenue-analytics?${query.toString()}`, {
        headers: this.authHeaders(),
      })
      .pipe(
        map((res) => this.unwrapData<RevenueAnalyticsResult>(res)),
        map((data) => ({
          ...data,
          buckets: Array.isArray(data?.buckets) ? data.buckets : [],
        }))
      );
  }

  getClassPerformance(params: { startDate: string; endDate: string }) {
    const query = new URLSearchParams();
    query.set('startDate', params.startDate);
    query.set('endDate', params.endDate);

    return this.http
      .get<any>(`${BASE_URL}/reporting/class-performance?${query.toString()}`, {
        headers: this.authHeaders(),
      })
      .pipe(
        map((res) => this.unwrapData<ClassPerformanceResult>(res)),
        map((data) => ({
          ...data,
          topBookedClasses: Array.isArray(data?.topBookedClasses) ? data.topBookedClasses : [],
          revenueByCategory: Array.isArray(data?.revenueByCategory) ? data.revenueByCategory : [],
        }))
      );
  }
}
