import React, { useEffect, useState } from 'react';
import { ILayoutProps } from './types';
import { classNamePrefix } from './constants';
import Header from './Header';
import MainContent from './MainContent';

import './index.css';

export { Header, MainContent };

const Layout = (props: React.PropsWithChildren<ILayoutProps>) => {
  const { headerProps, className: cln, withLoad, children, ...restProps } = props;
  const [loaded, setLoaded] = useState(false);

  let className = `${classNamePrefix}-layout`;
  if (cln) {
    className += ` ${cln}`;
  }

  const handleLoaded = () => {
    setLoaded(true);
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', handleLoaded, false);
    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoaded);
    };
  }, []);

  return (
    <>
      <div {...restProps} className={className}>
        <Header {...headerProps} />
        <main>{children}</main>
      </div>
      {withLoad && !loaded && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(256, 256, 256, 0.94)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 13,
            color: '#888'
          }}
          className="loading-mask"
        >
          加载中...
        </div>
      )}
    </>
  );
};

export default Layout;
