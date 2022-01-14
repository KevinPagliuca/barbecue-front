import React, { useRef } from 'react';
import { GiBarbecue } from 'react-icons/gi';

import {
  AddChurrasFloatButton,
  FloatButtonRefHandles,
} from 'components/AddChurrasFloatButton';
import { ChurrasCard, ChurrasCardSkeleton } from 'components/ChurrasCard';
import { Layout } from 'components/Layout';
import { theme } from 'global/theme';
import { useChurrasByUser } from 'hooks/useChurras';
import * as S from 'styles/MyChurrasStyles';
import { withSSRAuth } from 'utils/withSSRAuth';

export default function MyChurras() {
  const { churrasList, isLoading } = useChurrasByUser({});
  const addChurrasBtnRef = useRef<FloatButtonRefHandles>(null);

  return (
    <Layout
      title="Meus churras"
      pageTitle="Agenda Churras | Dashboard"
      wrapperBackground={theme.colors.background}
    >
      <AddChurrasFloatButton ref={addChurrasBtnRef} />
      <S.Container>
        <S.ContentContainer type={churrasList?.length > 2 ? 'grid' : 'flex'}>
          {!isLoading &&
            churrasList?.map((item) => (
              <ChurrasCard key={item.id} churrasInfo={item} />
            ))}
          {!isLoading && churrasList?.length === 0 && (
            <S.NoChurras onClick={() => addChurrasBtnRef.current.handleClick()}>
              <span>Você não possui nenhum churras cadastrado.</span>
              <div>
                <span>
                  <GiBarbecue size={36} className="fixed" />
                </span>
                <strong>Cadastrar meu primeiro churras</strong>
              </div>
            </S.NoChurras>
          )}
          {isLoading && <ChurrasCardSkeleton render={9} />}
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
