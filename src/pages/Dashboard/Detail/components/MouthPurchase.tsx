import React from 'react';
import { Row, Col } from 'tdesign-react';
import { PANE_LIST } from '../constant';
import Card from 'components/Card';
import Board from 'components/Board';

const MouthPurchase = () => (
  <Card title='本月采购申请情况'>
    <Row gutter={[16, 16]}>
      {PANE_LIST.map((item) => (
        <Col key={item.title} xs={6} xl={3} span={12}>
          <Board
            title={item.title}
            trend={item.trend}
            trendNum={item.trendNum}
            count={item.count}
            desc={'环比'}
            border
          />
        </Col>
      ))}
    </Row>
  </Card>
);

export default React.memo(MouthPurchase);
