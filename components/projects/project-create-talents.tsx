export default function ProjectCreateTalents() {
  return (
    <section className="max-w-lg mx-auto bg-white p-3">
      <div className="border-b border-gray-100 p-3">
        <div className="grid grid-cols-4 gap-3">
          <label htmlFor="name" className="block col-span-3">
            <div>
              <span className="text-sm font-medium text-gray-700">
                Jurusan
              </span>
              <span className="text-red-500">*</span>
            </div>
            <input id="name" type="text" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" placeholder="Pilih jurusan yang kamu butuhkan" />
          </label>
          <label htmlFor="amount" className="block">
            <div>
              <span className="text-sm font-medium text-gray-700">
                Jumlah
              </span>
              <span className="text-red-500">*</span>
            </div>
            <input id="amount" type="number" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" placeholder="Jumlah" />
          </label>
        </div>
        <label htmlFor="jobDescription" className="block mt-3">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Deskripsi Tugas
            </span>
            <span className="text-red-500">*</span>
          </div>
          <textarea id="jobDescription" rows={5} className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white" placeholder="Jelaskan pekerjaan yang perlu dilakukan" />
        </label>
        <label htmlFor="name" className="block col-span-3">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Keahlian yang diharapkan
            </span>
          </div>
          <input id="name" type="text" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" placeholder="Klik untuk menambah" />
        </label>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button type="button">
            Hapus
          </button>
          <button type="button" className="p-2 rounded-md border border-blue-500 text-blue-600">
            Simpan
          </button>
        </div>
      </div>
      <button type="button" className="p-3 rounded-md bg-blue-50 text-blue-600 w-full mt-3 text-sm">
        + Tambah Kebutuhan Talenta
      </button>
    </section>
  );
}
