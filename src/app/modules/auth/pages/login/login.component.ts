import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface } from '@interfaces/login.interface';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  errorFlag:boolean = false
  errorMessage: string = ''

  user: LoginInterface = {
    email: '',
    password: '',
  };

  doLogin() {
    this.authService.login(this.user).subscribe(
      (res) => {
        this.router.navigate(['/app']);
      },
      (error) => {
        this.errorFlag = true;
        this.errorMessage = 'invalid credentials'
      }
    );
  }
}
