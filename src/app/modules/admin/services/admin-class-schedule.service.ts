import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface GymClassItem {
  id: string;
  className: string;
  description?: string;
  difficultyLevel?: string;
  category?: string;
  isActive?: boolean;
  imageUrl?: string | null;
}

export interface TrainerItem {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface PaginatedResult<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: number | null;
  previousPage: number | null;
  limit: number;
}

export interface ClassSchedulePayload {
  classId: string;
  trainerId: string;
  dayOfWeek: string;
  daysOfWeek: string[];
  startTime: string;
  endTime: string;
  validFrom: string;
  validUntil: string;
  location: string;
  capacity: number;
  isActive: boolean;
}

export interface ScheduleExceptionPayload {
  exceptionDate: string;
  type: string;
  reason?: string;
  newStartTime?: string;
  newEndTime?: string;
}

@Injectable({ providedIn: 'root' })
export class AdminClassScheduleService {
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

  private normalizePage<T>(response: any): PaginatedResult<T> {
    const payload = this.unwrapData<any>(response) ?? {};
    const docs = Array.isArray(payload?.docs)
      ? payload.docs
      : Array.isArray(payload?.items)
      ? payload.items
      : Array.isArray(payload)
      ? payload
      : [];
    const pageMeta = payload?.pagination ?? payload;

    const currentPage = Number(pageMeta?.currentPage ?? pageMeta?.page ?? 1);
    const totalPages = Number(pageMeta?.totalPages ?? 1);
    const totalDocs = Number(pageMeta?.totalDocs ?? pageMeta?.total ?? docs.length);

    return {
      docs: docs as T[],
      totalDocs,
      totalPages,
      currentPage,
      hasNext: Boolean(pageMeta?.hasNext ?? currentPage < totalPages),
      hasPrev: Boolean(pageMeta?.hasPrev ?? currentPage > 1),
      nextPage: pageMeta?.nextPage ?? (currentPage < totalPages ? currentPage + 1 : null),
      previousPage: pageMeta?.previousPage ?? (currentPage > 1 ? currentPage - 1 : null),
      limit: Number(pageMeta?.limit ?? 10),
    };
  }

  getClassTypes() {
    return this.http
      .get<any>(`${BASE_URL}/class-schedule/classes`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<GymClassItem[]>(res) ?? []));
  }

  listTrainers(page = 1, limit = 10) {
    return this.http
      .get<any>(`${BASE_URL}/trainer/list?page=${page}&limit=${limit}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizePage<TrainerItem>(res)));
  }

  checkConflict(payload: {
    trainerId: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    excludeScheduleId?: string;
  }) {
    return this.http
      .post<any>(`${BASE_URL}/class-schedule/check-conflict`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  createSchedule(payload: ClassSchedulePayload) {
    return this.http
      .post<any>(`${BASE_URL}/class-schedule/create`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  listSchedules(params: {
    page?: number;
    limit?: number;
    sort?: 'asc' | 'desc' | '';
    q?: string;
    searchField?: string;
    dayOfWeek?: string;
    trainerId?: string;
    classId?: string;
  }) {
    const query = new URLSearchParams();
    query.set('page', String(params.page ?? 1));
    query.set('limit', String(params.limit ?? 10));
    if (params.sort) query.set('sort', params.sort);
    if (params.q) query.set('q', params.q);
    if (params.searchField) query.set('searchField', params.searchField);
    if (params.dayOfWeek) query.set('dayOfWeek', params.dayOfWeek);
    if (params.trainerId) query.set('trainerId', params.trainerId);
    if (params.classId) query.set('classId', params.classId);

    return this.http
      .get<any>(`${BASE_URL}/class-schedule/list?${query.toString()}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizePage<any>(res)));
  }

  updateSchedule(id: string, payload: ClassSchedulePayload) {
    return this.http
      .patch<any>(`${BASE_URL}/class-schedule/${id}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  deleteSchedule(id: string) {
    return this.http
      .delete<any>(`${BASE_URL}/class-schedule/${id}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  uploadClassImage(classId: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post<any>(`${BASE_URL}/class-schedule/classes/${classId}/image`, formData, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  listExceptions(scheduleId: string) {
    return this.http
      .get<any>(`${BASE_URL}/class-schedule/${scheduleId}/exceptions`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any[]>(res) ?? []));
  }

  createException(scheduleId: string, payload: ScheduleExceptionPayload) {
    return this.http
      .post<any>(`${BASE_URL}/class-schedule/${scheduleId}/exceptions`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  updateException(exceptionId: string, payload: ScheduleExceptionPayload) {
    return this.http
      .patch<any>(`${BASE_URL}/class-schedule/exceptions/${exceptionId}`, payload, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  deleteException(exceptionId: string) {
    return this.http
      .delete<any>(`${BASE_URL}/class-schedule/exceptions/${exceptionId}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }
}
