import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../auth/services/storage/storage.service';
import { API_BASE_URL as BASE_URL } from '../core/constants/api.constants';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  private unwrapData<T>(response: any): T {
    return (response?.data ?? response) as T;
  }

  getById(userId: string) {
    return this.http
      .get<any>(`${BASE_URL}/user/${userId}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  getTrainerById(userId: string) {
    return this.http
      .get<any>(`${BASE_URL}/trainer/${userId}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  updateUser(userId: string, payload: any) {
    return this.http
      .patch<any>(`${BASE_URL}/user/${userId}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  updateTrainer(userId: string, payload: any) {
    return this.http
      .patch<any>(`${BASE_URL}/trainer/${userId}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .patch<any>(`${BASE_URL}/user/avatar`, formData, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }
}
