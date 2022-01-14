import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 1.5rem;
    background: ${theme.colors.white};
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.15);
    width: 18.75rem;
    border-radius: 6px;
    position: relative;
    transition: all 0.15s;

    &:hover {
      box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.2);
      background: ${darken(0.03, theme.colors.white)};
    }
  `}
`;

export const ChurrasDate = styled.strong`
  ${({ theme }) => css`
    font: 600 1.125rem ${theme.fonts.titles};
    color: ${theme.colors.titles};
  `}
`;

export const ChurrasIntent = styled.p`
  ${({ theme }) => css`
    font: 500 1rem ${theme.fonts.texts};
    color: ${theme.colors.texts};
    margin-top: 0.25rem;
  `}
`;

export const ChurrasDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  strong {
    font: 600 1rem ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 0.25rem;
  }

  p {
    font: 500 0.875rem ${({ theme }) => theme.fonts.texts};
    color: ${({ theme }) => theme.colors.texts};
  }
`;

export const ChurrasValueAndParticipants = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    font: 700 12px ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.secondary};

    svg {
      margin-right: 0.25rem;
    }
  }
`;

export const CurrasHost = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0.5rem;

    strong {
      font: 700 12px ${theme.fonts.titles};
      color: ${theme.colors.titles};
    }

    span {
      margin-left: 0.25rem;
      font: 700 12px ${theme.fonts.texts};
      color: ${darken(0.15, theme.colors.primary)};
    }
  `}
`;

export const ParticipButtton = styled.div`
  ${({ theme }) => css`
    margin: 1rem auto 0;
    font: 700 12px ${theme.fonts.texts};
    color: ${darken(0.15, theme.colors.primary)};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const ContentContainer = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
