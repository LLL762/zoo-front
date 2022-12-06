import { Injectable } from '@angular/core';
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
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const logInStatus = this.loginService.getStatus();

    if (doNotCheck.includes(request.url)) {
      next.handle(request);
    }

    switch (logInStatus) {
      case 'LOG_IN':
        this.setAuthHeader(request);
        break;
      case 'NEED_REFRESH':
        this.loginService.refreshToken();
        this.setAuthHeader(request);
        break;
      default:
        this.router.navigate([EnvUtil.getUrl('LOGIN')]);
        break;
    }

    return next.handle(request);
  }

  setAuthHeader(req: HttpRequest<unknown>) {
    const bearerToken = localStorage.getItem('bearer-token');
    if (!bearerToken) {
      throw new Error('');
    }
    req.headers.set('Authorization', this.bearerPrefix + bearerToken);
  }
}
