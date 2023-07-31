import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HttpCacheService {
  private requests: any = {};
  
  put(url: string, response: HttpResponse<any>) {
    this.requests[url] = response;
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  invalidateAllCache(): void {
    this.requests = {};
  }

  invalidateCache(url: string): void {
    if (this.requests[url]) delete this.requests[url];
  }
}
