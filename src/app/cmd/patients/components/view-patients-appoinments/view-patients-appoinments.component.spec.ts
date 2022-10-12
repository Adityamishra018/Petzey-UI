import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientsAppoinmentsComponent } from './view-patients-appoinments.component';

describe('ViewPatientsAppoinmentsComponent', () => {
  let component: ViewPatientsAppoinmentsComponent;
  let fixture: ComponentFixture<ViewPatientsAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPatientsAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientsAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
