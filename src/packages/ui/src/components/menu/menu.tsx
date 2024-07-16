import type React from 'react';

type TMenuItem = {
  key?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

type TMenuProps = {
  items: Array<TMenuItem>;
};

export const Menu = ({ items }: TMenuProps) => {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      {items.map((item, index) => (
        <li key={item.key}>
          <a href={item.href} onClick={item.onClick}>
            {item.children}
          </a>
        </li>
      ))}
    </ul>
  );
};
