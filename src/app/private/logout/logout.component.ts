import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { LogoutService } from './logout.service';



@Component({
  selector: 'ps-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private logoutService: LogoutService
  ) { }
  async onClick() {
    await this.logoutService.logout();
    this.authService.clear();
    this.router.navigateByUrl('/public');
  }
}
