import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * The module responsible for managing the layout of the application.
 */
@NgModule({
  /**
   * Declarations of components that belong to this module.
   */
  declarations: [HomeComponent, NavComponent, AsideComponent, FooterComponent],

  /**
   * Modules that this module depends on.
   */
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
