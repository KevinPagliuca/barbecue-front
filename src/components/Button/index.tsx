import React, { useRef } from 'react';

import * as S from './styles';

export enum ButtonVariants {
  DARK = 'dark',
  RED = 'red',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariants;
  maxWidth?: number;
  maxHeight?: number;
  smallFont?: boolean;
  refBtn?: React.RefObject<HTMLButtonElement>;
  loading?: boolean;
  rounded?: boolean;
}

export const Button = ({
  children,
  variant = ButtonVariants.DARK,
  maxWidth,
  maxHeight,
  refBtn,
  loading = false,
  ...rest
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ref = refBtn || buttonRef;

  return (
    <S.ContentContainer
      {...rest}
      variant={variant}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      loading={loading}
      disabled={loading || !!rest.disabled}
      ref={ref}
    >
      {loading ? <S.LoaderStyled type="Oval" color="currentColor" /> : children}
    </S.ContentContainer>
  );
};
