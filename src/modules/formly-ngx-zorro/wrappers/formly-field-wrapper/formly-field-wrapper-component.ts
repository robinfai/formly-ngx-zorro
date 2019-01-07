import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-wrapper-form-field',
    templateUrl: './template.html'
})
export class FormlyFieldWrapperComponent extends FieldWrapper implements OnInit {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;

    label_class = '';
    control_class = '';

    ngOnInit() {
        this.calcCols();
    }

    calcCols() {
        if (this.field.className) {
            const class_list = this.field.className.split(' ');
            const label_class_list: string[] = [];
            const control_class_list: string[] = [];
            class_list.forEach((class_item) => {
                const class_segments = class_item.split('-');
                if (class_segments.length < 3) {
                    return false;
                }
                if (class_segments[0] !== 'ant'
                    || class_segments[1] !== 'col') {
                    return false;
                }
                let size;
                let cols;
                if (['xs', 'sm', 'md', 'lg', 'xl', 'xll'].indexOf(class_segments[2]) > -1 && class_segments.length === 4) {
                    size = class_segments[2];
                    cols = class_segments[3];
                } else {
                    cols = class_segments[2];
                }
                const class_prefix = 'ant-col';
                const label_class_segments = [class_prefix];
                const control_class_segments = [class_prefix];
                if (size) {
                    label_class_segments.push(size);
                    control_class_segments.push(size);
                }
                if (!this.field.templateOptions || !this.field.templateOptions.label) {
                    label_class_segments.push('offset');
                }
                switch (cols) {
                    case '24':
                        label_class_segments.push('4');
                        control_class_segments.push('20');
                        break;
                    case '16':
                        label_class_segments.push('6');
                        control_class_segments.push('18');
                        break;
                    case '12':
                        label_class_segments.push('8');
                        control_class_segments.push('16');
                        break;
                    case '10':
                        label_class_segments.push('1');
                        control_class_segments.push('23');
                        break;
                    case '8':
                        label_class_segments.push('12');
                        control_class_segments.push('12');
                        break;
                    case '6':
                        label_class_segments.push('16');
                        control_class_segments.push('8');
                        break;
                    case '5':
                        label_class_segments.push('8');
                        control_class_segments.push('16');
                        break;
                }

                if (this.field.templateOptions && this.field.templateOptions.label) {
                    label_class_list.push(label_class_segments.join('-'));
                    control_class_list.push(control_class_segments.join('-'));
                } else {
                    control_class_list.push(label_class_segments.join('-'));
                    control_class_list.push(control_class_segments.join('-'));
                }
            });
            this.label_class = label_class_list.join(' ');
            this.control_class = control_class_list.join(' ');
        }
    }
}
