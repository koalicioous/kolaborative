import Head from 'next/head';
import { ReactElement } from 'react';
import BasicLayout from '../../components/layout/base/basic-layout';
import MyProjectsCreateSection from '../../components/myprojects/myprojects-create-section';

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
