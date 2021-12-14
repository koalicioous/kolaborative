import { useEffect, useState } from 'react';
// import { NewProject } from '../../lib/newProject/data/project';
import supabase from '../../lib/supabase/client';
import ProjectItem from '../projects/project-item';

export default function ProjectList() {
  const [projects, setProjects] = useState<any[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const user = await supabase.auth.user();
        const { data } = await supabase
          .from('user_project')
          .select(`
            projects (
              *,
              events (
                name
              ),
              project_requirements (
                *,
                majors (
                  *
                )
              )
            )
          `)
          .eq('user_id', user?.id);
        setProjects(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <section className="px-4 py-1">
      {
        !loading
          ? (projects && projects.length > 0
        && (
          projects.map((item) => (
            <div className="my-3" key={item.projects.id}>
              <ProjectItem
                key={item.projects.id}
                className=""
                data={item.projects}
              />
            </div>
          ))
        ))
          : (
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
          )
      }
    </section>
  );
}
