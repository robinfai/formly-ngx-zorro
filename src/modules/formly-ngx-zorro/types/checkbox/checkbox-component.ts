import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-checkbox-component',
    templateUrl: './checkbox-component.html'
})
export class FormlyFieldCheckboxComponent extends FieldType implements OnChanges {
    ngOnChanges() {
        console.log(arguments);
    }
}
