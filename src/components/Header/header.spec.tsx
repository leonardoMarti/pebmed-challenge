import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        back: jest.fn(),
      };
    },
  };
});

describe('Header component', () => {
  render(<Header />);

  it('renders correctly', () => {
    expect(screen.queryAllByTestId(/go-back-button/i)).toBeTruthy();
  });
});
