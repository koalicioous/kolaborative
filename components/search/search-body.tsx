import { useEffect, useState } from 'react';
import { useFilterStore } from '../../lib/filterProject/store/filters';
import { Major, Skill, Event } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';
import { Project } from '../../lib/newProject/data/project';
import ProjectItem from '../projects/project-item';

export default function SearchBody() {
  const { filters } = useFilterStore();
  const [projects, setProjects] = useState<Project[]|null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (
        Object.keys(filters).filter((item: string) => filters[item].length > 0).length > 0
        || filters.keyword.length > 2
      ) {
        try {
          setLoading(true);
          let queryParams = '*, events (name), project_requirements!inner(*, majors(*))';
          if (filters.skills.length > 0) queryParams = '*, events (name), project_requirements!inner(*, majors(*), skills!inner(*))';
          let query = supabase
            .from('projects')
            .select(queryParams);
          if (filters.skills.length > 0) query = query.in('project_requirements.skills.id', filters.skills.map((item: Skill) => item.id));
          if (filters.events.length > 0) query = query.in('event_id', filters.events.map((item: Event) => item.id));
          if (filters.majors.length > 0) query = query.in('project_requirements.major_id', filters.majors.map((item: Major) => item.id));
          if (filters.keyword.length > 0) {
            console.log('keyword: ', filters.keyword);
            query = query.ilike('name', `%${filters.keyword}%`);
          }

          const { data: results } = await query;
          setProjects(results);
        } finally {
          setLoading(false);
        }
      } else {
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
      }
    })();
  }, [filters]);

  return (
    <section className="max-w-lg mx-auto bg-white">
      {
        loading
        && (
          <section className="px-3">
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
          <section className="py-3 px-3">
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
    </section>
  );
}
