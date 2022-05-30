import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input component', () => {
  it('renders correctly', () => {
    render(<Input id="input-id" label="Input Label" type="text" />);

    const inputEl = screen.getByTestId('input-id');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  it('should show error message when necessary', () => {
    render(
      <Input
        id="input-id"
        label="Input Label"
        type="text"
        error={{ type: 'required', message: 'Campo obrigatório' }}
      />
    );

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });
});
