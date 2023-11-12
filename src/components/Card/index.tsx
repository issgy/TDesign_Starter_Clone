import React, { ReactNode } from 'react';
import cx from 'classnames';
import { getPrefixCls } from './utils';
import './index.less';

export interface CardProps {
  title?: ReactNode;
  extra?: ReactNode;
  children?: React.ReactNode;
  borded?: Boolean;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const { title, extra, children, prefixCls, borded, className, style } = props;
  const cls = getPrefixCls('card', prefixCls);

  const borderCls = `${cls}-borderd`;

  const hasHead = Boolean(title || extra);

  return (
    <div style={style} className={cx(cls, className, { [borderCls]: borded })}>
      {hasHead && (
        <div className={cx(`${cls}-head`)}>
          <div className={cx(`${cls}-head-wrapper`)}>
            {title && <div className={cx(`${cls}-head-title`)}>{title}</div>}
            {extra && <div className={cx(`${cls}-head-extra`)}>{extra}</div>}
          </div>
        </div>
      )}
      <div className={cx(`${cls}-body`)}>{children}</div>
    </div>
  );
};

export default Card;