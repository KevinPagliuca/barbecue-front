import { Layout } from 'components/Layout';
import { ProfileBox } from 'components/ProfileBox';
import { theme } from 'global/theme';
import * as S from 'styles/ProfileStyles';
import { withSSRAuth } from 'utils/withSSRAuth';

export default function Profile() {
  return (
    <Layout
      pageTitle="Meu perfil | Agenda Churras"
      title="Meu perfil"
      wrapperBackground={theme.colors.background}
    >
      <S.Container>
        <ProfileBox />
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
