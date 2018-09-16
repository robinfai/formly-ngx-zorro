import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-input',
    template: `
    <input nz-input [id]="id" [formControl]="formControl" [formlyAttributes]="field"/>
    `,
})
export class FormlyFieldInputComponent extends FieldType {
}
