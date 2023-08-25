import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface } from '@interfaces/login.interface';
import { AuthService } from '@services/auth.service';

/**
 * Component for user login.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Flag to indicate if there's an error during login.
   */
  errorFlag: boolean = false;
  /**
   * Error message to display in case of login error.
   */
  errorMessage: string = '';

  /**
   * User login credentials.
   */
  user: LoginInterface = {
    email: '',
    password: '',
  };

  /**
   * Initiates the user login process.
   */
  doLogin() {
    this.authService.login(this.user).subscribe(
      (res) => {
        this.router.navigate(['/app']);
      },
      (error) => {
        this.errorFlag = true;
        this.errorMessage = 'invalid credentials';
      }
    );
  }
}
