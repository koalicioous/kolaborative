import Head from 'next/head';
import { ReactElement } from 'react';
import BasicLayout from '../../components/layout/base/basic-layout';
import MyProjectsCreateSection from '../../components/myprojects/myprojects-create-section';
import supabase from '../../lib/supabase/client';

export async function getServerSideProps({ req }: any) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/myprofile', permanent: false } };
  }

  // If there is a user, return it.
  return { props: {} };
}

export default function MyProjects() {
  return (
    <>
      <Head>
        <title>
          My Projects - Kolaborative
        </title>
      </Head>

      <MyProjectsCreateSection />
    </>
  );
}

MyProjects.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};
