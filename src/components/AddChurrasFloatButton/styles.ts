import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;

    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.15);
    cursor: pointer;
    z-index: 10;
    transition: all 0.15s;

    &:hover {
      filter: brightness(0.85);

      > span {
        opacity: 1;
        visibility: visible;
        background: ${theme.colors.primary};
      }
    }
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font: 600 18px ${theme.fonts.texts};
    white-space: nowrap;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    padding: 1rem;
    border-radius: 20rem;

    left: calc(100% + 0.25rem);
    transition: all 0.3s;
    z-index: 10;
  `}
`;
