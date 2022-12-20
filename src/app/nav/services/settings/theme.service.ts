import { Injectable } from '@angular/core';
import { settingsConfig, ThemeName, Theme } from '../../configs/settings.config';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly style: HTMLLinkElement;
  private readonly configs = settingsConfig.theme;
  private readonly darkTheme = this.getTheme("dark");
  private readonly themeNames = this.configs.values.map(theme => theme.name);


  constructor() {
    this.style = document.createElement('link');
    document.head.append(this.style);
    this.style.rel = 'stylesheet';
    this.loadTheme();
  }

  getThemes() {
    return this.configs.values;
  }

  getTheme(themeName: ThemeName) {
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
      this.style.href = this.doesOsPrefersDark() && this.darkTheme ? this.darkTheme.cssUrl : this.configs.default.cssUrl;
      return;
    }

    this.style.href = this.getTheme(local as ThemeName).cssUrl;
  }

  setTheme(themeName: ThemeName) {
    const local = localStorage.getItem(settingsConfig.theme.localStoreKey);

    if (local !== themeName) {
      localStorage.setItem(this.configs.localStoreKey, themeName);
      this.style.href = this.getTheme(themeName).cssUrl;
    }

  }

  getCurrentTheme(): Theme | undefined {
    return this.configs.values.find((theme) => theme.cssUrl === this.style.href);
  }
}
