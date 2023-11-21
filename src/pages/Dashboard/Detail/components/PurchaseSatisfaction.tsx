import React, { useState } from 'react';
import { Button } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';

import Board from 'pages/Dashboard/common/Board';
import LastWeekDatePicker from 'components/DatePicker';
import { getScatterChartOptions } from '../charts';

import Style from '../index.module.less';

const PurchaseSatisfaction = () => {
  const options = getScatterChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getScatterChartOptions(value);
    setCustomOptions(options);
  };
  const actionComp = (): React.ReactElement => (
    <>
      {LastWeekDatePicker(onTimeChange)}
      <Button className={Style.exportBtn}>导出数据</Button>
    </>
  );
  return (
    <div className={Style.boardMargin}>
      <Board title='采购商品满意度分布' operation={actionComp()}>
        <ReactEcharts option={customOptions} notMerge={true} lazyUpdate={true} style={{ height: 374 }} />
      </Board>
    </div>
  );
};

export default React.memo(PurchaseSatisfaction);
