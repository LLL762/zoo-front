import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = environment.api.urls.BASE + environment.api.urls.LOGIN;

  constructor(private http: HttpClient) {}

  logIn(username: string, password: string) {
    return (
      this.http
        .post<any>(this.loginUrl, { username, password })
        .pipe(tap((res) => this.setSession)),
      shareReplay()
    );
  }

  private setSession(bearerToken: any) {
    localStorage.setItem('bearer_token', bearerToken);
    localStorage.setItem('expires_at', bearerToken.exp);
  }
}
