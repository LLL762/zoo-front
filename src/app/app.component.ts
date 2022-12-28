import { Component, OnInit } from '@angular/core';
import { LoginService } from './auth/login.service';
import { LoginComponent } from './auth/login/login.component';
import { AppUser } from './auth/model/AppUser';
import { SettingsModel } from './nav/model/settings.model';
import { SettingsService } from './nav/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  settingsModel?: SettingsModel;
  title = 'zoo-front';

  constructor(private settingService: SettingsService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.settingsModel = this.settingService.buildModel();
  }


}
