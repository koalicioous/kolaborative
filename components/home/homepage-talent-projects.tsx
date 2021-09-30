import ProjectItem from '../projects/project-item';

export default function HomePageTalentProjects() {
  return (
    <div className="max-w-lg m-auto px-5 py-4 border-t-2 bg-white">
      <h2 className="text-sm font-bold text-indigo-700">
        Deadline Sebentar Lagi ⏱
      </h2>
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
