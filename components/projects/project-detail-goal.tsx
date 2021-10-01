/* eslint-disable react/no-unescaped-entities */
import { Project } from '../../lib/data/project';

interface ProjectDetailDetailProps {
  project: Project
}

export default function ProjectDetailGoal({ project }: ProjectDetailDetailProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      <h2 className="text-xs font-bold text-indigo-700">
        Project's Goal
      </h2>
      <p className="text-xs mt-2 leading-5">
        {project.goal}
      </p>
    </div>
  );
}
