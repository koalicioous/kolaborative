import { ReactElement } from 'react';
import Head from 'next/head';
import supabase from '../../lib/supabase/client';
import WithoutBottomNavbarLayout from '../../components/layout/base/without-bottom-navbar-layout';
import { Project } from '../../lib/newProject/data/project';
import ProjectDetailTitle from '../../components/projects/project-detail-title';
import ProjectDetailDescription from '../../components/projects/project-detail-description';
import ProjectDetailGoal from '../../components/projects/project-detail-goal';
import ProjectDetailDuration from '../../components/projects/project-detail-duration';
import ProjectDetailBar from '../../components/projects/project-detail-bar';
import ProjectDetailTalent from '../../components/projects/project-detail-talent';

export async function getServerSideProps({ params }: any) {
  const { data: projects } = await supabase
    .from<Project>('projects')
    .select(`
      *,
      user_project (
        *
      ),
      project_requirements (
        *,
        majors (
          *
        ),
        skills (
          *
        )
      ),
      events (
        *
      )
    `)
    .eq('slug', String(params.slug));
  return {
    props: {
      project: projects![0],
    },
  };
}

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      {
        project && (
          <>
            <Head>
              <title>
                {`${project.name} - Kolaborative`}
              </title>
            </Head>
            <div className="pb-[61px]">
              <ProjectDetailTitle title={project.name} event={project.events.name} />
              <ProjectDetailDescription description={project.description ?? ''} />
              <ProjectDetailGoal goals={project.project_goals ?? []} />
              {
                project.start_date && project.finish_date
                && (
                  <ProjectDetailDuration
                    startDate={project.start_date}
                    finishDate={project.finish_date}
                  />
                )
              }
              <ProjectDetailTalent talents={project.project_requirements ?? []} />
            </div>
            <ProjectDetailBar />
          </>
        )
      }
    </>
  );
}

ProjectDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <WithoutBottomNavbarLayout>
      {page}
    </WithoutBottomNavbarLayout>
  );
};
