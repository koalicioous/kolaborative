import { ReactElement } from 'react';
import { SWRConfig } from 'swr';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CreateProjectLayout from '../../components/layout/base/create-project-layout';
import ProjectCreateDetailMaterial from '../../components/projects/project-create-detail-material';
import { STEP_DETAIL } from '../../constants/global';
import CreateProjectTab from '../../components/tabs/create-project-tab';
import ProjectCreateTalents from '../../components/projects/project-create-talents';
import supabase from '../../lib/supabase/client';
import { Major, Skill, Event } from '../../lib/filterProject/data/filters';
import { useAuth } from '../../context/auth';
import Unauthorized from '../../components/auth/unauthorized';

export async function getStaticProps() {
  const { data: majors } = await supabase.from('majors').select('*');
  const { data: skills } = await supabase.from('skills').select('*');
  const { data: events } = await supabase.from('skills').select('*');

  // If there is a user, return it.
  return {
    props: {
      fallback: {
        majors,
        skills,
        events,
      },
    },
  };
}

interface CreateProjectProps {
  fallback: Major[] | Skill[] | Event[]
}

export default function CreateProject({ fallback }: CreateProjectProps) {
  const { query } = useRouter();
  const step: string = query.step as string;
  const isDetailStep: boolean = step ? step === STEP_DETAIL : true;
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>
          Create New Project — Kolaborative
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      {
        user
          ? (
            <SWRConfig value={{ fallback }}>
              <CreateProjectTab step={step} />
              {
                isDetailStep
                  ? <ProjectCreateDetailMaterial />
                  : <ProjectCreateTalents />
              }
            </SWRConfig>
          )
          : <Unauthorized />
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
