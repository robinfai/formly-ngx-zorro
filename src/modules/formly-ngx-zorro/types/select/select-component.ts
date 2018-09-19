import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-select-component',
    templateUrl: './select-component.html'
})
export class FormlyFieldSelectComponent extends FieldType implements OnInit {
    ngOnInit() {
        if (!this.to['nzMode']) {
            this.to['nzMode'] = 'default';
        }
    }
}
