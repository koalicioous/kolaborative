import Link from 'next/link';

export default function HomePageOwnerTopTalent() {
  return (
    <div className="max-w-lg mx-auto bg-white border-t-2 px-5 py-4">
      <h2 className="text-sm font-bold text-indigo-700">
        Rekrut Top Talent 🔥
      </h2>

      <p className="mt-2 text-xs">
        Top Talent di Jurusan
      </p>
      <ul className="grid grid-cols-2 gap-3 mt-4">
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Informatika</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Ilmu Ekonomi</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Ilmu Komunikasi</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Sastra Inggris</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Arsitektur</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Statistika</li>
      </ul>
      <div className="mt-4 text-center">
        <Link href="/">
          <a className="inline-block text-indigo-700 text-xs">
            Lihat semua jurusan (131)
          </a>
        </Link>
      </div>

      <p className="mt-4 text-xs">
        The Best at Their Skill
      </p>
      <ul className="grid grid-cols-2 gap-3 mt-4">
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Web Programming</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Desain Grafis</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Mobile Application</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Presentasi</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">Menulis</li>
        <li className="p-3 flex items-center justify-center shadow-md border text-center rounded-lg font-bold text-sm">IoT</li>
      </ul>
      <div className="mt-4 text-center">
        <Link href="/">
          <a className="inline-block text-indigo-700 text-xs">
            Lihat semua skill (131)
          </a>
        </Link>
      </div>
    </div>
  );
}
