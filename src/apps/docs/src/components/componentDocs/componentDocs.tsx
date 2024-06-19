// import React from 'react';

import { Accordion } from '@react-xp/ui/accordion';

interface ComponentDocsProps {
  title: string;
  children: React.ReactNode;
}

export const ComponentDocs = ({ children, title }: ComponentDocsProps) => {
  return (
    <Accordion.ListComposed
      items={[
        {
          title,
          content: children,
        },
      ]}
    />
  );
};
