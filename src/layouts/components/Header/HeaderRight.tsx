import React, { memo } from 'react';
import { Row, Col, Badge, Button, Popup, Dropdown } from 'tdesign-react';
import {
  MailIcon,
  LogoGithubIcon,
  HelpCircleIcon,
  Icon,
  SettingIcon,
  UserCircleIcon,
  PoweroffIcon,
} from 'tdesign-icons-react';
import { useNavigate } from 'react-router-dom';
import { toggleSetting } from 'modules/global';
import { useAppDispatch } from 'modules/store';
import { logout } from 'modules/user';
import Style from './Header.module.less';

const { DropdownMenu, DropdownItem } = Dropdown;
const TOKEN_NAME = 'tdesign-starter';

export default memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const gotoGitHub = () => {
    window.open('https://github.com/Tencent');
  };
  const gotoWiki = () => {
    window.open('https://tdesign.tencent.com/react/components/overview');
  };

  const clickHandler = (params: any) => {
    // 点击个人中心，地址栏和左侧菜单栏都变化
    if (params.value === 1) {
      navigate('/user/index');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem(TOKEN_NAME);
    navigate('/login/index');
  };
  return (
    <Row align='middle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Col style={{ lineHeight: '64px' }}>
        <Button shape='square' size='large' variant='text' className={Style.badgeBtn}>
          <Badge count={6} style={{ zIndex: 1 }}>
            <MailIcon></MailIcon>
          </Badge>
        </Button>
      </Col>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={gotoGitHub}>
          <Popup content='代码仓库' placement='bottom' showArrow destroyOnClose>
            <LogoGithubIcon />
          </Popup>
        </Button>
      </Col>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={gotoWiki}>
          <Popup content='帮助文档' placement='bottom' showArrow destroyOnClose>
            <HelpCircleIcon />
          </Popup>
        </Button>
      </Col>
      <Col>
        <Dropdown className={Style.dropdown} onClick={clickHandler} trigger={'click'}>
          <Button variant='text'>
            <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='user-circle' size='20' />
              <span style={{ display: 'inline-block', margin: '0 5px' }}>Tencent</span>
              <Icon name='chevron-down' size='20' />
            </span>
          </Button>
          <DropdownMenu>
            <DropdownItem value={1}>
              <UserCircleIcon />
              个人中心
            </DropdownItem>
            <DropdownItem value={2} onClick={handleLogout}>
              <PoweroffIcon />
              退出登录
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleSetting())}>
          <Popup content='页面设置' placement='bottom' showArrow destroyOnClose>
            <SettingIcon />
          </Popup>
        </Button>
      </Col>
    </Row>
  );
});
