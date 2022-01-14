import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  max-width: 35rem;
  flex: 1;
  border-radius: 12px;
  position: relative;

  &.spacerTop {
    margin-top: 1rem;
  }
`;

export const DeleteMeButton = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  font: 500 12px ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.red};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  h1 {
    font: 600 1.25rem ${({ theme }) => theme.fonts.titles};
    margin-bottom: 1rem;

    &:not(:first-child) {
      padding-top: 1rem;
      border-top: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const AvatarContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;

  .sb-avatar__text {
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.15s;
  }

  #changePhoto {
    position: absolute;
    font: 700 12px ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    transition: all 0.15s;
  }

  &:hover {
    cursor: pointer;
    .sb-avatar__text {
      filter: brightness(0.5);
    }

    #changePhoto {
      opacity: 1;
    }
  }
`;

export const MyDataForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
export const PassForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const InputGroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
`;
