import React from 'react';
import { Button } from 'tdesign-react';
import { CheckCircleIcon } from 'tdesign-icons-react';
import Style from './index.module.less';

const Success = () => (
  <div className={Style.Content}>
    <CheckCircleIcon className={Style.icon} />
    <div className={Style.title}>项目已创建成功</div>
    <div className={Style.description}>可以联系负责人分发应用</div>
    <div>
      <Button>返回首页</Button>
      <Button className={Style.rightButton} theme='default'>
        查看进度
      </Button>
    </div>
  </div>
);

export default React.memo(Success);
