import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface MembershipTierPayload {
  name: string;
  description: string;
  minPrice: number;
  purchasePrice: number;
  level: 'BASIC' | 'PREMIUM' | 'VIP' | string;
}

@Injectable({ providedIn: 'root' })
export class AdminMembershipService {
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

  private normalizeArrayResponse(response: any): any[] {
    const payload = this.unwrapData<any>(response);
    if (Array.isArray(payload)) return payload;
    if (!payload || typeof payload !== 'object') return [];

    return Object.entries(payload)
      .filter(([key, value]) => /^\d+$/.test(key) && !!value && typeof value === 'object')
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([, value]) => value as any);
  }

  listTiers() {
    return this.http
      .get<any>(`${BASE_URL}/memberships`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeArrayResponse(res)));
  }

  createTier(payload: MembershipTierPayload) {
    return this.http
      .post<any>(`${BASE_URL}/memberships`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  updateTier(id: string, payload: MembershipTierPayload) {
    return this.http
      .patch<any>(`${BASE_URL}/memberships/${id}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  deleteTier(id: string) {
    return this.http
      .delete<any>(`${BASE_URL}/memberships/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  uploadTierLogo(id: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post<any>(`${BASE_URL}/memberships/${id}/logo`, formData, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }
}
