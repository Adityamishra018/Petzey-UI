import { TestBed } from '@angular/core/testing';

import { DoctordetailsService } from './doctordetails.service';

describe('DoctordetailsService', () => {
  let service: DoctordetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctordetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

