import React from 'react';
import { Alert, Button, Form, Select } from 'tdesign-react';

const message = [
  '1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；',
  '2、开票金额为您实际支付金额；',
  '3、如有疑问请直接联系：13300001111。',
];

const contracts = [
  {
    label: '合同A',
    value: 'A',
  },
  {
    label: '合同B',
    value: 'B',
  },
  {
    label: '合同C',
    value: 'C',
  },
];

const invoices = [
  {
    label: '类型A',
    value: 'A',
  },
  {
    label: '类型B',
    value: 'B',
  },
  {
    label: '类型C',
    value: 'C',
  },
];

const { FormItem } = Form;
const { Option } = Select;
export default React.memo((props: { callback: Function }) => {
  const { callback } = props;
  const next = () => {
    callback('next');
  };
  return (
    <>
      <div style={{ padding: '24px 0' }}>
        <Alert theme='info' message={message} title='发票开具规则' maxLine={3} close />
      </div>
      <Form labelWidth={100}>
        <FormItem
          label='合同名称'
          name='contract'
          rules={[{ required: true, message: '请选择合同名称', type: 'error' }]}
        >
          <Select placeholder='请选择合同' value='A'>
            {contracts.map((item) => (
              <Option label={item.label} value={item.value} key={item.value}></Option>
            ))}
          </Select>
        </FormItem>
        <FormItem
          label='发票类型'
          name='invoice'
          rules={[{ required: true, message: '请选择发票类型', type: 'error' }]}
        >
          <Select placeholder='请选择发票' value='A'>
            {invoices.map((item) => (
              <Option label={item.label} value={item.value} key={item.value}></Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label='开票金额' name='name'>
          <div>--</div>
        </FormItem>
        <FormItem>
          <Button type='submit' onClick={next}>
            提交申请
          </Button>
        </FormItem>
      </Form>
    </>
  );
});
