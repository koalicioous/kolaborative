import { ReactElement } from 'react'
import Head from 'next/head'
import BasicLayout from '../components/layout/base/basic-layout'
import TalentHomePageWelcome from '../components/home/talent-homepage-welcome'
import TalentHomePageMajors from '../components/home/talent-homepage-majors'
import TalentHomePageProjectTypes from '../components/home/talent-homepage-project-types'
import TalentHomePageSkills from '../components/home/talent-homepage-skills'
import TalentHomePageProjects from '../components/home/talent-homepage-projects'
import HomePageTab from '../components/tabs/homepage-tab'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Kolaborative - Temukan Proyek Seru untuk Asah Keahlianmu
        </title>  
      </Head>

      <HomePageTab />
      <section>
        <TalentHomePageWelcome />
        <TalentHomePageMajors />
        <TalentHomePageProjectTypes />
        <TalentHomePageSkills />
        <TalentHomePageProjects />
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  )
}
