import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AdminReportingService,
  ClassPerformanceResult,
  ReportingSummaryKpis,
  RevenueAnalyticsResult,
} from '../../services/admin-reporting.service';

@Component({
  selector: 'app-admin-reporting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-reporting.component.html',
  styleUrls: ['./admin-reporting.component.css'],
})
export class AdminReportingComponent {
  private reportingService = inject(AdminReportingService);

  loadingKpis = true;
  loadingRevenue = true;
  loadingClassPerformance = true;

  errorMessage = '';

  summaryKpis: ReportingSummaryKpis = {
    totalRevenue: 0,
    activeMembers: 0,
    totalTrainers: 0,
    todaysClassBookings: 0,
  };

  revenueFilters = {
    startDate: '',
    endDate: '',
    interval: 'month' as 'day' | 'week' | 'month',
  };

  performanceFilters = {
    startDate: '',
    endDate: '',
  };

  revenueAnalytics: RevenueAnalyticsResult = {
    interval: 'month',
    startDate: '',
    endDate: '',
    buckets: [],
  };

  classPerformance: ClassPerformanceResult = {
    startDate: '',
    endDate: '',
    topBookedClasses: [],
    revenueByCategory: [],
  };

  ngOnInit(): void {
    this.initializeDefaultDateRange();
    this.loadSummaryKpis();
    this.loadRevenueAnalytics();
    this.loadClassPerformance();
  }

  private initializeDefaultDateRange(): void {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const end = new Date(now.getFullYear(), 11, 31);
    const startDate = start.toISOString().slice(0, 10);
    const endDate = end.toISOString().slice(0, 10);

    this.revenueFilters.startDate = startDate;
    this.revenueFilters.endDate = endDate;
    this.performanceFilters.startDate = startDate;
    this.performanceFilters.endDate = endDate;
  }

  loadSummaryKpis(): void {
    this.loadingKpis = true;
    this.reportingService.getSummaryKpis().subscribe({
      next: (kpis) => {
        this.summaryKpis = {
          totalRevenue: Number(kpis?.totalRevenue ?? 0),
          activeMembers: Number(kpis?.activeMembers ?? 0),
          totalTrainers: Number(kpis?.totalTrainers ?? 0),
          todaysClassBookings: Number(kpis?.todaysClassBookings ?? 0),
        };
        this.loadingKpis = false;
      },
      error: () => {
        this.loadingKpis = false;
        this.errorMessage = 'Could not load reporting summary KPIs.';
      },
    });
  }

  loadRevenueAnalytics(): void {
    if (!this.revenueFilters.startDate || !this.revenueFilters.endDate) return;
    this.loadingRevenue = true;
    this.errorMessage = '';
    this.reportingService
      .getRevenueAnalytics({
        startDate: this.revenueFilters.startDate,
        endDate: this.revenueFilters.endDate,
        interval: this.revenueFilters.interval,
      })
      .subscribe({
        next: (result) => {
          this.revenueAnalytics = result;
          this.loadingRevenue = false;
        },
        error: () => {
          this.loadingRevenue = false;
          this.errorMessage = 'Could not load revenue analytics.';
        },
      });
  }

  loadClassPerformance(): void {
    if (!this.performanceFilters.startDate || !this.performanceFilters.endDate) return;
    this.loadingClassPerformance = true;
    this.errorMessage = '';
    this.reportingService
      .getClassPerformance({
        startDate: this.performanceFilters.startDate,
        endDate: this.performanceFilters.endDate,
      })
      .subscribe({
        next: (result) => {
          this.classPerformance = result;
          this.loadingClassPerformance = false;
        },
        error: () => {
          this.loadingClassPerformance = false;
          this.errorMessage = 'Could not load class performance report.';
        },
      });
  }
}
