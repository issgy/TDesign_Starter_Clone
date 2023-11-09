import React from 'react';
import { Form, Input, Select, Textarea, Button } from 'tdesign-react';

const { FormItem } = Form;
const { Option } = Select;

const addressOptions = [
  {
    label: '广东省深圳市南山区',
    value: '0',
  },
  {
    label: '北京市海淀区',
    value: '1',
  },
  {
    label: '四川省成都市高新区',
    value: '2',
  },
  {
    label: '广东省广州市天河区',
    value: '3',
  },
  {
    label: '陕西省西安市高新区',
    value: '4',
  },
];

export default React.memo((props: { current: number; steps: any[]; callback: Function }) => {
  const { current, steps = [], callback } = props;
  return (
    <Form labelWidth={100}>
      <FormItem label='收货人' name='receiver' rules={[{ required: true, type: 'error', message: '请输入收货人' }]}>
        <Input placeholder='请输入收货人' />
      </FormItem>
      <FormItem
        label='收货人手机号'
        name='receiverPhone'
        rules={[{ required: true, type: 'error', message: '请输入收货人手机号' }]}
      >
        <Input placeholder='请输入收货人手机号' />
      </FormItem>
      <FormItem
        label='收货人'
        name='receiverAddress'
        rules={[{ required: true, type: 'error', message: '请输入收货人' }]}
      >
        <Select placeholder='请选择收货地址' value='A'>
          {addressOptions.map((address) => {
            return <Option label={address.label} key={address.value} value={address.value}></Option>;
          })}
        </Select>
      </FormItem>
      <FormItem
        label='详细地址'
        name='detailAddress'
        rules={[{ required: true, type: 'error', message: '请输入详细地址' }]}
      >
        <Textarea placeholder='请输入详细地址' />
      </FormItem>
      <FormItem>
        <div style={{ marginLeft: '100px' }}>
          {current > 0 && <Button onClick={() => callback('prev')}>上一步</Button>}
          {current < steps.length - 1 && (
            <Button type='submit' onClick={() => callback('next')} style={{ marginLeft: '20px' }}>
              下一步
            </Button>
          )}
        </div>
      </FormItem>
    </Form>
  );
});
