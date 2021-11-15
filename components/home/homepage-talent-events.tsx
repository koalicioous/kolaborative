import Image from 'next/image';
import Link from 'next/link';

export default function HomePageTalentEvents() {
  const EVENTS = [
    'Pekan Kreativitas Mahasiswa',
    'Gemastik 2021',
    'Kompetisi Bisnis Mahasiswa Indonesia',
    'Konferensi Ilmiah',
  ];

  return (
    <div className="max-w-lg m-auto py-4 px-5 bg-white">
      <div className="flex items-center">
        <Image
          src="/calendar.svg"
          width={24}
          height={24}
        />
        <h2 className="ml-2 text-md md:text-xl font-bold text-blue-600">
          Event Seru untuk Diikuti!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {
            EVENTS.map((event) => (
              <div className="border border-blue-200 rounded-lg p-3 pb-16 text-white font-semibold" style={{ background: 'url(https://unsplash.com/random), linear-gradient(45deg, #3365E3 0%, #6B8EE7 100%);' }}>
                {event}
              </div>
            ))
        }
      </div>
      <div className="mt-4 text-center">
        <Link href="/">
          <a className="inline-block text-blue-700 text-sm">
            Lihat semua Event
          </a>
        </Link>
      </div>
    </div>
  );
}
