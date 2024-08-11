import type { TComponentBaseProps } from '../../types/components';

type TAsProps = TComponentBaseProps & {
  as: React.ElementType;
};

export const As = (props: TAsProps) => {
  const { as, children, ...rest } = props;
  const Component = as;

  return <Component {...rest}>{children}</Component>;
};
