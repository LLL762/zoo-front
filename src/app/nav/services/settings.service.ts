import { Injectable } from '@angular/core';
import { ThemeName } from '../configs/settings.config';
import { SettingsModel } from '../model/settings.model';
import { ThemeService } from './settings/theme.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  readonly themeService: ThemeService;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }

  buildModel(): SettingsModel {
    return {
      themes: this.themeService.getThemes(),
      theme: this.themeService.getCurrentTheme()
    }
  }

  setTheme(themeName: string) {
    if (!this.themeService.isThemeName(themeName)) {
      return;
    }
    this.themeService.setTheme(themeName as ThemeName);
  };
}



