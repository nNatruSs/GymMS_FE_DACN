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
  loadingBookings = true;
  errorMessage: string | null = null;
  actionMessage: string | null = null;
  clients: TrainerClientLinkView[] = [];
  bookings: any[] = [];
  completingBookingId: string | null = null;

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadBookings();
  }

  loadClients(): void {
    this.loading = true;
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

  loadBookings(): void {
    this.loadingBookings = true;
    this.trainerService.getTrainerMyBookings().subscribe({
      next: (rows) => {
        this.bookings = rows ?? [];
        this.loadingBookings = false;
      },
      error: () => {
        this.bookings = [];
        this.loadingBookings = false;
      },
    });
  }

  canCompleteBooking(booking: any): boolean {
    const status = String(booking?.status ?? '').toLowerCase();
    if (status === 'accepted_pending_payment') return false;
    if (status.includes('pending')) return false;
    return !['completed', 'cancelled', 'rejected'].includes(status);
  }

  private resolveLinkForBooking(booking: any): TrainerClientLinkView | null {
    const memberId = booking?.memberId || booking?.member?.id;
    if (!memberId) return null;
    return this.clients.find((x) => x.memberId === memberId || x.member?.id === memberId) ?? null;
  }

  completeSession(booking: any): void {
    if (!booking?.id || this.completingBookingId || !this.canCompleteBooking(booking)) return;
    if (!confirm('Mark this session as completed?')) return;

    this.completingBookingId = booking.id;
    this.errorMessage = null;
    this.actionMessage = null;

    this.trainerService.completeTrainerBooking(booking.id).subscribe({
      next: () => {
        const finalizeEndLink = (link: TrainerClientLinkView | null) => {
          const trainerId = booking?.trainerId || link?.trainerId || '';
          if (!trainerId || !link?.id) {
            this.completingBookingId = null;
            this.actionMessage = 'Session completed. No active client link found to end.';
            this.loadBookings();
            return;
          }

          this.trainerService.endTrainerClientLink(trainerId, link.id).subscribe({
            next: () => {
              this.completingBookingId = null;
              this.actionMessage = 'Session completed and trainer-client link ended.';
              this.loadClients();
              this.loadBookings();
            },
            error: () => {
              this.completingBookingId = null;
              this.errorMessage = 'Session completed, but ending trainer-client link failed.';
              this.loadBookings();
            },
          });
        };

        const localLink = this.resolveLinkForBooking(booking);
        if (localLink) {
          finalizeEndLink(localLink);
          return;
        }

        this.trainerService.listTrainerClients().subscribe({
          next: (freshClients) => {
            this.clients = freshClients ?? [];
            finalizeEndLink(this.resolveLinkForBooking(booking));
          },
          error: () => {
            this.completingBookingId = null;
            this.actionMessage = 'Session completed. Could not refresh clients to end link.';
            this.loadBookings();
          },
        });
      },
      error: () => {
        this.completingBookingId = null;
        this.errorMessage = 'Could not complete this session.';
      },
    });
  }
}
