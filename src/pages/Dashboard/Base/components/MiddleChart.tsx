import React, { useState } from 'react';
import { Col, Row } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import Card from 'components/Card';
import LastWeekDatePicker from 'components/DatePicker';
import { getLineChartOptions, getPieChartOptions } from '../chart';

const lineOptions = getLineChartOptions();
const pieOptions = getPieChartOptions();

const MiddleChart = () => {
  const [customOptions, setCustomOptions] = useState(lineOptions);

  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };

  return (
    <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
      <Col xs={12} xl={9}>
        <Card title='统计数据' description='(万元)' operation={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts option={customOptions} notMerge={true} lazyUpdate={false} />
        </Card>
      </Col>
      <Col xs={12} xl={3}>
        <Card title='销售渠道' description='2021-12'>
          <ReactEcharts option={pieOptions} notMerge={true} lazyUpdate={true} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(MiddleChart);
