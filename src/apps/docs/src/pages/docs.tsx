import { ComponentDocs } from '@/components';
import { Accordion } from '@react-xp/ui/accordion';
import { Box } from '@react-xp/ui/box';
import { Button } from '@react-xp/ui/button';
import { Card } from '@react-xp/ui/card';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const docsPage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/docs',
  component: function Index() {
    return (
      <Box>
        <ComponentDocs
          title="Accordion"
          examples={[
            {
              title: 'Simple accordion',
              preview: (
                <Accordion
                  items={[
                    {
                      title: 'Accordion example 1',
                      content: <Box>Accordion example 1</Box>,
                    },
                    {
                      title: 'Accordion example 2',
                      content: <Box>Accordion example 2</Box>,
                    },
                  ]}
                />
              ),
            },
          ]}
        />

        <ComponentDocs
          title="Box"
          examples={[
            {
              title: 'Simple box',
              preview: <Box>box example</Box>,
            },
            {
              title: 'Simple box horizontal',
              preview: (
                <Box
                  dir="horizontal"
                  className="justify-between rounded-md bg-slate-400"
                >
                  <Box>Box 1</Box>
                  <Box>Box 2</Box>
                </Box>
              ),
              code: `
<Box
    dir="horizontal"
    className="justify-between rounded-md bg-slate-400"
  >
  <Box>Box 1</Box>
  <Box>Box 2</Box>
</Box>`,
            },
          ]}
        />

        <ComponentDocs
          title="Button"
          examples={[
            {
              title: 'Simple button',
              preview: (
                <Button onClick={() => alert('Button clicked!')}>
                  Simple button
                </Button>
              ),
              code: `<Button onClick={() => alert('Button clicked!')}>Simple button</Button>`,
            },
          ]}
        />

        <ComponentDocs
          title="Card"
          examples={[
            {
              title: 'Simple card',
              preview: <Card title="Simple card" content="Simple card" />,
              code: `<Card title="Simple card" content="Simple card" />`,
            },
          ]}
        />
      </Box>
    );
  },
});
