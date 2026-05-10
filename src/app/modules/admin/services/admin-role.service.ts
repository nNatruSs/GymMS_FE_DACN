import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface AdminRolePayload {
  name: string;
  description: string;
}

export interface AdminRoleItem {
  id: string;
  name: string;
  description?: string;
  userCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminRoleListResult {
  items: AdminRoleItem[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

@Injectable({ providedIn: 'root' })
export class AdminRoleService {
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

  private normalizeListResponse(response: any): AdminRoleListResult {
    const payload = this.unwrapData<any>(response) ?? {};
    const items = Array.isArray(payload?.items) ? payload.items : [];
    const pagination = payload?.pagination ?? {};
    const page = Number(pagination?.page ?? 1);
    const totalPages = Number(pagination?.totalPages ?? 1);
    const total = Number(pagination?.total ?? items.length ?? 0);
    const limit = Number(pagination?.limit ?? 10);

    return {
      items,
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    };
  }

  listRoles(page = 1, limit = 10, search = '') {
    const searchParam = search.trim() ? `&search=${encodeURIComponent(search.trim())}` : '';
    return this.http
      .get<any>(`${BASE_URL}/roles?page=${page}&limit=${limit}${searchParam}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeListResponse(res)));
  }

  searchRoles(query: string, page = 1, limit = 10) {
    const search = encodeURIComponent(query.trim());
    return this.http
      .get<any>(
        `${BASE_URL}/roles/search?page=${page}&limit=${limit}&search=${search}`,
        { headers: this.authHeaders() }
      )
      .pipe(map((res) => this.normalizeListResponse(res)));
  }

  createRole(payload: AdminRolePayload) {
    return this.http
      .post<any>(`${BASE_URL}/roles`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  updateRole(id: string, payload: AdminRolePayload) {
    return this.http
      .patch<any>(`${BASE_URL}/roles/${id}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  deleteRole(id: string) {
    return this.http
      .delete<any>(`${BASE_URL}/roles/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }
}
