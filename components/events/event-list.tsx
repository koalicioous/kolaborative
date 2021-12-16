import { useState } from 'react';
import useSWR from 'swr';
import { TextField } from '@mui/material';
import EventListItem from './event-list-item';
import { Event } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Event>(field).select('name, projects(name)');
  return data;
};

export default function EventList() {
  const { data: events } = useSWR('events', filterFetcher);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <section className="max-w-lg mx-auto bg-white p-3 h-full">
      <h1 className="mb-3 text-sm md:text-lg font-medium text-blue-600">Proyek Berdasarkan Event yang Diikuti</h1>
      <TextField
        label="Cari event"
        fullWidth
        size="small"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="mt-4">
        {
            !keyword
              ? events?.sort(
                (a, b) => ((a.projects?.length || 0) > (b.projects?.length || 0) ? -1 : 1),
              ).map((event) => (
                <EventListItem
                  key={event.name}
                  name={event.name}
                  projects={event.projects?.length}
                />
              ))
              : events?.filter((event) => (
                event.name.toLocaleLowerCase()
                  .includes(keyword.toLocaleLowerCase())))
                .sort(
                  (a, b) => ((a.projects?.length || 0) > (b.projects?.length || 0) ? -1 : 1),
                ).map((event) => (
                  <EventListItem
                    key={event.name}
                    name={event.name}
                    projects={event.projects?.length}
                  />
                ))
        }
      </div>
    </section>
  );
}
