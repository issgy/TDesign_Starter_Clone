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
  toggleShowFooter,
  toggleShowBreadcrumbs,
  ELayout,
  ETheme,
} from 'modules/global/index';

import Style from './index.module.less';

const themeList = [
  {
    value: ETheme.light,
    image: Light,
    name: '明亮',
  },
  {
    value: ETheme.dark,
    image: Dark,
    name: '黑暗',
  },
  {
    value: ETheme.auto,
    image: System,
    name: '跟随系统',
  },
];
const layoutList = [
  {
    value: ELayout.side,
    image: 'https://tdesign.gtimg.com/starter/setting/side.png',
  },
  {
    value: ELayout.top,
    image: 'https://tdesign.gtimg.com/starter/setting/top.png',
  },
  {
    value: ELayout.mix,
    image: 'https://tdesign.gtimg.com/starter/setting/mix.png',
  },
];

export default React.memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);

  return (
    <div>
      <div className={Style.settingTitle}>主题模式</div>
      <RadioRect
        defaultValue={globalState.theme}
        onChange={(value) => dispatch(switchTheme(value))}
        options={themeList}
      />

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
