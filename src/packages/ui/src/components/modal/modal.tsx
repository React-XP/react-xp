import type React from 'react';
import { Button } from '../button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  Dialog as DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from '../dialog/primitives/dialog';

type TDialogButton = {
  label: string;
  onClick: () => void;
  render?: () => React.ReactNode;
};

interface DialogProps {
  buttons?: Array<TDialogButton>;
  children: React.ReactNode;
  subTitle?: React.ReactNode;
  title: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Modal = ({
  buttons,
  children,
  subTitle,
  title,
  trigger,
}: DialogProps) => {
  return (
    <DialogPrimitive modal open>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {subTitle && <DialogDescription>{subTitle}</DialogDescription>}
        </DialogHeader>
        {children}
        {buttons?.length && (
          <DialogFooter>
            {buttons.map(({ label, onClick, render }) => (
              <>
                {render ? (
                  render()
                ) : (
                  <Button key={label} onClick={onClick}>
                    label
                  </Button>
                )}
              </>
            ))}
          </DialogFooter>
        )}
      </DialogContent>
    </DialogPrimitive>
  );
};
