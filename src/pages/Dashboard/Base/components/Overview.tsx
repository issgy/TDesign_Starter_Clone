import React, { useState } from 'react';
import classnames from 'classnames';
import { Row, Col, Button } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';

import Board from 'pages/Dashboard/common/Board';
import PaneBox from './PaneBox';
import LastWeekDatePicker from 'pages/Dashboard/common/DatePicker';
import { getBarChartOptions } from '../chart';
import { INVENTORY_OVERVIEW } from '../constant';
import Style from '../index.module.less';

const Overview = () => {
  const options = getBarChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getBarChartOptions(value);
    setCustomOptions(options);
  };
  return (
    <div className={classnames(Style.overviewPanel, Style.rowContainer)}>
      <Row>
        <Col xs={12} xl={9} span={12}>
          <Board title='出入库概览' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
            <ReactEcharts option={customOptions} notMerge={true} lazyUpdate={true} style={{ height: 351 }} />
          </Board>
        </Col>
        <Col xs={12} xl={3} span={12}>
          <Board operation={<Button>导出数据</Button>}>
            <Row gutter={0}>
              <Col span={12}>
                <Board subtitle='' description='本月出库总计(件)' size='small'>
                  <PaneBox value={INVENTORY_OVERVIEW.inbound} index={4}></PaneBox>
                </Board>
              </Col>
              <Col span={12}>
                <Board subtitle='' description='本月入库总计(件)' size='small'>
                  <PaneBox value={INVENTORY_OVERVIEW.outbound} index={5}></PaneBox>
                </Board>
              </Col>
            </Row>
          </Board>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(Overview);
