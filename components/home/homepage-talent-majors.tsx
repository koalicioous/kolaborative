import Link from 'next/link';
import Image from 'next/image';
import GraduationHatSolid from '../ui/icons/solid/graduation-hat';
import EllipsisIconSolid from '../ui/icons/solid/ellipsis';

export default function HomePageTalentMajors() {
  const MAJORS = [
    {
      name: 'Teknik Informatika',
      icon: '/informatika.svg',
      gradientFrom: '#277FFD',
      gradientTo: '#71ACFF',
    },
    {
      name: 'Manajemen',
      icon: '/manajemen.svg',
      gradientFrom: '#DA5697',
      gradientTo: '#E17DAE',
    },
    {
      name: 'Ilmu Kedokteran',
      icon: '/kedokteran.svg',
      gradientFrom: '#6C727F',
      gradientTo: '#9A9EA6',
    },
    {
      name: 'Arsitektur',
      icon: '/arsitektur.svg',
      gradientFrom: '#6369E9',
      gradientTo: '#9397EF',
    },
    {
      name: 'Ilmu Ekonomi',
      icon: '/ekonomi.svg',
      gradientFrom: '#8362EE',
      gradientTo: '#A289F1',
    },
    {
      name: 'Teknik Industri',
      icon: '/industri.svg',
      gradientFrom: '#55B585',
      gradientTo: '#A4C1B3',
    },
    {
      name: 'Psikologi',
      icon: '/psikologi.svg',
      gradientFrom: '#DD524C',
      gradientTo: '#E28E8A',
    },
    {
      name: 'Teknik Elektro',
      icon: '/elektro.svg',
      gradientFrom: '#E9A13B',
      gradientTo: '#F4C47F',
    },
  ];

  return (
    <div className="max-w-lg m-auto px-5 bg-white">
      <div className="flex items-center">
        <GraduationHatSolid className="w-8 h-8 mt-1 text-yellow-500" />
        <h2 className="ml-1 text-md md:text-xl font-bold text-blue-600">
          Proyek Berdasarkan Jurusan
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4 group">
        {
          MAJORS.map((major) => (
            <Link href="/" key={major.name}>
              <a
                className="transition-all ease-in-out duration-150 transform filter hover:scale-105 group-hover:opacity-50 py-2 px-2 md:px-4 flex items-center major hover:shadow-xl border-2 border-white text-center rounded-lg font-bold text-sm text-white"
                style={{ background: `linear-gradient(90deg, ${major.gradientFrom} 40.94%, ${major.gradientTo} 90.31%)` }}
              >
                <Image
                  src={major.icon}
                  width={16}
                  height={16}
                />
                <span className="ml-3 text-xs md:text-sm">
                  { major.name }
                </span>
              </a>
            </Link>
          ))
        }
      </div>
      <div className="mt-4 text-center">
        <Link href="/">
          <a className="text-blue-700 text-sm flex items-center justify-center">
            <EllipsisIconSolid className="w-8 h-8 text-blue-400 pt-2 pl-2" />
            <span>
              Lihat semua jurusan (131)
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
