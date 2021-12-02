/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import 'tailwindcss/tailwind.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import '../lib/styles/global.css';

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
  palette: {
    primary: {
      main: '#2564eb',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>,
  );
}
