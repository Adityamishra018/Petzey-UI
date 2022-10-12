import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAppointmentComponent } from './view-all-appointment.component';

describe('ViewAllAppointmentComponent', () => {
  let component: ViewAllAppointmentComponent;
  let fixture: ComponentFixture<ViewAllAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
