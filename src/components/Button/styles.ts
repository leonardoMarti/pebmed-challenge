import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const SButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  background: ${COLORS.BLUE900};
  border: none;
  border-radius: 25px;
  width: 100%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;
