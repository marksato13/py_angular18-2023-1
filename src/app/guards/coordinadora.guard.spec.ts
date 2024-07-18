import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { coordinadoraGuard } from './coordinadora.guard';

describe('coordinadoraGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => coordinadoraGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
