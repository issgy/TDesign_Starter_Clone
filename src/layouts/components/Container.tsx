import React from 'react';
import { Layout } from 'tdesign-react';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import Style from './Content/Content.module.less';

// 布局1
export const Layout1 = React.memo(() => (
  <Layout className={Style.layout1Panel}>
    {/* 左侧菜单 */}
    <Menu showLogo showOperation theme='dark' />
    {/* 右侧 */}
    <Layout className={Style.layout1Container}>
      {/* 头部 */}
      <Header />
      {/* 内容 */}
      <Content />
      {/* 尾部 */}
      <Footer />
    </Layout>
  </Layout>
));

// 布局2
export const Layout2 = React.memo(() => (
  <Layout>
    <div>test2</div>
  </Layout>
));

// 布局3
export const Layout3 = React.memo(() => (
  <Layout>
    <div>test3</div>
  </Layout>
));
