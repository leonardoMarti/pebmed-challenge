import styled from 'styled-components';

interface ContainerProps {
  mb?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ mb }) => `${mb}rem`};
`;
