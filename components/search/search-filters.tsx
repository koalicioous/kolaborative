import { SetStateAction, Dispatch } from 'react';
import {
  InitialMajors,
  InitialSkills,
  InitialEvents,
  FilterProp,
} from '../../lib/filterProject/data/filters';

const FILTER = [
  {
    name: 'Jurusan',
    items: InitialMajors,
  },
  {
    name: 'Keahlian',
    items: InitialSkills,
  },
  {
    name: 'Event',
    items: InitialEvents,
  },
];

interface SearchFilterProps {
    openModal: Dispatch<SetStateAction<FilterProp>>
}

export default function SearchFilter({ openModal } : SearchFilterProps) {
  return (
    <section className="max-w-lg mx-auto p-3 mt-14 bg-white grid grid-cols-3 gap-2">
      {
          FILTER.map((filter) => (
            <button
              type="button"
              key={filter.name}
              className="transition-all border border-blue-600 hover:bg-blue-500 text-blue-600 hover:text-white font-semibold rounded-lg py-1 flex items-center justify-center"
              onClick={() => openModal({ visible: true, data: filter.items, title: filter.name })}
            >
              <span className="ml-1">
                {filter.name}
              </span>
            </button>
          ))
      }
    </section>
  );
}
