import Link from 'next/link';
import BrainIconSolid from '../ui/icons/solid/brain-icon';

export default function HomePageTalentSkills() {
  const SKILLS = [
    'Web Programming', 'Menulis Laporan', 'SPSS', 'Menggambar Teknik', 'Desain Mesin Mekanik', 'Financial Planning', 'UI/UX Design', 'Figma', 'Resource Planning',
  ];

  return (
    <div className="max-w-lg m-auto py-4 px-5 bg-white">
      <div className="flex items-center">
        <BrainIconSolid className="w-8 h-8 mt-2 text-yellow-500" />
        <h2 className="text-md md:text-xl font-bold text-blue-600">
          Proyek Membutuhkan Keahlianmu
        </h2>
      </div>
      <ul className="mt-4 flex flex-wrap">
        {
          SKILLS.map((skill) => (
            <li className="text-xs sm:text-md bg-blue-100 text-blue-500 mr-2 mb-2 px-4 py-2 rounded-full font-medium" key={skill}>{ skill }</li>
          ))
        }
      </ul>
      <div className="mt-3 text-center">
        <Link href="/">
          <a className="inline-block text-blue-700 text-sm">
            Lihat semua keahlian
          </a>
        </Link>
      </div>
    </div>
  );
}
