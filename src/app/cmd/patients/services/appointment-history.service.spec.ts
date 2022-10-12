import { TestBed } from '@angular/core/testing';

import { AppointmentHistoryService } from './appointment-history.service';

describe('AppointmentHistoryService', () => {
  let service: AppointmentHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
