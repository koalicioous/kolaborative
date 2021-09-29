import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

interface SearchHeaderProps {
  keyword: string,
  setKeyword: (keyword: string) => void
}

export default function SearchHeader({keyword, setKeyword}: SearchHeaderProps) {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleKeywordChange = (event: React.FormEvent<HTMLInputElement>) => {
    return setKeyword(event.currentTarget.value)
  }

  useEffect(() => {
    searchInputRef.current?.focus();
  })
  
  return (
    <header className="fixed w-full bg-white shadow h-14">
      <div className="max-w-lg m-auto pr-4 flex justify-between items-stretch h-full">
        <button className="px-4" onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <input
          ref={searchInputRef}
          value={keyword}
          type="text"
          placeholder={'Coba cari "PKM"'}
          className="flex-1 px-4 py-2 text-sm focus:outline-none"
          onChange={handleKeywordChange}
        />
      </div>
    </header>
  )
}
