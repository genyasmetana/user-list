import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import { IUsers }            from "./user";

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<IUsers>, next: HttpHandler) {


    const authRequest = req.clone({
      headers: req.headers.set(
        'Authorization', 'token-header'
      )
    });
    console.log(authRequest);
    console.log(authRequest.body);

    return next.handle(authRequest);
  }
}
