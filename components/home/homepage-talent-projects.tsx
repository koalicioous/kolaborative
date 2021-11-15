import Image from 'next/image';
import ProjectItem from '../projects/project-item';

export default function HomePageTalentProjects() {
  return (
    <div className="max-w-lg m-auto px-5 py-4 border-t-2 bg-white">
      <div className="flex items-center">
        <Image
          src="/clock.svg"
          width={24}
          height={24}
        />
        <h2 className="ml-2 text-md md:text-xl font-bold text-blue-600">
          Deadline Pendaftaran Sebentar Lagi
        </h2>
      </div>
      <div>
        <ProjectItem className="mt-4" />
        <ProjectItem className="mt-4" />
        <ProjectItem className="mt-4" />
        <ProjectItem className="mt-4" />
        <ProjectItem className="mt-4" />
      </div>
    </div>
  );
}
