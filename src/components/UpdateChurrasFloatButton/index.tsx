import React, {
  useImperativeHandle,
  useState,
  ForwardRefRenderFunction as FR,
  forwardRef,
} from 'react';
import { FiSettings } from 'react-icons/fi';

import { UpdateChurrasModal } from 'components/UpdateChurrasModal';
import { IChurras } from 'interfaces/churras';

import * as S from './styles';

interface UpdateChurrasFloatButtonProps {
  churras: IChurras;
}

export interface FloatButtonUpdateRefHandles {
  handleClick: (openParticipants: boolean) => void;
}

const UpdateChurrasFloatButtonBase: FR<
  FloatButtonUpdateRefHandles,
  UpdateChurrasFloatButtonProps
> = ({ churras }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [participantsOpen, setParticipantsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      handleClick,
    };
  });

  const handleClick = (participants: boolean) => {
    setIsOpen(true);
    setParticipantsOpen(participants);
  };

  const handleCloseUpdateModal = () => {
    setIsOpen(false);
    setParticipantsOpen(false);
  };

  return (
    <>
      <S.Container onClick={() => setIsOpen(true)} id="updateChurrasBtn">
        <FiSettings size={40} />
        <S.Text>Editar churras</S.Text>
      </S.Container>

      <UpdateChurrasModal
        isOpen={isOpen}
        onRequestClose={handleCloseUpdateModal}
        churrasInfo={churras}
        openParticipantsModal={participantsOpen}
      />
    </>
  );
};

export const UpdateChurrasFloatButton = forwardRef(
  UpdateChurrasFloatButtonBase
);
