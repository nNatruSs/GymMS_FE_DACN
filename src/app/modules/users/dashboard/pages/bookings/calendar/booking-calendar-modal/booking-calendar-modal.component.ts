import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  cancelBooking() {
    if (!confirm('Are you sure you want to cancel this booking?')) return;
    this.cancel.emit(this.booking.id);
  }
}
