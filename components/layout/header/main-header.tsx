import Link from 'next/link';
import { FC } from 'react';

const MainHeader: FC = () => (
  <header className="fixed w-full bg-white shadow" style={{ zIndex: 99 }}>
    <div className="max-w-lg m-auto px-4 py-3 flex items-center justify-between">
      <Link href="/">
        <a className="font-bold text-blue-600 text-lg">
          Kolaborative
          <span className="text-yellow-400 text-3xl leading-3">
            .
          </span>
        </a>
      </Link>
      <Link href="/search">
        <a className="ml-4 flex-1 items-center max-w-sm relative">
          <input type="text" placeholder={'Coba cari "PKM"'} className="rounded-full w-full pl-4 pr-8 py-2 text-xs transition bg-blue-100 text-blue-500 placeholder-blue-500 hover:bg-blue-50" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-blue-500 inset-y-0 right-4 my-auto" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </a>
      </Link>
    </div>
  </header>
);

export default MainHeader;
