import {
  SetStateAction,
  Dispatch,
  useEffect,
  useState,
} from 'react';
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
    data: Major[] | Skill[] | Event[],
    mode: FilterModalMode,
}

export default function SearchFilterModal({
  closeModal,
  data,
  title,
  mode,
}: SearchFilterModalProps) {
  const [filter, setFilter] = useState<Major[]|Skill[]|Event[]>([]);
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const [modalMode] = useState<FilterModalMode>(mode);
  const { filters } = useFilterStore();

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
    // (() => {
    //   switch (modalMode) {
    //     case FilterModalMode.Jurusan:
    //       return setModalMode(FilterModalMode.Jurusan);
    //     case FilterModalMode.Keahlian:
    //       return setMode(FilterModalMode.Keahlian);
    //     case FilterModalMode.Event:
    //       return setMode(FilterModalMode.Event);
    //     default:
    //       return false;
    //   }
    // })();
    (() => {
      const ids: string[] = [...filters[mode].map((item: Major | Skill | Event) => item.id)];
      const activeFilters: Major[] | Skill[] | Event[] = data.filter(
        (item) => ids.includes(item.id),
      );
      return setFilter(activeFilters);
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
          <ul>
            {
              data.map((item) => (
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
                              [...filter.filter((removeTarget) => removeTarget.id !== item.id)],
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
          <button type="button" className="text-blue-600 hover:bg-blue-50 py-3 rounded-md">
            Reset
          </button>
          <button type="button" className="transition-all text-white bg-blue-600 hover:bg-blue-700 col-span-2 py-3 rounded-md font-semibold">
            Terapkan
          </button>
        </div>
      </section>
    </>
  );
}
