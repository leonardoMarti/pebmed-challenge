import React from 'react';
import { FieldError } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage';
import { Container, SInput } from './styles';

interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  error?: FieldError;
  register: any;
}

export const Input = ({
  id,
  label,
  placeholder,
  type = 'text',
  maxLength,
  error = null,
  register,
}: InputProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 23 ~ error', error);
  return (
    <Container>
      <span className="label">{label}</span>
      <SInput
        id={`input-${id}`}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        error={!!error}
        {...register}
      />
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};
