import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTilesComponent } from './appointment-tiles.component';

describe('AppointmentTilesComponent', () => {
  let component: AppointmentTilesComponent;
  let fixture: ComponentFixture<AppointmentTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
