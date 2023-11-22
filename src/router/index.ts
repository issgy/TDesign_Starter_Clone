import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import dashboard from './modules/dashboard';
import list from './modules/list';
import detail from './modules/detail';
import form from './modules/form';
import result from './modules/result';
import user from './modules/user';
import login from './modules/login';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps>;
  isFullPage?: boolean;
  meta?: {
    title?: string;
    Icon?: React.FC;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
  },
  {
    path: '/',
    redirect: '/dashboard/base',
  },
];

const otherRoutes: IRouter[] = [
  {
    path: '/403',
    Component: lazy(() => import('pages/Result/403')),
  },
  {
    path: '/500',
    Component: lazy(() => import('pages/Result/500')),
  },
  {
    path: '*',
    Component: lazy(() => import('pages/Result/404')),
  },
];

const allRoutes = [...routes, ...dashboard, ...list, ...form, ...detail, ...result, ...user, ...login, ...otherRoutes];

export default allRoutes;
