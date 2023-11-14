import React, { useEffect, useState } from 'react';

interface GridProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  xl?: number;
}

const Grid: React.FC<GridProps> = (props) => {
  const { style, children, xs, sm, xl } = props;
  return <div style={style}>{children}</div>;
};

export default React.memo(Grid);
