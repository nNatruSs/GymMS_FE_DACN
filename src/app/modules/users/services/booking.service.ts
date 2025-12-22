// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { forkJoin, map, switchMap } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class BookingService {
//   private baseUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   getHistory() {
//     return this.http.get<any[]>(`${this.baseUrl}/bookings`);
//   }

//   getBranches() {
//     return this.http.get<any[]>(`${this.baseUrl}/branches`);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /** STEP 1: get bookings for user */
  getUserBookings(userId: string) {
    return this.http.get<any[]>(`${this.baseUrl}/bookings?user_id=${userId}`);
  }

  /** STEP 2: resolve booking details */
  resolveBookings(bookings: any[]) {
    const requests = bookings.map(b => {
      if (b.type === 'class') {
        return this.http
          .get<any>(`${this.baseUrl}/classes/${b.ref_id}`)
          .pipe(
            map(cls => ({
              ...b,
              title: cls.name,
              category: cls.category,
              thumbnail: cls.thumbnail,
              trainer_user_id: cls.trainer_user_id
            }))
          );
      }

      if (b.type === 'trainer') {
        return forkJoin({
          user: this.http.get<any>(`${this.baseUrl}/users/${b.ref_id}`),
          profile: this.http.get<any[]>(
            `${this.baseUrl}/trainer_profiles?user_id=${b.ref_id}`
          )
        }).pipe(
          map(({ user, profile }) => ({
            ...b,
            title: user.name,
            specialties: profile[0]?.specialties || [],
            thumbnail: profile[0]?.thumbnail
          }))
        );
      }

      return b;
    });

    return forkJoin(requests);
  }

  getBranches() {
    return this.http.get<any[]>(`${this.baseUrl}/branches`);
  }
    /** CLASSES BY BRANCH */
  // getClassesByBranch(branchId: string) {
  //   return this.http.get<any[]>(
  //     `${this.baseUrl}/classes?branch_id=${branchId}&active=true`
  //   );
  // }
  getClassesByBranch(branchId: string) {
    return forkJoin({
      classes: this.http.get<any[]>(`${this.baseUrl}/classes?branch_id=${branchId}&active=true`),
      users: this.http.get<any[]>(`${this.baseUrl}/users`),
      branches: this.http.get<any[]>(`${this.baseUrl}/branches`),
      trainers: this.http.get<any[]>(`${this.baseUrl}/trainer_profiles`)
    }).pipe(
      map(({ classes, users, branches, trainers }) => {
        return classes.map(c => {
          const trainerUser = users.find(u => u.id === c.trainer_user_id);
          const trainerProfile = trainers.find(t => t.user_id === c.trainer_user_id);
          const branch = branches.find(b => b.id === c.branch_id);

          return {
            ...c,
            trainerName: trainerUser?.name,
            trainerBio: trainerProfile?.bio,
            trainerSpecialties: trainerProfile?.specialties || [],
            branchName: branch?.name,
            branchAddress: branch?.address
          };
        });
      })
    );
  }


  /** TRAINERS BY BRANCH */
  getTrainersByBranch(branchId: string) {
    // return this.http.get<any[]>(
    //   `${this.baseUrl}/trainer_profiles?branch_id=${branchId}&active=true`
    // );
    return forkJoin({
      trainers: this.http.get<any[]>(`${this.baseUrl}/trainer_profiles?branch_id=${branchId}&active=true`),
      users: this.http.get<any[]>(`${this.baseUrl}/users`),
      branches: this.http.get<any[]>(`${this.baseUrl}/branches`)
    }).pipe(
      map(({ trainers, users, branches }) => {
        return trainers.map(tp => {
          const user = users.find(u => u.id === tp.user_id);
          const branch = branches.find(b => b.id === tp.branch_id);

          return {
            /** normalized shape for modal */
            trainerUserId: user.id,
            branchId: branch.id,
            name: user?.name,
            description:
              'This is a private 1-on-1 personal training session. ' +
              'Schedule will be arranged directly between you and the trainer.',
            trainerName: user?.name,
            trainerBio: tp.bio,
            trainerSpecialties: tp.specialties || [],
            branchName: branch?.name,
            branchAddress: branch?.address,
            schedule: 'Private session — schedule arranged with trainer',
            price: tp.price_per_session,
            thumbnail: tp.thumbnail,
            images: [tp.thumbnail] // trainers usually have 1 image
          };
        });
      })
    );
  }

  getTrainerAvailability(trainerUserId: string, branchId: string) {
    return this.http.get<any[]>(
      `${this.baseUrl}/trainer_availability?trainer_user_id=${trainerUserId}&branch_id=${branchId}`
    );
  }

  getTrainerBookings(trainerId: string) {
    return this.http.get<any[]>(
      `${this.baseUrl}/bookings?ref_id=${trainerId}&type=trainer`
    );
  }

  /** GET USER */
  getUser(userId: string) {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }

  createBooking(payload: any) {
    return this.http.post(`${this.baseUrl}/bookings`, payload);
  }

}
