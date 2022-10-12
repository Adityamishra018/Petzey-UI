import { TestBed } from '@angular/core/testing';

import { AddPrescriptionService } from './add-prescription.service';

describe('AddPrescriptionService', () => {
  let service: AddPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
