import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { BookingService } from '../../../../services/booking.service';
import { StorageService } from '../../../../../../auth/services/storage/storage.service';
import { OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit{
  bookings: any[] = [];
  loading = true;

  constructor(private bookingService: BookingService, private storage: StorageService) {}


  ngOnInit() {
    const userId = this.storage.getUserId();
    // this.bookingService.getHistory().subscribe(data => this.bookings = data);
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

