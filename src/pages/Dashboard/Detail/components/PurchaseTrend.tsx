import React, { useState } from 'react';
import { Row, Col, Tag, Button, Dropdown } from 'tdesign-react';
import { Icon } from 'tdesign-icons-react';
import ReactEcharts from 'echarts-for-react';

import Board from '../../common/Board';
import LastWeekDatePicker from 'components/DatePicker';
import { getLineChartOptions } from '../charts';
import { IProduct, PRODUCT } from '../constant';
import Style from '../index.module.less';

const iconMap = [
  <Icon key='a' name='shop' />,
  <Icon key='b' name='calendar' />,
  <Icon key='c' name='service' />,
  <Icon key='d' name='user' />,
  <Icon key='e' name='laptop' />,
];
const ProductBoard = ({ description, index, isSetup, name, type }: IProduct): React.ReactElement => {
  const typeMap = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className={Style.productBoard}>
      <div className={Style.productInner}>
        <Row justify='space-between'>
          <div className={Style.productLogo}>{iconMap[type + 1]}</div>
          <Tag theme='success'>{isSetup ? '已启用' : '已停用'}</Tag>
        </Row>
        <p className={Style.productName}>{name}</p>
        <p className={Style.productDesc}>{description}</p>
        <Row justify='space-between' align='middle'>
          <div className={Style.iconWrap}>
            <Button shape='circle' disabled={!isSetup}>
              {typeMap[type]}
            </Button>
            <Button shape='circle' disabled={!isSetup} className={Style.lightBtn}>
              <Icon name='add' />
            </Button>
          </div>
          <Dropdown
            disabled={!isSetup}
            options={[
              {
                content: '管理',
                value: 'manage',
                onClick: () => {},
              },
              {
                content: '删除',
                value: 'delete',
                onClick: () => {},
              },
            ]}
          >
            <Icon name='more' />
          </Dropdown>
        </Row>
      </div>
    </div>
  );
};

const PurchaseTrend = () => {
  const options = getLineChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };
  return (
    <Row className={Style.boardMargin} gutter={16}>
      <Col xs={12} xl={9}>
        <Board title='采购商品申请趋势' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts option={customOptions} notMerge={true} lazyUpdate={true} style={{ height: 416 }} />
        </Board>
      </Col>
      <Col xs={12} xl={3}>
        <ProductBoard {...PRODUCT} type={2} />
        <ProductBoard {...PRODUCT} />
      </Col>
    </Row>
  );
};

export default React.memo(PurchaseTrend);
