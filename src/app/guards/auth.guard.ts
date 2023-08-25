import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '@services/token.service';
import { CanActivateFn } from '@angular/router';

/**
 * AuthGuard is a route guard that prevents access to certain routes
 * if the user is not authenticated (has no valid token).
 */
export const AuthGuard: CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);

  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
