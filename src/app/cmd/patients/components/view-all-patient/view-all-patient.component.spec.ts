import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPatientComponent } from './view-all-patient.component';

describe('ViewAllPatientComponent', () => {
  let component: ViewAllPatientComponent;
  let fixture: ComponentFixture<ViewAllPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
