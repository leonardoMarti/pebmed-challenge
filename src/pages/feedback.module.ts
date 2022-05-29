import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import { MEDIA_QUERIES } from '../constants/media-queries';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 343px;
  margin: 0 auto;

  .successWrapper {
    margin-bottom: 1.125rem;
  }

  .subTitle {
    width: 194px;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 3.5625rem;
    text-align: center;
    color: ${COLORS.GREY300};
  }

  .buttonWrapper {
    width: 100%;
    text-align: center;

    .subscription {
      display: inline-block;
      font-size: 0.75rem;
      line-height: 0.9375rem;
      font-weight: 700;
      color: ${COLORS.BLUE900};
      margin-bottom: 1.5rem;
    }

    .buttonLabel {
      font-size: 0.75rem;
      line-height: 0.9375rem;
      font-weight: 700;
      color: ${COLORS.WHITE100};
    }
  }
`;

export const PreviewProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 0.9375rem 1.0625rem 1.5rem 1rem;
  margin-bottom: 5.5rem;

  .card {
    display: flex;
    justify-content: space-between;
    background-color: ${COLORS.GREY100};
    border-radius: 15px;
    align-items: center;
    padding: 1rem 1.25rem 1.125rem 1.25rem;
    margin-bottom: 1.1875rem;

    .priceWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .plan {
        line-height: 1.25rem;
        margin-bottom: 0.5rem;
        color: ${COLORS.BLUE900};
      }

      .price {
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: ${COLORS.BLUE900};
      }
    }
  }

  .fieldWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    padding: 0 1.25rem;

    .field {
      display: flex;
      justify-content: space-between;

      .label {
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: ${COLORS.GREY300};
      }

      .value {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;
