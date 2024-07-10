import { cn } from '@react-xp/core/tailwind';
import type React from 'react';
import type { TComponentBaseProps } from '../../types/components';
import { Button } from '../button';

interface CardProps extends TComponentBaseProps {
  button?: {
    children: string;
    onClick: () => void;
  };
  description?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  title: React.ReactNode;
}

export const Card = ({
  button,
  children,
  className,
  description,
  image,
  title,
}: CardProps) => {
  return (
    <div className={cn('card bg-base-100 w-96 shadow-xl', className)}>
      {image && (
        <figure>
          <img src={image.src} alt={image.alt} />
        </figure>
      )}
      <div className="card-body">
        {children ? (
          children
        ) : (
          <>
            <h2 className="card-title">{title}</h2>
            {description && <p>{description}</p>}
            {button && (
              <div className="card-actions justify-end">
                <Button onClick={button.onClick}>{button.children}</Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

Card.displayName = 'Card';
