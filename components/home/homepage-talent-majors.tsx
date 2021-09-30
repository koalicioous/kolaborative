import Link from 'next/link';

export default function HomePageTalentMajors() {
  return (
    <div className="max-w-lg m-auto px-5 bg-white">
      <h2 className="text-sm font-bold text-indigo-700">
        📝 Lihat proyek di jurusan kuliahmu
      </h2>
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
    </div>
  );
}
