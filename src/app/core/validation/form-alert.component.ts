import { Component , Input } from '@angular/core';

@Component({
    selector: 'ps-form-alert',
    template: `
        <div role='alert' *ngIf="error">
            <mat-icon>error</mat-icon>{{error}}        
        </div>
    `
})
export class FormAlertComponent{

    @Input() error='';

}