import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonesMapComponent } from './zones-map/zones-map.component';
import { AppRoutes } from 'src/app/configs/routes';
import { RouterModule } from '@angular/router';
import { EnclosureLayerComponent } from './zones-map/enclosure-layer/enclosure-layer.component';




const routes = [{ path: AppRoutes.getUri('zoneMap'), component: ZonesMapComponent }];


@NgModule({
  declarations: [
    ZonesMapComponent,
    EnclosureLayerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ZonesModule { }
