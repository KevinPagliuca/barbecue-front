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

export const NoChurras = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem 1.5rem;
    background: ${theme.colors.background};
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.15);
    width: 18.75rem;
    min-height: 8rem;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    transition: all 0.15s;

    > span {
      font: 500 0.875rem ${theme.fonts.titles};
      color: ${theme.colors.titles};
      text-align: center;
      margin-bottom: 1rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.primary};
        color: ${theme.colors.gray};
        border-radius: 50%;
        height: 4rem;
        width: 4rem;
      }

      strong {
        font: 700 0.875rem ${theme.fonts.titles};
        color: ${theme.colors.titles};
        text-align: center;
        margin-top: 1rem;
      }
    }
  `}
`;
