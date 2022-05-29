import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../constants/media-queries';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 2.375rem 4.25rem 0 4.25rem;
  margin-bottom: 4.5rem;

  ${MEDIA_QUERIES.smDown} {
    margin-bottom: 1rem;
    padding: 1.25rem;
  }

  .imageWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-right: 8px;
  }
`;
