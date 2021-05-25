import { TestBed } from '@angular/core/testing';

import { RequestPaymentService } from './request-payment.service';

describe('RequestPaymentServiceService', () => {
  let service: RequestPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
