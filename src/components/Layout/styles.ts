import styled, { css } from 'styled-components';

interface WrapperContainerProps {
  bgColor?: string;
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.primary};
    transition: all 0.15s;
  `}
`;

export const WrapperContainer = styled.div<WrapperContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.primary};
  flex: 1;
  z-index: 1;
  padding-bottom: 2rem;
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    max-width: ${theme.sizes.pageMaxWidth}rem;
    margin: -4.5rem auto 0;
  `}
`;
