import type { TComponentBaseProps } from '../../types/components';

type TMenuItem = TComponentBaseProps & {
  key?: string;
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
