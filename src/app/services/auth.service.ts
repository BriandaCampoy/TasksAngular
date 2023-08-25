import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { tap, BehaviorSubject } from 'rxjs';
import { LoginInterface } from '@interfaces/login.interface';
import { CreateUserInterface } from '@interfaces/create-user.interface';
import { ResponseLoginInterface } from '@interfaces/response-login.interface';
import { UserInterface } from '@interfaces/user.interface';

/**
 * A service responsible for handling authentication-related operations.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * The base URL for authentication-related API endpoints.
   */
  apiUrl = `${environment.API_URL}/auth`;
  /**
   * A BehaviorSubject that holds the current user's data.
   */
  user$ = new BehaviorSubject<UserInterface | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  /**
   * Attempts to log in the user using provided credentials.
   * @param user - The user's login credentials.
   * @returns An Observable of the login response.
   */
  login(user: LoginInterface) {
    return this.http
      .post<ResponseLoginInterface>(`${this.apiUrl}/login`, user)
      .pipe(
        tap((response) => {
          this.user$.next(response.userPublicData);
          this.tokenService.saveToken(response.token);
        })
      );
  }

  /**
   * Registers a new user.
   * @param newUser - The new user's information.
   * @returns An Observable of the registration response.
   */
  register(newUser: CreateUserInterface) {
    return this.http.post(`${this.apiUrl}/register`, newUser);
  }

  /**
   * Retrieves the user's profile information.
   * @returns An Observable of the user's profile data.
   */
  getProfile() {
    const token = this.tokenService.getToken();
    return this.http.get<UserInterface>(`${this.apiUrl}/profile`, {
      headers: {
        'auth-token': `${token}`,
      },
    });
  }

  /**
   * Logs the user out, removing their authentication token and reloading the page.
   */
  logout() {
    this.tokenService.removeToken();
    window.location.reload();
  }
}
