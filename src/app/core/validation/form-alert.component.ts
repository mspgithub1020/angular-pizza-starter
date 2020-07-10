import { Component, Input } from '@angular/core';

@Component({
  selector: 'ps-form-alert',
  templateUrl: './form-alert.component.html'
})
export class FormAlertComponent {
  @Input() error = '';
}

