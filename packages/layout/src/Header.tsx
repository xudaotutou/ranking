import React from 'react';
import { IHeaderProps } from './types';
import { logoURL, avatarURL, classNamePrefix } from './constants';
import DropDown from './components/Dropdown';

import './Header.css';

const Header = (props: IHeaderProps) => {
  const { logo, title, subTitle, extra, homeURL, ...restProps } = props;
  const renderUserInfo = () => {
    return (
      <>
        <img
          width={30}
          src={extra?.userInfo?.avatar || avatarURL}
          alt="avatar"
        />
        {extra?.userInfo?.phone}
      </>
    );
  };
  const redirectToHomepage = (e: any) => {
    e.preventDefault()
    const url = homeURL || (window.location.origin + '/homepage/')
    window.location.replace(url)
  }
  return (
    <header {...restProps} className={`${classNamePrefix}-header`}>
      <div className="header-content">
        <div className="inline-flex-wrap logo-wrap">
          <img style={{ width: 46 }} src={logo || logoURL} alt="logo" id="logo" />
          <div className="logo-title">
            <a onClick={redirectToHomepage}>
              {title || '开源操作系统社区'}
            </a>
            {subTitle && <span className="logo-subtitle">{subTitle}</span>}
          </div>
        </div>
        <div className="inline-flex-wrap extra-wrap">
          {extra?.customRender && (
            <span className="inline-flex-wrap extra-wrap-custom">
              {extra.customRender}
            </span>
          )}
          {extra?.userInfo && (
            <>
              {extra.dropMenu ? (
                <DropDown menu={extra.dropMenu}>{renderUserInfo()}</DropDown>
              ) : (
                <span className="inline-flex-wrap">{renderUserInfo()}</span>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
