import type { TComponentBuilder } from '@/types';
import { useConsole } from '@react-xp/core/console';
import { Box } from '@react-xp/ui/box';
import { Modal } from '@react-xp/ui/modal';
import { Typography } from '@react-xp/ui/typography';
import React from 'react';
import { useDrop } from 'react-dnd';

export const Preview = () => {
  const console = useConsole({ module: 'Preview' });
  const [componentsPreview, setComponentsPreview] = React.useState<
    JSX.Element[]
  >([]);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'test-drag',
      canDrop: () => true,
      drop: (item: TComponentBuilder) => {
        console.log('dropped', { item });

        setComponentsPreview((prev) => [...prev, item.example]);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [],
  );

  console.log('render', { isOver, canDrop });

  return (
    <Box
      orientation="vertical"
      className="border-solid border-black border-2 p-2 w-full"
    >
      <Box className="w-full justify-center">
        <Typography.H2>Preview</Typography.H2>
      </Box>

      <Box
        className="border-solid border-black border-2 p-2 w-full h-full"
        ref={drop}
      >
        <Modal title="Preview">Test</Modal>
        {componentsPreview}
      </Box>
    </Box>
  );
};
