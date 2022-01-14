import LoaderSpinner from 'react-loader-spinner';

import styled from 'styled-components';

export const Container = styled.div`
  background: #1b1b1fbb;
  position: fixed;
  z-index: -1;
  inset: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.open {
    z-index: 2000;
    opacity: 1;
    visibility: visible;
  }
`;

interface LoaderProps {
  open: boolean;
}

export const Loader = ({ open }: LoaderProps) => {
  return (
    <Container className={open ? 'open' : undefined}>
      <LoaderSpinner type="Oval" color="currentColor" />
    </Container>
  );
};
