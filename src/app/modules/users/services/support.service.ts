import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface SubmitFeedbackPayload {
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class SupportService {
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  submitFeedback(payload: SubmitFeedbackPayload) {
    return this.http.post<unknown>(`${BASE_URL}/support/feedback`, payload, {
      headers: this.authHeaders(),
    });
  }
}
