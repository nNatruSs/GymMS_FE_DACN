import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-extend-membership-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './extend-membership-modal.component.html',
  styleUrls: ['./extend-membership-modal.component.css']
})
export class ExtendMembershipModalComponent {
  @Input() membership: any;

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<number>();

  selectedDuration = 30;

  confirmPayment() {
    this.confirm.emit(this.selectedDuration);
  }
}