import React from 'react';
import { STitle } from './styles';

interface TitleProps {
  label: string;
  mb?: number;
}

export function Title({ label, mb }: TitleProps) {
  return <STitle mb={mb}>{label}</STitle>;
}
