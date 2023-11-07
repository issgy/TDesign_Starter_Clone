import React, { useState } from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

interface IOption {
  value: number | string;
  image: JSX.Element | string;
  name?: string;
}
interface IProps {
  defaultValue?: number | string;
  onChange: (value: number | string) => void;
  options: IOption[];
}
export default React.memo((props: IProps) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);

  const handleClick = (option: IOption) => {
    setSelectedValue(option.value);
    props?.onChange(option.value);
  };
  return (
    <div className={Style.radioRectPanel}>
      {props.options.map((item, index) => {
        let ImageItem = item.image;
        if (typeof item.image === 'string') {
          ImageItem = <div className={Style.rectImg} style={{ backgroundImage: `url(${item.image})` }}></div>;
        }
        return (
          <div key={index}>
            <div
              className={classnames(Style.rectItem, { [Style.rectItemSlected]: selectedValue === item.value })}
              onClick={() => handleClick(item)}
            >
              {ImageItem}
            </div>
            {item.name && <div className={Style.rectText}>{item.name}</div>}
          </div>
        );
      })}
    </div>
  );
});
