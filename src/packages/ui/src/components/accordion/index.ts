import { Accordion as AccordionBase } from './accordion';
import { AccordionContent } from './accordionContent';
import { AccordionItem } from './accordionItem';
import { AccordionListComposed } from './accordionListComposed';
import { AccordionTrigger } from './accordionTrigger';

export const Accordion = Object.assign(AccordionBase, {
  Content: AccordionContent,
  Item: AccordionItem,
  ListComposed: AccordionListComposed,
  Trigger: AccordionTrigger,
});
