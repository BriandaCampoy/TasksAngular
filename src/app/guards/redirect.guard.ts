import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@services/token.service';

/**
 * RedirectGuard is a route guard that prevents authenticated users
 * from accessing certain routes by redirecting them to another route.
 */
export const redirectGuard: CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);

  if (token) {
    router.navigate(['/app']);
  }
  return true;
};
