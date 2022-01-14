import styled, { css } from 'styled-components';

interface ContainerProps {
  error?: boolean;
  maxWidth?: string;
}

export const Container = styled.fieldset<ContainerProps>`
  ${({ theme, error, maxWidth }) => css`
    ${maxWidth && `max-width: ${maxWidth}`};

    display: flex;
    align-items: center;
    position: relative;

    height: 100%;
    font-family: ${theme.fonts.texts};
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.black};
    border-radius: 5px;
    padding: 1rem 0.5rem;

    transition: all 0.15s linear;

    &:focus-within {
      border-color: ${theme.colors.primary};
    }

    ${error &&
    css`
      margin-bottom: 0.75rem;
      border-color: ${theme.colors.red};

      label {
        color: ${theme.colors.red};
      }

      textarea {
        color: ${theme.colors.red};
      }
    `};
  `}
`;

export const TextareaStyled = styled.textarea`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    resize: vertical;
    padding: 0 0.5rem;

    font-size: 1rem;
    line-height: 1rem;
    font-family: ${theme.fonts.texts};

    border: 0;
    border-radius: 5px;
    outline: none;
    background: none;
    z-index: 1;

    & ~ legend {
      margin-left: 0.5rem;
      padding: 0 0.25rem;

      font: 400 0.875rem ${theme.fonts.texts};
      line-height: 100%

      position: relative;
      transition: width 0.15s linear;

      &.required::after {
        content: ' *';
        font: 400 1rem ${theme.fonts.texts};
        line-height: 1rem;
        color: ${theme.colors.red};
      }
    }
  `}
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: 0.875rem;
    line-height: 0.875rem;
    font-weight: 400;
    position: absolute;
    bottom: -1.25rem;
    opacity: 0;
    left: 0;
    visibility: hidden;
    transition: all 0.15s linear;

    &.show {
      visibility: visible;
      opacity: 1;
    }
  `}
`;
