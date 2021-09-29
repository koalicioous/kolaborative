import Head from 'next/head';
import { useState } from 'react';
import SearchHeader from '../../components/layout/header/search-header';
import SearchMajors from '../../components/search/search-majors';
import SearchTopProjects from '../../components/search/search-top-projects';

export default function Search() {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <Head>
        <title>
          { keyword ? `Search result of ${keyword} - Kolaborative` : 'Search Projects - Kolaborative' }
        </title>
      </Head>
      <SearchHeader keyword={keyword} setKeyword={setKeyword} />
      <main className="pt-14 bg-gray-100">
        <SearchMajors />
        <SearchTopProjects />
      </main>
    </>
  );
}
