import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSchudleComponent } from './appointment-schudle.component';

describe('AppointmentSchudleComponent', () => {
  let component: AppointmentSchudleComponent;
  let fixture: ComponentFixture<AppointmentSchudleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSchudleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSchudleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
