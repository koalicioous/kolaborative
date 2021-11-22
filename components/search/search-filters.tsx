import {
  SetStateAction, Dispatch, useEffect,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faGraduationCap, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  InitialMajors,
  InitialSkills,
  InitialEvents,
  FilterProp,
  FilterModalMode,
  Major,
  Skill,
  Event,
} from '../../lib/filterProject/data/filters';
import { useFilterStore } from '../../lib/filterProject/store/filters';
import { SetFilterActionType } from '../../lib/filterProject/action/setFilterAction';

const FILTER = [
  {
    id: FilterModalMode.Jurusan,
    name: 'Jurusan',
    items: InitialMajors,
    icon: faGraduationCap,
  },
  {
    id: FilterModalMode.Keahlian,
    name: 'Keahlian',
    items: InitialSkills,
    icon: faBrain,
  },
  {
    id: FilterModalMode.Event,
    name: 'Event',
    items: InitialEvents,
    icon: faCalendarAlt,
  },
];

interface SearchFilterProps {
    openModal: Dispatch<SetStateAction<FilterProp>>,
    query: any
}

export default function SearchFilter({ openModal, query } : SearchFilterProps) {
  const { filters, dispatch } = useFilterStore();
  const activeClass: string = 'bg-blue-600 text-white hover:bg-blue-700 font-semibold';
  const idleClass: string = 'bg-white hover:bg-blue-600 text-blue-600';

  const determineActionType = (parameter: string) => {
    switch (parameter) {
      case FilterModalMode.Jurusan:
        return SetFilterActionType.SET_MAJORS;
      case FilterModalMode.Keahlian:
        return SetFilterActionType.SET_SKILLS;
      case FilterModalMode.Event:
        return SetFilterActionType.SET_EVENTS;
      default:
        return SetFilterActionType.RESET_FILTERS;
    }
  };

  useEffect(() => {
    (() => {
      if (query) {
        const parameters = Object.keys(query);
        parameters.map((parameter: string) => {
          const filterProperty = FILTER.find((filter) => filter.id === parameter);
          if (filterProperty) {
            switch (query[parameter] instanceof Array) {
              case false:
                return dispatch({
                  type: determineActionType(parameter),
                  payload: {
                    [parameter]: [filterProperty.items.find(
                      (item) => item.name.toLowerCase() === String(query[parameter]),
                    )].filter((item) => item !== undefined),
                  },
                });
              case true:
                return dispatch({
                  type: determineActionType(parameter),
                  payload: {
                    [parameter]: filterProperty.items.filter((item: Major | Skill | Event) => {
                      if (query[parameter].find(
                        (target: string) => item.name.toLowerCase() === target.toLowerCase(),
                      )) return true;
                      return false;
                    }),
                  },
                });
              default:
                return true;
            }
          }
          return true;
        });
      }
    })();
  }, [query]);

  return (
    <section className="max-w-lg mx-auto px-3 py-3 mt-14 bg-white flex overflow-x-auto">
      {
          FILTER.map((filter) => (
            <button
              type="button"
              key={filter.name}
              className={`transition-all mr-2 flex-grow border border-blue-600 hover:text-white hover:shadow-lg font-semibold rounded-lg py-2 flex items-center justify-start px-5 ${Object.keys(filters).includes(filter.id) && filters[filter.id].length > 0 ? activeClass : idleClass}`}
              onClick={() => openModal({
                visible: true, data: filter.items, title: filter.name, mode: filter.id,
              })}
            >
              <div className="w-8">
                <FontAwesomeIcon icon={filter.icon} className="text-blue-300" />
              </div>
              <span className="ml-2 flex items-center justify-between w-full">
                {filter.name}
                {Object.keys(filters).includes(filter.id)
                && filters[filter.id].length > 0
                && (
                  <div className="w-6 h-6 text-sm bg-blue-500 rounded-full flex items-center justify-center ml-2">
                    {filters[filter.id].length}
                  </div>
                )}
              </span>
            </button>
          ))
        }
    </section>
  );
}
