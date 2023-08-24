import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { tap, BehaviorSubject } from 'rxjs';
import { LoginInterface } from '@interfaces/login.interface';
import { CreateUserInterface } from '@interfaces/create-user.interface';
import { ResponseLoginInterface } from '@interfaces/response-login.interface';
import { UserInterface } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `${environment.API_URL}/auth`;
  user$ = new BehaviorSubject< UserInterface | null>(null);

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(user: LoginInterface) {
    return this.http.post<ResponseLoginInterface>(`${this.apiUrl}/login`, user).pipe(
      tap((response) => {
        this.user$.next(response.userPublicData);
        this.tokenService.saveToken(response.token)
      })
    );
  }

  register(newUser: CreateUserInterface) {
    return this.http.post(`${this.apiUrl}/register`, newUser)
  }

  getProfile(){
    const token = this.tokenService.getToken();
    return this.http.get<UserInterface>(`${this.apiUrl}/profile`,{
      headers: {
        'auth-token': `${token}`
      }
    })
  }

  logout(){
    this.tokenService.removeToken();
  }



}
