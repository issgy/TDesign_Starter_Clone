import React from 'react';
import { Row, Col, Switch } from 'tdesign-react';
import RadioRect from './RadioRect';
import RadioColor from './RadioColor';
import { Dark, Light, System } from './Icons';
import { useAppDispatch, useAppSelector } from 'modules/store';
import {
  switchTheme,
  switchColor,
  switchLayout,
  selectGlobal,
  toggleShowHeader,
  toggleFixedHeader,
  toggleShowFooter,
  toggleShowBreadcrumbs,
  switchChartColor,
} from 'modules/global/index';

import Style from './index.module.less';

const themeList = [
  {
    value: 'light',
    image: Light,
    name: '明亮',
  },
  {
    value: 'dark',
    image: Dark,
    name: '黑暗',
  },
  {
    value: 'system',
    image: System,
    name: '跟随系统',
  },
];
const layoutList = [
  {
    value: 'layout1',
    image: 'https://tdesign.gtimg.com/starter/setting/side.png',
  },
  {
    value: 'layout2',
    image: 'https://tdesign.gtimg.com/starter/setting/top.png',
  },
  {
    value: 'layout3',
    image: 'https://tdesign.gtimg.com/starter/setting/mix.png',
  },
];

export default React.memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);
  return (
    <div>
      <div className={Style.settingTitle}>主题模式</div>
      <div>
        <RadioRect
          defaultValue={globalState.theme}
          onChange={(value) => dispatch(switchTheme(value))}
          options={themeList}
        />
      </div>
      <div className={Style.settingTitle}>主题色</div>
      <RadioColor defaultValue={globalState.color} onChange={(color) => dispatch(switchColor(color))} />

      <div className={Style.settingTitle}>导航布局</div>
      <RadioRect
        defaultValue={globalState.layout}
        onChange={(value) => dispatch(switchLayout(value))}
        options={layoutList}
      />

      <div className={Style.settingTitle}>元素开关</div>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>显示 Header</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.showHeader} onChange={() => dispatch(toggleShowHeader())} />
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>固定 Header</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.fixedHeader} onChange={() => dispatch(toggleFixedHeader())} />
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>显示 Breadcrumbs</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.showBreadcrumbs} onChange={() => dispatch(toggleShowBreadcrumbs())} />
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>显示 Footer</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.showFooter} onChange={() => dispatch(toggleShowFooter())} />
        </Col>
      </Row>
    </div>
  );
});