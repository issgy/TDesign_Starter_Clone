import React from 'react';
import { Row, Col } from 'tdesign-react';
import { PANE_LIST } from '../constant';
import Card from 'components/Card';
import Board from 'components/Board';

const gutter = [16, 16];
const MouthPurchase = () => (
  <Card title='本月采购申请情况'>
    <Row>
      {PANE_LIST.map((item) => (
        <Col>
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
