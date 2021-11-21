import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CreateProjectLayout from '../../components/layout/base/create-project-layout';
import ProjectCreateDetail from '../../components/projects/project-create-detail';
import { STEP_DETAIL } from '../../constants/global';
import CreateProjectTab from '../../components/tabs/create-project-tab';
import ProjectCreateTalents from '../../components/projects/project-create-talents';

export default function CreateProject() {
  const { query } = useRouter();
  const step: string = query.step as string;
  const isDetailStep: boolean = step ? step === STEP_DETAIL : true;

  return (
    <>
      <Head>
        <title>
          Create New Project — Kolaborative
        </title>
      </Head>
      <CreateProjectTab step={step} />
      {
        isDetailStep
          ? <ProjectCreateDetail />
          : <ProjectCreateTalents />
      }
    </>
  );
}

CreateProject.getLayout = function getLayout(page: ReactElement) {
  return (
    <CreateProjectLayout>
      {page}
    </CreateProjectLayout>
  );
};
