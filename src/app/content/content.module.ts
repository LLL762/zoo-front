import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksModule } from './tasks/tasks.module';
import { ZonesMapComponent } from './zones/zones-map/zones-map.component';
import { ZonesModule } from './zones/zones.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, TasksModule, ZonesModule],
})
export class ContentModule { }
