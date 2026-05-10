import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerClientLinkView, TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-my-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trainer-my-clients.component.html',
  styleUrl: './trainer-my-clients.component.css',
})
export class TrainerMyClientsComponent {
  loading = true;
  errorMessage: string | null = null;
  clients: TrainerClientLinkView[] = [];

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.trainerService.listTrainerClients().subscribe({
      next: (data) => {
        this.clients = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load your clients.';
        this.loading = false;
      },
    });
  }
}
