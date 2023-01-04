import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import EnvUtil from 'src/app/util/EnvUtil';
import { AppRoutes } from '../configs/routes';

const doNotCheck = [EnvUtil.getApiUrl('LOGIN'), EnvUtil.getApiUrl('REFRESH_TOKEN'), EnvUtil.getApiUrl('ENCLOSURES')];

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly bearerPrefix = environment.jwt.bearerPrefix;

  constructor(private loginService: LoginService, private router: Router) { }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const logInStatus = this.loginService.getStatus();

    if (!this.isApiRequest(req) || doNotCheck.includes(req.url)) {
      return next.handle(req);
    }

    console.log(logInStatus);

    switch (logInStatus) {
      case 'LOG_IN':
        return next.handle(this.setAuthHeader(req));
      case 'NEED_REFRESH':
        return this.loginService.refreshToken().pipe(
          switchMap((resp) => next.handle(this.setAuthHeader(req))),
          catchError((err) => {
            console.log(err);
            this.redirectToLogin();
            return EMPTY;
          })
        );
      default:
        this.redirectToLogin();
        return EMPTY;
    }
  }

  redirectToLogin() {
    this.router.navigate([AppRoutes.getUri('login')]);
  }

  isApiRequest(req: HttpRequest<unknown>) {
    return req.url.startsWith(EnvUtil.getApiUrl('BASE'));
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
