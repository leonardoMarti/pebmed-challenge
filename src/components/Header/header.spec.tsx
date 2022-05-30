import React from 'react';
import { render } from '@testing-library/react';
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
  it('renders correctly', () => {
    render(<Header />);
  });
});
