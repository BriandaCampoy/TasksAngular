import { Component } from '@angular/core';
import { CreateUserFormInterface } from '@interfaces/create-user.interface';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  errorFlag: boolean = false;
  errorMessage: String = '';

  newUser: CreateUserFormInterface = {
    email: '',
    name: '',
    password: '',
    confirmedPassword: '',
  };

  registerUser() {
    if (this.newUser.password === this.newUser.confirmedPassword) {
      const { confirmedPassword, ...newUserRegistration } = this.newUser;
      this.authService.register(newUserRegistration).subscribe(
        (res) => {
          this.router.navigate(['../login'])
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
