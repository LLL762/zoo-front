import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, LogInStatus } from 'src/app/auth/login.service';
import { AppRoutes } from 'src/app/configs/routes';
import { NavBarStatus } from '../../model/nav-bar-status';
import { SettingsModel } from '../../model/settings.model';


//TO DO: add break-point for small screens.


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() settingsModel?: SettingsModel;
  status = new NavBarStatus();


  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  logOut() {
    this.loginService.logOut();
  }

  goToLogIn() {
    this.router.navigate([AppRoutes.getUri('login')]);
  }

  goToHome() {
    this.router.navigate([AppRoutes.getUri('home')]);
  }



  showSettings() {
    this.status.showSettingsTabs = !this.status.showSettingsTabs;

  }

  isLogOut() {
    return this.loginService.getStatus() == "LOG_OUT";
  }
  ngOnInit(): void {

  }
}
