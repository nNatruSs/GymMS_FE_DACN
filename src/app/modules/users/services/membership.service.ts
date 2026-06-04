































import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './../../../auth/services/storage/storage.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';

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
    if (response?.data === null) return null;
    if (response?.data && typeof response.data === 'object') return response.data;
    if (typeof response !== 'object') return null;
    const keys = Object.keys(response);
    const metaKeys = ['statusCode', 'status', 'statusText', 'error', 'message'];
    const hasOnlyMeta = keys.length > 0 && keys.every((k) => metaKeys.includes(k));
    if (hasOnlyMeta) return null;
    const hasMembershipFields =
      !!response?.id ||
      !!response?.membershipId ||
      !!response?.membership ||
      !!response?.membershipName ||
      !!response?.startDate ||
      !!response?.endDate;
    if (!hasMembershipFields) return null;
    return response;
  }

  
  getPlans() {
    return this.http
      .get<any>(`${BASE_URL}/memberships`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeArrayResponse(res)));
  }

  
  getUserMembership() {
    return this.http
      .get<any>(`${BASE_URL}/memberships/my`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeObjectResponse(res)));
  }

  
  getMembershipById(id: string) {
    
    return this.http
      .get<any>(`${BASE_URL}/memberships/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeObjectResponse(res)));
  }

  
  initiateCheckout(membershipId: string) {
    return this.http.post<any>(
      `${BASE_URL}/memberships/${membershipId}/checkout`,
      {},
      { headers: this.authHeaders() }
    );
  }

  
  registerMembership(_data: any) {
    console.warn('[MembershipService] registerMembership is a temporary stub.');
    return of({ success: false, message: 'Not implemented in backend yet.' });
  }

  
  updateMembership(_id: string, _data: any) {
    console.warn('[MembershipService] updateMembership is a temporary stub.');
    return of({ success: false, message: 'Not implemented in backend yet.' });
  }

  
  cancelMembership(_id: string) {
    console.warn('[MembershipService] cancelMembership is a temporary stub.');
    return of({ success: false, message: 'Not implemented in backend yet.' });
  }
}