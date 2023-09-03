import React, { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectGlobal } from 'modules/global';
import { useAppSelector } from 'modules/store';
import { Menu } from 'tdesign-react';
import { menu, IMenuItem } from 'configs/menu';
import MenuLogo from './MenuLogo';
import MenuLogoMini from './MenuLogoMini';

import Style from './Menu.module.less';

const { MenuItem, SubMenu } = Menu;
interface IMenuProps {
  showLogo?: boolean;
  theme?: 'light' | 'dark';
  showOperation?: boolean;
}

const renderMenuItems = (menu: IMenuItem[]) =>
  menu.map((item) => {
    const navigate = useNavigate();
    const { key, label, Icon, children, path } = item;
    //   没有子菜单 or 有子菜单但长度为0
    if (!children || children.length === 0) {
      return (
        <MenuItem
          key={key}
          value={key}
          icon={Icon ? <Icon /> : undefined}
          onClick={() => {
            navigate(path as string);
          }}
        >
          {label}
        </MenuItem>
      );
    }

    // 有子菜单且长度不为0
    return (
      <SubMenu key={key} value={key} title={label} icon={Icon ? <Icon /> : undefined}>
        {renderMenuItems(children)}
      </SubMenu>
    );
  });

export default memo((props: IMenuProps) => {
  console.log(props);
  const globalState = useAppSelector(selectGlobal);
  const bottomText = globalState.collapsed ? globalState.version : `TDesign Starter ${globalState.version}`;
  const Logo = globalState.collapsed ? <MenuLogoMini /> : <MenuLogo />;

  return (
    <Menu
      width='232px'
      style={{ flexShrink: 0, height: '100%' }}
      collapsed={globalState.collapsed}
      theme={props.theme}
      operations={props.showOperation ? <div className={Style.menuTip}>{bottomText}</div> : undefined}
      logo={props.showLogo ? Logo : undefined}
    >
      {renderMenuItems(menu)}
    </Menu>
  );
});
