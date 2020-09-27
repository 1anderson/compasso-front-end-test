import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
   ): Observable<HttpEvent<any>> {
    console.log('intecpeteiiiiiiiiiiiiiiiiiiiiiiiiii');
    return next.handle(req);
   }
  }

