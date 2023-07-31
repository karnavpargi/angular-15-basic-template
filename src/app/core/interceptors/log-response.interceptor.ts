import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
// import {environment} from ''

@Injectable()
export class LogResponseInterCeptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('LogResponseInterCeptor: ', req.url);

    return next.handle(req).pipe(tap((event) => {
        if(event.type === HttpEventType.Response){
            console.log(event.body);
        }
    }));
  }
}
