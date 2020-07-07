import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
@Component({
  selector: 'ps-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    this._checkIfLogedIn();
  }
  _checkIfLogedIn() {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('/', {
        replaceUrl: true,
        // this.router.navigateByUrl('/private');
      });
    }
  }
}
