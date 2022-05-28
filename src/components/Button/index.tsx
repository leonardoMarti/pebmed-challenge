import React from 'react';
import { SButton } from './styles';

interface ButtonProps {
  name: string;
  label: string;
  type: 'submit' | 'button' | 'reset';
}

export function Button({ label, type, name }: ButtonProps) {
  return (
    <SButton id={`button-${name}`} type={type}>
      {label}
    </SButton>
  );
}
