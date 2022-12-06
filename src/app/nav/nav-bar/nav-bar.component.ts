import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  logOut() {
    this.loginService.logOut();
  }

  ngOnInit(): void {}
}
