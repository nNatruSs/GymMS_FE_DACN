import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminMembershipManagementComponent } from './components/admin-membership-management/admin-membership-management.component';
import { AdminUserManagementComponent } from './components/admin-user-management/admin-user-management.component';
import { AdminRoleManagementComponent } from './components/admin-role-management/admin-role-management.component';
import { AdminClassScheduleManagementComponent } from './components/admin-class-schedule-management/admin-class-schedule-management.component';
import { AdminReportingComponent } from './components/admin-reporting/admin-reporting.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'users', component: AdminUserManagementComponent },
      { path: 'roles', component: AdminRoleManagementComponent },
      { path: 'class-schedules', component: AdminClassScheduleManagementComponent },
      { path: 'memberships', component: AdminMembershipManagementComponent },
      { path: 'reporting', component: AdminReportingComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
