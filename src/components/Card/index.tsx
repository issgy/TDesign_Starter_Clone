// import React, { ReactNode } from 'react';
// import cx from 'classnames';
// import { Tabs, TabPanelProps } from 'tdesign-react';
// import { getPrefixCls } from './utils';
// import Grid from './Grid';
// import './index.less';
// import TabPanel from 'tdesign-react/es/tabs/TabPanel';

// export interface CardProps {
//   title?: ReactNode;
//   extra?: ReactNode;
//   children?: React.ReactNode;
//   borded?: Boolean;
//   prefixCls?: string;
//   className?: string;
//   style?: React.CSSProperties;
//   headStyle?: React.CSSProperties;
//   bodyStyle?: React.CSSProperties;
//   tabList?: TabPanelProps[];
// }

// export interface CardInterface extends React.FC<CardProps> {
//   Grid: typeof Grid;
// }

// const Card = (props: CardProps) => {
//   const { title, extra, children, prefixCls, borded, className, style, headStyle, bodyStyle, tabList } = props;
//   const cls = getPrefixCls('card', prefixCls);

//   const borderCls = `${cls}-borderd`;

//   const tabs = tabList?.length ? (
//     <Tabs>
//       {tabList?.map((tab) => (
//         <TabPanel key={tab.value} {...tab}></TabPanel>
//       ))}
//     </Tabs>
//   ) : null;

//   const hasHead = Boolean(title || extra || tabs);

//   return (
//     <div style={style} className={cx(cls, className, { [borderCls]: borded })}>
//       {hasHead && (
//         <div className={cx(`${cls}-head`)} style={headStyle}>
//           <div className={cx(`${cls}-head-wrapper`)}>
//             {title && <div className={cx(`${cls}-head-title`)}>{title}</div>}
//             {extra && <div className={cx(`${cls}-head-extra`)}>{extra}</div>}
//           </div>
//           {tabs}
//         </div>
//       )}
//       <div className={cx(`${cls}-body`)}>{children}</div>
//     </div>
//   );
// };

// Card.Grid = Grid;

// export default Card;

import React from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

export interface ICardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  operation?: React.ReactNode;
  className?: string;
  border?: boolean;
  size?: 'small' | 'large';
  [key: string]: any;
}

const Card = ({
  title,
  description,
  operation,
  children,
  border,
  className,
  size,
  ...other
}: React.PropsWithChildren<ICardProps>) => (
  <div
    className={classnames(
      Style.cardPanel,
      {
        [Style.cardPanelBorder]: border,
      },
      className,
    )}
    {...other}
  >
    <div className={Style.top}>
      <div className={Style.left}>
        <div
          className={classnames(Style.cardTitle, {
            [Style.cardTitleSmall]: size === 'small',
          })}
        >
          {title}
        </div>
        <div className={Style.cardDescription}>{description}</div>
      </div>
      <div>{operation}</div>
    </div>
    <div className={Style.cardContainer}>{children}</div>
  </div>
);

export default React.memo(Card);
