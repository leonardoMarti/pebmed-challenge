import React from 'react';
import { SButton } from './styles';

interface ButtonProps {
  name: string;
  label: string;
  type: 'submit' | 'button' | 'reset';
  hidden?: boolean;
}

export function Button({ label, type, name, hidden = false }: ButtonProps) {
  return (
    <SButton id={`button-${name}`} type={type} hidden={hidden}>
      {label}
    </SButton>
  );
}
