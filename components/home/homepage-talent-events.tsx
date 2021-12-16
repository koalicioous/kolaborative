import Link from 'next/link';
import CalendarSolid from '../ui/icons/solid/calendar-icon';
import EllipsisIconSolid from '../ui/icons/solid/ellipsis';

export default function HomePageTalentEvents() {
  const EVENTS = [
    {
      name: 'Pekan Kreativitas Mahasiswa',
      image: './pkm-bg.jpeg',
    },
    {
      name: 'Gemastik 2021',
      image: '/gemastik-bg.jpeg',
    },
    {
      name: 'Kompetisi Bisnis Mahasiswa Nasional',
      image: '/kbmn-bg.jpeg',
    },
    {
      name: 'Konferensi Ilmiah',
      image: '/konferensi-bg.jpeg',
    },
  ];

  return (
    <div className="max-w-lg m-auto py-3 px-5 bg-white">
      <div className="flex items-center">
        <CalendarSolid className="w-6 h-6 text-yellow-500" />
        <h2 className="ml-2 text-md md:text-xl font-bold text-blue-600 pt-1">
          Event Seru untuk Diikuti!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3 group">
        {
            EVENTS.map((event) => (
              <Link key={event.name} href={{ pathname: '/search', query: { events: event.name } }}>
                <a
                  className="transition-all border transform filter group-hover:opacity-50 major hover:scale-105 hover:shadow-lg rounded-lg p-3 pb-12 text-white font-semibold"
                  style={{
                    background: `linear-gradient(45deg, #0f3493eb 0%, #164ddbd1 100%), url(${event.image})`,
                    backgroundSize: 'cover',
                  }}
                >
                  {event.name}
                </a>
              </Link>
            ))
        }
      </div>
      <div className="mt-4 text-center">
        <Link href="/events">
          <a className="text-blue-700 hover:bg-blue-50 rounded-md py-2 text-sm flex items-center justify-center">
            <EllipsisIconSolid className="w-8 h-8 text-blue-400 pt-2 pl-2" />
            <span>
              Lihat semua event (25+)
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
