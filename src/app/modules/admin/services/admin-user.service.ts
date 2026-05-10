import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface AdminUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  address?: string;
  role?: string;
  status?: string;
  password?: string;
}

export interface AdminUserRole {
  id: string;
  name: string;
  description?: string;
}

export interface AdminUserListItem {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender?: string;
  dob?: string;
  address?: string | null;
  status?: string;
  createdAt?: string;
  roles?: AdminUserRole[];
  memberships?: { id: string; name: string; description?: string }[];
}

export interface AdminUserListResult {
  docs: AdminUserListItem[];
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: number | null;
  previousPage: number | null;
  limit: number;
}

export interface AdminRoleItem {
  id: string;
  name: string;
  description?: string;
  userCount?: number;
}

@Injectable({ providedIn: 'root' })
export class AdminUserService {
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

  private normalizeListResponse(response: any): AdminUserListResult {
    const payload = this.unwrapData<any>(response) ?? {};
    const docs = Array.isArray(payload?.docs) ? payload.docs : [];
    return {
      docs,
      totalDocs: Number(payload?.totalDocs ?? docs.length ?? 0),
      totalPages: Number(payload?.totalPages ?? 1),
      currentPage: Number(payload?.currentPage ?? 1),
      hasNext: Boolean(payload?.hasNext),
      hasPrev: Boolean(payload?.hasPrev),
      nextPage: payload?.nextPage ?? null,
      previousPage: payload?.previousPage ?? null,
      limit: Number(payload?.limit ?? 10),
    };
  }

  private normalizeRoleItems(response: any): AdminRoleItem[] {
    const payload = this.unwrapData<any>(response) ?? {};
    const items = Array.isArray(payload?.items) ? payload.items : Array.isArray(payload) ? payload : [];
    return items as AdminRoleItem[];
  }

  listUsers(page = 1, limit = 10) {
    return this.http
      .get<any>(`${BASE_URL}/user/list?page=${page}&limit=${limit}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeListResponse(res)));
  }

  getUserById(id: string) {
    return this.http
      .get<any>(`${BASE_URL}/user/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<AdminUserListItem>(res)));
  }

  createUser(payload: AdminUserPayload) {
    return this.http
      .post<any>(`${BASE_URL}/user/create`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  updateUser(id: string, payload: AdminUserPayload) {
    return this.http
      .patch<any>(`${BASE_URL}/user/${id}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  deleteUser(id: string) {
    return this.http
      .delete<any>(`${BASE_URL}/user/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  assignRoles(userId: string, roleIds: string[]) {
    return this.http
      .post<any>(`${BASE_URL}/user/${userId}/roles`, { roleIds }, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  removeRole(userId: string, roleId: string) {
    return this.http
      .delete<any>(`${BASE_URL}/user/${userId}/roles/${roleId}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  getUsersByRole(roleId: string) {
    return this.http
      .get<any>(`${BASE_URL}/user/by-role/${roleId}`, { headers: this.authHeaders() })
      .pipe(
        map((res) => {
          const payload = this.unwrapData<any>(res);
          if (Array.isArray(payload)) return payload as AdminUserListItem[];
          if (Array.isArray(payload?.docs)) return payload.docs as AdminUserListItem[];
          if (Array.isArray(payload?.users)) {
            const role = payload?.role;
            return payload.users.map((user: any) => {
              const fullName = String(user?.name ?? '').trim();
              const [firstName, ...lastParts] = fullName.split(' ');
              return {
                id: user?.id,
                firstName: firstName || fullName || 'Unknown',
                lastName: lastParts.join(' '),
                email: user?.email ?? '',
                phone: user?.phoneNumber ?? '',
                status: 'active',
                roles: role ? [{ id: role.id, name: role.name, description: role.description }] : [],
              } as AdminUserListItem;
            });
          }
          return [];
        })
      );
  }

  getRoles(page = 1, limit = 50, search = '') {
    const searchParam = search.trim() ? `&search=${encodeURIComponent(search.trim())}` : '';
    return this.http
      .get<any>(`${BASE_URL}/roles?page=${page}&limit=${limit}${searchParam}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeRoleItems(res)));
  }

}
