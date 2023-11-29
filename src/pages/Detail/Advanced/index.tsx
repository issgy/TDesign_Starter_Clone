import React from 'react';
import Base from './components/Base';
import ProgressCom from './components/Progress';
import Product from './components/Product';
import Detail from './components/Detail';

export default React.memo(() => (
  <div>
    <Base />
    <ProgressCom />
    <Product />
    <Detail />
  </div>
));
