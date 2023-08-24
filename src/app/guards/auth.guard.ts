import { Router } from '@angular/router';
import { inject } from '@angular/core';
import {TokenService} from '@services/token.service'
import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);

  if (!token) {
  router.navigate(['/login']);
  return false;
  }
  return true;
  };


