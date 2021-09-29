import Link from 'next/link';

export default function TalentHomePageProjectTypes() {
  return (
    <div className="max-w-lg m-auto py-4 px-5 bg-white">
      <div className="p-4 bg-indigo-100 rounded-lg">
        <h2 className="text-sm font-bold text-indigo-700">
          Jenis Proyek Populer 🔥
        </h2>
        <ul className="grid grid-cols-3 gap-3 text-sm mt-3 -mx-6">
          <li className="text-center rounded-lg px-2 py-6 bg-indigo-900 text-white font-bold flex items-center justify-center">Pekan Kreativitas Mahasiswa</li>
          <li className="text-center rounded-lg px-2 py-6 bg-indigo-900 text-white font-bold flex items-center justify-center">Business Case Competition</li>
          <li className="text-center rounded-lg px-2 py-6 bg-indigo-900 text-white font-bold flex items-center justify-center">Hackathon</li>
        </ul>
        <div className="mt-2 text-center">
          <Link href="/">
            <a className="inline-block text-indigo-700 text-xs">
              Lihat semua jenis proyek (131)
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
