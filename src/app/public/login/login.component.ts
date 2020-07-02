import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ErrorsService } from '../../core/validation/errors.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
@ViewChild('form') form: FormGroup;
@ViewChild('email') email: FormControl;

model={
  email: '',
  password: ''
};
errors = {
  email: {
    required: 'You must enter an email',
    email: 'Not a valid email'
  },
  password: {
    required: 'You must enter a password',
    minlength: 'Your password must be at least 3 characters long'
  }
};

loginError = '';

constructor(
  public errorsService: ErrorsService,
  private loginService: LoginService,
  private router: Router
) { }

onSubmit() {
  if (this.form.invalid) {
    return;
  }
  this.loginService.login(this.model)
    .then(this.onLoginSuccess)
    .catch(this.onLoginError);
}
private onLoginSuccess = () => {
  this.router.navigate(['/private/menu'], {replaceUrl: true});
}
private onLoginError = (res: HttpErrorResponse) => {
  this.loginError = res.error.error;
}
}