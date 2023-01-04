import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enclosure-layer',
  templateUrl: './enclosure-layer.component.html',
  styleUrls: ['./enclosure-layer.component.scss']
})
export class EnclosureLayerComponent implements OnInit {

  @Output() enclosureIdEmitter = new EventEmitter<string>();
  private enclosureIdPrefix = "zoo-map-enclosure-";

  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll(".path-enclosure").forEach(
      elem => elem.addEventListener("click", this.enclosureElemOnClick)
    );
  }


  private enclosureElemOnClick = (e: any) => {
    const source = e.target;
    const id = this.getEnclosureId(source.id);
    this.enclosureIdEmitter.emit(id);
  }

  private getEnclosureId(htmlElemId?: string): string | undefined {
    if (typeof htmlElemId === "undefined" || !htmlElemId.startsWith(this.enclosureIdPrefix)) {
      return undefined;
    }
    return htmlElemId.slice(this.enclosureIdPrefix.length);
  }

}
