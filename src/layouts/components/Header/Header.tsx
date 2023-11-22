import React, { memo } from 'react';
import { Layout, Row, Col, Input, Button } from 'tdesign-react';
import { ViewListIcon, SearchIcon } from 'tdesign-icons-react';
import { useAppDispatch } from 'modules/store';
import { toggleMenu } from 'modules/global';
import HeaderRight from './HeaderRight';
import { HeaderMenu } from '../Menu/Menu';

import Style from './Header.module.less';

const { Header } = Layout;

interface IHeaderProps {
  showMenu?: boolean; // 是否展示左侧菜单
  theme?: 'light' | 'dark' | 'auto';
}

export default memo((props: IHeaderProps) => {
  const dispatch = useAppDispatch();
  let HeaderLeft;
  if (props.showMenu) {
    HeaderLeft = <HeaderMenu theme={props.theme} />;
  } else {
    HeaderLeft = (
      <Row gutter={16} align='middle'>
        <Col style={{ lineHeight: '64px' }}>
          <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleMenu(null))}>
            <ViewListIcon />
          </Button>
        </Col>
        <Col>
          <Input prefixIcon={<SearchIcon />} placeholder='请输入内容' />
        </Col>
      </Row>
    );
  }

  return (
    <Header className={Style.headerPanel} style={{ height: '64px', lineHeight: '64px' }}>
      <Row justify='space-between'>
        <Col>{HeaderLeft}</Col>
        <Col>
          <HeaderRight />
        </Col>
      </Row>
    </Header>
  );
});
