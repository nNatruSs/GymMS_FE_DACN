import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import {
  AdminReportingService,
  ClassPerformanceResult,
  ReportingSummaryKpis,
  RevenueAnalyticsResult,
} from '../../services/admin-reporting.service';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

@Component({
  selector: 'app-admin-reporting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-reporting.component.html',
  styleUrls: ['./admin-reporting.component.css'],
})
export class AdminReportingComponent implements AfterViewInit, OnDestroy {
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

  @ViewChild('revenueChartCanvas')
  private revenueChartCanvas?: ElementRef<HTMLCanvasElement>;

  private revenueChart: Chart | null = null;
  private revenueChartReady = false;

  ngOnInit(): void {
    this.initializeDefaultDateRange();
    this.loadSummaryKpis();
    this.loadRevenueAnalytics();
    this.loadClassPerformance();
  }

  ngAfterViewInit(): void {
    this.revenueChartReady = true;
    this.renderRevenueChart();
  }

  ngOnDestroy(): void {
    this.destroyRevenueChart();
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
    this.destroyRevenueChart();
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
          this.renderRevenueChart();
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

  private renderRevenueChart(): void {
    if (!this.revenueChartReady || this.loadingRevenue) return;

    if (this.revenueAnalytics.buckets.length === 0) {
      this.destroyRevenueChart();
      return;
    }

    const canvas = this.revenueChartCanvas?.nativeElement;
    if (!canvas) {
      setTimeout(() => this.renderRevenueChart(), 0);
      return;
    }

    const config = this.buildRevenueChartConfig();
    if (this.revenueChart) {
      this.revenueChart.data = config.data!;
      this.revenueChart.options = config.options!;
      this.revenueChart.update();
      return;
    }

    this.revenueChart = new Chart(canvas, config);
  }

  private buildRevenueChartConfig(): ChartConfiguration<'bar'> {
    const labels = this.revenueAnalytics.buckets.map((bucket) =>
      this.formatBucketLabel(bucket.bucket, this.revenueAnalytics.interval)
    );

    return {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Membership Revenue',
            data: this.revenueAnalytics.buckets.map((bucket) => bucket.membershipRevenue),
            backgroundColor: 'rgba(59, 130, 246, 0.85)',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 1,
            stack: 'revenue',
          },
          {
            label: 'Class Booking Revenue',
            data: this.revenueAnalytics.buckets.map((bucket) => bucket.classBookingRevenue),
            backgroundColor: 'rgba(16, 185, 129, 0.85)',
            borderColor: 'rgb(16, 185, 129)',
            borderWidth: 1,
            stack: 'revenue',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = Number(context.parsed.y ?? 0);
                return `${context.dataset.label}: ${value.toLocaleString()} VND`;
              },
              footer: (items) => {
                const total = items.reduce(
                  (sum, item) => sum + Number(item.parsed.y ?? 0),
                  0
                );
                return `Total: ${total.toLocaleString()} VND`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              callback: (value) => `${Number(value).toLocaleString()} VND`,
            },
          },
        },
      },
    };
  }

  private formatBucketLabel(bucket: string, interval: string): string {
    const date = new Date(bucket);
    if (Number.isNaN(date.getTime())) return bucket;

    if (interval === 'month') {
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
    }

    if (interval === 'week') {
      return `Week of ${date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
    }

    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  private destroyRevenueChart(): void {
    this.revenueChart?.destroy();
    this.revenueChart = null;
  }
}
