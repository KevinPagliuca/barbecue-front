import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  headerHeight?: 'small' | 'normal';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  ${({ headerHeight }) => css`
    min-height: ${headerHeight === 'small' ? '14rem' : '18rem'};
    padding-bottom: ${headerHeight === 'small' ? '2rem' : '4.5rem'};
    background-image: url('/pattern.svg');
    background-position: center;
  `}
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
`;

export const NavContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    max-width: ${theme.sizes.pageMaxWidth}rem;
    height: 100%;
    margin: 0 auto;

    a {
      display: flex;
      align-items: center;

      font-size: 1rem;
      font-weight: 400;
      font-family: ${theme.fonts.texts};
      border-radius: 25px;
      padding: 0.5rem 1rem;
      color: ${theme.colors.white};
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }

      &.logoutBtn {
        background: transparent;
        color: ${theme.colors.red};
        box-shadow: none;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }

      &.active-link {
        font-weight: 700;
        background: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        font-family: ${theme.fonts.titles};

        &:hover {
          background: ${lighten(0.2, theme.colors.secondary)};
        }
      }

      svg {
        margin-right: 0.325rem;
      }

      & + a {
        margin-left: 1rem;
      }
    }
  `}
`;

export const LinearGradient = styled.div`
  ${({ theme }) => css`
    height: 6.25rem;
    width: 100%;
    background: linear-gradient(
      180deg,
      transparent,
      ${theme.colors.primary} 100%
    );
    position: absolute;
    bottom: 0;
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-width: ${theme.sizes.pageMaxWidth}rem;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      font-family: ${theme.fonts.titles};
      color: ${theme.colors.secondary};
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      font-family: ${theme.fonts.texts};
      margin-top: 2rem;
      max-width: 15rem;
      text-align: center;
    }
  `}
`;
