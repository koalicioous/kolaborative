import { Project } from '../../lib/newProject/data/project';

interface ProjectDetailDurationProps {
  project: Project
}

export default function ProjectDetailDuration({ project }: ProjectDetailDurationProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      <h2 className="text-xs font-bold text-indigo-700">
        Project Duration
      </h2>
      <p className="text-xs mt-2 leading-5">
        {project.duration}
      </p>
    </div>
  );
}
