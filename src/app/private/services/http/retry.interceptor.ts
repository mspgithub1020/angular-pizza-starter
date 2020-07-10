import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../../../core/auth/auth.service';
import { RefreshService } from '../../../core/auth/refresh.service';
import { Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private refreshService: RefreshService,
    private rotuer: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.isRefresh(req)) {
      return next.handle(req);
    }
    return next.handle(req).pipe(catchError((res: any) => {
      if (res.status !== 401) {
        return throwError(res);
      }
      return this.refreshService.refresh().pipe(
        switchMap((data: { token: string }) => {
          this.authService.token = data.token;
          const newRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.authService.token}`)
          });
          return next.handle(newRequest);
        })
        , catchError((err) => {
          this.rotuer.navigateByUrl('/public', { replaceUrl: true });
          return throwError(err);
        })
      );
    }));
  }
  private isRefresh(req) {
    return req.url.endsWith('/refresh');
  }
}
export const RetryInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: RetryInterceptor
};
