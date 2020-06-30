import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ErrorsService {
  get(control: NgModel, errors) {
    if (!errors) { return; }
    for (const [error, msg] of Object.entries(errors)) {
      if (control.hasError(error)) {
        return msg;
      }
    }
  }
}
