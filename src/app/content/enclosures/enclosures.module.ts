import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnclosureInfoComponent } from './presentation/enclosure-info/enclosure-info.component';



@NgModule({
  declarations: [EnclosureInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [EnclosureInfoComponent]
})
export class EnclosuresModule { }
