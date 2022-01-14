import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { RegisterForm } from 'components/Forms/RegisterForm';
import { useAuth } from 'contexts/AuthContext';
import { IUserSignUpFormData } from 'interfaces/forms';
import { userSignUpFormSchema } from 'shared/validators';

import * as S from './styles';

export const RegisterBox = () => {
  const { handleSignUp } = useAuth();
  const { control, formState, handleSubmit } = useForm<IUserSignUpFormData>({
    resolver: yupResolver(userSignUpFormSchema),
  });

  const onSubmit: SubmitHandler<IUserSignUpFormData> = async (data) => {
    await handleSignUp(data);
  };

  return (
    <S.Container>
      <S.InformationText>
        Preencha o formulário para realizar seu cadastro.
      </S.InformationText>

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Registro</h1>
        <RegisterForm control={control} formState={formState} />
        <Button type="submit" loading={formState.isSubmitting}>
          Cadastrar
        </Button>
      </S.FormContainer>
      <S.AlreadyHaveAccountText>
        Já tem uma conta ? <Link href="/">Entrar</Link>
      </S.AlreadyHaveAccountText>
    </S.Container>
  );
};
