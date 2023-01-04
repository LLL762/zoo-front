import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones-map',
  templateUrl: './zones-map.component.html',
  styleUrls: ['./zones-map.component.scss']
})
export class ZonesMapComponent implements OnInit {
  enclosureId?: string;

  constructor() { }

  ngOnInit(): void {
  }

  setEnclosureId(id?: string) {
    this.enclosureId = id;
  }

  goToEnclosure() {



  };

}
