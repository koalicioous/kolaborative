import Link from 'next/link';
import { Chip } from '@mui/material';

interface MajorListItemProps {
  name: string,
  projects: number,
}

export default function MajorListItem({ name, projects }: MajorListItemProps) {
  return (
    <Link href={{ pathname: '/search', query: { majors: name } }}>
      <a className="transition-all border border-gray-100 hover:shadow hover:border-blue-200 group rounded-md p-3 mb-2 flex justify-between items-center">
        <h1 className="transition-all text-md font-medium text-gray-700 group-hover:text-blue-800">{name}</h1>
        <Chip label={`${projects} Proyek`} size="small" />
      </a>
    </Link>
  );
}