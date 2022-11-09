import React from 'react';
import { classNamePrefix } from './constants';
import { IMainContentProps } from './types';

const MainContent = (props: React.PropsWithChildren<IMainContentProps>) => {
  return (
    <div
      className={`${classNamePrefix}-layout-content ${classNamePrefix}-layout-main-content`}
    >
      {props.children}
    </div>
  );
};

export default MainContent;
