import Link from 'next/link';

export default function MyProjectsCreateSection() {
  return (
    <div className="max-w-lg mx-auto px-5 py-4 bg-blye-50 flex flex-col">
      <h1 className="font-semibold text-blue-700">
        Miliki lebih banyak waktu untuk berinovasi dan berkarya.
      </h1>
      <p className="mt-2 text-xs">
        Dapatkan talenta yang tepat untuk proyekmu
      </p>
      <Link href="/create-project">
        <a className="transition-all bg-blue-600 text-white w-full p-2 mt-4 text-center rounded-md hover:bg-blue-700">
          + Buat Proyek Baru
        </a>
      </Link>
    </div>
  );
}
