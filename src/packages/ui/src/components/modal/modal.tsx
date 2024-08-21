import { type VariantProps, cn, cva } from '@react-xp/core/tailwind';
import { useIsVisible } from '@react-xp/core/visibility';
import type React from 'react';
import type { TComponentBaseProps } from '../../types/components';
import { Box } from '../box';
import { Button } from '../button';
import { useModal } from './modal.hook';

const modalVariants = cva('modal', {
  variants: {
    variant: {
      default: 'modal modal-middle',
      bottom: 'modal modal-bottom',
      top: 'modal modal-top',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TModalButton = {
  children: string;
  onClick: () => void;
};

type TModalProps = VariantProps<typeof modalVariants> &
  TComponentBaseProps & {
    buttons?: Array<TModalButton>;
    name: `modals.${string}`;
    title: React.ReactNode;
  };

export const Modal = ({
  buttons,
  children,
  className,
  name,
  title,
  variant,
}: TModalProps) => {
  const isVisible = useIsVisible(name);
  const { close } = useModal(name);

  return (
    <dialog
      className={cn(
        modalVariants({ variant, className }),
        isVisible ? 'modal-open' : undefined,
      )}
    >
      <div className="modal-box">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={close}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{title}</h3>

        <Box className="py-2">{children}</Box>

        <div className="modal-action">
          {buttons?.map((button, index) => (
            <Button
              key={`modal-button-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                index
              }`}
              onClick={button.onClick}
            >
              {children}
            </Button>
          ))}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={close}>
          close
        </button>
      </form>
    </dialog>
  );
};
