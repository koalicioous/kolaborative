import Head from 'next/head';
import { useState } from 'react';
import { FilterModalMode, FilterProp } from '../../lib/filterProject/data/filters';
import SearchHeader from '../../components/layout/header/search-header';
// import SearchMajors from '../../components/search/search-majors';
import SearchTopProjects from '../../components/search/search-top-projects';
import SearchFilter from '../../components/search/search-filters';
import SearchFilterModal from '../../components/search/search-filter-modal';
import { FiltersContextProvider } from '../../lib/filterProject/store/filters';

export default function Search() {
  const [keyword, setKeyword] = useState<string>('');
  const [modal, setModal] = useState<FilterProp>({
    visible: false,
    data: [],
    title: '',
    mode: FilterModalMode.Jurusan,
  });

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
          <SearchFilter openModal={setModal} />
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
