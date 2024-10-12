import { useBreakpoint } from '@react-xp/theme/useBreakpoint';
import type { TSpacerProps } from './spacer.common';

export const Spacer = ({ direction = 'vertical', size }: TSpacerProps) => {
  const { spacing } = useBreakpoint();

  return (
    <div
      style={{
        flex: 1,
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        margin: spacing * size,
      }}
    />
  );
};
