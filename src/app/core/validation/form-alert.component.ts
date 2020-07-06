import { Component, Input } from '@angular/core';

@Component({
  selector: 'ps-form-alert',
  templateUrl: './form-alert.component.html',
  styleUrls: ['./form-alert.component.css']
})
export class FormAlertComponent {
  @Input() error = '';
}

