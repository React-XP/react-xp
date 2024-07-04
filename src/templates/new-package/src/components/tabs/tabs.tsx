import {
  TabsContent,
  TabsList,
  Tabs as TabsPrimitive,
  TabsTrigger,
} from './primitives/tabs';

interface TabItem {
  key: string;
  title: React.ReactNode;
  value: string;
  content?: React.ReactNode;
  onClick?: () => void;
}

interface TabsProps<TItem extends TabItem, TValue extends string> {
  defaultValue?: TValue;
  items: readonly TItem[];
}

export const Tabs = /*<
  TItem extends TabItem,
  TItems extends TItem[],
  TValue extends TItems[number]['value']
>*/ ({ defaultValue, items }: TabsProps<TabItem, string>) => {
  if (items.length === 0) {
    return null;
  }

  defaultValue = defaultValue || items[0].value;

  return (
    <TabsPrimitive defaultValue={defaultValue}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger value={item.value} key={item.key}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent value={item.value} key={item.key}>
          {item.content}
        </TabsContent>
      ))}
    </TabsPrimitive>
  );
};
