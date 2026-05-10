

// import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { BehaviorSubject } from 'rxjs';

// const TOKEN = 'token';
// const USER = 'user';

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {

//   loggedInSubject$ = new BehaviorSubject<boolean>(false);

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   private isBrowser(): boolean {
//     return isPlatformBrowser(this.platformId);
//   }

//   saveToken(token: string): void {
//     if (!this.isBrowser()) return;
//     localStorage.setItem(TOKEN, token);
//     this.loggedInSubject$.next(t
//   }

//   saveUser(user: any): void {
//     if (!this.isBrowser()) return;
//     localStorage.setItem(USER, JSON.stringify(user));
//   }

//   getToken(): string | null {
//     if (!this.isBrowser()) return null;
//     return localStorage.getItem(TOKEN);
//   }

//   getUser(): any {
//     if (!this.isBrowser()) return null;
//     const user = localStorage.getItem(USER);
//     return user ? JSON.parse(user) : null;
//   }

//   getUserRole(): string {
//     return this.getUser()?.role ?? '';
//   }

//   isAdminLoggedIn(): boolean {
//     return !!this.getToken() && this.getUserRole() === 'ADMIN';
//   }

//   isUserLoggedIn(): boolean {
//     return !!this.getToken() && this.getUserRole() === 'USER';
//   }

//   isOrganizerLoggedIn(): boolean {
//     return !!this.getToken() && this.getUserRole() === 'ORGANIZER';
//   }

//   isTrainerLoggedIn(): boolean {
//     return !!this.getToken() && this.getUserRole() === 'TRAINER';
//   }

//   hasToken(): boolean {
//     return !!this.getToken();
//   }

//   getUserId(): string {
//     return this.getUser()?.id ?? '';
//   }

//   signOut(): void {
//     if (!this.isBrowser()) return;
//     localStorage.removeItem(TOKEN);
//     localStorage.removeItem(USER);
//     this.loggedInSubject$.next(false);
//   }
// }



import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

const TOKEN = 'token';
const REFRESH_TOKEN = 'refreshToken';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loggedInSubject$ = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // ─── Token ────────────────────────────────────────────────────────────────

  saveToken(token: string): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(TOKEN, token);
    this.loggedInSubject$.next(true);
  }

  saveRefreshToken(token: string): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(REFRESH_TOKEN, token);
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(TOKEN);
  }

  getRefreshToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(REFRESH_TOKEN);
  }

  // ─── User ─────────────────────────────────────────────────────────────────

  /**
   * Save user info to localStorage.
   * The backend JWT payload contains roles as string[] e.g. ['MEMBER'] / ['ADMIN'] / ['TRAINER']
   * We store { id, roles, email } from the decoded token or login response.
   */
  saveUser(user: any): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(USER, JSON.stringify(user));
  }

  getUser(): any {
    if (!this.isBrowser()) return null;
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  getUserId(): string {
    return this.getUser()?.id ?? '';
  }

  getUserName(): string {
    const user = this.getUser();
    if (!user) return '';
    if (user.firstName && user.lastName) return `${user.firstName} ${user.lastName}`.trim();
    if (user.name) return user.name;
    return user.email ?? '';
  }

  getUserEmail(): string {
    return this.getUser()?.email ?? '';
  }

  /**
   * Roles come back in the JWT payload as an array e.g. ['ADMIN'] or ['MEMBER']
   * Backend role names: ADMIN, STAFF, TRAINER, MEMBER  (NOT "USER")
   */
  getUserRoles(): string[] {
    const user = this.getUser();
    if (!user) return [];
    // Support both { roles: ['ADMIN'] } and { role: 'ADMIN' } shapes
    if (Array.isArray(user.roles)) return user.roles;
    if (user.role) return [user.role];
    return [];
  }

  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }

  // ─── Auth checks ──────────────────────────────────────────────────────────

  hasToken(): boolean {
    return !!this.getToken();
  }

  isAdminLoggedIn(): boolean {
    return this.hasToken() && this.hasRole('ADMIN');
  }

  /** Backend role is MEMBER (not USER) */
  isUserLoggedIn(): boolean {
    return this.hasToken() && this.hasRole('MEMBER');
  }

  isTrainerLoggedIn(): boolean {
    return this.hasToken() && this.hasRole('TRAINER');
  }

  isStaffLoggedIn(): boolean {
    return this.hasToken() && this.hasRole('STAFF');
  }

  // ─── Sign out ─────────────────────────────────────────────────────────────

  signOut(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(USER);
    this.loggedInSubject$.next(false);
  }
}