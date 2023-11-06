import React, { memo, useState } from 'react';
import { Row, Col, Table, Button, Input, Tag } from 'tdesign-react';
import { ChevronUpCircleIcon, SearchIcon } from 'tdesign-icons-react';
import PageBox from 'components/PageBox';

const data: any = [];
const total = 50;
for (let i = 0; i < total; i++) {
  data.push({
    index: i,
    name: '共有',
    status: '已完成',
    code: 'BH0001',
    type: '收款',
    department: '财务部',
    money: '120,000',
  });
}
export default memo(() => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  const onSelectChange = (value: (string | number)[]) => {
    setSelectedRowKeys(value);
  };
  return (
    <PageBox>
      <Row justify='space-between' style={{ color: '#666', marginBottom: '20px' }}>
        <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Button>新建合同</Button>
            </Col>
            <Button theme='default'>导出合同</Button>
            <Col>
              <div>已选{selectedRowKeys?.length || 0}项</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Input suffixIcon={<SearchIcon />} placeholder='请输入你需要搜索的型号' />
        </Col>
      </Row>
      <Table
        rowKey='index'
        data={data}
        columns={[
          { colKey: 'row-select', fixed: 'left', type: 'multiple', width: 50 },
          { colKey: 'name', title: '合同名称', minWidth: 300, width: 300, align: 'left', ellipsis: true },
          {
            colKey: 'status',
            title: '合同状态',
            minWidth: 200,
            width: 200,
            align: 'left',
            ellipsis: true,
            cell({ row }) {
              return <Tag theme='primary'>{row.status}</Tag>;
            },
          },
          { colKey: 'code', title: '合同编号', minWidth: 200, width: 200, align: 'left', ellipsis: true },
          {
            colKey: 'type',
            title: '合同付款类型',
            minWidth: 200,
            width: 200,
            align: 'left',
            ellipsis: true,
            cell({ row }) {
              return (
                <>
                  {row.money}
                  <ChevronUpCircleIcon style={{ color: 'red' }}></ChevronUpCircleIcon>
                </>
              );
            },
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'department',
            title: '申请部门',
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'money',
            title: '合同金额（元）',
          },
          {
            colKey: 'opration',
            title: '操作',
            minWidth: 200,
            width: 200,
            fixed: 'right',
            align: 'left',
            cell() {
              return (
                <>
                  <Button theme='primary' variant='text'>
                    详情
                  </Button>
                  <Button theme='primary' variant='text'>
                    删除
                  </Button>
                </>
              );
            },
          },
        ]}
        selectedRowKeys={selectedRowKeys}
        hover
        tableLayout='auto'
        verticalAlign='middle'
        onSelectChange={onSelectChange}
        pagination={{
          pageSize: 10,
          current: 1,
          total,
          showJumper: true,
          onChange(pageInfo) {
            console.log(pageInfo);
          },
          onPageSizeChange(size, pageInfo) {
            console.log(size, pageInfo);
          },
          onCurrentChange(current, pageInfo) {
            console.log(current, pageInfo);
          },
        }}
      />
    </PageBox>
  );
});
