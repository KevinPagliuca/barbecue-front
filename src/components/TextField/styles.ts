import InputMask from 'react-input-mask';

import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface InputPlaceholderProps {
  required?: boolean;
}

interface ContainerProps {
  error?: boolean;
  maxWidth?: string;
  readOnly?: boolean;
  errorHeight?: number;
}

const InputStyles = css`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    min-height: 2.75rem;
    max-height: 2.75rem;
    padding: 0.5rem 1rem;

    font-size: 1rem;
    line-height: 1rem;
    font-family: ${theme.fonts.texts};

    border: 0;
    border-radius: 5px;
    outline: none;
    background: none;
    color: inherit;

    z-index: 1;

    & ~ legend {
      margin-left: 0.8rem;
      visibility: hidden;
      opacity: 0;
      line-height: 0;
      width: 0;
      font-family: ${theme.fonts.texts};
      font-size: 1rem;
      padding: 0rem;
      font-weight: 400;
      transition: width 0.15s linear;
    }

    &:focus + label {
      top: -0.625rem;
      left: 0.8rem;
      font-size: 0.875rem;
    }

    &:not(:placeholder-shown)&:not(:focus) ~ label {
      top: -0.625rem;
      left: 0.8rem;
      font-size: 0.875rem;
    }

    &:focus ~ legend {
      width: fit-content;
      padding: 0 0.25rem;
      font-size: 0.875rem;

      &.required {
        padding: 0 1rem 0 0.25rem;
      }
    }

    &:not(:placeholder-shown)&:not(:focus) ~ legend {
      width: fit-content;
      padding: 0 0.25rem;
      font-size: 0.875rem;
      &.required {
        padding: 0 1rem 0 0.25rem;
      }
    }
  `}
`;

export const Container = styled.fieldset<ContainerProps>`
  ${({ theme, error, maxWidth, readOnly, errorHeight }) => css`
    ${maxWidth && `max-width: ${maxWidth}`};

    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    height: 100%;
    max-height: 3rem;
    font-family: ${theme.fonts.texts};
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.black};
    color: ${theme.colors.gray};
    border-radius: 5px;

    transition: all 0.15s linear;

    &:focus-within {
      border-color: ${theme.colors.primary};
    }

    ${error &&
    css`
      margin-bottom: ${errorHeight ? `${errorHeight + 4}px` : '0.75rem'};
      border-color: ${theme.colors.red};

      &:focus-within {
        border-color: ${theme.colors.red};
      }

      label {
        color: ${theme.colors.red};
      }

      input {
        color: ${theme.colors.red};
      }
    `};

    ${readOnly &&
    css`
      border-color: ${theme.colors.gray};
      background: ${darken(0.05, theme.colors.white)};

      &:focus-within {
        border-color: ${theme.colors.black};
      }
    `}
  `}
`;

export const InputStyled = styled.input`
  ${InputStyles};
`;
export const InputStyledWithMask = styled(InputMask)`
  ${InputStyles};
`;

export const InputPlaceholder = styled.label<InputPlaceholderProps>`
  ${({ theme, required }) => css`
    position: absolute;
    left: 1rem;
    top: calc(50% - 0.4375rem);
    z-index: 10;

    padding: 0 0.25rem;

    font-family: ${theme.fonts.texts};
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    cursor: text;
    user-select: none;
    overflow: visible;

    transition: all 0.15s linear;

    ${required &&
    css`
      &::after {
        content: ' *';
        font-family: ${theme.fonts.texts};
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 400;
        color: ${theme.colors.red};
      }
    `}
  `}
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: 0.875rem;
    line-height: 0.875rem;
    font-weight: 400;
    /* position: absolute;
    bottom: -1.25rem; */
    width: 100%;
    padding-top: 0.25rem;
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
