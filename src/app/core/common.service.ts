import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT_TYPE } from './interceptors/app-header.interceptor';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  get(url: string): Observable<any> {
    
    // if url passed.
    if(url){
      return this.http.get(url, {
        context: new HttpContext().set(CONTENT_TYPE, 'application/json')
      })
    }
    // else send Array of data
    return of(['India', 'Gujarat', 'Ahmedabad', "Dahod", "Fatehpura"])
  }
}
