import React from 'react';
import { STitle } from './styles';

interface TitleProps {
  label: string;
  color?: string;
  mb?: number;
}

export function Title({ label, color, mb }: TitleProps) {
  return (
    <STitle color={color} mb={mb}>
      {label}
    </STitle>
  );
}
