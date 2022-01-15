import styled, { css } from 'styled-components';

interface CheckMarkProps {
  checked: boolean;
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    &:hover > div {
      border-color: ${theme.colors.gray};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font: 400 1rem ${theme.fonts.texts};
    margin-left: 1rem;
    cursor: pointer;
    user-select: none;
  `}
`;

export const Checkmark = styled.div<CheckMarkProps>`
  ${({ theme, checked }) => css`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid ${theme.colors.primary};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s;

    svg {
      visibility: hidden;
      opacity: 0;
      transition: all 0.15s;
    }

    ${checked &&
    css`
      background: ${theme.colors.primary};

      svg {
        opacity: 1;
        visibility: visible;
      }
    `}
  `}
`;
