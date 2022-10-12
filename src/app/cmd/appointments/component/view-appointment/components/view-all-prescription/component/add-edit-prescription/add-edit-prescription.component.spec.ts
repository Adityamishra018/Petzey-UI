import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrescriptionComponent } from './add-edit-prescription.component';

describe('AddEditPrescriptionComponent', () => {
  let component: AddEditPrescriptionComponent;
  let fixture: ComponentFixture<AddEditPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
