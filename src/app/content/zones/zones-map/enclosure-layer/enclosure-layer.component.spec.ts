import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureLayerComponent } from './enclosure-layer.component';

describe('EnclosureLayerComponent', () => {
  let component: EnclosureLayerComponent;
  let fixture: ComponentFixture<EnclosureLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnclosureLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnclosureLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
