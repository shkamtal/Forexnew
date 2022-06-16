import { TestBed } from '@angular/core/testing';

import { BankDetailsServiceService } from './bank-details-service.service';

describe('BankDetailsServiceService', () => {
  let service: BankDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
