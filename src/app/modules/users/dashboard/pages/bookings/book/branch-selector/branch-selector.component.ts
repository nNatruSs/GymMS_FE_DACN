import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branch-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branch-selector.component.html',
  styleUrls: ['./branch-selector.component.css']
})
export class BranchSelectorComponent {
  @Input() branches: any[] = [];
  @Output() select = new EventEmitter<any>();
}
