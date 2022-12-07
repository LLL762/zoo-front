import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs';
import { LoginRequest } from './model/LoginRequest';
import EnvUtil from 'src/app/util/EnvUtil';

@Injectable()
export class LoginService {
  private readonly loginUrl = EnvUtil.getUrl('LOGIN');
  private readonly refreshUrl = EnvUtil.getUrl('REFRESH_TOKEN');

  private bearerSuffix = environment.jwt.bearerPrefix;

  constructor(private http: HttpClient) {}

  logIn(loginReq: LoginRequest) {
    return this.http
      .post<any>(this.loginUrl, loginReq, { observe: 'response' })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.storeTokens(res);
        }),
        shareReplay()
      );
  }

  refreshToken() {
    const refreshToken = localStorage.getItem('refresh-token-exp');

    if (!refreshToken) {
      throw new Error();
    }

    return this.http
      .post<any>(this.refreshUrl, refreshToken, { observe: 'response' })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.storeTokens(res);
        }),
        shareReplay()
      );
  }

  private storeTokens(res: HttpResponse<any>) {
    const authorizationHeader = res.headers.get('Authorization');
    if (
      !authorizationHeader ||
      !authorizationHeader.startsWith(this.bearerSuffix)
    ) {
      return;
    }
    const bearerToken = authorizationHeader.substring(this.bearerSuffix.length);
    const refreshToken = res.body.refreshToken;
    const bearerPayload = JSON.parse(atob(bearerToken.split('.')[1]));
    const refreshPayload = JSON.parse(atob(refreshToken.split('.')[1]));
    localStorage.setItem('bearer_token', bearerToken);
    localStorage.setItem('refresh_token', refreshToken);
    localStorage.setItem('username', bearerPayload.username);
    localStorage.setItem('userId', bearerPayload.id);
    localStorage.setItem('bearer_token_exp', bearerPayload.exp);
    localStorage.setItem('refresh_token_exp', refreshPayload.exp);
  }

  logOut() {
    localStorage.removeItem('bearer_token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('bearer_token_exp');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('refresh_token_exp');
  }

  isLogIn() {
    const exp = localStorage.getItem('bearer_token_exp');

    return exp != null && Date.now() < +exp * 1000;
  }
  canRefresh() {
    const exp = localStorage.getItem('refresh_token_exp');
    const margin = 1000;
    return exp != null && Date.now() < +exp * 1000 - margin;
  }

  getStatus(): LogInStatus {
    if (this.isLogIn()) {
      return 'LOG_IN';
    }
    if (this.canRefresh()) {
      return 'NEED_REFRESH';
    }
    return 'LOG_OUT';
  }
}

export type LogInStatus = 'LOG_IN' | 'LOG_OUT' | 'NEED_REFRESH';
