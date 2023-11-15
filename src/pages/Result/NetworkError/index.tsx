import React from 'react';
import { Button } from 'tdesign-react';
import networkErrorIcon from 'assets/svg/assets-result-network-error.svg';
import Style from '../index.module.less';

const NetworkError = () => (
  <div className={Style.Content}>
    <img src={networkErrorIcon} className={Style.icon} />
    <div className={Style.title}>网络异常</div>
    <div className={Style.description}>网络异常，请稍后再试</div>
    <div>
      <Button>重新加载</Button>
      <Button className={Style.rightButton} theme='default'>
        返回首页
      </Button>
    </div>
  </div>
);

export default React.memo(NetworkError);
