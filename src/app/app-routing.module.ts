import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectGuard } from './guards/redirect.guard';
import { AuthGuard } from './guards/auth.guard';

/**
 * Routes configuration for the application.
 */
const routes: Routes = [
  {
    path: '',
    /**
     * Guard to handle redirection.
     */
    canActivate: [redirectGuard],
    /**
     * Lazy-loaded module for handling authentication-related routes.
     */
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    /**
     * Guard to ensure authentication before accessing the route.
     */
    canActivate: [AuthGuard],
    /**
     * Lazy-loaded module for handling layout-related routes.
     */
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
];

/**
 * The main routing module of the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
