import React, { useState } from 'react';
import { Col, Row } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';

import Board from '../../common/Board';
import LastWeekDatePicker from '../../common/DatePicker';
import { getLineChartOptions, getPieChartsOptions } from '../chart';
import Style from '../index.module.less';

const gutter = [16, 16];
const MiddleChart = () => {
  const lineOptions = getLineChartOptions();
  const pieOptions = getPieChartsOptions();
  const [customOptions, setCustomOptions] = useState(lineOptions);

  const onTimeChange = (value: Array<string>) => {
    // value:['YYYY-MM-DD','YYYY-MM-DD']
    // 得到折线图的图表项配置 option
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };
  return (
    <Row gutter={gutter} className={Style.rowContainer}>
      <Col xs={12} xl={9}>
        <Board title='统计数据' description='(万元)' operation={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts option={customOptions} notMerge={true} lazyUpdate={false} style={{ height: 280 }} />
        </Board>
      </Col>
      <Col xs={12} xl={3}>
        <Board title='销售渠道' description='2023-11'>
          <ReactEcharts
            option={pieOptions}
            notMerge={true}
            lazyUpdate={false}
            style={{ width: 280, height: 280, margin: '0 auto' }}
          />
        </Board>
      </Col>
    </Row>
  );
};

export default React.memo(MiddleChart);
