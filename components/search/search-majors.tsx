export default function SearchMajors() {
  return (
    <section className="max-w-lg mx-auto bg-white px-5 py-4">
      <h2 className="text-sm font-bold text-indigo-700">
        📝 Cari proyek berdasarkan jurusan terpopuler
      </h2>
      <ul className="mt-4 grid grid-cols-2 gap-3">
        <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Informatika</li>
        <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Ilmu Ekonomi</li>
        <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Ilmu Komunikasi</li>
        <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Sastra Inggris</li>
        <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Arsitektur</li>
        <li className="p-3 shadow-md border text-center rounded-lg font-bold text-sm">Statistika</li>
      </ul>
    </section>
  );
}
