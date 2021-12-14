import { Goal } from '../../lib/newProject/data/project';

interface ProjectDetailDetailProps {
  goals: Goal[]
}

export default function ProjectDetailGoal({ goals }: ProjectDetailDetailProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      <h2 className="text-xs sm:text-base font-bold text-blue-700">
        Projects Goals
      </h2>
      <div className="text-xs sm:text-base mt-2">
        {
          goals.length > 0
            ? (
              <ol className="list-disc ml-5">
                {
                goals.map((item: Goal) => (
                  <li className="my-1" key={item.id}>
                    { item.description }
                  </li>
                ))
              }
              </ol>
            ) : (
              <div className="p-2 rounded-sm bg-gray-100 text-center text-gray-400">
                Data tidak tersedia
              </div>
            )
        }
      </div>
    </div>
  );
}
