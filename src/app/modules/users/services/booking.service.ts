// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { forkJoin, map, switchMap } from 'rxjs';

// // @Injectable({ providedIn: 'root' })
// // export class BookingService {
// //   private baseUrl = 'http://localhost:3000';

// //   constructor(private http: HttpClient) {}

// //   getHistory() {
// //     return this.http.get<any[]>(`${this.baseUrl}/bookings`);
// //   }

// //   getBranches() {
// //     return this.http.get<any[]>(`${this.baseUrl}/branches`);
// //   }
// // }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { forkJoin, map, switchMap } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class BookingService {
//   private baseUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   /** STEP 1: get bookings for user */
//   getUserBookings(userId: string) {
//     return this.http.get<any[]>(`${this.baseUrl}/bookings?user_id=${userId}`);
//   }

//   /** STEP 2: resolve booking details */
//   resolveBookings(bookings: any[]) {
//     const requests = bookings.map(b => {
//       if (b.type === 'class') {
//         return this.http
//           .get<any>(`${this.baseUrl}/classes/${b.ref_id}`)
//           .pipe(
//             map(cls => ({
//               ...b,
//               title: cls.name,
//               category: cls.category,
//               thumbnail: cls.thumbnail,
//               trainer_user_id: cls.trainer_user_id
//             }))
//           );
//       }

//       if (b.type === 'trainer') {
//         return forkJoin({
//           user: this.http.get<any>(`${this.baseUrl}/users/${b.ref_id}`),
//           profile: this.http.get<any[]>(
//             `${this.baseUrl}/trainer_profiles?user_id=${b.ref_id}`
//           )
//         }).pipe(
//           map(({ user, profile }) => ({
//             ...b,
//             title: user.name,
//             specialties: profile[0]?.specialties || [],
//             thumbnail: profile[0]?.thumbnail
//           }))
//         );
//       }

//       return b;
//     });

//     return forkJoin(requests);
//   }

//   getBranches() {
//     return this.http.get<any[]>(`${this.baseUrl}/branches`);
//   }
//     /** CLASSES BY BRANCH */
//   // getClassesByBranch(branchId: string) {
//   //   return this.http.get<any[]>(
//   //     `${this.baseUrl}/classes?branch_id=${branchId}&active=true`
//   //   );
//   // }
//   getClassesByBranch(branchId: string) {
//     return forkJoin({
//       classes: this.http.get<any[]>(`${this.baseUrl}/classes?branch_id=${branchId}&active=true`),
//       users: this.http.get<any[]>(`${this.baseUrl}/users`),
//       branches: this.http.get<any[]>(`${this.baseUrl}/branches`),
//       trainers: this.http.get<any[]>(`${this.baseUrl}/trainer_profiles`)
//     }).pipe(
//       map(({ classes, users, branches, trainers }) => {
//         return classes.map(c => {
//           const trainerUser = users.find(u => u.id === c.trainer_user_id);
//           const trainerProfile = trainers.find(t => t.user_id === c.trainer_user_id);
//           const branch = branches.find(b => b.id === c.branch_id);

//           return {
//             ...c,
//             trainerName: trainerUser?.name,
//             trainerBio: trainerProfile?.bio,
//             trainerSpecialties: trainerProfile?.specialties || [],
//             branchName: branch?.name,
//             branchAddress: branch?.address
//           };
//         });
//       })
//     );
//   }


//   /** TRAINERS BY BRANCH */
//   getTrainersByBranch(branchId: string) {
//     // return this.http.get<any[]>(
//     //   `${this.baseUrl}/trainer_profiles?branch_id=${branchId}&active=true`
//     // );
//     return forkJoin({
//       trainers: this.http.get<any[]>(`${this.baseUrl}/trainer_profiles?branch_id=${branchId}&active=true`),
//       users: this.http.get<any[]>(`${this.baseUrl}/users`),
//       branches: this.http.get<any[]>(`${this.baseUrl}/branches`)
//     }).pipe(
//       map(({ trainers, users, branches }) => {
//         return trainers.map(tp => {
//           const user = users.find(u => u.id === tp.user_id);
//           const branch = branches.find(b => b.id === tp.branch_id);

//           return {
//             /** normalized shape for modal */
//             trainerUserId: user.id,
//             branchId: branch.id,
//             name: user?.name,
//             description:
//               'This is a private 1-on-1 personal training session. ' +
//               'Schedule will be arranged directly between you and the trainer.',
//             trainerName: user?.name,
//             trainerBio: tp.bio,
//             trainerSpecialties: tp.specialties || [],
//             branchName: branch?.name,
//             branchAddress: branch?.address,
//             schedule: 'Private session — schedule arranged with trainer',
//             price: tp.price_per_session,
//             thumbnail: tp.thumbnail,
//             images: [tp.thumbnail] // trainers usually have 1 image
//           };
//         });
//       })
//     );
//   }

//   getTrainerAvailability(trainerUserId: string, branchId: string) {
//     return this.http.get<any[]>(
//       `${this.baseUrl}/trainer_availability?trainer_user_id=${trainerUserId}&branch_id=${branchId}`
//     );
//   }

//   getTrainerBookings(trainerId: string) {
//     return this.http.get<any[]>(
//       `${this.baseUrl}/bookings?ref_id=${trainerId}&type=trainer`
//     );
//   }

//   /** GET USER */
//   getUser(userId: string) {
//     return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
//   }

//   createBooking(payload: any) {
//     return this.http.post(`${this.baseUrl}/bookings`, payload);
//   }

//   updateBooking(bookingId: string, payload: any) {
//     return this.http.patch(`${this.baseUrl}/bookings/${bookingId}`, payload);
//   };

// }


/////////////////////////////////////////

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { StorageService } from './../../../auth/services/storage/storage.service';

// const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

// @Injectable({ providedIn: 'root' })
// export class BookingService {

//   constructor(
//     private http: HttpClient,
//     private storage: StorageService
//   ) {}

//   private authHeaders() {
//     return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
//   }

//   // ─── CLASS BOOKINGS ───────────────────────────────────────────────────────

//   /** GET /class-booking/my-bookings — all class bookings for current user */
//   getMyClassBookings() {
//     return this.http.get<any>(`${BASE_URL}/class-booking/my-bookings`, { headers: this.authHeaders() });
//   }

//   /** GET /class-booking/:id */
//   getClassBookingById(id: string) {
//     return this.http.get<any>(`${BASE_URL}/class-booking/${id}`, { headers: this.authHeaders() });
//   }

//   /** PATCH /class-booking/:id/cancel */
//   cancelClassBooking(id: string) {
//     return this.http.patch<any>(`${BASE_URL}/class-booking/${id}/cancel`, {}, { headers: this.authHeaders() });
//   }

//   /** POST /class-booking/:id/checkout — pay for a class booking */
//   checkoutClassBooking(id: string) {
//     return this.http.post<any>(`${BASE_URL}/class-booking/${id}/checkout`, {}, { headers: this.authHeaders() });
//   }

//   // ─── CLASS SCHEDULES (available classes to book) ──────────────────────────

//   /** GET /class-schedule/list — paginated list of class schedules */
//   getClassSchedules(params?: { page?: number; limit?: number }) {
//     const page  = params?.page  ?? 1;
//     const limit = params?.limit ?? 20;
//     return this.http.get<any>(
//       `${BASE_URL}/class-schedule/list?page=${page}&limit=${limit}`,
//       { headers: this.authHeaders() }
//     );
//   }

//   // ─── TRAINER BOOKINGS ─────────────────────────────────────────────────────

//   /** GET /trainer-bookings/me — all trainer bookings for current member */
//   getMyTrainerBookings() {
//     return this.http.get<any>(`${BASE_URL}/trainer-bookings/me`, { headers: this.authHeaders() });
//   }

//   /** GET /trainer-bookings/trainers — list bookable trainers */
//   getBookableTrainers() {
//     return this.http.get<any>(`${BASE_URL}/trainer-bookings/trainers`, { headers: this.authHeaders() });
//   }

//   /** GET /trainer-bookings/trainers/:id — trainer booking profile */
//   getTrainerProfile(trainerId: string) {
//     return this.http.get<any>(`${BASE_URL}/trainer-bookings/trainers/${trainerId}`, { headers: this.authHeaders() });
//   }

//   /** GET /trainer-bookings/trainers/:id/slots?date=YYYY-MM-DD */
//   getTrainerSlots(trainerId: string, date: string) {
//     return this.http.get<any>(
//       `${BASE_URL}/trainer-bookings/trainers/${trainerId}/slots?date=${date}`,
//       { headers: this.authHeaders() }
//     );
//   }

//   /** POST /trainer-bookings — create a trainer booking request */
//   createTrainerBooking(payload: { trainerId: string; date: string; startTime: string; durationMinutes: number; notes?: string }) {
//     return this.http.post<any>(`${BASE_URL}/trainer-bookings`, payload, { headers: this.authHeaders() });
//   }

//   /** POST /trainer-bookings/:id/cancel */
//   cancelTrainerBooking(id: string, reason?: string) {
//     return this.http.post<any>(`${BASE_URL}/trainer-bookings/${id}/cancel`, { reason }, { headers: this.authHeaders() });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

@Injectable({ providedIn: 'root' })
export class BookingService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  // ─── CLASS BOOKINGS ───────────────────────────────────────────────────────

  /** GET /class-booking/my-bookings */
  getMyClassBookings(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/class-booking/my-bookings`, { headers: this.authHeaders() });
  }

  /**
   * getUserBookings — used by calendar + history components.
   * Fetches both class and trainer bookings and merges them.
   */
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

  /**
   * resolveBookings — legacy mock helper. Real backend embeds all data already,
   * so just pass through.
   */
  resolveBookings(bookings: any[]): Observable<any[]> {
    return of(bookings);
  }

  /** PATCH /class-booking/:id/cancel */
  cancelClassBooking(id: string): Observable<any> {
    return this.http.patch<any>(`${BASE_URL}/class-booking/${id}/cancel`, {}, { headers: this.authHeaders() });
  }

  /**
   * updateBooking — used by calendar to cancel a booking.
   * Only cancel is supported for members.
   */
  updateBooking(id: string, patch: { status: string }): Observable<any> {
    if (patch.status === 'cancelled') {
      return this.cancelClassBooking(id);
    }
    return this.http.patch<any>(`${BASE_URL}/class-booking/${id}`, patch, { headers: this.authHeaders() });
  }

  /** POST /class-booking/:id/checkout */
  checkoutClassBooking(id: string): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/class-booking/${id}/checkout`, {}, { headers: this.authHeaders() });
  }

  // ─── CLASS SCHEDULES ──────────────────────────────────────────────────────

  getClassSchedules(params?: { page?: number; limit?: number; date?: string }): Observable<any> {
    const page  = params?.page  ?? 1;
    const limit = params?.limit ?? 20;
    const dateParam = params?.date ? `&date=${params.date}` : '';
    return this.http.get<any>(
      `${BASE_URL}/class-schedule/list?page=${page}&limit=${limit}${dateParam}`,
      { headers: this.authHeaders() }
    );
  }

  /** getClassesByBranch — legacy method, returns class schedules mapped to old shape */
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

  // ─── TRAINER BOOKINGS ─────────────────────────────────────────────────────

  /** GET /trainer-bookings/me */
  getMyTrainerBookings(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/trainer-bookings/me`, { headers: this.authHeaders() });
  }

  /** GET /trainer-bookings/trainers */
  getBookableTrainers(): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/trainer-bookings/trainers`, { headers: this.authHeaders() });
  }

  /** getTrainersByBranch — legacy method, returns all bookable trainers */
  getTrainersByBranch(branchId: string): Observable<any[]> {
    return this.getBookableTrainers().pipe(
      map(res => {
        const trainers = res?.data ?? [];
        return trainers.map((t: any) => ({
          id: t.id,
          trainerUserId: t.userId ?? t.id,
          name: `${t.firstName ?? ''} ${t.lastName ?? ''}`.trim(),
          specialization: t.specializations?.join(', ') ?? t.bio ?? '',
          bio: t.bio ?? '',
          thumbnail: t.profileImage ?? null,
          images: t.profileImage ? [t.profileImage] : [],
          price: t.hourlyRate ?? 0,
          rating: t.rating ?? null,
        }));
      })
    );
  }

  getTrainerProfile(trainerId: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/trainer-bookings/trainers/${trainerId}`, { headers: this.authHeaders() });
  }

  getTrainerSlots(trainerId: string, date: string): Observable<any> {
    return this.http.get<any>(
      `${BASE_URL}/trainer-bookings/trainers/${trainerId}/slots?date=${date}`,
      { headers: this.authHeaders() }
    );
  }

  /**
   * Build unavailable trainer time blocks from class schedules and schedule exceptions.
   * These slots should be blocked for member trainer-booking calendar.
   */
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

  /**
   * getTrainerAvailability — legacy method used by BookingDetailsModal.
   * Fetches slots for each of the next 7 days and returns { date, slots[] }[].
   */
  getTrainerAvailability(trainerUserId: string, branchId?: string): Observable<{ date: string; slots: string[] }[]> {
    const dates: string[] = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      return d.toISOString().split('T')[0];
    });

    const requests = dates.reduce((acc, date) => {
      acc[date] = this.getTrainerSlots(trainerUserId, date).pipe(map(res => (res?.data ?? []) as string[]));
      return acc;
    }, {} as Record<string, Observable<string[]>>);

    return forkJoin(requests).pipe(
      map(results =>
        Object.entries(results).map(([date, slots]) => ({ date, slots }))
      )
    );
  }

  /**
   * getTrainerBookings — legacy method used by BookingDetailsModal.
   * Returns existing confirmed bookings for a trainer so slots can be greyed out.
   */
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

  /** POST /trainer-bookings */
  createTrainerBooking(payload: {
    trainerId: string;
    date: string;
    startTime: string;
    durationMinutes: number;
    notes?: string;
  }): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/trainer-bookings`, payload, { headers: this.authHeaders() });
  }

  /** POST /trainer-bookings/:id/cancel */
  cancelTrainerBooking(id: string, reason?: string): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/trainer-bookings/${id}/cancel`, { reason }, { headers: this.authHeaders() });
  }

  // ─── BRANCHES ─────────────────────────────────────────────────────────────

  /**
   * getBranches — no public branches endpoint for MEMBER role in current backend.
   * Returns a static placeholder. Ask your partner to add GET /branches if needed.
   */
  getBranches(): Observable<any[]> {
    return of([]);
  }

  // ─── COMBINED BOOKING CREATION ────────────────────────────────────────────

  /**
   * createBooking — legacy method used by BookingItemListComponent.
   * Routes to trainer or class checkout depending on type.
   */
  createBooking(booking: {
    type: 'class' | 'trainer';
    ref_id: string;
    date: string;
    time: string;
    price?: number;
    notes?: string;
  }): Observable<any> {
    if (booking.type === 'trainer') {
      return this.createTrainerBooking({
        trainerId: booking.ref_id,
        date: booking.date,
        startTime: booking.time,
        durationMinutes: 60,
        notes: booking.notes,
      });
    }
    // Class: use checkout (members cannot directly create class bookings)
    return this.checkoutClassBooking(booking.ref_id);
  }
}