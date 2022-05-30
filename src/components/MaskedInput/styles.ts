import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import Cleave from 'cleave.js/dist/cleave-react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;

  .label {
    color: ${COLORS.GREY500};
    font-size: 0.75rem;
    line-height: 1rem;
    margin-bottom: 0.25rem;
  }
`;

interface SInputProps {
  error?: boolean;
}

export const SInput = styled(Cleave)<SInputProps>`
  background: ${COLORS.WHITE100};
  font-family: 'DM Sans', sans-serif;
  border: none;
  border-bottom: 1px solid
    ${({ error }) => (error ? COLORS.RED500 : COLORS.GREY100)};
  outline: 0;
  padding-bottom: 0.625rem;
  font-size: 1rem;
  width: 100%;

  ::placeholder {
    color: ${COLORS.GREY300};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${COLORS.GREY300};
  }

  ::-ms-input-placeholder {
    color: ${COLORS.GREY300};
  }
`;
