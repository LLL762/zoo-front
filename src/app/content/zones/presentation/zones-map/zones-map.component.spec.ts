import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesMapComponent } from './zones-map.component';

describe('ZonesMapComponent', () => {
  let component: ZonesMapComponent;
  let fixture: ComponentFixture<ZonesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonesMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
