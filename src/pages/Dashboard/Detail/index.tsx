import React, { memo } from 'react';
import MouthPurchase from './components/MouthPurchase';
import Style from './index.module.less';

export default memo(() => (
  <div className={Style.dashboardDetail}>
    {/* 本月采购申请情况 */}
    <MouthPurchase />
  </div>
));
