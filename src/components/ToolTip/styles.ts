import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  gap: 0.8125rem;
  position: relative;

  .label {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

interface SToolTipProps {
  show: boolean;
}

export const SToolTip = styled.div<SToolTipProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  font-size: 0.75rem;
  padding: 5px;
  background-color: ${COLORS.BLACK900};
  color: ${COLORS.WHITE100};
  border-radius: 5px;
  top: 20px;
`;
