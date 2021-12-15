import { useEffect } from 'react';
import { useFilterStore } from '../../lib/filterProject/store/filters';
import { Event, Major } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

export default function SearchBody() {
  const { filters } = useFilterStore();
  console.log(filters);

  useEffect(() => {
    (async () => {
      let query = supabase
        .from('projects')
        .select(`
          *,
          project_requirements!inner(*) (
            majors (
              *
            )
          )
        `);
      if (filters.events && filters.events.length > 0) query = query.in('event_id', filters.events.map((item: Event) => item.id));
      if (filters.majors && filters.majors.length > 0) query = query.in('project_requirements.major_id', filters.majors.map((item: Major) => item.id));
      // if (filters.skills && filters.skills.length > 0) query = query.
      const { data: results } = await query;
      console.log(results);
    })();
  }, [filters.majors, filters.events, filters.skills]);

  return (
    <section className="max-w-lg bg-white mx-auto">
      a
    </section>
  );
}
