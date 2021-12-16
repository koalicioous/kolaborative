import {
  SetStateAction,
  Dispatch,
  useEffect,
  useState,
} from 'react';
import { SetFilterActionType } from '../../lib/filterProject/action/setFilterAction';
import {
  FilterProp,
  Major,
  Skill,
  Event,
  FilterModalMode,
} from '../../lib/filterProject/data/filters';
import { useFilterStore } from '../../lib/filterProject/store/filters';

interface SearchFilterModalProps {
    closeModal: Dispatch<SetStateAction<FilterProp>>,
    title: string,
    data: any[],
    mode: FilterModalMode,
}

export default function SearchFilterModal({
  closeModal,
  data,
  title,
  mode,
}: SearchFilterModalProps) {
  const [filter, setFilter] = useState<any[]>([]);
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const [searchFilterKeyword, setSearchFilterKeyword] = useState<string>('');
  const [modalMode] = useState<FilterModalMode>(mode);
  const [dispatchType, setDispatchType] = useState<SetFilterActionType>(
    SetFilterActionType.RESET_FILTERS,
  );
  const { filters, dispatch } = useFilterStore();

  useEffect(() => {
    setActiveIds(filter.map((item) => item.id));
  }, [filter]);
  useEffect(() => {
    (() => {
      const BG = document.getElementById('background');
      BG?.addEventListener('click', () => {
        closeModal({
          visible: false, data: [], title: '', mode: modalMode,
        });
      });
      return BG?.removeEventListener('click', () => {
        closeModal({
          visible: false, data: [], title: '', mode: modalMode,
        });
      });
    })();
    (() => {
      const ids: string[] = filters[mode]
        ? [...filters[mode].map((item: Major | Skill | Event) => item.id)] : [];
      const activeFilters: Major[] | Skill[] | Event[] = data.filter(
        (item: any) => ids.includes(item.id),
      );
      return setFilter(activeFilters);
    })();
    (() => {
      switch (mode) {
        case FilterModalMode.Jurusan:
          return setDispatchType(SetFilterActionType.SET_MAJORS);
        case FilterModalMode.Keahlian:
          return setDispatchType(SetFilterActionType.SET_SKILLS);
        case FilterModalMode.Event:
          return setDispatchType(SetFilterActionType.SET_EVENTS);
        default:
          return setDispatchType(SetFilterActionType.RESET_FILTERS);
      }
    })();
  }, []);

  return (
    <>
      <div id="background" className="fixed top-0 w-screen h-screen z-30 bg-black bg-opacity-75" />
      <section className="fixed flex flex-col w-full bottom-0 max-w-lg mx-auto p-4 rounded-t-lg bg-white shadow-lg z-30" style={{ left: '50%', transform: 'translateX(-50%)', maxHeight: '50vh' }}>
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center">
            <h1 className="font-semibold text-blue-700 text-xl">
              Filter
              {` ${title}`}
            </h1>
            {
              filter.length > 0
              && (
              <div className="bg-blue-50 font-semibold text-blue-800 w-8 h-8 ml-3 rounded-full flex items-center justify-center">
                {filter.length}
              </div>
              )
            }
          </div>
          <button
            type="button"
            className="transition-all rounded-full hover:bg-gray-100 text-gray-500 flex items-centr py-1 px-3"
            onClick={() => {
              closeModal({
                visible: false, data: [], title: '', mode,
              });
            }}
          >
            <div className="transform rotate-45 font-bold">+</div>
            <span className="ml-2">Batal</span>
          </button>
        </div>
        <div className="overflow-auto pb-4">
          <div>
            <input
              type="text"
              name="filterKeyword"
              id="filterKeyword"
              placeholder={`Ketik ${title} yang kamu cari`}
              className="rounded-md border text-base p-3 w-full my-3"
              value={searchFilterKeyword}
              onChange={(e) => setSearchFilterKeyword(e.target.value)}
            />
          </div>
          <ul>
            {
              data.filter((item) => item.name.toLowerCase()
                .includes(searchFilterKeyword)).map((item) => (
                  <li key={item.id} className="my-2">
                    <label htmlFor={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        name={title}
                        id={item.id}
                        className="w-4 h-4"
                        value={item.id}
                        checked={activeIds.includes(item.id)}
                        onChange={(e) => {
                          switch (e.target.checked) {
                            case false:
                              return setFilter(
                                [...filter.filter(
                                  (removeTarget: any) => removeTarget.id !== item.id,
                                )],
                              );
                            case true:
                              return setFilter(
                                [...filter, item],
                              );
                            default:
                              return false;
                          }
                        }}
                      />
                      <span className="ml-2">{item.name}</span>
                    </label>
                  </li>
              ))
            }
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            className={`py-3 rounded-md ${filter.length > 0 ? 'text-blue-600 hover:bg-blue-50' : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setFilter([])}
            disabled={filter.length < 1}
          >
            Reset
          </button>
          <button
            type="button"
            className="transition-all text-white bg-blue-600 hover:bg-blue-700 col-span-2 py-3 rounded-md font-semibold"
            onClick={() => {
              dispatch({
                type: dispatchType,
                payload: {
                  [mode]: filter,
                },
              });
              return closeModal({
                visible: false, data: [], title: '', mode: modalMode,
              });
            }}
          >
            Terapkan
          </button>
        </div>
      </section>
    </>
  );
}
