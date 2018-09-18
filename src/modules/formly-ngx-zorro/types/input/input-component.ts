import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-input',
    template: `
    <input nz-input [id]="id" [formControl]="formControl" [formlyAttributes]="field" [nzSize]="to['nzSize']"/>
    `
})
export class FormlyFieldInputComponent extends FieldType {
}
