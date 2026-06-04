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
  
  @Input() branch: any;

  
  @Output() select = new EventEmitter<'class' | 'trainer'>();

  
  @Output() back = new EventEmitter<void>();









    choose(mode: 'class' | 'trainer') {
        if (this.disabled) return;
        this.select.emit(mode);
    }
}
