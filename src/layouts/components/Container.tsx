import React from 'react';
import { Layout } from 'tdesign-react';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import { ELayout } from 'modules/global';
import { ETheme } from 'types/index.d';

import Style from './Container.module.less';

interface ILayoutProps {
  theme?: ETheme;
  showHeader?: boolean;
  showFooter?: boolean;
}
// 布局1
export const SideLayout = React.memo((props: ILayoutProps) => (
  <Layout className={Style.sidePanel}>
    {/* 左侧菜单 */}
    <Menu showLogo showOperation />
    {/* 右侧 */}
    <Layout className={Style.sideContainer}>
      {/* 头部 */}
      {props.showHeader && <Header theme={props.theme} />}
      {/* 内容 */}
      <Content />
      {/* 尾部 */}
      {props.showFooter && <Footer />}
    </Layout>
  </Layout>
));

// 布局2
export const TopLayout = React.memo((props: ILayoutProps) => (
  <Layout className={Style.topPanel}>
    {props.showHeader && <Header theme='light' showMenu={true} />}
    <Content />
    {props.showFooter && <Footer />}
  </Layout>
));

// 布局3
export const MixLayout = React.memo((props: ILayoutProps) => (
  <Layout className={Style.mixPanel}>
    {props.showHeader && <Header theme='light' />}
    <Layout className={Style.mixMain}>
      <Menu theme={props.theme} />
      <Layout className={Style.mixContent}>
        <Content />
        {props.showFooter && <Footer />}
      </Layout>
    </Layout>
  </Layout>
));

const FullPageLayout = React.memo(() => <Content />);

export default {
  [ELayout.side]: SideLayout,
  [ELayout.top]: TopLayout,
  [ELayout.mix]: MixLayout,
  [ELayout.fullPage]: FullPageLayout,
};
