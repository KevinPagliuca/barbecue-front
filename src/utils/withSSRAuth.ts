import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { parseCookies } from 'nookies';

import { nextRedirect } from './nextRedirect';

export function withSSRAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { '@barbecue:token': token, '@barbecue:userdata_cache': userData } =
      parseCookies(ctx);

    if (!token && !userData) return nextRedirect(ctx);

    try {
      return await fn(ctx);
    } catch (err) {
      return nextRedirect(ctx);
    }
  };
}
