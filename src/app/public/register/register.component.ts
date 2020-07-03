import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorsService } from '../../core/validation/errors.service';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ps-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('form') form: FormGroup;
  @ViewChild('email') email: FormControl;
  @ViewChild('name') name: FormControl;

  model = {
    email: '',
    name: '',
    password: ''
  };

  errors = {
    email: {
      required: 'You must enter an email',
      email: 'Not a valid email'
    },
    name: {
      required: 'you must enter a user name'
    },
    password: {
      required: 'you must enter a password',
      minlength: 'Your password must be at least 3 characters long'
    }
  };

  registerError = '';

  constructor(
    public errorsService: ErrorsService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.registerService.register(this.model)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  }
  private onRegisterSuccess = () => {
    this.router.navigate(['/public/login'], {replaceUrl: true});
  }
  private onRegisterError = (res: HttpErrorResponse) => {
    this.registerError = res.error.error;
  }
}
