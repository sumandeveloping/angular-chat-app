import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
  }

  //login api
  login(loginCredentials: {
    email: string;
    password: string;
  }): Observable<any> {
    //hit login api
    return this.http
      .post<any>(`${this.baseURL}/users/login`, loginCredentials, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        tap((res) => {
          console.log(`PIPE RETURNS ${res}`);
        }),
        map((token) => {
          console.log(token);
          localStorage.setItem('access_token', token.access_token);
          return token;
        }),
        catchError((err) => {
          // throw err.message;
          return throwError(err.message);
        })
      );
  }
}
