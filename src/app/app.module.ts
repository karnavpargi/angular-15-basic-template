import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './core/interceptors/cache.interceptor';
import { WINDOW_PROVIDERS } from './core/providers/window.provider';
import { AppHeaderInterCeptor } from './core/interceptors/app-header.interceptor';
import { LogResponseInterCeptor } from './core/interceptors/log-response.interceptor';
import { AppErrorInterCeptor } from './core/interceptors/app-error.interceptor';


@NgModule({
  declarations: [BreadcrumbComponent, AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    WINDOW_PROVIDERS,
    { provide: HTTP_INTERCEPTORS, useClass: AppHeaderInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppErrorInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
