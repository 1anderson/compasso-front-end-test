import { TestBed } from '@angular/core/testing';

import { UserDetailFacadeService } from './user-detail-facade.service';

describe('UserDetailFacadeService', () => {
  let service: UserDetailFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
