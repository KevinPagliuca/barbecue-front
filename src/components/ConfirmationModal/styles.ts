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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem 1.5rem;

  width: 20rem;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 8px;
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

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font: 400 1rem ${({ theme }) => theme.fonts.texts};
    padding: 1rem 0;
  }

  button + button {
    margin-top: 0.5rem;
  }
`;
