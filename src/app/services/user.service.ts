import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string;
  constructor(private router: Router, private http: HttpClient) {
    this.baseURL = environment.baseURL;
  }

  //fetch user
  findAllUsers(): Observable<any> {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('access_token')}`
    );
    return this.http.get(`${this.baseURL}/users`, { headers: header }).pipe(
      tap((res) => {
        console.log(res);
        console.log(`TAP user lists`);
      }),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err.message);
      })
    );
  }
}
