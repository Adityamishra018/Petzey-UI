import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentgridviewComponent } from './appointmentgridview.component';

describe('AppointmentgridviewComponent', () => {
  let component: AppointmentgridviewComponent;
  let fixture: ComponentFixture<AppointmentgridviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentgridviewComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentgridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
