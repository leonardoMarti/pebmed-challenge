import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreditCards } from '.';

describe('CreditCards component', () => {
  it('renders correctly', () => {
    render(<CreditCards id="credit-cards-id" />);

    expect(screen.queryAllByTestId(/credit-cards-id/i)).toBeTruthy();
  });
});
