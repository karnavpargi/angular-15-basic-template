import {
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpCacheService } from '../http-cache.service';

export const CACHEBALE = new HttpContextToken(() => true);
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: HttpCacheService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    // only cache requests configured to be cacheble
    if (!req.context.get(CACHEBALE)) {
      return next.handle(req);
    }

    // pass along non-cachebale request
    if (req.method !== 'GET') {
      console.log('Invalidate Cache : ', req.method + ' ' + req.url);
      this.cacheService.invalidateAllCache();
      return next.handle(req);
    }
    // attemp to retrieve a cached response
    const cachedRespose: HttpResponse<any> | undefined = this.cacheService.get(
      req.url
    );

    // return cache response
    if (cachedRespose) {
      console.log('Returning a cached response: ', cachedRespose.url);
      console.log(cachedRespose);
      return of(cachedRespose);
    }

    // send request to server and add response to cache

    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('Adding item to cache: ', req.url);
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
}
