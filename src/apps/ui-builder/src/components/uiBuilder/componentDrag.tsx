import type { TComponentBuilder } from '@/types';
import { useConsole } from '@react-xp/core/console';
import { Box } from '@react-xp/ui/box';
import { Typography } from '@react-xp/ui/typography';
import { useDrag } from 'react-dnd';

interface ComponentDragProps {
  component: TComponentBuilder;
}

export const ComponentDrag = ({ component }: ComponentDragProps) => {
  const console = useConsole({ module: 'ComponentDrag' });
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'test-drag',
      item: component,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  );

  console.log('render', { isDragging });

  return (
    <>
      {/* <DragPreviewImage connect={preview} src={knightImage} /> */}
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div>
          <Box
            orientation="vertical"
            className="p-2 m-1 w-full rounded border-dashed border-black border-2 cursor-pointer bg-teal-500"
          >
            <Typography.H4>{component.name}</Typography.H4>

            {component.example}
          </Box>
        </div>
      </div>
    </>
  );
};
