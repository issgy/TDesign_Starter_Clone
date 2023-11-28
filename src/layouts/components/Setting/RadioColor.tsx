import React, { useState } from 'react';
import Style from './index.module.less';
import { defaultColor } from 'configs/color';

interface IProps {
  defaultValue?: number | string;
  options?: any;
  onChange: (color: string) => void;
}
export default React.memo((props: IProps) => (
  <div className={Style.radioColorPanel}>
    {defaultColor.map((color, index) => (
      <div
        key={index}
        onClick={() => props.onChange(color)}
        className={Style.colorItemBox}
        style={{ borderColor: props.defaultValue === color ? color : 'rgba(0,0,0,0)' }}
      >
        <div className={Style.colorItem} style={{ backgroundColor: color }}></div>
      </div>
    ))}
  </div>
));
