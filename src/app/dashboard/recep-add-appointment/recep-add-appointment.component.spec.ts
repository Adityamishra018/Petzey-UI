import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepAddAppointmentComponent } from './recep-add-appointment.component';

describe('RecepAddAppointmentComponent', () => {
  let component: RecepAddAppointmentComponent;
  let fixture: ComponentFixture<RecepAddAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepAddAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepAddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
