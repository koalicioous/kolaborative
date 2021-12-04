import Link from 'next/link';
import BrainIconSolid from '../ui/icons/solid/brain-icon';
import EllipsisIconSolid from '../ui/icons/solid/ellipsis';

export default function HomePageTalentSkills() {
  const SKILLS = [
    'Web Programming', 'Menulis Laporan', 'SPSS', 'Menggambar Teknik', 'Desain Mesin Mekanik', 'Financial Planning', 'UI/UX Design', 'Figma', 'Resource Planning',
  ];

  return (
    <div className="max-w-lg m-auto py-3 px-5 bg-white">
      <div className="flex items-center">
        <BrainIconSolid className="w-8 h-8 mt-2 text-yellow-500" />
        <h2 className="text-md md:text-xl font-bold text-blue-600">
          Proyek Membutuhkan Keahlianmu
        </h2>
      </div>
      <ul className="mt-4 flex flex-wrap">
        {
          SKILLS.map((skill) => (
            <Link href={{ pathname: '/search', query: { skills: skill } }} key={skill}>
              <a className="transition-all text-xs hover:shadow-lg border-blue-50 border hover:border-blue-300 sm:text-md bg-blue-100 text-blue-500 mr-2 mb-2 px-4 py-2 rounded-full font-medium" key={skill}>{ skill }</a>
            </Link>
          ))
        }
      </ul>
      <div className="mt-3 text-center">
        <Link href="/skills">
          <a className="text-blue-700 hover:bg-blue-50 rounded-md py-2 text-sm flex items-center justify-center">
            <EllipsisIconSolid className="w-8 h-8 text-blue-400 pt-2 pl-2" />
            <span>
              Lihat semua skill (99+)
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
