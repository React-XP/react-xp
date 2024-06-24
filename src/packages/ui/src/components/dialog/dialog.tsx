import type React from 'react';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  Dialog as DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from './primitives/dialog';

interface DialogProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Dialog = ({ title, description, trigger }: DialogProps) => {
  return (
    <DialogPrimitive>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </DialogPrimitive>
  );
};
