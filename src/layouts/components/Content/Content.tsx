import React, { memo, Suspense, useEffect } from 'react';
import { Layout, Loading } from 'tdesign-react';
import { Routes, Navigate, Route } from 'react-router-dom';
import routers, { IRouter } from 'router';
import Style from './Content.module.less';
import { resolve } from 'utils/path';
import Page from './Page';

const { Content } = Layout;

// 定义一个TRenderRoutes类型，它是一个函数类型，接收参数 routes、parentPath、breadcrumb，返回值为React.ReactNode[]
type TRenderRoutes = (routes: IRouter[], parentPath?: string, breadcrumb?: string[]) => React.ReactNode[];

const renderRoutes: TRenderRoutes = (routes: IRouter[], parentPath = '', breadcrumb = []) =>
  routes.map((route, index: number) => {
    const { Component, children, redirect, meta } = route;
    const currentPath = resolve(parentPath, route.path);
    let currentBreadcrumb = breadcrumb;

    if (redirect) {
      // 重定向
      return <Route key={index} path={currentPath} element={<Navigate to={redirect} replace />} />;
    }

    if (meta?.title) {
      currentBreadcrumb = currentBreadcrumb.concat([meta?.title]);
    }

    if (Component) {
      return (
        <Route
          key={index}
          path={currentPath}
          element={
            <Page isFullPage={route.isFullPage} breadcrumb={currentBreadcrumb}>
              <Component />
            </Page>
          }
        >
          {children && renderRoutes(children, currentPath, currentBreadcrumb)}
        </Route>
      );
    }

    if (children) {
      return renderRoutes(children, currentPath, currentBreadcrumb);
    }
    return null;
  });
export default memo(() => (
  <Content>
    <Suspense
      fallback={
        <div className={Style.loading}>
          <Loading />
        </div>
      }
    >
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  </Content>
));
