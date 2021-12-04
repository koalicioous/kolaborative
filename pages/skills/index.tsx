import { ReactElement } from 'react';
import { SWRConfig } from 'swr';
import BasicLayout from '../../components/layout/base/basic-layout';
import SkillList from '../../components/skills/skill-list';
import { Skill } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

interface MajorsProps {
  fallback: Skill[]
}

export default function Majors({ fallback }: MajorsProps) {
  return (
    <main className="w-screen min-h-80">
      <SWRConfig value={{ fallback }}>
        <SkillList />
      </SWRConfig>
    </main>
  );
}

Majors.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};

export async function getStaticProps() {
  const { data: skills } = await supabase.from('skills').select('*');
  return {
    props: {
      fallback: {
        skills,
      },
    },
  };
}
