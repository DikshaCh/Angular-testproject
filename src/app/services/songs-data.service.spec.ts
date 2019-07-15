import { TestBed } from '@angular/core/testing';

import { SongsDataService } from './songs-data.service';

describe('SongsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongsDataService = TestBed.get(SongsDataService);
    expect(service).toBeTruthy();
  });
});
