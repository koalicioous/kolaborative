import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import {
  FilterModalMode, FilterProp, Major, Skill, Event,
} from '../../lib/filterProject/data/filters';
import SearchHeader from '../../components/layout/header/search-header';
import SearchTopProjects from '../../components/search/search-top-projects';
import SearchFilter from '../../components/search/search-filters';
import SearchFilterModal from '../../components/search/search-filter-modal';
import { FiltersContextProvider } from '../../lib/filterProject/store/filters';
import supabase from '../../lib/supabase/client';

interface SearchProps {
  fallback: Major[] | Skill[] | Event[]
}

export default function Search({ fallback }: SearchProps) {
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
      <SWRConfig value={{ fallback }}>
        <main className="bg-gray-50 min-h-screen absolute w-screen z-10">
          <FiltersContextProvider>
            <SearchHeader setKeyword={setKeyword} />
            <SearchFilter openModal={setModal} query={query} />
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
      </SWRConfig>
    </>
  );
}

export async function getStaticProps() {
  const { data: majors } = await supabase.from('majors').select('*');
  const { data: skills } = await supabase.from('skills').select('*');
  const { data: events } = await supabase.from('events').select('*');
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
