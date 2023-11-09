import React from 'react';
import { Form, Input, Button } from 'tdesign-react';

const { FormItem } = Form;

export default React.memo((props: { current: number; callback: Function; steps: any[] }) => {
  const { current, steps = [], callback } = props;
  return (
    <>
      <Form labelWidth={100}>
        <FormItem
          label='发票抬头'
          name='invoice'
          rules={[{ required: true, type: 'error', message: '请输入发票抬头' }]}
        >
          <Input placeholder='请输入发票抬头' />
        </FormItem>
        <FormItem
          label='纳税人识别号'
          name='taxpayerId'
          rules={[{ required: true, type: 'error', message: '请输入纳税人识别号' }]}
        >
          <Input placeholder='请输入纳税人识别号' />
        </FormItem>
        <FormItem label='单位地址' name='address'>
          <Input placeholder='请输入单位地址' />
        </FormItem>
        <FormItem label='开户行' name='bank'>
          <Input placeholder='请输入开户行' />
        </FormItem>
        <FormItem label='银行账户' name='bankCount'>
          <Input placeholder='请输入银行账户' />
        </FormItem>
        <FormItem label='通知邮箱' name='email'>
          <Input placeholder='请输入通知邮箱' />
        </FormItem>
        <FormItem label='通知手机' name='phone'>
          <Input placeholder='请输入通知手机' />
        </FormItem>
        <FormItem>
          <div style={{ margin: '0 100px' }}>
            {current > 0 && <Button onClick={() => callback('prev')}>上一步</Button>}
            {current < steps.length - 1 && (
              <Button type='submit' onClick={() => callback('next')} style={{ margin: '0 20px' }}>
                下一步
              </Button>
            )}
          </div>
        </FormItem>
      </Form>
    </>
  );
});
