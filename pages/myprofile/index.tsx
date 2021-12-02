import { ReactElement } from 'react';
import Head from 'next/head';
import { NextApiRequest } from 'next';
import BasicLayout from '../../components/layout/base/basic-layout';
import ProfileHeader from '../../components/profile/profile-header';
import supabase from '../../lib/supabase/client';

export default function MyProfile() {
  return (
    <>
      <Head>
        <title>
          My Profile - Kolaborative
        </title>
      </Head>

      <ProfileHeader />
    </>
  );
}

MyProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};

export async function getServerSideProps({ req }: { req: NextApiRequest}) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: '/login' } };
  }
  return { props: { user } };
}
