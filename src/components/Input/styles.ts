import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

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

export const SInput = styled.input`
  background: ${COLORS.WHITE100};
  border: none;
  border-bottom: 1px solid ${COLORS.GREY100};
  outline: 0;
  padding-bottom: 0.625rem;
  font-size: 1rem;

  ::placeholder {
    color: ${COLORS.GRER300};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${COLORS.GRER300};
  }

  ::-ms-input-placeholder {
    color: ${COLORS.GRER300};
  }
`;
