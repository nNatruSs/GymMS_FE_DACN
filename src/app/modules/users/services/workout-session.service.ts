import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

@Injectable({ providedIn: 'root' })
export class WorkoutSessionService {
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

  private normalizeArrayResponse<T>(response: any): T[] {
    const payload = this.unwrapData<any>(response);
    if (Array.isArray(payload)) return payload as T[];
    if (Array.isArray(payload?.docs)) return payload.docs as T[];
    if (Array.isArray(payload?.items)) return payload.items as T[];
    if (payload && typeof payload === 'object') {
      const values = Object.values(payload).filter((v) => v && typeof v === 'object' && !Array.isArray(v));
      if (values.length) return values as T[];
    }
    return [];
  }

  listWorkoutSessions() {
    return this.http
      .get<any>(`${BASE_URL}/workout-sessions`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeArrayResponse<any>(res)));
  }

  startWorkoutSession(payload: {
    workoutPlanId: string;
    startTime: string;
    notes?: string;
  }) {
    return this.http
      .post<any>(`${BASE_URL}/workout-sessions`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  completeWorkoutSession(sessionId: string, payload: { endTime: string; notes?: string }) {
    return this.http
      .patch<any>(`${BASE_URL}/workout-sessions/${sessionId}/complete`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  logWorkoutSet(
    sessionId: string,
    payload: {
      exerciseId: string;
      planItemId: string;
      setNumber: number;
      actualRep: number;
      actualWeight: number;
      rpe: number;
    }
  ) {
    return this.http
      .post<any>(`${BASE_URL}/workout-sessions/${sessionId}/sets`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }
}
