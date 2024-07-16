import { type VariantProps, cn, cva } from '@react-xp/core/tailwind';
import React from 'react';
import type { TComponentBaseProps } from '../../types/components';

const tabsVariants = cva('tabs', {
  variants: {
    size: {
      default: '',
      xs: 'tabs-xs',
      sm: 'tabs-sm',
      md: 'tabs-md',
      lg: 'tabs-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
interface TabItem {
  label: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  key?: string;
  value: string;
  onClick?: () => void;
}

interface TabsProps<TItem extends TabItem, TValue extends string>
  extends VariantProps<typeof tabsVariants>,
    TComponentBaseProps {
  defaultValue?: TValue;
  items: readonly TItem[];
  render?: (selectedTabItem: TabItem) => React.ReactNode;
}

export const Tabs = /*<
  TItem extends TabItem,
  TItems extends TItem[],
  TValue extends TItems[number]['value']
>*/ ({
  className,
  defaultValue,
  items,
  render,
  size,
}: TabsProps<TabItem, string>) => {
  const tabIndex = items.findIndex(
    (item) => item.value === defaultValue && item.disabled !== true,
  );

  const [selectedTabIndex, setSelectedTabIndex] = React.useState(
    tabIndex || -1,
  );

  const handleOnClick = (item: TabItem, index: number) => {
    setSelectedTabIndex(index);

    item.onClick?.();
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      role="tablist"
      className={cn('tabs tabs-boxed', tabsVariants({ size, className }))}
    >
      {items.map((item, index) => (
        <a
          key={item.key}
          role="tab"
          className={cn(
            'tab',
            index === selectedTabIndex ? 'tab-active' : undefined,
            item.disabled ? 'tab-disabled' : undefined,
          )}
          href={item.href}
          onClick={() => handleOnClick(item, index)}
        >
          {item.label}
        </a>
      ))}

      {selectedTabIndex >= 0 && (
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {items[selectedTabIndex].children ||
            render?.(items[selectedTabIndex])}
        </div>
      )}
    </div>
  );
};
