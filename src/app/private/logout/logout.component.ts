import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'ps-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private router: Router, private authService: AuthService) {}

   _authService = this.authService;

  redirect() {
    this.router.navigate(['../../public/login/login.module']);
  }
}
