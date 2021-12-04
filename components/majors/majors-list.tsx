import { useState } from 'react';
import useSWR from 'swr';
import { TextField } from '@mui/material';
import MajorListItem from './major-list-item';
import { Major } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Major>(field).select('*');
  return data;
};

export default function MajorList() {
  const { data: majors } = useSWR('majors', filterFetcher);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <section className="max-w-lg mx-auto bg-white p-3 h-full">
      <TextField
        label="Cari jurusan"
        fullWidth
        size="small"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="mt-4">
        {
            !keyword
              ? majors?.sort((a, b) => (a.name > b.name ? 1 : -1)).map((major) => (
                <MajorListItem key={major.name} name={major.name} projects={10} />
              ))
              : majors?.filter((item) => (
                item.name.toLocaleLowerCase()
                  .includes(keyword.toLocaleLowerCase())))
                .sort((a, b) => (a.name > b.name ? 1 : -1)).map((major) => (
                  <MajorListItem key={major.name} name={major.name} projects={10} />
                ))
        }
      </div>
    </section>
  );
}
