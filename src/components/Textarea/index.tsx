import React from 'react';
import { FieldError } from 'react-hook-form';

import * as S from './styles';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: FieldError;
  maxWidth?: string;
}

export const Textarea = ({
  id,
  label,
  error,
  maxWidth,
  ...rest
}: TextareaProps) => {
  return (
    <S.Container error={!!error} id="TextareaStyled" maxWidth={maxWidth}>
      <S.TextareaStyled
        {...rest}
        placeholder=" "
        id={id}
        className={
          !!rest.className
            ? `${rest.className} scrollBar-styled`
            : 'scrollBar-styled'
        }
      />
      <legend className={rest?.required ? 'required' : undefined}>
        {label}
      </legend>
      <S.ErrorMessage className={!!error ? 'show' : undefined}>
        {error?.message}
      </S.ErrorMessage>
    </S.Container>
  );
};
