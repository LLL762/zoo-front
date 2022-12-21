import { Component, Input, OnInit } from '@angular/core';
import { LoginService, LogInStatus } from 'src/app/auth/login.service';
import { SettingsModel } from '../../model/settings.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() settingsModel?: SettingsModel

  constructor(
    private loginService: LoginService,
  ) { }

  logOut() {
    this.loginService.logOut();
  }



  isLogOut() {
    return this.loginService.getStatus() == "LOG_OUT";
  }
  ngOnInit(): void {

  }
}
