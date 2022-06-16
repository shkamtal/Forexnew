import { TestBed } from '@angular/core/testing';

import { ReceipientDetailsServiceService } from './receipient-details-service.service';

describe('ReceipientDetailsServiceService', () => {
  let service: ReceipientDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipientDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
