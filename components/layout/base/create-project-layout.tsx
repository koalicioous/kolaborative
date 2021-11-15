import { FC } from 'react';
import CreateProjectHeader from '../header/create-project-header';
import CreateProjectAction from '../navbar/create-project-action';

const CreateProjectLayout : FC = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <CreateProjectHeader />
    <main className="flex-1 py-12 bg-gray-100">
      { children }
    </main>
    <CreateProjectAction />
  </div>
);

export default CreateProjectLayout;
