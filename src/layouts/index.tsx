import React, { Component, memo } from 'react';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import { Layout } from 'tdesign-react';
import { Layout1 } from './components/Container';
import Style from './index.module.less';

// 使用memo来优化函数组件性能。会在重新渲染之前进行浅比较，如果传入的props没有变化，则不会重新渲染
export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  console.log(globalState);
  let Component;
  if (globalState.layout === 'layout1') {
    Component = Layout1;
  }
  return (
    <Layout className={Style.mainPanel}>
      <Component />
    </Layout>
  );
});
