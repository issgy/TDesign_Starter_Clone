import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, switchFullPage } from 'modules/global';
import { Layout, Breadcrumb } from 'tdesign-react';
import Style from './Page.module.less';

const { Content } = Layout;
const { BreadcrumbItem } = Breadcrumb;

const Page = ({
  children,
  isFullPage,
  breadcrumb,
}: React.PropsWithChildren<{ isFullPage?: boolean; breadcrumb?: string[] }>) => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(switchFullPage(isFullPage));
  }, [isFullPage]);

  if (isFullPage) {
    return <>{children}</>;
  }

  return (
    <Content className={Style.panel}>
      {globalState.showBreadcrumbs && (
        <Breadcrumb className={Style.breadcrumb}>
          {breadcrumb?.map((item, index) => (
            <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      {children}
    </Content>
  );
};

export default React.memo(Page);
