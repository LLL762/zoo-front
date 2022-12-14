import { Component, OnInit } from '@angular/core';
import { LoginService, LogInStatus } from 'src/app/auth/login.service';
import { FontUrl } from 'src/app/preferences/Preferences';
import { PreferencesService } from 'src/app/preferences/preferences.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  fontStyleUrl?: string;

  constructor(
    private loginService: LoginService,
    private preferenceService: PreferencesService
  ) { }

  logOut() {
    this.loginService.logOut();
  }

  changeFont(fontUrl: string) {
    this.preferenceService.setFont(fontUrl as FontUrl);
  }

  isLogOut() {
    return this.loginService.getStatus() == "LOG_OUT";
  }
  ngOnInit(): void {
    this.fontStyleUrl = this.preferenceService.getAndApplyFont();
  }
}
