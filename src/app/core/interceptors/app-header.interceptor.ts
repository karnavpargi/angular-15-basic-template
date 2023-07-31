import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export const CONTENT_TYPE = new HttpContextToken<string>(()=> 'application/json')
@Injectable()
export class AppHeaderInterCeptor implements HttpInterceptor{


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jsonRequest : HttpRequest<any> = req.clone({
            setHeaders: {'Content-Type': req.context.get<string>(CONTENT_TYPE) }
        })
        
        return next.handle(jsonRequest)
    }
}