export default function HomePageTab() {
  return (
    <ul className="max-w-lg m-auto grid grid-cols-2 bg-white">
      <li>
        <button className="p-4 w-full text-center font-bold text-indigo-900 text-sm">
          Mencari Proyek
        </button>
      </li>
      <li>
        <button className="p-4 w-full text-center bg-indigo-100 text-indigo-900 text-sm">
          Mencari Talent
        </button>
      </li>
    </ul>
  )
}
