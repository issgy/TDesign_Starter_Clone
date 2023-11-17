import React, { memo } from 'react';
import { Row, Col, Badge, Button, Popup, Dropdown } from 'tdesign-react';
import { MailIcon, LogoGithubIcon, HelpCircleIcon, Icon, SettingIcon } from 'tdesign-icons-react';
import { useNavigate } from 'react-router-dom';
import { toggleSetting } from 'modules/global';
import { useAppDispatch } from 'modules/store';
import Style from './Header.module.less';

export default memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const gotoGitHub = () => {
    window.open('https://github.com/Tencent');
  };
  const gotoWiki = () => {
    window.open('https://tdesign.tencent.com/react/components/overview');
  };
  const options = [
    {
      content: '个人中心',
      value: 1,
    },
    {
      content: '退出登录',
      value: 2,
    },
  ];
  const clickHandler = (params: any) => {
    // 点击个人中心，地址栏和左侧菜单栏都变化
    if (params.value === 1) {
      navigate('/user/index');
    }
  };
  return (
    <Row align='middle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Col style={{ lineHeight: '64px' }}>
        <Button shape='square' size='large' variant='text'>
          <Badge count={99}>
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
        <Dropdown className={Style.dropdown} options={options} onClick={clickHandler} trigger={'click'}>
          <Button variant='text'>
            <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='user-circle' size='20' />
              <span style={{ display: 'inline-block', margin: '0 5px' }}>Tencent</span>
              <Icon name='chevron-down' size='20' />
            </span>
          </Button>
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
