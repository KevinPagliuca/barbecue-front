import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { ChurrasForm } from 'components/Forms/ChurrasForm';
import { useCreateChurras } from 'hooks/useChurras';
import { ICreateChurrasFormData } from 'interfaces/forms';
import { churrasFormSchema } from 'shared/validators';

import * as S from './styles';

interface AddChurrasModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const AddChurrasModal = ({
  isOpen,
  onRequestClose,
}: AddChurrasModalProps) => {
  const { createChurras } = useCreateChurras();
  const { control, formState, handleSubmit, reset } =
    useForm<ICreateChurrasFormData>({
      resolver: yupResolver(churrasFormSchema),
    });

  const onSubmit: SubmitHandler<ICreateChurrasFormData> = async (data) => {
    await createChurras(data);
    reset();
    onRequestClose();
  };

  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="modal-open"
      shouldCloseOnOverlayClick
    >
      <S.ScrollView>
        <S.ModalContent>
          <S.ModalHeader>
            <h1>Adicionar churras</h1>
            <FiX size={30} onClick={onRequestClose} />
          </S.ModalHeader>
          <S.ModalBody onSubmit={handleSubmit(onSubmit)}>
            <ChurrasForm control={control} formState={formState} />
            <Button type="submit" loading={formState.isSubmitting}>
              Agendar
            </Button>
          </S.ModalBody>
        </S.ModalContent>
      </S.ScrollView>
    </S.Modal>
  );
};
