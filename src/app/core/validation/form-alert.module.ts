import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlertComponent } from './form-alert.component'

@NgModule({
  declarations: [
    FormAlertComponent
  ],
  exports: [
    FormAlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormAlertModule {}
