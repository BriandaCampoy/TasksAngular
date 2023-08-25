import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';

/**
 * The module responsible for handling authentication-related components and functionality.
 */
@NgModule({
  /**
   * Declarations of components that belong to this module.
   */
  declarations: [LoginComponent, RegisterComponent],

  /**
   * Declarations of components that belong to this module.
   */
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
