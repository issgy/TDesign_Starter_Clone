import React, { useState } from 'react';
import { Steps } from 'tdesign-react';
import PageBox from 'components/PageBox';
import { StepOne, StepTwo, StepThree, StepFour } from './components';

const { StepItem } = Steps;

interface IStep {
  title: string;
  content: string;
  component: any;
}

const steps: IStep[] = [
  {
    title: '申请提交',
    content: '申请提交已于12月21日提交',
    component: StepOne,
  },
  {
    title: '电子发票',
    content: '预计1～3个工作日',
    component: StepTwo,
  },
  {
    title: '发票已邮寄',
    content: '电子发票开出后7个工作日内联系',
    component: StepThree,
  },
  {
    title: '完成',
    content: '',
    component: StepFour,
  },
];

export default React.memo(() => {
  const [current, setCurrent] = useState(0);
  const Comp = steps[current].component;
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const handleSteps = (value: string) => {
    switch (value) {
      case 'next':
        next();
        break;
      case 'prev':
        prev();
        break;
      case 'first':
        setCurrent(0);
        break;
      default:
        break;
    }
  };
  return (
    <PageBox withColor withPadding>
      <Steps current={current}>
        {steps.map((item) => (
          <StepItem key={item.title} title={item.title} />
        ))}
      </Steps>
      <div style={{ marginTop: '52px' }}>
        <Comp callback={handleSteps} current={current} steps={steps} />
      </div>
    </PageBox>
  );
});
