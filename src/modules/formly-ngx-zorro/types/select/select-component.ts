import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-select-component',
    templateUrl: './select-component.html'
})
export class FormlyFieldSelectComponent extends FieldType implements OnInit {

    defaultFilterOption = function (input: string, option: any): boolean {
        if (option && option.nzLabel) {
            return option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
        } else {
            return false;
        }
    };

    ngOnInit() {
        if (!this.to['nzMode']) {
            this.to['nzMode'] = 'default';
        }
    }
}
