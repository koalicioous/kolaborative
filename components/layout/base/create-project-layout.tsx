import { FC } from 'react';
import CreateProjectHeader from '../header/create-project-header';
import CreateProjectAction from '../navbar/create-project-action';
import { NewProjectStoreProvider } from '../../../lib/newProject/stores/createProject';

const CreateProjectLayout : FC = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NewProjectStoreProvider>
      <CreateProjectHeader />
      <main className="flex-1 pt-12 pb-16 bg-gray-100">
        { children }
      </main>
      <CreateProjectAction />
    </NewProjectStoreProvider>
  </div>
);

export default CreateProjectLayout;
