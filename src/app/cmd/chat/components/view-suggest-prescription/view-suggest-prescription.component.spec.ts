import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuggestPrescriptionComponent } from './view-suggest-prescription.component';

describe('ViewSuggestPrescriptionComponent', () => {
  let component: ViewSuggestPrescriptionComponent;
  let fixture: ComponentFixture<ViewSuggestPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSuggestPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuggestPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
