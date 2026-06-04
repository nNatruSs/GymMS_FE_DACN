import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
})
export class ConfirmDialogComponent {
  private confirmDialogService = inject(ConfirmDialogService);
  state$ = this.confirmDialogService.state$;

  ngOnInit(): void {
    this.confirmDialogService.registerHost(true);
  }

  ngOnDestroy(): void {
    this.confirmDialogService.registerHost(false);
  }

  onCancel(): void {
    this.confirmDialogService.reject();
  }

  onConfirm(): void {
    this.confirmDialogService.accept();
  }
}
