import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../services/messages.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-user-dashboard-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-dashboard-sidebar.component.html',
  styleUrls: ['./user-dashboard-sidebar.component.css']
})
export class UserDashboardSidebarComponent {
  collapsed = false;
  unreadMessages = 0;
  private refreshSub?: Subscription;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.loadUnreadMessages();
    this.refreshSub = interval(15000).subscribe(() => this.loadUnreadMessages());
  }

  ngOnDestroy(): void {
    this.refreshSub?.unsubscribe();
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  private loadUnreadMessages(): void {
    this.messagesService.listConversations().subscribe({
      next: (conversations) => {
        this.unreadMessages = (conversations ?? []).reduce(
          (sum, item) => sum + Number(item?.unreadCount ?? 0),
          0
        );
      },
      error: () => {
        this.unreadMessages = 0;
      },
    });
  }
}
