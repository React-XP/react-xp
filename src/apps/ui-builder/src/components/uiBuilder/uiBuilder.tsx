import type { TComponentBuilder } from '@/types';
import { useConsole } from '@react-xp/core/console';
import { Box } from '@react-xp/ui/box';
import { Divider } from '@react-xp/ui/divider';
import { Typography } from '@react-xp/ui/typography';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ComponentDrag } from './componentDrag';
import { Preview } from './preview';

const checkInside = (
  focusElementRef: React.RefObject<HTMLDivElement>,
  targetElementRef: React.RefObject<HTMLDivElement>,
): boolean => {
  console.log('checkInside', {
    focusElementRef,
    targetElementRef,
  });

  if (focusElementRef.current && targetElementRef.current) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { clientX: x, clientY: y } = e as any;

    // check if x and y are inside the preview block
    const targetElementRect = targetElementRef.current.getBoundingClientRect();

    console.log('checkInside', {
      x,
      y,
      targetElementRect,
      focusElementRef,
      targetElementRef,
    });

    if (
      x >= targetElementRect.left &&
      x <= targetElementRect.right &&
      y >= targetElementRect.top &&
      y <= targetElementRect.bottom
    ) {
      console.log('Inside', { x, y });

      return true;
    }
  }

  console.log('Outside');

  return false;
};

const components: Array<TComponentBuilder> = [
  {
    name: 'Box',
    description: 'A box component',
    props: [
      {
        name: 'orientation',
        type: 'string',
        description: 'The orientation of the box',
      },
      {
        name: 'className',
        type: 'string',
        description: 'The class name of the box',
      },
    ],
    component: Box,
    example: <Box key="box">Preview</Box>,
  },
  {
    name: 'Typography H1',
    description: 'A typography component',
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        description: 'The children of the typography',
      },
    ],
    component: Typography.H1,
    example: <Typography.H1 key="typography-h1">Preview</Typography.H1>,
  },
];

export const UiBuilder = () => {
  const console = useConsole({ module: 'UiBuilder' });
  const previewBlockRef = React.useRef<HTMLDivElement>(null);
  const [componentsPreview, setComponentsPreview] = React.useState<
    Array<React.ReactNode>
  >([]);

  // const handleOnStop = React.useCallback(
  //   (component: TComponentBuilder) =>
  //     (e: DraggableEvent, data: DraggableData) => {
  //       console.log('handleOnStop', { e, data });

  //       if (checkInside(previewBlockRef, previewBlockRef)) {
  //         setComponentsPreview((prev) => [
  //           ...prev,
  //           React.createElement(
  //             component.component,
  //             {
  //               key: `${component.name}-${prev.length}`,
  //             },
  //             component.example
  //           ),
  //         ]);
  //       }
  //     },
  //   [console.log]
  // );

  console.log('render', { components, componentsPreview });

  return (
    <DndProvider backend={HTML5Backend}>
      <Box className="h-full">
        {/* Components block */}
        <Box
          orientation="vertical"
          className="border-solid border-black border-2 p-2 w-2/6"
        >
          <Box orientation="vertical" className="w-full">
            <Typography.H2>Components</Typography.H2>

            <Divider />

            <Box className="h-2" />

            {components.map((component, index) => {
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              return <ComponentDrag component={component} key={index} />;
            })}
          </Box>
        </Box>

        {/* Preview block */}
        <Preview />

        {/* Code block */}
        <Box
          orientation="vertical"
          className="border-solid border-black border-2 p-2 w-2/6"
        >
          <Box orientation="vertical" className="w-full">
            <Typography.H2>Code</Typography.H2>

            <Divider />

            <Box className="h-2" />

            <code>{JSON.stringify({})}</code>
          </Box>
        </Box>
      </Box>
    </DndProvider>
  );
};
