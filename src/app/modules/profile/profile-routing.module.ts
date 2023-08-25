import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';

/**
 * Routes configuration for the user profile-related pages.
 */
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

/**
 * The routing module for user profile-related pages.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
