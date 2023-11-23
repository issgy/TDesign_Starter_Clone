import React, { useState } from 'react';
import classnames from 'classnames';
import { Button, Checkbox, Form, Input } from 'tdesign-react';
import { UserIcon, LockOnIcon, BrowseIcon, BrowseOffIcon } from 'tdesign-icons-react';

import Style from './index.module.less';

const { FormItem } = Form;
export type ELoginType = 'password' | 'phone' | 'qrcode';

export default function Login() {
  const [loginType, setLoginType] = useState<ELoginType>('password');
  const [showPsw, toggleShowPsw] = useState(false);
  const onSubmit = () => {
    console.log('submit');
  };
  console.log(showPsw);

  const switchType = (val: ELoginType) => {
    console.log('switch');
  };
  return (
    <div>
      <Form className={Style.itemContainer} labelWidth={0} onSubmit={onSubmit}>
        {loginType === 'password' && (
          <>
            <FormItem name='account' rules={[{ required: true, message: '账号必填', type: 'error' }]}>
              <Input size='large' placeholder='请输入账号：admin' prefixIcon={<UserIcon />}></Input>
            </FormItem>
            <FormItem name='password' rules={[{ required: true, message: '密码必填', type: 'error' }]}>
              <Input
                type={showPsw ? 'text' : 'password'}
                size='large'
                placeholder='请输入登录密码：admin'
                prefixIcon={<LockOnIcon />}
                suffixIcon={
                  showPsw ? (
                    <BrowseIcon onClick={() => toggleShowPsw((current) => !current)} />
                  ) : (
                    <BrowseOffIcon onClick={() => toggleShowPsw((current) => !current)} />
                  )
                }
              ></Input>
            </FormItem>
            <div className={classnames(Style.checkContainer, Style.rememberPwd)}>
              <Checkbox>记住账号</Checkbox>
              <span className={Style.checkContainerTip}>忘记账号？</span>
            </div>
          </>
        )}

        {loginType !== 'qrcode' && (
          <FormItem className={Style.btnContainer}>
            <Button block size='large' type='submit'>
              登录
            </Button>
          </FormItem>
        )}
        <div className={Style.switchContainer}>
          {loginType !== 'password' && (
            <span className='tip' onClick={() => switchType('password')}>
              使用账号密码登录
            </span>
          )}
          {loginType !== 'qrcode' && (
            <span className='tip' onClick={() => switchType('qrcode')}>
              使用微信扫码登录
            </span>
          )}
          {loginType !== 'phone' && (
            <span className='tip' onClick={() => switchType('phone')}>
              使用手机号登录
            </span>
          )}
        </div>
      </Form>
    </div>
  );
}
