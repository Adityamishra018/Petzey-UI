import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrescriptionDetailsComponent } from './view-prescription-details.component';

describe('ViewPrescriptionDetailsComponent', () => {
  let component: ViewPrescriptionDetailsComponent;
  let fixture: ComponentFixture<ViewPrescriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrescriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
