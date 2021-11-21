import { Project } from '../../lib/newProject/data/project';

interface ProjectDetailDescriptionProps {
  project: Project
}

export default function ProjectDetailDescription({ project }: ProjectDetailDescriptionProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4">
      <h2 className="text-xs font-bold text-indigo-700">
        Description
      </h2>
      <p className="text-xs mt-2 leading-5">
        {project.description}
      </p>
    </div>
  );
}
