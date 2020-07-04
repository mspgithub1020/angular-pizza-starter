import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlertComponent } from './form-alert.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FormAlertComponent
  ],
  exports: [
    FormAlertComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class FormAlertModule {}
