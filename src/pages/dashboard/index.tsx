import React from 'react';

import { AddChurrasFloatButton } from 'components/AddChurrasFloatButton';
import { ChurrasCard, ChurrasCardSkeleton } from 'components/ChurrasCard';
import { Layout } from 'components/Layout';
import { theme } from 'global/theme';
import { useChurras } from 'hooks/useChurras';
import * as S from 'styles/DashboardStyles';
import { withSSRAuth } from 'utils/withSSRAuth';

export default function Dashboard() {
  const { churrasList, isLoading } = useChurras({});

  return (
    <Layout
      title="Dashboard"
      pageTitle="Agenda Churras | Dashboard"
      wrapperBackground={theme.colors.background}
    >
      <AddChurrasFloatButton />
      <S.Container>
        <S.ContentContainer type={churrasList?.length > 2 ? 'grid' : 'flex'}>
          {!isLoading &&
            churrasList?.map((item) => (
              <ChurrasCard key={item.id} churrasInfo={item} />
            ))}
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
