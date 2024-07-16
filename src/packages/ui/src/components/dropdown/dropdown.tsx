// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

type TDropdownItem = {
  children: React.ReactNode;
  onClick: () => void;
};

type TDropdownProps = {
  items?: TDropdownItem[];
  children?: React.ReactNode;
};

export const Dropdown = ({ children, items }: TDropdownProps) => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Click
      </div>
      {children ? (
        children
      ) : (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {items?.map((item, index) => (
            <li
              key={`dropdown-menu-item-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
            >
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a onClick={item.onClick}>{item.children}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';
