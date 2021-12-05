import Head from 'next/head';
import { ReactElement } from 'react';
import BasicLayout from '../../components/layout/base/basic-layout';
import MyProjectsCreateSection from '../../components/myprojects/myprojects-create-section';
import { useAuth } from '../../context/auth';
import Unauthorized from '../../components/auth/unauthorized';

export default function MyProjects() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>
          My Projects - Kolaborative
        </title>
      </Head>
      {
        user
          ? <MyProjectsCreateSection />
          : <Unauthorized />
      }
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
