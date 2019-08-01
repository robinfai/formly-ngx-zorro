import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { defaultFilterOption } from 'ng-zorro-antd/select/nz-option.pipe';

@Component({
    selector: 'nz-formly-field-select-component',
    templateUrl: './select-component.html'
})
export class FormlyFieldSelectComponent extends FieldType implements OnInit {

    defaultFilterOption = defaultFilterOption;

    ngOnInit() {
        if (!this.to['nzMode']) {
            this.to['nzMode'] = 'default';
        }
    }
}
