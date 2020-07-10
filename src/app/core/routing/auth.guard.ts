import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    if (!this.authService.isAuthenticated) {
      return this.router.parseUrl('/public');
    }
    return true;
  }
}
