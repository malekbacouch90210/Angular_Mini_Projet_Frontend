import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mangaGuard } from './manga.guard';

describe('mangaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mangaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
