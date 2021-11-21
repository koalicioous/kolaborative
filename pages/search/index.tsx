import Head from 'next/head';
import { useState } from 'react';
import { FilterProp } from '../../lib/filterProject/data/filters';
import SearchHeader from '../../components/layout/header/search-header';
import SearchMajors from '../../components/search/search-majors';
import SearchTopProjects from '../../components/search/search-top-projects';
import SearchFilter from '../../components/search/search-filters';
import SearchFilterModal from '../../components/search/search-filter-modal';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [modal, setModal] = useState<FilterProp>({
    visible: false,
    data: [],
    title: '',
  });

  return (
    <>
      <Head>
        <title>
          { keyword ? `Search result of ${keyword} - Kolaborative` : 'Search Projects - Kolaborative' }
        </title>
      </Head>
      <main className="bg-gray-50 min-h-screen absolute w-screen z-10">
        <SearchHeader keyword={keyword} setKeyword={setKeyword} />
        <SearchFilter openModal={setModal} />
        <SearchMajors />
        <SearchTopProjects />
        {
          modal.visible
          && <SearchFilterModal closeModal={setModal} data={modal.data} title={modal.title} />
        }
      </main>
    </>
  );
}
