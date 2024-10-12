import { useBreakpoint } from '@react-xp/theme/useBreakpoint';

type TSpacerProps = {
  direction?: 'horizontal' | 'vertical';
  size: number;
};

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

Spacer.displayName = 'Spacer';
