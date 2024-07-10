// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

type TDropdownMenuItem = {
  title: string;
  onClick: () => void;
};

type TDropdownMenuProps = {
  items?: TDropdownMenuItem[];
  children?: React.ReactNode;
};

export const DropdownMenu = ({ children, items }: TDropdownMenuProps) => {
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
              <a onClick={item.onClick}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownMenu.displayName = 'DropdownMenu';
