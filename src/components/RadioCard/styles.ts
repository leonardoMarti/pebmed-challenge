import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border: 1px solid ${COLORS.BLUE900};
  border-radius: 15px;

  .content {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.125rem;
      color: ${COLORS.BLUE900};
      margin-bottom: 0.25rem;
    }

    .priceWrapper {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 0.25rem;
    }

    .price {
      font-size: 0.75rem;
      line-height: 1rem;
      color: ${COLORS.BLUE900};
    }

    .discount {
      height: 16px;
      display: flex;
      align-items: center;
      background-color: ${COLORS.ORANGE900};
      border-radius: 9px;
      font-size: 0.625rem;
      line-height: 0.8125rem;
      color: ${COLORS.WHITE100};
      padding: 4px 5px 3px 5px;
    }

    .installments {
      color: ${COLORS.ORANGE900};
      font-size: 0.625rem;
      line-height: 0.8125rem;
    }
  }

  .radio {
    margin-left: 1rem;
  }
`;
