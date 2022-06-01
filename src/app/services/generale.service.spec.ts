import { TestBed } from '@angular/core/testing';

import { GeneraleService } from './generale.service';

describe('GeneraleService', () => {
  let service: GeneraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
