import { Injectable } from '@angular/core';
import { FontName, ThemeName } from '../configs/settings.config';
import { SettingsModel } from '../model/settings.model';
import { FontService } from './settings/font.service';
import { ThemeService } from './settings/theme.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {



  constructor(private themeService: ThemeService, private fontService: FontService) {

  }

  buildModel(): SettingsModel {
    return {
      themes: this.themeService.getThemes(),
      fonts: this.fontService.getFonts(),
      theme: this.themeService.loadTheme(),
      font: this.fontService.loadFont(),
    }
  }

  setTheme(themeName: string) {
    if (!this.themeService.isThemeName(themeName)) {
      return;
    }
    return this.themeService.saveTheme(themeName as ThemeName);
  };

  setFont(fontName: string) {
    if (!this.fontService.isFontName(fontName)) {
      return;
    }
    return this.fontService.saveFont(fontName as FontName);
  };




}



