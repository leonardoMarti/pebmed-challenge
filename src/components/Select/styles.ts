import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

interface ContainerProps {
  mb?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ mb }) => `${mb}rem`};

  .label {
    color: ${COLORS.GREY500};
    font-size: 0.75rem;
    line-height: 1rem;
    margin-bottom: 0.25rem;
  }

  .select {
    border: none;
    border-bottom: 1px solid ${COLORS.GREY100};
    outline: 0;
    background-color: ${COLORS.WHITE100};
    padding-bottom: 0.625rem;
    font-size: 1rem;
  }
`;
