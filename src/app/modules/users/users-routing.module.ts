import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  
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
