import React from 'react';
import PageBox from 'components/PageBox';
import Base from './components/Base';
import ProgressCom from './components/Progress';
import Product from './components/Product';
import Detail from './components/Detail';

export default React.memo(() => {
  return (
    <PageBox withColor={false}>
      <Base />
      <ProgressCom />
      <Product />
      <Detail />
    </PageBox>
  );
});
