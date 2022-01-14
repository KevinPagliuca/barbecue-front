import Loader from 'react-loader-spinner';

import { theme } from 'global/theme';
import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'red' | 'dark';
  maxWidth?: number;
  maxHeight?: number;
  smallFont?: boolean;
  loading: boolean;
}

const buttonVariants = {
  dark: {
    background: theme.colors.black,
    color: theme.colors.white,
    border: theme.colors.black,
    hover: {
      background: lighten(0.15, theme.colors.black),
    },
  },
  red: {
    background: theme.colors.red,
    color: theme.colors.white,
    border: theme.colors.red,
    hover: {
      background: lighten(0.15, theme.colors.red),
    },
  },
};

export const ContentContainer = styled.button<ButtonProps>`
  ${({ theme, variant, maxWidth, maxHeight, smallFont, loading }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${maxWidth ? `${maxWidth}rem` : '100%'};
    height: ${maxHeight ? `${maxHeight}rem` : '3rem'};

    ${css`
      background: ${buttonVariants[variant].background};
      color: ${buttonVariants[variant].color};
      border: 1px solid ${buttonVariants[variant].border};

      &:hover {
        background: ${buttonVariants[variant].hover.background};
      }
    `};

    font-size: ${smallFont ? '1rem' : '1.125rem'};
    font-family: ${theme.fonts.titles};
    line-height: 1.25rem;
    font-weight: 500;
    border-radius: 6px;
    transition-property: background-color, color, transform;
    transition-duration: 0.3s;

    &:active {
      transform: scale(0.98);
    }

    &:disabled {
      pointer-events: visiblePainted;
      opacity: 0.5;
      cursor: not-allowed;
    }

    ${loading &&
    css`
      svg {
        width: auto;
        height: auto;
      }
    `}
  `}
`;

export const LoaderStyled = styled(Loader)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  svg {
    width: 75%;
    height: 75%;
  }
`;
