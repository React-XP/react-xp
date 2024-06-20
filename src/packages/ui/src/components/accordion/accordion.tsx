// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';
import { Accordion as AccordionPrimitive } from './primitives/accordion';
import { AccordionContent } from './primitives/accordionContent';
import { AccordionItem } from './primitives/accordionItem';
import { AccordionTrigger } from './primitives/accordionTrigger';

export interface AccordionProps {
  items: { title: React.ReactNode; content: React.ReactNode }[];
}

export const Accordion = (props: AccordionProps) => {
  const { items } = props;
  const isSingle = items.length > 1;

  return (
    <AccordionPrimitive type={isSingle ? 'single' : 'multiple'} collapsible>
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
    </AccordionPrimitive>
  );
};
