import { useEffect, useState } from 'react';
import { Project } from '../../lib/newProject/data/project';
import ClockIconSolid from '../ui/icons/solid/clock-icon';
import supabase from '../../lib/supabase/client';
import ProjectItem from '../projects/project-item';

export default function HomePageTalentProjects() {
  const [projects, setProjects] = useState<Project[]|null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data: results } = await supabase
          .from('projects')
          .select('*, events (name), project_requirements!inner(*, majors(*))')
          .range(0, 5);
        setProjects(results);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="max-w-lg m-auto px-5 py-4 border-t-2 bg-white">
      <div className="flex items-center">
        <ClockIconSolid className="w-8 h-8 text-yellow-400" />
        <h2 className="ml-2 text-md md:text-xl font-bold text-blue-600">
          Deadline Pendaftaran Sebentar Lagi
        </h2>
      </div>
      {
        loading
        && (
          <section className="mt-2">
            <div className="border shadow border-gray-50 rounded-md p-4 w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-100 h-10 w-10" />
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-gray-100 rounded" />
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-gray-100 rounded col-span-2" />
                      <div className="h-2 bg-gray-100 rounded col-span-1" />
                    </div>
                    <div className="h-2 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow border-gray-50 rounded-md p-4 w-full mx-auto mt-3">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-100 h-10 w-10" />
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-gray-100 rounded" />
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-gray-100 rounded col-span-2" />
                      <div className="h-2 bg-gray-100 rounded col-span-1" />
                    </div>
                    <div className="h-2 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }
      {
        !loading && projects && projects.length > 0
        && (
          <section className="py-3">
            {
              projects.map((item: Project) => (
                <div key={item.id} className="mb-2">
                  <ProjectItem
                    className=""
                    data={item}
                  />
                </div>
              ))
            }
          </section>
        )
      }
    </div>
  );
}
