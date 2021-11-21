import {
  useContext,
  createContext,
  useReducer,
  ReactElement,
} from 'react';
import { InitialFilters } from '../data/filters';
import FilterReducer from '../reducers/fiter-reducer';

const FilterContext = createContext<any>({});
FilterContext.displayName = 'Filters Context';

export const useFilterStore = () => useContext(FilterContext);

export function FiltersContextProvider({ children } : {children: ReactElement | ReactElement[] }) {
  const [filters, dispatch] = useReducer(FilterReducer, InitialFilters);
  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
