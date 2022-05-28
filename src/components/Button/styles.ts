import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  background: ${COLORS.BLUE900};
  border: none;
  border-radius: 25px;
  color: ${COLORS.WHITE100};
  font-size: 0.875rem;
  line-height: 1.125rem;
  width: 100%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;
