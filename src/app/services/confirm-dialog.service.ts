import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export interface ConfirmDialogState {
  open: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private hostMounted = false;
  private readonly initialState: ConfirmDialogState = {
    open: false,
    title: 'Please Confirm',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  };

  private readonly stateSubject = new BehaviorSubject<ConfirmDialogState>(this.initialState);
  readonly state$ = this.stateSubject.asObservable();
  private resolver: ((value: boolean) => void) | null = null;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  registerHost(mounted: boolean): void {
    this.hostMounted = mounted;
  }

  confirm(
    message: string,
    options?: Partial<Pick<ConfirmDialogState, 'title' | 'confirmText' | 'cancelText'>>
  ): Promise<boolean> {
    if (!this.hostMounted) {
      if (isPlatformBrowser(this.platformId)) {
        return Promise.resolve(window.confirm(message));
      }
      return Promise.resolve(false);
    }

    this.resolvePending(false);
    this.stateSubject.next({
      open: true,
      title: options?.title || 'Please Confirm',
      message,
      confirmText: options?.confirmText || 'Confirm',
      cancelText: options?.cancelText || 'Cancel',
    });

    return new Promise<boolean>((resolve) => {
      this.resolver = resolve;
    });
  }

  accept(): void {
    this.resolvePending(true);
    this.stateSubject.next(this.initialState);
  }

  reject(): void {
    this.resolvePending(false);
    this.stateSubject.next(this.initialState);
  }

  private resolvePending(value: boolean): void {
    if (this.resolver) {
      this.resolver(value);
      this.resolver = null;
    }
  }
}
