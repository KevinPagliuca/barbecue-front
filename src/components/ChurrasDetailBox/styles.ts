import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    padding: 2rem;
    flex: 1;
    max-width: 45rem;
    background: ${theme.colors.background};
    box-shadow: 0 2px 0.5rem rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;

    &.valueAndParticipants {
      > span {
        display: grid;
        grid-template-columns: auto 1fr;
        text-align: end;
        grid-gap: 1rem;

        align-items: center;
        justify-content: space-between;
        font: 600 1rem ${({ theme }) => theme.fonts.titles};
        color: ${({ theme }) => theme.colors.texts};
      }
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font: 700 1.25rem ${theme.fonts.titles};
    color: ${theme.colors.titles};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font: 400 1rem ${theme.fonts.texts};
    color: ${theme.colors.texts};
  `}
`;

export const DateAndLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  h1 {
    ${({ theme }) => css`
      font: 700 1rem ${theme.fonts.texts};
      color: ${theme.colors.gray};
      margin-bottom: 0.5rem;
    `}
  }
`;

export const DateAndHour = styled.span`
  ${({ theme }) => css`
    font: 500 1rem ${theme.fonts.texts};
    color: ${theme.colors.texts};
    margin-bottom: 0.5rem;
  `}
`;

export const Location = styled.p`
  ${({ theme }) => css`
    font: 400 1rem ${theme.fonts.texts};
    color: ${theme.colors.texts};
  `}
`;

export const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  h1 {
    ${({ theme }) => css`
      font: 700 1.25rem ${theme.fonts.titles};
      color: ${theme.colors.gray};
      margin-bottom: 1rem;
    `}
  }
`;

export const AddParticipantsText = styled.span`
  ${({ theme }) => css`
    font: 500 1rem ${theme.fonts.titles};
    color: ${theme.colors.blue};
    margin-left: auto;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
      text-decoration: underline;
      filter: brightness(0.7);
    }
  `}
`;

export const DeleteChurrasButton = styled.span`
  ${({ theme }) => css`
    font: 500 1rem ${theme.fonts.titles};
    color: ${theme.colors.red};
    margin-left: auto;
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
      text-decoration: underline;
      filter: brightness(0.7);
    }
  `}
`;
