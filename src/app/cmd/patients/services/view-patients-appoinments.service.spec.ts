import { TestBed } from '@angular/core/testing';

import { ViewPatientsAppoinmentsService } from './view-patients-appoinments.service';

describe('ViewPatientsAppoinmentsService', () => {
  let service: ViewPatientsAppoinmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPatientsAppoinmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
