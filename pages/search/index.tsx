import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  FilterModalMode, FilterProp, Major, Skill,
} from '../../lib/filterProject/data/filters';
import SearchHeader from '../../components/layout/header/search-header';
// import SearchMajors from '../../components/search/search-majors';
import SearchTopProjects from '../../components/search/search-top-projects';
import SearchFilter from '../../components/search/search-filters';
import SearchFilterModal from '../../components/search/search-filter-modal';
import { FiltersContextProvider } from '../../lib/filterProject/store/filters';
import supabase from '../../lib/supabase/client';

interface SearchProps {
  majors: Major[],
  skills: Skill[],
}

export default function Search({ majors, skills }: SearchProps) {
  const [keyword, setKeyword] = useState<string>('');
  const [modal, setModal] = useState<FilterProp>({
    visible: false,
    data: [],
    title: '',
    mode: FilterModalMode.Jurusan,
  });
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>
          { `${keyword ? `Mencari ${keyword}` : 'Pencarian'} — Kolaborative` }
        </title>
      </Head>
      <main className="bg-gray-50 min-h-screen absolute w-screen z-10">
        <FiltersContextProvider>
          <SearchHeader setKeyword={setKeyword} />
          <SearchFilter openModal={setModal} query={query} majors={majors} skills={skills} />
          {/* <SearchMajors /> */}
          <SearchTopProjects />
          <>
            {
              modal.visible
              && (
              <SearchFilterModal
                closeModal={setModal}
                data={modal.data}
                title={modal.title}
                mode={modal.mode}
              />
              )
            }
          </>
        </FiltersContextProvider>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { data: majors } = await supabase
    .from<Major[]>('majors')
    .select('*');
  const { data: skills } = await supabase
    .from<Skill[]>('skills')
    .select('*');

  return {
    props: {
      majors,
      skills,
      events: [],
    },
  };
}
