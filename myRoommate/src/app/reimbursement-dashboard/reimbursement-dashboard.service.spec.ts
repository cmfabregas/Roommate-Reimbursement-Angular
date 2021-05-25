import { TestBed } from '@angular/core/testing';

import { ReimbursementDashboardService } from './reimbursement-dashboard.service';

describe('ReimbursementDashboardService', () => {
  let service: ReimbursementDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimbursementDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
