import { Injectable } from '@angular/core';
import { settingsConfig, ThemeName, Theme, FontName, Font } from '../../configs/settings.config';

@Injectable({
  providedIn: 'root'
})
export class FontService {
  private readonly configs = settingsConfig.font;
  private readonly fontNames = this.configs.values.map(font => font.name);


  constructor() {
  }

  getFonts() {
    return this.configs.values;
  }

  getFontByName(fontName: FontName) {
    return this.configs.values.find((font) => font.name === fontName) as Font;
  }

  isFontName(value: string) {
    return this.fontNames.includes(value as FontName);
  }

  loadFont() {
    const local = localStorage.getItem(this.configs.localStoreKey);

    if ((local == null || !this.isFontName(local))) {
      return this.configs.default;
    }

    return this.getFontByName(local as FontName);
  }

  saveFont(fontName: FontName) {
    try {
      localStorage.setItem(this.configs.localStoreKey, fontName);
      return this.getFontByName(fontName);
    }
    catch (err) {
      console.log(err);
    };
    return;
  }
}
