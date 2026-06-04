











  

























import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  
  login(credentials: { email: string; password: string }): Observable<any> {
    const payload = {
      username: credentials.email,   
      password: credentials.password
    };
    return this.http.post(BASE_URL + '/auth/login', payload);
  }

  
  registeruser(registerData: any): Observable<any> {
    return this.http.post(BASE_URL + '/auth/register', registerData);
  }

  verifyEmailContext(token: string): Observable<{ requiresPasswordSetup: boolean }> {
    return this.http
      .get<any>(`${BASE_URL}/user/verify-email/context?token=${encodeURIComponent(token)}`)
      .pipe(
        map((res) => ({
          requiresPasswordSetup: Boolean(res?.data?.requiresPasswordSetup ?? res?.requiresPasswordSetup ?? false),
        }))
      );
  }

  verifyEmailLanding(token: string): Observable<string> {
    return this.http.get(`${BASE_URL}/user/verify-email?token=${encodeURIComponent(token)}`, {
      responseType: 'text',
    });
  }

  verifyEmail(payload: {
    token: string;
    password?: string;
    confirmPassword?: string;
  }): Observable<any> {
    return this.http.post(BASE_URL + '/user/verify-email', payload);
  }

  
  logout(refreshToken?: string): Observable<any> {
    return this.http.post(BASE_URL + '/auth/logout', { refreshToken });
  }

  
  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(BASE_URL + '/auth/refresh-token', { refreshToken });
  }
}