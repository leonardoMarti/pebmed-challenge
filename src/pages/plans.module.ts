import styled from 'styled-components';
import { COLORS } from '../constants/colors';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 4rem auto;
  max-width: 870px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;

  .subTitle {
    font-size: 1rem;
    line-height: 1.3125rem;
    margin-bottom: 1.875rem;
  }

  .creditCardWrapper {
    display: flex;
    justify-content: center;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  width: 100%;

  .email {
    border: 1px solid ${COLORS.GREY100};
    border-radius: 12px;
    padding: 4px 9px 4px 12px;
    font-size: 0.75rem;
    line-height: 1rem;
    margin-bottom: 1.875rem;
    width: fit-content;
  }

  .radioCardWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .toolTipWrapper {
    display: flex;
    justify-content: center;
    margin-top: 1.875rem;
  }
`;
