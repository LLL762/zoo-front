import { Component, Input, OnInit, Output } from '@angular/core';
import { ThemeName } from '../../configs/settings.config';
import { SettingsModel } from '../../model/settings.model';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.scss']
})

export class SettingsTabComponent {
  @Input() settingsModel?: SettingsModel;


  constructor(private settingsService: SettingsService) { }

  setTheme(themeName: string) {
    if (this.settingsModel != undefined && themeName !== this.settingsModel.theme?.name) {
      const newTheme = this.settingsService.setTheme(themeName);
      if (newTheme) {
        this.settingsModel.theme = newTheme;
      }
    }
  }


  setFont(fontName: string) {
    if (this.settingsModel != undefined && fontName !== this.settingsModel.font?.name) {
      const newFont = this.settingsService.setFont(fontName);
      if (newFont) {
        this.settingsModel.font = newFont;
      }
    }
    console.log(this.settingsModel?.font);

  }
}
