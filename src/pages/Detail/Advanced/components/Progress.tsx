import React from 'react';
import { Steps } from 'tdesign-react';
import Card from 'components/Card';
import { dataStep, stepCurrent } from '../consts';
import Style from '../index.module.less';

const { StepItem } = Steps;
const Progress = () => (
  <Card borded={false} title='发票进度' className={Style.cardBox}>
    <div>
      <Steps current={stepCurrent}>
        {dataStep.map((item) => (
          <StepItem key={item.id} title={item.name} content={item.detail} />
        ))}
      </Steps>
    </div>
  </Card>
);

export default React.memo(Progress);
