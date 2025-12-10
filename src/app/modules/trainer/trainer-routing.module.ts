import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';

const routes: Routes = [
  {path:"dashboard", component: TrainerDashboardComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
