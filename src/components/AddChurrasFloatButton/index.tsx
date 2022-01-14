import React, {
  useImperativeHandle,
  useState,
  ForwardRefRenderFunction as FR,
  forwardRef,
} from 'react';
import { FiPlus } from 'react-icons/fi';

import { AddChurrasModal } from 'components/AddChurrasModal';

import * as S from './styles';

interface AddChurrasFloatButtonProps {
  ref: React.MutableRefObject<HTMLDivElement>;
}

export interface FloatButtonRefHandles {
  handleClick: () => void;
}

const AddChurrasFloatButtonBase: FR<
  FloatButtonRefHandles,
  AddChurrasFloatButtonProps
> = (props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      handleClick,
    };
  });

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <S.Container onClick={() => setIsOpen(true)}>
        <FiPlus size={40} />
        <S.Text>Adicionar churras</S.Text>
      </S.Container>

      <AddChurrasModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const AddChurrasFloatButton = forwardRef(AddChurrasFloatButtonBase);
