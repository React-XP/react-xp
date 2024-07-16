import { cn } from '@react-xp/core/tailwind';
import type React from 'react';
import { Button } from '../button';

type TDialogButton = {
  children: string;
  onClick: () => void;
};

interface DialogProps {
  buttons?: Array<TDialogButton>;
  children: React.ReactNode;
  title: React.ReactNode;
}

export const Modal = ({ buttons, children, title }: DialogProps) => {
  const isOpen = false;

  return (
    <dialog
      className={cn(
        'modal modal-bottom sm:modal-middle',
        isOpen ? 'modal-open' : undefined,
      )}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
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
    </dialog>
  );
};
