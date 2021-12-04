import { ReactElement } from 'react';
import { SWRConfig } from 'swr';
import BasicLayout from '../../components/layout/base/basic-layout';
import MajorList from '../../components/majors/majors-list';
import { Major } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

interface MajorsProps {
  fallback: Major[]
}

export default function Majors({ fallback }: MajorsProps) {
  return (
    <main className="w-screen min-h-80">
      <SWRConfig value={{ fallback }}>
        <MajorList />
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
  const { data: majors } = await supabase.from('majors').select('*');
  return {
    props: {
      fallback: {
        majors,
      },
    },
  };
}
