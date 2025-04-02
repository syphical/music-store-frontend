import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/Login';
import { Register } from '../models/Register';
import { ResponseLoginData } from '../models/ResponseLoginData';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private loggedIn: boolean = false;
  private token: string | null = null;
  private router = inject(Router);

  constructor() {
    this.loadTokenFromLocalStorage();
    if (this.token != null) {
      this.loggedIn = true;
    }
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public getToken(): string | null {
    return this.token;
  }

  public login(login: Login): Observable<ResponseLoginData> {
    return this.httpClient.post<ResponseLoginData>(
      environment.apiUrl + "/auth/login", login
    ).pipe(
      tap(responseData => {
        if (responseData.token) {
          this.loggedIn = true;
          this.token = responseData.token;
          this.saveTokenInLocalStorage(responseData.token);
        }
      })
    );
  }

  public register(register: Register): Observable<ResponseLoginData> {
    return this.httpClient.post<ResponseLoginData>(
      environment.apiUrl + "/auth/register", register
    ).pipe(
      tap(responseData => {
        if (responseData.token) {
          this.loggedIn = true;
          this.token = responseData.token;
          this.saveTokenInLocalStorage(responseData.token);
        }
      })
    );
  }

  public logout(): void {
    this.loggedIn = false;
    this.token = null;
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  private saveTokenInLocalStorage(token: string): void {
    localStorage.setItem('authToken', token);
  }

  private loadTokenFromLocalStorage(): void {
    this.token = localStorage.getItem('authToken');
  }
}
