import React, { useState, useEffect } from 'react';
import { Row, Col, Radio, Table, Dialog } from 'tdesign-react';
import type { TableSort, TdPrimaryTableProps } from 'tdesign-react/es/table';
import ReactEcharts from 'echarts-for-react';
import classnames from 'classnames';

import request from 'utils/request';

import Card from 'components/Card';
import { getLineOptions, getBarOptions } from './chart';
import { TABLE_COLUMNS, BASE_INFO_DATA } from './constant';

import type { EChartOption } from 'echarts';
import Style from './index.module.less';

const DynamicLineChart = () => {
  const [lineOptions, setLineOptions] = useState<EChartOption>(getLineOptions());
  useEffect(() => {
    const timer = setInterval(() => setLineOptions(getLineOptions()), 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <ReactEcharts option={lineOptions} notMerge={true} lazyUpdate={true} style={{ height: 265 }} />;
};
const TopChart = () => {
  const [barOptions, setBarOptions] = useState<EChartOption>(getBarOptions());
  const tabChange = (isMonth: boolean) => {
    setBarOptions(getBarOptions(isMonth));
  };
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card title='部署趋势'>
          <DynamicLineChart />
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title='告警情况'
          operation={
            <Radio.Group defaultValue='week' onChange={(value) => tabChange(value === 'month')}>
              <Radio.Button value='week'>本周</Radio.Button>
              <Radio.Button value='month'>本月</Radio.Button>
            </Radio.Group>
          }
        >
          <ReactEcharts option={barOptions} notMerge={true} lazyUpdate={true} style={{ height: 265 }} />
        </Card>
      </Col>
    </Row>
  );
};
const BottomTable = () => {
  const [{ tableData }, setTableData] = useState({ tableData: [] });
  const [sort, setSort] = useState<TableSort>({ sortBy: 'name', descending: true });
  const [visible, setVisible] = useState(false);

  const removeRow = (rowIndex: number) => {
    const tmpTableData = tableData;
    tmpTableData.splice(rowIndex, 1);
    setTableData({ tableData: tmpTableData });
  };
  const showDialog = () => {
    setVisible(true);
  };
  const getTableColumns = (columns: TdPrimaryTableProps['columns']): TdPrimaryTableProps['columns'] => {
    if (columns) {
      columns[4].cell = (context) => {
        const { rowIndex } = context;
        return (
          <>
            <a className={Style.operationLink} onClick={() => showDialog()}>
              管理
            </a>
            <a className={Style.operationLink} onClick={() => removeRow(rowIndex)}>
              删除
            </a>
          </>
        );
      };
    }
    return columns;
  };

  const onSortChange = (sort: TableSort) => {
    setSort(sort);
  };

  const handleConfirm = () => setVisible(false);

  useEffect(() => {
    request.get('/api/get-project-list').then((res: any) => {
      if (res.code === 0) {
        const { list = [] } = res.data;
        setTableData({ tableData: list });
      }
    });
  }, []);

  return (
    <>
      <Card title='项目列表' style={{ marginTop: 16 }}>
        <Table
          data={tableData}
          rowKey='index'
          columns={getTableColumns(TABLE_COLUMNS)}
          pagination={{
            pageSize: 10,
            total: tableData.length,
            pageSizeOptions: [],
          }}
          sort={sort}
          onSortChange={onSortChange}
        ></Table>
        <Dialog
          header='基本信息'
          visible={visible}
          onClose={handleConfirm}
          onConfirm={handleConfirm}
          onCancel={handleConfirm}
          top={0}
        >
          <div>
            <div className={Style.popupBox}>
              {BASE_INFO_DATA.map((item, index) => (
                <div key={index} className={Style.popupItem}>
                  <h1>{item.name}</h1>
                  <p
                    className={classnames({
                      [Style.popupItem_green]: item.type && item.type.value === 'green',
                      [Style.popupItem_blue]: item.type && item.type.value === 'blue',
                    })}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Dialog>
      </Card>
    </>
  );
};
const DeployDetail = () => (
  <div className={Style.deployPanel}>
    <TopChart />
    <BottomTable />
  </div>
);

export default React.memo(DeployDetail);
