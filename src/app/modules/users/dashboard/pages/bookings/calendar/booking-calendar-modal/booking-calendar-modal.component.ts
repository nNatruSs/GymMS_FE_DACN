import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from '../../../../../../../services/confirm-dialog.service';

@Component({
  selector: 'app-booking-calendar-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-calendar-modal.component.html',
  styleUrls: ['./booking-calendar-modal.component.css']
})
export class BookingCalendarModalComponent {
  @Input() booking: any;

  @Output() close = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<string>();

  constructor(private confirmDialog: ConfirmDialogService) {}

  async cancelBooking(): Promise<void> {
    const confirmed = await this.confirmDialog.confirm('Are you sure you want to cancel this booking?', {
      title: 'Confirm Cancel Booking',
      confirmText: 'Cancel Booking',
    });
    if (!confirmed) return;
    this.cancel.emit(this.booking.id);
  }
}
