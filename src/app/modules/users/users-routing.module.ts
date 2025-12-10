import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';


const routes: Routes = [
  // {path:"dashboard", component: UserDashboardComponent},
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/user-dashboard.routes')
        .then(m => m.USER_DASHBOARD_ROUTES)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
