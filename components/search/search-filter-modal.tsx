import { SetStateAction, Dispatch, useEffect } from 'react';
import {
  FilterProp,
  Major,
  Skill,
  Event,
} from '../../lib/filterProject/data/filters';

interface SearchFilterModalProps {
    closeModal: Dispatch<SetStateAction<FilterProp>>,
    title: string,
    data: Major[] | Skill[] | Event[],
}

export default function SearchFilterModal({ closeModal, data, title }: SearchFilterModalProps) {
  useEffect(() => {
    (() => {
      const BG = document.getElementById('background');
      BG?.addEventListener('click', () => {
        closeModal({ visible: false, data: [], title: '' });
      });
      return BG?.removeEventListener('click', () => {
        closeModal({ visible: false, data: [], title: '' });
      });
    })();
  }, []);

  return (
    <>
      <div id="background" className="fixed top-0 w-screen h-screen z-30 bg-black bg-opacity-75" />
      <section className="fixed flex flex-col w-full bottom-0 max-w-lg mx-auto p-4 rounded-t-lg bg-white shadow-lg z-30" style={{ left: '50%', transform: 'translateX(-50%)', maxHeight: '50vh' }}>
        <div className="flex items-center justify-between pb-3">
          <h1 className="font-semibold text-blue-700 text-xl">
            Filter
            {` ${title}`}
          </h1>
          <button
            type="button"
            className="transition-all transform rotate-45 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-200 font-bold text-gray-700"
            onClick={() => {
              closeModal({ visible: false, data: [], title: '' });
            }}
          >
            +
          </button>
        </div>
        <div className="overflow-auto pb-4">
          <ul>
            {
              data.map((item) => (
                <li key={item.id} className="my-2">
                  <label htmlFor={item.id} className="flex items-center">
                    <input type="checkbox" name={title} id={item.id} className="w-4 h-4" />
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
