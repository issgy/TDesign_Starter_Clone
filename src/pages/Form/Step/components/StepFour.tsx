import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'tdesign-react';
import { CheckCircleFilledIcon } from 'tdesign-icons-react';
import Style from './index.module.less';

export default React.memo((props: { callback: Function }) => {
  const { callback } = props;
  const navigate = useNavigate();
  const onCheck = () => {
    const url = '/detail/advanced';
    navigate(url);
  };
  return (
    <div className={Style.stepFourWrapper}>
      <CheckCircleFilledIcon className={Style.icon} />
      <div className={Style.title}>完成开票申请</div>
      <p>预计1～3个工作日会将电子发票发至邮箱，发票邮寄请耐心等待</p>
      <div style={{ marginTop: '20px' }}>
        <Button theme='primary' onClick={() => callback('first')}>
          再次申请
        </Button>
        <Button theme='default' onClick={onCheck} variant='base' style={{ marginLeft: '20px' }}>
          查看进度
        </Button>
      </div>
    </div>
  );
});
