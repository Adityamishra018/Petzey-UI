import { TestBed } from '@angular/core/testing';

import { PatientdetailsService } from './patientdetails.service';

describe('PatientdetailsService', () => {
  let service: PatientdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
