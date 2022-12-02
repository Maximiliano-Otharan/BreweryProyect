import { TestBed } from '@angular/core/testing';

import { BeersCartService } from './beers-cart.service';

describe('BeersCartService', () => {
  let service: BeersCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
