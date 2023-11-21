import React from 'react';
import classnames from 'classnames';
import { Steps } from 'tdesign-react';
import PageBox from 'components/PageBox';
import Card from 'components/Card';
import { dataInfo, dataStep } from './consts';

import Style from './index.module.less';

const { StepItem } = Steps;

export default React.memo(() => (
  <PageBox withPadding={false} withColor={false}>
    <Card title='基本信息'>
      <div className={classnames(Style.infoBox)}>
        {dataInfo.map((item) => (
          <div key={item.id} className={Style.infoBoxItem}>
            <h1>{item.name}</h1>
            <span
              className={classnames({
                [Style.inProgress]: item.type === 'status',
                [Style.pdf]: item.type === 'link',
              })}
            >
              {item.type === 'status' && <i></i>}
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
    <Card title='变更记录' className={Style.logBox}>
      <div style={{ padding: '24px' }}>
        <Steps layout='vertical' theme='dot' current={1}>
          {dataStep.map((item) => (
            <StepItem key={item.id} title={item.name} content={item.detail} />
          ))}
        </Steps>
      </div>
    </Card>
  </PageBox>
));
