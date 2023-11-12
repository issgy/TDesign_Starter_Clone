import React from 'react';
import { AddIcon, Icon, ChevronRightIcon } from 'tdesign-icons-react';
import { Tag, Progress } from 'tdesign-react';
import Style from './ProductCard.module.less';

interface IProps {
  isAdd?: Boolean;
  title?: string;
  tags?: string[];
  desc?: string;
  percent?: string;
  Icon?: string;
  progress?: number;
  color?: string;
  trackColor?: string;
}

const ProductCard = (props: IProps) => (
  <div>
    {props.isAdd ? (
      <div className={Style.productionAdd}>
        <div className={Style.productionAddBtn}>
          <AddIcon className={Style.pruductionAddIcon} />
          <span>新增产品</span>
        </div>
      </div>
    ) : (
      <div className={Style.productionCard}>
        <div className={Style.productionTitle}>
          <Icon name={props.Icon} className={Style.productionIcon}></Icon>
          <div className={Style.title}>{props.title}</div>
          <div>
            {props?.tags?.map((tag, index) => (
              <Tag key={index} className={Style.tag} theme='success' variant='dark' size='small'>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <div className={Style.item}>
          <span className={Style.info}>{props.desc}</span>
          <ChevronRightIcon className={Style.icon} />
        </div>
        <div className={Style.footer}>
          <span className={Style.percent}>{props.percent}</span>
          <div className={Style.progress}>
            <Progress percentage={props.progress} label={false} color={props.color} trackColor={props.trackColor} />
          </div>
        </div>
      </div>
    )}
  </div>
);

export default React.memo(ProductCard);
