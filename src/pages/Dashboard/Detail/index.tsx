import React, { memo } from 'react';
import MouthPurchase from './components/MouthPurchase';
import PurchaseTrend from './components/PurchaseTrend';
import PurchaseSatisfaction from './components/PurchaseSatisfaction';
import Style from './index.module.less';

export default memo(() => (
  <div className={Style.dashboardDetail}>
    {/* 本月采购申请情况 */}
    <MouthPurchase />
    {/* 采购商品申请趋势 */}
    <PurchaseTrend />
    {/* 采购商品满意度分析 */}
    <PurchaseSatisfaction />
  </div>
));
