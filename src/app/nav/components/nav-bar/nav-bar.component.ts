import { Component, OnInit } from '@angular/core';
import { LoginService, LogInStatus } from 'src/app/auth/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  fontStyleUrl?: string;

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
