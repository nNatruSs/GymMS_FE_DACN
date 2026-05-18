import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-trainer-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trainer-sidebar.component.html',
  styleUrls: ['./trainer-sidebar.component.css']
})
export class TrainerSidebarComponent {
  collapsed = false;
  unreadMessages = 0;
  private refreshSub?: Subscription;

  constructor(private trainerService: TrainerService) {}

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
    this.trainerService.listConversations().subscribe({
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
