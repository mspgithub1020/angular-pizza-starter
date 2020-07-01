import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ENVIRONMENT, environment } from '../env/env.provider';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  constructor(@Inject(ENVIRONMENT) private env: environment) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiReq = req.clone({
      url: `${this.env.serverURL}/api/${req.url}`
    });
    return next.handle(apiReq);
  }
}

export const APIInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: APIInterceptor
};
