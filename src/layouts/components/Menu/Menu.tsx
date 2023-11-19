import React, { memo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectGlobal } from 'modules/global';
import { useAppSelector } from 'modules/store';
import { Menu, MenuValue } from 'tdesign-react';
import { menu, IMenuItem } from 'configs/menu';
import MenuLogo from './MenuLogo';
import MenuLogoMini from './MenuLogoMini';

import Style from './Menu.module.less';

const { MenuItem, SubMenu, HeadMenu } = Menu;
interface IMenuProps {
  showLogo?: boolean;
  theme?: 'light' | 'dark' | 'auto';
  showOperation?: boolean;
}

const renderMenuItems = (menu: IMenuItem[]) =>
  menu.map((item) => {
    // react router v5或更早用useHistory。useNavigate()是一个函数，而useHistory是一个对象
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

    // 有子菜单且长度不为0，自己调用自己
    return (
      <SubMenu key={key} value={key} title={label} icon={Icon ? <Icon /> : undefined}>
        {renderMenuItems(children)}
      </SubMenu>
    );
  });

export const HeaderMenu = memo((props: IMenuProps) => {
  const location = useLocation();
  const [active, setActive] = useState<MenuValue>(location.pathname);
  return (
    <HeadMenu
      expandType='popup'
      style={{ marginBottom: 20 }}
      // theme={props.theme}
      value={active}
      onChange={(v) => setActive(v)}
    >
      {renderMenuItems(menu)}
    </HeadMenu>
  );
});

export default memo((props: IMenuProps) => {
  const location = useLocation();
  const globalState = useAppSelector(selectGlobal);
  const bottomText = globalState.collapsed ? globalState.version : `TDesign Starter ${globalState.version}`;

  return (
    <Menu
      width='232px'
      value={location.pathname}
      style={{ flexShrink: 0, height: '100%' }}
      collapsed={globalState.collapsed}
      // theme={props.theme}
      operations={props.showOperation ? <div className={Style.menuTip}>{bottomText}</div> : undefined}
      logo={props.showLogo ? <MenuLogo collapsed={globalState.collapsed} /> : undefined}
    >
      {renderMenuItems(menu)}
    </Menu>
  );
});
