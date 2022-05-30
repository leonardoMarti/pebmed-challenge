import React from 'react';
import { FieldError } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage';
import { Container, SInput } from './styles';

interface InputOptions {
  date?: boolean;
  datePattern?: string[];
  blocks?: number[];
  uppercase?: boolean;
  delimiters?: string | string[];
  creditCard?: boolean;
}

interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  minLength?: number;
  error?: FieldError;
  onChange?: object;
  options?: InputOptions;
}

export const MaskedInput = ({
  id,
  label,
  placeholder,
  type = 'text',
  maxLength,
  minLength,
  error = undefined,
  onChange,
  options,
}: InputProps) => {
  return (
    <Container>
      <span className="label">{label}</span>
      <SInput
        id={id}
        data-testid={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        error={!!error}
        onChange={onChange}
        options={{ ...options }}
      />
      {error?.type === 'required' && (
        <ErrorMessage id={`error-message-${id}`}>{error?.message}</ErrorMessage>
      )}
      {error?.type === 'minLength' && (
        <ErrorMessage
          id={`error-message-${id}`}
        >{`Campo aceita no mínimo ${minLength} caracteres`}</ErrorMessage>
      )}
    </Container>
  );
};
