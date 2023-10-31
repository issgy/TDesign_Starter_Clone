import React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import DashboardBase from '../pages/Dashboard/Base/index';

//路由项的接口类型
interface IRouteItem {
  key?: string;
  path: string;
  exact?: boolean;
  isHome?: boolean;
  Component: React.FC<BrowserRouterProps>;
}

export const routes: IRouteItem[] = [
  {
    path: '/dashboard/base',
    Component: DashboardBase,
    isHome: true,
  },
];
