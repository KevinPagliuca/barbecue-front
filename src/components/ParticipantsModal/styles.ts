import ModalBase, { Styles } from 'react-modal';

import styled, { css } from 'styled-components';

const customStyles: Styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100,
  },
  overlay: {
    zIndex: 1000,
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

ModalBase.setAppElement('#__next');

export const Modal = styled(ModalBase).attrs({
  style: customStyles,
})``;

export const ScrollView = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    position: relative;
    max-height: calc(100vh - 4rem);

    width: 25rem;
    background: ${theme.colors.background};
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  `}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 1rem;
  margin: 1rem;
`;

export const ModalHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h1 {
      font: 600 1.25rem ${theme.fonts.titles};
    }

    svg {
      color: ${theme.colors.titles};
      cursor: pointer;
    }
  `}
`;

export const ModalBody = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;

  p {
    font: 400 1rem ${({ theme }) => theme.fonts.texts};
    padding: 1rem 0;
  }

  button + button {
    margin-top: 0.5rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;

  &.errored {
    margin-bottom: 0.25rem;
  }
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const RemoveItemButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.red};
    font: 500 1rem ${theme.fonts.texts};
    cursor: pointer;
    margin-top: 0.5rem;
    transition: all 0.15s;

    &:hover {
      text-decoration: underline;
      filter: brightness(0.7);
    }

    svg {
      margin-right: 0.25rem;
    }
  `}
`;

export const FillValueButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const AddParticipantsText = styled.span`
  ${({ theme }) => css`
    font: 500 1rem ${theme.fonts.titles};
    color: ${theme.colors.blue};
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-bottom: 1rem;
    transition: all 0.15s;

    &.center {
      margin-left: 0;
      justify-content: center;
    }

    svg {
      margin-right: 0.25rem;
    }
    &:hover {
      text-decoration: underline;
      filter: brightness(0.7);
    }
  `}
`;
