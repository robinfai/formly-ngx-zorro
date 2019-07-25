import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-input',
    template: `
        <textarea nz-input [id]="id"
                  [formControl]="formControl"
                  [formlyAttributes]="field"
                  [rows]="to['rows']"
                  [placeholder]="to['placeholder']"
                  [nzAutosize]="to['nzAutosize'] || false"
                  [nzSize]="to['nzSize']"></textarea>
    `
})
export class FormlyFieldTextareaComponent extends FieldType {
}
