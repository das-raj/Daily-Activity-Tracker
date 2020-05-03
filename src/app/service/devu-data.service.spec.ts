import { TestBed } from '@angular/core/testing';

import { DevuDataService } from './devu-data.service';

describe('DevuDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevuDataService = TestBed.get(DevuDataService);
    expect(service).toBeTruthy();
  });
});
