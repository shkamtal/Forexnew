import { TestBed } from '@angular/core/testing';

import { MoneyTransferServiceService } from './money-transfer-service.service';

describe('MoneyTransferServiceService', () => {
  let service: MoneyTransferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyTransferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
