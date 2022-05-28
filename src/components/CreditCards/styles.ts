import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  margin-bottom: 1.875rem;

  .cardsWrapper {
    display: flex;
    margin-bottom: 0.875rem;
    gap: 13px;
  }

  .paymentsForWrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .paymentsFor {
    color: ${COLORS.GREY50};
    font-size: 0.625rem;
    line-height: 0.8125rem;
    margin-right: 7px;
  }
`;
