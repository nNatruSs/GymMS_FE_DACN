import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { trainerGuard } from './trainer.guard';

describe('trainerGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => trainerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
