import { TestBed } from '@angular/core/testing';

import { StartsnortService } from './startsnort.service';

describe('StartsnortService', () => {
  let service: StartsnortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartsnortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
