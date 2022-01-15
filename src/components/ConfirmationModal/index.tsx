import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { Button, ButtonVariants } from 'components/Button';

import * as S from './styles';

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  message?: string;
  title?: string;
  onConfirm: () => Promise<void> | void;
  onCancel?: () => Promise<void> | void;
  confirmText?: string;
  cancelText?: string;
}
export const ConfirmationModal = ({
  isOpen,
  onRequestClose,
  message,
  onConfirm,
  onCancel,
  title = 'Confirmar ação',
  confirmText = 'Sim',
  cancelText = 'Não',
}: ConfirmationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirm();
      onRequestClose();
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = async () => {
    if (onCancel) {
      await onCancel();
    }
    onRequestClose();
  };

  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      bodyOpenClassName="modal-open"
      shouldCloseOnOverlayClick
    >
      <S.ModalContent>
        <S.ModalHeader>
          <h1>{title}</h1>
          <FiX size={30} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalBody>
          <p>{message}</p>
          <Button
            type="button"
            onClick={() => handleConfirm()}
            loading={isLoading}
          >
            {confirmText}
          </Button>
          <Button
            type="button"
            onClick={handleCancel}
            variant={ButtonVariants.RED}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
        </S.ModalBody>
      </S.ModalContent>
    </S.Modal>
  );
};
