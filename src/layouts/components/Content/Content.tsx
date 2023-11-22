import React, { memo, Suspense, useEffect } from 'react';
import { Layout, Loading } from 'tdesign-react';
import { Routes, Navigate, Route } from 'react-router-dom';
import routers, { IRouter } from 'router';
import Style from './Content.module.less';
import { resolve } from 'utils/path';
import { useAppDispatch } from 'modules/store';
import { switchFullPage } from 'modules/global';

const { Content } = Layout;

const PageLoading = React.memo(() => (
  <div className={Style.loading}>
    <Loading />
  </div>
));

const PageBox = React.memo(({ children, isFullPage }: React.PropsWithChildren<{ isFullPage?: boolean }>) => {
  const dispatcch = useAppDispatch();

  useEffect(() => {
    dispatcch(switchFullPage(isFullPage));
  }, [isFullPage]);
  return <>{children}</>;
});

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
            <PageBox isFullPage={route.isFullPage}>
              <Component />
            </PageBox>
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
    <Suspense fallback={<PageLoading />}>
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  </Content>
));
