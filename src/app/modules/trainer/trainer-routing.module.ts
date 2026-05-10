import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';
import { TrainerMyClientsComponent } from './components/trainer-my-clients/trainer-my-clients.component';
import { TrainerMessagesComponent } from './components/trainer-messages/trainer-messages.component';
import { TrainerScheduleComponent } from './components/trainer-schedule/trainer-schedule.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TrainerDashboardComponent,
    children: [
      { path: '', redirectTo: 'schedule', pathMatch: 'full' },
      { path: 'schedule', component: TrainerScheduleComponent },
      { path: 'my-clients', component: TrainerMyClientsComponent },
      { path: 'messages', component: TrainerMessagesComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
