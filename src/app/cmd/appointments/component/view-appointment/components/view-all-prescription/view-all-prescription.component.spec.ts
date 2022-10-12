import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPrescriptionComponent } from './view-all-prescription.component';

describe('ViewAllPrescriptionComponent', () => {
  let component: ViewAllPrescriptionComponent;
  let fixture: ComponentFixture<ViewAllPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
