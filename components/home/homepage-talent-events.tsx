import Link from 'next/link';
import CalendarSolid from '../ui/icons/solid/calendar-icon';
import EllipsisIconSolid from '../ui/icons/solid/ellipsis';

export default function HomePageTalentEvents() {
  const EVENTS = [
    'Pekan Kreativitas Mahasiswa',
    'Gemastik 2021',
    'Kompetisi Bisnis Mahasiswa Indonesia',
    'Konferensi Ilmiah',
  ];

  return (
    <div className="max-w-lg m-auto py-3 px-5 bg-white">
      <div className="flex items-center">
        <CalendarSolid className="w-6 h-6 text-yellow-500" />
        <h2 className="ml-2 text-md md:text-xl font-bold text-blue-600 pt-1">
          Event Seru untuk Diikuti!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {
            EVENTS.map((event) => (
              <div key={event} className="border border-blue-200 rounded-lg p-3 pb-16 text-white font-semibold" style={{ background: 'url(https://unsplash.com/random), linear-gradient(45deg, #3365E3 0%, #6B8EE7 100%)' }}>
                {event}
              </div>
            ))
        }
      </div>
      <div className="mt-4 text-center">
        <Link href="/">
          <a className="flex items-center justify-center text-blue-700 text-sm">
            <EllipsisIconSolid className="w-8 h-8 text-blue-400 pt-2 pl-2" />
            Lihat semua Event
          </a>
        </Link>
      </div>
    </div>
  );
}
