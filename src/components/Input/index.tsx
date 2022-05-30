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
  minLength?: number;
  error?: FieldError;
  register?: object;
}

export const Input = ({
  id,
  label,
  placeholder,
  type = 'text',
  maxLength,
  minLength,
  error = null,
  register,
}: InputProps) => {
  return (
    <Container>
      <span className="label">{label}</span>
      <SInput
        data-testid={id}
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        error={!!error}
        {...register}
      />
      {error?.type === 'required' && (
        <ErrorMessage id={`error-message-${id}`}>{error.message}</ErrorMessage>
      )}
      {error?.type === 'minLength' && (
        <ErrorMessage
          id={`error-message-${id}`}
        >{`Campo aceita no mínimo ${minLength} caracteres`}</ErrorMessage>
      )}
    </Container>
  );
};
