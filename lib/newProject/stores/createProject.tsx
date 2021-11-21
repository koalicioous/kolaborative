import {
  useContext,
  createContext,
  useReducer,
  ReactElement,
} from 'react';
import { InitialState } from '../data/project';
import NewProjectReducer from '../reducers/new-project-reducer';

const NewProjectContext = createContext<any>({});
NewProjectContext.displayName = 'New Project Context';

export const useStore = () => useContext(NewProjectContext);

export function NewProjectStoreProvider({ children } : {children: ReactElement[]}) {
  const [project, dispatch] = useReducer(NewProjectReducer, InitialState);
  return (
    <NewProjectContext.Provider value={{ project, dispatch }}>
      {children}
    </NewProjectContext.Provider>
  );
}
