import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, shareReplay, tap } from 'rxjs';
import { LoginRequest } from './model/LoginRequest';

@Injectable()
export class LoginService {
  private loginUrl = environment.api.urls.BASE + environment.api.urls.LOGIN;
  private headers = new HttpHeaders()
    .set('content-type', 'application/json');


  constructor(private http: HttpClient) { }

  logIn(loginReq: LoginRequest) {
    return this.http
      .post<any>(this.loginUrl, loginReq, { headers: this.headers })
      .pipe(tap((res) => {
        console.log(res);
      }),
        shareReplay(),
      )
  }
}
