import { useFilterStore } from '../../lib/filterProject/store/filters';
// import ProjectItem from '../projects/project-item';

export default function SearchTopProjects() {
  const { filters } = useFilterStore();
  return (
    <section className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      <h2 className="text-sm font-bold text-blue-700">
        { filters.keyword ? `Hasil pencarian '${filters.keyword}'` : '🔥 Proyek terbaru'}
      </h2>
      {/* <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" />
      <ProjectItem className="mt-4" /> */}
    </section>
  );
}
