export default function ProjectCreateDetail() {
  return (
    <section className="max-w-lg mx-auto bg-white p-3">
      <label htmlFor="name" className="block">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Nama Proyek
          </span>
          <span className="text-red-500">*</span>
        </div>
        <input id="name" type="text" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" placeholder="Ketik nama proyekmu" />
      </label>
      <label htmlFor="private" className="flex items-center mt-2">
        <input id="private" type="checkbox" />
        <span className="ml-2 text-xs font-medium text-gray-800">
          Hanya tampilkan kepada pengguna di institusi saya
        </span>
      </label>
      <label htmlFor="event" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Event (Optional)
          </span>
        </div>
        <input id="event" type="text" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" placeholder="Event yang diikuti proyek ini" />
      </label>
      <label htmlFor="deadline" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Batas akhir pendaftaran
          </span>
          <span className="text-red-500">*</span>
        </div>
        <input id="deadline" type="date" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white" placeholder="Event yang diikuti proyek ini" />
      </label>
      <label htmlFor="description" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Deskripsi Proyek
          </span>
          <span className="text-red-500">*</span>
        </div>
        <textarea id="description" rows={10} className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white" placeholder="Event yang diikuti proyek ini" />
      </label>
      <label htmlFor="event" className="block mt-3">
        <div>
          <span className="text-sm font-medium text-gray-700">
            Tujuan Proyek
          </span>
        </div>
        <input id="event" type="text" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full" placeholder="Tujuan atau keluaran yang akan dicapai" />
      </label>
      <button type="button" className="rounded-md bg-blue-50 border border-blue-100 p-2 mt-2 text-center w-full text-xs text-blue-500 font-semibold">
        + Tambah tujuan proyek
      </button>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <label htmlFor="startDate" className="block">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Tanggal Mulai Proyek
            </span>
          </div>
          <input id="startDate" type="date" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white" placeholder="Event yang diikuti proyek ini" />
        </label>
        <label htmlFor="finishDate" className="block">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Tanggal Selesai Proyek
            </span>
          </div>
          <input id="finishDate" type="date" className="px-2 py-3 text-sm rounded-md border border-gray-200 mt-1 w-full bg-white" placeholder="Event yang diikuti proyek ini" />
        </label>
      </div>
      <div className="mt-3 py-3 border-t border-gray-100">
        <button type="button" className="w-full p-2 border rounded-md bg-red-100 border-red-200 text-sm text-red-800 font-semibold">
          Hapus Proyek
        </button>
      </div>
    </section>
  );
}
