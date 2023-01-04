import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonesMapComponent } from './presentation/zones-map/zones-map.component';
import { AppRoutes } from 'src/app/configs/routes';
import { RouterModule } from '@angular/router';
import { EnclosureLayerComponent } from './presentation/enclosure-layer/enclosure-layer.component';
import { EnclosuresModule } from "../enclosures/enclosures.module";





const routes = [{ path: AppRoutes.getUri('zoneMap'), component: ZonesMapComponent }];


@NgModule({
  declarations: [
    ZonesMapComponent,
    EnclosureLayerComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EnclosuresModule

  ]
})
export class ZonesModule { }
