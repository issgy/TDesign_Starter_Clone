import React, { memo, Suspense, useEffect } from 'react';
import { Layout, Loading } from 'tdesign-react';
import { Routes, Navigate, Route } from 'react-router-dom';
import routers, { IRouter } from 'router';
import Style from './Content.module.less';
import { resolve } from 'utils/path';
import Page from './Page';

const { Content } = Layout;

const renderRoutes = (routers: IRouter[], parentPath = ''): React.ReactNode[] =>
  routers.map((route, index: number) => {
    const { Component, children, redirect } = route;
    const currentPath = resolve(parentPath, route.path);
    if (redirect) {
      // 重定向
      return <Route key={index} path={currentPath} element={<Navigate to={redirect} replace />} />;
    }

    if (Component) {
      return (
        <Route
          key={index}
          path={currentPath}
          element={
            <Page isFullPage={route.isFullPage}>
              <Component />
            </Page>
          }
        >
          {children && renderRoutes(children, currentPath)}
        </Route>
      );
    }

    if (children) {
      return renderRoutes(children, currentPath);
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
