import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MembershipService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserMembership(userId: string) {
    return this.http.get<any[]>(`${this.baseUrl}/user_memberships?user_id=${userId}`);
  }

  getPlans() {
    return this.http.get<any[]>(`${this.baseUrl}/membership_plans`);
  }

  registerMembership(data: any) {
    return this.http.post(`${this.baseUrl}/user_memberships`, {id: Date.now().toString(), ...data}); //remove later when use real backend
  }

  updateMembership(id: string, data: any) {
    return this.http.patch(`${this.baseUrl}/user_memberships/${id}`, data);
  }

  cancelMembership(id: string) {
    return this.http.delete(`${this.baseUrl}/user_memberships/${id}`);
  }
}
