import React, { useState, useRef, useEffect } from 'react';
import { classNamePrefix } from '../../constants';
import DropDownIcon from '../Icons/Dropdown';

import './index.css';

interface IMenuItem {
  key: string;
  title: string;
  onClick?(): void;
}

interface IProps {
  menu: IMenuItem[];
}
const Dropdown = (props: React.PropsWithChildren<IProps>) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const openDropMenu = () => {
    setVisible(true);
    ref.current?.focus();
  };
  const closeDropMenu = () => {
    setVisible(false);
  };
  const handleItemClick = (item: IMenuItem) => {
    ref.current?.blur();
    closeDropMenu();
    item.onClick?.();
  };

  useEffect(() => {
    if (wrapperRef.current) {
      const { height } = wrapperRef.current.getBoundingClientRect();
      if(ref.current) {
        ref.current.style.top = `${height}px`;
      }
    }
  }, [wrapperRef.current, props.children]);

  return (
    <div
      ref={wrapperRef}
      className={`${classNamePrefix}-dropdown inline-flex-wrap ${
        visible ? `${classNamePrefix}-dropdown-open` : ''
      }`}
    >
      <div className="dropdown-trigger inline-flex-wrap" onClick={openDropMenu}>
        {props.children}
        <span className="dropdown-trigger-icon">
          <DropDownIcon />
        </span>
      </div>
      <div
        ref={ref}
        className="dropdown-menu"
        tabIndex={0}
        onBlur={closeDropMenu}
      >
        {props.menu.map((item) => (
          <span key={item.key} onClick={() => handleItemClick(item)}>
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
