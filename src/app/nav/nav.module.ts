import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';

@NgModule({
  declarations: [NavBarComponent, SettingsTabComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, SettingsTabComponent],
})
export class NavModule { }
