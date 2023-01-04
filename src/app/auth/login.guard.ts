import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import EnvUtil from 'src/app/util/EnvUtil';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivateChild {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const logInStatus = this.loginService.getStatus();
    switch (logInStatus) {
      case 'LOG_IN':
        return true;
      case 'NEED_REFRESH':
        this.loginService.refreshToken().subscribe({
          error: (err) => {
            this.router.navigate([EnvUtil.getApiUrl('LOGIN')]);
          },
        });
        return true;
      default:
        this.router.navigate([EnvUtil.getApiUrl('LOGIN')]);
        return false;
    }
  }
}
