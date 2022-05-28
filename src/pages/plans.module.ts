import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto 4rem auto;
  max-width: 870px;
`;

export const FormWrapper = styled.div`
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
