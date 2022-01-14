import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

import { UpdateChurrasModal } from 'components/UpdateChurrasModal';
import { IChurras } from 'interfaces/churras';

import * as S from './styles';

interface UpdateChurrasFloatButtonProps {
  churras: IChurras;
}

export const UpdateChurrasFloatButton = ({
  churras,
}: UpdateChurrasFloatButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Container onClick={() => setIsOpen(true)} id="updateChurrasBtn">
        <FiSettings size={40} />
        <S.Text>Editar churras</S.Text>
      </S.Container>

      <UpdateChurrasModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        churrasInfo={churras}
      />
    </>
  );
};
