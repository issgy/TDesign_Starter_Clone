import React, { useState } from 'react';
import { Col, Row, Card } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
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
        <Card title='统计数据' subtitle='(万元)' actions={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts option={customOptions} notMerge={true} lazyUpdate={false} />
        </Card>
      </Col>
      <Col xs={12} xl={3}>
        <Card title='销售渠道' subtitle='2021-12'>
          <ReactEcharts option={pieOptions} notMerge={true} lazyUpdate={true} />
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(MiddleChart);
