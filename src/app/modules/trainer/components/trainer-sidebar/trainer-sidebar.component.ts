import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trainer-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainer-sidebar.component.html',
  styleUrls: ['./trainer-sidebar.component.css']
})
export class TrainerSidebarComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
