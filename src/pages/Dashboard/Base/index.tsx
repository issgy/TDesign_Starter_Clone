import React, { memo } from 'react';
import TopPanel from './components/TopPanel';
import MiddleChart from './components/MiddleChart';

import Style from './index.module.less';

const DashBoard = () => (
  <div className={Style.dashboardPanel}>
    <TopPanel />
    <MiddleChart />
  </div>
);

export default memo(DashBoard);
