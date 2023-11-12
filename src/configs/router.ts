import React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import DashboardBase from '../pages/Dashboard/Base/index';
import DashboardDetail from '../pages/Dashboard/Detail';
import ListBase from '../pages/List/Base';
import ListSelect from '../pages/List/Select';
import ListTree from '../pages/List/Tree';
import FromBse from '../pages/Form/Base';
import FromStep from '../pages/Form/Step';
import DetailBase from '../pages/Detail/Base';
import DetailAdvanced from '../pages/Detail/Advanced';
import DetailSecondary from '../pages/Detail/Secondary';

// 路由项的接口类型
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
  {
    path: 'dashboard/detail',
    Component: DashboardDetail,
  },
  {
    path: 'list/base',
    Component: ListBase,
  },
  {
    path: 'list/select',
    Component: ListSelect,
  },
  {
    path: 'list/tree',
    Component: ListTree,
  },
  {
    path: 'form/base',
    Component: FromBse,
  },
  {
    path: 'form/step',
    Component: FromStep,
  },
  {
    path: '/detail/base',
    Component: DetailBase,
  },
  {
    path: '/detail/advanced',
    Component: DetailAdvanced,
  },
  // {
  //   path: '/detail/deploy',
  //   Component: DetailDeploy,
  // },
  {
    path: '/detail/secondary',
    Component: DetailSecondary,
  },
];
