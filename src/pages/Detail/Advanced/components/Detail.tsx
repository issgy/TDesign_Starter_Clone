import React from 'react';
import { Button, Table, Tag, Card } from 'tdesign-react';
import { dataBuyList, total } from '../consts';
import Style from '../index.module.less';

const Detail = () => (
  <Card title='产品采购明细' className={Style.cardBox}>
    <Table
      rowKey='index'
      data={dataBuyList}
      columns={[
        {
          align: 'left',
          width: 300,
          minWidth: 300,
          ellipsis: true,
          colKey: 'number',
          title: '申请号',
        },
        {
          align: 'center',
          width: 200,
          minWidth: 200,
          ellipsis: true,
          colKey: 'name',
          title: '产品名称',
          cell({ row }) {
            return (
              <>
                {row.name}
                <Tag theme='default' size='small'>
                  {row.tag}
                </Tag>
              </>
            );
          },
        },
        {
          align: 'center',
          width: 200,
          minWidth: 200,
          ellipsis: true,
          colKey: 'amount',
          title: '采购数量',
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
          width: 300,
          minWidth: 300,
          ellipsis: true,
          colKey: 'createtime',
          title: '创建时间',
        },
        {
          align: 'center',
          fixed: 'right',
          width: 200,
          minWidth: 200,
          colKey: 'op',
          title: '操作',
          cell() {
            return (
              <>
                <Button theme='primary' variant='text'>
                  管理
                </Button>
                <Button theme='primary' variant='text'>
                  删除
                </Button>
              </>
            );
          },
        },
      ]}
      tableLayout='auto'
      verticalAlign='top'
      hover
      pagination={{
        pageSize: 10,
        total,
        current: 1,
        showJumper: true,
        onChange(pageInfo) {
          console.log(pageInfo, 'onChange pageInfo');
        },
        onCurrentChange(current, pageInfo) {
          console.log(current, 'onCurrentChange current');
          console.log(pageInfo, 'onCurrentChange pageInfo');
        },
        onPageSizeChange(size, pageInfo) {
          console.log(size, 'onPageSizeChange size');
          console.log(pageInfo, 'onPageSizeChange pageInfo');
        },
      }}
    />
  </Card>
);

export default React.memo(Detail);
