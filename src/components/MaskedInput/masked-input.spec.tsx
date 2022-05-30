import React from 'react';
import { render, screen } from '@testing-library/react';
import { MaskedInput } from '.';

describe('MaskedInput component', () => {
  it('renders correctly', () => {
    render(
      <MaskedInput
        id="masked-input-id"
        label="Masked Input Label"
        type="text"
      />
    );

    const inputEl = screen.getByTestId('masked-input-id');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  it('should show error message when necessary', () => {
    render(
      <MaskedInput
        id="masked-input-id"
        label="Masked Input Label"
        type="text"
        error={{ type: 'required', message: 'Campo obrigatório' }}
      />
    );

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });
});
