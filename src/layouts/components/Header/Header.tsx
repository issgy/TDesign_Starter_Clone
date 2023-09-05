import React, { memo } from 'react';
import classNames from 'classnames';
import { Layout, Row, Col, Input, Button } from 'tdesign-react';
import { ViewListIcon, SearchIcon } from 'tdesign-icons-react';
import { useAppDispatch } from 'modules/store';
import { toggleMenu } from 'modules/global';
import HeaderRight from './HeaderRight';

import Style from './Header.module.less';

const { Header } = Layout;

interface IHeaderProps {
  fixed?: boolean; // 是否展示Header
  showMenu?: boolean; // 是否展示左侧菜单
  theme?: string; // 先默认light
}

export default memo((props: IHeaderProps) => {
  const dispatch = useAppDispatch();
  const HeaderLeft = (
    <Row gutter={16} align='middle'>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleMenu(null))}>
          <ViewListIcon />
        </Button>
      </Col>
      <Col>
        <Input prefixIcon={<SearchIcon />} placeholder='请输入内容' />
      </Col>
    </Row>
  );
  return (
    <Header className={classNames(Style.headerPanel)}>
      <Row justify='space-between' className={Style.rowPanel}>
        <Col>{HeaderLeft}</Col>
        <Col>
          <HeaderRight />
        </Col>
      </Row>
    </Header>
  );
});
