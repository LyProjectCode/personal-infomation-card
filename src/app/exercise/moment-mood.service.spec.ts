import { TestBed } from '@angular/core/testing';

import { MomentMoodService } from './moment-mood.service';

describe('MomentMoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MomentMoodService = TestBed.get(MomentMoodService);
    expect(service).toBeTruthy();
  });
});
