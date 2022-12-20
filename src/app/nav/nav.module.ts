import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SettingsTabComponent } from './components/settings-tab/settings-tab.component';
import { SettingsService } from './services/settings.service';
import { FontService } from './services/settings/font.service';
import { ThemeService } from './services/settings/theme.service';



@NgModule({
  declarations: [NavBarComponent, SettingsTabComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, SettingsTabComponent],
  providers: [ThemeService, FontService, SettingsService]

})
export class NavModule {


}
