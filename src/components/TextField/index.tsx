import React, { useRef } from 'react';
import { FieldError } from 'react-hook-form';

import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: FieldError;
  maxWidth?: string;
  mask?: string;
}

export const TextField = ({
  id,
  label,
  error,
  maxWidth,
  mask,
  ...rest
}: InputProps) => {
  const errorMessageRef = useRef<HTMLDivElement>();

  return (
    <S.Container
      error={!!error}
      maxWidth={maxWidth}
      readOnly={!!rest.readOnly}
      errorHeight={errorMessageRef.current?.offsetHeight}
    >
      {mask ? (
        <S.InputStyledWithMask
          mask={mask}
          placeholder=" "
          maskPlaceholder=" "
          id={id}
          {...rest}
        />
      ) : (
        <S.InputStyled {...rest} placeholder=" " id={id} />
      )}
      <S.InputPlaceholder htmlFor={id} required={rest?.required}>
        {label}
      </S.InputPlaceholder>
      <legend
        className={rest?.required ? 'required' : undefined}
        hidden={!label}
      >
        {label}
      </legend>
      <S.ErrorMessage
        className={!!error ? 'show' : undefined}
        ref={errorMessageRef}
      >
        {error?.message}
      </S.ErrorMessage>
    </S.Container>
  );
};
