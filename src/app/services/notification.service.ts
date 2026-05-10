import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../auth/services/storage/storage.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface AppNotification {
  id: string;
  title?: string;
  message?: string;
  content?: string;
  isRead?: boolean;
  createdAt?: string;
  [key: string]: any;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  getUnreadCount(): Observable<number> {
    return this.http
      .get<any>(`${BASE_URL}/notifications/unread-count`, { headers: this.authHeaders() })
      .pipe(map((res) => Number(res?.data?.updatedCount ?? 0)));
  }

  getNotifications(page = 1, limit = 10): Observable<AppNotification[]> {
    return this.http
      .get<any>(`${BASE_URL}/notifications?page=${page}&limit=${limit}&unreadOnly=false`, {
        headers: this.authHeaders(),
      })
      .pipe(map((res) => (res?.data?.docs ?? []) as AppNotification[]));
  }

  markOneRead(id: string): Observable<number> {
    return this.http
      .patch<any>(`${BASE_URL}/notifications/${id}/read`, {}, { headers: this.authHeaders() })
      .pipe(map((res) => Number(res?.data?.updatedCount ?? 0)));
  }

  markAllRead(): Observable<number> {
    return this.http
      .patch<any>(`${BASE_URL}/notifications/read-all`, {}, { headers: this.authHeaders() })
      .pipe(
        map((res) => Number(res?.data?.updatedCount ?? 0)),
        // Backward-compat if backend path is singular in some envs.
        catchError(() =>
          this.http
            .patch<any>(`${BASE_URL}/notification/read-all`, {}, { headers: this.authHeaders() })
            .pipe(map((res) => Number(res?.data?.updatedCount ?? 0)))
        )
      );
  }

  checkoutPayment(payload: {
    targetType: 'TRAINER_BOOKING' | string;
    targetId: string;
    amount: number;
    currency?: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${BASE_URL}/payments/checkout`,
      {
        targetType: payload.targetType,
        targetId: payload.targetId,
        amount: payload.amount,
        currency: payload.currency ?? 'VND',
      },
      { headers: this.authHeaders() }
    );
  }
}
