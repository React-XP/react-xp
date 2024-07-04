// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu as DropdownMenuPrimitive,
  DropdownMenuTrigger,
} from './primitives/dropdownMenu';

type TDropdownMenuItem = {
  key: string;
  title: string;
  onClick: () => void;
};

type TDropdownMenuProps = {
  trigger: React.ReactNode;
  items?: TDropdownMenuItem[];
  children?: React.ReactNode;
};

export const DropdownMenu = ({
  children,
  items,
  trigger,
}: TDropdownMenuProps) => {
  const isTriggerComponent = !(typeof trigger === 'string');

  return (
    <DropdownMenuPrimitive>
      <DropdownMenuTrigger asChild={isTriggerComponent}>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items?.length
          ? items.map((item) => (
              <DropdownMenuItem key={item.key} onClick={item.onClick}>
                {item.title}
              </DropdownMenuItem>
            ))
          : children}
      </DropdownMenuContent>
    </DropdownMenuPrimitive>
  );
};
