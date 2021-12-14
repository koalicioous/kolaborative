import Head from 'next/head';
import { ReactElement } from 'react';
import BasicLayout from '../../components/layout/base/basic-layout';
// import ProjectItem from '../../components/projects/project-item';
import Unauthorized from '../../components/auth/unauthorized';
import { useAuth } from '../../context/auth';

export default function Saved() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>
          Saved Projects - Kolaborative
        </title>
      </Head>
      {
        user
          ? (
            <div className="max-w-lg mx-auto px-5 py-4 bg-white flex-grow">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                <h1 className="ml-2 font-bold text-blue-700">
                  Saved Projects
                </h1>
              </div>
              {/* <ProjectItem className="mt-4" />
              <ProjectItem className="mt-4" />
              <ProjectItem className="mt-4" />
              <ProjectItem className="mt-4" />
              <ProjectItem className="mt-4" /> */}
            </div>
          ) : <Unauthorized />
      }
    </>
  );
}

Saved.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};
