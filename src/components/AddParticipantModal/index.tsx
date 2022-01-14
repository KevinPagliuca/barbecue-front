import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';
import { addParticipantFormSchema } from 'shared/validators';

import * as S from './styles';

interface AddParticipantModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: SubmitHandler<{
    name: string;
    value: string;
  }>;
}
export const AddParticipantModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
}: AddParticipantModalProps) => {
  const { control, handleSubmit, formState, reset, clearErrors } = useForm({
    resolver: yupResolver(addParticipantFormSchema),
  });

  useEffect(() => {
    reset();
    clearErrors();
  }, [isOpen]);

  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="modal-open"
      shouldCloseOnOverlayClick
    >
      <S.ModalContent>
        <S.ModalHeader>
          <h1>Adicionar participante</h1>
          <FiX size={30} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalBody onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <S.InputContainer>
                <TextField
                  id="name"
                  label="Nome"
                  value={value}
                  onChange={onChange}
                  error={formState.errors?.name}
                />
              </S.InputContainer>
            )}
          />
          <Controller
            control={control}
            name="value"
            render={({ field: { value, onChange } }) => (
              <S.InputContainer>
                <TextField
                  id="value"
                  label="Valor"
                  value={value}
                  onChange={onChange}
                  error={formState.errors?.value}
                />
              </S.InputContainer>
            )}
          />

          <Button type="submit" loading={formState.isSubmitting}>
            Adicionar
          </Button>
        </S.ModalBody>
      </S.ModalContent>
    </S.Modal>
  );
};
