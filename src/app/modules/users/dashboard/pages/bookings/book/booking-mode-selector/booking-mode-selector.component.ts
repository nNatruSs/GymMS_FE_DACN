import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-mode-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-mode-selector.component.html',
  styleUrls: ['./booking-mode-selector.component.css']
})
export class BookingModeSelectorComponent {

    @Input() disabled = false;
  /** Selected branch (display only) */
  @Input() branch: any;

  /** Emit selected booking mode */
  @Output() select = new EventEmitter<'class' | 'trainer'>();

  /** Go back to branch selection */
  @Output() back = new EventEmitter<void>();

//   chooseClass() {
//     this.select.emit('class');
//   }

//   chooseTrainer() {
//     this.select.emit('trainer');
//   }

    choose(mode: 'class' | 'trainer') {
        if (this.disabled) return;
        this.select.emit(mode);
    }
}
