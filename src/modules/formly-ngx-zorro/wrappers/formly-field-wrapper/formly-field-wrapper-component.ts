import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-wrapper-form-field',
    templateUrl: './template.html'
})
export class FormlyFieldWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;
}
