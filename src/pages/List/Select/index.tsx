import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Table, Dialog, Button } from 'tdesign-react';
import SearchForm from './components/SearchForm';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListSelect, getList, clearPageState } from 'modules/list/select';
import { ContractTypeMap, PaymentTypeMap, StatusMap } from '../Base/index';
import CommonStyle from 'styles/common.module.less';

import './index.module.less';

export const SelectTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListSelect);

  const { loading, current, pageSize, total, contractList } = pageState;

  const onSelectChange = (value: (string | number)[]) => {
    setSelectedRowKeys(value);
  };
  const rehandleClickOp = (record: any) => {
    console.log(record);
  };
  function handleClickDelete(record: any) {
    setVisible(true);
  }
  function handleClose() {
    setVisible(false);
  }

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );

    return () => {
      dispatch(clearPageState());
    };
  }, []);
  return (
    <>
      <SearchForm />
      <Table
        data={contractList}
        rowKey='index'
        loading={loading}
        columns={[
          {
            title: '合同名称',
            fixed: 'left',
            minWidth: '300',
            align: 'left',
            ellipsis: true,
            colKey: 'name',
          },
          {
            title: '合同状态',
            colKey: 'status',
            width: 200,
            cell({ row }) {
              return StatusMap[row.status || 5];
            },
          },
          {
            title: '合同编号',
            width: 200,
            ellipsis: true,
            colKey: 'no',
          },
          {
            title: '合同类型',
            width: 200,
            ellipsis: true,
            colKey: 'contractType',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: '合同收付类型',
            width: 200,
            ellipsis: true,
            colKey: 'paymentType',
            cell({ row }) {
              return PaymentTypeMap[row.paymentType];
            },
          },
          {
            title: '合同金额 (元)',
            width: 200,
            ellipsis: true,
            colKey: 'amount',
          },
          {
            title: '操作',
            width: 200,
            minWidth: 200,
            colKey: 'op',
            align: 'left',
            fixed: 'right',
            cell(record) {
              return (
                <>
                  <Button
                    theme='primary'
                    variant='text'
                    onClick={() => {
                      rehandleClickOp(record);
                    }}
                  >
                    管理
                  </Button>
                  <Button
                    theme='primary'
                    variant='text'
                    onClick={() => {
                      handleClickDelete(record);
                    }}
                  >
                    删除
                  </Button>
                </>
              );
            },
          },
        ]}
        selectedRowKeys={selectedRowKeys}
        tableLayout='auto'
        hover
        onSelectChange={onSelectChange}
        pagination={{
          pageSize,
          total,
          current,
          showJumper: true,
          maxPageBtn: 5,
          onPageSizeChange(size, pageInfo) {
            dispatch(
              getList({
                current: pageInfo.current,
                pageSize: pageInfo.pageSize,
              }),
            );
          },
          onCurrentChange(current, pageInfo) {
            dispatch(
              getList({
                current,
                pageSize: pageInfo.pageSize,
              }),
            );
          },
        }}
      />
      <Dialog header='确认删除当前所选合同？' visible={visible} onClose={handleClose}>
        <p>删除后的所有合同信息将被清空，且无法恢复</p>
      </Dialog>
    </>
  );
};

const selectPage: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <SelectTable />
  </div>
);
export default React.memo(selectPage);
