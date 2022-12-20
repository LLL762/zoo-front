import { Component, OnInit, Output } from '@angular/core';
import { Theme, ThemeName } from '../../configs/settings.config';
import { SettingsModel } from '../../model/settings.model';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.scss']
})
@Output()
export class SettingsTabComponent implements OnInit {
  baseModel?: SettingsModel;


  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.baseModel = this.settingsService.buildModel();
  }

  setTheme(theme: string) {
    this.settingsService.setTheme(theme);
  }

}
