import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureInfoComponent } from './enclosure-info.component';

describe('EnclosureInfoComponent', () => {
  let component: EnclosureInfoComponent;
  let fixture: ComponentFixture<EnclosureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnclosureInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnclosureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
