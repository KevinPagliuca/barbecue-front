import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { LoginForm } from 'components/Forms/LoginForm';
import { useAuth } from 'contexts/AuthContext';
import { IUserSignInFormData } from 'interfaces/forms';
import { userSignInFormSchema } from 'shared/validators';

import * as S from './styles';

export const LoginBox = () => {
  const { handleSignIn } = useAuth();
  const { control, formState, handleSubmit } = useForm<IUserSignInFormData>({
    resolver: yupResolver(userSignInFormSchema),
  });

  const onSubmit: SubmitHandler<IUserSignInFormData> = async (data) => {
    await handleSignIn(data);
  };

  return (
    <S.Container>
      <S.InformationText>
        Preencha o formulário para entrar no sistema.
      </S.InformationText>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <LoginForm control={control} formState={formState} />
        <Button type="submit" loading={formState.isSubmitting}>
          Entrar
        </Button>
      </S.FormContainer>
      <S.RegisterText>
        Ainda não tem uma conta ? <Link href="/register">Cadastre-se</Link>
      </S.RegisterText>
    </S.Container>
  );
};
