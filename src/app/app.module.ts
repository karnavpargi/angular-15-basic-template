import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { WINDOW_PROVIDERS } from './core/providers/window.provider';


@NgModule({
  declarations: [BreadcrumbComponent, AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
