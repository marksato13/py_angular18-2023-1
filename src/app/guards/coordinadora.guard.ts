import { CanActivateFn } from '@angular/router';

export const coordinadoraGuard: CanActivateFn = (route, state) => {
  return true;
};
