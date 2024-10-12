// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

type TAccordionProps = {
  items: {
    title: React.ReactNode;
    content: React.ReactNode;
    checked?: boolean;
  }[];
};

export const Accordion = (props: TAccordionProps) => {
  const { items } = props;

  return (
    <>
      {items.map((item, index) => (
        <div
          key={`accordion-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
          className="collapse bg-base-200"
        >
          <input
            type="radio"
            name="my-accordion-1"
            defaultChecked={item.checked}
          />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <div className="collapse-content">{item.content}</div>
        </div>
      ))}
    </>
  );
};

Accordion.displayName = 'Accordion';
