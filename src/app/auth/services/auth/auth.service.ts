// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';



// //const BASE_URL = "http://localhost:8080/"; 
// //const BASE_URL = "https://gth-backend.onrender.com/"; 
// const BASE_URL = "http://localhost:3000/";

// @Injectable({
//   providedIn: 'root'
  
// })
// export class AuthService {

//   constructor(private http:HttpClient) { }

//   registeruser(signupRequest: any): Observable<any> {
//     // return this.http.post(BASE_URL+"api/auth/signup", signupRequest);
//     return this.http.post(BASE_URL+"auth/signup", signupRequest);

//   }

//   login(loginRequest: any): Observable<any> {
//     // return this.http.post(BASE_URL+"api/auth/login", loginRequest);
//     return this.http.post(BASE_URL+"auth/login", loginRequest);
//   }

//    // Registration function
//    submitOrhanizerRegistration(registrationData: any): Observable<any> {
//     // return this.http.post(BASE_URL + "api/auth/organizer/register", registrationData);
//     return this.http.post(BASE_URL + "auth/organizer/register", registrationData);
//   }


// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  /**
   * Login - backend expects { username, password }
   * (username field accepts email value)
   * Response shape: { data: { accessToken, newRefreshToken }, ... }
   */
  login(credentials: { email: string; password: string }): Observable<any> {
    const payload = {
      username: credentials.email,   // backend field is "username"
      password: credentials.password
    };
    return this.http.post(BASE_URL + 'auth/login', payload);
  }

  /**
   * Public member self-registration
   * Backend expects: { firstName, lastName, email, password, confirmPassword }
   * Response shape: { data: { id, firstName, lastName, email, ... }, ... }
   */
  registeruser(registerData: any): Observable<any> {
    return this.http.post(BASE_URL + 'auth/register', registerData);
  }

  verifyEmailLanding(token: string): Observable<string> {
    return this.http.get(`${BASE_URL}user/verify-email?token=${encodeURIComponent(token)}`, {
      responseType: 'text',
    });
  }

  verifyEmail(payload: {
    token: string;
    password?: string;
    confirmPassword?: string;
  }): Observable<any> {
    return this.http.post(BASE_URL + 'user/verify-email', payload);
  }

  /**
   * Logout - revoke refresh token
   */
  logout(refreshToken?: string): Observable<any> {
    return this.http.post(BASE_URL + 'auth/logout', { refreshToken });
  }

  /**
   * Refresh access token using refresh token
   */
  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(BASE_URL + 'auth/refresh-token', { refreshToken });
  }
}