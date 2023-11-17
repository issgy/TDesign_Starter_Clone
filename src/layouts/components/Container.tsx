import React from 'react';
import { Layout } from 'tdesign-react';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import { TTheme } from 'modules/global';

import Style from './Content/Content.module.less';

interface ILayoutProps {
  theme?: TTheme;
  showHeader?: boolean;
  fixedHeader?: boolean;
  showFooter?: boolean;
}
// 布局1
export const Layout1 = React.memo((props: ILayoutProps) => (
  <Layout className={Style.layout1Panel}>
    {/* 左侧菜单 */}
    <Menu showLogo showOperation theme='light' />
    {/* 右侧 */}
    <Layout className={Style.layout1Container}>
      {/* 头部 */}
      {props.showHeader && <Header fixed={props.fixedHeader} theme={props.theme} />}
      {/* 内容 */}
      <Content />
      {/* 尾部 */}
      {props.showFooter && <Footer />}
    </Layout>
  </Layout>
));

// 布局2
export const Layout2 = React.memo((props: ILayoutProps) => (
  <Layout className={Style.layout2Panel}>
    {props.showHeader && <Header fixed={props.fixedHeader} theme='light' showMenu={true} />}
    <Content />
    {props.showFooter && <Footer />}
  </Layout>
));

// 布局3
export const Layout3 = React.memo((props: ILayoutProps) => (
  <Layout className={Style.layout3Panel}>
    {props.showHeader && <Header fixed={props.fixedHeader} theme='light' />}
    <Layout className={Style.layout3Main}>
      <Menu theme={props.theme} />
      <Layout className={Style.layout3Content}>
        <Content />
        {props.showFooter && <Footer />}
      </Layout>
    </Layout>
  </Layout>
));
