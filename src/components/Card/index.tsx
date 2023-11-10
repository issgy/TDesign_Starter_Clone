import React, { ReactNode } from 'react';
import cx from 'classnames';
import { getPrefixCls } from './utils';
import './index.less';

export interface CardProps {
  title?: ReactNode;
  children?: React.ReactNode;
  borded?: Boolean;
  prefixCls?: string;
  className?: string;
}

const Card: React.FC = (props: CardProps) => {
  const { title, children, prefixCls, borded, className } = props;
  const cls = getPrefixCls('card', prefixCls);

  const borderCls = `${cls}-borderd`;

  const hasHead = Boolean(title);

  console.log(props);
  return (
    <div className={cx(cls, className, { [borderCls]: borded })}>
      {hasHead && (
        <div className={cx(`${cls}-head`)}>
          <div className={cx(`${cls}-head-wrapper`)}>
            {title && <div className={cx(`${cls}-head-title`)}>{title}</div>}
          </div>
        </div>
      )}
      <div className={cx(`${cls}-body`)}>{children}</div>
    </div>
  );
};

export default Card;
