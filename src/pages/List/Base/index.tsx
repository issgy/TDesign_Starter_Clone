import React, { memo, useState } from 'react';
import { Row, Col, Table, Button, Input } from 'tdesign-react';
import PageBox from 'components/PageBox';

export default memo(() => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
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
          <Input placeholder='请输入你需要搜索的型号' />
        </Col>
      </Row>
      {/* <Table /> */}
    </PageBox>
  );
});
