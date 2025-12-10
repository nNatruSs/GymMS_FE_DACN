// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// const TOKEN = "token";
// const USER = "user";

// @Injectable({
//   providedIn: 'root'
  
// })
// export class StorageService {
  
//   static loggedInSubject$ = new BehaviorSubject<boolean>(false);


//   constructor() { }


//   static saveToken(token: string):void{
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.setItem(TOKEN, token);
//   }

//   static saveUser(user: any):void{
//     window.localStorage.removeItem(USER);
//     window.localStorage.setItem(USER, JSON.stringify(user));
//   }

//   static getToken():string{
//     return localStorage.getItem(TOKEN);
//   }

//   static getUser():any{
//     return JSON.parse(localStorage.getItem(USER));
//   }

//   static getUserRole():string{
//     const user = this.getUser();
//     if(user == null) return '';
//     return user.role;
//   }

//   static isAdminLoggedIn(): boolean{
//     if(this.getToken()==null) return false;
//     const role: string = this.getUserRole();
//     return role === "ADMIN";
//   }

//   static isUserLoggedIn(): boolean{
//     if(this.getToken()==null) return false;
//     const role: string = this.getUserRole();
//     return role === "USER";
//   }

//   static isOrganizerLoggedIn(): boolean{
//     if(this.getToken()==null) return false;
//     const role: string = this.getUserRole();
//     return role === "ORGANIZER";
//   }

  

//   static hasToken(): boolean{
//     if(this.getToken()==null) return false;
//     return true;
//   }

//   static getUserId():string{
//     const user = this.getUser();
//     if(user==null) return "";
//     return user.id;
//   }

//   static signOut():void{
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.removeItem(USER);
//   }


// }

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

const TOKEN = 'token';
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

  saveToken(token: string): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(TOKEN, token);
    this.loggedInSubject$.next(true);
  }

  saveUser(user: any): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(USER, JSON.stringify(user));
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(TOKEN);
  }

  getUser(): any {
    if (!this.isBrowser()) return null;
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  getUserRole(): string {
    return this.getUser()?.role ?? '';
  }

  isAdminLoggedIn(): boolean {
    return !!this.getToken() && this.getUserRole() === 'ADMIN';
  }

  isUserLoggedIn(): boolean {
    return !!this.getToken() && this.getUserRole() === 'USER';
  }

  isOrganizerLoggedIn(): boolean {
    return !!this.getToken() && this.getUserRole() === 'ORGANIZER';
  }

  isTrainerLoggedIn(): boolean {
    return !!this.getToken() && this.getUserRole() === 'TRAINER';
  }

  hasToken(): boolean {
    return !!this.getToken();
  }

  getUserId(): string {
    return this.getUser()?.id ?? '';
  }

  signOut(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    this.loggedInSubject$.next(false);
  }
}

