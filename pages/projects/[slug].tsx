import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import Head from 'next/head';
import WithoutBottomNavbarLayout from '../../components/layout/base/without-bottom-navbar-layout';
import { Project } from '../../lib/data/project';
import ProjectDetailTitle from '../../components/projects/project-detail-title';
import ProjectDetailDescription from '../../components/projects/project-detail-description';
import ProjectDetailGoal from '../../components/projects/project-detail-goal';
import ProjectDetailDuration from '../../components/projects/project-detail-duration';
import ProjectDetailBar from '../../components/projects/project-detail-bar';
import ProjectDetailTalent from '../../components/projects/project-detail-talent';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project: Project = {
    slug: slug as string,
    name: 'Karya Cipta: Mesin Pembersih Air Bertenaga Surya',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, necessitatibus provident enim reiciendis minus libero soluta dolores numquam quis, dolorem quas aliquid harum deserunt voluptates dignissimos odio consequuntur doloremque aliquam. Eius accusamus consequuntur, dolores est iste velit eveniet facilis distinctio temporibus aperiam tenetur. Officiis iure quo aut error vitae, at molestias itaque aliquam eius laboriosam hic aliquid necessitatibus veritatis ipsa, voluptatum libero voluptas earum soluta sunt odit animi rem totam nemo. Molestias unde, eveniet officiis magni totam saepe perferendis aut asperiores veniam ducimus ea quia praesentium reiciendis, dolor consectetur temporibus velit vel, minus quam nesciunt mollitia? Doloremque quod delectus aperiam.',
    goal: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro perferendis dolores ipsum aspernatur quod deserunt distinctio deleniti accusantium enim sint labore tempore, debitis incidunt mollitia, veritatis quo ipsam, possimus sunt!',
    duration: '2 Bulan (12 September 2021 – 12 November 2021)',
  };

  return (
    <>
      <Head>
        <title>
          {`${project.name} - Kolaborative`}
        </title>
      </Head>

      <div className="pb-[61px]">
        <ProjectDetailTitle project={project} />
        <ProjectDetailDescription project={project} />
        <ProjectDetailGoal project={project} />
        <ProjectDetailDuration project={project} />
        <ProjectDetailTalent project={project} />
      </div>

      <ProjectDetailBar />
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
