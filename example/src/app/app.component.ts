import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  form = new FormGroup({});
  model = {
    email: 'email@gmail.com',
    // "cascader": [
    //   "zhejiang",
    //   "hangzhou",
    //   "xihu"
    // ]
  };
  nodes = [
    new NzTreeNode({
      title: 'root1',
      key: '1001',
      children: [
        {
          title: 'child1',
          key: '10001',
          children: [
            {
              title: 'child1.1',
              key: '100011',
              children: []
            },
            {
              title: 'child1.2',
              key: '100012',
              children: [
                {
                  title: 'grandchild1.2.1',
                  key: '1000121',
                  isLeaf: true,
                  disabled: true
                },
                {
                  title: 'grandchild1.2.2',
                  key: '1000122',
                  isLeaf: true
                }
              ]
            }
          ]
        }
      ]
    }),
    new NzTreeNode({
      title: 'root2',
      key: '1002',
      children: [
        {
          title: 'child2.1',
          key: '10021',
          children: [],
          disableCheckbox: true
        },
        {
          title: 'child2.2',
          key: '10022',
          children: [
            {
              title: 'grandchild2.2.1',
              key: '100221',
              isLeaf: true
            }
          ]
        }
      ]
    })
  ];
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      templateOptions: {
        label: '',
        required: true,
      }
    },
    {
      key: 'autocomplete',
      type: 'autocomplete',
      templateOptions: {
        label: 'autocomplete',
        options: [
          {
            'label': '1232',
            'value': '1232',
          },

        ],
        required: true,
      }
    },
    {
      key: 'cascader',
      type: 'cascader',
      templateOptions: {
        label: 'cascader',
        options: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }]
          }, {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true
          }]
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }]
          }]
        }],
        required: true,
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'checkbox',
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ],
        required: true,
      }
    },
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: 'radio',
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ],
        required: true,
      }
    },
    {
      key: 'date-picker',
      type: 'date-picker',
      templateOptions: {
        label: 'date-picker',
        required: true,
        showTime: true
      }
    },
    {
      key: 'date-picker',
      type: 'date-picker',
      templateOptions: {
        label: 'date-picker no time',
        required: true,
        showTime: false
      }
    },
    {
      key: 'number',
      type: 'number',
      templateOptions: {
        label: 'number',
        required: true,
      }
    },
    {
      key: 'rate',
      type: 'rate',
      templateOptions: {
        label: 'rate',
        required: true,
      }
    },
    {
      key: 'select',
      type: 'select',
      templateOptions: {
        label: 'select',
        required: true,
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ]
      }
    },
    {
      key: 'slider',
      type: 'slider',
      templateOptions: {
        label: 'slider',
        required: true,
      }
    },
    {
      key: 'switch',
      type: 'switch',
      templateOptions: {
        label: 'switch',
        required: true,
      }
    },
    {
      key: 'time-picker',
      type: 'time-picker',
      templateOptions: {
        label: 'time-picker',
        required: true,
      }
    },
    {
      key: 'tree-select',
      type: 'tree-select',
      templateOptions: {
        label: 'tree-select',
        options: this.nodes,
        checkable: true,
        required: true,
      }
    },
  ];

  submit(model) {
    console.log(model);
  }
}
