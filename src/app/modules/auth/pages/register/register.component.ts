import { Component } from '@angular/core';
import { CreateUserFormInterface } from '@interfaces/create-user.interface';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

/**
 * Component for registering a new user.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Flag to indicate if there's an error during registration.
   */
  errorFlag: boolean = false;
  /**
   * Error message to display in case of registration error.
   */
  errorMessage: String = '';

  /**
   * New user registration details.
   */
  newUser: CreateUserFormInterface = {
    email: '',
    name: '',
    password: '',
    confirmedPassword: '',
  };

  /**
   * Registers a new user.
   */
  registerUser() {
    if (this.newUser.password === this.newUser.confirmedPassword) {
      const { confirmedPassword, ...newUserRegistration } = this.newUser;
      this.authService.register(newUserRegistration).subscribe(
        (res) => {
          this.router.navigate(['../login']);
        },
        (error) => {
          this.errorMessage = error.error.message;
          this.errorFlag = true;
        }
      );
    } else {
      this.errorMessage = '¡Passwords must match!';
      this.errorFlag = true;
    }
  }
}
