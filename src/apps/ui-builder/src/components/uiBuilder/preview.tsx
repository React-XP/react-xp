import type { TComponentBuilder } from '@/types';
import { useConsole } from '@react-xp/core/console';
import { Box } from '@react-xp/ui/box';
import { Divider } from '@react-xp/ui/divider';
import { Modal, useModal } from '@react-xp/ui/modal';
import { Typography } from '@react-xp/ui/typography';
import { Pencil } from 'lucide-react';
import React from 'react';
import { useDrop } from 'react-dnd';

interface ComponentOptionsProps {
  children: React.ReactNode;
}

const ComponentOptions = ({ children }: ComponentOptionsProps) => {
  const { open } = useModal('modals.preview');

  return (
    <Box className="h-min hover:font-bold hover:border-2 hover:p-2">
      {children}

      <Divider />

      <Pencil
        color="#fff"
        size={24}
        onClick={open}
        className="cursor-pointer"
      />
    </Box>
  );
};

export const Preview = () => {
  const console = useConsole({ module: 'Preview' });
  const { open } = useModal('modals.preview');
  const items = React.useRef<TComponentBuilder[]>([]);
  const [componentsPreview, setComponentsPreview] = React.useState<
    JSX.Element[]
  >([]);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'test-drag',
      canDrop: () => true,
      drop: (item: TComponentBuilder) => {
        open();

        const props = item.props.reduce(
          (acc, cur) => ({
            // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
            ...acc,
            [cur.name]: cur.value || cur.defaultValue,
          }),
          {},
        );

        console.log('dropped', { item, props });

        items.current.push(item);
        setComponentsPreview((prev) => [
          ...prev,
          <ComponentOptions key={item.name}>
            {React.createElement(
              item.component,
              props,
              item.hasChildren ? 'Preview' : undefined,
            )}
          </ComponentOptions>,
        ]);
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
        <Modal name="modals.preview" title="Preview">
          {items.current.length &&
            items.current[items.current.length - 1].props.map((prop) => {
              if (prop.name === 'children') return null;

              return (
                <div key={prop.name}>
                  <label>{prop.name}</label>
                  <input type="text" defaultValue={prop.value} />
                </div>
              );
            })}
        </Modal>

        {componentsPreview}
      </Box>
    </Box>
  );
};
