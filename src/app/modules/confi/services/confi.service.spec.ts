import { TestBed } from '@angular/core/testing';

import { ConfiService } from './confi.service';

describe('ConfiService', () => {
  let service: ConfiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
