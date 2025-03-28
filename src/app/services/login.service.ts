import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';
import {ResponseLoginData} from '../models/ResponseLoginData';
import {tap} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient = inject(HttpClient);
  private loggedIn: boolean = false;
  private token: string | null = null;

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

  public login(login: Login)  {
    const subscription = this.httpClient.post<ResponseLoginData>(
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
    return subscription;
  }

  private saveTokenInLocalStorage(token: string): void {
    localStorage.setItem('authToken', token);
  }

  private loadTokenFromLocalStorage(): void {
    this.token = localStorage.getItem('authToken');
  }
}
