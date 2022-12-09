import { Injectable } from '@angular/core';
import { FontUrl } from './Preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  private readonly style: HTMLLinkElement;
  static FONT_URL_KEY = 'preferences-font-url';
  static FONT_URL_DEFAULT = 'font-default';

  constructor() {
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
  }

  getAndApplyFont() {
    const fontUrl =
      localStorage.getItem(PreferencesService.FONT_URL_KEY) ??
      PreferencesService.FONT_URL_DEFAULT;
    this.style.href = fontUrl;
    return fontUrl;
  }

  setFont(fontUrl: FontUrl) {
    this.style.href = fontUrl;
    localStorage.setItem(PreferencesService.FONT_URL_KEY, fontUrl);
  }
}
