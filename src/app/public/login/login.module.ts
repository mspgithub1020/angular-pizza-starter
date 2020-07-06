import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormAlertModule } from '../../core/validation/form-alert.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [
     HttpClientModule,
     CommonModule,
     FormsModule,
     LoginRoutingModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatIconModule,
     FormAlertModule
  ]
})
export class LoginModule {}
