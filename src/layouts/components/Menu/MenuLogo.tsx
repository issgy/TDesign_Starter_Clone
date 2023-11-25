import React, { memo } from 'react';
import MiniLogo from 'assets/svg/assets-t-logo.svg';
import FullLogo from 'assets/svg/assets-logo-full.svg?component';
import { useNavigate } from 'react-router-dom';
import Style from './Menu.module.less';

interface IProps {
  collapsed?: boolean;
}

export default memo((props: IProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className={Style.menuLogo} onClick={handleClick}>
      {props.collapsed ? <img src={MiniLogo} className={Style.menuMiniLogo} /> : <FullLogo />}
    </div>
  );
});
