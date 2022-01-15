import React, { useCallback, useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import router from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { Button } from 'components/Button';
import { ConfirmationModal } from 'components/ConfirmationModal';
import { ChangePasswordForm } from 'components/Forms/ChangePasswordForm';
import { UpdateUserForm } from 'components/Forms/UpdateUserForm';
import { useAuth } from 'contexts/AuthContext';
import { format } from 'date-fns';
import {
  IUserChangePasswordFormData,
  IUserUpdateFormData,
} from 'interfaces/forms';
import { authService } from 'services/AuthService';
import { removeAuthentication } from 'services/client';
import {
  userChangePasswordFormSchema,
  userUpdateFormSchema,
} from 'shared/validators';

import * as S from './styles';

export const ProfileBox = () => {
  const { user, handleUpdateUser } = useAuth();
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);

  const {
    control: dataControl,
    formState: dataFormState,
    reset: dataReset,
    handleSubmit: dataSubmit,
  } = useForm<IUserUpdateFormData>({
    resolver: yupResolver(userUpdateFormSchema),
  });

  const {
    control: passControl,
    formState: passFormState,
    handleSubmit: passSubmit,
    reset: passReset,
  } = useForm<IUserChangePasswordFormData>({
    resolver: yupResolver(userChangePasswordFormSchema),
  });

  useEffect(() => {
    if (user) {
      dataReset({
        birthday: format(new Date(user.birthday), 'yyyy-MM-dd'),
        email: user?.email,
        name: user?.name,
      });
    }
  }, [user]);

  const onSubmitMyData: SubmitHandler<IUserUpdateFormData> = async (data) => {
    await handleUpdateUser(data);
  };

  const onSubmitChangePass: SubmitHandler<IUserChangePasswordFormData> = async (
    data
  ) => {
    try {
      await authService.changePassword(data);
      passReset({
        password: '',
        password_confirmation: '',
      });
      toast.success('Senha alterada com sucesso!');
    } catch (err) {
      const error = err as AxiosError;
      toast.error(error.message);
    }
  };

  const handleDeleteMyAccount = useCallback(async () => {
    try {
      await authService.deleteAccount();
      removeAuthentication();
      router.push('/');
      toast.success('Conta deletada com sucesso!');
    } catch (err) {
      const error = err as AxiosError;
      toast.error(error.message);
    }
  }, []);

  return (
    <S.Container>
      <ConfirmationModal
        isOpen={modalConfirmationOpen}
        onRequestClose={() => setModalConfirmationOpen(false)}
        onConfirm={handleDeleteMyAccount}
        title="Excluir conta?"
        message="Você deseja excluir todos os seus dados de nossa base de dados?"
        cancelText="Não, manter minha conta!"
        confirmText="Sim, delete minha conta!"
      />
      <S.DeleteMeButton onClick={() => setModalConfirmationOpen(true)}>
        Apagar minha conta
      </S.DeleteMeButton>
      <S.AvatarContainer
        onClick={() =>
          toast.info(
            'Estamos trabalhando para implementar essa funcionalidade!'
          )
        }
      >
        <Avatar name={user?.name} round size="5rem" />
        <span id="changePhoto">Alterar foto</span>
      </S.AvatarContainer>
      <S.ContentContainer>
        <S.MyDataForm onSubmit={dataSubmit(onSubmitMyData)}>
          <h1>Meus dados</h1>
          <UpdateUserForm control={dataControl} formState={dataFormState} />
          <Button type="submit" loading={dataFormState.isSubmitting}>
            Salvar
          </Button>
        </S.MyDataForm>
      </S.ContentContainer>

      <S.Container className="spacerTop">
        <S.ContentContainer>
          <h1>Alterar senha</h1>
          <S.PassForm onSubmit={passSubmit(onSubmitChangePass)}>
            <S.InputGroupContainer>
              <ChangePasswordForm
                control={passControl}
                formState={passFormState}
              />
            </S.InputGroupContainer>
            <Button type="submit" loading={passFormState.isSubmitting}>
              Salvar
            </Button>
          </S.PassForm>
        </S.ContentContainer>
      </S.Container>
    </S.Container>
  );
};
