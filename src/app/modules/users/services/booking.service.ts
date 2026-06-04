










































































































































































































































































import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './../../../auth/services/storage/storage.service';
import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';

@Injectable({ providedIn: 'root' })
export class BookingService {

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

  

  
  getMyClassBookings(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/class-booking/my-bookings`, { headers: this.authHeaders() });
  }

  
  getUserBookings(userId?: string): Observable<any[]> {
    return new Observable(observer => {
      forkJoin({
        classBookings: this.getMyClassBookings().pipe(map(r => r?.data ?? [])),
        trainerBookings: this.getMyTrainerBookings().pipe(map(r => r?.data ?? [])),
      }).subscribe({
        next: ({ classBookings, trainerBookings }) => {
          const classes = classBookings.map((b: any) => ({
            ...b,
            type: 'class',
            date: b.date ?? b.classSchedule?.date ?? '',
            time: b.time ?? b.classSchedule?.startTime ?? '',
            title: b.classSchedule?.gymClass?.className ?? 'Class',
          }));
          const trainer = trainerBookings.map((b: any) => ({
            ...b,
            type: 'trainer',
            date: b.date ?? '',
            time: b.startTime ?? b.time ?? '',
            title: `Session with ${b.trainer?.firstName ?? 'Trainer'}`,
          }));
          observer.next([...classes, ...trainer]);
          observer.complete();
        },
        error: err => observer.error(err),
      });
    });
  }

  
  resolveBookings(bookings: any[]): Observable<any[]> {
    return of(bookings);
  }

  
  cancelClassBooking(id: string): Observable<any> {
    return this.http.patch<any>(`${BASE_URL}/class-booking/${id}/cancel`, {}, { headers: this.authHeaders() });
  }

  
  updateBooking(id: string, patch: { status: string }): Observable<any> {
    if (patch.status === 'cancelled') {
      return this.cancelClassBooking(id);
    }
    return this.http.patch<any>(`${BASE_URL}/class-booking/${id}`, patch, { headers: this.authHeaders() });
  }

  
  checkoutClassBooking(id: string): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/class-booking/${id}/checkout`, {}, { headers: this.authHeaders() });
  }

  
  getClassBookingsList(params: {
    page?: number;
    limit?: number;
    sort?: 'asc' | 'desc';
    q?: string;
  }): Observable<any> {
    const query = new URLSearchParams();
    query.set('page', String(params.page ?? 1));
    query.set('limit', String(params.limit ?? 10));
    query.set('sort', params.sort ?? 'desc');
    if (params.q) query.set('q', params.q);
    return this.http.get<any>(`${BASE_URL}/class-booking/list?${query.toString()}`, {
      headers: this.authHeaders(),
    });
  }

  

  getClassSchedules(params?: { page?: number; limit?: number; date?: string }): Observable<any> {
    const page  = params?.page  ?? 1;
    const limit = params?.limit ?? 20;
    const dateParam = params?.date ? `&date=${params.date}` : '';
    return this.http.get<any>(
      `${BASE_URL}/class-schedule/list?page=${page}&limit=${limit}${dateParam}`,
      { headers: this.authHeaders() }
    );
  }

  listClassSchedules(params?: {
    page?: number;
    limit?: number;
    sort?: 'asc' | 'desc' | '';
    q?: string;
    searchField?: string;
    dayOfWeek?: string;
    trainerId?: string;
    classId?: string;
  }): Observable<any> {
    const query = new URLSearchParams();
    query.set('page', String(params?.page ?? 1));
    query.set('limit', String(params?.limit ?? 12));
    if (params?.sort) query.set('sort', params.sort);
    if (params?.q) query.set('q', params.q);
    if (params?.searchField) query.set('searchField', params.searchField);
    if (params?.dayOfWeek) query.set('dayOfWeek', params.dayOfWeek);
    if (params?.trainerId) query.set('trainerId', params.trainerId);
    if (params?.classId) query.set('classId', params.classId);

    return this.http.get<any>(`${BASE_URL}/class-schedule/list?${query.toString()}`, {
      headers: this.authHeaders(),
    });
  }

  getClassTypes(): Observable<any[]> {
    return this.http
      .get<any>(`${BASE_URL}/class-schedule/classes`, { headers: this.authHeaders() })
      .pipe(map((res) => res?.data ?? []));
  }

  createMyClassBookings(payload: {
    bookingStartDate: string;
    bookingEndDate: string;
    classScheduleId: string[];
  }): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/class-booking/my-bookings`, payload, {
      headers: this.authHeaders(),
    });
  }

  
  getClassesByBranch(branchId: string): Observable<any[]> {
    return this.getClassSchedules({ limit: 50 }).pipe(
      map(res => {
        const docs = res?.data?.docs ?? res?.data ?? [];
        return docs.map((s: any) => ({
          id: s.id,
          classScheduleId: s.id,
          title: s.gymClass?.className ?? 'Class',
          description: s.gymClass?.description ?? '',
          trainer: `${s.trainer?.firstName ?? ''} ${s.trainer?.lastName ?? ''}`.trim(),
          dayOfWeek: s.dayOfWeek,
          startTime: s.startTime,
          endTime: s.endTime,
          location: s.location ?? '',
          capacity: s.capacity,
          thumbnail: s.gymClass?.imageUrl ?? null,
          images: s.gymClass?.imageUrl ? [s.gymClass.imageUrl] : [],
          price: s.price ?? 0,
        }));
      })
    );
  }

  

  
  getMyTrainerBookings(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/trainer-bookings/me`, { headers: this.authHeaders() });
  }

  
  getBookableTrainers(params?: {
    q?: string;
    specialization?: string;
    date?: string;
    availableOnly?: boolean;
    priceMin?: number | null;
    priceMax?: number | null;
  }): Observable<any> {
    const query = new URLSearchParams();
    const q = (params?.q ?? '').trim();
    const specialization = (params?.specialization ?? '').trim();
    const date = (params?.date ?? '').trim();

    if (q) query.set('q', q);
    if (specialization) query.set('specialization', specialization);
    if (date) query.set('date', date);
    query.set('availableOnly', String(params?.availableOnly ?? false));
    if (params?.priceMin !== null && params?.priceMin !== undefined && !Number.isNaN(Number(params.priceMin))) {
      query.set('priceMin', String(params.priceMin));
    }
    if (params?.priceMax !== null && params?.priceMax !== undefined && !Number.isNaN(Number(params.priceMax))) {
      query.set('priceMax', String(params.priceMax));
    }
    return this.http.get<any>(`${BASE_URL}/trainer-bookings/trainers?${query.toString()}`, {
      headers: this.authHeaders(),
    });
  }

  
  getTrainersByBranch(branchId: string): Observable<any[]> {
    return this.getBookableTrainers({
      q: '',
      specialization: '',
      date: '',
      availableOnly: false,
    }).pipe(
      map(res => {
        const trainers = this.normalizeArrayResponse<any>(res);
        return trainers.map((t: any) => ({
          id: t.id,
          trainerUserId: t.userId ?? t.id,
          name: `${t.firstName ?? ''} ${t.lastName ?? ''}`.trim() || t.name || 'Trainer',
          specialization: t.specializations?.join(', ') ?? t.bio ?? '',
          bio: t.bio ?? '',
          thumbnail: t.profileImage ?? t.avatarUrl ?? null,
          images: t.profileImage ? [t.profileImage] : (t.avatarUrl ? [t.avatarUrl] : []),
          price: t.hourlyRate ?? t.ptSessionPrice60 ?? 0,
          rating: t.rating ?? null,
        }));
      })
    );
  }

  getTrainerProfile(trainerId: string): Observable<any> {
    return this.http
      .get<any>(`${BASE_URL}/trainer-bookings/trainers/${trainerId}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<any>(res)));
  }

  getTrainerSlots(trainerId: string, date?: string): Observable<any[]> {
    const suffix = date ? `?date=${encodeURIComponent(date)}` : '';
    return this.http
      .get<any>(`${BASE_URL}/trainer-bookings/trainers/${trainerId}/slots${suffix}`, { headers: this.authHeaders() })
      .pipe(map((res) => this.normalizeArrayResponse<any>(res)));
  }

  
  getTrainerUnavailableFromClassSchedules(
    trainerId: string,
    date: string
  ): Observable<{ time: string; reason: string }[]> {
    const dayEnum = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dateObj = new Date(`${date}T12:00:00`);
    const dayOfWeek = dayEnum[dateObj.getDay()];

    return this.http
      .get<any>(
        `${BASE_URL}/class-schedule/list?page=1&limit=100&trainerId=${trainerId}&dayOfWeek=${dayOfWeek}&date=${date}`,
        { headers: this.authHeaders() }
      )
      .pipe(
        map((res) => res?.data?.docs ?? []),
        map((schedules: any[]) => {
          const blocked: { time: string; reason: string }[] = [];
          for (const s of schedules) {
            const start = (s.occurrence?.effectiveStartTime ?? s.startTime ?? '').slice(0, 5);
            const end = (s.occurrence?.effectiveEndTime ?? s.endTime ?? '').slice(0, 5);
            if (!start || !end) continue;
            const [sh] = start.split(':').map(Number);
            const [eh] = end.split(':').map(Number);
            for (let h = sh; h < eh; h++) {
              blocked.push({
                time: `${String(h).padStart(2, '0')}:00`,
                reason: s.className ? `Class: ${s.className}` : 'Class schedule',
              });
            }
          }
          return blocked;
        })
      );
  }

  
  getTrainerAvailability(trainerUserId: string, branchId?: string): Observable<{ date: string; slots: string[] }[]> {
    const dates: string[] = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return d.toISOString().split('T')[0];
    });

    const requests = dates.reduce((acc, date) => {
      acc[date] = this.getTrainerSlots(trainerUserId, date).pipe(
        map((rows: any[]) =>
          (rows ?? []).map((slot: any) => {
            if (typeof slot === 'string') return slot.slice(0, 5);
            const start = slot?.startAt ?? slot?.startTime ?? slot?.time ?? '';
            if (!start) return '';
            if (/^\d{2}:\d{2}/.test(start)) return start.slice(0, 5);
            const d = new Date(start);
            return Number.isNaN(d.getTime()) ? String(start).slice(0, 5) : d.toISOString().slice(11, 16);
          }).filter(Boolean) as string[]
        )
      );
      return acc;
    }, {} as Record<string, Observable<string[]>>);

    return forkJoin(requests).pipe(
      map(results =>
        Object.entries(results).map(([date, slots]) => ({ date, slots }))
      )
    );
  }

  
  getTrainerBookings(trainerUserId: string): Observable<{ date: string; time: string }[]> {
    return this.getMyTrainerBookings().pipe(
      map(res => {
        const bookings = res?.data ?? [];
        return bookings
          .filter((b: any) => b.trainerId === trainerUserId || b.trainer?.userId === trainerUserId)
          .map((b: any) => ({ date: b.date ?? '', time: b.startTime ?? b.time ?? '' }));
      })
    );
  }

  
  createTrainerBooking(payload: {
    trainerId: string;
    startAt: string;
    endAt: string;
    notes?: string;
  }): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/trainer-bookings`, payload, { headers: this.authHeaders() });
  }

  
  cancelTrainerBooking(id: string, reason?: string): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/trainer-bookings/${id}/cancel`, { reason }, { headers: this.authHeaders() });
  }

  

  
  getBranches(): Observable<any[]> {
    return of([]);
  }

  

  
  createBooking(booking: {
    type: 'class' | 'trainer';
    ref_id: string;
    date: string;
    time: string;
    price?: number;
    notes?: string;
  }): Observable<any> {
    if (booking.type === 'trainer') {
      const startAt = `${booking.date}T${booking.time}:00.000Z`;
      const startDate = new Date(startAt);
      const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
      return this.createTrainerBooking({
        trainerId: booking.ref_id,
        startAt,
        endAt: endDate.toISOString(),
        notes: booking.notes,
      });
    }
    
    return this.checkoutClassBooking(booking.ref_id);
  }
}