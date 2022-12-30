import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones-map',
  templateUrl: './zones-map.component.html',
  styleUrls: ['./zones-map.component.scss']
})
export class ZonesMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToEnclosure() {
    console.log(7777);

  };

}
