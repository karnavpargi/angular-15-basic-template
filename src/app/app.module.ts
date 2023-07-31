import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CommonService } from './core/common.service';
import { AppErrorInterCeptor } from './core/interceptors/app-error.interceptor';
import { AppHeaderInterCeptor } from './core/interceptors/app-header.interceptor';
import { CacheInterceptor } from './core/interceptors/cache.interceptor';
import { LogResponseInterCeptor } from './core/interceptors/log-response.interceptor';
import { WINDOW_PROVIDERS } from './core/providers/window.provider';


@NgModule({
  declarations: [BreadcrumbComponent, AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    CommonService,
    WINDOW_PROVIDERS,
    { provide: HTTP_INTERCEPTORS, useClass: AppHeaderInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppErrorInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterCeptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
