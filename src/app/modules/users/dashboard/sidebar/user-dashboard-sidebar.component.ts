import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-dashboard-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.css']
})
export class UserDashboardSidebarComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
