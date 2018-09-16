import { NgModule, ModuleWithProviders } from '@angular/core';

// import { SumService } from '../services/sum.service';
// import { SumComponent } from '../components/sum.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyFieldInputComponent } from './types/input/input-component';
import { FormlyFieldWrapper } from './wrappers/formly-field-wrapper/formly-field-wrapper';
import { FormlyFieldAutocompleteComponent } from './types/autocomplete/autocomplete-component';
import { FormlyFieldCascaderComponent } from './types/cascader/cascader-component';
import { FormlyFieldCheckboxComponent } from './types/checkbox/checkbox-component';
import { FormlyFieldDatePickerComponent } from './types/date-picker/date-picker-component';
import { FormlyFieldNumberComponent } from './types/number/number-component';
import { FormlyFieldRadioComponent } from './types/radio/radio-component';
import { FormlyFieldRateComponent } from './types/rate/rate-component';
import { FormlyFieldSelectComponent } from './types/select/select-component';
import { FormlyFieldSliderComponent } from './types/slider/slider-component';
import { FormlyFieldSwitchComponent } from './types/switch/switch-component';
import { FormlyFieldTimePickerComponent } from './types/time-picker/time-picker-component';
import { FormlyFieldTreeSelectComponent } from './types/tree-select/tree-select-component';

export const ForRootFormlyModule = FormlyModule.forRoot({
    types: [
        {
            name: 'input',
            wrappers: ['field-wrapper'],
            component: FormlyFieldInputComponent
        },
        {
            name: 'autocomplete',
            wrappers: ['field-wrapper'],
            component: FormlyFieldAutocompleteComponent
        },
        {
            name: 'cascader',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCascaderComponent
        },
        {
            name: 'checkbox',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCheckboxComponent
        },
        {
            name: 'date-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDatePickerComponent
        },
        {
            name: 'number',
            wrappers: ['field-wrapper'],
            component: FormlyFieldNumberComponent
        },
        {
            name: 'radio',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRadioComponent
        },
        {
            name: 'rate',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRateComponent
        },
        {
            name: 'select',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSelectComponent
        },
        {
            name: 'slider',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSliderComponent
        },
        {
            name: 'switch',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSwitchComponent
        },
        {
            name: 'time-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTimePickerComponent
        },
        {
            name: 'tree-select',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTreeSelectComponent
        },
    ],
    wrappers: [
        { name: 'field-wrapper', component: FormlyFieldWrapper },
    ]
});


@NgModule({
    imports: [
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ForRootFormlyModule
    ],
    declarations: [
        FormlyFieldInputComponent,
        FormlyFieldAutocompleteComponent,
        FormlyFieldCascaderComponent,
        FormlyFieldCheckboxComponent,
        FormlyFieldDatePickerComponent,
        FormlyFieldNumberComponent,
        FormlyFieldRadioComponent,
        FormlyFieldRateComponent,
        FormlyFieldSelectComponent,
        FormlyFieldSliderComponent,
        FormlyFieldSwitchComponent,
        FormlyFieldTimePickerComponent,
        FormlyFieldTreeSelectComponent,
        FormlyFieldWrapper,
        // Pipes.
        // Directives.
        // Components.
        // SumComponent
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        // SumComponent
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormlyModule
    ]
})
export class FormlyNgxZorroModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FormlyNgxZorroModule,
            providers: []
        };
    }
}
