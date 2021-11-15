import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Project } from '../../lib/data/project';
import ChevronDownIcon from '../ui/icons/outline/chevron-down-icon';

interface ProjectDetailTalentProps {
  project: Project
}

export default function ProjectDetailTalent({ project }: ProjectDetailTalentProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="max-w-lg mx-auto bg-white border-t-2">
      <button type="button" className="w-full py-4 px-5" onClick={() => setIsExpanded(!isExpanded)}>
        <h2 className="text-xs font-bold text-indigo-700 flex items-center justify-between">
          Required Talents
          <ChevronDownIcon className={clsx(
            'h-4 w-4 inline-block transition animation-all ease-in-out duration-300',
            { 'rotate-180': isExpanded },
          )}
          />
        </h2>
      </button>
      <div
        className={clsx(
          'transition animation-all',
          { isExpanded: 'px-5 pb-4', 'h-0 overflow-hidden': !isExpanded },
        )}
      >
        asdasd
      </div>
    </div>
  );
}
