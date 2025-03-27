import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/Register';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private httpClient = inject(HttpClient);
  private loggedIn: boolean = false;
  private token: string | null = null;

  public register(register: Register): Observable<any> {
    return this.httpClient.post<any>(
      "http://localhost:8080/api/auth/register", register
    ).pipe(
      tap(responseData => {
        if (responseData.token) {
          this.loggedIn = true;
          this.token = responseData.token;
          this.saveTokenInLocalStorage(responseData.token);
        }
      })
    )
      ;
  }

  private saveTokenInLocalStorage(token: string): void {
    localStorage.setItem('authToken', token);
  }
}
