'use client';
import * as ToastPrimitives from '@radix-ui/react-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './toast.component';
import { useToast } from './toast.hook';

const ImportedToastProvider = ToastPrimitives.ToastProvider;

type ToastProviderProps = React.PropsWithChildren;

export function ToastProvider({ children }: ToastProviderProps) {
  const { toasts } = useToast();

  return (
    <ImportedToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
      {children}
    </ImportedToastProvider>
  );
}
