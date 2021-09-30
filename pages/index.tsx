import { ReactElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BasicLayout from '../components/layout/base/basic-layout';
import HomePageTab from '../components/tabs/homepage-tab';
import { MODE_TALENT } from '../constants/global';
import HomePageTalent from '../components/home/homepage-talent';
import HomePageOwner from '../components/home/homepage-owner';

export default function Home() {
  const { query } = useRouter();
  const mode: string = query.mode as string;
  const isTalentMode: boolean = mode ? mode === MODE_TALENT : true;

  return (
    <>
      <Head>
        <title>
          Kolaborative - Temukan Proyek Seru untuk Asah Keahlianmu
        </title>
      </Head>

      <HomePageTab mode={mode} />
      {
        isTalentMode
          ? <HomePageTalent />
          : <HomePageOwner />
      }
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  );
};
