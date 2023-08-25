import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**
 * The root module of the Angular application.
 */
@NgModule({
  declarations: [AppComponent],
  /**
   * The modules that this module depends on.
   */
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  /**
   * The main component that will be bootstrapped when the application starts.
   */
  bootstrap: [AppComponent],
})
export class AppModule {}
