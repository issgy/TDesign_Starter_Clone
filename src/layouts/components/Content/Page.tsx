import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { switchFullPage } from 'modules/global';
import { Layout } from 'tdesign-react';
import Style from './Page.module.less';

const { Content } = Layout;

const Page = ({ children, isFullPage }: React.PropsWithChildren<{ isFullPage?: boolean }>) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(switchFullPage(isFullPage));
  }, [isFullPage]);

  return <Content className={Style.panel}>{children}</Content>;
};

export default React.memo(Page);
