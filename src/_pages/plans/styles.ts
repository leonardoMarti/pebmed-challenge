import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEDIA_QUERIES } from '../../constants/media-queries';

export const Container = styled.main`
  margin: 0 auto 4rem auto;
  max-width: 870px;

  .form {
    display: flex;
    justify-content: space-between;

    ${MEDIA_QUERIES.smDown} {
      justify-content: unset;
      flex-direction: column;
      padding: 0 1.25rem;
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  margin-left: 15px;

  ${MEDIA_QUERIES.smDown} {
    max-width: unset;
    margin-left: unset;
  }

  .titleWrapper {
    ${MEDIA_QUERIES.smDown} {
      text-align: center;
    }
  }

  .subTitle {
    font-size: 1rem;
    line-height: 1.3125rem;
    margin-bottom: 1.875rem;
  }

  .inputWrapper {
    display: flex;
    gap: 3.125rem;

    ${MEDIA_QUERIES.smDown} {
      flex-direction: column;
      gap: unset;
    }
  }

  .creditCardWrapper {
    display: flex;
    justify-content: center;
  }

  .buttonLabel {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${COLORS.WHITE100};
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  width: 100%;
  margin-right: 15px;

  ${MEDIA_QUERIES.smDown} {
    max-width: unset;
    margin-right: unset;
  }

  .titleWrapper {
    margin-bottom: 1.875rem;

    ${MEDIA_QUERIES.smDown} {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .email {
    border: 1px solid ${COLORS.GREY100};
    border-radius: 12px;
    padding: 4px 9px 4px 12px;
    font-size: 0.75rem;
    line-height: 1rem;
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

    ${MEDIA_QUERIES.smDown} {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }

  .buttonLabel {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${COLORS.WHITE100};
  }
`;
