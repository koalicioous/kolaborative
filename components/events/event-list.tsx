import { useState } from 'react';
import useSWR from 'swr';
import { TextField } from '@mui/material';
import EventListItem from './event-list-item';
import { Event } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Event>(field).select('*');
  return data;
};

export default function EventList() {
  const { data: majors } = useSWR('events', filterFetcher);
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
              ? majors?.sort((a, b) => (a.name > b.name ? 1 : -1)).map((major) => (
                <EventListItem key={major.name} name={major.name} projects={10} />
              ))
              : majors?.filter((item) => (
                item.name.toLocaleLowerCase()
                  .includes(keyword.toLocaleLowerCase())))
                .sort((a, b) => (a.name > b.name ? 1 : -1)).map((major) => (
                  <EventListItem key={major.name} name={major.name} projects={10} />
                ))
        }
      </div>
    </section>
  );
}
