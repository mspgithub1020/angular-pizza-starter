import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorsService } from '../../core/validation/errors.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  @ViewChild('form') form: FormGroup;

  model = {
    email: '',
    password: '',
  };
  errors = {
    email: {
      required: 'You must enter an email',
      email: 'Not a valid email',
    },
    password: {
      required: 'You must enter a password',
      minlength: 'Your password must be at least 3 characters long',
    },
  };

  loginError = '';

  constructor(
    public errorsService: ErrorsService,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}


  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loginService
      .login(this.model)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  }
  private onLoginSuccess = (data: { token: string }) => {
    this.authService.token = data.token;
    this.router.navigateByUrl('/', { replaceUrl: true });
  };
  private onLoginError = (res: HttpErrorResponse) => {
    const error =
      res.status === 401 ? 'Incorrect credentials' : 'Unexpected error';
    this.loginError = error;
  };
}
