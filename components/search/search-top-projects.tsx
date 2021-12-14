import { useEffect, useState } from 'react';
import { Event, Major, Skill } from '../../lib/filterProject/data/filters';
import { useFilterStore } from '../../lib/filterProject/store/filters';
// import { Project } from '../../lib/newProject/data/project';
import supabase from '../../lib/supabase/client';
import ProjectItem from '../projects/project-item';
// import ProjectItem from '../projects/project-item';

export default function SearchTopProjects() {
  const { filters } = useFilterStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<any[]|null>();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let query = supabase
          .from('projects')
          .select(`
          *,
          events (
            name
          ),
          project_requirements!inner(
            *,
            majors (
              name
            ),
            skills (
              *
            ))`);

        if (filters.skills?.length > 0) query = query.in('project_requirements.skills.id', filters.skills.map((item:Skill) => item.id));
        if (filters.majors?.length > 0) query = query.in('project_requirements.major_id', filters.majors.map((item:Major) => item.id));
        if (filters.events?.length > 0) query = query.in('event_id', filters.events.map((item:Event) => item.id));

        const { data: results } = await query;
        console.log(filters);
        setProjects(results);
      } finally { setLoading(false); }
    })();
  }, [filters.majors, filters.events, filters.skills]);

  return (
    <section className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      {/* <h2 className="text-sm font-bold text-blue-700">
        { filters.keyword ? `Hasil pencarian '${filters.keyword}'` : '🔥 Proyek terbaru'}
      </h2> */}
      {
        loading
          ? (
            <>
              <div className="border shadow border-gray-50 rounded-md p-4 w-full mx-auto mt-2">
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
            </>
          ) : (
            projects && projects.length > 0
            && (
              projects.map((item) => (
                <div className="my-3" key={item.id}>
                  <ProjectItem
                    key={item.id}
                    className=""
                    data={item}
                  />
                </div>
              ))
            )
          )
        }
    </section>
  );
}
