import React, { useRef } from 'react';
import { Form, Row, Col, Button, Input, Select, MessagePlugin } from 'tdesign-react';
import { CONTRACT_STATUS_OPTIONS, CONTRACT_TYPE_OPTIONS } from '../consts';

const { FormItem } = Form;

const SearchForm = () => {
  const formRef = useRef<any>();
  const onSubmit = (e: any) => {
    if (e.validateResult === true) {
      MessagePlugin.info('提交成功');
    }
    const queryValues = formRef?.current?.getFieldsValue(true);
    console.log(queryValues);
  };

  const onReset = (e: any) => {
    MessagePlugin.info('重置成功');
  };
  return (
    <div className='list-dommon-table-query'>
      <Form ref={formRef} onSubmit={onSubmit} onReset={onReset} labelWidth={80} colon>
        <Row>
          <Col span={10}>
            <Row gutter={16}>
              <Col flex='1'>
                <FormItem label='合同名称' name='name'>
                  <Input placeholder='请输入合同名称' />
                </FormItem>
              </Col>
              <Col flex='1'>
                <FormItem label='合同状态' name='status'>
                  <Select options={CONTRACT_STATUS_OPTIONS} placeholder='请选择合同状态' />
                </FormItem>
              </Col>
              <Col flex='1'>
                <FormItem label='合同编号' name='number'>
                  <Input placeholder='请输入合同编号' />
                </FormItem>
              </Col>
              <Col flex='1'>
                <FormItem label='合同类型' name='type'>
                  <Select options={CONTRACT_TYPE_OPTIONS} placeholder='请选择合同类型' />
                </FormItem>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <Button theme='primary' type='submit' style={{ margin: '0px 20px' }}>
              查询
            </Button>
            <Button theme='default' type='reset'>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default React.memo(SearchForm);
