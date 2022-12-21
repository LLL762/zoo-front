import { Injectable } from '@angular/core';
import { settingsConfig, ThemeName, Theme } from '../../configs/settings.config';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly configs = settingsConfig.theme;
  private readonly darkTheme = this.getThemeByName("dark");
  private readonly themeNames = this.configs.values.map(theme => theme.name);


  constructor() {
  }

  getThemes() {
    return this.configs.values;
  }

  getThemeByName(themeName: ThemeName) {
    return this.configs.values.find((theme) => theme.name === themeName) as Theme;
  }

  isThemeName(value: string) {
    return this.themeNames.includes(value as ThemeName);
  }

  doesOsPrefersDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  loadTheme() {
    const local = localStorage.getItem(this.configs.localStoreKey);

    if ((local == null || !this.isThemeName(local))) {
      return this.doesOsPrefersDark() && this.darkTheme ? this.darkTheme : this.configs.default;
    }

    return this.getThemeByName(local as ThemeName);
  }

  saveTheme(themeName: ThemeName) {
    try {
      localStorage.setItem(this.configs.localStoreKey, themeName);
      return this.getThemeByName(themeName);
    }
    catch (err) {
      console.log(err);
    };
    return;
  }


}
