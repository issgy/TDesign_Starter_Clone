import React from 'react';
import { Button } from 'tdesign-react';
import { LogoGithubIcon, HelpCircleIcon, SettingIcon } from 'tdesign-icons-react';
import { toggleSetting } from 'modules/global';
import { useAppDispatch } from 'modules/store';

import LogoFullIcon from 'assets/svg/assets-logo-full.svg?component';
import Style from './index.module.less';

export default React.memo(() => {
  const dispatch = useAppDispatch();

  const gotoGitHub = () => {
    window.open('https://github.com/Tencent');
  };

  const gotoHelper = () => {
    window.open('https://tdesign.tencent.com/react/components/overview');
  };
  return (
    <div className={Style.loginHeader}>
      <LogoFullIcon className={Style.logo} />
      <div className={Style.operationContainer}>
        <Button className={Style.operationButton} theme='default' shape='square' variant='text' onClick={gotoGitHub}>
          <LogoGithubIcon className={Style.icon} />
        </Button>
        <Button className={Style.operationButton} theme='default' shape='square' variant='text' onClick={gotoHelper}>
          <HelpCircleIcon className={Style.icon} />
        </Button>
        <Button
          className={Style.operationButton}
          theme='default'
          shape='square'
          variant='text'
          onClick={() => dispatch(toggleSetting())}
        >
          <SettingIcon className={Style.icon} />
        </Button>
      </div>
    </div>
  );
});
