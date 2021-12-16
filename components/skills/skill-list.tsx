import { useState } from 'react';
import useSWR from 'swr';
import { TextField } from '@mui/material';
import SkillListItem from './skill-list-item';
import { Skill } from '../../lib/filterProject/data/filters';
import supabase from '../../lib/supabase/client';

const filterFetcher = async (field: string) => {
  const { data } = await supabase.from<Skill>(field).select('name, project_requirements(projects(id))');
  return data;
};

export default function SkillList() {
  const { data: skills } = useSWR('skills', filterFetcher);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <section className="max-w-lg mx-auto bg-white p-3 h-full">
      <h1 className="mb-3 text-sm md:text-lg font-medium text-blue-600">Proyek Berdasarkan Skill yang Dibutuhkan</h1>
      <TextField
        label="Cari Skill"
        fullWidth
        size="small"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="mt-4">
        {
            !keyword
              ? skills?.sort(
                (a, b) => (a.project_requirements.length > b.project_requirements.length ? -1 : 1),
              ).map((skill) => (
                <SkillListItem
                  key={skill.name}
                  name={skill.name}
                  projects={skill.project_requirements.length}
                />
              ))
              : skills?.filter((item) => (
                item.name.toLocaleLowerCase()
                  .includes(keyword.toLocaleLowerCase())))
                .sort(
                  (a, b) => (
                    a.project_requirements.length > b.project_requirements.length ? -1 : 1
                  ),
                ).map((skill) => (
                  <SkillListItem
                    key={skill.name}
                    name={skill.name}
                    projects={skill.project_requirements.length}
                  />
                ))
        }
      </div>
    </section>
  );
}
