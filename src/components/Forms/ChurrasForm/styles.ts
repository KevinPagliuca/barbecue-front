import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  width: 100%;

  &.w-50 {
    width: 50% !important;

    & + & {
      padding-left: 1rem;
    }
  }
`;

export const SectionTitle = styled.h1`
  font: 600 1rem ${({ theme }) => theme.fonts.titles};
  margin-bottom: 1rem;
`;

export const InputGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const RemoveItemButton = styled.div`
  display: flex;
  align-items: center;
  font: 500 1rem ${({ theme }) => theme.fonts.texts};
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    text-decoration: underline;
    filter: brightness(0.7);
  }

  svg {
    margin-right: 0.25rem;
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
