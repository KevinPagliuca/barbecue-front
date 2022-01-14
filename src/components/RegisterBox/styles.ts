import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 13px;
  max-width: 25rem;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
`;

export const InformationText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.titles};
  text-align: center;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.titles};
    margin-bottom: 1rem;
  }
`;

export const AlreadyHaveAccountText = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.texts};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1rem;
  width: 100%;

  > a {
    color: ${({ theme }) => theme.colors.blue};
    transition: color 0.15s;
    &:hover {
      color: ${({ theme }) => darken(0.15, theme.colors.blue)};
    }
  }
`;
