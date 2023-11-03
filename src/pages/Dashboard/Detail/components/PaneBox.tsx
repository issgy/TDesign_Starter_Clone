import React from 'react';
import Trend, { TrendType } from 'pages/Dashboard/common/Trend';
import { Icon } from 'tdesign-icons-react';
import Style from '../index.module.less';

interface IProps extends TrendType {
  count: number | string;
}

const PaneBox = ({ count = 0, type = 'up', description }: IProps) => (
  <>
    <div className={Style.countValue}>{count}</div>
    <div className={Style.paneBtm}>
      <div>
        环比
        <Trend type={type} description={description} />
      </div>
      <Icon name='chevron-right' />
    </div>
  </>
);

export default React.memo(PaneBox);
