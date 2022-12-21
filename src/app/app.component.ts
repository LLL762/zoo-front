import { Component, OnInit } from '@angular/core';
import { distinct, Observable, of, Subject } from 'rxjs';
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

  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.settingsModel = this.settingService.buildModel();
  }




}
