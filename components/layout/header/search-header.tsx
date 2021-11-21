/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useRef } from 'react';
import { SetFilterActionType } from '../../../lib/filterProject/action/setFilterAction';
import { useFilterStore } from '../../../lib/filterProject/store/filters';

interface SearchHeaderProps {
  setKeyword: (keyword:string) => void
}

export default function SearchHeader({ setKeyword } : SearchHeaderProps) {
  const router = useRouter();
  const { filters, dispatch } = useFilterStore();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  });

  return (
    <header className="fixed w-full bg-white shadow h-14 z-20">
      <div className="max-w-lg m-auto pr-4 flex justify-between items-stretch h-full">
        <button type="button" className="px-4 text-blue-700" onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <input
          ref={searchInputRef}
          value={filters.keyword || ''}
          type="text"
          placeholder="Ketik untuk mencari proyek atau gunakan filter"
          className="flex-1 px-4 py-2 text-sm focus:outline-none"
          onChange={(e) => {
            setKeyword(e.target.value);
            dispatch({
              type: SetFilterActionType.SET_KEYWORD,
              payload: {
                keyword: e.target.value,
              },
            });
          }}
        />
      </div>
    </header>
  );
}
