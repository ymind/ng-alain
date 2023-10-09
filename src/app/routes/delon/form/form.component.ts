import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { SFObjectWidgetSchema, SFSchema } from '@delon/form';

@Component({
  selector: 'app-delon-form',
  templateUrl: './form.component.html',
})
export class DelonFormComponent {
  params: any = {};
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
      address1: {
        title: '地址1',
        type: 'object',
        properties: {
          country: { type: 'string' },
          city: { type: 'string' },
          zone: { type: 'string' },
        },
        ui: {
          type: 'card',
          optional: '123',
          optionalHelp: 'abc',
          width: 300,
          size: 'small',
        } as SFObjectWidgetSchema,
      },
    },
  };
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
  ];
}
