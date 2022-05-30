import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '.';

describe('ErrorMessage component', () => {
  it('renders correctly', () => {
    render(<ErrorMessage id="error-message-id">Mensagem de erro</ErrorMessage>);

    expect(screen.getByText('Mensagem de erro')).toBeInTheDocument();
  });
});
