import React, { memo } from 'react';
import { Layout } from 'tdesign-react';
import { Routes, Navigate, Route } from 'react-router-dom';
import { routes } from '../../../configs/router';

const { Content } = Layout;

export default memo(() => {
  const home = routes.find((item) => item.isHome);
  return (
    <Content>
      <Routes>
        {home && <Route path='/' element={<Navigate to={home.path} />} />}
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </Content>
  );
});
