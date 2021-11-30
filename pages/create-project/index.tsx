import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material';
import CreateProjectLayout from '../../components/layout/base/create-project-layout';
// import ProjectCreateDetail from '../../components/projects/project-create-detail';
import ProjectCreateDetailMaterial from '../../components/projects/project-create-detail-material';
import { STEP_DETAIL } from '../../constants/global';
import CreateProjectTab from '../../components/tabs/create-project-tab';
import ProjectCreateTalents from '../../components/projects/project-create-talents';

const theme = createTheme({
  typography: {
    fontFamily: [
      // 'Quicksand',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function CreateProject() {
  const { query } = useRouter();
  const step: string = query.step as string;
  const isDetailStep: boolean = step ? step === STEP_DETAIL : true;

  return (
    <>
      <Head>
        <title>
          Create New Project — Kolaborative
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CreateProjectTab step={step} />
        {
          isDetailStep
            ? <ProjectCreateDetailMaterial />
            : <ProjectCreateTalents />
        }
      </ThemeProvider>
    </>
  );
}

CreateProject.getLayout = function getLayout(page: ReactElement) {
  return (
    <CreateProjectLayout>
      {page}
    </CreateProjectLayout>
  );
};
