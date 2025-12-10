import { Routes } from "@angular/router";
import { UserDashboardLayoutComponent } from "./layout/user-dashboard-layout.component";
import { UserDashboardHomeComponent } from "./pages/home/user-dashboard-home.component";
import { UserMembershipManagementComponent } from "./pages/membership-management/user-membership-management.component";
import { UserBookingsComponent } from "./pages/bookings/user-bookings.component";

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
        component: UserBookingsComponent
      }
    ]
  }
];
