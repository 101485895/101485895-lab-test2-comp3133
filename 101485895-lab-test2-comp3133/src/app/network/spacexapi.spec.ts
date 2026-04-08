import { TestBed } from '@angular/core/testing';

import { Spacexapi } from './spacexapi';

describe('Spacexapi', () => {
  let service: Spacexapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spacexapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
