import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import EnvUtil from 'src/app/util/EnvUtil';

const doNotCheck = [EnvUtil.getUrl('LOGIN'), EnvUtil.getUrl('REFRESH_TOKEN')];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly bearerPrefix = environment.jwt.bearerPrefix;

  constructor(private loginService: LoginService, private router: Router) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const logInStatus = this.loginService.getStatus();

    if (!this.isApiRequest(req) || doNotCheck.includes(req.url)) {
      next.handle(req);
    }

    console.log(logInStatus);

    switch (logInStatus) {
      case 'LOG_IN':
        return next.handle(this.setAuthHeader(req));
      case 'NEED_REFRESH':
        this.loginService.refreshToken().subscribe({
          next: (resp) => {
            this.loginService.storeTokens(resp);
          },
          error: (err) => {
            console.log(err);
            this.redirectToLogin();
          },
        });
        return next.handle(this.setAuthHeader(req));
      default:
        this.redirectToLogin();
        break;
    }

    return next.handle(req);
  }

  redirectToLogin() {
    this.router.navigate([EnvUtil.getAppUri('LOGIN')]);
  }

  isApiRequest(req: HttpRequest<unknown>) {
    return req.url.startsWith(EnvUtil.getUrl('BASE'));
  }

  setAuthHeader(req: HttpRequest<unknown>) {
    const bearerToken = localStorage.getItem('bearer_token');

    if (!bearerToken) {
      throw new Error('No token !');
    }

    return req.clone({
      headers: req.headers.append(
        'Authorization',
        this.bearerPrefix + bearerToken
      ),
    });
  }
}
