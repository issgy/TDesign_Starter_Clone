import React from 'react';

import LogoFullIcon from 'assets/svg/assets-logo-full.svg?component';
import Style from './index.module.less';

export default React.memo(() => (
  <div className={Style.loginHeader}>
    <LogoFullIcon />
  </div>
));
