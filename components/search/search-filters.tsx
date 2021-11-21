import { SetStateAction, Dispatch } from 'react';
import {
  InitialMajors,
  InitialSkills,
  InitialEvents,
  FilterProp,
  FilterModalMode,
} from '../../lib/filterProject/data/filters';
import { useFilterStore } from '../../lib/filterProject/store/filters';

const FILTER = [
  {
    id: FilterModalMode.Jurusan,
    name: 'Jurusan',
    items: InitialMajors,
  },
  {
    id: FilterModalMode.Keahlian,
    name: 'Keahlian',
    items: InitialSkills,
  },
  {
    id: FilterModalMode.Event,
    name: 'Event',
    items: InitialEvents,
  },
];

interface SearchFilterProps {
    openModal: Dispatch<SetStateAction<FilterProp>>
}

export default function SearchFilter({ openModal } : SearchFilterProps) {
  const { filters } = useFilterStore();
  const activeClass: string = 'bg-blue-600 text-white hover:bg-blue-700 font-semibold';
  const idleClass: string = 'bg-white hover:bg-blue-600 text-blue-600';
  return (
    <section className="max-w-lg mx-auto p-3 mt-14 bg-white grid grid-cols-3 gap-2">
      {
          FILTER.map((filter) => (
            <button
              type="button"
              key={filter.name}
              className={`transition-all border border-blue-600 hover:text-white font-semibold rounded-lg py-1 flex items-center justify-center ${Object.keys(filters).includes(filter.id) ? activeClass : idleClass}`}
              onClick={() => openModal({
                visible: true, data: filter.items, title: filter.name, mode: filter.id,
              })}
            >
              <span className="ml-1">
                {`${filter.name}${Object.keys(filters).includes(filter.id) ? ` | ${filters[filter.id].length}` : ''}`}
              </span>
            </button>
          ))
      }
    </section>
  );
}
