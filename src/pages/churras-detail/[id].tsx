import { useRef } from 'react';

import { ChurrasDetailBox } from 'components/ChurrasDetailBox';
import { Layout } from 'components/Layout';
import {
  FloatButtonUpdateRefHandles,
  UpdateChurrasFloatButton,
} from 'components/UpdateChurrasFloatButton';
import { useAuth } from 'contexts/AuthContext';
import { theme } from 'global/theme';
import { useChurrasById } from 'hooks/useChurras';
import { IChurras } from 'interfaces/churras';
import { parseCookies } from 'nookies';
import { client } from 'services/client';
import * as S from 'styles/ChurrasDetailStyles';
import { withSSRAuth } from 'utils/withSSRAuth';

interface ChurrasDetailsProps {
  churras: IChurras;
  churrasId: string;
}

export default function ChurrasDetails({
  churras,
  churrasId,
}: ChurrasDetailsProps) {
  const { user } = useAuth();
  const updateChurrasBtnRef = useRef<FloatButtonUpdateRefHandles>(null);
  const { churras: data } = useChurrasById({
    id: churrasId,
    options: {
      initialData: churras,
    },
  });

  const handleOpenParticipantsModal = () => {
    updateChurrasBtnRef.current?.handleClick(true);
  };

  return (
    <Layout
      title={`Detalhes do churras`}
      pageTitle={`${data.title} | Agenda Churras`}
      wrapperBackground={theme.colors.background}
    >
      <S.Container>
        <ChurrasDetailBox
          churras={data}
          handleOpenParticipantsModal={handleOpenParticipantsModal}
        />
      </S.Container>
      {user?.id === data.user_id && (
        <UpdateChurrasFloatButton churras={data} ref={updateChurrasBtnRef} />
      )}
    </Layout>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const { '@barbecue:token': token } = parseCookies(ctx);
  const { id } = ctx.params;

  try {
    const { data: churras } = await client.get<IChurras>(`/churras/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!churras) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        churras,
        churrasId: id,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
});
