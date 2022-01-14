import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.15s;
  padding-bottom: 2rem;
`;

export const ContentContainer = styled.div<{ type: 'flex' | 'grid' }>`
  /*  */
  ${({ type }) =>
    type === 'flex'
      ? css`
          display: flex;
          flex-wrap: wrap;
        `
      : css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}

  margin: 0 auto;
  gap: 1.5rem;
  max-width: 60rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 1;
`;
