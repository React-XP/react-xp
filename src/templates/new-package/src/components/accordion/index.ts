import { Accordion as AccordionBase } from './accordion';
import { Accordion as AccordionPrimitive } from './primitives/accordion';
import { AccordionContent } from './primitives/accordionContent';
import { AccordionItem } from './primitives/accordionItem';
import { AccordionTrigger } from './primitives/accordionTrigger';

export const Accordion = Object.assign(AccordionBase, {
  Primitives: {
    Accordion: AccordionPrimitive,
    Content: AccordionContent,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
  },
});
