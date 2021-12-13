import { ReactNode, useState } from 'react';
import CreateProjectHeader from '../header/create-project-header';
import CreateProjectAction from '../navbar/create-project-action';
import { NewProjectStoreProvider } from '../../../lib/newProject/stores/createProject';

interface CreateProjectLayoutProps {
  children: ReactNode | ReactNode[];
}

export default function CreateProjectLayout({ children }: CreateProjectLayoutProps) {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-col min-h-screen">
      <NewProjectStoreProvider>
        <CreateProjectHeader />
        <main className="flex-1 pt-12 pb-16 bg-gray-100 ">
          {
            loading
            && (
              <div className="transition-all backdrop-blur-sm filter p-5 absolute w-full h-full" style={{ zIndex: 98 }} />
            )
          }
          { children }
        </main>
        <CreateProjectAction loading={loading} setLoading={setLoading} />
      </NewProjectStoreProvider>
    </div>
  );
}

// export default CreateProjectLayout;
