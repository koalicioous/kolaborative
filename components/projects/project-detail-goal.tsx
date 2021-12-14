import { Goal } from '../../lib/newProject/data/project';

interface ProjectDetailDetailProps {
  goals: Goal[]
}

export default function ProjectDetailGoal({ goals }: ProjectDetailDetailProps) {
  return (
    <div className="max-w-lg mx-auto bg-white px-5 py-4 border-t-2">
      <h2 className="text-xs font-bold text-blue-700">
        Projects Goals
      </h2>
      <div className="text-xs mt-2">
        {
          goals.length > 0
            ? (
              <ul>
                {
                goals.map((item: Goal) => (
                  <li>
                    { item.description }
                  </li>
                ))
              }
              </ul>
            ) : (
              ''
            )
        }
      </div>
    </div>
  );
}
