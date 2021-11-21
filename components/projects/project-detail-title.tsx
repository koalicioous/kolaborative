import { Project } from '../../lib/newProject/data/project';
import ClockIconSolid from '../ui/icons/solid/clock-icon';
import UserIconSolid from '../ui/icons/solid/user-icon';

interface ProjectDetailTitleProps {
  project: Project
}

export default function ProjectDetailTitle({ project }: ProjectDetailTitleProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4">
      <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">Penelitian</span>
      <span className="ml-4 text-xs">Universitas Islam Indonesia</span>
      <h1 className="mt-4 text-indigo-700 font-bold">
        {project.name}
      </h1>
      <p className="text-xs flex items-center flex-wrap">
        <span className="mt-2 mr-5 flex items-center">
          <UserIconSolid className="h-4 w-4 mr-2 inline-block" />
          Fayruz Rahma
        </span>
        <span className="mt-2 flex items-center">
          <ClockIconSolid className="h-4 w-4 mr-2 inline-block" />
          Fayruz Rahma
        </span>
      </p>
    </div>
  );
}
