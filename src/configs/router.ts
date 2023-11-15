import React, { Component } from 'react';
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
import DetailDeploy from '../pages/Detail/Deploy';
import DetailSecondary from '../pages/Detail/Secondary';
import User from '../pages/User';
import ResultSuccess from '../pages/Result/Success';
import ResultFail from '../pages/Result/Fail';
import ResultNetworkError from '../pages/Result/NetworkError';
import Result403 from 'pages/Result/403';
import Result404 from 'pages/Result/404';
import Result500 from 'pages/Result/500';
import ResultBrowserIncompatible from '../pages/Result/BrowserIncompatible';

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
  {
    path: '/detail/deploy',
    Component: DetailDeploy,
  },
  {
    path: '/detail/secondary',
    Component: DetailSecondary,
  },
  {
    path: '/user/index',
    Component: User,
  },
  {
    path: '/result/success',
    Component: ResultSuccess,
  },
  {
    path: '/result/fail',
    Component: ResultFail,
  },
  {
    path: '/result/network-error',
    Component: ResultNetworkError,
  },
  {
    path: '/result/403',
    Component: Result403,
  },
  {
    path: '/result/404',
    Component: Result404,
  },
  {
    path: '/result/500',
    Component: Result500,
  },
  {
    path: '/result/browser-incompatible',
    Component: ResultBrowserIncompatible,
  },
];
