import Link from 'next/link'

const MainHeader = () => {
  return (
    <header className="w-full bg-indigo-700">
      <div className="px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-white text-lg">
            Kolaborative
            <span className="text-yellow-400 text-3xl leading-3">
              .
            </span>
          </a>
        </Link>
        <Link href="/search">
          <a className="ml-4 flex-1 max-w-sm relative">
            <input type="text" placeholder={'Coba cari "Business Case Competition"'} className="rounded-full w-full pl-4 pr-8 py-2 text-xs transition bg-indigo-300 text-indigo-900 placeholder-indigo-900 hover:bg-white" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-indigo-900 inset-y-0 right-2 my-auto" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default MainHeader