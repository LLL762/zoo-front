import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, LogInStatus } from 'src/app/auth/login.service';
import { AppRoutes } from 'src/app/configs/routes';
import { screenConfigs } from 'src/app/configs/screen.config';
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
  screenWidth: number = window.innerWidth;


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

  goToZonesMap() {
    this.router.navigate([AppRoutes.getUri('zoneMap')]);
  }


  isScreenSmall() {
    return this.screenWidth <= screenConfigs.breakpoints.small;
  }


  showSettings(event: any) {
    this.status.showSettingsTabs = !this.status.showSettingsTabs;
    event.stopPropagation();
  }

  isLogOut() {
    return this.loginService.getStatus() == "LOG_OUT";
  }
  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.status.showSettingsTabs = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }
}
