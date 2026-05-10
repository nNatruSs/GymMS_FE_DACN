// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class MembershipService {

//   private baseUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   getUserMembership(userId: string) {
//     return this.http.get<any[]>(`${this.baseUrl}/user_memberships?user_id=${userId}`);
//   }

//   getPlans() {
//     return this.http.get<any[]>(`${this.baseUrl}/membership_plans`);
//   }

//   registerMembership(data: any) {
//     return this.http.post(`${this.baseUrl}/user_memberships`, {id: Date.now().toString(), ...data}); //remove later when use real backend
//   }

//   updateMembership(id: string, data: any) {
//     return this.http.patch(`${this.baseUrl}/user_memberships/${id}`, data);
//   }

//   cancelMembership(id: string) {
//     return this.http.delete(`${this.baseUrl}/user_memberships/${id}`);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './../../../auth/services/storage/storage.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

@Injectable({ providedIn: 'root' })
export class MembershipService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  private normalizeArrayResponse(response: any): any[] {
    if (Array.isArray(response)) return response;
    if (Array.isArray(response?.data)) return response.data;
    if (response && typeof response === 'object') {
      const numericKeys = Object.keys(response).filter(k => /^\d+$/.test(k));
      if (numericKeys.length) {
        return numericKeys
          .sort((a, b) => Number(a) - Number(b))
          .map(k => response[k]);
      }
    }
    return [];
  }

  private normalizeObjectResponse(response: any): any | null {
    if (!response) return null;
    if (response?.data && typeof response.data === 'object') return response.data;
    return response;
  }

  /** GET /memberships — list all membership tiers/plans */
  getPlans() {
    return this.http
      .get<any>(`${BASE_URL}/memberships`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeArrayResponse(res)));
  }

  /** GET /memberships/my — get current user's active membership */
  getUserMembership() {
    return this.http
      .get<any>(`${BASE_URL}/memberships/my`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeObjectResponse(res)));
  }

  /** GET /memberships/:id */
  getMembershipById(id: string) {
    // return this.http.get<any>(`${BASE_URL}/memberships/${id}`, { headers: this.authHeaders() });
    return this.http
      .get<any>(`${BASE_URL}/memberships/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeObjectResponse(res)));
  }

  /** POST /memberships/:id/checkout — initiate Stripe checkout to purchase a tier */
  initiateCheckout(membershipId: string) {
    return this.http.post<any>(
      `${BASE_URL}/memberships/${membershipId}/checkout`,
      {},
      { headers: this.authHeaders() }
    );
  }

  /**
   * Temporary frontend stub to keep legacy UI compiling.
   * Backend user endpoints are not available yet.
   */
  registerMembership(_data: any) {
    console.warn('[MembershipService] registerMembership is a temporary stub.');
    return of({ success: false, message: 'Not implemented in backend yet.' });
  }

  /**
   * Temporary frontend stub to keep legacy UI compiling.
   * Backend user endpoints are not available yet.
   */
  updateMembership(_id: string, _data: any) {
    console.warn('[MembershipService] updateMembership is a temporary stub.');
    return of({ success: false, message: 'Not implemented in backend yet.' });
  }

  /**
   * Temporary frontend stub to keep legacy UI compiling.
   * Backend user endpoints are not available yet.
   */
  cancelMembership(_id: string) {
    console.warn('[MembershipService] cancelMembership is a temporary stub.');
    return of({ success: false, message: 'Not implemented in backend yet.' });
  }
}