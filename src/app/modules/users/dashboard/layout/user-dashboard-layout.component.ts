import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDashboardSidebarComponent } from '../sidebar/user-dashboard-sidebar.component';

@Component({
  selector: 'app-user-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, UserDashboardSidebarComponent],
  templateUrl: './user-dashboard-layout.component.html',
  styleUrl: './user-dashboard-layout.component.css'
})
export class UserDashboardLayoutComponent {

}
