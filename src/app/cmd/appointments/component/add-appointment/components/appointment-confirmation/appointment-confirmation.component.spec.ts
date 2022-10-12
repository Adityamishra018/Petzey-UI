import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentConfirmationComponent } from './appointment-confirmation.component';

describe('AppointmentConfirmationComponent', () => {
  let component: AppointmentConfirmationComponent;
  let fixture: ComponentFixture<AppointmentConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
