import type { NextPage } from 'next'
import Head from 'next/head'
import MainHeader from '../components/layout/header/main-header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Kolaborative - Temukan Proyek Seru untuk Asah Keahlianmu
        </title>  
      </Head>

      <MainHeader />

      <main className="text-xl font-bold text-yellow-800">
        Ini main
      </main>

      <footer>
        Ini footer
      </footer>
    </div>
  )
}

export default Home
