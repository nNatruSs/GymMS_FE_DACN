import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-fail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment-fail.component.html',
  styleUrls: ['./payment-fail.component.css'],
})
export class PaymentFailComponent {
  sessionId = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.queryParamMap.get('session_id') ?? '';
  }
}
