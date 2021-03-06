import React, { useRef } from 'react';
import { GiBarbecue } from 'react-icons/gi';

import {
  AddChurrasFloatButton,
  FloatButtonRefHandles,
} from 'components/AddChurrasFloatButton';
import { ChurrasCard, ChurrasCardSkeleton } from 'components/ChurrasCard';
import { Layout } from 'components/Layout';
import { theme } from 'global/theme';
import { useChurras } from 'hooks/useChurras';
import * as S from 'styles/DashboardStyles';
import { withSSRAuth } from 'utils/withSSRAuth';

export default function Dashboard() {
  const { churrasList, isLoading } = useChurras({});
  const addChurrasBtnRef = useRef<FloatButtonRefHandles>(null);

  return (
    <Layout
      title="Dashboard"
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
              <span>
                Ainda não possuímos nenhum churras cadastrado em nosso sistema,
                seja o primeiro!
              </span>
              <div>
                <span>
                  <GiBarbecue size={36} className="fixed" />
                </span>
                <strong>Agendar primeiro churras 🔥🤩</strong>
              </div>
            </S.NoChurras>
          )}
          {isLoading && <ChurrasCardSkeleton render={6} />}
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
