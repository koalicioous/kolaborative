import Link from 'next/link';

export default function TalentHomePageWelcome() {
  return (
    <div className="max-w-lg m-auto p-5 bg-white">
      <h1 className="font-bold text-indigo-700 text-xl text-center">
        🔥 Temukan Proyek Seru 🔥
        <br />
        untuk Asah Keahlianmu
      </h1>
      <p className="mt-2 text-indigo-700 text-xs text-center">
        Lebih suka direkrut saja?
        <Link href="/">
          <a className="font-bold">
            Klik di sini untuk daftar jadi Top Talent
          </a>
        </Link>
      </p>
    </div>
  );
}
