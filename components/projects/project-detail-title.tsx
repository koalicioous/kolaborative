import ClockIconSolid from '../ui/icons/solid/clock-icon';
import UserIconSolid from '../ui/icons/solid/user-icon';

interface ProjectDetailTitleProps {
  title: string,
  event: string,
}

export default function ProjectDetailTitle({ title, event }: ProjectDetailTitleProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4">
      <div className="flex sm:items-center sm:justify-between">
        <p className="text-xs px-2 py-1 bg-gray-200 rounded-md truncate">{ event }</p>
      </div>
      <h1 className="my-3 text-xl sm:text-3xl text-blue-700 font-bold">
        {title}
      </h1>
      <p className="text-xs flex items-center flex-wrap">
        <span className="mt-2 mr-5 flex items-center">
          <UserIconSolid className="h-4 w-4 mr-2 inline-block" />
          Fayruz Rahma
        </span>
        <span className="mt-2 flex items-center">
          <ClockIconSolid className="h-4 w-4 mr-2 inline-block" />
          Fayruz Rahma
        </span>
      </p>
      <p className="mt-3 sm:mt-4 text-xs sm:text-base">Universitas Islam Indonesia</p>
    </div>
  );
}
