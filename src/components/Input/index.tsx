import React, { forwardRef } from 'react';
import { Container, SInput } from './styles';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

const InputBase = (
  { name, label, placeholder, type = 'text' }: InputProps,
  ref
) => {
  return (
    <Container>
      <span className="label">{label}</span>
      <SInput
        id={`input-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    </Container>
  );
};

export const Input = forwardRef(InputBase);
