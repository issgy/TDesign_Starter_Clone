import React from 'react';
import Board from '../../common/Board';
import { Row, Col } from 'tdesign-react';
import PANE_LIST from '../constant';
import PaneBox from './PaneBox';
import Style from '../index.module.less';

const gutter = [16, 16];
const MouthPurchase = () => (
  <div className={Style.purchaseOverview}>
    <Board title='本月采购申请情况'>
      <Row gutter={gutter}>
        {PANE_LIST.map((pane) => (
          <Col key={pane.title} xs={6} xl={3} span={12}>
            <Board description={pane.title} size='small' border={true} style={{ height: 170 }}>
              <PaneBox
                count={pane.number}
                type={pane.upTrend ? 'up' : 'down'}
                description={pane.upTrend || pane.downTrend || ''}
              />
            </Board>
          </Col>
        ))}
      </Row>
    </Board>
  </div>
);

export default React.memo(MouthPurchase);
