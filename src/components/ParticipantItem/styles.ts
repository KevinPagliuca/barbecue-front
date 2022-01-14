import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const Participant = styled.strong`
  font: 600 1rem ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.titles};
`;

export const Value = styled.span`
  font: 600 1rem ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.texts};
  margin-left: auto;
`;
