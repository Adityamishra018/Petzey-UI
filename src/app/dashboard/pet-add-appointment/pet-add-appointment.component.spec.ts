import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddAppointmentComponent } from './pet-add-appointment.component';

describe('PetAddAppointmentComponent', () => {
  let component: PetAddAppointmentComponent;
  let fixture: ComponentFixture<PetAddAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetAddAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetAddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
