import { useState } from 'react';
import useSWR from 'swr';
import { TextField } from '@mui/material';
import MajorListItem from './major-list-item';
import { Major } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Major>(field).select('name, projects (name)');
  return data;
};

export default function MajorList() {
  const { data: majors } = useSWR('majors', filterFetcher);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <section className="max-w-lg mx-auto bg-white p-3 h-full">
      <h1 className="mb-3 text-sm md:text-lg font-medium text-blue-600">Proyek Berdasarkan Jurusan yang Dibutuhkan</h1>
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
              ? majors?.sort(
                (a, b) => ((a.projects?.length || 0) > (b.projects?.length || 0) ? -1 : 1),
              ).map((major) => (
                <MajorListItem
                  key={major.name}
                  name={major.name}
                  projects={major.projects?.length}
                />
              ))
              : majors?.filter((item) => (
                item.name.toLocaleLowerCase()
                  .includes(keyword.toLocaleLowerCase())))
                .sort(
                  (a, b) => ((a.projects?.length || 0) > (b.projects?.length || 0) ? -1 : 1),
                ).map((major) => (
                  <MajorListItem
                    key={major.name}
                    name={major.name}
                    projects={major.projects?.length}
                  />
                ))
        }
      </div>
    </section>
  );
}
