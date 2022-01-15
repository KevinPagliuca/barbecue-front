import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { ConfirmationModal } from 'components/ConfirmationModal';
import { ChurrasForm } from 'components/Forms/ChurrasForm';
import { ParticipantsModal } from 'components/ParticipantsModal';
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
  const [participantModalOpen, setParticipantModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const { createChurras } = useCreateChurras();
  const RHFuseForm = useForm<ICreateChurrasFormData>({
    resolver: yupResolver(churrasFormSchema),
  });

  const onSubmit: SubmitHandler<ICreateChurrasFormData> = async (data) => {
    await createChurras(data);
    RHFuseForm.reset();
    setParticipantModalOpen(false);
    onRequestClose();
  };

  const handleConfirm = async () => {
    setParticipantModalOpen(true);
    setConfirmationModalOpen(false);
  };

  const handleSchedule = async () => {
    setConfirmationModalOpen(true);
  };

  const handleParticipantModalClose = () => {
    RHFuseForm.setValue('participants', []);
    setParticipantModalOpen(false);
  };

  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="modal-open"
      shouldCloseOnOverlayClick
      shouldVisible={!participantModalOpen}
    >
      <ConfirmationModal
        isOpen={confirmationModalOpen}
        onRequestClose={() => setConfirmationModalOpen(false)}
        title="Cadastrar participantes?"
        message="Deseja cadastrar os participantes?"
        onConfirm={handleConfirm}
        onCancel={RHFuseForm.handleSubmit(onSubmit)}
        confirmText="Sim, quero cadastrar!"
        cancelText="Não, eu cadastro depois!"
      />
      <ParticipantsModal
        isOpen={participantModalOpen}
        onRequestClose={handleParticipantModalClose}
        useForm={RHFuseForm}
        onSubmit={onSubmit}
      />
      <S.ScrollView>
        <S.ModalContent>
          <S.ModalHeader>
            <h1>Adicionar churras</h1>
            <FiX size={30} onClick={onRequestClose} />
          </S.ModalHeader>
          <S.ModalBody onSubmit={RHFuseForm.handleSubmit(handleSchedule)}>
            <ChurrasForm
              control={RHFuseForm.control}
              formState={RHFuseForm.formState}
            />
            <Button type="submit" loading={RHFuseForm.formState.isSubmitting}>
              Agendar
            </Button>
          </S.ModalBody>
        </S.ModalContent>
      </S.ScrollView>
    </S.Modal>
  );
};
