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

interface ModalStyleProps {
  shouldVisible: boolean;
}

export const Modal = styled(ModalBase).attrs({
  style: customStyles,
})<ModalStyleProps>`
  ${({ shouldVisible }) => css`
    visibility: ${shouldVisible ? 'visible' : 'hidden'};
    opacity: ${shouldVisible ? 1 : 0};
  `}
`;

export const ScrollView = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    position: relative;
    max-height: calc(100vh - 4rem);

    width: 30rem;
    background: ${theme.colors.background};
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 13px;
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
  padding: 2rem 0 1rem;
`;

export const ContentContainer = styled.div``;
