import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { BookingService } from '../../../../services/booking.service';
import { StorageService } from '../../../../../../auth/services/storage/storage.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-booking-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-calendar.component.html',
})
export class BookingCalendarComponent implements OnInit {
  bookings: any[] = [];
  loading = true;

  constructor(private bookingService: BookingService, private storage: StorageService) {}

  ngOnInit() {
    // this.bookingService
    //   .getHistory()
    //   .subscribe((data) => (this.bookings = data));
    const userId = this.storage.getUserId();

    this.bookingService
      .getUserBookings(userId)
      .pipe(
        switchMap(bookings =>
          this.bookingService.resolveBookings(bookings)
        )
      )
      .subscribe(resolved => {
        this.bookings = resolved;
        this.loading = false;
      });
  }
}
