import React, { memo } from 'react';

// 使用memo来优化函数组件性能。会在重新渲染之前进行浅比较，如果传入的props没有变化，则不会重新渲染
export default memo(() => <div>this is test</div>);
