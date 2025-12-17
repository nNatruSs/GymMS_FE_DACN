import { Routes } from "@angular/router";

import { UserDashboardLayoutComponent } from "./layout/user-dashboard-layout.component";
import { UserDashboardHomeComponent } from "./pages/home/user-dashboard-home.component";
import { UserMembershipManagementComponent } from "./pages/membership-management/user-membership-management.component";

import { UserBookingsComponent } from './pages/bookings/user-bookings.component';
import { BookingHistoryComponent } from './pages/bookings/history/booking-history.component';
import { BookingCalendarComponent } from './pages/bookings/calendar/booking-calendar.component';
import { BookingBookComponent } from "./pages/bookings/book/booking-book.component";

export const USER_DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: UserDashboardLayoutComponent,
    children: [
      {
        path: '',
        component: UserDashboardHomeComponent
      },
      {
        path: 'membership-management',
        component: UserMembershipManagementComponent
      },
      {
        path: 'bookings',
        component: UserBookingsComponent,
        children: [
        { path: 'history', component: BookingHistoryComponent },
        { path: 'calendar', component: BookingCalendarComponent },
        { path: 'book', component: BookingBookComponent },
        { path: '', redirectTo: 'calendar', pathMatch: 'full' }
        ]
      }
    ]
  }
];
