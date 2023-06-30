import { TestBed } from '@angular/core/testing';

import { EvenBusService } from './even-bus.service';

describe('EvenBusService', () => {
  let service: EvenBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
