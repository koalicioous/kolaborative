import Link from 'next/link';
import format from 'date-fns/format';
import { Talent } from '../../lib/newProject/data/project';

interface ProjectItemProps {
  className: string,
  data: any
}

export default function ProjectItem({ className, data }: ProjectItemProps) {
  return (
    <Link href={`/projects/${data.slug}`}>
      <a className={`p-3 shadow-md border border-blue-50 rounded-lg block ${className}`}>
        <div className="flex justify-between items-center">
          <span className="text-xs px-4 py-1 bg-gray-200 rounded-md truncate capitalize">{ data.events.name }</span>
          <span className="text-xs hidden sm:block">{ format(new Date(data.registration_deadline), 'dd MMMM yyyy') }</span>
        </div>
        <h3 className="mt-2 text-sm font-bold text-blue-700 capitalize">
          { data.name }
        </h3>
        <p className="mt-5 text-xs whitespace-pre">
          Mencari
          <b className="mx-1">
            {`${data.project_requirements.map((item: Talent) => item.amount).reduce((previousValue: number, currentValue: number) => previousValue + currentValue)} Talenta`}
          </b>
          dari
          <b className="ml-1 truncate">
            {
              data.project_requirements.slice(0, 2)
                .map((item: any) => (
                  item.majors.name
                )).join(', ')
              }
            {
                data.project_requirements.length > 2
                  ? ', dsb.'
                  : ''
              }
          </b>
        </p>
      </a>
    </Link>
  );
}
