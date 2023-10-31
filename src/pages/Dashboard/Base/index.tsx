import React, { memo } from 'react';
import TopPanel from './components/TopPanel';

import Style from './index.module.less';
const DashBoard = () => (
  <div className={Style.dashboardPanel}>
    <TopPanel />
  </div>
);

export default memo(DashBoard);
