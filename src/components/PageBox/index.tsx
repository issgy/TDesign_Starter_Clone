import React from 'react';
import { Layout } from 'tdesign-react';
import classnames from 'classnames';
import Style from './index.module.less';

const { Content } = Layout;

interface IProps extends React.HTMLAttributes<HTMLElement> {
  withColor?: boolean;
  withPadding?: boolean;
}

const PageBox = ({ withColor = true, withPadding = true, ...others }: IProps) => (
  <Content
    className={classnames(Style.pageBox, {
      [Style.pageBoxWithColor]: withColor,
      [Style.pageBoxWithPadding]: withPadding,
    })}
    {...others}
  ></Content>
);

export default React.memo(PageBox);
