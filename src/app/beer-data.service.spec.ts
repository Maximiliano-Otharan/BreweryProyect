import { TestBed } from '@angular/core/testing';

import { BeerDataService } from './beer-data.service';

describe('BeerDataService', () => {
  let service: BeerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
