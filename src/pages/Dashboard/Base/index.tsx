import React, { memo } from 'react';
import TopPanel from './components/TopPanel';
import MiddleChart from './components/MiddleChart';
import RankList from './components/RankList';
import Overview from './components/Overview';

const DashBoard = () => (
  <div>
    <TopPanel />
    {/* 统计数据和销售渠道 */}
    <MiddleChart />
    {/* 销售订单排名和采购订单排名 */}
    <RankList />
    {/* 出入库概览 */}
    <Overview />
  </div>
);

export default memo(DashBoard);
