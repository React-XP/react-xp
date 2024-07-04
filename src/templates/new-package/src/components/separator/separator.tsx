import React from 'react';
import { Separator as SeparatorPrimitive } from './primitives/separator';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator = ({ orientation = 'horizontal' }: SeparatorProps) => {
  return <SeparatorPrimitive orientation={orientation} />;
};
