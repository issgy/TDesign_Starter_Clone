import React from 'react';
import { Button } from 'tdesign-react';

import networkErrorIcon from 'assets/svg/assets-result-browser-incompatible.svg';
import Style from './index.module.less';

const BrowserIncompatible = () => (
  <div className={Style.Content}>
    <img src={networkErrorIcon} className={Style.icon} />
    <div className={Style.title}>浏览器版本过低</div>
    <div className={Style.description}>抱歉，您正在使用的浏览器版本过低，无法打开当前网页。</div>

    <div className={Style.resultContainer}>
      <Button>返回首页</Button>
      <div className={Style.recommendContainer}>
        <div>TDesign Starter 推荐以下主流浏览器</div>
        <div className={Style.recommendBrowser}>
          <div>
            <img src='https://tdesign.gtimg.com/starter/result-page/chorme.png' alt='Chrome' />
            <div>Chrome</div>
          </div>
          <div>
            <img src='https://tdesign.gtimg.com/starter/result-page/qq-browser.png' alt='QQ Browser' />
            <div>QQ Browser</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(BrowserIncompatible);
