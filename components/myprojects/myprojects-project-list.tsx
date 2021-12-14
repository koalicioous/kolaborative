import { useEffect, useState } from 'react';
// import { NewProject } from '../../lib/newProject/data/project';
import supabase from '../../lib/supabase/client';
import ProjectItem from '../projects/project-item';

export default function ProjectList() {
  const [projects, setProjects] = useState<any[] | null>([]);
  useEffect(() => {
    (async () => {
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
    })();
  }, []);
  return (
    <section className="px-4">
      {
        projects && projects.length > 0
        && (
          projects.map((item) => (
            <ProjectItem
              key={item.projects.id}
              className=""
              data={item}
            />
          ))
        )
      }
    </section>
  );
}
