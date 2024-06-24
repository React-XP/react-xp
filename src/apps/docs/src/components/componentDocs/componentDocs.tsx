import { Accordion } from '@react-xp/ui/accordion';
import { Box } from '@react-xp/ui/box';
import { Tabs } from '@react-xp/ui/tabs';
import { Typography } from '@react-xp/ui/typography';
import { ArrowDownRight } from 'lucide-react';
import CopyToClipboard from 'react-copy-to-clipboard';
// import React from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

interface ComponentDocsExample {
  title: string;
  code?: React.ReactNode;
  preview: React.ReactNode;
}

interface ComponentDocsProps {
  examples: ComponentDocsExample[];
  title: string;
}

export const ComponentDocs = ({ examples, title }: ComponentDocsProps) => {
  return (
    <Accordion
      items={[
        {
          title: <Typography.H3>{title}</Typography.H3>,
          content: (
            <>
              {examples.map((example) => {
                const items = [
                  {
                    key: `${example.title}-preview`,
                    title: 'Preview',
                    value: 'preview',
                    content: example.preview,
                  },
                ];

                if (example.code) {
                  items.push({
                    key: `${example.title}-code`,
                    title: 'Code',
                    value: 'code',
                    content: (
                      <Box>
                        <div className="bg-slate-400 text-white p-4 rounded-md">
                          <div className="flex justify-end items-center mb-4">
                            <CopyToClipboard
                              text={example.code}
                              onCopy={() => alert('Copied!')}
                            >
                              <button
                                id="code"
                                type="button"
                                className="code bg-white hover:bg-gray-700 hover:text-white text-slate-700 px-3 py-1 rounded-md"
                                data-clipboard-target="#code"
                              >
                                Copy
                              </button>
                            </CopyToClipboard>
                          </div>

                          <SyntaxHighlighter
                            language="javascript"
                            style={prism}
                            id="code"
                            wrapLongLines
                          >
                            {example.code}
                          </SyntaxHighlighter>
                        </div>
                      </Box>
                    ),
                  });
                }

                return (
                  <Accordion
                    key={example.title}
                    items={[
                      {
                        title: (
                          <Box dir="horizontal">
                            <ArrowDownRight />
                            {example.title}
                          </Box>
                        ),
                        content:
                          items.length === 1 ? (
                            example.preview
                          ) : (
                            <Tabs items={items} key={example.title} />
                          ),
                      },
                    ]}
                  />
                );
              })}
            </>
          ),
        },
      ]}
    />
  );
};
