import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { AllAppointmentComponent } from './all-appointment.component';

describe('AllAppointmentComponent', () => {
  let component: AllAppointmentComponent;
  let fixture: ComponentFixture<AllAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAppointmentComponent ],
      imports:[MatDialogModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
