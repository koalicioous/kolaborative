import { ReactElement } from 'react'
import Head from 'next/head'
import BasicLayout from '../components/layout/base/basic-layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Kolaborative - Temukan Proyek Seru untuk Asah Keahlianmu
        </title>  
      </Head>

      <ul className="grid grid-cols-2">
        <li>
          <button className="p-4 w-full text-center font-bold text-indigo-900 text-sm">
            Mencari Proyek
          </button>
        </li>
        <li>
          <button className="p-4 w-full text-center bg-indigo-100 text-indigo-900 text-sm">
            Mencari Talent
          </button>
        </li>
      </ul>
      <section>
        <div className="p-5">
          <h1 className="font-bold text-indigo-700 text-xl text-center">
            🔥 Temukan Proyek Seru 🔥 <br /> untuk Asah Keahlianmu
          </h1>
          <p className="mt-2 text-indigo-700 text-xs text-center">
            Lebih suka direkrut saja? <a href="" className="font-bold">Klik di sini untuk daftar jadi Top Talent</a>
          </p>
        </div>
        <div className="px-5">
          <h2 className="text-sm font-bold text-indigo-700">
            📝 Lihat proyek di jurusan kuliahmu
          </h2>
          <ul className="grid grid-cols-2 gap-3 mt-4">
            <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Informatika</li>
            <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Ilmu Ekonomi</li>
            <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Ilmu Komunikasi</li>
            <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Sastra Inggris</li>
            <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Arsitektur</li>
            <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Statistika</li>
          </ul>
          <div className="mt-4 text-center">
            <a href="" className="inline-block text-indigo-700 text-xs">
              Lihat semua jurusan (131)
            </a>
          </div>
        </div>
        <div className="p-4 bg-indigo-100 mt-4 mx-5 rounded-lg">
          <h2 className="text-sm font-bold text-indigo-700">
            Jenis Proyek Populer 🔥
          </h2>
          <ul className="grid grid-cols-3 gap-3 text-sm mt-3 -mx-6">
            <li className="text-center rounded-lg px-2 py-6 bg-indigo-900 text-white font-bold flex items-center justify-center">Pekan Kreativitas Mahasiswa</li>
            <li className="text-center rounded-lg px-2 py-6 bg-indigo-900 text-white font-bold flex items-center justify-center">Business Case Competition</li>
            <li className="text-center rounded-lg px-2 py-6 bg-indigo-900 text-white font-bold flex items-center justify-center">Hackathon</li>
          </ul>
          <div className="mt-2 text-center">
            <a href="" className="inline-block text-indigo-700 text-xs">
              Lihat semua jenis proyek (131)
            </a>
          </div>
        </div>
        <div className="mt-4 px-5">
          <h2 className="text-sm font-bold text-indigo-700">
            Proyek membutuhkan keahlianmu ✍🏻
          </h2>
          <ul className="mt-4 flex flex-wrap">
            <li className="text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2 px-4 py-2 rounded-full">Web Programming</li>
            <li className="text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2 px-4 py-2 rounded-full">menulis laporan</li>
            <li className="text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2 px-4 py-2 rounded-full">Desain Grafis</li>
            <li className="text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2 px-4 py-2 rounded-full">menulis laporan</li>
            <li className="text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2 px-4 py-2 rounded-full">Desain Grafis</li>
            <li className="text-xs bg-indigo-100 text-indigo-800 mr-2 mb-2 px-4 py-2 rounded-full">Web Programming</li>
          </ul>
        </div>
        <div className="mt-4 px-5 py-4 border-t-2">
          <h2 className="text-sm font-bold text-indigo-700">
            Deadline Sebentar Lagi ⏱
          </h2>
          <div>
            <div className="mt-4 p-2 shadow-md border rounded-lg">
              <div className="flex justify-between">
                <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
                <span className="text-xs">15 September 2021</span>
              </div>
              <h3 className="mt-2 text-sm font-bold text-indigo-700">
                Karya Cipta: Mesin Pembersih Air Bertenaga Surya
              </h3>
              <p className="mt-5 text-xs">Mencari <b>3 Talenta</b> dari <b>Informatika, Ekonomi</b></p>
            </div>
            <div className="mt-4 p-2 shadow-md border rounded-lg">
              <div className="flex justify-between">
                <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
                <span className="text-xs">15 September 2021</span>
              </div>
              <h3 className="mt-2 text-sm font-bold text-indigo-700">
                Karya Cipta: Mesin Pembersih Air Bertenaga Surya
              </h3>
              <p className="mt-5 text-xs">Mencari <b>3 Talenta</b> dari <b>Informatika, Ekonomi</b></p>
            </div>
            <div className="mt-4 p-2 shadow-md border rounded-lg">
              <div className="flex justify-between">
                <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
                <span className="text-xs">15 September 2021</span>
              </div>
              <h3 className="mt-2 text-sm font-bold text-indigo-700">
                Karya Cipta: Mesin Pembersih Air Bertenaga Surya
              </h3>
              <p className="mt-5 text-xs">Mencari <b>3 Talenta</b> dari <b>Informatika, Ekonomi</b></p>
            </div>
            <div className="mt-4 p-2 shadow-md border rounded-lg">
              <div className="flex justify-between">
                <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
                <span className="text-xs">15 September 2021</span>
              </div>
              <h3 className="mt-2 text-sm font-bold text-indigo-700">
                Karya Cipta: Mesin Pembersih Air Bertenaga Surya
              </h3>
              <p className="mt-5 text-xs">Mencari <b>3 Talenta</b> dari <b>Informatika, Ekonomi</b></p>
            </div>
            <div className="mt-4 p-2 shadow-md border rounded-lg">
              <div className="flex justify-between">
                <span className="text-xs px-4 py-1 bg-gray-200 rounded-md">PKM</span>
                <span className="text-xs">15 September 2021</span>
              </div>
              <h3 className="mt-2 text-sm font-bold text-indigo-700">
                Karya Cipta: Mesin Pembersih Air Bertenaga Surya
              </h3>
              <p className="mt-5 text-xs">Mencari <b>3 Talenta</b> dari <b>Informatika, Ekonomi</b></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BasicLayout>
      {page}
    </BasicLayout>
  )
}
