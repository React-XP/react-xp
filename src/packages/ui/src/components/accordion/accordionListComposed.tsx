// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';
import { Accordion } from './accordion';
import { AccordionContent } from './accordionContent';
import { AccordionItem } from './accordionItem';
import { AccordionTrigger } from './accordionTrigger';

export interface AccordionListComposedProps {
  items: { title: React.ReactNode; content: React.ReactNode }[];
}

export const AccordionListComposed = (props: AccordionListComposedProps) => {
  const { items } = props;
  const isSingle = items.length > 1;

  return (
    <Accordion type={isSingle ? 'single' : 'multiple'} collapsible>
      {items.map((item, index) => (
        <AccordionItem
          value={`item-${index}`}
          key={`item-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
