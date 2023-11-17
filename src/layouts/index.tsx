import React, { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, toggleSetting, toggleMenu } from 'modules/global';
import { Layout, Drawer } from 'tdesign-react';
import { Layout1, Layout2, Layout3 } from './components/Container';
import Style from './index.module.less';
import Setting from './components/Setting';
import { throttle } from 'lodash';

// 使用memo来优化函数组件性能。会在重新渲染之前进行浅比较，如果传入的props没有变化，则不会重新渲染
export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  const handleResize = throttle(() => {
    if (window.innerWidth < 900) {
      dispatch(toggleMenu(true));
    } else if (window.innerWidth > 1000) {
      dispatch(toggleMenu(false));
    }
  }, 100);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  let Component;
  if (globalState.layout === 'layout1') {
    Component = Layout1;
  } else if (globalState.layout === 'layout2') {
    Component = Layout2;
  } else {
    Component = Layout3;
  }

  const handleClose = () => {
    dispatch(toggleSetting());
  };
  return (
    <Layout className={Style.mainPanel}>
      <Component theme={globalState.theme} showHeader={globalState.showHeader} showFooter={globalState.showFooter} />
      <Drawer
        destroyOnClose
        visible={globalState.setting}
        size='458px'
        header={<div>页面配置</div>}
        footer={false}
        onClose={handleClose}
      >
        <Setting />
      </Drawer>
    </Layout>
  );
});
