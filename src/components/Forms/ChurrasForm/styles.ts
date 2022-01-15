import styled, { css } from 'styled-components';

interface InputContainerProps {
  error?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;

  &.group-1 {
    width: 50% !important;
  }

  &.group-2 {
    width: 50% !important;
  }

  &.right {
    padding-right: 0.5rem;
  }
  &.left {
    padding-left: 0.5rem;
  }

  ${({ error }) =>
    error &&
    css`
      margin-bottom: 0;
    `}
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
