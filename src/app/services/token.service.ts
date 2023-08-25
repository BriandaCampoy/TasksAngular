import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

/**
 * A service responsible for handling token-related operations.
 */
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  /**
   * Saves the authentication token as a cookie.
   * @param token - The authentication token to be saved.
   */
  saveToken(token: string) {
    setCookie('token', token, { expires: 365, path: '/' });
  }

  /**
   * Retrieves the authentication token from the cookie.
   * @returns The authentication token if present, otherwise undefined.
   */
  getToken(): string | undefined {
    const token = getCookie('token');
    return token;
  }

  /**
   * Removes the authentication token cookie.
   */
  removeToken() {
    removeCookie('token');
  }
}
