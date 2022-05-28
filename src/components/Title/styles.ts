import styled from 'styled-components';

interface STitleProps {
  mb?: number;
}

export const STitle = styled.h1<STitleProps>`
  font-size: 1.25rem;
  line-height: 1.625rem;
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;
