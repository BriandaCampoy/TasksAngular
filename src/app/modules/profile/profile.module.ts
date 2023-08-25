import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';

/**
 * The module responsible for managing user profile-related components and functionality.
 */
@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
