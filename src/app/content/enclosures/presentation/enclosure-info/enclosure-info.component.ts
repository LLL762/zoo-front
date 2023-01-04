import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EnclosureService } from '../../enclosure.service';
import { Enclosure } from '../../model/Enclosure';

@Component({
  selector: 'app-enclosure-info',
  templateUrl: './enclosure-info.component.html',
  styleUrls: ['./enclosure-info.component.scss']
})
export class EnclosureInfoComponent implements OnChanges {
  @Input() enclosureId?: string;
  enclosure?: Enclosure;

  constructor(private enclosureService: EnclosureService) { }


  ngOnChanges(changes: SimpleChanges): void {


    if (this.enclosureId) {
      this.enclosureService.getEnclosureById(this.enclosureId).subscribe(
        {
          next: (body) => {
            this.enclosure = body.data as Enclosure;
          },
          error: (err) => {
            console.log(err);
          },
        }
      );
    }
  }


}
